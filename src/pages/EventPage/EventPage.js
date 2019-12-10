import ApiTokenForm from "components/ApiTokenForm";
import { LoginButton } from "components/Button";
import EventHero from "components/EventHero";
import { InputField } from "components/Form";
import { Grid, GridItem } from "components/Grid";
import ParticipationForm from "components/ParticipationForm";
import Section from "components/Section";
import { Paragraphs, Title } from "components/Typography";
import lang from "lang/lang";
import t from "prop-types";
import React, { useDispatch, useEffect, useState, withGlobal } from "reactn";
import { getAuthStatus } from "utils/auth";
import { isParticipatingInEvent } from "utils/participation";
import AuthTypes from "utils/types/AuthTypes";
import StageTypes from "utils/types/StageTypes";
import "./EventPage.scss";

const EventPage = props => {
  const { participations, stage, user } = props;
  const { type: stageType, year } = stage || {};
  const authStatus = getAuthStatus();
  const fetchParticipationStatus = useDispatch("fetchParticipationStatus");
  const [isParticipating, setParticipating] = useState(null);

  useEffect(() => {
    // TODO: add API call to fetch stats about this year's event
  }, []);

  useEffect(() => {
    if (user) {
      fetchParticipationStatus();
    }
  }, [user]);

  useEffect(() => {
    if (participations) {
      setParticipating(isParticipatingInEvent(year));
    }
  }, [participations]);

  const renderStats = () => {
    // TODO: Display stats
    return (
      <Grid cols={4}>
        <GridItem span={4}>Statistics</GridItem>
      </Grid>
    );
  };

  const renderLoginForm = () => {
    const loginFormTitle =
      stageType === StageTypes.SIGNUP
        ? "Create an account"
        : "Log in to your account";
    return (
      <>
        <Title>{loginFormTitle}</Title>
        <Paragraphs paragraphs={lang.event.login} />
        <LoginButton />
      </>
    );
  };

  const renderParticipationForm = () => (
    <>
      <Title>Participate</Title>
      {user.apiToken ? (
        <InputField
          id="apiToken"
          isDisabled
          label="API token"
          type="apiToken"
          value={user.apiToken}
        />
      ) : (
        <ApiTokenForm />
      )}
      <ParticipationForm />
    </>
  );

  const renderMatchingMessage = () => (
    <>
      <Title>Matching in progress</Title>
      <Paragraphs paragraphs={lang.event.matching} />
    </>
  );

  const renderContent = () => {
    // TODO: Add loading state when waiting for stage endpoint.
    let contents;

    if (stageType === StageTypes.SIGNUP) {
      if (authStatus === AuthTypes.NO_AUTH) {
        contents = renderLoginForm();
      } else if (authStatus === AuthTypes.AUTH) {
        contents = renderParticipationForm();
      }
    } else if (stageType === StageTypes.MATCHING) {
      contents = renderMatchingMessage();
    } else if (stageType === StageTypes.GIFTING) {
      if (authStatus === AuthTypes.NO_AUTH) {
        contents = renderLoginForm();
      } else if (authStatus === AuthTypes.AUTH) {
        if (isParticipating) {
          // TODO: Display the participant's giftee, a list of all gifts in their own state, and a button to donate gifts.
          contents = null;
        } else {
          // TODO: Text about they're not participating in the current event.
          contents = null;
        }
      }
    } else {
      if (authStatus === AuthTypes.NO_AUTH) {
        contents = renderLoginForm();
      } else if (authStatus === AuthTypes.AUTH) {
        // TODO: Display the participant's gifts
        contents = null;
      } else {
        contents = null;
      }
    }

    return (
      <Grid>
        <GridItem span={8}>{contents}</GridItem>
        <GridItem span={4}>{renderStats()}</GridItem>
      </Grid>
    );
  };

  return (
    <div className="event-page">
      <Section>
        <EventHero />
        {renderContent()}
      </Section>
    </div>
  );
};

EventPage.propTypes = {
  participations: t.array,
  stage: t.object,
  user: t.object
};

const mapGlobalToProps = global => ({
  participations: global.participations,
  stage: global.stage,
  user: global.user
});

export default withGlobal(mapGlobalToProps)(EventPage);
