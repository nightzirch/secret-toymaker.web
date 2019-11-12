import classnames from "classnames";
import PropTypes from "prop-types";
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
  children: PropTypes.node,
  noMargin: PropTypes.bool
};

export default Grid;
