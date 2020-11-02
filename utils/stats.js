import React from "react";
import StatTypes from "./types/StatTypes";

export const statData = {
  [StatTypes.DONATIONS_SENT]: {
    title: "Donations sent",
    icon: <ion-icon name="gift" />
  },
  [StatTypes.EVENT_END]: {
    render: d => new Date(d).toLocaleString(),
    title: "Event end",
    icon: <ion-icon name="alarm" />
  },
  [StatTypes.EVENT_START]: {
    render: d => new Date(d).toLocaleString(),
    title: "Event start",
    icon: <ion-icon name="time" />
  },
  [StatTypes.GIFTS_SENT]: {
    title: "Gifts sent",
    icon: <ion-icon name="gift" />
  },
  [StatTypes.PARTICIPANTS]: {
    title: "Participants",
    icon: <ion-icon name="people" />
  },
  [StatTypes.SIGNUP_END]: {
    render: d => new Date(d).toLocaleString(),
    title: "Signup end",
    icon: <ion-icon name="alarm" />
  },
  [StatTypes.SIGNUP_START]: {
    render: d => new Date(d).toLocaleString(),
    title: "Signup start",
    icon: <ion-icon name="time" />
  }
};
