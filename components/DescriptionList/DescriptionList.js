import classnames from "classnames";
import t from "prop-types";

const DescriptionList = (props) => {
  const { children, isHorizontal } = props;

  return (
    <dl
      className={classnames("description-list", {
        "description-list--horizontal": isHorizontal,
      })}
    >
      {children}
    </dl>
  );
};

DescriptionList.propTypes = {
  children: t.node,
  isHorizontal: t.bool,
};

export default DescriptionList;
