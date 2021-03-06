import Alerts from "@/components/Alerts";
import EventCard from "@/components/EventCard";
import { Grid, GridItem } from "@/components/Grid";
import LoadingIndicator from "@/components/LoadingIndicator";
import Section from "@/components/Section";
import ActionTypes from "@/utils/types/ActionTypes";
import AlertLocationTypes from "@/utils/types/AlertLocationTypes";
import t from "prop-types";
import { withGlobal } from "reactn";

const EventsPage = (props) => {
  const { events, loading } = props;

  const renderEvents = () => {
    return (
      <Grid>
        {Object.values(events)
          .sort((a, b) => (a.year > b.year ? -1 : 1))
          .map((event) => (
            <GridItem span={6} spanMobile={12} key={event.year}>
              <EventCard event={event} />
            </GridItem>
          ))}
      </Grid>
    );
  };

  return (
    <div className="events-page">
      {loading[ActionTypes.GET_EVENTS] ? (
        <LoadingIndicator message="Hold on as Toymake-o-tron is digging through our archives..." />
      ) : (
        <Section>
          <Alerts
            location={AlertLocationTypes.EVENT}
            isHorizontalPadding={false}
            isVerticalPadding
          />

          {renderEvents()}
        </Section>
      )}
    </div>
  );
};

EventsPage.propTypes = {
  events: t.object,
  loading: t.object,
};

const mapGlobalToProps = (global) => ({
  events: global.events,
  loading: global.loading,
});

export default withGlobal(mapGlobalToProps)(EventsPage);
