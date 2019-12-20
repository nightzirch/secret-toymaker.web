import Alerts from "components/Alerts";
import ApiTokenForm from "components/ApiTokenForm";
import Button, { LoginButton } from "components/Button";
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
import StageTypes from "utils/types/StageTypes";
import "./EventPage.scss";

const EventPage = props => {
  const { gifts, loading, participations, stage, user } = props;
  const {
    outgoingPrimary: outgoingPrimaryGift,
    outgoing: outgoingGifts,
    incomingPrimary: incomingPrimaryGift,
    incoming: incomingGifts
  } = gifts || {};
  const { type: stageType, year } = stage || {};
  const authStatus = getAuthStatus();
  const [isParticipating, setParticipating] = useState(null);
  const [isLoading, setLoading] = useState(null);

  useEffect(() => {
    dispatchWithLoading(ActionTypes.GET_STATS);
  }, []);

  useEffect(() => {
    if (user) {
      dispatchWithLoading(ActionTypes.GET_GIFTS);
      dispatchWithLoading(ActionTypes.GET_PARTICIPATION_STATUS);
    }
  }, [user]);

  useEffect(() => {
    if (participations) {
      setParticipating(isParticipatingInEvent(year));
    }
  }, [participations]);

  useEffect(() => {
    if (
      user &&
      isParticipating &&
      [StageTypes.GIFTING, StageTypes.INACTIVE].includes(stageType)
    ) {
      dispatchWithLoading(ActionTypes.GET_GIFTS);
    }
  }, [user, isParticipating, stageType]);

  useEffect(() => {
    // Only showing page loading indication the first time
    if (isLoading !== false) {
      setLoading(
        loading[ActionTypes.GET_STAGE] ||
          loading[ActionTypes.GET_STATS] ||
          loading[ActionTypes.GET_PARTICIPATION_STATUS] ||
          loading[ActionTypes.GET_USER]
      );
    }
  }, [
    loading[ActionTypes.GET_STATS],
    loading[ActionTypes.GET_PARTICIPATION_STATUS],
    loading[ActionTypes.GET_USER]
  ]);

  const handleDonateClick = () => {
    dispatchWithLoading(ActionTypes.DONATE_GIFT);
  };

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

  const renderNotParticipatingMessage = () => (
    <>
      <Title>Toymake-o-tron can't find you</Title>
      <Paragraphs paragraphs={lang.event.notParticipating} />
    </>
  );

  const renderPrimaryGifts = () => (
    <>
      {outgoingPrimaryGift && (
        <>
          <Title>Your match</Title>
          <GiftStatus
            gift={outgoingPrimaryGift}
            direction={GiftDirectionTypes.OUTGOING}
          />
        </>
      )}

      {incomingPrimaryGift && (
        <>
          <Title>Your secret toymaker</Title>
          <GiftStatus
            gift={incomingPrimaryGift}
            direction={GiftDirectionTypes.INCOMING}
          />
        </>
      )}
    </>
  );

  const renderOutgoingDonations = () => (
    <>
      <Title>Your donations</Title>
      <Paragraph>
        Is your soul overfilled with wintersday spirit? Is giving one gift not
        enough? Fear not, we got you covered.
      </Paragraph>

      <Button
        isLoading={loading[ActionTypes.DONATE_GIFT]}
        onClick={handleDonateClick}
        title="Donate a gift"
      />

      {outgoingGifts &&
        outgoingGifts.map(outgoingGift => (
          <GiftStatus
            direction={GiftDirectionTypes.OUTGOING}
            id={outgoingGift.id}
            gift={outgoingGift}
            key={outgoingGift.id}
          />
        ))}
    </>
  );

  const renderIncomingDonations = () => {
    if (incomingGifts && incomingGifts.length > 0) {
      const isPlural = incomingGifts.length > 1;
      const text = isPlural
        ? "Some kind souls have donated gifts to you!"
        : "Some kind soul have donated a gift to you!";

      return (
        <>
          <Title>Incoming donations</Title>
          <Paragraph>{text}</Paragraph>

          {incomingGifts &&
            incomingGifts.map(incomingGift => (
              <GiftStatus
                direction={GiftDirectionTypes.INCOMING}
                id={incomingGift.id}
                gift={incomingGift}
                key={incomingGift.id}
              />
            ))}
        </>
      );
    }

    return null;
  };

  const renderGifts = () => (
    <>
      {renderPrimaryGifts()}
      {renderOutgoingDonations()}
      {renderIncomingDonations()}
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

    return (
      <Grid>
        <GridItem span={8}>{contents}</GridItem>
        <GridItem span={4}>{renderAside()}</GridItem>
      </Grid>
    );
  };

  return (
    <div className="event-page">
      {isLoading ? (
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
  gifts: t.object,
  outgoingPrimaryGift: t.object,
  outgoingGifts: t.array,
  incomingPrimaryGift: t.object,
  incomingGifts: t.array,
  loading: t.object,
  participations: t.array,
  stage: t.object,
  user: t.object
};

const mapGlobalToProps = global => ({
  gifts: global.gifts,
  loading: global.loading,
  participations: global.participations,
  stage: global.stage,
  user: global.user
});

export default withGlobal(mapGlobalToProps)(EventPage);
