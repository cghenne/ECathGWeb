// EcgLine.js
'use strict';

let React = require('react');
import {VictoryLine} from 'victory';

let EcgLine = React.createClass({
  propTypes: {
    ecgValues: React.PropTypes.array,
  },
  getStyles() {
    return {
      stroke: 'blue',
      strokeWidth: 3
    };
  },
  getEcg() {
    let ecg = [];

    for (let i = 0; i < this.props.ecgValues.length; i++) {
      ecg.push({x: i, y: -this.props.ecgValues[i]});
    }

    return ecg;
  },
  render() {
    return (
      <VictoryLine
        style={{data: this.getStyle}}
        data={this.getEcg()}
        width={window.innerWidth}
        height={window.innerHeight}
        interpolation='basis' />
    );
  },
});

module.exports = EcgLine;
