import Routes from "config/routes";
import { useRouter } from "next/router";
import React from "reactn";
import { replaceString } from "utils/string";
import Button from "./Button";

const EventButton = (props) => {
  const router = useRouter();

  const gotoEvent = () => {
    // TODO: change this to the current year
    router.push(replaceString(Routes.EVENT, { ":year": "2019" }));
  };

  return (
    <Button
      icon={<ion-icon name="arrow-forward" />}
      iconPlacement="right"
      onClick={gotoEvent}
      primary
      title="Right this way"
      {...props}
    />
  );
};

export default EventButton;
