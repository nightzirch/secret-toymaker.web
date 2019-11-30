import t from "prop-types";
import React from "react";
import "./DescriptionList.scss";

const DescriptionList = props => {
  const { children } = props;

  return <dl className="description-list">{children}</dl>;
};

DescriptionList.propTypes = {
  children: t.node
};

export default DescriptionList;
