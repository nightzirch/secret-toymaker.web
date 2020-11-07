import StageTypes from "utils/types/StageTypes";

export const getStatusData = (event) => {
  const { currentStage, eventEnd } = event;
  switch (currentStage.type) {
    case StageTypes.GIFTING:
      return {
        statusText: "Gifting in progress",
        statusColorScheme: "meteorite",
      };
    case StageTypes.MATCHING:
      return {
        statusText: "Setting up matches...",
        statusColorScheme: "grey",
      };
    case StageTypes.SIGNUP:
      return {
        statusText: "Signup is active",
        statusColorScheme: "meteorite",
      };
    case StageTypes.INACTIVE:
    default:
      return new Date(eventEnd) < new Date()
        ? { statusText: "Ended", statusColorScheme: "error" }
        : { statusText: "Inactive", statusColorScheme: "grey" };
  }
};
