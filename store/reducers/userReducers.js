import ActionTypes from "utils/types/ActionTypes";

export default {
  [ActionTypes.GET_USER]: async (global, dispatch, userId) => {
    const user = await global.firebase.getUser(userId);
    return { user };
  },

  [ActionTypes.UPDATE_USER]: async (global, dispatch, fields) => {
    const response = await global.firebase.updateUser(global.user.uid, fields);

    if (response.error) {
      await dispatch[ActionTypes.SET_ERROR](
        ErrorTypes.UPDATE_USER,
        response.error
      );
    } else {
      await dispatch[ActionTypes.SET_ERROR](ErrorTypes.UPDATE_USER);
    }

    await dispatch[ActionTypes.GET_USER](global.user.uid);
  },

  [ActionTypes.UPDATE_CONSENTS]: async (global, dispatch, consents) => {
    const response = await global.firebase.updateConsents(
      global.user.uid,
      consents
    );

    if (response.error) {
      await dispatch[ActionTypes.SET_ERROR](
        ErrorTypes.UPDATE_CONSENTS,
        response.error
      );
    } else {
      await dispatch[ActionTypes.SET_ERROR](ErrorTypes.UPDATE_CONSENTS);
    }

    await dispatch[ActionTypes.GET_USER](global.user.uid);
  },

  [ActionTypes.UPDATE_API_TOKEN]: async (global, dispatch, fields) => {
    const response = await global.firebase.updateApiToken(
      global.user.uid,
      fields
    );

    if (response.error) {
      await dispatch[ActionTypes.SET_ERROR](
        ErrorTypes.UPDATE_API_TOKEN,
        response.error
      );
    } else {
      await dispatch[ActionTypes.SET_ERROR](ErrorTypes.UPDATE_API_TOKEN);
    }

    await dispatch[ActionTypes.GET_USER](global.user.uid);
  },
};
