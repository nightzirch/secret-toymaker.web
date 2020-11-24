import Toymaker from "@/models/Toymaker";
import { dispatchWithLoading } from "@/utils/loading";
import { getRedirectRouteForRouteName } from "@/utils/routes";
import ActionTypes from "@/utils/types/ActionTypes";
import AuthTypes from "@/utils/types/AuthTypes";
import { useRouter } from "next/router";
import nookies from "nookies";
import { createContext, useEffect, useState } from "react";
import { useGlobal } from "reactn";

export const AuthContext = createContext({
  user: null,
});

export const AuthProvider = ({ children }) => {
  const [authStatus, setAuthStatus] = useState(AuthTypes.NO_AUTH);
  // authUser is the object coming from Firebase Authentication
  const [authUser, setAuthUser] = useState(null);
  // user is the object coming from Firebase Firestore
  const [user, setUser] = useState(null);

  const [global, setGlobal] = useGlobal();
  const router = useRouter();

  useEffect(() => {
    const listener = global.firebase.auth.onIdTokenChanged(
      async (authUserObj) => {
        if (!authUserObj) {
          setAuthStatus(AuthTypes.NO_AUTH);
          setAuthUser(null);
          setUser(null);

          // TODO: Slowly phase out Reactn
          setGlobal({
            authStatus: AuthTypes.NO_AUTH,
            authUser: null,
            user: null,
          });
          nookies.destroy(undefined, "token");

          /**
         * If user is on a page with a NO_AUTH restriction, redirect.
         * Using window.location.pathname as router.pathname doesn't update.
         
         * TODO: Find a way to use router.pathname instead so this functionality
         * can work on dynamic routes as well. There are no cases of this yet,
         * but might be in the future.
         */
          const redirectUrl = getRedirectRouteForRouteName(
            window.location.pathname,
            AuthTypes.NO_AUTH
          );

          if (redirectUrl) router.push(redirectUrl);

          return;
        }

        const token = await authUserObj.getIdToken();
        setAuthUser(authUserObj);
        nookies.set(undefined, "token", token, {
          maxAge: 60 * 60,
        });

        // Globally sets the authenticated user's data
        dispatchWithLoading(
          ActionTypes.GET_USER,
          authUserObj ? authUserObj.uid : null
        ).then(({ user }) => {
          setAuthStatus(AuthTypes.AUTH);
          setUser(user || Toymaker.fromData(authUserObj));

          // TODO: Slowly phase out Reactn
          setGlobal({
            authStatus: AuthTypes.AUTH,
            authUser: authUserObj,
            user,
          });

          /**
         * If user is on a page with a AUTH restriction, redirect.
         * Using window.location.pathname as router.pathname doesn't update.
         
         * TODO: Find a way to use router.pathname instead so this functionality
         * can work on dynamic routes as well. There are no cases of this yet,
         * but might be in the future.
         */
          const redirectUrl = getRedirectRouteForRouteName(
            window.location.pathname,
            AuthTypes.AUTH
          );
          if (redirectUrl) router.push(redirectUrl);
        });
      }
    );

    return () => listener;
  }, []);

  return (
    <AuthContext.Provider value={{ authStatus, authUser, user }}>
      {children}
    </AuthContext.Provider>
  );
};
