import classnames from "classnames";
import { SignupButton } from "components/Button";
import CountdownBlock from "components/CountdownBlock";
import { Grid, GridItem } from "components/Grid";
import Section from "components/Section";
import { Title } from "components/Typography";
import t from "prop-types";
import React from "reactn";
import "./Hero.scss";

const Hero = props => {
  return (
    <div className={classnames("hero")}>
      <Section>
        <Grid noMargin>
          <GridItem span={6} spanMobile={4}>
            <div className="hero__content">
              <Title colorScheme="white" level="primary">
                Participate <small>in the event</small>
              </Title>

              <div className="hero__button">
                <SignupButton size="large" />
              </div>

              <div className="hero__countdown">
                <CountdownBlock />
              </div>
            </div>
          </GridItem>

          <GridItem span={6} spanMobile={4}>
            <div className="hero__image">
              <img src="/images/snowman.png" alt="Snowman" title="Snowman" />
            </div>
          </GridItem>
        </Grid>
      </Section>
    </div>
  );
};

Hero.propTypes = {
  title: t.string
};

export default Hero;
