import ActionTypes from "@/utils/types/ActionTypes";

// Reducers
export default {
  [ActionTypes.GET_ALERTS]: async (global, dispatch) => {
    const alerts = await global.firebase.getAlerts();
    return { alerts };
  },

  [ActionTypes.CLOSE_ALERT]: async (global, dispatch, id) => {
    const filteredAlerts = global.alerts.filter((alert) => alert.id !== id);
    return { alerts: filteredAlerts };
  },
};
