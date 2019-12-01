import firebaseConfig from "config/firebaseConfig";
import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/functions";
import moment from "moment";

moment.locale("nb");

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);

    if (process.env.REACT_APP_USE_LOCAL_FUNCTIONS === "true") {
      app.functions().useFunctionsEmulator("http://localhost:5000");
    }

    this.auth = app.auth();
    this.db = app.firestore();
    this.functions = app.functions();

    this.googleLoginProvider = new app.auth.GoogleAuthProvider();
    this.facebookLoginProvider = new app.auth.FacebookAuthProvider();
  }

  // AUTH
  createUserWithEmailAndPassword = ({ email, password }) =>
    this.auth.createUserWithEmailAndPassword(email, password).then(result => {
      this.setUser(result).then(() =>
        this.signInWithEmailAndPassword({ email, password })
      );
    });

  signInWithEmailAndPassword = ({ email, password }) =>
    this.auth.signInWithEmailAndPassword(email, password);

  signOut = () => this.auth.signOut();

  passwordReset = email => this.auth.sendPasswordResetEmail(email);

  passwordUpdate = password => this.auth.currentUser.updatePassword(password);

  signInWithGoogle = () => {
    this.signInWithPopup(this.googleLoginProvider);
  };

  signInWithFacebook = () => {
    this.signInWithPopup(this.facebookLoginProvider);
  };

  signInWithPopup = provider => {
    this.auth
      .signInWithPopup(provider)
      .then(result => {
        this.setUser(result);
      })
      .then(() => {
        console.log("Successfully logged in!");
      })
      .catch(error => {
        console.log("Error: ", error);
      });
  };

  // FUNCTIONS
  getAmountOfParticipants = () => {
    return 1337;
  };

  // DB
  getStage = () => {
    const stage = this.functions.httpsCallable("stage");
    return stage()
      .then(result => {
        const { start, end, ...rest } = result.data;
        return {
          start: new Date(start),
          end: new Date(end),
          ...rest
        };
      })
      .catch(e => {
        console.log("Error getting stage", e);
        return null;
      });
  };

  setUser = result => {
    const { displayName, email, uid } = result.user;
    const { isNewUser, providerId, username } = result.additionalUserInfo;
    const ref = this.db.collection("participants").doc(uid);

    if (isNewUser) {
      let userObj = {
        email: email,
        name: displayName,
        uid: uid,
        providers: {}
      };

      if (providerId) {
        userObj.providers[providerId] = {
          email: email,
          providerId: providerId,
          uid: uid,
          username: username || null
        };
      }

      return ref.set(userObj);
    }
    return;
  };

  getUser = uid => {
    return uid
      ? this.db
          .collection("participants")
          .doc(uid)
          .get()
          .then(doc => {
            return doc.exists ? doc.data() : null;
          })
          .catch(error => {
            console.log("Error while fetching user", error);
            return null;
          })
      : null;
  };

  updateUser = (uid, { email, name, apiToken }) => {
    this.db
      .collection("participants")
      .doc(uid)
      .set(
        {
          email,
          name,
          apiToken
        },
        {
          merge: true
        }
      )
      .then(() => {
        return this.getUser(uid);
      });
  };

  // Imported actions from participantActions
  registerParticipation = user => {
    const participate = this.functions.httpsCallable("participate");
    return participate(user).then(result => console.log(result.data));
  };

  initGift = user => {
    const initGift = this.functions.httpsCallable("initGift");
    return initGift({ user: user, isPrimary: true }).then(result =>
      console.log(result.data)
    );
  };

  initDonation = user => {
    const initGift = this.functions.httpsCallable("initGift");
    return initGift({ user: user }).then(result => console.log(result.data));
  };

  editParticipant = (userId, email, notes) => {};
  getParticipant = apitoken => {};
  getAmountOfParticipants = () => {};
  getNewDonationMatch = (userId, email, notes) => {};
  matchChecked = userId => {};

  // Imported actions from notificationActions
  subscribeToNotifications = (userId, subscription) => {};
  unsubscribeFromNotifications = (userId, subscription) => {};
  setSubscribedState = isSubscribed => {};
}

export default Firebase;
