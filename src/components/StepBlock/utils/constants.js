import { SignupButton } from "components/Button";
import check from "images/check_t.png";
import pack from "images/pack.png";
import receive from "images/receiveg_t.png";
import signup from "images/sign_t.png";
import React from "react";

export const StepTypes = {
  SIGNUP: "SIGNUP",
  CHECK_MATCH: "CHECK_MATCH",
  SEND: "SEND",
  RECEIVE: "RECEIVE"
};

export const StepData = {
  [StepTypes.SIGNUP]: {
    title: "Sign up",
    text:
      "On the signup page, enter your API token and provide a note for your Secret Toymaker.",
    number: 1,
    button: <SignupButton />,
    image: {
      alt: "Sign up",
      title: "Sign up",
      src: signup
    }
  },
  [StepTypes.CHECK_MATCH]: {
    title: "Check your match",
    text:
      "Once the deadline for signing up is due, we will remind you by email to check to which lucky Tyrian you will send a gift.",
    number: 2,
    button: null,
    image: {
      alt: "Check your match",
      title: "Check your match",
      src: check
    }
  },
  [StepTypes.SEND]: {
    title: "Send a gift",
    text:
      "Use the note your match provided you to get a sense of what they wish for this Wintersday. Prepare, pack and send the gift to it's new home.",
    number: 3,
    button: null,
    image: {
      alt: "Send a gift",
      title: "Send a gift",
      src: pack
    }
  },
  [StepTypes.RECEIVE]: {
    title: "Receive a gift",
    text: "You will also receive a gift from your very own Secret Toymaker!",
    number: 4,
    button: null,
    image: {
      alt: "Receive a gift",
      title: "Receive a gift",
      src: receive
    }
  }
};
