import { SignupButton } from "components/Button";
import { Paragraphs, Title } from "components/Typography";
import lang from "lang/lang";
import React from "reactn";

class SignupSection extends React.Component {
  render() {
    return this.global.firebase.stage === "SIGNUP" ? (
      <div className="signup-section">
        <Title>Sign up</Title>

        <Paragraphs paragraphs={lang.signup.intro} />

        <SignupButton />
      </div>
    ) : null;
  }
}

export default SignupSection;
