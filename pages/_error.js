import React from "react";

const ErrorPage = props => {
  return (
    <div className="splash-page flex flex-col flex-grow justify-center items-center">
      <p className="mx-8 text-center text-3xl text-mariner font-bold">404</p>

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

export default ErrorPage;
