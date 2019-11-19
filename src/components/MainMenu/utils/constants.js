import * as ROUTES from "../../../routes";

export const NAVIGATION_ITEMS = [
  { title: "Home", url: ROUTES.FRONTPAGE },
  { title: "Faq", url: ROUTES.FAQ },
  { title: "Sign In", url: ROUTES.SIGNIN },
  { title: "Sign Up", url: ROUTES.SIGNUP },
  /*  { title: "Profile", url: ROUTES.PROFILE }, */
  { title: "Gifts", url: ROUTES.GIFTS }
];

/*
  TODO: Add Authentication so you can't navigate to /profile if you're not logged in.
  TODO: Add check to make sure you're logged in before showing profile.
  TODO: Remove comment block so profile shows.
*/
