import classnames from "classnames";
import PropTypes from "prop-types";
import React from "reactn";
import "./Card.scss";

const Card = props => {
  const { buttonLabel, children, className, onButtonClick, ...rest } = props;

  return (
    <>
      <div className={classnames("card", className)} {...rest}>
        {children}
      </div>

      {buttonLabel && onButtonClick && (
        <div className="card__button-container">
          <button className="card__button" onClick={onButtonClick}>
            {buttonLabel}
          </button>
        </div>
      )}
    </>
  );
};

Card.propTypes = {
  buttonLabel: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  onButtonClick: PropTypes.func
};

export default Card;
