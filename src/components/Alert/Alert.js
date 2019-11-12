import Card from "components/Card";
import { Paragraph } from "components/Typography";
import classnames from "classnames";
import PropTypes from "prop-types";
import React, { useState } from "reactn";
import "./Alert.scss";

const Alert = props => {
  const { children } = props;
  const [isClosing, setIsClosing] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  const handleCloseClick = () => {
    setIsClosing(true);
    setTimeout(() => setIsClosed(true), 500);
  };

  return !isClosed ? (
    <Card className={classnames("alert", { "alert--closing": isClosing })}>
      <div className="alert__content">
        <Paragraph colorScheme="white" noMargin>
          {children}
        </Paragraph>
      </div>
      <button className="alert__close-button" onClick={handleCloseClick}>
        <span className="ion-close alert__close" />
      </button>
    </Card>
  ) : null;
};

Alert.propTypes = {
  children: PropTypes.node
};

export default Alert;
