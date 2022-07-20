import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/Profile.scss';

const MyProfile = () => {
  const missions = useSelector((state) => state.missions)
    .filter((mission) => mission.reserved);
  const rockets = useSelector((state) => state.rockets.filter((el) => el.rocketReserved === true));

  // filter missions and rockets accordingly

  return (
    <section className="tableContainer">
      <div className="missionsProfile">
        <h1>My Missions22</h1>
        <div className="itemsList">
          {!missions.length ? (<li>There are no missions joined.</li>) : null }
          {missions && missions.map((mission) => (
            <div className="listBox" key={mission.mission_id}>
              <h2 className="listName">
                {mission.mission_name}
              </h2>
            </div>
          ))}
        </div>
      </div>
      <div className="rockets">
        <h1>My Rockets22</h1>
        <div className="itemsList">
          {!rockets.length ? (<li>There are no rockets reserved.</li>) : null }
          {rockets && rockets.map((rocket) => (
            <div className="listBox" key={rocket.rocketId}>
              <h2 className="listName">
                {rocket.rocketName}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyProfile;
