import { Redirect } from "react-router-dom";
import React, { useGlobal } from "reactn";
import { getKeyByValue } from "utils/object";
import Routes, { RouteRequirements } from "utils/routes";

export const withRedirect = (Component) => {
  const WithRedirect = (props) => {
    const [authStatus] = useGlobal("authStatus");
    const {
      location: { pathname },
    } = window;
    const routeName = getKeyByValue(Routes, pathname);
    const routeRequirements = RouteRequirements[routeName];

    if (
      routeRequirements &&
      authStatus &&
      routeRequirements.authStatus !== authStatus
    ) {
      return <Redirect to={routeRequirements.redirectRoute} />;
    }

    return <Component {...props} />;
  };

  return WithRedirect;
};
