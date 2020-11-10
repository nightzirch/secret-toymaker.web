import t from "prop-types";
import React from "reactn";

const SuccessMessage = (props) =>
  this.props.text ? (
    <div className="success-message">{this.props.text}</div>
  ) : null;

SuccessMessage.propTypes = {
  text: t.string,
};

export default SuccessMessage;
