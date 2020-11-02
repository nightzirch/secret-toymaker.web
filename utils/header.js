import Routes, { RouteTypes } from "config/routes";
import { getKeyByValue } from "utils/object";
import { getRouteRoot } from "utils/url";

export const headerTextColor = {
  [RouteTypes.EVENT]: "dark",
  [RouteTypes.FAQ]: "dark",
  [RouteTypes.FRONTPAGE]: "light",
  [RouteTypes.GIFTS]: "dark",
  [RouteTypes.LOGIN]: "dark",
  [RouteTypes.PROFILE]: "dark",
  [RouteTypes.RESET_PASSWORD]: "dark",
  [RouteTypes.SIGNUP]: "dark",
};

export const getHeaderTextColorByPathname = (pathname) => {
  const value = getRouteRoot(pathname);

  const rootRoutes = Object.assign(
    {},
    ...Object.keys(Routes).map((key) => {
      return {
        [key]: getRouteRoot(Routes[key]),
      };
    })
  );

  const routeName = getKeyByValue(rootRoutes, value);
  return headerTextColor[routeName];
};
