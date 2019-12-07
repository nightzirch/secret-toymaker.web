import { getGlobal } from "reactn";
import AuthTypes from "utils/types/AuthTypes";

export const getAuthStatus = () => {
  const { authUser, user } = getGlobal();
  const isLoggedIn = !!(authUser && user);
  return isLoggedIn ? AuthTypes.AUTH : AuthTypes.NO_AUTH;
};
