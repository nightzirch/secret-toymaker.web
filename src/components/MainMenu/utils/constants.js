import Routes from "routes";

export const NAVIGATION_ITEMS = [
  { title: "Home", url: Routes.FRONTPAGE },
  { title: "Faq", url: Routes.FAQ },
  { title: "Sign In", url: Routes.SIGNIN },
  { title: "Sign Up", url: Routes.SIGNUP },
  /*  { title: "Profile", url: Routes.PROFILE }, */
  { title: "Gifts", url: Routes.GIFTS }
];

/*
  TODO: Add Authentication so you can't navigate to /profile if you're not logged in.
  TODO: Add check to make sure you're logged in before showing profile.
  TODO: Remove comment block so profile shows.
*/
