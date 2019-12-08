import EventHero from "components/EventHero";
import { Grid, GridItem } from "components/Grid";
import Section from "components/Section";
import t from "prop-types";
import React, { useEffect, withGlobal } from "reactn";
import { getAuthStatus } from "utils/auth";
import AuthTypes from "utils/types/AuthTypes";
import StageTypes from "utils/types/StageTypes";
import "./EventPage.scss";

const EventPage = props => {
  const { stage } = props;
  const { stageType, year } = stage || {};
  const authStatus = getAuthStatus();

  useEffect(() => {
    // TODO: add API call to fetch data about this year's event
  }, []);

  const renderStats = () => {
    return (
      <Grid cols={4}>
        <GridItem span={4}>Statistics</GridItem>
      </Grid>
    );
  };

  const renderContent = () => {
    // TODO: Add loading state when waiting for stage endpoint.
    let contents;

    if (stageType === StageTypes.SIGNUP) {
      if (authStatus === AuthTypes.NO_AUTH) {
        // TODO: Show stats about the event. Link to login form.
        contents = null;
      } else if (authStatus === AuthTypes.AUTH) {
        // TODO: Add if/else about user's participation status
        // IF not participating: Stats about the event. Text about they're not participating in the current event.
        // ELES IF participating: Display the participant's giftee, a list of all gifts in their own state, and a button to donate gifts.
        contents = null;
      }
    } else if (stageType === StageTypes.MATCHING) {
      // TODO: Should display a text about the system is matching the participants and the results will be available shortly.
      contents = null;
    } else if (stageType === StageTypes.GIFTING) {
      if (authStatus === AuthTypes.NO_AUTH) {
        // TODO: Show stats about the event. Link to login form.
        contents = null;
      } else if (authStatus === AuthTypes.AUTH) {
        // TODO: Add if/else about user's participation status
        // IF not participating: Stats about the event. Text about they're not participating in the current event.
        // ELES IF participating: Display the participant's giftee, a list of all gifts in their own state, and a button to donate gifts.
        contents = null;
      }
    } else {
      contents = null;
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
  stage: t.object
};

const mapGlobalToProps = global => ({
  stage: global.stage
});

export default withGlobal(mapGlobalToProps)(EventPage);
