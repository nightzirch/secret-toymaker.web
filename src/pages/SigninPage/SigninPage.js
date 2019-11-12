import { SigninFacebookButton, SigninGoogleButton } from "components/Button";
import Section from "components/Section";
import { PageHeader } from "components/Typography";
import React from "reactn";
import SigninForm from "./SigninForm";

class SigninPage extends React.Component {
  render() {
    return (
      <div className="signin-page">
        <Section>
          <PageHeader title="Sign in" />

          <SigninForm />

          <SigninGoogleButton />
          <SigninFacebookButton />
        </Section>
      </div>
    );
  }
}

export default SigninPage;
