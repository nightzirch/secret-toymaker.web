import StageTypes from "utils/types/StageTypes";

export const getStatusData = (event) => {
  const { currentStage, eventEnd } = event;
  switch (currentStage.type) {
    case StageTypes.GIFTING:
      return {
        fontWeight: "normal",
        statusText: "Gifting in progress",
        statusColorScheme: "meteorite",
      };
    case StageTypes.MATCHING:
      return {
        fontWeight: "normal",
        statusText: "Setting up matches...",
        statusColorScheme: "meteorite",
      };
    case StageTypes.SIGNUP:
      return {
        fontWeight: "normal",
        statusText: "Signup is active",
        statusColorScheme: "meteorite",
      };
    case StageTypes.INACTIVE:
    default:
      return new Date(eventEnd) < new Date()
        ? {
            fontWeight: "light",
            isItalic: true,
            statusText: "Ended",
            statusColorScheme: "grey",
          }
        : {
            fontWeight: "light",
            isItalic: true,
            statusText: "Inactive",
            statusColorScheme: "grey",
          };
  }
};
