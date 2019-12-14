import React, { useEffect, useGlobal } from "reactn";
import { dispatchWithLoading } from "utils/loading";
import ActionTypes from "utils/types/ActionTypes";
import AuthTypes from "utils/types/AuthTypes";

export const withSession = Component => {
  const WithSession = props => {
    const [global, setGlobal] = useGlobal();

    useEffect(() => {
      const listener = global.firebase.auth.onAuthStateChanged(authUser => {
        // Globally sets the authenticated user
        setGlobal({ authUser });

        // Globally sets the authenticated user's data
        dispatchWithLoading(
          ActionTypes.GET_USER,
          authUser ? authUser.uid : null
        ).then(({ user }) => {
          setGlobal({
            user,
            authStatus: user ? AuthTypes.AUTH : AuthTypes.NO_AUTH
          });
        });
      });

      return () => listener;
    }, []);

    return <Component {...props} />;
  };

  return WithSession;
};
