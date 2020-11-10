import Routes from "@/config/routes";
import { useRouter } from "next/router";
import t from "prop-types";
import React from "reactn";
import Button from "./Button";

const ResetPasswordButton = (props) => {
  const router = useRouter();

  const handlePasswordResetClick = () => {
    router.push(Routes.RESET_PASSWORD);
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
  history: t.object,
};

export default ResetPasswordButton;
