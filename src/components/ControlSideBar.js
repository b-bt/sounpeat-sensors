import React, { Component } from 'react';
import { Card, Button } from 'reactstrap';

import RoundIndicator from './sidebar/RoundIndicator';
import PlayerIndicator from './sidebar/PlayerIndicator';
import NewGameModal from './sidebar/NewGameModal';

class ControlSideBar extends Component {
  render() {
    const { gameState } = this.props;
    const { totalPlayers, currentPlayer } = gameState;

    const { containerStyle } = styles;

    return (
      <div className="col-5 p-4">
        <div style={containerStyle}>
          <h1>Soundpeat</h1>
          <RoundIndicator currentRound={2} />
          <PlayerIndicator
            totalPlayers={totalPlayers}
            currentPlayer={currentPlayer}
          />
          <div className="row mt-4">
            <div className="col">
              <Button color="danger">End game</Button>
            </div>
          </div>
        </div>
        <NewGameModal />
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
