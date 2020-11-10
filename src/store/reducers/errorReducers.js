import ActionTypes from "utils/types/ActionTypes";

export default {
  [ActionTypes.SET_ERROR]: async (global, dispatch, key, message) => {
    return { error: { ...global.error, [key]: message } };
  },
};
