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

export default Routes;
