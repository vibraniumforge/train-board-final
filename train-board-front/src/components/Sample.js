import React, { Component } from "react";

class Sample extends Component {
  render() {
    return (
      <React.Fragment>
        <form id="new-train" className="center">
          <h4>Sample</h4>
          <div>
            <input
              type="text"
              id="train-destination"
              name="destination"
              value="New York"
              disabled
            />
            <input
              type="text"
              id="new-time"
              name="newTime"
              placeholder="New Time - if late. Format HH:MM"
              value="0115 - (only needed if late)"
              disabled
            />
            <input
              type="text"
              id="new-time-24"
              name="newTime24"
              value="1315 - (only needed if late)"
              disabled
            />
            <br />
            <input
              type="text"
              id="train-origin"
              name="origin"
              value="Chicago"
              disabled
            />
            <input
              type="text"
              id="train-remarks"
              name="remarks_boarding"
              value="L 15M for Late by 15 minutes"
              disabled
            />
            <input
              type="text"
              id="train-scheduled-arrival"
              name="scheduled"
              value="1100"
              disabled
            />
            <br />
            <input
              type="text"
              id="train-scheduled-arrival"
              name="scheduled24"
              value="2300"
              disabled
            />
            <input
              type="text"
              id="train-service"
              name="service"
              value="Big City Express"
              disabled
            />
            <input
              type="text"
              id="train-number"
              name="trainno"
              value="50"
              disabled
            />
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default Sample;
