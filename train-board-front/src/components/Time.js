import React, { Component } from "react";

class Time extends Component {
  constructor(props) {
    super(props);
    let now = new Date();
    const offset = parseInt(this.props.timeZone, 10) || 0;
    now.setHours(now.getHours() + offset);
    this.state = {
      time: now.toLocaleTimeString("en-US"),
      time24h: now.toLocaleTimeString("en-GB")
    };
  }

  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tick() {
    let now2 = new Date();
    const offset2 = parseInt(this.props.timeZone, 10) || 0;
    now2.setHours(now2.getHours() + offset2);
    this.setState({
      time: now2.toLocaleTimeString("en-US"),
      time24h: now2.toLocaleTimeString("en-GB")
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
