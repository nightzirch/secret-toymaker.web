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
        icon={<span className="ion-social-google" />}
        onClick={this.handleSigninClick}
        title="Sign in with Google"
        {...this.props}
      />
    );
  }
}

export default SigninGoogleButton;
