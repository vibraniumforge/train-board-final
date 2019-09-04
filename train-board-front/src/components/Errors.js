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

  componentDidUpdate(prevProps) {
    // console.log("cDU fires in Errors.js");
    // console.log("this.props.trainErrors=", this.props.trainErrors);
    // console.log("prevProps.trainErrors=", prevProps.trainErrors);
    if (
      this.props.trainErrors &&
      this.props.trainErrors.length !== prevProps.trainErrors.length
    ) {
      // console.log("logic in Errors.js cDU fires");
      this.setState({
        destination: this.props.trainErrors.destination,
        newtime: this.props.trainErrors.newtime,
        newtime24: this.props.trainErrors.newtime24,
        origin: this.props.trainErrors.origin,
        remarks_boarding: this.props.trainErrors.remarks_boarding,
        scheduled: this.props.trainErrors.scheduled,
        scheduled24: this.props.trainErrors.scheduled24,
        service: this.props.trainErrors.service,
        trainno: this.props.trainErrors.trainno
      });
    }
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

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    // console.log("this.props.trainErrors=", this.props.trainErrors);
    // const errors =
    // this.props.trainErrors &&
    //   this.props.trainErrors.map((error, index) => {
    //     return this.props.trainErrors ? (
    //       <React.Fragment>
    //         <ul key={index}>
    //           <li>{error.trainno}</li>
    //           <li>{error.service}</li>
    //           <li>{error.destination}</li>
    //           <li>{error.scheduled}</li>
    //           <li>{error.scheduled24}</li>
    //           <li>{error.newtime}</li>
    //           <li>{error.newtime24}</li>
    //           <li>{error.origin}</li>
    //           <li>{error.remarks_boarding}</li>
    //         </ul>
    //         <br />
    //       </React.Fragment>
    //     ) : null;
    //   });
    return (
      <React.Fragment>
        <form id="new-train" className="center">
          <h4>Errors</h4>
          {/* <div id="response">
            <ul>{errors}</ul>{" "}
          </div> */}
          <div>
            <input
              className="red"
              type="text"
              id="train-destination"
              name="destination"
              placeholder="Destination"
              value={this.state.destination}
              onChange={this.handleChange}
              disabled
            />
            <input
              type="text"
              className="red"
              id="new-time"
              name="newtime"
              placeholder="New Time - if late. Format HHMM"
              value={this.state.newtime}
              onChange={this.handleChange}
            />
            <input
              type="text"
              className="red"
              id="new-time-24"
              name="newtime24"
              placeholder="New Time - if late. Format HHMM with 24 h"
              value={this.state.newtime24}
              onChange={this.handleChange}
            />
            <br />
            <input
              type="text"
              className="red"
              id="train-origin"
              name="origin"
              placeholder="Train Origin"
              value={this.state.origin}
              onChange={this.handleChange}
            />
            <input
              type="text"
              className="red"
              id="train-remarks"
              name="remarks_boarding"
              placeholder="Remarks"
              value={this.state.remarks_boarding}
              onChange={this.handleChange}
            />
            <input
              type="text"
              className="red"
              id="train-scheduled-arrival"
              name="scheduled"
              placeholder="Scheduled Arrival"
              value={this.state.scheduled}
              onChange={this.handleChange}
            />
            <br />
            <input
              type="text"
              className="red"
              id="train-scheduled-arrival"
              name="scheduled24"
              placeholder="Scheduled Arrival 24h"
              value={this.state.scheduled24}
              onChange={this.handleChange}
            />
            <input
              type="text"
              className="red"
              id="train-service"
              name="service"
              placeholder="Service Name"
              value={this.state.service}
              onChange={this.handleChange}
            />
            <input
              type="text"
              className="red"
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
