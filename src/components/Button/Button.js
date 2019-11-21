import classnames from "classnames";
import t from "prop-types";
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
  icon: t.oneOfType([
    t.object,
    t.element,
    t.bool
  ]),
  isCentered: t.bool,
  isDisabled: t.bool,
  title: t.string.isRequired,
  type: t.oneOf(["button", "submit"]),
  onClick: t.func,
  theme: t.oneOf(["primary", "secondary", "tertiary", "danger"])
};

Button.defaultProps = {
  theme: "primary",
  type: "button"
};

export default Button;
