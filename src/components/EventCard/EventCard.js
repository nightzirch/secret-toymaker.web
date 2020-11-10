import Card from "@/components/Card";
import Stats from "@/components/Stats";
import { Paragraph, Title } from "@/components/Typography";
import Routes from "@/config/routes";
import { replaceString } from "@/utils/string";
import StageTypes from "@/utils/types/StageTypes";
import classnames from "classnames";
import Link from "next/link";
import t from "prop-types";
import { getStatusData } from "./utils/eventCardHelper";

const EventCard = (props) => {
  const { event } = props;
  const { currentStage, year } = event;
  const url = replaceString(Routes.EVENT, { "[year]": year });

  const {
    fontWeight,
    isBold,
    isItalic,
    statusText,
    statusColorScheme,
  } = getStatusData(event);

  return (
    <Link href={url}>
      <a className="event-card-container">
        <Card
          className={classnames(
            "event-card",
            `event-card--${currentStage.type}`
          )}
        >
          <Title
            className="event-card__title"
            colorScheme="primary"
            level="tertiary"
          >
            {year}
          </Title>

          <div className="event-card__stats">
            <Paragraph
              colorScheme={statusColorScheme}
              isBold={isBold}
              isItalic={isItalic}
              weight={fontWeight}
            >
              {statusText}
            </Paragraph>
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
