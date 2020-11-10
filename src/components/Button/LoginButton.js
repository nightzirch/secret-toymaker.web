import Routes from "config/routes";
import { useRouter } from "next/router";
import React from "reactn";
import Button from "./Button";

const LoginButton = (props) => {
  const router = useRouter();

  const gotoLogin = () => {
    router.push(Routes.LOGIN);
  };

  return (
    <Button
      icon={<ion-icon name="arrow-forward"></ion-icon>}
      iconPlacement="right"
      onClick={gotoLogin}
      primary
      title="Go to login"
      {...props}
    />
  );
};

export default LoginButton;
