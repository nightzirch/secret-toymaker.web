import Button from "components/Button";
import { InputField } from "components/Form";
import op from "object-path";
import React, { useDispatch, withGlobal } from "reactn";

class ProfileForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: op.get(props, "user.email", null),
      name: op.get(props, "user.name", null),
      apiToken: op.get(props, "user.apiToken", null)
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (!prevProps.user && !!this.props.user) {
      this.setState({
        email: this.props.user.email,
        name: this.props.user.name,
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
    const { email, name, apiToken } = this.state;

    const updateUser = useDispatch("updateUser");
    updateUser({ email, name, apiToken });
  };

  render() {
    return (
      <div className="profile-form__container">
        <form className="profile-form" onSubmit={this.handleFormSubmit}>
          <InputField
            id="email"
            label="Email"
            onChange={this.handleInputChange}
            placeholder="scarlet@briar.com"
            type="email"
            value={this.state.email}
          />

          <InputField
            id="name"
            label="Name"
            onChange={this.handleInputChange}
            placeholder="Scarlet Briar"
            type="text"
            value={this.state.name}
          />

          <InputField
            id="apiToken"
            label="API token"
            onChange={this.handleInputChange}
            placeholder="xxxxxxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxxxxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
            type="apiToken"
            value={this.state.apiToken}
          />

          {op.get(this, "global.firebase.user.accname") && (
            <InputField
              id="accname"
              isDisabled
              label="Account name"
              placeholder="Update your API token"
              type="text"
            />
          )}

          <Button theme="primary" title="Update profile" type="submit" />
        </form>
      </div>
    );
  }
}

const mapGlobalToProps = global => ({
  user: global.user
});

export default withGlobal(mapGlobalToProps)(ProfileForm);
