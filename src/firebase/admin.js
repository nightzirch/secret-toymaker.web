import firebaseConfig from "config/firebaseConfig";
import * as admin from "firebase-admin";

if (!admin.apps.length) {
  admin.initializeApp(firebaseConfig);
}

export default admin;
