import classnames from "classnames";
import PropTypes from "prop-types";
import React from "reactn";
import "./Button.scss";

const Button = props => {
  let containerClasses = classnames("button-container", {
    "button-container--centered": props.isCentered
  });

  let buttonClasses = classnames(
    "button",
    `button--${props.theme}`,
    `button--${props.type}`,
    {
      "button--with-icon": !!props.icon
    }
  );

  let renderTitle = () => (
    <div className="button__title">
      {props.icon && <span className="button__icon">{props.icon}</span>}
      {props.title}
    </div>
  );

  return (
    <div className={containerClasses}>
      <button
        className={buttonClasses}
        disabled={props.isDisabled}
        type={props.type}
        onClick={props.onClick}
      >
        {renderTitle()}
      </button>
    </div>
  );
};

Button.propTypes = {
  icon: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.element,
    PropTypes.bool
  ]),
  isCentered: PropTypes.bool,
  isDisabled: PropTypes.bool,
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["button", "submit"]),
  onClick: PropTypes.func,
  theme: PropTypes.oneOf(["primary", "secondary", "tertiary", "danger"])
};

Button.defaultProps = {
  theme: "primary",
  type: "button"
};

export default Button;
