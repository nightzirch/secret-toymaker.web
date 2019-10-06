import t from "prop-types";
import React from "react";

const ErrorPage = props => {
  const { statusCode } = props;

  return (
    <div>
      <p>Error {statusCode}</p>
    </div>
  );
};

ErrorPage.propTypes = {
  statusCode: t.number
};

ErrorPage.getInitialProps = ({ err, res }) => {
  let code = null;
  if (res) {
    const { statusCode } = res;
    code = statusCode;
  } else if (err) {
    const { statusCode } = err;
    code = statusCode;
  }

  return { err, statusCode: code };
};

export default ErrorPage;
