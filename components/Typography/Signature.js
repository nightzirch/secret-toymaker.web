import React from "reactn";

const Signature = (props) => {
  return props.children ? <p className="signature">{props.children}</p> : null;
};

export default Signature;
