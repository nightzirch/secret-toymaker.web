const settings = require("config/settings");

export default {
  isSupportingServiceWorker: () => {
    return "serviceWorker" in navigator;
  },

  isSupportingNotifications: () => {
    return "showNotification" in ServiceWorkerRegistration.prototype;
  },

  isSupportingPushMessaging: () => {
    return "PushManager" in window;
  },

  isBlockingNotifications: () => {
    return Notification.permission === "denied";
  },

  isSubscribedToServiceworker: () => {
    return navigator.serviceWorker.ready
      .then(function (serviceWorkerRegistration) {
        return serviceWorkerRegistration.pushManager
          .getSubscription()
          .then(function (subscription) {
            // Successfully got subscription
            return !!subscription;
          })
          .catch(function (err) {
            // Error during getSubscription()
            console.log("Error", err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  },

  registerServiceWorker: () => {
    return navigator.serviceWorker.register("/serviceworker.js");
  },

  subscribe: () => {
    return navigator.serviceWorker.ready.then(function (
      serviceWorkerRegistration
    ) {
      return serviceWorkerRegistration.pushManager
        .getSubscription()
        .then(function (subscription) {
          if (!!subscription) {
            // Already is subscribed
          } else {
            // Not subscribed
            return serviceWorkerRegistration.pushManager
              .subscribe({
                userVisibleOnly: true,
                applicationServerKey: urlB64ToUint8Array(
                  settings.vapidKeys.publicKey
                ),
              })
              .then((subscription) => {
                var subscriptionObject = JSON.parse(
                  JSON.stringify(subscription)
                );
                return subscriptionObject;
              })
              .catch(function (err) {
                if (Notification.permission === "denied") {
                  // Notifications blocked
                  console.log("Blocked", err);
                } else {
                  // Other error
                  console.log("Other error", err);
                }
              });
          }
        })
        .catch(function (err) {
          // Error during getSubscription()
          console.log("Error", err);
        });
    });
  },

  unsubscribe: () => {
    return navigator.serviceWorker.ready.then(function (
      serviceWorkerRegistration
    ) {
      return serviceWorkerRegistration.pushManager
        .getSubscription()
        .then(function (subscription) {
          if (!!subscription) {
            // Is subscribed
            return subscription
              .unsubscribe()
              .then((isUnsubscribed) => {
                return isUnsubscribed
                  ? JSON.parse(JSON.stringify(subscription))
                  : false;
              })
              .catch(function (err) {
                // Error
                console.log("Error", err);
              });
          } else {
            // Not subscribed
          }
        })
        .catch(function (err) {
          // Error during getSubscription()
          console.log("Error", err);
        });
    });
  },
};

function urlB64ToUint8Array(base64String) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}
