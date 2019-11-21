import classnames from "classnames";
import t from "prop-types";
import React from "reactn";
import "./TextArea.scss";

class TextArea extends React.Component {
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
      let matchesValidPattern = this.props.value.length > this.props.minLength;

      this.setState({ isValid: !!matchesValidPattern });
    }
  }

  handleValueChange = e => {
    let value = e.target.value;
    let matchesValidPattern = value.length > this.props.minLength;

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
    let containerClasses = classnames("text-area", {
      "text-area--active": this.state.isActive,
      "text-area--invalid": this.state.isTouched && !this.state.isValid,
      "text-area--valid": this.state.isValid
    });
    let inputClasses = classnames("text-area__input", [
      `text-area__input--${this.props.type}`
    ]);
    return (
      <div className={containerClasses}>
        {this.props.label ? (
          <label className="text-area__label" htmlFor={this.props.id}>
            {this.props.label}
          </label>
        ) : null}

        <textarea
          autoComplete={this.props.isAutocomplete}
          autoFocus={this.props.isAutofocus}
          className={inputClasses}
          disabled={this.props.isDisabled ? "disabled" : null}
          id={this.props.id}
          onBlur={this.handleFocusChange}
          onChange={this.handleValueChange}
          onFocus={this.handleFocusChange}
          placeholder={this.props.placeholder}
          readOnly={this.props.isReadOnly}
          required={this.props.isRequired}
        />
      </div>
    );
  }
}

TextArea.propTypes = {
  id: t.string.isRequired,
  isAutocomplete: t.bool,
  isAutofocus: t.bool,
  isDisabled: t.bool,
  isReadOnly: t.bool,
  isRequired: t.bool,
  label: t.string,
  minLength: t.number,
  onChange: t.func,
  placeholder: t.string,
  value: t.string
};

TextArea.defaultProps = {
  isAutocomplete: true,
  isDisabled: false,
  maxLength: 0,
  minLength: 0,
  onChange: () => {},
  value: ""
};

export default TextArea;
