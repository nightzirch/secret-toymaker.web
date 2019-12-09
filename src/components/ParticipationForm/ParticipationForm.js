import Button from "components/Button";
import { TextArea } from "components/Form";
import React, { useDispatch, useGlobal, useState } from "reactn";
import { isParticipatingInEvent } from "utils/participation";
import "./ParticipationForm.scss";

const ParticipationForm = props => {
  const [stage] = useGlobal("stage");
  const { year } = stage;
  const registerParticipation = useDispatch("registerParticipation");
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

  const getButtonTitle = () => {
    return isParticipating
      ? "Update notes"
      : `Participate in Secret Toymaker ${year}`;
  };

  return (
    <div className="participation-form__container">
      <form className="participation-form" onSubmit={handleFormSubmit}>
        <TextArea
          id="notes"
          label="Notes to your secret toymaker"
          onChange={handleInputChange}
          value={notes}
        />

        <Button theme="primary" title={getButtonTitle()} type="submit" />
      </form>
    </div>
  );
};

ParticipationForm.propTypes = {};

export default ParticipationForm;
