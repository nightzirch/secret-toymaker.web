import alertReducers from "./alertReducers";
import errorReducers from "./errorReducers";
import firebaseReducers from "./firebaseReducers";
import giftReducers from "./giftReducers";
import loadingReducers from "./loadingReducers";
import participationReducers from "./participationReducers";
import userReducers from "./userReducers";

export default {
  ...alertReducers,
  ...errorReducers,
  ...firebaseReducers,
  ...giftReducers,
  ...loadingReducers,
  ...participationReducers,
  ...userReducers,
};
