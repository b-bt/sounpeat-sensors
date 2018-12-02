import React, { Component } from 'react';
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input
} from 'reactstrap';

class NewGameModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      totalPlayers: null
    };
  }

  startGame() {
    const { totalPlayers } = this.state;
    const { toggle, startGame } = this.props;

    if (!totalPlayers || isNaN(totalPlayers) || totalPlayers < 1) {
      console.log("Não é um número válido")
    } else {
      toggle();
      startGame(totalPlayers);
    }
  }

  changePlayers(event) {
    const totalPlayers = event.target.value;
    
    this.setState({
      totalPlayers
    })
  }

  render() {
    const { toggle, isOpen } = this.props;

    return (
      <Modal centered isOpen={isOpen} toggle={toggle}>
        <ModalHeader>
          Start new game
        </ModalHeader>
        <ModalBody>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Number of Players</InputGroupText>
            </InputGroupAddon>
            <Input
              value={this.state.totalPlayers}
              onChange={this.changePlayers.bind(this)}
            />
          </InputGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={this.startGame.bind(this)}>Start</Button>
        </ModalFooter>
      </Modal>
    );
  }
}

export default NewGameModal;
