import classnames from "classnames";
import t from "prop-types";
import React from "reactn";

const Title = (props) => {
  let titleClasses = classnames(
    "title",
    `title--${props.colorScheme}`,
    `title--${props.level}`
  );

  let TitleLevel;
  switch (props.level) {
    case "secondary":
      TitleLevel = "h2";
      break;
    case "tertiary":
      TitleLevel = "h3";
      break;
    case "primary":
    default:
      TitleLevel = "h1";
      break;
  }

  return props.children ? (
    <TitleLevel className={titleClasses}>{props.children}</TitleLevel>
  ) : null;
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
