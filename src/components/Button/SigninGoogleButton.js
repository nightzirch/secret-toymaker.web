import { dispatchWithLoading } from "@/utils/loading";
import ActionTypes from "@/utils/types/ActionTypes";
import ErrorTypes from "@/utils/types/ErrorTypes";
import t from "prop-types";
import React, { useGlobal } from "reactn";
import Button from "./Button";

const SigninGoogleButton = (props) => {
  const { errorType } = props;
  const [firebase] = useGlobal("firebase");

  const handleSigninClick = async () => {
    const response = await firebase.signInWithGoogle();

    if (response.error) {
      dispatchWithLoading(ActionTypes.SET_ERROR, errorType, response.error);
    } else {
      dispatchWithLoading(ActionTypes.SET_ERROR, errorType);
    }
  };

  return (
    <Button
      icon={<ion-icon name="logo-google"></ion-icon>}
      theme="secondary"
      onClick={handleSigninClick}
      title="Log in with Google"
      {...props}
    />
  );
};

SigninGoogleButton.propTypes = {
  errorType: t.string,
};

SigninGoogleButton.defaultProps = {
  errorType: ErrorTypes.LOGIN,
};

export default SigninGoogleButton;
