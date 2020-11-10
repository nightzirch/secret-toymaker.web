import { Grid, GridItem } from "@/components/Grid";
import Section from "@/components/Section";
import { Paragraphs, Signature, Title } from "@/components/Typography";
import lang from "@/lang/lang";
import Image from "next/image";
import React from "reactn";

const AboutSection = (props) => (
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

        <GridItem className="about-section__images" span={4}>
          <div className="about-section__image about-section__image--bleak">
            <Image
              src={"/images/gift-bleak.png"}
              alt="Gift"
              title="Gift"
              width={200}
              height={191}
            />
          </div>

          <div className="about-section__image about-section__image--red">
            <Image
              src={"/images/gift-red.png"}
              alt="Gift"
              title="Gift"
              width={400}
              height={382}
            />
          </div>
        </GridItem>
      </Grid>
    </Section>
  </div>
);

export default AboutSection;
