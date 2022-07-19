import React from 'react';
import PropTypes from 'prop-types';

const MyProfile = (props) => {
  const { missions, rockets } = props;
  return (
    <div className="profile">
      <div className="profile-column">
        <h2>My Missions</h2>
        <ul id="missions-list">
          {missions.map((mission) => (
            <li key={mission.mission_id}>{mission.mission_name}</li>
          ))}
        </ul>
      </div>
      <div className="profile-column">
        <h2>My Rockets</h2>
        <ul id="rockets-list">
          {rockets.map((rocket) => (
            <li key={rocket.id}>{rocket.rocket_name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

MyProfile.propTypes = {
  missions: PropTypes.string.isRequired,
  rockets: PropTypes.string.isRequired,
};

export default MyProfile;
