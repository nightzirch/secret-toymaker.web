import Section from "components/Section";
import { PageHeader, Paragraphs } from "components/Typography";
import lang from "lang/lang";
import React from "reactn";
import { withRedirect } from "utils/redirect";
import SignupForm from "./SignupForm";
import "./SignupPage.scss";

class SignupPage extends React.Component {
  render() {
    return (
      <div className="signup-page">
        <Section>
          <PageHeader isCentered type="signup" title="Spread the joy">
            <Paragraphs paragraphs={lang.signup.intro} />
          </PageHeader>

          <SignupForm />
        </Section>
      </div>
    );
  }
}

export default withRedirect(SignupPage);
