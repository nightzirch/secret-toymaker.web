import Button from "components/Button";
import { InputField, TextArea } from "components/Form";
import { ErrorMessage } from "components/Messages";
import {
  ParticipantCard,
  ParticipantCardContainer
} from "components/ParticipantCard";
import { PageHeader, Paragraphs, Title } from "components/Typography";
import errorMessages from "lang/errorMessages";
import lang from "lang/lang";
import op from "object-path";
import { withRouter } from "react-router-dom";
import React from "reactn";
import "./GiftsPage.scss";

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);

    this.drawRandomParticipant = this.drawRandomParticipant.bind(this);
    this.state = {
      checkedMatch: false
    };
  }

  componentDidMount() {
    if (this.props.site.stage !== "GIFTING") {
      this.props.history.push("/");
    }
    this.props.actions.setInputFocus("apitoken");
  }

  componentWillReceiveProps(nextProps) {
    // If first time checking
    if (
      op.get(this, "props.participant.match.accname") &&
      !op.get(this, "props.participant.status.checked") &&
      this.state.checkedMatch === false
    ) {
      // Update checked status
      this.props.actions.matchChecked(this.props.participant._id);
      this.setState({
        checkedMatch: true
      });
    }
  }

  gotoSignupPage() {
    this.props.history.push("/signup");
  }

  isMatched() {
    return (
      op.get(this, "props.participant.match.accname") &&
      op.get(this, "props.participant.match.notes")
    );
  }

  drawRandomParticipant() {
    this.props.actions.getNewDonationMatch(this.props.participant._id);
  }

  renderLogin() {
    return (
      <div>
        {this.props.site.stage === "SIGNUP" && (
          <div>
            <Title level="secondary">Not signed up yet?</Title>
            <Paragraphs paragraphs={lang.profile.notSignedUp} />
            <Button onClick={this.gotoSignupPage} title="Go to sign up" />
          </div>
        )}
      </div>
    );
  }

  renderMatchSection() {
    return (
      <div className="match-section">
        <Title level="secondary">Your match</Title>

        <InputField
          disabled
          id="matchAccname"
          initialValue={this.props.participant.match.accname}
          label="Your match's account name"
          type="text"
        />

        <TextArea
          disabled
          id="matchNotes"
          initialValue={this.props.participant.match.notes}
          label="Your match's notes"
        />
      </div>
    );
  }

  renderGiftsPage() {
    return (
      <div>
        {this.isMatched() && this.renderMatchSection()}

        {this.renderDonations()}
      </div>
    );
  }

  renderDonations() {
    return (
      <div className="donations-section">
        <PageHeader type="donations" title="Donations">
          <Paragraphs paragraphs={lang.gifts.donations} />
        </PageHeader>

        <Button
          onClick={this.drawRandomParticipant}
          primary={true}
          title="Donate a gift"
        />

        {this.props.participant.successStatus && (
          <ErrorMessage
            text={errorMessages[this.props.participant.successStatus]}
          />
        )}

        {op.get(this, "props.participant.gifts", []).length > 0 && (
          <div>
            <Title level="secondary">Your additional matches</Title>

            <ParticipantCardContainer
              cards={op.get(this, "props.participant.gifts", []).map((p, i) => (
                <ParticipantCard accname={p.accname} notes={p.notes} key={i} />
              ))}
            />
          </div>
        )}
      </div>
    );
  }

  render() {
    return (
      <div className="gifts-page">
        <PageHeader type="gifts" title="Gifts">
          <Paragraphs paragraphs={lang.gifts.intro} />
        </PageHeader>

        {op.get(this, "props.participant.success")
          ? this.renderGiftsPage()
          : this.renderLogin()}
      </div>
    );
  }
}

export default withRouter(ProfilePage);
