import React from "reactn";
import "./Signature.scss";

const Signature = props => {
  return props.children ? <p className="signature">{props.children}</p> : null;
};

export default Signature;
