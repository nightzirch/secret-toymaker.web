import "countdown";
import moment from "moment";
import "moment-countdown";
import React, { useEffect, useGlobal, useState } from "reactn";
import "./Countdown.scss";
import CountdownBlock from "./CountdownBlock";
import { getCountdownTitle } from "./utils/utils";

const Countdown = props => {
  const [stage] = useGlobal("stage");
  const [countdownObject, setCountdownObject] = useState(null);
  const { end: stageEnd, type: stageType } = stage || {};

  const title = getCountdownTitle(stageType);

  useEffect(() => {
    if (stageEnd) {
      const timer = setInterval(() => {
        setCountdownObject(moment(stageEnd).countdown());
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [stageEnd]);

  const renderCountdown = () => {
    if (!countdownObject) return null;

    const { seconds, minutes, hours, days, months, years } = countdownObject;
    const countdownArray = [
      { label: "years", value: years },
      { label: "months", value: months },
      { label: "days", value: days },
      { label: "hours", value: hours },
      { label: "minutes", value: minutes },
      { label: "seconds", value: seconds }
    ];
    let firstValueIndex = 3; // Defaulting to show hours as the first value

    for (let i = 0; i < countdownArray.length - 1; i += 1) {
      if (countdownArray[i].value > 0) {
        firstValueIndex = i;
        break;
      }
    }

    countdownArray.splice(0, firstValueIndex);

    return countdownArray.map(({ label, value }) => (
      <CountdownBlock label={label} value={value} key={label} />
    ));
  };

  return stage && title ? (
    <div className="countdown">
      <span className="countdown__title">{title}</span>
      <div className="countdown__items">{renderCountdown()}</div>
    </div>
  ) : null;
};

export default Countdown;
