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
        icon={<span className="ion-social-facebook" />}
        onClick={this.handleSigninClick}
        title="Sign in with Facebook"
        {...this.props}
      />
    );
  }
}

export default SigninFacebookButton;
