import {
  DescriptionList,
  DescriptionListItem
} from "components/DescriptionList";
import { Grid, GridItem } from "components/Grid";
import Section from "components/Section";
import { Title } from "components/Typography";
import React from "reactn";
import "./CreditsSection.scss";

const CreditsSection = props => (
  <div className="credits-section">
    <Section backgroundColor="primary">
      <Grid>
        <GridItem span={5}>
          <Title colorScheme="white">Toymaker Krewe</Title>

          <DescriptionList>
            <DescriptionListItem
              term="Christian A. Grimsgaard"
              description="Tech lead"
            />
            <DescriptionListItem term="RandommUser" description="Coordinator" />
          </DescriptionList>
        </GridItem>

        <GridItem span={5} offset={8}>
          <Title colorScheme="white">Contributors</Title>

          <DescriptionList>
            <DescriptionListItem
              term="Irene Karotsi"
              description="Visual designer"
            />
            <DescriptionListItem term="Silver" description="Developer" />
            <DescriptionListItem
              term="Vasburg"
              description="Art & illustrations"
            />
            <DescriptionListItem
              term="Ryan Field"
              description="Email templates"
            />
            <DescriptionListItem term="Unesdala" description="Developer" />
          </DescriptionList>
        </GridItem>
      </Grid>
    </Section>
  </div>
);

export default CreditsSection;
