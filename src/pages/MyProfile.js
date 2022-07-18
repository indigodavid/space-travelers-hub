import React from 'react';

const MyProfile = () => (
  <div className="profile">
    <div className="profile-column">
      <h2>My Missions</h2>
      <ul id="missions-list" />
    </div>
    <div className="profile-column">
      <h2>My Rockets</h2>
      <ul id="rockets-list" />
    </div>
  </div>
);

export default MyProfile;