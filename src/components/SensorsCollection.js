import React, { Component } from 'react';

import SensorBox from './SensorBox';

class SensorsCollection extends Component {
  render() {
    return (
      <div className="col-7">
        <div className="row pb-4">
          <SensorBox />
          <SensorBox />
          <SensorBox />
          <SensorBox />
          <SensorBox />
          <SensorBox />
        </div>
      </div>
    );
  }
}

export default SensorsCollection;
