import Hamburger from "@/components/Hamburger";
import Section from "@/components/Section";
import { getAuthStatus } from "@/utils/auth";
import { getNavigationItems } from "@/utils/mainMenu";
import classnames from "classnames";
import Link from "next/link";
import { useGlobal } from "reactn";

const MainMenu = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useGlobal("isMenuOpen");

  const filterNavigationItems = () => {
    const authStatus = getAuthStatus();
    const navigationItems = getNavigationItems();
    return navigationItems.filter(
      (item) => !item.requireAuthType || item.requireAuthType === authStatus
    );
  };

  const handleMenuCloseClick = (callback) => {
    if (typeof callback === "function") {
      callback();
    }

    setIsMenuOpen(!isMenuOpen);
  };

  const renderNavigationItems = () => {
    const navigationItems = filterNavigationItems();
    return navigationItems.map((item) => {
      return (
        <Link href={item.route} key={item.title}>
          <a
            className={classnames("main-menu__item", {
              "main-menu__item--padding": item.hasPadding,
            })}
            onClick={() => handleMenuCloseClick(item.onClick)}
          >
            {item.title}
          </a>
        </Link>
      );
    });
  };

  return (
    <div className={classnames("main-menu", { "main-menu--open": isMenuOpen })}>
      <Section isWide>
        <nav
          aria-labelledby="main-navigation"
          role="navigation"
          className="main-menu__nav"
        >
          <div className="main-menu__hamburger-wrapper">
            <Hamburger
              onClick={handleMenuCloseClick}
              isInMenu
              isMenuOpen={isMenuOpen}
            />
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
