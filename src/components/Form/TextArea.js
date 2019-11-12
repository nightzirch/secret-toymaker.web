import classnames from "classnames";
import PropTypes from "prop-types";
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
  id: PropTypes.string.isRequired,
  isAutocomplete: PropTypes.bool,
  isAutofocus: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isReadOnly: PropTypes.bool,
  isRequired: PropTypes.bool,
  label: PropTypes.string,
  minLength: PropTypes.number,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string
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
