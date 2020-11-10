import StageTypes from "@/utils/types/StageTypes";

export const getCountdownTitle = (stageType) => {
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
