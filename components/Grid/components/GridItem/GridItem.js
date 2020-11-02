import classnames from "classnames";
import t from "prop-types";
import React from "react";

const GridItem = (props) => {
  const {
    children,
    className,
    hideOnMobile,
    span,
    spanMobile,
    offset,
    offsetMobile,
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
          "grid-item--hide-on-mobile": hideOnMobile,
        },
        className
      )}
    >
      {children}
    </div>
  );
};

GridItem.propTypes = {
  children: t.node,
  className: t.string,
  hideOnMobile: t.bool,
  span: t.number,
  spanMobile: t.number,
  offset: t.number,
  offsetMobile: t.number,
};

GridItem.defaultProps = {
  span: 12,
  spanMobile: 4,
};

export default GridItem;
