import Button from "@/components/Button";
import FaqBlocks from "@/components/FaqBlocks";
import { Title } from "@/components/Typography";
import lang from "@/lang/lang";
import { useRouter } from "next/router";
import React from "reactn";

const FaqSection = (props) => {
  const router = useRouter();

  const gotoFAQ = () => {
    router.push("/faq");
  };

  return (
    <div className="faq-section">
      <Title>Frequently Asked Questions</Title>
      <FaqBlocks blocks={lang.faq.short} />
      <Button onClick={gotoFAQ} title="To full FAQ" />
    </div>
  );
};

export default FaqSection;
