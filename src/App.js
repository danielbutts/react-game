import React, { Component } from 'react';

import './App.css';

const hex = (side = 10, stretch = 1, index = 0, offsetX = 25, offsetY = 25) => {
  const height = Math.sqrt((side ** 2) + ((2 * side) ** 2));

  const points = {
    nw: [offsetX + (side / 2.0) + (index * side * 2), offsetY],
    ne: [offsetX + (side * 1.5) + (index * side * 2), offsetY],
    e: [offsetX + (side * 2) + (index * side * 2), offsetY + ((height / 2.0) * stretch)],
    se: [offsetX + (side * 1.5) + (index * side * 2), offsetY + (height * stretch)],
    sw: [offsetX + (side / 2.0) + (index * side * 2), offsetY + (height * stretch)],
    w: [offsetX + (index * side * 2), offsetY + ((height / 2.0) * stretch)],
  };

  return (
    <polygon
      style={{ fill: '#B9B9B9', stroke: 'black', strokeWidth: '.25px' }}
      points={`${points.nw[0]},${points.nw[1]} ${points.ne[0]},${points.ne[1]} ${points.e[0]},${points.e[1]} ${points.se[0]},${points.se[1]} ${points.sw[0]},${points.sw[1]} ${points.w[0]},${points.w[1]} ${points.nw[0]},${points.nw[1]}`}
    />
  );
};

const getHexes = (num = 1) => {
  const hexes = [];
  for (let i = 0; i < num; i = i + 1) {
    const thisHex = hex(5, 0.8, i);
    hexes.push(thisHex);
  }
  return hexes;
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hexes: getHexes(5),
    }
  }
  
  render() {
    return (
      <div className="App">
        <svg width="100%" height="800px" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1">
          {this.state.hexes}
        </svg>
      </div>
    );
  }
}

export default App;
