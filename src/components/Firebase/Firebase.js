import firebaseConfig from "config/firebaseConfig";
import "firebase/analytics";
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
    this.analytics = app.analytics();

    this.googleLoginProvider = new app.auth.GoogleAuthProvider();
    this.facebookLoginProvider = new app.auth.FacebookAuthProvider();
  }

  // AUTH
  createUserWithEmailAndPassword = ({ email, password }) => {
    return this.auth
      .createUserWithEmailAndPassword(email, password)
      .then((result) =>
        this.setUser(result).then(() =>
          this.signInWithEmailAndPassword({ email, password })
        )
      )
      .catch((error) => ({ error: error.message }));
  };

  signInWithEmailAndPassword = ({ email, password }) =>
    this.auth
      .signInWithEmailAndPassword(email, password)
      .then(() => ({ success: "Successfully logged in!" }))
      .catch((error) => ({ error: error.message }));

  signOut = () => this.auth.signOut();

  resetPassword = (email) =>
    this.auth
      .sendPasswordResetEmail(email)
      .then(() => ({
        success: `Instructions on how to reset password was sent to ${email}.`,
      }))
      .catch((error) => ({ error: "Failed to reset password.", trace: error }));

  passwordUpdate = (password) => this.auth.currentUser.updatePassword(password);

  signInWithGoogle = () => this.signInWithPopup(this.googleLoginProvider);

  signInWithFacebook = () => this.signInWithPopup(this.facebookLoginProvider);

  signInWithPopup = async (provider) => {
    return this.auth
      .signInWithPopup(provider)
      .then((result) => {
        this.setUser(result);
      })
      .then(() => ({ success: "Successfully logged in!" }))
      .catch((error) => ({ error: error.message }));
  };

  // FUNCTIONS
  getAmountOfParticipants = () => {
    return 1337;
  };

  // DB
  getStage = () => {
    const stage = this.functions.httpsCallable("stage");
    return stage()
      .then((result) => {
        const { start, end, ...rest } = result.data;
        return {
          start: new Date(start),
          end: new Date(end),
          ...rest,
        };
      })
      .catch((e) => {
        console.log("Error getting stage", e);
        return null;
      });
  };

  setUser = async (result) => {
    const { displayName, email, uid } = result.user;
    const { providerId, username } = result.additionalUserInfo;
    const ref = this.db.collection("toymakers").doc(uid);
    const toymaker = await ref.get();

    if (!toymaker.exists) {
      const userObj = {
        email,
        name: displayName,
        uid,
        providers: {},
      };

      if (providerId) {
        userObj.providers[providerId] = {
          email,
          providerId,
          uid,
          username: username || null,
        };
      }

      return ref.set(userObj);
    }
    return null;
  };

  getUser = (uid) => {
    return uid
      ? this.db
          .collection("toymakers")
          .doc(uid)
          .get()
          .then((doc) => {
            return doc.exists ? doc.data() : null;
          })
          .catch((error) => {
            console.log("Error while fetching user", error);
            return null;
          })
      : null;
  };

  updateUser = (uid, { email }) => {
    return this.db
      .collection("toymakers")
      .doc(uid)
      .set(
        {
          email,
        },
        {
          merge: true,
        }
      )
      .then(() => ({ success: "Successfully updated user." }))
      .catch((error) => ({ error }));
  };

  updateConsents = (uid, { consents }) => {
    return this.db
      .collection("toymakers")
      .doc(uid)
      .set(
        {
          consents,
        },
        {
          merge: true,
        }
      )
      .then(() => ({ success: "Successfully updated consents." }))
      .catch((error) => ({ error }));
  };

  updateApiToken = (uid, { apiToken }) => {
    const updateApiKey = this.functions.httpsCallable("updateApiKey");
    return updateApiKey({ user: uid, apiToken }).then((result) => result.data);
  };

  registerParticipation = (userId, notes) => {
    const participate = this.functions.httpsCallable("participate");
    return participate({
      user: userId,
      notes,
      participate: true,
    }).then((result) => result);
  };

  removeParticipation = (userId) => {
    const participate = this.functions.httpsCallable("participate");
    return participate({ user: userId, participate: false }).then(
      (result) => result
    );
  };

  getParticipations = (userId, apiToken) => {
    const participations = this.functions.httpsCallable("participateStatus");
    return participations({ user: userId, apiToken }).then(
      (result) => result.data.success
    );
  };

  getStats = () => {
    const getStats = this.functions.httpsCallable("getStats");
    return getStats().then((result) => result.data.success);
  };

  getAlerts = () => {
    const getAlerts = this.functions.httpsCallable("getAlerts");
    return getAlerts().then((result) => result.data.success);
  };

  getEvents = () => {
    const getEvents = this.functions.httpsCallable("getEvents");
    return getEvents().then((result) => result.data.success);
  };

  getGifts = (userId) => {
    const getGifts = this.functions.httpsCallable("getGifts");
    return getGifts({
      user: userId,
    }).then((result) => result.data.success);
  };

  sendGift = (userId, giftId, isSent) => {
    const updateGiftSentStatus = this.functions.httpsCallable(
      "updateGiftSentStatus"
    );
    return updateGiftSentStatus({
      user: userId,
      giftId,
      isSent,
    }).then((result) => result.data.success);
  };

  receiveGift = (userId, giftId, isReceived) => {
    const updateGiftReceivedStatus = this.functions.httpsCallable(
      "updateGiftReceivedStatus"
    );
    return updateGiftReceivedStatus({
      user: userId,
      giftId,
      isReceived,
    }).then((result) => result.data.success);
  };

  reportGift = (userId, giftId, isReporting, reportMessage) => {
    const updateGiftReportedStatus = this.functions.httpsCallable(
      "updateGiftReportedStatus"
    );
    return updateGiftReportedStatus({
      user: userId,
      giftId,
      isReporting,
      reportMessage,
    }).then((result) => result.data.success);
  };

  donateGift = (userId) => {
    const donateGift = this.functions.httpsCallable("donateGift");
    return donateGift({ user: userId }).then((result) => result.data);
  };

  // Imported actions from notificationActions
  subscribeToNotifications = (userId, subscription) => {};

  unsubscribeFromNotifications = (userId, subscription) => {};

  setSubscribedState = (isSubscribed) => {};
}

export default Firebase;
