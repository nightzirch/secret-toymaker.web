import React from "reactn";
import Button from "./Button";

class SignoutButton extends React.Component {
  constructor(props) {
    super(props);

    this.handleSignoutClick = this.handleSignoutClick.bind(this);
  }

  handleSignoutClick() {
    this.global.firebase.signOut();
  }

  render() {
    return (
      <Button
        onClick={this.handleSignoutClick}
        title="Log out"
        {...this.props}
      />
    );
  }
}

export default SignoutButton;
