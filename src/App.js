import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { CardGroup } from 'reactstrap';

import ControlSideBar from './components/ControlSideBar';
import SensorsCollection from './components/SensorsCollection';

class App extends Component {
  state = {
    gameState: {
      totalPlayers: 6,
      currentPlayer: 1
    },
    sensors: [
      {
        name: "Green Button",
        type: "toggle",
        isEnabled: true
      },
      {
        name: "Red Button",
        type: "toggle",
        isEnabled: false
      },
      {
        name: "Yellow Button",
        type: "toggle",
        isEnabled: true
      },
      {
        name: "Ultrassonic sensor",
        type: "value",
        value: 2
      },
    ]
  }

  render() {
    const { fillHeight } = styles;

    return (
      <div className="App">
        <div className="container-fluid" style={fillHeight}>
          <div className="row" style={fillHeight}>
            <ControlSideBar
              gameState={this.state.gameState}
            />
            <SensorsCollection
              sensors={this.state.sensors}
            />
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  fillHeight: {
    minHeight: '100%',
    height: '100%'
  }
};

export default App;
