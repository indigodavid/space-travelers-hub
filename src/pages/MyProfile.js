import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/MyProfile.scss';

const MyProfile = () => {
  const missions = useSelector((state) => state.missions)
    .filter((mission) => mission.reserved);
  const rockets = useSelector((state) => state.rockets);
  // filter missions and rockets accordingly
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
            <li key={rocket.rocketId}>{rocket.rocketName}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MyProfile;
