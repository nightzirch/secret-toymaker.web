import { getGlobal } from "reactn";
import AuthTypes from "utils/types/AuthTypes";

export const getAuthStatus = (overrideAuthUser, overrideUser) => {
  let authUser = overrideAuthUser;
  let user = overrideUser;

  if (authUser === undefined && user === undefined) {
    const { authUser: au, user: u } = getGlobal();
    authUser = au;
    user = u;
  }

  const isLoggedIn = !!(authUser && user);
  return isLoggedIn ? AuthTypes.AUTH : AuthTypes.NO_AUTH;
};
