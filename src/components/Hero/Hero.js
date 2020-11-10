import { EventButton, LoginButton, ProfileButton } from "@/components/Button";
import Countdown from "@/components/Countdown";
import { Grid, GridItem } from "@/components/Grid";
import Section from "@/components/Section";
import { Title } from "@/components/Typography";
import { getAuthStatus } from "@/utils/auth";
import AuthTypes from "@/utils/types/AuthTypes";
import StageTypes from "@/utils/types/StageTypes";
import classnames from "classnames";
import Image from "next/image";
import React, { useEffect, useGlobal, useState } from "reactn";

const Hero = (props) => {
  const [stage] = useGlobal("stage");
  const [user] = useGlobal("user");
  const [authUser] = useGlobal("authUser");
  const { type: stageType } = stage || {};
  const [authStatus, setAuthStatus] = useState(null);

  useEffect(() => {
    setAuthStatus(getAuthStatus());
  }, [authUser, user]);

  const getTitle = () => {
    switch (stageType) {
      case StageTypes.SIGNUP:
      case StageTypes.MATCHING:
      case StageTypes.GIFTING:
        return (
          <>
            It&apos;s the time
            <small>you&apos;ve been waiting for all year!</small>
          </>
        );
      case StageTypes.SPLASH:
      case StageTypes.INACTIVE:
        return (
          <>
            Welcome
            <small>to Secret Toymaker</small>
          </>
        );
      default:
        return null;
    }
  };

  const renderCallToActionButton = () => {
    switch (stageType) {
      case StageTypes.SIGNUP:
      case StageTypes.MATCHING:
      case StageTypes.GIFTING:
        return (
          <div className="hero__button">
            <EventButton theme="call-to-action" size="large" />
          </div>
        );
      case StageTypes.SPLASH:
      case StageTypes.INACTIVE: {
        if (authStatus === AuthTypes.AUTH) {
          return (
            <div className="hero__button">
              <ProfileButton theme="call-to-action" size="large" />
            </div>
          );
        } else if (authStatus === AuthTypes.NO_AUTH) {
          return (
            <div className="hero__button">
              <LoginButton theme="call-to-action" size="large" />
            </div>
          );
        }
        return null;
      }
      default:
        return null;
    }
  };

  return (
    <div className={classnames("hero")}>
      <Section isWide>
        <Grid noMargin>
          <GridItem span={6} spanMobile={4}>
            <div className="hero__content">
              <Title colorScheme="white" level="primary">
                {getTitle()}
              </Title>

              {renderCallToActionButton()}

              <div className="hero__countdown">
                <Countdown />
              </div>
            </div>
          </GridItem>

          <GridItem span={6} spanMobile={4}>
            <div className="hero__image">
              <Image
                src="/images/snowman_magic.png"
                width={1471}
                height={1587}
                priority={true}
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
