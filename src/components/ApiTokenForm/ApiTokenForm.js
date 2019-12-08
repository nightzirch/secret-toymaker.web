import Button from "components/Button";
import { InputField } from "components/Form";
import op from "object-path";
import React, { withGlobal } from "reactn";

class ApiTokenForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      apiToken: op.get(props, "user.apiToken", null)
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (!prevProps.user && !!this.props.user) {
      this.setState({
        apiToken: this.props.user.apiToken
      });
    }
  };

  handleInputChange = e => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  };

  handleFormSubmit = async e => {
    e.preventDefault();

    // TODO: Add validation
    const { apiToken } = this.state;

    this.dispatch.updateApiToken({ apiToken });
  };

  render() {
    return (
      <div className="api-token-form__container">
        <form className="api-token-form" onSubmit={this.handleFormSubmit}>
          <InputField
            id="apiToken"
            label="API token"
            onChange={this.handleInputChange}
            placeholder="xxxxxxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxxxxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
            type="apiToken"
            value={this.state.apiToken}
          />

          <Button theme="primary" title="Update API token" type="submit" />
        </form>
      </div>
    );
  }
}

const mapGlobalToProps = global => ({
  user: global.user
});

export default withGlobal(mapGlobalToProps)(ApiTokenForm);
