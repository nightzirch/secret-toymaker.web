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
};

export default setReducers;
