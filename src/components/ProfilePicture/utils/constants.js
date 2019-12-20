import Hand from "images/icons/hand.svg";
import Key from "images/icons/key.svg";
import Star from "images/icons/star.svg";
import Text from "images/icons/text.svg";

export const ROLES = {
  ADMIN: "admin",
  DONOR: "donor",
  TRANSLATOR: "translator",
  CONTRIBUTOR: "contributor"
};

export const BADGES = {
  [ROLES.ADMIN]: Key,
  [ROLES.DONOR]: Star,
  [ROLES.TRANSLATOR]: Text,
  [ROLES.CONTRIBUTOR]: Hand
};
