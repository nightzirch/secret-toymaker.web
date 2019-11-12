import Link from "components/Link";
import settings from "config/settings";
import React from "reactn";

const DonateButton = props => (
  <Link url={settings.donationUrl} title="Donate" />
);

export default DonateButton;
