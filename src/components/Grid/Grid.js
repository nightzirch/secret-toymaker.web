import classnames from "classnames";
import t from "prop-types";
import React from "react";
import "./Grid.scss";

const Grid = props => {
  const {
    children,
    columns,
    columnsMobile,
    noMargin,
    noColumnGap,
    noRowGap
  } = props;

  return (
    <div
      className={classnames(
        "grid",
        `grid--columns-${columns}`,
        `grid--columns-mobile-${columnsMobile}`,
        {
          "grid--no-margin": noMargin,
          "grid--no-column-gap": noColumnGap,
          "grid--no-row-gap": noRowGap
        }
      )}
    >
      {children}
    </div>
  );
};

Grid.propTypes = {
  children: t.node,
  columns: t.number,
  columnsMobile: t.number,
  noColumnGap: t.bool,
  noRowGap: t.bool,
  noMargin: t.bool
};

Grid.defaultProps = {
  columns: 12,
  columnsMobile: 4
};

export default Grid;
