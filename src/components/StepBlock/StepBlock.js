import { Grid, GridItem } from "@/components/Grid";
import { Paragraph, Title } from "@/components/Typography";
import classnames from "classnames";
import Image from "next/image";
import t from "prop-types";
import React from "reactn";
import { StepData, StepTypes } from "./utils/constants";

const StepBlock = (props) => {
  const { stepType } = props;
  const { button, title, text, number, image } = StepData[stepType];

  return (
    <div
      className={classnames("step-block", {
        "step-block--text-first": number % 2 !== 0,
      })}
    >
      <Grid noRowGap noMargin>
        <GridItem span={8} className="step-block__image-container">
          <div className="step-block__image">
            <Image {...image} />
          </div>
        </GridItem>

        <GridItem span={4} className="step-block__text-container">
          <span className="step-block__number">{number}</span>
          <div className="step-block__text">
            <Title level="tertiary">{title}</Title>
            <Paragraph>{text}</Paragraph>
            {button && <div className="step-block__button">{button}</div>}
          </div>
        </GridItem>
      </Grid>
    </div>
  );
};

StepBlock.propTypes = {
  stepType: t.oneOf(Object.values(StepTypes)).isRequired,
};

export default StepBlock;
