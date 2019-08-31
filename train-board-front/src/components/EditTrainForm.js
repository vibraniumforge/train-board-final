import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { updateTrain } from "../actions/userTrainActions";

class TrainForm extends Component {
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
    // console.log("cDU fires in EditTrainForm.js");
    // console.log("this.props.trainToUpdate=", this.props.trainToUpdate);
    // console.log("prevProps.trainToUpdate=", prevProps.trainToUpdate);
    if (
      this.props.trainToUpdate &&
      this.props.trainToUpdate !== prevProps.trainToUpdate
      // this.props.trainToUpdate.length !== prevProps.trainToUpdate.length
    ) {
      console.log("logic in cDU fires");
      this.setState({
        destination: this.props.trainToUpdate.destination,
        newtime: this.props.trainToUpdate.newtime,
        newtime24: this.props.trainToUpdate.newtime24,
        origin: this.props.trainToUpdate.origin,
        remarks_boarding: this.props.trainToUpdate.remarks_boarding,
        scheduled: this.props.trainToUpdate.scheduled,
        scheduled24: this.props.trainToUpdate.scheduled24,
        service: this.props.trainToUpdate.service,
        trainno: this.props.trainToUpdate.trainno
      });
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    console.log("trainform onSubmit fires");
    e.preventDefault();
    const updatedTrain = this.state;
    this.props.updateTrain(this.props.trainToUpdate.id, updatedTrain);
    this.props.history.push("/view_user_trains");
    this.clearForm();
  };

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
    console.log("this.props.trainToUpdate=", this.props.trainToUpdate);
    return (
      <React.Fragment>
        <form id="new-train" className="center">
          <h4>Edit a train</h4>
          <div>
            <input
              type="text"
              id="train-destination"
              name="destination"
              placeholder="Destination"
              value={this.state.destination}
              onChange={this.handleChange}
            />
            <input
              type="text"
              id="new-time"
              name="newtime"
              placeholder="New Time (if late). Format HHMM"
              value={this.state.newtime}
              onChange={this.handleChange}
            />
            <input
              type="text"
              id="new-time-24"
              name="newtime24"
              placeholder="New Time HHMM 24h (if late)."
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
          <button type="button" id="submit" onClick={this.handleSubmit}>
            Submit
          </button>
          <button type="button" id="clear" onClick={this.clearForm}>
            Clear
          </button>
        </form>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      updateTrain
    },
    dispatch
  );

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(TrainForm)
);
