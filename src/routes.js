import AuthTypes from "utils/types/AuthTypes";

export const RouteTypes = {
  EVENT: "EVENT",
  FAQ: "FAQ",
  FRONTPAGE: "FRONTPAGE",
  GIFTS: "GIFTS",
  LOGIN: "LOGIN",
  PROFILE: "PROFILE",
  SIGNUP: "SIGNUP"
};

const Routes = {
  [RouteTypes.EVENT]: "/event/:year",
  [RouteTypes.FAQ]: "/faq",
  [RouteTypes.FRONTPAGE]: "/",
  [RouteTypes.GIFTS]: "/gifts",
  [RouteTypes.LOGIN]: "/login",
  [RouteTypes.PROFILE]: "/profile",
  [RouteTypes.SIGNUP]: "/signup"
};

export const RouteRequirements = {
  [RouteTypes.LOGIN]: {
    authStatus: AuthTypes.NO_AUTH,
    redirectRoute: Routes.PROFILE
  },
  [RouteTypes.PROFILE]: {
    authStatus: AuthTypes.AUTH,
    redirectRoute: Routes.LOGIN
  },
  [RouteTypes.SIGNUP]: {
    authStatus: AuthTypes.NO_AUTH,
    redirectRoute: Routes.PROFILE
  }
};

export default Routes;
