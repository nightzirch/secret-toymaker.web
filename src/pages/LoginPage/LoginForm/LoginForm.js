import Button from "components/Button";
import { InputField } from "components/Form";
import Link from "components/Link";
import React from "reactn";
import Routes from "routes";

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

          <Button theme="primary" title="Log in" type="submit" />

          <Link
            title="Don't have an account? Sign up here"
            url={Routes.SIGNUP}
          />
        </form>
      </div>
    );
  }
}
export default LoginForm;
