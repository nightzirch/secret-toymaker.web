import { addReducer } from "reactn";
import ActionTypes from "utils/types/ActionTypes";

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
    const user = await global.firebase.updateUser(global.user.uid, fields);
    return { user };
  });

  addReducer(ActionTypes.UPDATE_API_TOKEN, async (global, dispatch, fields) => {
    const user = await global.firebase.updateApiToken(global.user.uid, fields);
    return { user };
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
      const user = await global.firebase.registerParticipation(
        global.user.uid,
        notes
      );
      await dispatch.fetchParticipationStatus();
      return { user };
    }
  );

  addReducer(ActionTypes.REMOVE_PARTICIPATION, async (global, dispatch) => {
    const user = await global.firebase.removeParticipation(global.user.uid);
    await dispatch.fetchParticipationStatus();
    return { user };
  });

  addReducer(ActionTypes.GET_GIFTS, async (global, dispatch) => {
    const gifts = await global.firebase.getGifts(global.user.uid);
    const { outgoing, incoming } = gifts;

    const primaryOutgoing = gifts
      ? outgoing.splice(outgoing.map(g => g.isPrimary).indexOf(true), 1)[0]
      : null;
    const primaryIncoming = gifts
      ? incoming.splice(incoming.map(g => g.isPrimary).indexOf(true), 1)[0]
      : null;

    return {
      gifts: {
        primaryOutgoing,
        primaryIncoming,
        outgoing,
        incoming
      }
    };
  });

  addReducer(
    ActionTypes.SEND_GIFT,
    async (global, dispatch, giftId, isSent) => {
      const gifts = await global.firebase.sendGift(
        global.user.uid,
        giftId,
        isSent
      );
      return { gifts };
    }
  );

  addReducer(
    ActionTypes.RECEIVE_GIFT,
    async (global, dispatch, giftId, isReceived) => {
      const gifts = await global.firebase.receiveGift(
        global.user.uid,
        giftId,
        isReceived
      );
      return { gifts };
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

  addReducer(ActionTypes.GET_STATS, async (global, dispatch) => {
    const stats = await global.firebase.getStats();
    return {
      stats: { ...global.stats, [stats.year]: stats }
    };
  });

  addReducer(ActionTypes.SET_LOADING, async (global, dispatch, key, value) => {
    return {
      loading: { ...global.loading, [key]: value }
    };
  });
};

export default setReducers;
