import React, { Component } from "react";

class Errors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      destination: "",
      newtime: "",
      newtime24: "",
      origin: "",
      remarks_boarding: "",
      scheduled: "",
      scheduled24: "",
      service: "",
      trainno: ""
    };
  }

  clearForm = () => {
    this.setState({
      destination: "",
      newtime: "",
      newtime24: "",
      origin: "",
      remarks_boarding: "",
      scheduled: "",
      scheduled24: "",
      service: "",
      trainno: ""
    });
  };

  render() {
    console.log("this.props.trainErrors=", this.props.trainErrors);
    const errors =
      this.props.trainErrors &&
      this.props.trainErrors.map((error, index) => {
        return this.props.trainErrors ? (
          <ul key={index}>
            <li>{error.trainno}</li>
            <li>{error.service}</li>
            <li>{error.destination}</li>
            <li>{error.scheduled}</li>
            <li>{error.scheduled24}</li>
            <li>{error.newtime}</li>
            <li>{error.newtime24}</li>
            <li>{error.origin}</li>
            <li>{error.remarks_boarding}</li>
          </ul>
        ) : null;
      });
    return (
      <React.Fragment>
        <form id="new-train" className="center">
          <h4>Errors</h4>
          <div id="response">{errors} </div>
          <div>
            <input
              className="red"
              type="text"
              id="train-destination"
              name="destination"
              placeholder="Destination"
              value={this.props.trainErrors}
              onChange={this.handleChange}
              disabled
            />
            <input
              type="text"
              id="new-time"
              name="newtime"
              placeholder="New Time - if late. Format HHMM"
              value={this.state.newtime}
              onChange={this.handleChange}
            />
            <input
              type="text"
              id="new-time-24"
              name="newtime24"
              placeholder="New Time - if late. Format HHMM with 24 h"
              value={this.state.newtime24}
              onChange={this.handleChange}
            />
            <br />
            <input
              type="text"
              id="train-origin"
              name="origin"
              placeholder="Train Origin"
              value={this.state.origin}
              onChange={this.handleChange}
            />
            <input
              type="text"
              id="train-remarks"
              name="remarks_boarding"
              placeholder="Remarks"
              value={this.state.remarks_boarding}
              onChange={this.handleChange}
            />
            <input
              type="text"
              id="train-scheduled-arrival"
              name="scheduled"
              placeholder="Scheduled Arrival"
              value={this.state.scheduled}
              onChange={this.handleChange}
            />
            <br />
            <input
              type="text"
              id="train-scheduled-arrival"
              name="scheduled24"
              placeholder="Scheduled Arrival 24h"
              value={this.state.scheduled24}
              onChange={this.handleChange}
            />
            <input
              type="text"
              id="train-service"
              name="service"
              placeholder="Service Name"
              value={this.state.service}
              onChange={this.handleChange}
            />
            <input
              type="text"
              id="train-number"
              name="trainno"
              placeholder="Number"
              value={this.state.trainno}
              onChange={this.handleChange}
            />
          </div>
          <br />
        </form>
      </React.Fragment>
    );
  }
}

export default Errors;
