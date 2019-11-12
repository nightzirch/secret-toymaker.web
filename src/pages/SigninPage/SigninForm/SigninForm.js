import Button from "components/Button";
import { InputField } from "components/Form";
import Link from "components/Link";
import * as ROUTES from "routes";
import React from "reactn";

class SigninForm extends React.Component {
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
      <div className="signin-form__container">
        <form className="signin-form" onSubmit={this.handleFormSubmit}>
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

          <Button theme="primary" title="Sign in" type="submit" />

          <Link title="Sign up for a new account" url={ROUTES.SIGNUP} />
        </form>
      </div>
    );
  }
}
export default SigninForm;
