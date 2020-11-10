import t from "prop-types";
import React from "reactn";

const InputCheckbox = (props) => {
  return (
    <div className="input-checkbox">
      <input
        checked={props.value}
        className="input-checkbox__input"
        disabled={props.isDisabled ? "disabled" : null}
        hidden
        id={props.id}
        onChange={props.onChange}
        readOnly={props.isReadOnly}
        type="checkbox"
      />

      <label className="input-checkbox__label" htmlFor={props.id}>
        <span className="input-checkbox__box">
          <span className="input-checkbox__handle" />
        </span>

        {props.label && (
          <span className="input-checkbox__label-title">{props.label}</span>
        )}
      </label>
    </div>
  );
};

InputCheckbox.propTypes = {
  id: t.string.isRequired,
  isDisabled: t.bool,
  isReadOnly: t.bool,
  label: t.string,
  onChange: t.func,
  value: t.bool,
};

export default InputCheckbox;
