import classnames from "classnames";
import { Paragraph } from "components/Typography";
import t from "prop-types";
import React, { useEffect, useState } from "react";
import "./LoadingIndicator.scss";

const LoadingIndicator = props => {
  const { message } = props;
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 500);
  }, []);

  return (
    <div
      className={classnames("loading-indicator", {
        "loading-indicator--visible": isVisible
      })}
    >
      <div className="loading-indicator__x-axis">
        <div className="loading-indicator__y-axis">
          <img
            src="/images/logo-large.png"
            alt="Loading indicator"
            title="Loading indicator"
          />
        </div>
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
