import classnames from "classnames";
import t from "prop-types";
import { withRouter } from "react-router-dom";
import React from "reactn";
import { getHeaderTextColorByPathname } from "utils/header";
import "./Hamburger.scss";

const Hamburger = props => {
  const {
    isInMenu,
    isMenuOpen,
    location: { pathname },
    onClick
  } = props;

  return (
    <div className="hamburger-container" onClick={onClick} role="button">
      <div
        className={classnames(
          "hamburger",
          `hamburger--${getHeaderTextColorByPathname(pathname)}`,
          {
            "hamburger--in-menu": isInMenu,
            "hamburger--open": isMenuOpen
          }
        )}
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
