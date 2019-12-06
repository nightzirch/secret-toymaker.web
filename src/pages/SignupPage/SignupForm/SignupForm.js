import Button, {
  SigninFacebookButton,
  SigninGoogleButton
} from "components/Button";
import { InputField } from "components/Form";
import { Grid, GridItem } from "components/Grid";
import Link from "components/Link";
import React from "reactn";
import Routes from "routes";
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

  handleFormSubmit = e => {
    e.preventDefault();

    this.global.firebase.createUserWithEmailAndPassword({
      email: this.state.email,
      password: this.state.password
    });
  };

  render() {
    return (
      <div className="signup-form__container">
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
                  isCentered
                  isFullWidth
                  title="Sign up with Google"
                />
                <SigninFacebookButton
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
