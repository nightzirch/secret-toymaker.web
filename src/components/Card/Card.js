import classnames from "classnames";
import t from "prop-types";
import React from "reactn";
import "./Card.scss";

const Card = props => {
  const {
    buttonLabel,
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
            className="card__button"
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
  children: t.node,
  className: t.string,
  isLoading: t.bool,
  onButtonClick: t.func
};

export default Card;
