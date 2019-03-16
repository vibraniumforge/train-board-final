import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { createTrain } from "../actions/userTrainActions";
import Errors from "../components/Errors";
import Sample from "../components/Sample";
import EditTrainForm from "../components/EditTrainForm";

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

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const newTrain = this.state;
    // this.props.createTrain(newTrain).then(res => {
    //   if (this.props.trainErrors !== []) {
    //     this.props.history.push("/view_user_trains");
    //     this.clearForm();
    //   }
    // });
    this.props.createTrain(newTrain);
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
    return (
      <React.Fragment>
        <form id="new-train" className="center">
          <h4>Add a new train</h4>
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
          <button type="button" id="submit" onClick={e => this.handleSubmit(e)}>
            Submit
          </button>
          <button type="button" id="clear" onClick={this.clearForm}>
            Clear
          </button>
        </form>
        <EditTrainForm trainToUpdate={this.props.trainToUpdate} />
        <Errors trainErrors={this.props.trainErrors} />

        <Sample />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  trainToUpdate: state.userTrains.trainToUpdate,
  trainErrors: state.userTrains.trainErrors
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      createTrain
    },
    dispatch
  );

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TrainForm)
);

// old redux fx

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(
//     {
//       createTrain
//     },
//     dispatch
//   );

// export default withRouter(
//   connect(
//     null,
//     mapDispatchToProps
//   )(TrainForm)
// );
