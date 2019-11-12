import HowBlock from "components/HowBlock";
import { Paragraphs, Title } from "components/Typography";
import lang from "lang/lang";
import React from "reactn";
import "./HowSection.scss";

const HowSection = props => (
  <div className="how-section">
    <Title>How this works</Title>

    <div className="how-block__container">
      <HowBlock step="one">
        <Title level="tertiary">Step 1: Sign up</Title>
        <Paragraphs paragraphs={lang.how.step1} />
      </HowBlock>

      <HowBlock
        isForeground={true}
        hasBottomArrow={true}
        hasLeftArrow={true}
        step="two"
      >
        <Title level="tertiary">Step 2: Check your match</Title>
        <Paragraphs paragraphs={lang.how.step2} />
      </HowBlock>

      <HowBlock step="three">
        <Title level="tertiary">Step 3: Send a gift</Title>
        <Paragraphs paragraphs={lang.how.step3} />
      </HowBlock>

      <HowBlock isForeground={true} hasRightArrow={true} step="four">
        <Title level="tertiary">Step 4: Receive a gift</Title>
        <Paragraphs paragraphs={lang.how.step4} />
      </HowBlock>
    </div>
  </div>
);

export default HowSection;
