import { PageHeader, Paragraphs } from "@/components/Typography";
import lang from "@/lang/lang";
import classnames from "classnames";
import { useRouter } from "next/router";
import t from "prop-types";
import { withGlobal } from "reactn";

const EventHero = (props) => {
  const router = useRouter();
  const { year } = router.query;
  const { events } = props;
  const { stage, name } = events?.[year] || {};
  const { type: stageType } = stage || {};
  const leadText = lang.event.hero[stageType];

  return (
    <div className={classnames("event-hero")}>
      <PageHeader title={name} type="signup">
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
  events: t.object,
};

const mapGlobalToProps = (global) => ({
  events: global.events,
});

export default withGlobal(mapGlobalToProps)(EventHero);
