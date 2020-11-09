import firebaseAdmin from "config/firebaseAdmin";
import nookies from "nookies";
import { getRedirectRouteForRouteName } from "utils/routes";
import AuthTypes from "utils/types/AuthTypes";

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

  ctx.res.writeHead(307, { Location });
  ctx.res.end();
  return { props: {} };
};
