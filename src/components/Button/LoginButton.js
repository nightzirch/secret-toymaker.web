import { withRouter } from "react-router-dom";
import React from "reactn";
import Routes from "routes";
import Button from "./Button";

class LoginButton extends React.Component {
  constructor(props) {
    super(props);

    this.gotoLogin = this.gotoLogin.bind(this);
  }

  gotoLogin() {
    this.props.history.push(Routes.LOGIN);
  }

  render() {
    return (
      <Button
        icon={<ion-icon name="arrow-forward"></ion-icon>}
        iconPlacement="right"
        onClick={this.gotoLogin}
        primary
        title="Go to login"
        {...this.props}
      />
    );
  }
}

export default withRouter(LoginButton);
