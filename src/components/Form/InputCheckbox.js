import PropTypes from "prop-types";
import React from "reactn";
import "./InputCheckbox.scss";

const InputCheckbox = props => {
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
        ref="input"
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
  id: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
  isReadOnly: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.bool
};

export default InputCheckbox;
