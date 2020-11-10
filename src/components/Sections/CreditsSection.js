import {
  DescriptionList,
  DescriptionListItem,
} from "@/components/DescriptionList";
import { Grid, GridItem } from "@/components/Grid";
import Link from "@/components/Link";
import Section from "@/components/Section";
import { Paragraph, Title } from "@/components/Typography";
import classnames from "classnames";
import t from "prop-types";
import React from "reactn";

const CreditsSection = (props) => {
  const { showOnlyContactInfo } = props;

  const itemProps = {
    color: "light",
  };

  return (
    <div
      className={classnames("credits-section", {
        "credits-section--only-contact": showOnlyContactInfo,
      })}
    >
      <Section backgroundColor="primary">
        <Grid>
          {!showOnlyContactInfo && (
            <>
              <GridItem span={5}>
                <Title colorScheme="white">Toymaker Krewe</Title>

                <DescriptionList>
                  <DescriptionListItem
                    term="Christian A. Grimsgaard"
                    description="Project lead"
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
                    term="Vasburg"
                    description="Art & illustrations"
                    {...itemProps}
                  />
                  <DescriptionListItem
                    term="Ryan Field"
                    description="Email developer"
                    {...itemProps}
                  />
                </DescriptionList>
              </GridItem>
            </>
          )}

          <GridItem span={12}>
            <Paragraph colorScheme="light" isCenter>
              Contact us:
              <Link
                isExternal
                isInContainer={false}
                title="support@secrettoymaker.com"
                url="mailto:support@secrettoymaker.com"
              />
            </Paragraph>
          </GridItem>
        </Grid>
      </Section>
    </div>
  );
};

CreditsSection.propTypes = {
  showOnlyContactInfo: t.bool,
};

export default CreditsSection;
