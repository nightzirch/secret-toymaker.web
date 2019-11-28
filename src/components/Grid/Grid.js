import classnames from "classnames";
import t from "prop-types";
import React from "react";
import "./Grid.scss";

const Grid = props => {
  const { children, noMargin, noColumnGap, noRowGap } = props;

  return (
    <div
      className={classnames("grid", {
        "grid--no-margin": noMargin,
        "grid--no-column-gap": noColumnGap,
        "grid--no-row-gap": noRowGap
      })}
    >
      {children}
    </div>
  );
};

Grid.propTypes = {
  children: t.node,
  noColumnGap: t.bool,
  noRowGap: t.bool,
  noMargin: t.bool
};

export default Grid;
