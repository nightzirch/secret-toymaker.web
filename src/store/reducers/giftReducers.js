import ActionTypes from "@/utils/types/ActionTypes";

export default {
  [ActionTypes.GET_GIFTS]: async (global, dispatch, year) => {
    const gifts = await global.firebase.getGifts(global.user.uid, year);
    return { gifts };
  },

  [ActionTypes.SEND_GIFT]: async (global, dispatch, giftId, isSent, year) => {
    await global.firebase.sendGift(global.user.uid, giftId, isSent, year);
    await dispatch[ActionTypes.GET_GIFTS](year);
    await dispatch[ActionTypes.GET_STATS](year);
  },

  [ActionTypes.RECEIVE_GIFT]: async (
    global,
    dispatch,
    giftId,
    isReceived,
    year
  ) => {
    await global.firebase.receiveGift(
      global.user.uid,
      giftId,
      isReceived,
      year
    );
    await dispatch[ActionTypes.GET_GIFTS](year);
    await dispatch[ActionTypes.GET_STATS](year);
  },

  [ActionTypes.REPORT_GIFT]: async (
    global,
    dispatch,
    giftId,
    isReporting,
    reportMessage,
    year
  ) => {
    const gifts = await global.firebase.reportGift(
      global.user.uid,
      giftId,
      isReporting,
      reportMessage,
      year
    );
    return { gifts };
  },

  [ActionTypes.DONATE_GIFT]: async (global, dispatch, year) => {
    await dispatch[ActionTypes.SET_ERROR](ErrorTypes.DONATE_GIFT);

    const response = await global.firebase.donateGift(global.user.uid, year);

    await dispatch[ActionTypes.GET_GIFTS](year);
    await dispatch[ActionTypes.SET_ERROR](
      ErrorTypes.DONATE_GIFT,
      response.error
    );
  },
};
