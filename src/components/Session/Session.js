import React from "reactn";
import AuthTypes from "utils/types/AuthTypes";

export const withSession = Component => {
  class WithSession extends React.Component {
    componentDidMount() {
      this.listener = this.global.firebase.auth.onAuthStateChanged(authUser => {
        // Globally sets the authenticated user
        this.setGlobal({ authUser });

        // Globally sets the authenticated user's data
        const userPromise = this.global.firebase.getUser(
          authUser && authUser.uid
        );
        if (userPromise) {
          userPromise.then(user =>
            this.setGlobal({ user, authStatus: AuthTypes.AUTH })
          );
        } else {
          this.setGlobal({ user: null, authStatus: AuthTypes.NO_AUTH });
        }
      });
    }

    componentWillUnmount() {
      this.listener();
    }

    render() {
      return <Component {...this.props} />;
    }
  }

  return WithSession;
};
