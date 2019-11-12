import Button from "components/Button";
import FaqBlocks from "components/FaqBlocks";
import { Title } from "components/Typography";
import lang from "lang/lang";
import { withRouter } from "react-router-dom";
import React from "reactn";

class FaqSection extends React.Component {
  constructor(props) {
    super(props);

    this.gotoFAQ = this.gotoFAQ.bind(this);
  }

  gotoFAQ() {
    this.props.history.push("/faq");
  }

  render() {
    return (
      <div className="faq-section">
        <Title>Frequently Asked Questions</Title>
        <FaqBlocks blocks={lang.faq.short} />
        <Button onClick={this.gotoFAQ} title="To full FAQ" />
      </div>
    );
  }
}

export default withRouter(FaqSection);
