import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div>
        <p>
          Select an Amtrak Station - This board is designed to track arrivals
          and departures from 10 of the top Amtrak stations in the U.S.A. Use
          the dropdown to select a station.
        </p>
        <p>
          Search for an Amtrak Station - Search for a station. You can choose to
          view its board from there.
        </p>
        <p>
          Create a new Train - Create your own train. A form appears where you
          can enter information to save.
        </p>
        <p>View My Trains - Click here to view your existing trains.</p>
      </div>
    );
  }
}

export default About;
