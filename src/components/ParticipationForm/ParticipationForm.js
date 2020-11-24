import Button from "@/components/Button";
import Error from "@/components/Error";
import { TextArea } from "@/components/Form";
import { dispatchWithLoading } from "@/utils/loading";
import { getParticipationByYear } from "@/utils/participation";
import ActionTypes from "@/utils/types/ActionTypes";
import ErrorTypes from "@/utils/types/ErrorTypes";
import { isNotesValid } from "@/utils/validation";
import t from "prop-types";
import React, { useEffect, useGlobal, useState } from "reactn";

const ParticipationForm = (props) => {
  const [loading] = useGlobal("loading");
  const [user] = useGlobal("user");
  const { year } = props;
  const { apiToken } = user;
  const [notes, setNotes] = useState("");
  const participation = getParticipationByYear(year);
  const isParticipating = !!participation;
  const isDisabled = !apiToken;
  const isLoading =
    loading[ActionTypes.REGISTER_PARTICIPATION] ||
    loading[ActionTypes.REMOVE_PARTICIPATION];

  useEffect(() => {
    const newNotes = participation ? participation.notes : "";
    setNotes(newNotes);
  }, [participation]);

  const handleInputChange = (e) => {
    const { value } = e.target;
    setNotes(value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!isNotesValid(notes)) {
      dispatchWithLoading(
        ActionTypes.SET_ERROR,
        ErrorTypes.UPDATE_PARTICIPATION,
        "Woah! I mean, you don't have to write an essay, but you can do better than that."
      );
    } else {
      dispatchWithLoading(
        ActionTypes.SET_ERROR,
        ErrorTypes.UPDATE_PARTICIPATION
      );
      dispatchWithLoading(ActionTypes.REGISTER_PARTICIPATION, notes, year).then(
        () => {
          dispatchWithLoading(ActionTypes.GET_EVENTS);
        }
      );
    }
  };

  const handleRemoveParticipationClick = () => {
    dispatchWithLoading(ActionTypes.REMOVE_PARTICIPATION, year).then(() => {
      dispatchWithLoading(ActionTypes.GET_EVENTS);
    });
  };

  const isNoteFieldChanged = () => notes !== participation?.notes;

  const renderSubmitButton = () =>
    isParticipating ? (
      <Button
        isDisabled={!isNoteFieldChanged() || isDisabled || isLoading}
        isLoading={loading[ActionTypes.REGISTER_PARTICIPATION]}
        theme="secondary"
        title="Update notes"
        type="submit"
      />
    ) : (
      <Button
        isDisabled={isDisabled || isLoading}
        isLoading={loading[ActionTypes.REGISTER_PARTICIPATION]}
        theme="primary"
        title={`Participate in Secret Toymaker ${year}`}
        type="submit"
      />
    );

  const renderRemoveParticipationButton = () =>
    isParticipating && (
      <Button
        isDisabled={isDisabled || isLoading}
        isLoading={loading[ActionTypes.REMOVE_PARTICIPATION]}
        onClick={handleRemoveParticipationClick}
        theme="danger"
        title="Remove participation"
      />
    );

  return (
    <div className="participation-form__container">
      <Error id={ErrorTypes.UPDATE_PARTICIPATION} />

      <form className="participation-form" onSubmit={handleFormSubmit}>
        <TextArea
          id="notes"
          isDisabled={isDisabled || isLoading}
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

ParticipationForm.propTypes = {
  year: t.string.isRequired,
};

export default ParticipationForm;
