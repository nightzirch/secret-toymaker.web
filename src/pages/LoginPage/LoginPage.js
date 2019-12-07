import Section from "components/Section";
import { PageHeader } from "components/Typography";
import React from "reactn";
import { withRedirect } from "utils/redirect";
import LoginForm from "./LoginForm";
import "./LoginPage.scss";

class LoginPage extends React.Component {
  render() {
    return (
      <div className="login-page">
        <Section>
          <PageHeader isCentered title="Welcome back, toymaker!" />

          <LoginForm />
        </Section>
      </div>
    );
  }
}

export default withRedirect(LoginPage);
