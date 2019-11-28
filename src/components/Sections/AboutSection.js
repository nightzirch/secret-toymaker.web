import Alert from "components/Alert";
import { Grid, GridItem } from "components/Grid";
import Section from "components/Section";
import { Paragraphs, Signature, Title } from "components/Typography";
import lang from "lang/lang";
import React from "reactn";
import "./AboutSection.scss";

const AboutSection = props => (
  <div className="about-section">
    <Section>
      {/* TODO: Remove this when pushing to master */}
      <Alert>
        This is the development site for Secret Toymaker. Proceed with caution
        <span aria-label="grin" role="img">
          😄
        </span>
      </Alert>

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
