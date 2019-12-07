import { withRouter } from "react-router-dom";
import React from "reactn";
import Routes from "routes";
import { replaceString } from "utils/string";
import Button from "./Button";

const EventButton = props => {
  const gotoEvent = () => {
    // I really can't find docs about how to do this the clean way...
    props.history.push(replaceString(Routes.EVENT, { ":year": "2019" }));
  };

  return (
    <Button
      icon={<ion-icon name="arrow-forward" />}
      iconPlacement="right"
      onClick={gotoEvent}
      primary
      title="Right this way"
      {...props}
    />
  );
};

export default withRouter(EventButton);
