import ActionTypes from "@/utils/types/ActionTypes";

export default {
  [ActionTypes.GET_PARTICIPATION_STATUS]: async (global, dispatch) => {
    const participations = await global.firebase.getParticipations(
      global.user.uid,
      global.user.apiToken
    );
    return { participations };
  },

  [ActionTypes.REGISTER_PARTICIPATION]: async (
    global,
    dispatch,
    notes,
    year
  ) => {
    await global.firebase.registerParticipation(global.user.uid, notes, year);
    await dispatch[ActionTypes.GET_PARTICIPATION_STATUS]();
    await dispatch[ActionTypes.GET_USER](global.user.uid);
  },

  [ActionTypes.REMOVE_PARTICIPATION]: async (global, dispatch, year) => {
    await global.firebase.removeParticipation(global.user.uid, year);
    await dispatch[ActionTypes.GET_PARTICIPATION_STATUS]();
    await dispatch[ActionTypes.GET_USER](global.user.uid);
  },
};
