import Card from "components/Card";
import t from "prop-types";
import React, { useGlobal } from "reactn";
import "./Error.scss";

const Error = props => {
  const { id } = props;
  const [error] = useGlobal("error");
  const message = error[id];

  return message ? <Card className="error">{message}</Card> : null;
};

Error.propTypes = {
  id: t.string.isRequired
};

export default Error;
