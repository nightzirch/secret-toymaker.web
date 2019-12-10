import {
  DescriptionList,
  DescriptionListItem
} from "components/DescriptionList";
import t from "prop-types";
import React, { useEffect, useGlobal, useState } from "reactn";
import StatTypes from "utils/types/StatTypes";
import "./Stats.scss";

const statKeysToShow = [StatTypes.PARTICIPANTS];
const statTitles = {
  [StatTypes.PARTICIPANTS]: "Participants"
};

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
      .filter(key => statKeysToShow.includes(key))
      .map(key => ({
        term: statTitles[key],
        description: String(yearlyStats[key])
      }));

    return (
      <DescriptionList>
        {statsToShow.map(stat => (
          <DescriptionListItem
            term={stat.term}
            description={stat.description}
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
