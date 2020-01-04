import Button, {
  SigninFacebookButton,
  SigninGoogleButton
} from "components/Button";
import Error from "components/Error";
import { InputField } from "components/Form";
import { Grid, GridItem } from "components/Grid";
import Link from "components/Link";
import React from "reactn";
import Routes from "routes";
import { dispatchWithLoading } from "utils/loading";
import ActionTypes from "utils/types/ActionTypes";
import ErrorTypes from "utils/types/ErrorTypes";
import { doesPasswordsMatch } from "utils/validation";
import "./SignupForm.scss";

class SignupForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      password2: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleInputChange = e => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  };

  handleFormSubmit = async e => {
    e.preventDefault();
    const { email, password, password2 } = this.state;

    if (!doesPasswordsMatch(password, password2)) {
      dispatchWithLoading(
        ActionTypes.SET_ERROR,
        ErrorTypes.SIGNUP,
        "Passwords do not match."
      );
    } else {
      dispatchWithLoading(ActionTypes.SET_ERROR, ErrorTypes.SIGNUP);

      const response = await this.global.firebase.createUserWithEmailAndPassword(
        {
          email,
          password
        }
      );

      if (response.error) {
        dispatchWithLoading(
          ActionTypes.SET_ERROR,
          ErrorTypes.SIGNUP,
          response.error
        );
      }
    }
  };

  render() {
    return (
      <div className="signup-form__container">
        <Error id={ErrorTypes.SIGNUP} />

        <form className="signup-form" onSubmit={this.handleFormSubmit}>
          <Grid>
            <GridItem span={4} offset={5}>
              <InputField
                id="email"
                label="Email"
                onChange={this.handleInputChange}
                placeholder="scarlet@briar.com"
                type="email"
                value={this.state.email}
              />

              <InputField
                id="password"
                label="Password"
                onChange={this.handleInputChange}
                placeholder="Password"
                type="password"
                value={this.state.password}
              />

              <InputField
                id="password2"
                label="Repeat password"
                onChange={this.handleInputChange}
                placeholder="Password"
                type="password"
                value={this.state.password2}
              />

              <Button
                isCentered
                isFullWidth
                theme="primary"
                title="Sign up"
                type="submit"
              />

              <Link
                isCentered
                isFullWidth
                title="Already registered? Log in here"
                url={Routes.LOGIN}
              />

              <div className="signup-form__social-buttons">
                <SigninGoogleButton
                  errorType={ErrorTypes.SIGNUP}
                  isCentered
                  isFullWidth
                  title="Sign up with Google"
                />
                <SigninFacebookButton
                  errorType={ErrorTypes.SIGNUP}
                  isCentered
                  isFullWidth
                  title="Sign up with Facebook"
                />
              </div>
            </GridItem>
          </Grid>
        </form>
      </div>
    );
  }
}
export default SignupForm;
