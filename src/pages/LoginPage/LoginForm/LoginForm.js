import Button, {
  SigninFacebookButton,
  SigninGoogleButton
} from "components/Button";
import { InputField } from "components/Form";
import { Grid, GridItem } from "components/Grid";
import Link from "components/Link";
import React from "reactn";
import Routes from "routes";
import "./LoginForm.scss";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleInputChange = e => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  };

  handleFormSubmit = e => {
    e.preventDefault();

    this.global.firebase.signInWithEmailAndPassword({
      email: this.state.email,
      password: this.state.password
    });
  };

  render() {
    return (
      <div className="login-form__container">
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
