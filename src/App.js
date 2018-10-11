import React, { Component } from 'react';
import Hexagon from './components/utils';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('here');
  }

  render() {
    return (
      <div className="App">
        <Hexagon />
      </div>
    );
  }
}

export default App;
