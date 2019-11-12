import Button from "components/Button";
import { Grid, GridItem } from "components/Grid";
import { Title } from "components/Typography";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import React from "react";
import Matrix from "./components/Matrix";

const buttonProps = {
  isCentered: true,
  onClick: () => action("Clicked")
};

storiesOf("Button", module)
  .addDecorator(s => <Matrix>{s()}</Matrix>)
  .add("Button matrix", () => (
    <Grid>
      <GridItem span={4} />
      <GridItem span={4}>
        <Title level="secondary">Default</Title>
      </GridItem>
      <GridItem span={4}>
        <Title level="secondary">Disabled</Title>
      </GridItem>

      {["Primary", "Secondary", "Tertiary", "Danger"].map(theme => {
        return (
          <>
            <GridItem span={4}>
              <Title level="secondary">{theme} button</Title>
            </GridItem>
            <GridItem span={4}>
              <Button
                {...buttonProps}
                theme={theme.toLowerCase()}
                title={theme}
              />
            </GridItem>
            <GridItem span={4}>
              <Button
                {...buttonProps}
                isDisabled
                theme={theme.toLowerCase()}
                title={theme}
              />
            </GridItem>
          </>
        );
      })}
    </Grid>
  ));
