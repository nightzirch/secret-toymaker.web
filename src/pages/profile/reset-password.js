import ResetPasswordForm from "@/components/ResetPasswordForm";
import Section from "@/components/Section";
import { PageHeader, Paragraph } from "@/components/Typography";
import ActionTypes from "@/utils/types/ActionTypes";
import { useEffect, useState } from "react";
import { useGlobal } from "reactn";

const ResetPasswordPage = (props) => {
  const [user] = useGlobal("user");
  const [loading] = useGlobal("loading");
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const isUserLoading = loading[ActionTypes.GET_USER];

  useEffect(() => {
    if (isUserLoading === false) {
      if (user) {
        setTitle("Smart move");
        setSubtitle(
          "Make it harder for Mordremoth to guess your password by changing it up once in a while."
        );
      } else {
        setTitle("A little forgetful, are we?");
        setSubtitle("Don't worry. We all forget things sometimes.");
      }
    }
  }, [isUserLoading]);

  return (
    <div className="login-page">
      <Section>
        <PageHeader isCentered title={title}>
          {subtitle && <Paragraph>{subtitle}</Paragraph>}
        </PageHeader>

        <ResetPasswordForm />
      </Section>
    </div>
  );
};

export default ResetPasswordPage;
