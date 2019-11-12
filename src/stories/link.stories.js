import { Grid, GridItem } from "components/Grid";
import Link from "components/Link";
import { Title } from "components/Typography";
import { storiesOf } from "@storybook/react";
import React from "react";
import Matrix from "./components/Matrix";

const linkProps = {
  isCentered: true,
  isExternal: true,
  url: "#"
};

storiesOf("Link", module)
  .addDecorator(s => <Matrix>{s()}</Matrix>)
  .add("Link matrix", () => (
    <Grid>
      <GridItem span={6}>
        <Title level="secondary">Default</Title>
      </GridItem>
      <GridItem span={6}>
        <Title level="secondary">Disabled</Title>
      </GridItem>

      <GridItem span={6}>
        <Link {...linkProps} title="Link" />
      </GridItem>
      <GridItem span={6}>
        <Link {...linkProps} isDisabled title="Link" />
      </GridItem>
    </Grid>
  ));
