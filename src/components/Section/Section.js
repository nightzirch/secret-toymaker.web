import classnames from "classnames";
import t from "prop-types";
import React from "reactn";
import "./Section.scss";

const Section = props => {
  const {
    backgroundColor,
    children,
    className,
    isHorizontalPadding,
    isVerticalPadding,
    isWide
  } = props;
  return (
    <section
      className={classnames(
        "section",
        {
          [`section--${backgroundColor}`]: !!backgroundColor,
          "section--horizontal-padding": isHorizontalPadding,
          "section--vertical-padding": isVerticalPadding,
          "section--wide": isWide
        },
        className
      )}
    >
      <div className="section__inner">{children}</div>
    </section>
  );
};

Section.propTypes = {
  backgroundColor: t.oneOf([
    "extra-light",
    "dark",
    "primary",
    "primary-light",
    "primary-dark",
    "primary-darker",
    "secondary",
    "secondary-light",
    "secondary-dark",
    "secondary-darker"
  ]),
  children: t.node,
  className: t.string,
  isHorizontalPadding: t.bool,
  isVerticalPadding: t.bool,
  isWide: t.bool
};

Section.defaultProps = {
  isHorizontalPadding: true
};

export default Section;
