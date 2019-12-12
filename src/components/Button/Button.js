import classnames from "classnames";
import t from "prop-types";
import React from "reactn";
import "./Button.scss";

const Button = props => {
  const {
    icon,
    iconPlacement,
    isCentered,
    isDisabled,
    isFullWidth,
    isLoading,
    title,
    type,
    onClick,
    size,
    theme
  } = props;

  const containerClasses = classnames("button-container", {
    "button-container--centered": isCentered
  });

  const buttonClasses = classnames(
    "button",
    `button--${theme}`,
    `button--${size}`,
    `button--${type}`,
    {
      [`button--with-icon button--with-icon-${iconPlacement}`]: !!icon,
      "button--full-width": isFullWidth,
      "button--loading": isLoading
    }
  );

  const renderLoading = () =>
    isLoading && (
      <div className="button__loading">
        <span className="button__loading__dots" />
      </div>
    );

  const renderTitle = () => (
    <div className="button__title">
      {icon && <span className="button__icon">{icon}</span>}
      {title}
    </div>
  );

  return (
    <div className={containerClasses}>
      <button
        className={buttonClasses}
        disabled={isDisabled || isLoading}
        type={type}
        onClick={onClick}
      >
        {renderLoading()}
        {renderTitle()}
      </button>
    </div>
  );
};

Button.propTypes = {
  icon: t.oneOfType([t.object, t.element, t.bool]),
  iconPlacement: t.oneOf(["left", "right"]),
  isCentered: t.bool,
  isDisabled: t.bool,
  isFullWidth: t.bool,
  isLoading: t.bool,
  title: t.string.isRequired,
  type: t.oneOf(["button", "submit"]),
  onClick: t.func,
  size: t.oneOf(["small", "medium", "large"]),
  theme: t.oneOf(["primary", "secondary", "danger"])
};

Button.defaultProps = {
  iconPlacement: "left",
  theme: "primary",
  size: "medium",
  type: "button"
};

export default Button;
