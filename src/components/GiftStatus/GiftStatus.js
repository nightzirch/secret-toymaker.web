import classnames from "classnames";
import Card from "components/Card";
import { Paragraph, Title } from "components/Typography";
import t from "prop-types";
import React from "reactn";
import { dispatchWithLoading } from "utils/loading";
import ActionTypes from "utils/types/ActionTypes";
import GiftDirectionTypes from "utils/types/GiftDirectionTypes";
import GiftStatusTypes from "utils/types/GiftStatusTypes";
import "./GiftStatus.scss";
import { GiftStatusIllustrations } from "./utils/constants";

const GiftDirectionTypesArray = Object.keys(GiftDirectionTypes).map(
  s => GiftDirectionTypes[s]
);
const GIFT_STATUS_ARRAY = Object.keys(GiftStatusTypes).map(
  s => GiftStatusTypes[s]
);

const GiftStatus = props => {
  const { direction, gift } = props;
  const { id, match, notes } = gift;

  // TODO: Use proper data from the gift object
  const isButtonHidden = false;
  const status = GiftStatusTypes.PACKING;

  const activeIndex = GIFT_STATUS_ARRAY.findIndex(index => index === status);

  const handleSentClick = () => {
    const isSent = status === GiftStatusTypes.PACKING;
    dispatchWithLoading(ActionTypes.SEND_GIFT, id, isSent);
  };

  const handleReceivedClick = () => {
    const isReceived = status === GiftStatusTypes.SENT;
    dispatchWithLoading(ActionTypes.RECEIVE_GIFT, id, isReceived);
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
        Notes:
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
                  "gift-status__dot--complete": i < activeIndex
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
                  "gift-status__timeline__line--active": i < activeIndex
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
                  "gift-status__illustration--inactive": i < activeIndex
                }
              )}
              key={s}
            >
              <img
                alt={GiftStatusIllustrations[s].text}
                title={GiftStatusIllustrations[s].text}
                src={GiftStatusIllustrations[s].imgUrl}
              />
            </div>
          )
      )}
    </div>
  );

  let buttonProps = {};

  if (!isButtonHidden) {
    if (
      direction === GiftDirectionTypes.OUTGOING &&
      status === GiftStatusTypes.PACKING
    ) {
      buttonProps = {
        buttonLabel: "Mark as sent",
        onButtonClick: handleSentClick
      };
    } else if (
      direction === GiftDirectionTypes.INCOMING &&
      status === GiftStatusTypes.SENT
    ) {
      buttonProps = {
        buttonLabel: "Mark as received",
        onButtonClick: handleReceivedClick
      };
    }
  }

  return (
    <div
      className={classnames(
        "gift-status",
        `gift-status--${status}`,
        `gift-status--${direction}`,
        {
          "gift-status--complete": activeIndex === GIFT_STATUS_ARRAY.length - 1
        }
      )}
    >
      <Card className="gift-status__card" {...buttonProps}>
        {renderTitle()}
        {renderNotes()}
        {renderTimeline()}
        {renderIllustrations()}
      </Card>
    </div>
  );
};

GiftStatus.propTypes = {
  gift: t.object.isRequired,
  direction: t.oneOf(GiftDirectionTypesArray).isRequired
};

export default GiftStatus;
