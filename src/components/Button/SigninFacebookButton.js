import React from "reactn";
import Button from "./Button";

class SigninFacebookButton extends React.Component {
  constructor(props) {
    super(props);

    this.handleSigninClick = this.handleSigninClick.bind(this);
  }

  handleSigninClick() {
    this.global.firebase.signInWithFacebook();
  }

  render() {
    return (
      <Button
        icon={<ion-icon name="logo-facebook"></ion-icon>}
        theme="secondary"
        onClick={this.handleSigninClick}
        title="Log in with Facebook"
        {...this.props}
      />
    );
  }
}

export default SigninFacebookButton;
