import Firebase from "components/Firebase";

// Initial state
export default {
  alerts: [],
  authStatus: null,
  authUser: null,
  error: {},
  events: {},
  gifts: {},
  firebase: new Firebase(),
  isMenuOpen: false,
  loading: {},
  participations: null,
  stage: null,
  stats: null,
  user: null,
};
