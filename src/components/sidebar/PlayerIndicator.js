import React, { Component } from 'react';

class PlayerIndicator extends Component {
  renderPlayerBox(playerObj) {
    const { boxStyle, selectedBoxStyle } = styles;
    var finalStyle = {...boxStyle};
    if (playerObj.isCurrent) {
      finalStyle = {...finalStyle, ...selectedBoxStyle}
    }

    return (
      <div className="col">
        <div style={finalStyle}>
          <span className="align-middle">{playerObj.player}</span>
        </div>
      </div>
    );
  }

  render() {
    const { totalPlayers, currentPlayer } = this.props;
    const { titleStyle } = styles;

    var players = [];
    for (var i = 1; i <= totalPlayers; i++) {
      players.push({ player: i, isCurrent: i === currentPlayer});
    }
    console.log('players: ', players);

    return (
      <div>
        <div className="row p-2">
          <div className="col">
            <h3 style={titleStyle}>Current Player: </h3>
          </div>
        </div>
        <div className="row">
          {players.map(player => this.renderPlayerBox(player))}
        </div>
      </div>
    );
  }
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
    paddingTop: 0,

    // backgroundColor: 'green'
    fontSize: '1.2rem'
  },
  selectedBoxStyle: {
    // borderColor: 'green',
    // color: 'green',
    backgroundColor: 'lightgreen'
  }
}

export default PlayerIndicator;
