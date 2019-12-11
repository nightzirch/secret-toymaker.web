import { Grid, GridItem } from "components/Grid";
import Section from "components/Section";
import { Paragraphs, Signature, Title } from "components/Typography";
import lang from "lang/lang";
import React from "reactn";
import "./AboutSection.scss";

const AboutSection = props => (
  <div className="about-section">
    <Section>
      <Grid>
        <GridItem className="about-section__content" span={8}>
          <Title>What is Secret Toymaker?</Title>

          <Paragraphs
            className="about-section__lead"
            paragraphs={lang.about.lead}
          />

          <Paragraphs paragraphs={lang.about.body} />

          <Signature>The Toymaker Krewe</Signature>
        </GridItem>
      </Grid>
    </Section>
  </div>
);

export default AboutSection;
