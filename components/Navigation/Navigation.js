import classnames from "classnames";
import Routes from "config/routes";
import Image from "next/image";
import Link from "next/link";
import React from "reactn";
import NavigationItem from "./NavigationItem";

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isMenuOpen: false,
    };

    this.handleHamburgerClick = this.handleHamburgerClick.bind(this);
    this.handleNavigationItemClick = this.handleNavigationItemClick.bind(this);
  }

  handleHamburgerClick = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  };

  handleNavigationItemClick = () => {
    this.setState({ isMenuOpen: false });
  };

  getNavigationItems() {
    var navItems = [
      // {
      //   title: "FAQ",
      //   url: Routes.FAQ
      // },
      {
        icon: "person",
        imageUrl: this.global.authUser && this.global.authUser.photoURL,
        title: "Profile",
        url: this.global.authUser ? Routes.PROFILE : Routes.LOGIN,
      },
      // {
      //   isExternal: true,
      //   title: "Donate",
      //   type: 'block',
      //   url: settings.donationUrl
      // }
    ];

    // if (this.global.firebase.stage === 'SIGNUP') {
    //   navItems.splice(1, 0, {
    //     title: "Sign up",
    //     url: Routes.SIGNUP
    //   })
    // } else if (this.global.firebase.stage === 'GIFTING') {
    //   navItems.splice(1, 0, {
    //     title: "Gifts",
    //     url: Routes.GIFTS
    //   })
    // }

    return navItems;
  }

  renderNavItems() {
    let renderedItems = [];
    let navItems = this.getNavigationItems();

    if (navItems && navItems.length > 0) {
      for (let i = 0; i < navItems.length; i++) {
        let navItem = navItems[i];
        renderedItems.push(
          <NavigationItem
            icon={navItem.icon}
            imageUrl={navItem.imageUrl}
            isExternal={navItem.isExternal}
            onClick={this.handleNavigationItemClick}
            title={navItem.title}
            type={navItem.type}
            url={navItem.url}
            key={i}
          />
        );
      }
    }

    return renderedItems;
  }

  render() {
    let navClasses = classnames("navigation__container", {
      active: this.state.isMenuOpen,
    });

    return (
      <div className={navClasses}>
        <div className="navigation__wrapper">
          <Link href="/" alt="Secret Toymaker" title="Secret Toymaker">
            <div className="navigation__logo">
              <Image
                alt="Secret Toymaker"
                title="Secret Toymaker"
                src="/images/logo.png"
                width={736}
                height={703}
              />
              <h1>Secret Toymaker</h1>
            </div>
          </Link>

          <nav className="navigation">{this.renderNavItems()}</nav>
        </div>
        <div className="navigation__dropdown">{this.renderNavItems()}</div>
      </div>
    );
  }
}

export default Navigation;
