import classnames from "classnames";
import t from "prop-types";
import React from "reactn";
import Title from "./Title";

const PageHeader = (props) => {
  let pageHeaderClasses = classnames("page-header", {
    [`page-header--${props.type}`]: props.type,
    "page-header--no-children": !props.children,
    "page-header--centered": props.isCentered,
  });

  return (
    <div className={pageHeaderClasses}>
      <div className="page-header__text">
        <Title level="page">{props.title}</Title>
        {props.children}
      </div>
    </div>
  );
};

PageHeader.propTypes = {
  isCentered: t.bool,
  type: t.oneOf([
    "donations",
    "gifts",
    "signup",
    "signup-alt",
    "match",
    "profile",
  ]),
  title: t.string.isRequired,
};

export default PageHeader;
