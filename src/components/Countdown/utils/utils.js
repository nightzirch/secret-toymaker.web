import { StageTypes } from "config/constants";

export const getCountdownTitle = stageType => {
  switch (stageType) {
    case StageTypes.SIGNUP:
      return "Gifting begins in";
    case StageTypes.GIFTING:
      return "Gifting ends in";
    case StageTypes.SPLASH:
    case StageTypes.INACTIVE:
    default:
      return null;
  }
};
