import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { CardGroup } from 'reactstrap';
import SocketHandler from './SocketHandler';

import ControlSideBar from './components/ControlSideBar';
import SensorsCollection from './components/SensorsCollection';

class App extends Component {
  socketHandler = new SocketHandler(this.handleButtonWasActivated.bind(this), this.handleButtonWasDisabled.bind(this), this.handleCapacitiveWasActivated.bind(this), this.handleCapacitiveWasDisabled.bind(this), this.handleUSonicDistanceChanged.bind(this));

  initialSensors = [
    {
      name: "Green Button",
      type: "toggle",
      isEnabled: false
    },
    {
      name: "Red Button",
      type: "toggle",
      isEnabled: false
    },
    {
      name: "Yellow Button",
      type: "toggle",
      isEnabled: false
    },
    {
      name: "Proximity sensor",
      type: "value",
      value: 0
    },
    {
      name: "Capacitive sensor",
      type: "capacitive-toggle",
      isEnabled: false
    }
  ]

  state = {
    gameState: {
      started: false,
      totalPlayers: 6,
      currentPlayer: 3,
      currentRound: 0
    },
    sensors: this.initialSensors,
    sequence: [],
    currentSequence: []
  }

  resetGame() {
    this.setState((prevState) => {
      return {
        gameState: {
          started: false
        },
        sensors: this.initialSensors
      }
    })
  }

  startGame(totalPlayers) {
    this.setState((prevState) => {
      return {
        gameState: {
          started: true,
          totalPlayers,
          currentPlayer: 1,
          currentRound: 1,
        }
      }
    })
  }

  handleButtonWasActivated(button) {
    this.setState((prevState) => {

      let sensors = prevState.sensors
      sensors[button-1].isEnabled = true

      return { sensors }
    })

    this.checkAndAddToSequece({
      id: (button-1),
      value: true
    })
  }

  handleButtonWasDisabled(button) {
    this.setState((prevState) => {

      let sensors = prevState.sensors
      sensors[button-1].isEnabled = false

      return { sensors }
    })

    this.checkAndAddToSequece({
      id: (button-1),
      value: false
    })
  }

  handleCapacitiveWasActivated() {
    this.setState((prevState) => {

      let sensors = prevState.sensors
      sensors[4].isEnabled = true

      return { sensors }
    })

    this.checkAndAddToSequece({
      id: 4,
      value: true
    })
  }

  handleCapacitiveWasDisabled() {
    this.setState((prevState) => {

      let sensors = prevState.sensors
      sensors[4].isEnabled = false

      return { sensors }
    })

    this.checkAndAddToSequece({
      id: 4,
      value: false
    })
  }

  handleUSonicDistanceChanged(distance) {
    this.setState((prevState) => {

      let sensors = prevState.sensors
      sensors[3].value = distance

      return { sensors }
    })

    this.checkAndAddToSequece({
      id: 3,
      distance: distance
    })
  }

  checkAndAddToSequece(action) {

  }

  render() {
    const { fillHeight } = styles;

    return (
      <div className="App">
        <div className="container-fluid" style={fillHeight}>
          <div className="row" style={fillHeight}>
            <ControlSideBar
              gameState={this.state.gameState}
              resetGame={this.resetGame.bind(this)}
              startGame={this.startGame.bind(this)}
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
