export const RouteTypes = {
  FRONTPAGE: "FRONTPAGE",
  FAQ: "FAQ",
  GIFTS: "GIFTS",
  SIGNIN: "SIGNIN",
  SIGNUP: "SIGNUP",
  PROFILE: "PROFILE"
};

const Routes = {
  [RouteTypes.FRONTPAGE]: "/",
  [RouteTypes.FAQ]: "/faq",
  [RouteTypes.GIFTS]: "/gifts",
  [RouteTypes.SIGNIN]: "/signin",
  [RouteTypes.SIGNUP]: "/signup",
  [RouteTypes.PROFILE]: "/profile"
};

export default Routes;
