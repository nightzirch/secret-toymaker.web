import { SigninFacebookButton, SigninGoogleButton } from "components/Button";
import Section from "components/Section";
import { PageHeader } from "components/Typography";
import React from "reactn";
import LoginForm from "./LoginForm";
import "./LoginPage.scss";

class LoginPage extends React.Component {
  render() {
    return (
      <div className="login-page">
        <Section>
          <PageHeader title="Welcome back, toymaker!" />

          <LoginForm />

          <SigninGoogleButton />
          <SigninFacebookButton />
        </Section>
      </div>
    );
  }
}

export default LoginPage;
