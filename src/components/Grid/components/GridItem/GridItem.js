import classnames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import "./GridItem.scss";

const GridItem = props => {
  const {
    children,
    hideOnMobile,
    span,
    spanMobile,
    offset,
    offsetMobile
  } = props;

  return (
    <div
      className={classnames(
        "grid-item",
        `grid-item--span-${span}`,
        `grid-item--span-mobile-${spanMobile}`,
        {
          [`grid-item--offset-${offset}`]: offset,
          [`grid-item--offset-mobile-${offsetMobile}`]: offsetMobile,
          "grid-item--hide-on-mobile": hideOnMobile
        }
      )}
    >
      {children}
    </div>
  );
};

GridItem.propTypes = {
  children: PropTypes.node,
  hideOnMobile: PropTypes.bool,
  span: PropTypes.number,
  spanMobile: PropTypes.number,
  offset: PropTypes.number,
  offsetMobile: PropTypes.number
};

GridItem.defaultProps = {
  span: 12,
  spanMobile: 4
};

export default GridItem;
