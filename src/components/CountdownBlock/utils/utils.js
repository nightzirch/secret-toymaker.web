import { STAGES } from "config/constants";

export const getCountdownTitle = stage => {
  switch (stage) {
    case STAGES.SIGNUP:
      return "Gifting begins in";
    case STAGES.GIFTING:
      return "Gifting ends in";
    case STAGES.SPLASH:
    case STAGES.INACTIVE:
    default:
      return null;
  }
};
