import { SupportUsSection } from "components/Sections";
import { Paragraphs, Signature, Title } from "components/Typography";
import lang from "lang/lang";
import { withRouter } from "react-router-dom";
import React from "reactn";
import Button from "../Button";
import "./ThanksBlock.scss";

class ThanksBlock extends React.Component {
  constructor(props) {
    super(props);

    this.gotoFrontpage = this.gotoFrontpage.bind(this);
  }

  gotoFrontpage() {
    this.props.history.push("/");
  }

  gotoProfilePage() {
    this.props.history.push("/profile");
  }

  render() {
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
            <Button onClick={this.gotoProfilePage} title="Go to profile" />
          </div>
        </div>

        <SupportUsSection />
      </div>
    );
  }
}

export default withRouter(ThanksBlock);
