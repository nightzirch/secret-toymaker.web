import classnames from "classnames";
import { Link } from "react-router-dom";
import React, { useGlobal } from "reactn";
import "./MainMenu.scss";
import { NAVIGATION_ITEMS } from "./utils/constants";

const MainMenu = props => {
  const [isMenuOpen, setIsMenuOpen] = useGlobal("isMenuOpen");

  const handleBackdropClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const renderNavigationItems = () => {
    return NAVIGATION_ITEMS.map(item => (
      <Link className="main-menu__item" to={item.url} key={item.title}>
        {item.title}
      </Link>
    ));
  };

  return (
    <>
      <div
        className={classnames("main-menu", { "main-menu--open": isMenuOpen })}
      >
        <nav className="main-menu__nav">{renderNavigationItems()}</nav>
      </div>
      <div className="main-menu-backdrop" onClick={handleBackdropClick} />
    </>
  );
};

export default MainMenu;
