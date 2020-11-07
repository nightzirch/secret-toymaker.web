import alertReducers from "./alertReducers";
import errorReducers from "./errorReducers";
import eventReducers from "./eventReducers";
import firebaseReducers from "./firebaseReducers";
import giftReducers from "./giftReducers";
import loadingReducers from "./loadingReducers";
import participationReducers from "./participationReducers";
import userReducers from "./userReducers";

export default {
  ...alertReducers,
  ...errorReducers,
  ...eventReducers,
  ...firebaseReducers,
  ...giftReducers,
  ...loadingReducers,
  ...participationReducers,
  ...userReducers,
};
