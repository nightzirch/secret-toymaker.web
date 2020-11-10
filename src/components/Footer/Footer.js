import { Grid, GridItem } from "components/Grid";
import Link from "components/Link";
import Section from "components/Section";
import { Paragraph, Paragraphs, Title } from "components/Typography";
import lang from "lang/lang";

const Footer = (props) => (
  <footer className="footer">
    <Section backgroundColor="primary-dark" className="footer__upper">
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

    <Section backgroundColor="primary-darker" className="footer__lower">
      <Paragraph
        colorScheme="light"
        isCenter
        size="small"
        paragraphs={lang.footer}
      >
        Contribute on Github:
        <Link
          isExternal
          isInContainer={false}
          title="secret-toymaker.web"
          url="https://github.com/nightzirch/secret-toymaker.web"
        />
        <Link
          isExternal
          isInContainer={false}
          title="secret-toymaker.backend"
          url="https://github.com/nightzirch/secret-toymaker.backend"
        />
      </Paragraph>
    </Section>
  </footer>
);

export default Footer;
