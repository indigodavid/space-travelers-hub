import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { cancelRocket } from '../redux/rockets/RocketsSlice';
import '../styles/MyProfile.scss';

const MyProfile = () => {
  const missions = useSelector((state) => state.missions)
    .filter((mission) => mission.reserved);
  const rockets = useSelector((state) => state.rockets.filter((el) => el.rocketReserved === true));
  const dispatch = useDispatch();

  const cancelHandler = (e) => {
    const data = e.target.id;
    dispatch(cancelRocket(data));
  };

  if (!rockets.length) {
    return (
      <section className="tableContainer">
        <div className="missions">
          <h1>My Missions</h1>
          <ul className="itemsList">
            <li>There are no missions joined.</li>
          </ul>
        </div>
        <div className="rockets">
          <h1>My Rockets</h1>
          <ul className="itemsList">
            <li>There are no rockets reserved.</li>
          </ul>
        </div>
      </section>
    );
  }

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
        {rockets && rockets.map((rocket) => (
            <div className="listBox" key={rocket.rocketId}>
              <h3 className="listName">
                {rocket.rocketName}
              </h3>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MyProfile;
