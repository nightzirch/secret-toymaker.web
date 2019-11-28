import classnames from "classnames";
import t from "prop-types";
import React from "reactn";
import "./Hamburger.scss";

const Hamburger = props => {
  return (
    <div className="hamburger-container" onClick={props.onClick}>
      <div
        className={classnames("hamburger", {
          "hamburger--open": props.isMenuOpen
        })}
      >
        <span />
        <span />
        <span />
      </div>
    </div>
  );
};

Hamburger.propTypes = {
  onClick: t.func,
  isMenuOpen: t.bool
};

export default Hamburger;
