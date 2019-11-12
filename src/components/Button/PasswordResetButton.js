import React from "reactn";
import Button from "./Button";

class PasswordResetButton extends React.Component {
  constructor(props) {
    super(props);

    this.handlePasswordResetClick = this.handlePasswordResetClick.bind(this);
  }

  handlePasswordResetClick() {
    // TODO: Popup maybe?
    this.global.firebase.passwordReset(this.global.user.email);
  }

  render() {
    return (
      <Button
        onClick={this.handlePasswordResetClick}
        theme="danger"
        title="Reset password"
        {...this.props}
      />
    );
  }
}

export default PasswordResetButton;
