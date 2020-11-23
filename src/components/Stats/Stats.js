import {
  DescriptionList,
  DescriptionListItem,
} from "@/components/DescriptionList";
import { getStatsFromEvent, simplifiedStatData, statData } from "@/utils/stats";
import t from "prop-types";
import { useEffect, useState } from "react";

const Stats = (props) => {
  const { isSimplified, event } = props;
  const [yearlyStats, setYearlyStats] = useState(null);
  const selectedStatData = isSimplified ? simplifiedStatData : statData;

  useEffect(() => {
    if (event) {
      setYearlyStats(getStatsFromEvent(event));
    }
  }, [event]);

  const renderStats = () => {
    if (!yearlyStats) return null;

    const statsToShow = Object.keys(yearlyStats)
      .filter((key) => Object.keys(selectedStatData).includes(key))
      .filter((key) => yearlyStats[key])
      .map((key) => {
        const { icon, render, title: term } = selectedStatData[key];
        const description = render
          ? render(yearlyStats[key])
          : yearlyStats[key];

        return {
          term,
          description,
          icon,
          key,
        };
      });

    return (
      <DescriptionList isHorizontal={isSimplified}>
        {statsToShow.map((stat) => (
          <DescriptionListItem
            term={stat.term}
            description={stat.description}
            icon={stat.icon}
            isHorizontal={isSimplified}
            key={stat.key}
          />
        ))}
      </DescriptionList>
    );
  };

  return <div className="stats">{renderStats()}</div>;
};

Stats.propTypes = {
  isSimplified: t.bool,
  event: t.object,
};

export default Stats;
