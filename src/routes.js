import AuthTypes from "utils/types/AuthTypes";

export const RouteTypes = {
  EVENT: "EVENT",
  EVENTS: "EVENTS",
  FAQ: "FAQ",
  FRONTPAGE: "FRONTPAGE",
  GIFTS: "GIFTS",
  LOGIN: "LOGIN",
  PROFILE: "PROFILE",
  RESET_PASSWORD: "RESET_PASSWORD",
  SIGNUP: "SIGNUP",
};

const Routes = {
  [RouteTypes.EVENT]: "/events/:year",
  [RouteTypes.EVENTS]: "/events",
  [RouteTypes.FAQ]: "/faq",
  [RouteTypes.FRONTPAGE]: "/",
  [RouteTypes.GIFTS]: "/gifts",
  [RouteTypes.LOGIN]: "/login",
  [RouteTypes.PROFILE]: "/profile",
  [RouteTypes.RESET_PASSWORD]: "/reset-password",
  [RouteTypes.SIGNUP]: "/signup",
};

export const RouteRequirements = {
  [RouteTypes.LOGIN]: {
    authStatus: AuthTypes.NO_AUTH,
    redirectRoute: Routes[RouteTypes.EVENT],
  },
  [RouteTypes.PROFILE]: {
    authStatus: AuthTypes.AUTH,
    redirectRoute: Routes[RouteTypes.LOGIN],
  },
  [RouteTypes.SIGNUP]: {
    authStatus: AuthTypes.NO_AUTH,
    redirectRoute: Routes[RouteTypes.EVENT],
  },
};

export default Routes;
