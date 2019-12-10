import Button from "components/Button";
import { TextArea } from "components/Form";
import React, { useDispatch, useGlobal, useState } from "reactn";
import { isParticipatingInEvent } from "utils/participation";
import "./ParticipationForm.scss";

const ParticipationForm = props => {
  const [stage] = useGlobal("stage");
  const { year } = stage;
  const registerParticipation = useDispatch("registerParticipation");
  const removeParticipation = useDispatch("removeParticipation");
  const [notes, setNotes] = useState("");
  const isParticipating = isParticipatingInEvent(year);

  const handleInputChange = e => {
    const { value } = e.target;
    setNotes(value);
  };

  const handleFormSubmit = e => {
    e.preventDefault();

    // TODO: Add validation
    registerParticipation(notes);
  };

  const handleRemoveParticipationClick = () => {
    removeParticipation();
  };

  const renderSubmitButton = () =>
    isParticipating ? (
      <Button theme="secondary" title="Update notes" type="submit" />
    ) : (
      <Button
        theme="primary"
        title="Participate in Secret Toymaker"
        type="submit"
      />
    );

  const renderRemoveParticipationButton = () =>
    isParticipating && (
      <Button
        onClick={handleRemoveParticipationClick}
        theme="danger"
        title="Remove participation"
      />
    );

  return (
    <div className="participation-form__container">
      <form className="participation-form" onSubmit={handleFormSubmit}>
        <TextArea
          id="notes"
          label="Notes to your secret toymaker"
          onChange={handleInputChange}
          value={notes}
        />

        {renderSubmitButton()}
        {renderRemoveParticipationButton()}
      </form>
    </div>
  );
};

ParticipationForm.propTypes = {};

export default ParticipationForm;
