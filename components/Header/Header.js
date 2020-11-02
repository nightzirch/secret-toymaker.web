import { Grid, GridItem } from "components/Grid";
import Hamburger from "components/Hamburger";
import Logo from "components/Logo";
import Section from "components/Section";
import { Title } from "components/Typography";
import Link from "next/link";
import { useRouter } from "next/router";
import { useGlobal } from "reactn";
import { getHeaderTextColorByPathname } from "utils/header";

const Header = (props) => {
  const router = useRouter();
  const [isMenuOpen, setMenuOpen] = useGlobal("isMenuOpen");

  const handleHamburgerClick = () => {
    setMenuOpen(!isMenuOpen);
  };

  const renderLogo = () => (
    <div className="header__logo">
      <Link
        alt="Secret Toymaker"
        className="header__logo-link"
        title="Secret Toymaker"
        href="/"
      >
        <Logo withGlow withHover />
      </Link>
    </div>
  );

  const renderHamburger = () => (
    <div className="header__hamburger-wrapper">
      <Hamburger onClick={handleHamburgerClick} isMenuOpen={isMenuOpen} />
    </div>
  );

  const renderTitle = () => {
    const headerTextColor = getHeaderTextColorByPathname(router.pathname);
    const colorScheme = headerTextColor === "dark" ? "primary" : "white";

    return (
      <span className="header__title">
        <Title colorScheme={colorScheme}>Secret Toymaker</Title>
      </span>
    );
  };

  return (
    <header className="header">
      <Section isWide>
        <Grid noMargin>
          <GridItem span={1} spanMobile={1}>
            {renderLogo()}
          </GridItem>

          <GridItem
            offset={2}
            offsetMobile={2}
            span={10}
            spanMobile={2}
            hideOnMobile
          >
            {renderTitle()}
          </GridItem>

          <GridItem offset={12} offsetMobile={4} span={1} spanMobile={1}>
            {renderHamburger()}
          </GridItem>
        </Grid>
      </Section>
    </header>
  );
};

export default Header;
