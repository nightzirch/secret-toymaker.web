import Routes, { RouteRequirements } from "config/routes";
import { getKeyByValue } from "utils/object";
import AuthTypes from "utils/types/AuthTypes";

export const getRedirectRouteForRouteName = (
  url,
  authType = AuthTypes.NO_AUTH
) => {
  if (!url) return null;
  const routeName = getKeyByValue(Routes, url);
  const routeRequirements = RouteRequirements[routeName];
  return routeRequirements?.authStatus !== authType
    ? routeRequirements?.redirectRoute
    : null;
};
