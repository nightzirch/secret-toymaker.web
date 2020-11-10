import Button from "@/components/Button";
import Error from "@/components/Error";
import { InputField } from "@/components/Form";
import { Paragraph } from "@/components/Typography";
import { dispatchWithLoading } from "@/utils/loading";
import ActionTypes from "@/utils/types/ActionTypes";
import ErrorTypes from "@/utils/types/ErrorTypes";
import { isEmailValid } from "@/utils/validation";
import React, { withGlobal } from "reactn";

class ProfileForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: props?.user?.email || null,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (!prevProps.user && !!this.props.user) {
      this.setState({
        email: this.props.user.email,
      });
    }
  };

  handleInputChange = (e) => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  };

  handleFormSubmit = async (e) => {
    e.preventDefault();
    const { email } = this.state;

    if (!isEmailValid(email)) {
      await dispatchWithLoading(
        ActionTypes.SET_ERROR,
        ErrorTypes.UPDATE_USER,
        "Email is invalid."
      );
    } else {
      await dispatchWithLoading(ActionTypes.SET_ERROR, ErrorTypes.UPDATE_USER);
      await dispatchWithLoading(ActionTypes.UPDATE_USER, { email });
    }
  };

  render() {
    const isLoading = this.global.loading[ActionTypes.UPDATE_USER];

    return (
      <div className="profile-form__container">
        <Error id={ErrorTypes.UPDATE_USER} />

        <form className="profile-form" onSubmit={this.handleFormSubmit}>
          <InputField
            id="email"
            isDisabled={isLoading}
            label="Contact email"
            onChange={this.handleInputChange}
            placeholder="scarlet@briar.com"
            type="email"
            value={this.state.email}
          />

          <Paragraph isItalic>
            Note: this is your contact email, not login email.
          </Paragraph>

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

const mapGlobalToProps = (global) => ({
  loading: global.loading,
  user: global.user,
});

export default withGlobal(mapGlobalToProps)(ProfileForm);
