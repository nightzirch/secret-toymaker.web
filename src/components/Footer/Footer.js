import { Grid, GridItem } from "components/Grid";
import Section from "components/Section";
import { Paragraphs, Title } from "components/Typography";
import lang from "lang/lang";
import React from "reactn";
import "./Footer.scss";

const Footer = props => (
  <footer className="footer">
    <Section backgroundColor="primary-dark">
      <Grid noMargin>
        <GridItem>
          <Title colorScheme="light" level="tertiary">
            Secret Toymaker
          </Title>

          <Paragraphs
            colorScheme="light"
            size="small"
            paragraphs={lang.footer}
          />
        </GridItem>
      </Grid>
    </Section>
  </footer>
);

export default Footer;
