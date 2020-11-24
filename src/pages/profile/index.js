import Alerts from "@/components/Alerts";
import ApiTokenForm from "@/components/ApiTokenForm";
import { ResetPasswordButton, SignoutButton } from "@/components/Button";
import EventCard from "@/components/EventCard";
import { Grid, GridItem } from "@/components/Grid";
import NotificationsForm from "@/components/NotificationsForm";
import ProfileForm from "@/components/ProfileForm";
import ProfilePicture from "@/components/ProfilePicture";
import Section from "@/components/Section";
import { PageHeader, Title } from "@/components/Typography";
import { dispatchWithLoading } from "@/utils/loading";
import { validateAuthWithRedirect } from "@/utils/redirect";
import ActionTypes from "@/utils/types/ActionTypes";
import AlertLocationTypes from "@/utils/types/AlertLocationTypes";
import t from "prop-types";
import { useEffect } from "react";
import { withGlobal } from "reactn";

const ProfilePage = (props) => {
  const { events, loading, participations, user } = props;

  useEffect(() => {
    if (user) dispatchWithLoading(ActionTypes.GET_PARTICIPATION_STATUS);
  }, [user]);

  const renderProfilePicture = () => (
    <>
      <ProfilePicture />
    </>
  );

  const renderParticipations = () => {
    if (!participations) return null;
    const participationYears = participations.map((p) => p.year);

    return (
      participationYears.length > 0 && (
        <>
          <Title level="secondary">Partici&shy;pations</Title>

          <Grid columns={4}>
            {Object.values(events)
              .filter((event) => participationYears.includes(event.year))
              .sort((a, b) => (a.year > b.year ? -1 : 1))
              .map((event) => (
                <GridItem span={4} spanMobile={12} key={event.year}>
                  <EventCard event={event} />
                </GridItem>
              ))}
          </Grid>
        </>
      )
    );
  };

  const renderDangerZone = () => (
    <>
      <Title level="secondary">Danger zone</Title>

      <SignoutButton />
      <ResetPasswordButton />
    </>
  );

  return (
    <div className="profile-page">
      <Section>
        <PageHeader type="profile" title="Profile" />

        <Alerts
          isHorizontalPadding={false}
          isVerticalPadding
          location={AlertLocationTypes.PROFILE}
        />

        <Grid>
          <GridItem span={4}>
            <Title level="secondary">Avatar</Title>
            {renderProfilePicture()}

            {renderParticipations()}
          </GridItem>

          <GridItem span={8}>
            <Title level="secondary">Details</Title>
            <ApiTokenForm />
            <ProfileForm />

            <Title level="secondary">Notifi&shy;cations</Title>
            <NotificationsForm />
            {renderDangerZone()}
          </GridItem>

          {/* <GridItem span={3}>
              <Title level="secondary">Notifications</Title>
              <NotificationsForm />
            </GridItem> */}
        </Grid>
      </Section>
    </div>
  );
};

ProfilePage.propTypes = {
  events: t.object,
  loading: t.object,
  participations: t.array,
  user: t.object,
};

const mapGlobalToProps = (global) => ({
  events: global.events,
  loading: global.loading,
  participations: global.participations,
  user: global.user,
});

export const getServerSideProps = async (ctx) =>
  await validateAuthWithRedirect(ctx);

export default withGlobal(mapGlobalToProps)(ProfilePage);
