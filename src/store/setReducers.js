import { addReducer } from "reactn";

// Initial state
const setReducers = () => {
  addReducer("updateUser", async (global, dispatch, fields) => {
    const user = await global.firebase.updateUser(global.user.uid, fields);
    return { user };
  });

  addReducer("updateApiToken", async (global, dispatch, fields) => {
    const user = await global.firebase.updateApiToken(global.user.uid, fields);
    return { user };
  });

  addReducer("updateStage", async (global, dispatch) => {
    const stage = await global.firebase.getStage();
    return { stage };
  });

  addReducer("fetchParticipationStatus", async (global, dispatch) => {
    const participations = await global.firebase.getParticipations(
      global.user.uid,
      global.user.apiToken
    );
    return { participations };
  });

  addReducer("registerParticipation", async (global, dispatch, notes) => {
    const registerParticipation = await global.firebase.registerParticipation(
      global.user.uid,
      notes
    );
    console.log(registerParticipation);
    // return { participation };
  });
};

export default setReducers;
