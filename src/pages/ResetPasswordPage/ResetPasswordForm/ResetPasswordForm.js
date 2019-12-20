import Alert from "components/Alert";
import Button from "components/Button";
import Error from "components/Error";
import { InputField } from "components/Form";
import { Grid, GridItem } from "components/Grid";
import Link from "components/Link";
import React, { useEffect, useGlobal, useState } from "reactn";
import Routes from "routes";
import { dispatchWithLoading } from "utils/loading";
import ActionTypes from "utils/types/ActionTypes";
import ErrorTypes from "utils/types/ErrorTypes";
import "./ResetPasswordForm.scss";

const LoginForm = props => {
  const [firebase] = useGlobal("firebase");
  const [user] = useGlobal("user");
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState(null);

  useEffect(() => {
    if (user) {
      if (user.email !== email) {
        setEmail(user.email);
      }
    }
  }, [user]);

  const handleInputChange = e => {
    setEmail(e.target.value);
  };

  const handleFormSubmit = async e => {
    e.preventDefault();
    const response = await firebase.resetPassword(email);

    if (response.error) {
      setSuccessMessage(null);
      dispatchWithLoading(
        ActionTypes.SET_ERROR,
        ErrorTypes.RESET_PASSWORD,
        response.error
      );
    } else {
      setSuccessMessage(response.success);
      dispatchWithLoading(ActionTypes.SET_ERROR, ErrorTypes.RESET_PASSWORD);
    }
  };

  const renderSuccess = () =>
    successMessage && (
      <div className="reset-password-form__alert">
        <Alert isStatic type="success">
          {successMessage}
        </Alert>
      </div>
    );

  return (
    <div className="reset-password-form__container">
      <Error id={ErrorTypes.RESET_PASSWORD} />
      {renderSuccess()}

      <form className="reset-password-form" onSubmit={handleFormSubmit}>
        <Grid>
          <GridItem span={4} offset={5}>
            <InputField
              id="email"
              label="Email"
              onChange={handleInputChange}
              placeholder="scarlet@briar.com"
              type="email"
              value={email}
            />

            <Button
              isFullWidth
              theme="danger"
              title="Reset password"
              type="submit"
            />

            {user ? (
              <Link isCentered title="Back to profile" url={Routes.PROFILE} />
            ) : (
              <Link isCentered title="Back to login" url={Routes.LOGIN} />
            )}
          </GridItem>
        </Grid>
      </form>
    </div>
  );
};
export default LoginForm;
