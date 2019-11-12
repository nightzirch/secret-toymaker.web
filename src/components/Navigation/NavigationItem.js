import classnames from "classnames";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import React from "reactn";
import "./NavigationItem.scss";

const icons = {
  person: "ion-person"
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
      "navigation-item--has-image": !!this.props.imageUrl
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
        to={this.props.url}
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
  icon: PropTypes.string,
  imageUrl: PropTypes.string,
  isExternal: PropTypes.bool,
  onClick: PropTypes.func,
  title: PropTypes.string,
  type: PropTypes.oneOf(["default", "block"]),
  url: PropTypes.string.isRequired
};

NavigationItem.defaultProps = {
  onClick: () => {},
  type: "default"
};

export default NavigationItem;
