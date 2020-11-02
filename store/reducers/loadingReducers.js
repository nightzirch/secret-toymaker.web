import ActionTypes from "utils/types/ActionTypes";

export default {
  [ActionTypes.SET_LOADING]: async (global, dispatch, key, value) => {
    return {
      loading: { ...global.loading, [key]: value },
    };
  },
};
