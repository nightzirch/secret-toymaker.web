import { useRouter } from "next/router";
import React from "reactn";
import Routes from "utils/routes";
import Button from "./Button";

const ProfileButton = (props) => {
  const router = useRouter();

  const gotoProfile = () => {
    // I really can't find docs about how to do this the clean way...
    router.push(Routes.PROFILE);
  };

  return (
    <Button
      icon={<ion-icon name="arrow-forward" />}
      iconPlacement="right"
      onClick={gotoProfile}
      primary
      title="Go to profile"
      {...props}
    />
  );
};

export default ProfileButton;
