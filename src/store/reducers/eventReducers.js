import ActionTypes from "utils/types/ActionTypes";

export default {
  [ActionTypes.GET_EVENTS]: async (global, dispatch) => {
    const events = await global.firebase.getEvents();
    return { events };
  },
};
