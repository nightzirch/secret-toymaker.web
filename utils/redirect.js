import firebaseAdmin from "config/firebaseAdmin";
import Routes, { RouteRequirements } from "config/routes";
import nookies from "nookies";
import { getKeyByValue } from "utils/object";
import AuthTypes from "utils/types/AuthTypes";

export const validateAuthWithRedirect = async (
  ctx,
  callback,
  redirectUrl = "/login"
) => {
  try {
    const cookies = nookies.get(ctx);
    const token = await firebaseAdmin.auth().verifyIdToken(cookies.token);

    // the user is authenticated!
    const { uid, email } = token;

    return callback ? callback() : { props: {} };
  } catch (err) {
    // Auth cookie doesn't exist or verification failed
    const routeName = getKeyByValue(Routes, ctx.pathname);
    const routeRequirements = RouteRequirements[routeName];

    const Location =
      routeRequirements && routeRequirements.authStatus !== AuthTypes.NO_AUTH
        ? routeRequirements.redirectRoute
        : redirectUrl;

    ctx.res.writeHead(302, { Location });
    ctx.res.end();
  }
};
