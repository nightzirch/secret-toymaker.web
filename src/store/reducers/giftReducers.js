import ActionTypes from "@/utils/types/ActionTypes";

export default {
  [ActionTypes.GET_GIFTS]: async (global, dispatch) => {
    const gifts = await global.firebase.getGifts(global.user.uid);
    return { gifts };
  },

  [ActionTypes.SEND_GIFT]: async (global, dispatch, giftId, isSent) => {
    await global.firebase.sendGift(global.user.uid, giftId, isSent);
    await dispatch[ActionTypes.GET_GIFTS]();
    await dispatch[ActionTypes.GET_STATS]();
  },

  [ActionTypes.RECEIVE_GIFT]: async (global, dispatch, giftId, isReceived) => {
    await global.firebase.receiveGift(global.user.uid, giftId, isReceived);
    await dispatch[ActionTypes.GET_GIFTS]();
    await dispatch[ActionTypes.GET_STATS]();
  },

  [ActionTypes.REPORT_GIFT]: async (
    global,
    dispatch,
    giftId,
    isReporting,
    reportMessage
  ) => {
    const gifts = await global.firebase.reportGift(
      global.user.uid,
      giftId,
      isReporting,
      reportMessage
    );
    return { gifts };
  },

  [ActionTypes.DONATE_GIFT]: async (global, dispatch) => {
    await dispatch[ActionTypes.SET_ERROR](ErrorTypes.DONATE_GIFT);

    const response = await global.firebase.donateGift(global.user.uid);

    await dispatch[ActionTypes.GET_GIFTS]();
    await dispatch[ActionTypes.SET_ERROR](
      ErrorTypes.DONATE_GIFT,
      response.error
    );
  },
};
