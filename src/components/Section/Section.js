import classnames from "classnames";
import PropTypes from "prop-types";
import React from "reactn";
import "./Section.scss";

const Section = props => {
  const { backgroundColor, children, withPadding } = props;
  return (
    <section
      className={classnames("section", {
        [`section--${backgroundColor}`]: !!backgroundColor,
        "section--with-padding": withPadding
      })}
    >
      <div className="section__inner">{children}</div>
    </section>
  );
};

Section.propTypes = {
  backgroundColor: PropTypes.oneOf([
    "extra-light",
    "dark",
    "primary",
    "primary-light",
    "primary-dark",
    "secondary",
    "secondary-light",
    "secondary-dark"
  ]),
  withPadding: PropTypes.bool
};

export default Section;
