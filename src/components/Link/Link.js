import classnames from "classnames";
import t from "prop-types";
import { Link as RRLink } from "react-router-dom";
import React from "reactn";
import "./Link.scss";

const Link = props => {
  const {
    isCentered,
    isDisabled,
    isExternal,
    isInContainer,
    title,
    url
  } = props;

  const containerClasses = classnames("link-container", {
    "link-container--centered": isCentered
  });

  const renderInContainer = content => (
    <div className={containerClasses}>{content}</div>
  );

  const content = isExternal ? (
    <a
      className="link"
      disabled={isDisabled}
      href={isDisabled ? null : url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {title}
    </a>
  ) : (
    <RRLink className="link" disabled={isDisabled} to={url}>
      {title}
    </RRLink>
  );

  return isInContainer ? renderInContainer(content) : content;
};

Link.propTypes = {
  isCentered: t.bool,
  isDisabled: t.bool,
  isExternal: t.bool,
  isInContainer: t.bool,
  title: t.string.isRequired,
  url: t.string
};

Link.defaultProps = {
  isInContainer: true
};

export default Link;
