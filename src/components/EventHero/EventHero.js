import classnames from "classnames";
import { PageHeader, Paragraphs } from "components/Typography";
import lang from "lang/lang";
import t from "prop-types";
import React, { withGlobal } from "reactn";
import "./EventHero.scss";

const EventHero = props => {
  const { stage } = props;
  const { type: stageType, year } = stage || {};
  const leadText = lang.event.hero[stageType];

  const getTitle = () => (year ? `Secret Toymaker ${year}` : "Secret Toymaker");

  return (
    <div className={classnames("event-hero")}>
      <PageHeader title={getTitle()} type="signup">
        {leadText && (
          <Paragraphs
            className="event-page__header__lead"
            paragraphs={leadText}
          />
        )}
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
