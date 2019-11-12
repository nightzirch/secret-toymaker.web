import FaqBlocks from "components/FaqBlocks";
import { Title } from "components/Typography";
import lang from "lang/lang";
import React from "reactn";

class FaqPage extends React.Component {
  render() {
    return (
      <div className="faq-page">
        <Title>Frequently Asked Questions</Title>
        <FaqBlocks blocks={lang.faq.long} />
      </div>
    );
  }
}

export default FaqPage;
