import React, { Component } from 'react';
import { Card, Button } from 'reactstrap';

import RoundIndicator from './sidebar/RoundIndicator';
import PlayerIndicator from './sidebar/PlayerIndicator';
import NewGameModal from './sidebar/NewGameModal';

class ControlSideBar extends Component {
  state = {
    startModal: false
  }

  toggleModal() {
    this.setState({
      startModal: !this.state.startModal
    });
  }

  renderGameInfo() {
    const { gameState, resetGame } = this.props;
    const { totalPlayers, currentPlayer, currentRound } = gameState;
    
    return (
      <div>
        <RoundIndicator currentRound={currentRound} />
        <PlayerIndicator
          totalPlayers={totalPlayers}
          currentPlayer={currentPlayer}
        />
        <div className="row mt-4">
          <div className="col">
            <Button color="danger" onClick={resetGame}>End game</Button>
          </div>
        </div>
      </div>
    );
  }

  render() {
    const { gameState, startGame } = this.props;
    const { started } = gameState;

    const { containerStyle } = styles;

    return (
      <div className="col-5 p-4">
        <div style={containerStyle}>
          <h1>Soundpeat</h1>
          { !started &&
            <Button
              color="success"
              onClick={this.toggleModal.bind(this)}
            >
              Start Game
            </Button>
          }
          { started &&
            this.renderGameInfo()
          }
        </div>
        <NewGameModal
          isOpen={this.state.startModal}
          toggle={this.toggleModal.bind(this)}
          startGame={startGame}
        />
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
