import React from 'react';
import { useSelector } from 'react-redux';

const MissionsPage = () => {
  const missions = useSelector((state) => state.missions);
  return (
    <div className="missions">
      <header>
        <h2>Missions</h2>
        <h2>Descriptions</h2>
        <h2>Status</h2>
      </header>
      <ul className="missionsData">
        {missions.map((mission) => (
          <li key={mission.mission_id}>
            <div className="missionName">{mission.mission_name}</div>
            <div className="description">{mission.description}</div>
            <div className="status">
              <button type="button" className="membership">Not a Member</button>
              <button type="button" className="join">Join Mission</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MissionsPage;
