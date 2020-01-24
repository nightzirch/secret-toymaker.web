import { withRouter } from "react-router-dom";
import React from "reactn";
import Routes from "routes";
import Button from "./Button";

const ProfileButton = props => {
  const gotoProfile = () => {
    // I really can't find docs about how to do this the clean way...
    props.history.push(Routes.PROFILE);
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

export default withRouter(ProfileButton);
