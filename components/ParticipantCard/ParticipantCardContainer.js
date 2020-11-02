import t from "prop-types";
import React from "reactn";

const ParticipantCardContainer = (props) =>
  this.props.cards || this.props.cards.length <= 0 ? (
    <div className="participant-card-container">{this.props.cards}</div>
  ) : null;

ParticipantCardContainer.propTypes = {
  cards: t.arrayOf(t.element),
};

export default ParticipantCardContainer;
