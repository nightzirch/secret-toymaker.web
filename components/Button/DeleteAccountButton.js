import React from "reactn";
import Button from "./Button";

class DeleteAccountButton extends React.Component {
  constructor(props) {
    super(props);

    this.handleDeleteAccountClick = this.handleDeleteAccountClick.bind(this);
  }

  handleDeleteAccountClick() {
    // TODO: Show popup "Are you sure?"
    // TODO: Change this to actually deleting account
    this.global.firebase.signOut();
  }

  render() {
    return (
      <Button
        onClick={this.handleDeleteAccountClick}
        theme="danger"
        title="Delete account"
        {...this.props}
      />
    );
  }
}

export default DeleteAccountButton;
