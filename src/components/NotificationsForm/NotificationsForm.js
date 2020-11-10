import { InputCheckbox } from "@/components/Form";
import { dispatchWithLoading } from "@/utils/loading";
import ActionTypes from "@/utils/types/ActionTypes";
import React, { useEffect, useGlobal, useReducer } from "reactn";

const setStatesReducer = (state, action) => {
  const { id, checked } = action;
  return { ...state, [id]: checked };
};

const NotificationsForm = (props) => {
  const [user] = useGlobal("user");
  const [states, setStates] = useReducer(setStatesReducer, {
    emailEventUpdates: false,
    emailFutureEvents: false,
    pushEventUpdates: false,
    pushFutureEvents: false,
  });

  useEffect(() => {
    if (user) {
      const { consents } = user;

      if (consents) {
        Object.keys(consents).forEach((consentKey) => {
          if (states[consentKey] !== consents[consentKey]) {
            setStates({ id: consentKey, checked: consents[consentKey] });
          }
        });
      }
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      dispatchWithLoading(ActionTypes.UPDATE_CONSENTS, { consents: states });
    }
  }, [states]);

  const handleChange = (e) => {
    const { id, checked } = e.target;
    setStates({ id, checked });
  };

  return (
    <div className="notifications-form">
      <InputCheckbox
        id="emailEventUpdates"
        label="Receive emails about updates in events you are participating in."
        onChange={handleChange}
        value={states.emailEventUpdates}
      />

      <InputCheckbox
        id="emailFutureEvents"
        label="Receive emails about future events."
        onChange={handleChange}
        value={states.emailFutureEvents}
      />

      {/* <InputCheckbox
        id="pushEventUpdates"
        label="Receive push notifications about updates in events you are participating in."
        onChange={handleChange}
        value={states.pushEventUpdates}
      />

      <InputCheckbox
        id="pushFutureEvents"
        label="Receive push notifications about future events."
        onChange={handleChange}
        value={states.pushFutureEvents}
      /> */}
    </div>
  );
};

export default NotificationsForm;
