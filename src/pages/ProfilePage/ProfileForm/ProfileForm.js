import Button from "components/Button";
import { InputField } from "components/Form";
import op from "object-path";
import React, { withGlobal } from "reactn";
import { dispatchWithLoading } from "utils/loading";
import ActionTypes from "utils/types/ActionTypes";

class ProfileForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: op.get(props, "user.email", null)
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (!prevProps.user && !!this.props.user) {
      this.setState({
        email: this.props.user.email
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
    const { email } = this.state;

    dispatchWithLoading(ActionTypes.UPDATE_USER, { email });
  };

  render() {
    const isLoading = this.global.loading[ActionTypes.UPDATE_USER];

    return (
      <div className="profile-form__container">
        <form className="profile-form" onSubmit={this.handleFormSubmit}>
          <InputField
            id="email"
            isDisabled={isLoading}
            label="Email"
            onChange={this.handleInputChange}
            placeholder="scarlet@briar.com"
            type="email"
            value={this.state.email}
          />

          <Button
            isLoading={isLoading}
            theme="primary"
            title="Update profile"
            type="submit"
          />
        </form>
      </div>
    );
  }
}

const mapGlobalToProps = global => ({
  loading: global.loading,
  user: global.user
});

export default withGlobal(mapGlobalToProps)(ProfileForm);
