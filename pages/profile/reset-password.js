import ResetPasswordForm from "components/ResetPasswordForm";
import Section from "components/Section";
import { PageHeader } from "components/Typography";
import React from "reactn";

const ResetPasswordPage = (props) => {
  return (
    <div className="login-page">
      <Section>
        <PageHeader isCentered title="Feeling forgetful, are we?" />

        <ResetPasswordForm />
      </Section>
    </div>
  );
};

export default ResetPasswordPage;
