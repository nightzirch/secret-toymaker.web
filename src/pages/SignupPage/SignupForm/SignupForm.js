import Button from "components/Button";
import { InputField } from "components/Form";
import Link from "components/Link";
import React from "reactn";
import Routes from "routes";

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

          <Button theme="primary" title="Sign up" type="submit" />

          <Link title="Already registered? Log in here" url={Routes.LOGIN} />
        </form>
      </div>
    );
  }
}
export default SignupForm;
