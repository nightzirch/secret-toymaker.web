import classnames from "classnames";
import Hamburger from "components/Hamburger";
import Section from "components/Section";
import { Link } from "react-router-dom";
import React, { useGlobal } from "reactn";
import "./MainMenu.scss";
import { NAVIGATION_ITEMS } from "./utils/constants";

const MainMenu = props => {
  const [isMenuOpen, setIsMenuOpen] = useGlobal("isMenuOpen");

  const handleMenuCloseClick = () => {
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
    <div className={classnames("main-menu", { "main-menu--open": isMenuOpen })}>
      <Section>
        <nav
          aria-labelledby="main-navigation"
          role="navigation"
          className="main-menu__nav"
        >
          <div className="main-menu__hamburger-wrapper">
            <Hamburger onClick={handleMenuCloseClick} isMenuOpen={isMenuOpen} />
          </div>

          <div className="main-menu__items-wrapper">
            {renderNavigationItems()}
          </div>
        </nav>
      </Section>

      <div
        className="main-menu__backdrop"
        role="presentation"
        onClick={handleMenuCloseClick}
      />
    </div>
  );
};

export default MainMenu;
