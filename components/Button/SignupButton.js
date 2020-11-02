import { useRouter } from "next/router";
import React from "reactn";
import Routes from "utils/routes";
import Button from "./Button";

const SignupButton = (props) => {
  const router = useRouter();

  const gotoSignup = () => {
    router.push(Routes.SIGNUP);
  };

  return (
    <Button
      icon={<ion-icon name="arrow-forward"></ion-icon>}
      iconPlacement="right"
      onClick={gotoSignup}
      primary={true}
      title="Right this way"
      {...props}
    />
  );
};

export default SignupButton;
