import React, { Component } from 'react';

const hex = (side = 10, stretch = 1, offsetX = 25, offsetY = 25) => {
  const height = Math.sqrt((side ** 2) + ((2 * side) ** 2));

  return {
    nw: [offsetX + (side / 2.0), offsetY],
    ne: [offsetX + (side * 1.5), offsetY],
    e: [offsetX + (side * 2), offsetY + ((height / 2.0) * stretch)],
    se: [offsetX + (side * 1.5), offsetY + (height * stretch)],
    sw: [offsetX + (side / 2.0), offsetY + (height * stretch)],
    w: [offsetX, offsetY + ((height / 2.0) * stretch)],
  };
};

const hi = () => {
  console.log('hi');
};

class Hexagon extends Component {
  constructor(props) {
    super(props);
    console.log('Hexagon', props);
  }

  render() {
    const myHex = hex(5, 0.8);
    console.log(myHex);
    return (
      <div>
        <svg width="100%" height="800px" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1">
          <polygon
            onClick={hi}
            style={{ fill: 'yellow', stroke: 'red', strokeWidth: '.25px' }}
            points={`${myHex.nw[0]},${myHex.nw[1]} ${myHex.ne[0]},${myHex.ne[1]} ${myHex.e[0]},${myHex.e[1]} ${myHex.se[0]},${myHex.se[1]} ${myHex.sw[0]},${myHex.sw[1]} ${myHex.w[0]},${myHex.w[1]} ${myHex.nw[0]},${myHex.nw[1]}`}
          />
        </svg>
      </div>);
  }
}

export default Hexagon;
