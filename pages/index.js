import React from "react";

const HomePage = props => {
  return (
    <div className="splash-page flex flex-col flex-grow justify-center items-center">
      <img
        className="w-24 mb-8"
        src="/static/images/logo.png"
        alt="Secret Toymaker"
        title="Secret Toymaker gift"
      />

      <p className="mx-8 text-center text-3xl text-mariner font-bold">
        Secret Toymaker is soon coming to a Tyria near you!
      </p>
    </div>
  );
};

export default HomePage;
