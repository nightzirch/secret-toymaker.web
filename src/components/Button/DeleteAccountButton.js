import React from "reactn";
import Button from "./Button";

class DeleteAccountButton extends React.Component {
  constructor(props) {
    super(props);

    this.handleDeleteAccountClick = this.handleDeleteAccountClick.bind(this);
  }

  async handleDeleteAccountClick() {
    // TODO: Show popup "Are you sure?"
    const result = await this.global.firebase.deleteAccount();
    console.log(result);
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
