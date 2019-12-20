import Camera from "images/icons/camera.svg";
import Person from "images/icons/person.svg";
import t from "prop-types";
import ReactSVG from "react-svg";
import React, { useGlobal } from "reactn";
import ProfileBadge from "./components/ProfileBadge";
import "./ProfilePicture.scss";

const ProfilePicture = props => {
  const { onClick } = props;
  const [authUser] = useGlobal("authUser");
  const { photoURL } = authUser || {};

  const renderBadge = () => (
    <div className="profile-picture__badge">
      <ProfileBadge />
    </div>
  );

  return (
    <div className="profile-picture-wrapper">
      <div className="profile-picture">
        {!!onClick && (
          <div className="profile-picture__overlay">
            <ReactSVG
              className="profile-picture__camera"
              src={Camera}
              alt="Camera"
              title="Camera"
            />
          </div>
        )}

        {!!photoURL && (
          <div className="profile-picture__image">
            <img src={photoURL} alt="Profile" title="Profile" />
          </div>
        )}

        <div className="profile-picture__background">
          <ReactSVG
            className="profile-picture__person"
            src={Person}
            alt="Person"
            title="Person"
          />
        </div>
      </div>
    </div>
  );
};

ProfilePicture.propTypes = {
  onClick: t.func
};

export default ProfilePicture;
