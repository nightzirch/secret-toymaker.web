import classnames from "classnames";
import t from "prop-types";
import { withRouter } from "react-router-dom";
import React from "reactn";
import Routes from "routes";
import { getKeyByValue } from "utils/object";
import "./Hamburger.scss";
import { hamburgerColor } from "./utils/constants";

const Hamburger = props => {
  const {
    isInMenu,
    isMenuOpen,
    location: { pathname },
    onClick
  } = props;

  const getColor = () => {
    const routeName = getKeyByValue(Routes, pathname);
    return hamburgerColor[routeName];
  };

  getColor();

  return (
    <div className="hamburger-container" onClick={onClick} role="button">
      <div
        className={classnames("hamburger", `hamburger--${getColor()}`, {
          "hamburger--in-menu": isInMenu,
          "hamburger--open": isMenuOpen
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
  isInMenu: t.bool,
  isMenuOpen: t.bool,
  onClick: t.func
};

export default withRouter(Hamburger);
