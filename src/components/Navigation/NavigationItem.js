import classnames from "classnames";
import Link from "next/link";
import t from "prop-types";
import React from "reactn";

const icons = {
  person: "ion-person",
};

class NavigationItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.props.onClick();
  };

  renderIcon = () => {
    if (this.props.imageUrl) {
      return (
        <span
          className={classnames(
            "navigation-item__icon",
            "navigation-item__icon--image"
          )}
        >
          <img alt="Profile" src={this.props.imageUrl} title="Profile" />
        </span>
      );
    } else if (this.props.icon) {
      return (
        <span
          className={classnames(
            "navigation-item__icon",
            icons[this.props.icon]
          )}
        />
      );
    }
  };

  render = () => {
    let itemClasses = classnames("navigation-item", {
      [`navigation-item--${this.props.type}`]: this.props.type !== "default",
      "navigation-item--has-icon": !!this.props.icon,
      "navigation-item--has-image": !!this.props.imageUrl,
    });
    return this.props.isExternal ? (
      <a
        href={this.props.url}
        className={itemClasses}
        target="_blank"
        rel="noopener noreferrer"
      >
        {this.renderIcon()}
        {this.props.title}
      </a>
    ) : (
      <Link
        href={this.props.url}
        onClick={this.handleClick}
        className={itemClasses}
      >
        {this.renderIcon()}

        <span className="navigation-item__title">{this.props.title}</span>
      </Link>
    );
  };
}

NavigationItem.propTypes = {
  icon: t.string,
  imageUrl: t.string,
  isExternal: t.bool,
  onClick: t.func,
  title: t.string,
  type: t.oneOf(["default", "block"]),
  url: t.string.isRequired,
};

NavigationItem.defaultProps = {
  onClick: () => {},
  type: "default",
};

export default NavigationItem;
