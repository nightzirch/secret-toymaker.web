import Alert from "@/components/Alert";
import Section from "@/components/Section";
import AlertLocationTypes from "@/utils/types/AlertLocationTypes";
import t from "prop-types";
import { useEffect, useGlobal, useState } from "reactn";

const Alerts = (props) => {
  const { location, ...rest } = props;
  const [alerts] = useGlobal("alerts");
  const [filteredAlerts, setFilteredAlerts] = useState([]);

  useEffect(() => {
    if (alerts) {
      setFilteredAlerts(
        alerts.filter(
          (a) =>
            a.location === location || a.location === AlertLocationTypes.ALL
        )
      );
    }
  }, [alerts]);

  return filteredAlerts.length > 0 ? (
    <Section className={`alerts-container--${location}`} {...rest}>
      {filteredAlerts.map((alert) => (
        <Alert id={alert.id} type={alert.type} key={alert.id}>
          {alert.message}
        </Alert>
      ))}
    </Section>
  ) : null;
};

Alerts.propTypes = {
  location: t.oneOf(Object.values(AlertLocationTypes)).isRequired,
};

export default Alerts;
