import { withRouter } from "react-router-dom";
import React from "reactn";
import Button from "./Button";

class SignupButton extends React.Component {
  constructor(props) {
    super(props);

    this.gotoSignup = this.gotoSignup.bind(this);
  }

  gotoSignup() {
    this.props.history.push("/signup");
  }

  render() {
    return (
      <Button
        icon={<ion-icon name="arrow-forward"></ion-icon>}
        iconPlacement="right"
        onClick={this.gotoSignup}
        primary={true}
        title="Right this way"
        {...this.props}
      />
    );
  }
}

export default withRouter(SignupButton);
