import Alert from "@/components/Alert";
import Alerts from "@/components/Alerts";
import ApiTokenForm from "@/components/ApiTokenForm";
import Button, { LoginButton } from "@/components/Button";
import Error from "@/components/Error";
import EventHero from "@/components/EventHero";
import { InputField } from "@/components/Form";
import GiftStatus from "@/components/GiftStatus";
import { Grid, GridItem } from "@/components/Grid";
import LoadingIndicator from "@/components/LoadingIndicator";
import ParticipationForm from "@/components/ParticipationForm";
import Section from "@/components/Section";
import { CreditsSection } from "@/components/Sections";
import Stats from "@/components/Stats";
import { Paragraph, Paragraphs, Title } from "@/components/Typography";
import lang from "@/lang/lang";
import { getAuthStatus } from "@/utils/auth";
import { dispatchWithLoading } from "@/utils/loading";
import { isParticipatingInEvent } from "@/utils/participation";
import ActionTypes from "@/utils/types/ActionTypes";
import AlertLocationTypes from "@/utils/types/AlertLocationTypes";
import AlertTypes from "@/utils/types/AlertTypes";
import AuthTypes from "@/utils/types/AuthTypes";
import ErrorTypes from "@/utils/types/ErrorTypes";
import GiftDirectionTypes from "@/utils/types/GiftDirectionTypes";
import StageTypes from "@/utils/types/StageTypes";
import { useRouter } from "next/router";
import t from "prop-types";
import React, { useEffect, useState, withGlobal } from "reactn";

const EventPage = (props) => {
  const { events, gifts, loading, participations, user } = props;
  const {
    outgoingPrimary: outgoingPrimaryGift,
    outgoing: outgoingGifts,
    incomingPrimary: incomingPrimaryGift,
    incoming: incomingGifts,
  } = gifts || {};
  const router = useRouter();
  const { year } = router.query;
  const { stage } = events?.[year] || {};
  const { type: stageType } = stage || {};

  const authStatus = getAuthStatus();
  const [isParticipating, setParticipating] = useState(null);
  const [isLoading, setLoading] = useState(null);

  useEffect(() => {
    if (year) dispatchWithLoading(ActionTypes.GET_STATS, year);
  }, [year]);

  useEffect(() => {
    if (user && year) {
      dispatchWithLoading(ActionTypes.GET_GIFTS, year);
      dispatchWithLoading(ActionTypes.GET_PARTICIPATION_STATUS);
    }
  }, [user, year]);

  useEffect(() => {
    if (participations && year) {
      setParticipating(isParticipatingInEvent(year));
    }
  }, [participations, year]);

  useEffect(() => {
    if (
      user &&
      isParticipating &&
      [StageTypes.GIFTING, StageTypes.INACTIVE].includes(stageType) &&
      year
    ) {
      dispatchWithLoading(ActionTypes.GET_GIFTS, year);
    }
  }, [user, isParticipating, stageType, year]);

  useEffect(() => {
    // Only showing page loading indication the first time
    if (isLoading !== false) {
      setLoading(
        loading[ActionTypes.GET_EVENTS] ||
          loading[ActionTypes.GET_STATS] ||
          loading[ActionTypes.GET_PARTICIPATION_STATUS] ||
          loading[ActionTypes.GET_USER]
      );
    }
  }, [
    loading[ActionTypes.GET_STATS],
    loading[ActionTypes.GET_PARTICIPATION_STATUS],
    loading[ActionTypes.GET_USER],
  ]);

  const handleDonateClick = () => {
    dispatchWithLoading(ActionTypes.DONATE_GIFT, year);
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
      <ParticipationForm year={year} />
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
            direction={GiftDirectionTypes.OUTGOING}
            eventStageType={stageType}
            gift={outgoingPrimaryGift}
          />
        </>
      )}

      {incomingPrimaryGift && (
        <>
          <Title>Your secret toymaker</Title>
          <GiftStatus
            direction={GiftDirectionTypes.INCOMING}
            eventStageType={stageType}
            gift={incomingPrimaryGift}
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

      <Error id={ErrorTypes.DONATE_GIFT} />

      {stageType === StageTypes.GIFTING && (
        <Button
          isLoading={loading[ActionTypes.DONATE_GIFT]}
          onClick={handleDonateClick}
          title="Donate a gift"
        />
      )}

      {outgoingGifts &&
        outgoingGifts.map((outgoingGift) => (
          <GiftStatus
            direction={GiftDirectionTypes.OUTGOING}
            eventStageType={stageType}
            gift={outgoingGift}
            id={outgoingGift.id}
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
            incomingGifts.map((incomingGift) => (
              <GiftStatus
                direction={GiftDirectionTypes.INCOMING}
                eventStageType={stageType}
                gift={incomingGift}
                id={incomingGift.id}
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
        if (isParticipating) {
          contents = renderGifts();
        } else {
          contents = renderNotParticipatingMessage();
        }
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
          >
            {stageType === StageTypes.INACTIVE && (
              <Alert isStatic type={AlertTypes.SUCCESS}>
                <Paragraphs paragraphs={lang.event.hasEnded} noMargin />
              </Alert>
            )}
          </Alerts>

          {renderContent()}
        </Section>
      )}

      <CreditsSection showOnlyContactInfo />
    </div>
  );
};

EventPage.propTypes = {
  events: t.object,
  gifts: t.object,
  outgoingPrimaryGift: t.object,
  outgoingGifts: t.array,
  incomingPrimaryGift: t.object,
  incomingGifts: t.array,
  loading: t.object,
  participations: t.array,
  user: t.object,
};

const mapGlobalToProps = (global) => ({
  events: global.events,
  gifts: global.gifts,
  loading: global.loading,
  participations: global.participations,
  user: global.user,
});

export default withGlobal(mapGlobalToProps)(EventPage);
