import {
  DescriptionList,
  DescriptionListItem
} from "components/DescriptionList";
import t from "prop-types";
import React, { useEffect, useGlobal, useState } from "reactn";
import { statData } from "utils/stats";
import "./Stats.scss";

const Stats = props => {
  const { year } = props;
  const [stats] = useGlobal("stats");
  const [yearlyStats, setYearlyStats] = useState(null);

  useEffect(() => {
    if (stats && year) {
      setYearlyStats(stats[year]);
    }
  }, [stats, year]);

  const renderStats = () => {
    if (!yearlyStats) return null;

    const statsToShow = Object.keys(yearlyStats)
      .filter(key => Object.keys(statData).includes(key))
      .filter(key => yearlyStats[key])
      .map(key => {
        const { icon, render, title: term } = statData[key];
        const description = render
          ? render(yearlyStats[key])
          : yearlyStats[key];

        return {
          term,
          description,
          icon
        };
      });

    return (
      <DescriptionList>
        {statsToShow.map(stat => (
          <DescriptionListItem
            term={stat.term}
            description={stat.description}
            icon={stat.icon}
            key={stat.term}
          />
        ))}
      </DescriptionList>
    );
  };

  return <div className="stats">{renderStats()}</div>;
};

Stats.propTypes = {
  year: t.string
};

export default Stats;
