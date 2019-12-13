import classnames from "classnames";
import { Paragraph } from "components/Typography";
import t from "prop-types";
import React, { useEffect, useState } from "react";
import { getRandomInt } from "utils/random";
import "./LoadingIndicator.scss";

const LoadingIndicator = props => {
  const { message } = props;
  const [isAnimating, setAnimating] = useState(true);
  const [rotation, setRotation] = useState(-20);

  useEffect(() => {
    if (isAnimating) {
      setRotation(getRandomInt(-35, 0));
      setTimeout(() => {
        setAnimating(false);
      }, getRandomInt(250, 1500));
    } else {
      setRotation(getRandomInt(-15, -5));
      setTimeout(() => {
        setAnimating(true);
      }, getRandomInt(250, 1000));
    }
  }, [isAnimating]);

  return (
    <div
      className={classnames("loading-indicator", {
        "loading-indicator--animating": isAnimating
      })}
    >
      <div
        className="loading-indicator__rotate"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        <img
          src="/images/logo-large.png"
          alt="Loading indicator"
          title="Loading indicator"
        />
      </div>

      {message && (
        <Paragraph className="loading-indicator__message" isBold isCenter>
          {message}
        </Paragraph>
      )}
    </div>
  );
};

LoadingIndicator.propTypes = {
  message: t.string
};

export default LoadingIndicator;
