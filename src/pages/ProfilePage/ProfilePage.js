import Button, {
  DeleteAccountButton,
  PasswordResetButton,
  SignoutButton
} from "components/Button";
import { Grid, GridItem } from "components/Grid";
import ProfilePicture from "components/ProfilePicture";
import Section from "components/Section";
import { PageHeader, Title } from "components/Typography";
import React from "reactn";
import ProfileForm from "./ProfileForm";
import "./ProfilePage.scss";

class ProfilePage extends React.Component {
  renderProfilePicture = () => (
    <>
      <ProfilePicture />
    </>
  );

  renderProfileForm = () => (
    <>
      <Title level="secondary">Details</Title>
      <ProfileForm />
    </>
  );

  renderDangerZone = () => (
    <>
      <Title level="secondary">Danger zone</Title>

      <DeleteAccountButton />
      <PasswordResetButton />
      <SignoutButton />
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

          <Grid>
            <GridItem span={3}>{this.renderProfilePicture()}</GridItem>

            <GridItem span={6}>
              {this.renderProfileForm()}
              {this.renderDangerZone()}
            </GridItem>

            <GridItem span={3}>
              <Title level="secondary">Awards</Title>
            </GridItem>
          </Grid>
        </Section>
      </div>
    );
  }
}

export default ProfilePage;
