import classnames from "classnames";
import t from "prop-types";
import React from "reactn";
import "./Paragraph.scss";

const Paragraph = props => {
  const { children, colorScheme, className, noMargin } = props;
  return props.children ? (
    <p
      className={classnames(
        "paragraph",
        `paragraph--${colorScheme}`,
        className,
        {
          "paragraph--no-margin": noMargin
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
    "white"
  ]),
  noMargin: t.bool
};

Paragraph.defaultProps = {
  colorScheme: "dark"
};

export default Paragraph;
