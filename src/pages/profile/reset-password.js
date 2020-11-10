import ResetPasswordForm from "components/ResetPasswordForm";
import Section from "components/Section";
import { PageHeader } from "components/Typography";
import React from "reactn";
import { validateAuthWithRedirect } from "utils/redirect";

const ResetPasswordPage = (props) => {
  return (
    <div className="login-page">
      <Section>
        <PageHeader isCentered title="A little forgetful, are we?" />

        <ResetPasswordForm />
      </Section>
    </div>
  );
};

export const getServerSideProps = async (ctx) =>
  await validateAuthWithRedirect(ctx);

export default ResetPasswordPage;
