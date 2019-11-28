import { Grid, GridItem } from "components/Grid";
import Section from "components/Section";
import { Paragraphs } from "components/Typography";
import lang from "lang/lang";
import React from "reactn";
import "./Footer.scss";

const Footer = props => (
  <footer className="footer">
    <Section backgroundColor="primary" withPadding>
      <Grid noMargin>
        <GridItem>
          <Paragraphs
            colorScheme="white"
            size="small"
            paragraphs={lang.footer.upper}
          />
        </GridItem>
      </Grid>
    </Section>

    <Section backgroundColor="primary-dark">
      <Grid noMargin>
        <GridItem>
          <Paragraphs
            colorScheme="white"
            size="small"
            paragraphs={lang.footer.lower}
          />
        </GridItem>
      </Grid>
    </Section>
  </footer>
);

export default Footer;
