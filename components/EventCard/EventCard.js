import Card from "components/Card";
import Stats from "components/Stats";
import { Paragraph, Title } from "components/Typography";
import Routes from "config/routes";
import Link from "next/link";
import t from "prop-types";
import { replaceString } from "utils/string";
import StageTypes from "utils/types/StageTypes";
import { getStatusData } from "./utils/eventCardHelper";

const EventCard = (props) => {
  const { event } = props;
  const { year } = event;
  const url = replaceString(Routes.EVENT, { ":year": year });

  const { statusText, statusColorScheme } = getStatusData(event);

  return (
    <Link href={url}>
      <a className="event-card-container">
        <Card className="event-card">
          <Title className="event-card__title" level="tertiary">
            {year}
          </Title>

          <div className="event-card__stats">
            <Paragraph colorScheme={statusColorScheme}>{statusText}</Paragraph>
            <Stats year={year} isSimplified />
          </div>
        </Card>
      </a>
    </Link>
  );
};

EventCard.propTypes = {
  event: t.shape({
    currentStage: t.shape({
      type: t.oneOf(Object.values(StageTypes)),
      year: t.string,
      start: t.string,
      end: t.string,
    }),
    eventEnd: t.string,
    eventStart: t.string,
    giftsSent: t.number,
    isMatchingBegun: t.bool,
    isMatchingDone: t.bool,
    participants: t.number,
    signupStart: t.string,
    year: t.string,
  }).isRequired,
};

export default EventCard;
