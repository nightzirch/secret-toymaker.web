import GiftStatusTypes from "@/utils/types/GiftStatusTypes";

export const GiftStatusIllustrations = {
  [GiftStatusTypes.PACKING]: {
    text: "Packing",
    imgUrl: "/images/pack.png",
    width: 1523,
    height: 1080,
  },
  [GiftStatusTypes.SENT]: {
    text: "Sent",
    imgUrl: "/images/receiveg_t.png",
    width: 1159,
    height: 975,
  },
  [GiftStatusTypes.RECEIVED]: {
    text: "Received",
    imgUrl: "/images/check_t.png",
    width: 652,
    height: 994,
  },
};
