import Button from "components/Button";
import Error from "components/Error";
import { InputField } from "components/Form";
import op from "object-path";
import { withGlobal } from "reactn";
import { dispatchWithLoading } from "utils/loading";
import ActionTypes from "utils/types/ActionTypes";
import ErrorTypes from "utils/types/ErrorTypes";
import { isApiTokenValid } from "utils/validation";

class ApiTokenForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      apiToken: op.get(props, "user.apiToken", null),
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (!prevProps.user && !!this.props.user) {
      this.setState({
        apiToken: this.props.user.apiToken,
      });
    }
  };

  handleInputChange = (e) => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  };

  handleFormSubmit = async (e) => {
    e.preventDefault();

    const { apiToken } = this.state;

    if (!isApiTokenValid(apiToken)) {
      await dispatchWithLoading(
        ActionTypes.SET_ERROR,
        ErrorTypes.UPDATE_API_TOKEN,
        "API token is invalid."
      );
    } else {
      await dispatchWithLoading(
        ActionTypes.SET_ERROR,
        ErrorTypes.UPDATE_API_TOKEN
      );
      await dispatchWithLoading(ActionTypes.UPDATE_API_TOKEN, {
        apiToken,
      });
    }
  };

  render() {
    const isLoading = this.global.loading[ActionTypes.UPDATE_API_TOKEN];

    return (
      <div className="api-token-form__container">
        <Error id={ErrorTypes.UPDATE_API_TOKEN} />

        <form className="api-token-form" onSubmit={this.handleFormSubmit}>
          <InputField
            id="apiToken"
            isDisabled={isLoading}
            label="API token"
            onChange={this.handleInputChange}
            placeholder="xxxxxxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxxxxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
            type="apiToken"
            value={this.state.apiToken}
          />

          <Button
            isLoading={isLoading}
            theme="primary"
            title="Update API token"
            type="submit"
          />
        </form>
      </div>
    );
  }
}

const mapGlobalToProps = (global) => ({
  loading: global.loading,
  user: global.user,
});

export default withGlobal(mapGlobalToProps)(ApiTokenForm);
