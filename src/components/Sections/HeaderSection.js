import { GiftsButton, SignupButton } from "components/Button";
import { Paragraph, Paragraphs, Title } from "components/Typography";
import lang from "lang/lang";
import React from "reactn";
import "./HeaderSection.scss";

class HeaderSection extends React.Component {
  componentDidMount() {
    this.amountsOfParticipants = this.global.firebase.getAmountOfParticipants();
  }

  renderCallToAction() {
    // If we have amounts
    if (typeof this.amountsOfParticipants != undefined) {
      if (this.global.firebase.stage === "SIGNUP") {
        return (
          <div>
            <Paragraph>
              Join the <strong>{this.amountsOfParticipants}</strong> who already
              signed up for Secret Toymaker this year!
            </Paragraph>
            <SignupButton />
          </div>
        );
      } else if (this.global.firebase.stage === "GIFTING") {
        return (
          <div>
            <Paragraph>
              Thank you all <strong>{this.amountsOfParticipants}</strong> who
              joined Secret Toymaker this year! Now it's time to send your gift!
            </Paragraph>
            <GiftsButton />
          </div>
        );
      } else {
        return (
          <Paragraph>
            Thank you all <strong>{this.amountsOfParticipants}</strong> who
            joined Secret Toymaker last year!
          </Paragraph>
        );
      }
    }
  }

  render() {
    return (
      <div className="header-section">
        <div className="header-section__content__container">
          <div className="header-section__content">
            <Title level="secondary">Welcome to Secret Toymaker</Title>
            <Paragraphs paragraphs={lang.welcome} />

            {this.renderCallToAction()}
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderSection;
