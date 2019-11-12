import PropTypes from "prop-types";
import React from "reactn";
import "./ParticipantCard.scss";

const ParticipantCardContainer = props =>
  this.props.cards || this.props.cards.length <= 0 ? (
    <div className="participant-card-container">{this.props.cards}</div>
  ) : null;

ParticipantCardContainer.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.element)
};

export default ParticipantCardContainer;
