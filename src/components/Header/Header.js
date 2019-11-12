import { Grid, GridItem } from "components/Grid";
import Hamburger from "components/Hamburger";
import Logo from "components/Logo";
import ProfilePicture from "components/ProfilePicture";
import Section from "components/Section";
import * as ROUTES from "routes";
import { Link } from "react-router-dom";
import React from "reactn";
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

  renderProfileIcon = () => {
    const { authUser } = this.global;
    return (
      <div className="header__profile-wrapper">
        <Link
          className="header__profile"
          to={authUser ? ROUTES.PROFILE : ROUTES.SIGNIN}
        >
          <ProfilePicture />
        </Link>
      </div>
    );
  };

  render() {
    return (
      <header className="header">
        <Section>
          <Grid noMargin>
            <GridItem span={1} spanMobile={1}>
              {this.renderHamburger()}
            </GridItem>

            <GridItem offset={6} offsetMobile={2} span={2} spanMobile={2}>
              {this.renderLogo()}
            </GridItem>

            <GridItem offset={12} offsetMobile={4} span={1} spanMobile={1}>
              {this.renderProfileIcon()}
            </GridItem>
          </Grid>
        </Section>
      </header>
    );
  }
}

export default Header;
