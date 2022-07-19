import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { joinMission, leaveMission } from '../redux/missions/missions';

const JoinMission = (props) => {
  const { reserved, id } = props;
  const dispatch = useDispatch();
  const handleJoin = () => {
    dispatch(joinMission(id));
  };

  const handleLeave = () => {
    dispatch(leaveMission(id));
  };

  if (reserved) {
    return (
      <button type="button" className="leave" onClick={handleLeave}>Leave Mission</button>
    );
  }
  return (
    <button type="button" className="join" onClick={handleJoin}>Join Mission</button>
  );
};

JoinMission.propTypes = {
  reserved: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
};

export default JoinMission;
