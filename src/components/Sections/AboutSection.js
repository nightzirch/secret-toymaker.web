import { Paragraphs, Title } from "components/Typography";
import lang from "lang/lang";
import React from "reactn";

const AboutSection = props => (
  <div className="about-section">
    <Title>What is Secret Toymaker?</Title>

    <Paragraphs paragraphs={lang.about} />
  </div>
);

export default AboutSection;
