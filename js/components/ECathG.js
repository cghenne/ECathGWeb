// ECathG.js
'use strict';

let React = require('react');
let io = require('socket.io-client/socket.io');

let EcgLine = require('./EcgLine.js');
let styles = getStyles();

let ECathG = React.createClass({
  getDefaultEcg() {
    let defaultEcg = [];
    for (let i = 0; i < 1250; i++) {
      defaultEcg.push(0);
    }

    return defaultEcg;
  },
  getInitialState(){
    return {
      socket: io('http://miaou.local:3000'),
      isSocketConnected: false,
      isDeviceConnected: false,
      ecgValues: this.getDefaultEcg(),
    }
  },
  componentDidMount() {
    this.state.socket.on('connect', () => {
      this.setState({isSocketConnected: true});
      this.state.socket.on('ecgValues', function (data) {
        let newValues = this.state.ecgValues;
        data.map(newValue => {
          newValues.push(newValue);
          newValues.shift();
        });
        this.setState({isDeviceConnected: true, ecgValues: newValues});
      }.bind(this));
    });
  },
  render() {
    return (
      <div style={styles.container}>
        <EcgLine ecgValues={this.state.ecgValues}/>
      </div>
    )
  }
});

function getStyles() {
  return {
    container: {
      width: '100%',
      height: 350,
    },
  };
};

module.exports = ECathG;
