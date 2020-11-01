import classnames from "classnames";
import t from "prop-types";
import React from "react";
import "./DescriptionListItem.scss";

const DescriptionListItem = (props) => {
  const { color, description, icon, isHorizontal, term } = props;

  const renderIcon = () =>
    icon && (
      <span className="description-list-item__description__icon">{icon}</span>
    );

  return (
    <span
      className={classnames(
        "description-list-item",
        `description-list-item--${color}`,
        { "description-list-item--horizontal": isHorizontal }
      )}
    >
      {term && <dt className="description-list-item__term">{term}</dt>}
      <dd className="description-list-item__description">
        {description}
        {renderIcon()}
      </dd>
    </span>
  );
};

DescriptionListItem.propTypes = {
  color: t.oneOf(["dark", "light"]),
  description: t.node.isRequired,
  icon: t.node,
  isHorizontal: t.bool,
  term: t.node,
};

DescriptionListItem.defaultProps = {
  color: "dark",
};

export default DescriptionListItem;
