import firebaseConfig from "@/config/firebaseConfig";
import "firebase/analytics";
import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/functions";
import moment from "moment";
moment.locale("nb");

class Firebase {
  constructor() {
    if (typeof window !== "undefined" && !app.apps.length) {
      app.initializeApp(firebaseConfig);

      console.log(
        "process.env.NEXT_PUBLIC_USE_LOCAL_FUNCTIONS",
        process.env.NEXT_PUBLIC_USE_LOCAL_FUNCTIONS
      );

      if (process.env.NEXT_PUBLIC_USE_LOCAL_FUNCTIONS === "true") {
        app.functions().useEmulator("localhost", 5001);
      }

      this.auth = app.auth();
      this.db = app.firestore();
      this.functions = app.functions();
      this.analytics = app.analytics();

      this.googleLoginProvider = new app.auth.GoogleAuthProvider();
      this.facebookLoginProvider = new app.auth.FacebookAuthProvider();
    }
  }

  // AUTH
  createUserWithEmailAndPassword = ({ email, password }) => {
    return this.auth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => this.signInWithEmailAndPassword({ email, password }))
      .catch((error) => ({ error: error.message }));
  };

  signInWithEmailAndPassword = ({ email, password }) =>
    this.auth
      .signInWithEmailAndPassword(email, password)
      .then(() => ({ success: "Successfully logged in!" }))
      .catch((error) => ({ error: error.message }));

  signOut = () => {
    this.auth.signOut().then(() => {
      console.log("Signed out successfully");
    });
  };

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
      .then(() => ({ success: "Successfully logged in!" }))
      .catch((error) => ({ error: error.message }));
  };

  deleteAccount = async () =>
    this.auth.currentUser
      .delete()
      .then((result) => result)
      .catch((error) => error);

  // DB
  getStage = () => {
    const stage = this.functions.httpsCallable("stage");
    return stage()
      .then((result) => {
        if (result.data) {
          const { start, end, ...rest } = result.data;
          return {
            start: new Date(start),
            end: new Date(end),
            ...rest,
          };
        }
      })
      .catch((e) => {
        console.log("Error getting stage", e);
        return null;
      });
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

  registerParticipation = (userId, notes, year) => {
    const participate = this.functions.httpsCallable("participate");
    return participate({
      user: userId,
      notes,
      participate: true,
      year,
    }).then((result) => result);
  };

  removeParticipation = (userId, year) => {
    const participate = this.functions.httpsCallable("participate");
    return participate({ user: userId, participate: false, year }).then(
      (result) => result
    );
  };

  getParticipations = (userId, apiToken) => {
    const participations = this.functions.httpsCallable("participateStatus");
    return participations({ user: userId, apiToken }).then(
      (result) => result.data.success
    );
  };

  getStats = (year) => {
    const getStats = this.functions.httpsCallable("getStats");
    return getStats({ year }).then((result) => result.data.success);
  };

  getAlerts = () => {
    const getAlerts = this.functions.httpsCallable("getAlerts");
    return getAlerts().then((result) => result.data.success);
  };

  getEvents = () => {
    const getEvents = this.functions.httpsCallable("getEvents");
    return getEvents().then((result) => result.data.success);
  };

  getGifts = (userId, year) => {
    const getGifts = this.functions.httpsCallable("getGifts");
    return getGifts({
      user: userId,
      year,
    }).then((result) => result.data.success);
  };

  sendGift = (userId, giftId, isSent, year) => {
    const updateGiftSentStatus = this.functions.httpsCallable(
      "updateGiftSentStatus"
    );
    return updateGiftSentStatus({
      user: userId,
      giftId,
      isSent,
      year,
    }).then((result) => result.data.success);
  };

  receiveGift = (userId, giftId, isReceived, year) => {
    const updateGiftReceivedStatus = this.functions.httpsCallable(
      "updateGiftReceivedStatus"
    );
    return updateGiftReceivedStatus({
      user: userId,
      giftId,
      isReceived,
      year,
    }).then((result) => result.data.success);
  };

  reportGift = (userId, giftId, isReporting, reportMessage, year) => {
    const updateGiftReportedStatus = this.functions.httpsCallable(
      "updateGiftReportedStatus"
    );
    return updateGiftReportedStatus({
      user: userId,
      giftId,
      isReporting,
      reportMessage,
      year,
    }).then((result) => result.data.success);
  };

  donateGift = (userId, year) => {
    const donateGift = this.functions.httpsCallable("donateGift");
    return donateGift({ user: userId, year }).then((result) => result.data);
  };

  // Imported actions from notificationActions
  subscribeToNotifications = (userId, subscription) => {};

  unsubscribeFromNotifications = (userId, subscription) => {};

  setSubscribedState = (isSubscribed) => {};
}

export default Firebase;
