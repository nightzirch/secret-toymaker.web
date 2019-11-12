import { SigninFacebookButton, SigninGoogleButton } from "components/Button";
import { PageHeader, Paragraphs } from "components/Typography";
import lang from "lang/lang";
import React from "reactn";
import SignupForm from "./SignupForm";
import "./SignupPage.scss";

class SignupPage extends React.Component {
  render() {
    return (
      <div className="signup-page">
        <div>
          <PageHeader type="signup" title="Sign up">
            <Paragraphs paragraphs={lang.signup.intro} />
          </PageHeader>

          <SignupForm />

          <SigninGoogleButton title="Sign up with Google" />
          <SigninFacebookButton title="Sign up with Facebook" />
        </div>
      </div>
    );
  }
}

export default SignupPage;
