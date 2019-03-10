import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { nameHelper } from "../helpers/nameHelper";
import { remarksHelper } from "../helpers/remarksHelper";
import { timeHelper } from "../helpers/timeHelper";
import { updateTrain, deleteTrain } from "../actions/userTrainActions";

class UserBoard extends Component {
  onDeleteTrain = e => {
    e.preventDefault();
    console.log("onDeleteTrain in UserBoard fires");
    this.props.deleteTrain(parseInt(e.target.dataset.id, 10));
  };

  onUpdateTrain = e => {
    e.preventDefault();
    console.log("onUpdateTrain in UserBoard fires");
    this.props.updateTrain(parseInt(e.target.dataset.id, 10));
    this.props.history.push("/new_user_train");
  };

  render() {
    const trainsInfo =
      this.props.userTrains &&
      this.props.userTrains.map(train => {
        return train.trainno.trim() ? (
          <tr key={train.id}>
            <td>{train.trainno}</td>
            <td>{nameHelper(train.service)}</td>
            <td>{train.destination}</td>
            <td>{timeHelper(train.scheduled)}</td>
            <td>{timeHelper(train.scheduled24)}</td>
            <td>{timeHelper(train.newtime)}</td>
            <td>{timeHelper(train.newtime24)}</td>
            <td>{train.origin}</td>
            <td className={remarksHelper(train.remarks_boarding)}>
              {train.remarks_boarding}
            </td>
            <td>
              <button type="button" onClick={this.onUpdateTrain}>
                Update
              </button>
            </td>
            <td>
              <button
                type="button"
                data-id={train.id}
                onClick={e => this.onDeleteTrain(e)}
              >
                Delete
              </button>
            </td>
          </tr>
        ) : null;
      });
    return (
      <React.Fragment>
        <div>
          <table>
            <thead>
              <tr>
                <th>Train Number</th>
                <th>Train Name</th>
                <th>Destination</th>
                <th>Scheduled Time</th>
                <th>Scheduled Time - 24h</th>
                <th>New Time</th>
                <th>New Time - 24h</th>
                <th>Origin</th>
                <th>Remarks</th>
                <th colSpan="7" />
              </tr>
            </thead>
            <tbody id="train-board">{trainsInfo}</tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      updateTrain,
      deleteTrain
    },
    dispatch
  );

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(UserBoard)
);
