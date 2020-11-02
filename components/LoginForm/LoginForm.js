import Button, {
  SigninFacebookButton,
  SigninGoogleButton,
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

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleInputChange = (e) => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  };

  handleFormSubmit = async (e) => {
    e.preventDefault();

    const response = await this.global.firebase.signInWithEmailAndPassword({
      email: this.state.email,
      password: this.state.password,
    });

    if (response.error) {
      dispatchWithLoading(
        ActionTypes.SET_ERROR,
        ErrorTypes.LOGIN,
        response.error
      );
    } else {
      dispatchWithLoading(ActionTypes.SET_ERROR, ErrorTypes.LOGIN);
    }
  };

  render() {
    return (
      <div className="login-form__container">
        <Error id={ErrorTypes.LOGIN} />

        <form className="login-form" onSubmit={this.handleFormSubmit}>
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

              <Button
                isFullWidth
                theme="primary"
                title="Log in"
                type="submit"
              />

              <Link
                isCentered
                title="Don't have an account? Sign up here"
                url={Routes.SIGNUP}
              />

              <Link
                isCentered
                title="Forgot your password?"
                url={Routes.RESET_PASSWORD}
              />

              <div className="login-form__social-buttons">
                <SigninGoogleButton isCentered isFullWidth />
                <SigninFacebookButton isCentered isFullWidth />
              </div>
            </GridItem>
          </Grid>
        </form>
      </div>
    );
  }
}
export default LoginForm;
