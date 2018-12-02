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
      isOpen: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  startGame() {
    this.toggle()
  }

  render() {
    return (
      <Modal centered isOpen={this.state.isOpen} toggle={this.toggle}>
        <ModalHeader>
          Start new game
        </ModalHeader>
        <ModalBody>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Number of Players</InputGroupText>
            </InputGroupAddon>
            <Input />
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
