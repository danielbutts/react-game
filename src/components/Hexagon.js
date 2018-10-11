const React = require('react');
const propTypes = require('prop-types');

const { Component } = React;


class Hexagon extends Component {
  constructor(props) {
    super(props);
    console.log('Hexagon', props);
  }

  render() {
    const {
      // width,
      // height,
      viewWidth,
      viewHeight,
      // fill,
      stroke,
      strokeWidth,
    } = this.props;

    const nw = [52, 16.8615612366939];
    const ne = [148, 16.8615612366939];
    const e = [196, 100];
    const se = [148, 183.138438763306];
    const sw = [52, 183.138438763306];
    const w = [4, 100];

    return (
      <div>
        <svg width="100%" height="100%" viewBox={`0 0 ${viewWidth} ${viewHeight}`} xmlns="http://www.w3.org/2000/svg" version="1.1">
          {/* <polygon
            style={{ fill, stroke, strokeWidth }}
            points={`${nw[0]},${nw[1]} 
            ${ne[0]},${ne[1]} ${e[0]},${e[1]} ${se[0]},${se[1]} ${sw[0]},${sw[1]} ${w[0]},${w[1]} ${nw[0]},${nw[1]}`}
          /> */}
          <polygon style={{ fill: 'red', stroke, strokeWidth }} points="148,183.138438763306 52,183.138438763306 4,100 52,16.8615612366939 148,16.8615612366939 196,100 148,183.138438763306" />
          <polygon style={{ fill: 'blue', stroke, strokeWidth }} points="148,183.138438763306 52,183.138438763306 4,100 52,16.8615612366939 148,16.8615612366939 196,100 148,183.138438763306" />
        </svg>
      </div>);
  }
}

Hexagon.propTypes = {
  width: propTypes.string,
  height: propTypes.string,
  viewWidth: propTypes.string,
  viewHeight: propTypes.string,
  fill: propTypes.string,
  stroke: propTypes.string,
  strokeWidth: propTypes.string,
};

Hexagon.defaultProps = {
  width: '200px',
  height: '200px',
  viewWidth: '1000',
  viewHeight: '1000',
  fill: 'yellow',
  stroke: '#000000',
  strokeWidth: '2.5px',
};

export default Hexagon;
