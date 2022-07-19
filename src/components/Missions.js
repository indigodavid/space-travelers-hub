import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions } from '../redux/missions/missions';

const Missions = () => {
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMissions());
  }, []);
  return (
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
  );
};

export default Missions;
