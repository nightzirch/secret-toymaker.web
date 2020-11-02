import t from "prop-types";
import React from "reactn";

const ParticipantCard = (props) => (
  <div className="participant-card">
    <div className="participant-card__accname">
      <span className="participant-card__label">Account name</span>
      <span className="participant-card__title">{this.props.accname}</span>
    </div>

    <div className="participant-card__notes">
      <span className="participant-card__label">Notes</span>
      <span className="participant-card__title">{this.props.notes}</span>
    </div>
  </div>
);

ParticipantCard.propTypes = {
  accname: t.string.isRequired,
  notes: t.string.isRequired,
};

export default ParticipantCard;
