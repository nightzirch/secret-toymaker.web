import classnames from "classnames";
import t from "prop-types";
import React from "reactn";
import Title from "./Title";

const PageHeader = (props) => {
  const { children, isCentered, type, title } = props;

  if (!title) return null;

  const pageHeaderClasses = classnames("page-header", {
    [`page-header--${type}`]: type,
    "page-header--no-children": !children,
    "page-header--centered": isCentered,
  });

  return (
    <div className={pageHeaderClasses}>
      <div className="page-header__text">
        <Title level="page">{title}</Title>
        {children}
      </div>
    </div>
  );
};

PageHeader.propTypes = {
  children: t.node,
  isCentered: t.bool,
  title: t.string,
  type: t.oneOf([
    "donations",
    "gifts",
    "signup",
    "signup-alt",
    "match",
    "profile",
  ]),
};

export default PageHeader;
