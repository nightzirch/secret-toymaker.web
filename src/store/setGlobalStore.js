import Firebase from "components/Firebase";
import { setGlobal } from "reactn";

// Initial state
const setGlobalStore = () => {
  setGlobal({
    alerts: [],
    authStatus: null,
    authUser: null,
    firebase: new Firebase(),
    isMenuOpen: false,
    loading: {},
    participations: null,
    stage: null,
    stats: null,
    user: null
  });
};

export default setGlobalStore;
