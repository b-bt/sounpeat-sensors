// const WebSocket = require('ws');

const BUTTON_ACTIVATED_EVENT = "ButtonSensorWasActivatedEvent"
const BUTTON_DISABLED_EVENT = "ButtonSensorWasDisabledEvent"
const CAPACITIVE_ACTIVATED_EVENT = "CapacitiveSensorActivatedEvent"
const CAPACITIVE_DISABLED_EVENT = "CapacitiveSensorDisabledEvent"
const USONIC_CHANGE_EVENT = "USonicSensorChangeEvent"
const RESET_EVENT = "ResetEvent"

class SocketHandler {

  constructor(handleButtonWasActivated, handleButtonWasDisabled, handleCapacitiveWasActivated, handleCapacitiveWasDisabled, handleUSonicDistanceChanged) {
    this.handleButtonWasActivated = handleButtonWasActivated
    this.handleButtonWasDisabled = handleButtonWasDisabled
    this.handleCapacitiveWasActivated = handleCapacitiveWasActivated
    this.handleCapacitiveWasDisabled = handleCapacitiveWasDisabled
    this.handleUSonicDistanceChanged = handleUSonicDistanceChanged

    this.ws = new WebSocket('ws://10.0.81.72:3000');

    this.ws.onopen = function () {
      this.sendResetMessage()
    }.bind(this);

    this.ws.onmessage = function (event) {
      let message = JSON.parse(event.data)
      this.handleIncomingMessages(message)
    }.bind(this)
  }

  sendMessage(ws, message) {
    let data = JSON.stringify(message)
    this.ws.send(data)
  }

 handleIncomingMessages(message) {
    if (message.event === BUTTON_ACTIVATED_EVENT)
      this.handleButtonWasActivated(message.id)
    else if (message.event === BUTTON_DISABLED_EVENT)
      this.handleButtonWasDisabled(message.id)
    else if (message.event === CAPACITIVE_ACTIVATED_EVENT)
      this.handleCapacitiveWasActivated()
    else if (message.event === CAPACITIVE_DISABLED_EVENT)
      this.handleCapacitiveWasDisabled()
    else if (message.event === USONIC_CHANGE_EVENT)
      this.handleUSonicDistanceChanged(message.distance)
  }

  sendResetMessage() {
    let message = {
      event: RESET_EVENT
    }

    this.sendMessage(this.ws, message)
  }
}

export default SocketHandler;