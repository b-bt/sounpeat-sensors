import React, { Component } from 'react';

const RoundIndicator = ({ currentRound = 0 }) => {
  const { titleStyle, boxStyle } = styles;

  return (
    <div className="row p-2">
      <div className="col-10">
        <h3 style={titleStyle}>Current Round: </h3>
      </div>
      <div className="col-2">
        <div style={boxStyle}>
          <span className="align-middle">{currentRound}</span>
        </div>
      </div>
    </div>
  );
}

const styles = {
  titleStyle: {
    textAlign: 'left'
  },
  boxStyle: {
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 1,
    height: '100%',
    paddingTop: 4,
    // backgroundColor: 'green'
    fontSize: '1.2rem'
  }
}

export default RoundIndicator;
