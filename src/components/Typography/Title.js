import classnames from "classnames";
import PropTypes from "prop-types";
import React from "reactn";
import "./Title.scss";

const Title = props => {
  let titleClasses = classnames(
    "title",
    `title--${props.colorScheme}`,
    `title--${props.level}`
  );

  let titleLevel;
  switch (props.level) {
    case "secondary":
      titleLevel = "h2";
      break;
    case "tertiary":
      titleLevel = "h3";
      break;
    case "primary":
    default:
      titleLevel = "h1";
      break;
  }

  return props.children
    ? React.createElement(
        titleLevel,
        { className: titleClasses },
        props.children
      )
    : null;
};

Title.propTypes = {
  colorScheme: PropTypes.oneOf([
    "black",
    "dark",
    "dark-grey",
    "grey",
    "light",
    "white"
  ]),
  level: PropTypes.oneOf(["page", "primary", "secondary", "tertiary"])
};

Title.defaultProps = {
  colorScheme: "dark",
  level: "primary"
};

export default Title;
