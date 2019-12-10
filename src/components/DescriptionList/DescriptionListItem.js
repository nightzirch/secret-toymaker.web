import classnames from "classnames";
import t from "prop-types";
import React from "react";
import "./DescriptionListItem.scss";

const DescriptionListItem = props => {
  const { color, description, term } = props;

  return (
    <span
      className={classnames(
        "description-list-item",
        `description-list-item--${color}`
      )}
    >
      <dt className="description-list-item__term">{term}</dt>
      <dd className="description-list-item__description">{description}</dd>
    </span>
  );
};

DescriptionListItem.propTypes = {
  color: t.oneOf(["dark", "light"]),
  description: t.string.isRequired,
  term: t.string.isRequired
};

DescriptionListItem.defaultProps = {
  color: "dark"
};

export default DescriptionListItem;
