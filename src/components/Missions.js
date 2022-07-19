import React from 'react';
import { useSelector } from 'react-redux';
import JoinMission from './JoinMission';
import MissionBadge from './MissionBadge';

const Missions = () => {
  const missions = useSelector((state) => state.missions);
  return (
    <ul className="missionsData">
      {missions.map((mission) => (
        <li key={mission.mission_id}>
          <div className="missionName">{mission.mission_name}</div>
          <div className="description">{mission.description}</div>
          <div className="status">
            <MissionBadge reserved={mission.reserved} />
            <JoinMission reserved={mission.reserved} id={mission.mission_id} />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Missions;
