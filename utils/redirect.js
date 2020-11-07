import firebaseAdmin from "config/firebaseAdmin";
import Routes, { RouteRequirements } from "config/routes";
import nookies from "nookies";
import { getKeyByValue } from "utils/object";
import AuthTypes from "utils/types/AuthTypes";

const getRedirectRouteForRouteName = (url, authType = AuthTypes.NO_AUTH) => {
  const routeName = getKeyByValue(Routes, url);
  const routeRequirements = RouteRequirements[routeName];
  return routeRequirements?.authStatus !== authType
    ? routeRequirements?.redirectRoute
    : null;
};

export const validateAuthWithRedirect = async (ctx, callback) => {
  let token;

  try {
    const cookies = nookies.get(ctx);
    if (cookies.token) {
      token = await firebaseAdmin.auth().verifyIdToken(cookies.token);
    }
  } catch (err) {
    console.log("[Redirect] Error while verifying token", err);
  }

  const Location = getRedirectRouteForRouteName(
    ctx.req.url,
    token ? AuthTypes.AUTH : AuthTypes.NO_AUTH
  );

  if (!Location)
    return callback ? callback(token) : { props: { auth: token || null } };

  ctx.res.writeHead(302, { Location });
  ctx.res.end();
  return { props: {} };
};
