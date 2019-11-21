import classnames from "classnames";
import t from "prop-types";
import { Link as RRLink } from "react-router-dom";
import React from "reactn";
import "./Link.scss";

const Link = props => {
  const { isCentered, isDisabled, isExternal, title, url } = props;

  let containerClasses = classnames("link-container", {
    "link-container--centered": isCentered
  });

  return (
    <div className={containerClasses}>
      {isExternal ? (
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
      )}
    </div>
  );
};

Link.propTypes = {
  isCentered: t.bool,
  isDisabled: t.bool,
  isExternal: t.bool,
  title: t.string.isRequired,
  url: t.string
};

export default Link;
