import Button from "components/Button";
import { TextArea } from "components/Form";
import React, { useEffect, useGlobal, useState } from "reactn";
import { dispatchWithLoading } from "utils/loading";
import { getParticipationByYear } from "utils/participation";
import ActionTypes from "utils/types/ActionTypes";
import "./ParticipationForm.scss";

const ParticipationForm = props => {
  const [loading] = useGlobal("loading");
  const [stage] = useGlobal("stage");
  const { year } = stage;
  const [notes, setNotes] = useState("");
  const participation = getParticipationByYear(year);
  const isParticipating = !!participation;
  const isLoading =
    loading[ActionTypes.REGISTER_PARTICIPATION] ||
    loading[ActionTypes.REMOVE_PARTICIPATION];

  useEffect(() => {
    const newNotes = participation ? participation.notes : "";
    setNotes(newNotes);
  }, [participation]);

  const handleInputChange = e => {
    const { value } = e.target;
    setNotes(value);
  };

  const handleFormSubmit = e => {
    e.preventDefault();

    // TODO: Add validation
    dispatchWithLoading(ActionTypes.REGISTER_PARTICIPATION, notes).then(() => {
      dispatchWithLoading(ActionTypes.GET_STATS);
    });
  };

  const handleRemoveParticipationClick = () => {
    dispatchWithLoading(ActionTypes.REMOVE_PARTICIPATION).then(() => {
      dispatchWithLoading(ActionTypes.GET_STATS);
    });
  };

  const renderSubmitButton = () =>
    isParticipating ? (
      <Button
        isDisabled={isLoading}
        isLoading={loading[ActionTypes.REGISTER_PARTICIPATION]}
        theme="secondary"
        title="Update notes"
        type="submit"
      />
    ) : (
      <Button
        isDisabled={isLoading}
        isLoading={loading[ActionTypes.REGISTER_PARTICIPATION]}
        theme="primary"
        title="Participate in Secret Toymaker"
        type="submit"
      />
    );

  const renderRemoveParticipationButton = () =>
    isParticipating && (
      <Button
        isDisabled={isLoading}
        isLoading={loading[ActionTypes.REMOVE_PARTICIPATION]}
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
          isDisabled={isLoading}
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
