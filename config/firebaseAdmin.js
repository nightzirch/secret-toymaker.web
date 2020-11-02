import firebaseConfig from "config/firebaseConfig";
import * as firebaseAdmin from "firebase-admin";

if (!firebaseAdmin.apps.length) {
  firebaseAdmin.initializeApp(firebaseConfig);
}

export default firebaseAdmin;
