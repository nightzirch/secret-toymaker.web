import classnames from "classnames";
import t from "prop-types";
import React from "reactn";
import "./InputField.scss";

class InputField extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false,
      isTouched: false,
      isValid: false
    };

    this.handleValueChange = this.handleValueChange.bind(this);
    this.handleFocusChange = this.handleFocusChange.bind(this);
  }

  componentDidMount() {
    if (this.props.value) {
      let matchesValidPattern = this.props.value.match(
        this.inputPattern(this.props.minLength, this.props.maxLength)
      );

      this.setState({ isValid: !!matchesValidPattern });
    }
  }

  getFieldType() {
    switch (this.props.type) {
      case "email":
        return "email";
      case "password":
        return "password";
      case "apiToken":
      case "text":
      default:
        return "text";
    }
  }

  inputPattern(min, max) {
    switch (this.props.type) {
      case "apiToken":
        return "^([0-9A-Z]){8}-([0-9A-Z]){4}-([0-9A-Z]){4}-([0-9A-Z]){4}-([0-9A-Z]){20}-([0-9A-Z]){4}-([0-9A-Z]){4}-([0-9A-Z]){4}-([0-9A-Z]){12}$";
      case "email":
        // Valid characters, then @, then valid domain
        return "\\b[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}\\b";
      case "password":
      case "text":
      default:
        // Accepts everything
        return "";
    }
  }

  handleValueChange = e => {
    let value = e.target.value;
    let matchesValidPattern = value.match(
      this.inputPattern(this.props.minLength, this.props.maxLength)
    );

    this.setState({
      isTouched: true,
      isValid: !!matchesValidPattern
    });

    this.props.onChange(e);
  };

  handleFocusChange(e) {
    this.setState({ isActive: e.type === "focus" });
  }

  render() {
    let containerClasses = classnames("input-field", {
      "input-field--active": this.state.isActive,
      "input-field--invalid": this.state.isTouched && !this.state.isValid,
      "input-field--valid": this.state.isValid
    });
    let inputClasses = classnames("input-field__input", [
      `input-field__input--${this.props.type}`
    ]);
    return (
      <div className={containerClasses}>
        {this.props.label ? (
          <label className="input-field__label" htmlFor={this.props.id}>
            {this.props.label}
          </label>
        ) : null}

        <input
          autoComplete={this.props.isAutocomplete ? "on" : "off"}
          autoFocus={this.props.isAutofocus}
          className={inputClasses}
          disabled={this.props.isDisabled ? "disabled" : null}
          id={this.props.id}
          onBlur={this.handleFocusChange}
          onChange={this.handleValueChange}
          onFocus={this.handleFocusChange}
          // pattern={this.inputPattern(this.props.minLength, this.props.maxLength)}
          placeholder={this.props.placeholder}
          readOnly={this.props.isReadOnly}
          required={this.props.isRequired}
          type={this.getFieldType(this.props.type)}
          value={this.props.value || ""}
        />
      </div>
    );
  }
}

InputField.propTypes = {
  id: t.string.isRequired,
  isAutocomplete: t.bool,
  isAutofocus: t.bool,
  isDisabled: t.bool,
  isReadOnly: t.bool,
  isRequired: t.bool,
  label: t.string,
  maxLength: t.number,
  minLength: t.number,
  onChange: t.func,
  placeholder: t.string,
  type: t.oneOf(["apiToken", "email", "password", "text"]).isRequired,
  value: t.string
};

InputField.defaultProps = {
  isAutocomplete: true,
  maxLength: 0,
  minLength: 0,
  onChange: () => {},
  value: ""
};

export default InputField;
