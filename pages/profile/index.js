import Alerts from "components/Alerts";
import ApiTokenForm from "components/ApiTokenForm";
import Button, { ResetPasswordButton, SignoutButton } from "components/Button";
import { Grid, GridItem } from "components/Grid";
import NotificationsForm from "components/NotificationsForm";
import ProfileForm from "components/ProfileForm";
import ProfilePicture from "components/ProfilePicture";
import Section from "components/Section";
import { CreditsSection } from "components/Sections";
import { PageHeader, Title } from "components/Typography";
import React from "reactn";
import { validateAuthWithRedirect } from "utils/redirect";
import AlertLocationTypes from "utils/types/AlertLocationTypes";

class ProfilePage extends React.Component {
  renderProfilePicture = () => (
    <>
      <ProfilePicture />
    </>
  );

  renderDangerZone = () => (
    <>
      <Title level="secondary">Danger zone</Title>

      <SignoutButton />
      <ResetPasswordButton />
    </>
  );

  renderTestZone = () => (
    <>
      <Title level="secondary">Test zone</Title>

      <Button
        title="Participate"
        onClick={() =>
          this.global.firebase.registerParticipation(this.global.user)
        }
      />
      <Button
        title="Init gift"
        onClick={() => this.global.firebase.initGift(this.global.user)}
      />
    </>
  );

  render() {
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
              {this.renderProfilePicture()}
            </GridItem>

            <GridItem span={8}>
              <Title level="secondary">Details</Title>
              <ApiTokenForm />
              <ProfileForm />

              <Title level="secondary">Notifications</Title>
              <NotificationsForm />
              {this.renderDangerZone()}
            </GridItem>

            {/* <GridItem span={3}>
              <Title level="secondary">Notifications</Title>
              <NotificationsForm />
            </GridItem> */}
          </Grid>
        </Section>

        <CreditsSection showOnlyContactInfo />
      </div>
    );
  }
}

export const getServerSideProps = async (ctx) =>
  await validateAuthWithRedirect(ctx);

export default ProfilePage;
