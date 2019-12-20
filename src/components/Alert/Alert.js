import classnames from "classnames";
import Card from "components/Card";
import { Paragraph } from "components/Typography";
import t from "prop-types";
import React, { useState } from "reactn";
import { dispatchWithLoading } from "utils/loading";
import ActionTypes from "utils/types/ActionTypes";
import AlertTypes from "utils/types/AlertTypes";
import "./Alert.scss";

const Alert = props => {
  const { children, id, isStatic, type } = props;
  const [isClosing, setIsClosing] = useState(false);

  const handleCloseClick = () => {
    setIsClosing(true);

    if (id) {
      setTimeout(() => {
        dispatchWithLoading(ActionTypes.CLOSE_ALERT, id);
      }, 500);
    }
  };

  const renderIcon = () => {
    let icon;

    switch (type) {
      case AlertTypes.DANGER:
        icon = <ion-icon name="nuclear" />;
        break;
      case AlertTypes.WARNING:
        icon = <ion-icon name="warning" />;
        break;
      case AlertTypes.INFO:
        icon = <ion-icon name="information-circle-outline" />;
        break;
      default:
        break;
    }

    return icon && <span className="alert__icon">{icon}</span>;
  };

  return (
    <Card
      className={classnames("alert", `alert--${type}`, {
        "alert--closing": isClosing
      })}
    >
      <div className="alert__content">
        {renderIcon()}
        <Paragraph noMargin>{children}</Paragraph>
      </div>

      {!isStatic && (
        <button
          className="alert__close-button"
          onClick={handleCloseClick}
          type="button"
        >
          <ion-icon class="alert__close" name="close" />
        </button>
      )}
    </Card>
  );
};

Alert.propTypes = {
  children: t.node,
  id: t.string,
  isStatic: t.bool,
  type: t.oneOf(Object.values(AlertTypes)).isRequired
};

export default Alert;
