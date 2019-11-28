import t from "prop-types";
import React from "reactn";
import "./ErrorMessage.scss";

const ErrorMessage = props =>
  this.props.text ? <div className="error-message">{props.text}</div> : null;

ErrorMessage.propTypes = {
  text: t.string
};

export default ErrorMessage;
