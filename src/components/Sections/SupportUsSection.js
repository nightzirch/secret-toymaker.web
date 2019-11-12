import { DonateButton } from "components/Button";
import { Paragraphs, Title } from "components/Typography";
import lang from "lang/lang";
import React from "reactn";

const SupportUsSection = props => (
  <div className="support-us-section">
    <Title>Do you want to support us?</Title>

    <div className="support-us-section__block">
      <Paragraphs paragraphs={lang.supportUs} />
    </div>

    <DonateButton />
  </div>
);

export default SupportUsSection;
