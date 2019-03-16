import React, { Component } from "react";

class Time extends Component {
  constructor(props) {
    super(props);
    let now = new Date();
    now.setHours(now.getHours() + parseInt(this.props.timeZone, 10));
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
    let now = new Date();
    now.setHours(now.getHours() + parseInt(this.props.timeZone), 10);
    this.setState({
      time: now.toLocaleTimeString("en-US"),
      time24h: now.toLocaleTimeString("en-GB")
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
