export const GIFT_DIRECTION = {
  OUTGOING: "outgoing",
  INCOMING: "incoming"
};

export const GIFT_STATUS = {
  PACKING: "packing",
  SENT: "sent",
  RECEIVED: "received"
};

export const GIFT_STATUS_ILLUSTRATIONS = {
  [GIFT_STATUS.PACKING]: {
    text: "Packing",
    imgUrl: "/images/pack.png"
  },
  [GIFT_STATUS.SENT]: {
    text: "Sent",
    imgUrl: "/images/receiveg_t.png"
  },
  [GIFT_STATUS.RECEIVED]: {
    text: "Received",
    imgUrl: "/images/check_t.png"
  }
};
