import Routes, { RouteTypes } from "routes";
import { getKeyByValue } from "utils/object";

export const headerTextColor = {
  [RouteTypes.FRONTPAGE]: "light",
  [RouteTypes.FAQ]: "dark",
  [RouteTypes.GIFTS]: "dark",
  [RouteTypes.LOGIN]: "dark",
  [RouteTypes.SIGNUP]: "dark",
  [RouteTypes.PROFILE]: "dark"
};

export const getHeaderTextColorByPathname = pathname => {
  const routeName = getKeyByValue(Routes, pathname);
  return headerTextColor[routeName];
};
