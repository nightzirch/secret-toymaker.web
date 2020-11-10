import classnames from "classnames";
import t from "prop-types";
import React from "reactn";

const Card = (props) => {
  const {
    buttonLabel,
    buttonTheme,
    children,
    className,
    isLoading,
    onButtonClick,
    ...rest
  } = props;

  const renderLoading = () =>
    isLoading && (
      <div className="card__button-loading">
        <span className="card__button-loading__dots" />
      </div>
    );

  return (
    <>
      <div
        className={classnames(
          "card",
          { "card--loading": isLoading },
          className
        )}
        {...rest}
      >
        {children}
      </div>

      {buttonLabel && onButtonClick && (
        <div className="card__button-container">
          <button
            className={classnames(
              "card__button",
              `card__button--${buttonTheme}`
            )}
            disabled={isLoading}
            onClick={onButtonClick}
            type="button"
          >
            {renderLoading()}
            {buttonLabel}
          </button>
        </div>
      )}
    </>
  );
};

Card.propTypes = {
  buttonLabel: t.string,
  buttonTheme: t.oneOf(["primary", "danger"]),
  children: t.node,
  className: t.string,
  isLoading: t.bool,
  onButtonClick: t.func,
};

Card.defaultProps = {
  buttonTheme: "primary",
};

export default Card;
