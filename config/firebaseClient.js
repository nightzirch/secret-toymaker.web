import firebaseConfig from "config/firebaseConfig";
import firebase from "firebase/app";
import "firebase/auth";

if (typeof window !== "undefined" && !firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
