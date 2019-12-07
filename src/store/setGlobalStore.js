import Firebase from "components/Firebase";
import { setGlobal } from "reactn";

// Initial state
const setGlobalStore = () => {
  setGlobal({
    authStatus: null,
    authUser: null,
    firebase: new Firebase(),
    isMenuOpen: false,
    stage: null,
    user: null
  });
};

export default setGlobalStore;
