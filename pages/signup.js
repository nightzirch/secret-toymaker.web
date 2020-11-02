import Alerts from "components/Alerts";
import Section from "components/Section";
import SignupForm from "components/SignupForm";
import { PageHeader, Paragraphs } from "components/Typography";
import lang from "lang/lang";
import { withRedirect } from "utils/redirect";
import AlertLocationTypes from "utils/types/AlertLocationTypes";

const SignupPage = (props) => {
  return (
    <div className="signup-page">
      <Section>
        <PageHeader isCentered type="signup" title="Spread the joy">
          <Paragraphs paragraphs={lang.signup.intro} />
        </PageHeader>

        <Alerts
          location={AlertLocationTypes.SIGNUP}
          isHorizontalPadding={false}
          isVerticalPadding
        />

        <SignupForm />
      </Section>
    </div>
  );
};

export default withRedirect(SignupPage);
