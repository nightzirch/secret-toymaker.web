import classnames from "classnames";
import t from "prop-types";
import React from "react";
import "./Grid.scss";

const Grid = props => {
  const { children, noMargin } = props;

  return (
    <div className={classnames("grid", { "grid--no-margin": noMargin })}>
      {children}
    </div>
  );
};

Grid.propTypes = {
  children: t.node,
  noMargin: t.bool
};

export default Grid;
