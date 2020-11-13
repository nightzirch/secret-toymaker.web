import GiftStatusTypes from "@/utils/types/GiftStatusTypes";

export const GiftStatusIllustrations = {
  [GiftStatusTypes.PACKING]: {
    text: "Packing",
    imgUrl: "/images/pack.png",
    width: 180,
    height: 128,
  },
  [GiftStatusTypes.SENT]: {
    text: "Sent",
    imgUrl: "/images/receiveg_t.png",
    width: 121,
    height: 102,
  },
  [GiftStatusTypes.RECEIVED]: {
    text: "Received",
    imgUrl: "/images/check_t.png",
    width: 67,
    height: 102,
  },
};
