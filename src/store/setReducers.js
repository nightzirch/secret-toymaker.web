import { addReducer } from "reactn";
import ActionTypes from "utils/types/ActionTypes";
import ErrorTypes from "utils/types/ErrorTypes";

// Initial state
const setReducers = () => {
  addReducer(ActionTypes.GET_ALERTS, async (global, dispatch) => {
    const alerts = await global.firebase.getAlerts();
    return { alerts };
  });

  addReducer(ActionTypes.CLOSE_ALERT, async (global, dispatch, id) => {
    const filteredAlerts = global.alerts.filter(alert => alert.id !== id);
    return { alerts: filteredAlerts };
  });

  addReducer(ActionTypes.GET_USER, async (global, dispatch, userId) => {
    const user = await global.firebase.getUser(userId);
    return { user };
  });

  addReducer(ActionTypes.UPDATE_USER, async (global, dispatch, fields) => {
    const response = await global.firebase.updateUser(global.user.uid, fields);

    if (response.error) {
      await dispatch[ActionTypes.SET_ERROR](
        ErrorTypes.UPDATE_USER,
        response.error
      );
    } else {
      await dispatch[ActionTypes.SET_ERROR](ErrorTypes.UPDATE_USER);
    }

    await dispatch[ActionTypes.GET_USER](global.user.uid);
  });

  addReducer(
    ActionTypes.UPDATE_CONSENTS,
    async (global, dispatch, consents) => {
      const response = await global.firebase.updateConsents(
        global.user.uid,
        consents
      );

      if (response.error) {
        await dispatch[ActionTypes.SET_ERROR](
          ErrorTypes.UPDATE_CONSENTS,
          response.error
        );
      } else {
        await dispatch[ActionTypes.SET_ERROR](ErrorTypes.UPDATE_CONSENTS);
      }

      await dispatch[ActionTypes.GET_USER](global.user.uid);
    }
  );

  addReducer(ActionTypes.UPDATE_API_TOKEN, async (global, dispatch, fields) => {
    const response = await global.firebase.updateApiToken(
      global.user.uid,
      fields
    );

    if (response.error) {
      await dispatch[ActionTypes.SET_ERROR](
        ErrorTypes.UPDATE_API_TOKEN,
        response.error
      );
    } else {
      await dispatch[ActionTypes.SET_ERROR](ErrorTypes.UPDATE_API_TOKEN);
    }

    await dispatch[ActionTypes.GET_USER](global.user.uid);
  });

  addReducer(ActionTypes.GET_STAGE, async (global, dispatch) => {
    const stage = await global.firebase.getStage();
    return { stage };
  });

  addReducer(ActionTypes.GET_PARTICIPATION_STATUS, async (global, dispatch) => {
    const participations = await global.firebase.getParticipations(
      global.user.uid,
      global.user.apiToken
    );
    return { participations };
  });

  addReducer(
    ActionTypes.REGISTER_PARTICIPATION,
    async (global, dispatch, notes) => {
      await global.firebase.registerParticipation(global.user.uid, notes);
      await dispatch[ActionTypes.GET_PARTICIPATION_STATUS]();
      await dispatch[ActionTypes.GET_USER](global.user.uid);
    }
  );

  addReducer(ActionTypes.REMOVE_PARTICIPATION, async (global, dispatch) => {
    await global.firebase.removeParticipation(global.user.uid);
    await dispatch[ActionTypes.GET_PARTICIPATION_STATUS]();
    await dispatch[ActionTypes.GET_USER](global.user.uid);
  });

  addReducer(ActionTypes.GET_GIFTS, async (global, dispatch) => {
    const gifts = await global.firebase.getGifts(global.user.uid);
    return { gifts };
  });

  addReducer(
    ActionTypes.SEND_GIFT,
    async (global, dispatch, giftId, isSent) => {
      await global.firebase.sendGift(global.user.uid, giftId, isSent);
      await dispatch[ActionTypes.GET_GIFTS]();
      await dispatch[ActionTypes.GET_STATS]();
    }
  );

  addReducer(
    ActionTypes.RECEIVE_GIFT,
    async (global, dispatch, giftId, isReceived) => {
      await global.firebase.receiveGift(global.user.uid, giftId, isReceived);
      await dispatch[ActionTypes.GET_GIFTS]();
      await dispatch[ActionTypes.GET_STATS]();
    }
  );

  addReducer(
    ActionTypes.REPORT_GIFT,
    async (global, dispatch, giftId, isReporting, reportMessage) => {
      const gifts = await global.firebase.reportGift(
        global.user.uid,
        giftId,
        isReporting,
        reportMessage
      );
      return { gifts };
    }
  );

  addReducer(ActionTypes.DONATE_GIFT, async (global, dispatch) => {
    await global.firebase.donateGift(global.user.uid);
    await dispatch[ActionTypes.GET_GIFTS]();
  });

  addReducer(ActionTypes.GET_STATS, async (global, dispatch) => {
    const stats = await global.firebase.getStats();
    return {
      stats: { ...global.stats, [stats.year]: stats }
    };
  });

  addReducer(ActionTypes.SET_ERROR, async (global, dispatch, key, message) => {
    return { error: { ...global.error, [key]: message } };
  });

  addReducer(ActionTypes.SET_LOADING, async (global, dispatch, key, value) => {
    return {
      loading: { ...global.loading, [key]: value }
    };
  });
};

export default setReducers;
