import React, { Component } from 'react';

const StatusLight = ({ isEnabled = false }) => {
  const {
      lightStyle,
      onLightStyle,
      offLightStyle,
      labelStyle
    } = styles;

    var lightIndicatorStyle = { ...lightStyle, ...offLightStyle };
    if (isEnabled) {
      lightIndicatorStyle = {...lightIndicatorStyle, ...onLightStyle};
    }

    return (
      <div>
        <div style={lightIndicatorStyle} />
        <p style={labelStyle}>
          {isEnabled ? 'Enabled' : 'Disabled'}
        </p>
      </div>
    );
}


const styles = {
  lightStyle: {
    height: 15,
    width: 15,
    borderRadius: '50%',
    margin: 'auto',
    marginTop: 10,
    marginRight: 10,

    display: 'inline-block',
    backgroundColor: 'gray'
  },
  onLightStyle: {
    backgroundColor: 'green'
  },
  offLightStyle: {
    backgroundColor: 'red'
  },

  labelStyle: {
    display: 'inline-block'
  }
}

export default StatusLight;
