import React, { Component } from 'react';

import ToggleSensorBox from './ToggleSensorBox';
import ValueSensorBox from './ValueSensorBox';

class SensorsCollection extends Component {
  renderSensorBox(sensor) {
    switch (sensor.type) {
      case "toggle":
        return (
          <ToggleSensorBox
            sensor={sensor}
          />
        );
      case "capacitive-toggle":
        return (
          <ToggleSensorBox
            sensor={sensor}
            capacitive
          />
        );
      case "value":
        return (
          <ValueSensorBox
            sensor={sensor}
          />
        );
      default:
        return;
    }
  }

  render() {
    const { sensors } = this.props;

    return (
      <div className="col-7">
        <div className="row pb-4">
          {sensors.map(sensor => this.renderSensorBox(sensor))}
        </div>
      </div>
    );
  }
}

export default SensorsCollection;
