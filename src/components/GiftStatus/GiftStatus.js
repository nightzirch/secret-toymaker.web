import Card from "@/components/Card";
import { Paragraph, Title } from "@/components/Typography";
import {
  dispatchWithCustomLoading,
  generateCustomGiftLoadingKey,
} from "@/utils/loading";
import ActionTypes from "@/utils/types/ActionTypes";
import GiftDirectionTypes from "@/utils/types/GiftDirectionTypes";
import GiftStatusTypes from "@/utils/types/GiftStatusTypes";
import StageTypes from "@/utils/types/StageTypes";
import classnames from "classnames";
import Image from "next/image";
import t from "prop-types";
import React, { useEffect, useGlobal, useState } from "reactn";
import { GiftStatusIllustrations } from "./utils/constants";

const GiftDirectionTypesArray = Object.keys(GiftDirectionTypes).map(
  (s) => GiftDirectionTypes[s]
);
const GIFT_STATUS_ARRAY = Object.keys(GiftStatusTypes).map(
  (s) => GiftStatusTypes[s]
);

const GiftStatus = (props) => {
  const { direction, eventStageType, gift } = props;
  const { id, match, notes, received, sent, year } = gift;
  const [loading] = useGlobal("loading");
  const [status, setStatus] = useState(null);
  const [isButtonVisible, setButtonVisible] = useState(false);
  const loadingKey = generateCustomGiftLoadingKey(id);

  useEffect(() => {
    if (received) {
      setStatus(GiftStatusTypes.RECEIVED);
    } else if (sent) {
      setStatus(GiftStatusTypes.SENT);
    } else {
      setStatus(GiftStatusTypes.PACKING);
    }
  }, [received, sent]);

  useEffect(() => {
    if (eventStageType === StageTypes.GIFTING) {
      if (direction === GiftDirectionTypes.OUTGOING) {
        setButtonVisible(
          [GiftStatusTypes.PACKING, GiftStatusTypes.SENT].includes(status)
        );
      } else if (direction === GiftDirectionTypes.INCOMING) {
        setButtonVisible(
          [
            GiftStatusTypes.PACKING,
            GiftStatusTypes.SENT,
            GiftStatusTypes.RECEIVED,
          ].includes(status)
        );
      }
    }
  }, [direction, status]);

  const activeIndex = GIFT_STATUS_ARRAY.findIndex((index) => index === status);

  const handleSentClick = () => {
    const isSent = status === GiftStatusTypes.PACKING;
    dispatchWithCustomLoading(
      ActionTypes.SEND_GIFT,
      loadingKey,
      id,
      isSent,
      year
    );
  };

  const handleReceivedClick = () => {
    const isReceived = [GiftStatusTypes.PACKING, GiftStatusTypes.SENT].includes(
      status
    );
    dispatchWithCustomLoading(
      ActionTypes.RECEIVE_GIFT,
      loadingKey,
      id,
      isReceived,
      year
    );
  };

  const renderTitle = () => (
    <div className="gift-status__title">
      <Title level="tertiary">
        <span className="gift-status__title__pre">
          {`${direction === GiftDirectionTypes.INCOMING ? "From" : "To"}:`}
        </span>
        {match}
      </Title>
    </div>
  );

  const renderNotes = () => (
    <div className="gift-status__notes">
      <Title level="tertiary" className="gift-status__notes__pre">
        {`${
          direction === GiftDirectionTypes.INCOMING ? "Your notes" : "Notes"
        }:`}
      </Title>
      <Paragraph>{notes}</Paragraph>
    </div>
  );

  const renderTimeline = () => (
    <div className="gift-status__timeline">
      <div className="gift-status__dots">
        {GIFT_STATUS_ARRAY.map((s, i) => (
          <React.Fragment key={s}>
            <span
              className={classnames(
                "gift-status__dot",
                `gift-status__dot--${s}`,
                {
                  "gift-status__dot--active": i < activeIndex + 1,
                  "gift-status__dot--complete": i < activeIndex,
                }
              )}
            >
              <span className="gift-status__dot__label-wrapper" key={s}>
                <span className="gift-status__dot__label">
                  {GiftStatusIllustrations[s].text}
                </span>
              </span>
            </span>

            {i < GIFT_STATUS_ARRAY.length - 1 && (
              <span
                className={classnames("gift-status__timeline__line", {
                  "gift-status__timeline__line--active": i < activeIndex,
                })}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );

  const renderIllustrations = () => (
    <div className="gift-status__illustrations">
      {GIFT_STATUS_ARRAY.map(
        (s, i) =>
          i < activeIndex + 1 && (
            <div
              className={classnames(
                "gift-status__illustration",
                `gift-status__illustration--${s}`,
                {
                  "gift-status__illustration--inactive": i < activeIndex,
                }
              )}
              key={s}
            >
              <Image
                alt={GiftStatusIllustrations[s].text}
                title={GiftStatusIllustrations[s].text}
                src={GiftStatusIllustrations[s].imgUrl}
                width={GiftStatusIllustrations[s].width}
                height={GiftStatusIllustrations[s].height}
              />
            </div>
          )
      )}
    </div>
  );

  const cardProps = { isLoading: loading[loadingKey] };

  if (isButtonVisible) {
    if (direction === GiftDirectionTypes.OUTGOING) {
      cardProps.onButtonClick = handleSentClick;

      if (status === GiftStatusTypes.PACKING) {
        cardProps.buttonLabel = "Mark as sent";
      } else if (status === GiftStatusTypes.SENT) {
        cardProps.buttonLabel = "Undo mark as sent";
        cardProps.buttonTheme = "danger";
      }
    } else if (direction === GiftDirectionTypes.INCOMING) {
      cardProps.onButtonClick = handleReceivedClick;

      if ([GiftStatusTypes.PACKING, GiftStatusTypes.SENT].includes(status)) {
        cardProps.buttonLabel = "Mark as received";
      } else if (status === GiftStatusTypes.RECEIVED) {
        cardProps.buttonLabel = "Undo mark as received";
        cardProps.buttonTheme = "danger";
      }
    }
  }

  return status ? (
    <div
      className={classnames(
        "gift-status",
        `gift-status--${status}`,
        `gift-status--${direction}`,
        {
          "gift-status--complete": activeIndex === GIFT_STATUS_ARRAY.length - 1,
        }
      )}
    >
      <Card className="gift-status__card" {...cardProps}>
        {renderTitle()}
        {renderNotes()}
        {renderTimeline()}
        {renderIllustrations()}
      </Card>
    </div>
  ) : null;
};

GiftStatus.propTypes = {
  eventStageType: t.oneOf(Object.values(StageTypes)),
  direction: t.oneOf(GiftDirectionTypesArray).isRequired,
  gift: t.object.isRequired,
};

GiftStatus.defaultProps = {
  eventStageType: StageTypes.INACTIVE,
};

export default GiftStatus;
