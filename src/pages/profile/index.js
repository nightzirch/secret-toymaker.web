import Alerts from "@/components/Alerts";
import ApiTokenForm from "@/components/ApiTokenForm";
import { ResetPasswordButton, SignoutButton } from "@/components/Button";
import { Grid, GridItem } from "@/components/Grid";
import NotificationsForm from "@/components/NotificationsForm";
import ProfileForm from "@/components/ProfileForm";
import ProfilePicture from "@/components/ProfilePicture";
import Section from "@/components/Section";
import { CreditsSection } from "@/components/Sections";
import { PageHeader, Title } from "@/components/Typography";
import { validateAuthWithRedirect } from "@/utils/redirect";
import AlertLocationTypes from "@/utils/types/AlertLocationTypes";

const ProfilePage = (props) => {
  const renderProfilePicture = () => (
    <>
      <ProfilePicture />
    </>
  );

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
          </GridItem>

          <GridItem span={8}>
            <Title level="secondary">Details</Title>
            <ApiTokenForm />
            <ProfileForm />

            <Title level="secondary">Notifications</Title>
            <NotificationsForm />
            {renderDangerZone()}
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
};

export const getServerSideProps = async (ctx) =>
  await validateAuthWithRedirect(ctx);

export default ProfilePage;
