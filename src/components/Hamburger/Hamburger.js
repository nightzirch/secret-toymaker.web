import { getHeaderTextColorByPathname } from "@/utils/header";
import classnames from "classnames";
import { useRouter } from "next/router";
import t from "prop-types";

const Hamburger = (props) => {
  const { isInMenu, isMenuOpen, onClick } = props;
  const router = useRouter();

  return (
    <div className="hamburger-container" onClick={onClick} role="button">
      <div
        className={classnames(
          "hamburger",
          `hamburger--${getHeaderTextColorByPathname(router.pathname)}`,
          {
            "hamburger--in-menu": isInMenu,
            "hamburger--open": isMenuOpen,
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
  onClick: t.func,
};

export default Hamburger;
