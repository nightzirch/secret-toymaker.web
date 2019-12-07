import { getGlobal } from "reactn";
import Routes from "routes";
import AuthTypes from "utils/types/AuthTypes";

export const getNavigationItems = () => {
  const { firebase } = getGlobal();

  return [
    { title: "Home", route: Routes.FRONTPAGE },
    { title: "Faq", route: Routes.FAQ },

    {
      title: "Log in",
      route: Routes.LOGIN,
      requireAuthType: AuthTypes.NO_AUTH,
      hasPadding: true
    },
    {
      title: "Profile",
      route: Routes.PROFILE,
      requireAuthType: AuthTypes.AUTH,
      hasPadding: true
    },
    {
      title: "Log out",
      onClick: firebase.signOut,
      route: Routes.FRONTPAGE,
      requireAuthType: AuthTypes.AUTH
    }
  ];
};
