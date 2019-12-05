import FaqBlocks from "components/FaqBlocks";
import Section from "components/Section";
import { Title } from "components/Typography";
import lang from "lang/lang";
import React from "reactn";
import "./FaqPage.scss";

class FaqPage extends React.Component {
  render() {
    return (
      <div className="faq-page">
        <Section>
          <Title>Frequently Asked Questions</Title>
          <FaqBlocks blocks={lang.faq.long} />
        </Section>
      </div>
    );
  }
}

export default FaqPage;
