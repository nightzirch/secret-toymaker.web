import t from "prop-types";
import React from "react";

const ErrorPage = props => {
  const { statusCode } = props;

  return (
    <div className="splash-page flex flex-col flex-grow justify-center items-center">
      <p className="mx-8 text-center text-3xl text-mariner font-bold">
        {statusCode}
      </p>

      <p className="mx-8 mt-8 text-center text-xl text-gray-700">
        Well, well, well. What do we have here? Someone trying to sneak into
        pages not yet released, huh.
      </p>

      <p className="mx-8 text-center text-xl text-gray-700">
        Get outta here, you, and come back another time.
      </p>

      <p className="mx-8 mt-8 text-center text-xl text-gray-700">Thanks.</p>
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
