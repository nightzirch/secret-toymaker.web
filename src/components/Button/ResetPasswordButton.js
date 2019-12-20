import t from "prop-types";
import { withRouter } from "react-router-dom";
import React from "reactn";
import Routes from "routes";
import Button from "./Button";

const ResetPasswordButton = props => {
  const handlePasswordResetClick = () => {
    props.history.push(Routes.RESET_PASSWORD);
  };

  return (
    <Button
      onClick={handlePasswordResetClick}
      theme="danger"
      title="Reset password"
      {...props}
    />
  );
};

ResetPasswordButton.propTypes = {
  history: t.object
};

export default withRouter(ResetPasswordButton);
