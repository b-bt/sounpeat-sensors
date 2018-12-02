import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { CardGroup } from 'reactstrap';

import ControlSideBar from './components/ControlSideBar';
import SensorsCollection from './components/SensorsCollection';

class App extends Component {
  render() {
    const { fillHeight } = styles;

    return (
      <div className="App">
        <div className="container-fluid" style={fillHeight}>
          <div className="row" style={fillHeight}>
            <ControlSideBar />
            <SensorsCollection />
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
