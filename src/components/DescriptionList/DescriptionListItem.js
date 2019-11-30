import t from "prop-types";
import React from "react";
import "./DescriptionListItem.scss";

const DescriptionListItem = props => {
  const { description, term } = props;

  return (
    <span className="description-list-item">
      <dt className="description-list-item__term">{term}</dt>
      <dd className="description-list-item__description">{description}</dd>
    </span>
  );
};

DescriptionListItem.propTypes = {
  description: t.string.isRequired,
  term: t.string.isRequired
};

export default DescriptionListItem;
