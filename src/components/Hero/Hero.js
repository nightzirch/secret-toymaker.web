import Section from "components/Section";
import { Paragraph, Title } from "components/Typography";
import classnames from "classnames";
import t from "prop-types";
import React from "reactn";
import "./Hero.scss";

const Hero = props => {
  return (
    <div className={classnames("hero")}>
      <Section>
        <div className="hero__content">
          <Title level="primary">Hello friend!</Title>
          <Paragraph>
            Welcome to Secret Toymaker, the community-driven secret santa event
            for Guild Wars 2.
          </Paragraph>
        </div>
      </Section>
    </div>
  );
};

Hero.propTypes = {
  title: t.string
};

export default Hero;
