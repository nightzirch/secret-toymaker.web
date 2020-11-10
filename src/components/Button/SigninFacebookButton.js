import { dispatchWithLoading } from "@/utils/loading";
import ActionTypes from "@/utils/types/ActionTypes";
import ErrorTypes from "@/utils/types/ErrorTypes";
import t from "prop-types";
import React, { useGlobal } from "reactn";
import Button from "./Button";

const SigninFacebookButton = (props) => {
  const { errorType } = props;
  const [firebase] = useGlobal("firebase");

  const handleSigninClick = async () => {
    const response = await firebase.signInWithFacebook();

    if (response.error) {
      dispatchWithLoading(ActionTypes.SET_ERROR, errorType, response.error);
    } else {
      dispatchWithLoading(ActionTypes.SET_ERROR, errorType);
    }
  };

  return (
    <Button
      icon={<ion-icon name="logo-facebook"></ion-icon>}
      theme="secondary"
      onClick={handleSigninClick}
      title="Log in with Facebook"
      {...props}
    />
  );
};

SigninFacebookButton.propTypes = {
  errorType: t.string,
};

SigninFacebookButton.defaultProps = {
  errorType: ErrorTypes.LOGIN,
};

export default SigninFacebookButton;
