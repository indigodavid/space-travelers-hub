import React from 'react';
import Missions from '../components/Missions';
import '../styles/MissionsPage.scss';

const MissionsPage = () => (
  <div className="missions">
    <header>
      <h2>Missions</h2>
      <h2>Descriptions</h2>
      <h2>Status</h2>
    </header>
    <Missions />
  </div>
);

export default MissionsPage;
