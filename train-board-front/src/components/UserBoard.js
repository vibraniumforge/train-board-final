import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { nameHelper } from "../helpers/nameHelper";
import { remarksHelper } from "../helpers/remarksHelper";
import { timeHelper } from "../helpers/timeHelper";
import {
  getTrainById,
  updateTrain,
  deleteTrain
} from "../actions/userTrainActions";

import LikeButton from "./LikeButton";

class UserBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString("en-US"),
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
      time: new Date().toLocaleTimeString("en-US"),
      time24h: new Date().toLocaleTimeString("en-GB")
    });
  }

  onDeleteTrain = e => {
    e.preventDefault();
    this.props.deleteTrain(e.target.dataset.id);
  };

  onUpdateTrain = e => {
    e.preventDefault();
    this.props.getTrainById(e.target.dataset.id);
    this.props.history.push("new_user_train");
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
              <button
                type="button"
                data-id={train.id}
                className="board-button"
                onClick={e => this.onUpdateTrain(e)}
              >
                Update
              </button>
            </td>
            <td>
              <button
                type="button"
                data-id={train.id}
                className="board-button"
                onClick={e => this.onDeleteTrain(e)}
              >
                Delete
              </button>
            </td>
            <td>
              <LikeButton />
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
                <th colSpan="2">{this.state.time}</th>
                <th />
                <th colSpan="3">My Train Board</th>
                <th />
                <th colSpan="2">{this.state.time24h}</th>
              </tr>
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
      deleteTrain,
      getTrainById
    },
    dispatch
  );

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(UserBoard)
);
