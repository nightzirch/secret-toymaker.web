import ActionTypes from "utils/types/ActionTypes";

export default {
  [ActionTypes.GET_STAGE]: async (global, dispatch) => {
    const stage = await global.firebase.getStage();
    return { stage };
  },

  [ActionTypes.GET_STATS]: async (global, dispatch) => {
    const stats = await global.firebase.getStats();
    return {
      stats: { ...global.stats, [stats.year]: stats },
    };
  },
};
