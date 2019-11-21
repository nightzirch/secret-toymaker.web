import classnames from "classnames";
import Card from "components/Card";
import { Title } from "components/Typography";
import t from "prop-types";
import React from "reactn";
import "./GiftStatus.scss";
import {
  GIFT_DIRECTION,
  GIFT_STATUS,
  GIFT_STATUS_ILLUSTRATIONS
} from "./utils/constants";

const GIFT_DIRECTION_ARRAY = Object.keys(GIFT_DIRECTION).map(
  s => GIFT_DIRECTION[s]
);
const GIFT_STATUS_ARRAY = Object.keys(GIFT_STATUS).map(s => GIFT_STATUS[s]);

const GiftStatus = props => {
  const { direction, gifter, status } = props;
  const activeIndex = GIFT_STATUS_ARRAY.findIndex(index => index === status);

  const handleButtonClick = () => {
    // TODO: Do proper stuff
    console.log("Button clicked");
  };

  const renderTitle = () => (
    <div className="gift-status__title">
      <Title level="tertiary">
        <span className="gift-status__title__pre">
          {direction === GIFT_DIRECTION.INCOMING ? "From" : "To"}:
        </span>
        {gifter}
      </Title>
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
                  {GIFT_STATUS_ILLUSTRATIONS[s].text}
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
                alt={GIFT_STATUS_ILLUSTRATIONS[s].text}
                title={GIFT_STATUS_ILLUSTRATIONS[s].text}
                src={GIFT_STATUS_ILLUSTRATIONS[s].imgUrl}
              />
            </div>
          )
      )}
    </div>
  );

  const renderButton = () => {
    if (status !== GIFT_STATUS.SENT) return;

    const markAs = direction === GIFT_DIRECTION.INCOMING ? "received" : "sent";

    return (
      <div className="gift-status__button-container">
        <button className="gift-status__button" onClick={handleButtonClick}>
          Mark as {markAs}
        </button>
      </div>
    );
  };

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
      <Card className="gift-status__content">
        {renderTitle()}
        {renderTimeline()}
        {renderIllustrations()}
      </Card>

      {renderButton()}
    </div>
  );
};

GiftStatus.propTypes = {
  gifter: t.string.isRequired,
  status: t.oneOf(GIFT_STATUS_ARRAY),
  direction: t.oneOf(GIFT_DIRECTION_ARRAY)
};

GiftStatus.defaultProps = {
  status: GIFT_STATUS.PACKING,
  direction: GIFT_DIRECTION.OUTGOING
};

export default GiftStatus;
