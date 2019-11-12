import classnames from "classnames";
import PropTypes from "prop-types";
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
  children: PropTypes.node,
  className: PropTypes.string,
  colorScheme: PropTypes.oneOf([
    "black",
    "dark",
    "dark-grey",
    "grey",
    "light",
    "white"
  ]),
  noMargin: PropTypes.bool
};

Paragraph.defaultProps = {
  colorScheme: "dark"
};

export default Paragraph;
