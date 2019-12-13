import Alerts from "components/Alerts";
import ApiTokenForm from "components/ApiTokenForm";
import { LoginButton } from "components/Button";
import EventHero from "components/EventHero";
import { InputField } from "components/Form";
import GiftStatus from "components/GiftStatus";
import { Grid, GridItem } from "components/Grid";
import LoadingIndicator from "components/LoadingIndicator";
import ParticipationForm from "components/ParticipationForm";
import Section from "components/Section";
import Stats from "components/Stats";
import { Paragraph, Paragraphs, Title } from "components/Typography";
import lang from "lang/lang";
import t from "prop-types";
import React, { useEffect, useState, withGlobal } from "reactn";
import { getAuthStatus } from "utils/auth";
import { dispatchWithLoading } from "utils/loading";
import { isParticipatingInEvent } from "utils/participation";
import ActionTypes from "utils/types/ActionTypes";
import AlertLocationTypes from "utils/types/AlertLocationTypes";
import AuthTypes from "utils/types/AuthTypes";
import GiftDirectionTypes from "utils/types/GiftDirectionTypes";
import GiftStatusTypes from "utils/types/GiftStatusTypes";
import StageTypes from "utils/types/StageTypes";
import "./EventPage.scss";

const EventPage = props => {
  const { participations, stage, user } = props;
  const { type: stageType, year } = stage || {};
  const authStatus = getAuthStatus();
  const [isParticipating, setParticipating] = useState(null);

  useEffect(() => {
    dispatchWithLoading(ActionTypes.GET_STATS);
  }, []);

  useEffect(() => {
    if (user) {
      dispatchWithLoading(ActionTypes.GET_PARTICIPATION_STATUS);
    }
  }, [user]);

  useEffect(() => {
    if (participations) {
      setParticipating(isParticipatingInEvent(year));
    }
  }, [participations]);

  const renderStats = () => (
    <>
      <Title>Statistics</Title>
      <Stats year={year} />
    </>
  );

  const renderAside = () => <>{renderStats()}</>;

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

  // TODO: Add proper text here
  const renderNotParticipatingMessage = () => (
    <>
      <Title>Toymake-o-tron can't find you</Title>
      <Paragraphs paragraphs={[]} />
    </>
  );

  const renderPrimaryGifts = () => (
    <>
      <Title>Your match</Title>
      <GiftStatus
        gifter="Toymake-o-tron"
        isButtonHidden={stageType === StageTypes.INACTIVE}
        status={GiftStatusTypes.PACKING}
        direction={GiftDirectionTypes.OUTGOING}
      />

      <Title>Your secret toymaker</Title>
      <GiftStatus
        gifter="Toymake-o-tron"
        isButtonHidden={stageType === StageTypes.INACTIVE}
        status={GiftStatusTypes.SENT}
        direction={GiftDirectionTypes.INCOMING}
      />
    </>
  );

  const renderDonations = () => (
    <>
      <Title>Your donations</Title>
      <Paragraph>
        Here there will be a little paragraph about how all the big boys are
        donating. And a call to action.
      </Paragraph>

      <Title>Incoming donations</Title>
      <Paragraph>Won't be visible unless there are some.</Paragraph>
    </>
  );

  const renderGifts = () => (
    <>
      {renderPrimaryGifts()}
      {renderDonations()}
    </>
  );

  const renderContent = () => {
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
          contents = renderGifts();
        } else {
          contents = renderNotParticipatingMessage();
        }
      }
    } else if (stageType === StageTypes.INACTIVE) {
      if (authStatus === AuthTypes.NO_AUTH) {
        contents = renderLoginForm();
      } else if (authStatus === AuthTypes.AUTH) {
        contents = renderGifts();
      } else {
        contents = null;
      }
    }

    contents = renderGifts();

    return (
      <Grid>
        <GridItem span={8}>{contents}</GridItem>
        <GridItem span={4}>{renderAside()}</GridItem>
      </Grid>
    );
  };

  return (
    <div className="event-page">
      {isParticipating === null ? (
        <LoadingIndicator message="Hold on as Toymake-o-tron is digging through our archives..." />
      ) : (
        <Section isWide>
          <EventHero />

          <Alerts
            location={AlertLocationTypes.EVENT}
            isHorizontalPadding={false}
            isVerticalPadding
          />

          {renderContent()}
        </Section>
      )}
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
