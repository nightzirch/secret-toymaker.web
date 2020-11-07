import classnames from "classnames";
import t from "prop-types";

const DescriptionListItem = (props) => {
  const { color, description, icon, term } = props;

  const renderIcon = () =>
    icon && (
      <span className="description-list-item__description__icon">{icon}</span>
    );

  return (
    <span
      className={classnames(
        "description-list-item",
        `description-list-item--${color}`
      )}
    >
      <dt className="description-list-item__term">{term}</dt>
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
  term: t.node.isRequired,
};

DescriptionListItem.defaultProps = {
  color: "dark",
};

export default DescriptionListItem;
