import AuthTypes from "utils/types/AuthTypes";

export const RouteTypes = {
  FRONTPAGE: "FRONTPAGE",
  FAQ: "FAQ",
  GIFTS: "GIFTS",
  LOGIN: "LOGIN",
  SIGNUP: "SIGNUP",
  PROFILE: "PROFILE"
};

const Routes = {
  [RouteTypes.FRONTPAGE]: "/",
  [RouteTypes.FAQ]: "/faq",
  [RouteTypes.GIFTS]: "/gifts",
  [RouteTypes.LOGIN]: "/login",
  [RouteTypes.SIGNUP]: "/signup",
  [RouteTypes.PROFILE]: "/profile"
};

export const RouteRequirements = {
  [RouteTypes.LOGIN]: {
    authStatus: AuthTypes.NO_AUTH,
    redirectRoute: Routes.PROFILE
  },
  [RouteTypes.SIGNUP]: {
    authStatus: AuthTypes.NO_AUTH,
    redirectRoute: Routes.PROFILE
  },
  [RouteTypes.PROFILE]: {
    authStatus: AuthTypes.AUTH,
    redirectRoute: Routes.LOGIN
  }
};

export default Routes;
