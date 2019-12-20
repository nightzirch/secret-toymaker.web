import Section from "components/Section";
import { PageHeader } from "components/Typography";
import React from "reactn";
import ResetPasswordForm from "./ResetPasswordForm";
import "./ResetPasswordPage.scss";

const ResetPasswordPage = props => {
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
