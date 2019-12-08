import classnames from "classnames";
import { PageHeader, Paragraph } from "components/Typography";
import lang from "lang/lang";
import t from "prop-types";
import React, { withGlobal } from "reactn";
import { getAuthStatus } from "utils/auth";
import "./EventHero.scss";

const EventHero = props => {
  const { stage } = props;
  const { stageType, year } = stage || {};
  const authStatus = getAuthStatus();

  const getTitle = () => "Secret Toymaker 2019";

  return (
    <div className={classnames("event-hero")}>
      <PageHeader title={getTitle()} type="signup">
        <Paragraph className="event-page__header__lead">
          {lang.signup.lead}
        </Paragraph>
      </PageHeader>
    </div>
  );
};

EventHero.propTypes = {
  stage: t.object
};

const mapGlobalToProps = global => ({
  stage: global.stage
});

export default withGlobal(mapGlobalToProps)(EventHero);
