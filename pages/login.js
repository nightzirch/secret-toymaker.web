import Alerts from "components/Alerts";
import LoginForm from "components/LoginForm";
import Section from "components/Section";
import { PageHeader } from "components/Typography";
import React from "reactn";
import { withRedirect } from "utils/redirect";
import AlertLocationTypes from "utils/types/AlertLocationTypes";

const LoginPage = (props) => {
  return (
    <div className="login-page">
      <Section>
        <PageHeader isCentered title="Welcome back, toymaker!" />

        <Alerts
          location={AlertLocationTypes.LOGIN}
          isHorizontalPadding={false}
          isVerticalPadding
        />

        <LoginForm />
      </Section>
    </div>
  );
};

export default withRedirect(LoginPage);
