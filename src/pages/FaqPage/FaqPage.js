import Alerts from "components/Alerts";
import FaqBlocks from "components/FaqBlocks";
import Section from "components/Section";
import { Title } from "components/Typography";
import lang from "lang/lang";
import React from "reactn";
import AlertLocationTypes from "utils/types/AlertLocationTypes";
import "./FaqPage.scss";

const FaqPage = props => {
  return (
    <div className="faq-page">
      <Section>
        <Alerts
          location={AlertLocationTypes.FAQ}
          isHorizontalPadding={false}
          isVerticalPadding
        />

        <Title>Frequently Asked Questions</Title>

        <FaqBlocks blocks={lang.faq.long} />
      </Section>
    </div>
  );
};

export default FaqPage;
