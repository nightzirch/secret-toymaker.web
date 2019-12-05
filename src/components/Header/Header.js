import { Grid, GridItem } from "components/Grid";
import Hamburger from "components/Hamburger";
import Logo from "components/Logo";
import Section from "components/Section";
import { Title } from "components/Typography";
import { Link, withRouter } from "react-router-dom";
import React from "reactn";
import { getHeaderTextColorByPathname } from "utils/header";
import "./Header.scss";

class Header extends React.Component {
  handleHamburgerClick = () => {
    this.setGlobal(state => ({ isMenuOpen: !state.isMenuOpen }));
  };

  renderLogo = () => (
    <div className="header__logo">
      <Link
        alt="Secret Toymaker"
        className="header__logo-link"
        title="Secret Toymaker"
        to="/"
      >
        <Logo withGlow withHover />
      </Link>
    </div>
  );

  renderHamburger = () => (
    <div className="header__hamburger-wrapper">
      <Hamburger
        onClick={this.handleHamburgerClick}
        isMenuOpen={this.global.isMenuOpen}
      />
    </div>
  );

  renderTitle = () => {
    const {
      location: { pathname }
    } = this.props;
    const headerTextColor = getHeaderTextColorByPathname(pathname);
    const colorScheme = headerTextColor === "dark" ? "primary" : "white";

    return (
      <span className="header__title">
        <Title colorScheme={colorScheme}>Secret Toymaker</Title>
      </span>
    );
  };

  render() {
    return (
      <header className="header">
        <Section>
          <Grid noMargin>
            <GridItem span={1} spanMobile={1}>
              {this.renderLogo()}
            </GridItem>

            <GridItem
              offset={2}
              offsetMobile={2}
              span={10}
              spanMobile={2}
              hideOnMobile
            >
              {this.renderTitle()}
            </GridItem>

            <GridItem offset={12} offsetMobile={4} span={1} spanMobile={1}>
              {this.renderHamburger()}
            </GridItem>
          </Grid>
        </Section>
      </header>
    );
  }
}

export default withRouter(Header);
