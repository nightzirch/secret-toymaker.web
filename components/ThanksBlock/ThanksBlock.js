import Button from "components/Button";
import { Paragraphs, Signature, Title } from "components/Typography";
import lang from "lang/lang";
import { useRouter } from "next/router";
import React from "reactn";

const ThanksBlock = (props) => {
  const router = useRouter();

  const gotoFrontpage = () => {
    router.push("/");
  };

  const gotoProfilePage = () => {
    router.push("/profile");
  };

  return (
    <div>
      <div className="thanks-block">
        <div className="thanks-block__title">
          <Title level="page">Thank you</Title>
        </div>

        <div className="thanks-block__image">
          <img alt="Thank you" title="Thank you" src="/images/thanks_t.png" />
        </div>

        <div className="thanks-block__text">
          <Paragraphs paragraphs={lang.thanks} />
          <Signature>Chris & RandommUser</Signature>
        </div>

        <div className="thanks-block__buttons">
          <Button onClick={gotoProfilePage} title="Go to profile" />
        </div>
      </div>
    </div>
  );
};

export default ThanksBlock;
