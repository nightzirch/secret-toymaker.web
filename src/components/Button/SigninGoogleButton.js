import React from "reactn";
import Button from "./Button";

class SigninGoogleButton extends React.Component {
  constructor(props) {
    super(props);

    this.handleSigninClick = this.handleSigninClick.bind(this);
  }

  handleSigninClick() {
    this.global.firebase.signInWithGoogle();
  }

  render() {
    return (
      <Button
        icon={<ion-icon name="logo-google"></ion-icon>}
        onClick={this.handleSigninClick}
        title="Sign in with Google"
        {...this.props}
      />
    );
  }
}

export default SigninGoogleButton;
