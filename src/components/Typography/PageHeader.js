import classnames from "classnames";
import PropTypes from "prop-types";
import React from "reactn";
import "./PageHeader.scss";
import Title from "./Title";

const PageHeader = props => {
  let pageHeaderClasses = classnames("page-header", {
    [`page-header--${props.type}`]: props.type,
    "page-header--no-children": !props.children
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
  type: PropTypes.oneOf(["donations", "gifts", "signup", "match", "profile"]),
  title: PropTypes.string.isRequired
};

export default PageHeader;
