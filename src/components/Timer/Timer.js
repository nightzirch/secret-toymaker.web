import Card from "components/Card";
import { Paragraph, Title } from "components/Typography";
import moment from "moment";
import React, { useGlobal } from "reactn";
import "./Timer.scss";
import { TEXTS } from "./utils/constants";

const Timer = props => {
  const [stage] = useGlobal("stage");
  const end = stage && moment(stage.end);

  const handleCallToActionClick = () => {
    console.log("Button clicked");
  };

  return end ? (
    <div className="timer">
      <Title level="secondary">Timer</Title>
      <Card buttonLabel="Sign up" onButtonClick={handleCallToActionClick}>
        <Paragraph className="timer__ending">
          {`${TEXTS[stage.name]} `}
          <span className="timer__countdown">{end.fromNow()}</span>.
        </Paragraph>
      </Card>
    </div>
  ) : null;
};

Timer.propTypes = {};

export default Timer;
