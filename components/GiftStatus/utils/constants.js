import GiftStatusTypes from "utils/types/GiftStatusTypes";

export const GiftStatusIllustrations = {
  [GiftStatusTypes.PACKING]: {
    text: "Packing",
    imgUrl: "/images/pack.png"
  },
  [GiftStatusTypes.SENT]: {
    text: "Sent",
    imgUrl: "/images/receiveg_t.png"
  },
  [GiftStatusTypes.RECEIVED]: {
    text: "Received",
    imgUrl: "/images/check_t.png"
  }
};
