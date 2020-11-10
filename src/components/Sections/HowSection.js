import Section from "components/Section";
import StepBlock from "components/StepBlock";
import { StepTypes } from "components/StepBlock/utils/constants";
import { Title } from "components/Typography";
import React from "reactn";

const HowSection = (props) => (
  <div className="how-section">
    <Section>
      <Title>How does Secret Toymaker work?</Title>

      <StepBlock stepType={StepTypes.SIGNUP} />
      <StepBlock stepType={StepTypes.CHECK_MATCH} />
      <StepBlock stepType={StepTypes.SEND} />
      <StepBlock stepType={StepTypes.RECEIVE} />
    </Section>
  </div>
);

export default HowSection;
