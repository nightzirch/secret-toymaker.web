import Alerts from "components/Alerts";
import FaqBlocks from "components/FaqBlocks";
import Section from "components/Section";
import { CreditsSection } from "components/Sections";
import { Title } from "components/Typography";
import lang from "lang/lang";
import AlertLocationTypes from "utils/types/AlertLocationTypes";

const FaqPage = (props) => {
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

      <CreditsSection showOnlyContactInfo />
    </div>
  );
};

export default FaqPage;
