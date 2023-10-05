import React from 'react';
import PropTypes from 'prop-types';
import "./volumeBar.scss";

const VolumeBar = ({soundNumber}) => {
  //Logic to check the volume bar should be constructed fully or by half
    let isFull = soundNumber%2 === 0;
    
  return (
    <div className={isFull? "fullBar" : "halfBar"}></div>
  )
}

VolumeBar.propTypes = {
    soundNumber: PropTypes.number
}

export default VolumeBar