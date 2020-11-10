import classnames from "classnames";
import t from "prop-types";
import React from "reactn";

const Paragraph = (props) => {
  const {
    children,
    colorScheme,
    className,
    isBold,
    isCenter,
    isItalic,
    noMargin,
    size,
    weight,
  } = props;
  return children ? (
    <p
      className={classnames(
        "paragraph",
        `paragraph--${colorScheme}`,
        `paragraph--${size}`,
        `paragraph--weight-${weight}`,
        className,
        {
          "paragraph--no-margin": noMargin,
          "paragraph--bold": isBold,
          "paragraph--italic": isItalic,
          "paragraph--center": isCenter,
        }
      )}
    >
      {children}
    </p>
  ) : null;
};

Paragraph.propTypes = {
  children: t.node,
  className: t.string,
  colorScheme: t.oneOf([
    "black",
    "dark",
    "dark-grey",
    "grey",
    "light",
    "white",
    "haiti",
    "meteorite",
    "vivid-violet",
    "biloba-flower",
    "pattens-blue",
    "error",
    "warning",
    "success",
    "info",
  ]),
  isBold: t.bool,
  isCenter: t.bool,
  isItalic: t.bool,
  noMargin: t.bool,
  size: t.oneOf(["small", "medium"]),
  weight: t.oneOf(["lighter", "light", "normal", "light", "lighter"]),
};

Paragraph.defaultProps = {
  colorScheme: "dark",
  size: "medium",
  weight: "normal",
};

export default Paragraph;
