import {
  DescriptionList,
  DescriptionListItem
} from "components/DescriptionList";
import { Grid, GridItem } from "components/Grid";
import Section from "components/Section";
import { Title } from "components/Typography";
import React from "reactn";
import "./CreditsSection.scss";

const CreditsSection = props => {
  const itemProps = {
    color: "light"
  };

  return (
    <div className="credits-section">
      <Section backgroundColor="primary">
        <Grid>
          <GridItem span={5}>
            <Title colorScheme="white">Toymaker Krewe</Title>

            <DescriptionList>
              <DescriptionListItem
                term="Christian A. Grimsgaard"
                description="Tech lead"
                {...itemProps}
              />
              <DescriptionListItem
                term="RandommUser"
                description="Coordinator"
                {...itemProps}
              />
            </DescriptionList>
          </GridItem>

          <GridItem span={5} offset={8}>
            <Title colorScheme="white">Contributors</Title>

            <DescriptionList>
              <DescriptionListItem
                term="Brendan Golden"
                description="Developer"
                {...itemProps}
              />
              <DescriptionListItem
                term="Irene Karotsi"
                description="Visual designer"
                {...itemProps}
              />
              <DescriptionListItem
                term="Vasburg"
                description="Art & illustrations"
                {...itemProps}
              />
              <DescriptionListItem
                term="Ryan Field"
                description="Email developer"
                {...itemProps}
              />
              <DescriptionListItem
                term="Rhayven Ayers"
                description="Developer"
                {...itemProps}
              />
            </DescriptionList>
          </GridItem>
        </Grid>
      </Section>
    </div>
  );
};

export default CreditsSection;
