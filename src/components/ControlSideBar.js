import React, { Component } from 'react';

import { Card } from 'reactstrap';

class ControlSideBar extends Component {
  render() {
    const { containerStyle } = styles;

    return (
      <div className="col-5 p-4">
        <div style={containerStyle}>
          <h1>Soundpeat</h1>
        </div>
      </div>
    );
  }
}

const styles = {
  containerStyle: {
    borderColor: 'black',
    borderWidth: 2,
    borderStyle: 'solid',
    borderRadius: 10,
    // backgroundColor: 'green',

    width: '100%',
    height: '100%',
    padding: 10,
  }
}

export default ControlSideBar;
