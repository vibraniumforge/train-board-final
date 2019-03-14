import React, { Component } from "react";

class Time extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString(),
      time24h: new Date().toLocaleTimeString("en-GB")
    };
  }

  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tick() {
    this.setState({
      time: new Date().toLocaleTimeString(),
      time24h: new Date().toLocaleTimeString("en-GB")
    });
  }

  render() {
    return (
      <React.Fragment>
        <tr>
          <th colSpan="2">{this.state.time}</th>
          <th />
          <th colSpan="3">{this.props.stationName}</th>
          <th />
          <th colSpan="2">{this.state.time24h}</th>
        </tr>
      </React.Fragment>
    );
  }
}

export default Time;
