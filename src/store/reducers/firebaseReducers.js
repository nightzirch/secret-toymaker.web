import ActionTypes from "@/utils/types/ActionTypes";

export default {
  [ActionTypes.GET_STAGE]: async (global, dispatch) => {
    const stage = await global.firebase.getStage();
    return { stage };
  },
};
