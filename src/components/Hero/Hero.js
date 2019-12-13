import classnames from "classnames";
import { EventButton } from "components/Button";
import Countdown from "components/Countdown";
import { Grid, GridItem } from "components/Grid";
import Section from "components/Section";
import { Title } from "components/Typography";
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
                It's the time <small>you've been waiting for all year!</small>
              </Title>

              <div className="hero__button">
                <EventButton size="large" />
              </div>

              <div className="hero__countdown">
                <Countdown />
              </div>
            </div>
          </GridItem>

          <GridItem span={6} spanMobile={4}>
            <div className="hero__image">
              <img
                src="/images/snowman_magic.png"
                alt="Snowman"
                title="Snowman"
              />
            </div>
          </GridItem>
        </Grid>
      </Section>
    </div>
  );
};

export default Hero;
