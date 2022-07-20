import React from 'react';
import PropTypes from 'prop-types';

const MissionBadge = (props) => {
  const { reserved } = props;
  if (reserved) {
    return (
      <span className="membership active">Active Member</span>
    );
  }
  return (
    <span className="membership">Not a Member</span>
  );
};

MissionBadge.propTypes = {
  reserved: PropTypes.bool.isRequired,
};

export default MissionBadge;
