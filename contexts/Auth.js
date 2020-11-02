import nookies from "nookies";
import { createContext, useEffect, useState } from "react";
import { useGlobal } from "reactn";
import { dispatchWithLoading } from "utils/loading";
import ActionTypes from "utils/types/ActionTypes";
import AuthTypes from "utils/types/AuthTypes";

export const AuthContext = createContext({
  user: null,
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // useEffect(() => {
  //   return firebaseClient.auth().onIdTokenChanged(async (user) => {
  //     if (!user) {
  //       setUser(null);
  //       nookies.set(undefined, "token", "", {});
  //       return;
  //     }

  //     const token = await user.getIdToken();
  //     setUser(user);
  //     nookies.set(undefined, "token", token, {});
  //   });
  // }, []);

  const [global, setGlobal] = useGlobal();

  useEffect(() => {
    const listener = global.firebase.auth.onIdTokenChanged(async (authUser) => {
      if (!authUser) {
        setUser(null);
        setGlobal({
          authStatus: AuthTypes.NO_AUTH,
        });
        nookies.set(undefined, "token", "", {});
        return;
      }

      const token = await authUser.getIdToken();
      setUser(authUser);
      nookies.set(undefined, "token", token, {});

      // Globally sets the authenticated user's data
      dispatchWithLoading(
        ActionTypes.GET_USER,
        authUser ? authUser.uid : null
      ).then(({ user }) => {
        setGlobal({
          user,
          authStatus: user ? AuthTypes.AUTH : AuthTypes.NO_AUTH,
        });
      });
    });

    return () => listener;
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};
