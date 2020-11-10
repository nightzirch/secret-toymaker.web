import classnames from "classnames";
import t from "prop-types";
import { ReactSVG } from "react-svg";
import React, { useGlobal } from "reactn";
import { BADGES, ROLES } from "../../utils/constants";

const ProfileBadge = (props) => {
  const [user] = useGlobal("user");
  const { roles } = user || {}; // TODO: Use this instead of admin
  const badge = BADGES[ROLES.ADMIN];

  return (
    <div
      className={classnames("profile-badge", `profile-badge--${ROLES.ADMIN}`)}
    >
      {/* Use this.global.user.roles instead of ROLES.ADMIN */}
      <ReactSVG
        className="profile-badge__svg"
        src={badge}
        alt="Donor"
        title="Donor"
      />
    </div>
  );
};

ProfileBadge.propTypes = {
  type: t.func,
};

export default ProfileBadge;
