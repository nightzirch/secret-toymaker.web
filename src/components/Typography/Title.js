import classnames from "classnames";
import t from "prop-types";
import React from "reactn";
import "./Title.scss";

const Title = (props) => {
  const titleClasses = classnames(
    "title",
    `title--${props.colorScheme}`,
    `title--${props.level}`,
    props.className
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
  colorScheme: t.oneOf([
    "black",
    "dark",
    "dark-grey",
    "grey",
    "light",
    "white",
    "primary",
  ]),
  level: t.oneOf(["page", "primary", "secondary", "tertiary"]),
};

Title.defaultProps = {
  colorScheme: "dark",
  level: "secondary",
};

export default Title;
