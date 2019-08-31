import React, { Component } from "react";

import { nameHelper } from "../helpers/nameHelper";
import { remarksHelper } from "../helpers/remarksHelper";
import { timeHelper } from "../helpers/timeHelper";
// import Solari from "./Solari.js";
import Loading from "./Loading.js";

import Time from "./Time";

class AmtrakSelectBoard extends Component {
  // shouldComponentUpdate(nextProps, nextState) {
  //   if (this.props.amtrakTrains === nextProps.amtrakTrains) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }

  render() {
    const trainsInfo =
      this.props.amtrakTrains &&
      this.props.amtrakTrains.length !== 0 &&
      this.props.amtrakTrains.map((train, index) => {
        return train.trainno.trim() ? (
          <tr key={index}>
            <td>{train.trainno}</td>
            <td>{nameHelper(train.service)}</td>
            <td>{train.destination}</td>
            <td>{timeHelper(train.scheduled)}</td>
            <td>{timeHelper(train.scheduled24)}</td>
            <td>{timeHelper(train.newtime)}</td>
            <td>{timeHelper(train.newtime24)}</td>
            <td>{train.origin}</td>
            <td className={remarksHelper(train.remarks_boarding)}>
              {nameHelper(train.remarks_boarding)}
            </td>
          </tr>
        ) : null;
      });
    return (
      <React.Fragment>
        {trainsInfo && trainsInfo !== [] && trainsInfo[0] !== null ? (
          <table>
            <thead>
              <Time
                stationName={this.props.stationName}
                timeZone={this.props.timeZone}
              />
              <tr>
                <th>Train Number</th>
                <th>Train Name</th>
                <th>Destination</th>
                <th>Scheduled Time</th>
                <th>Scheduled - 24h</th>
                <th>New Time</th>
                <th>New Time - 24h</th>
                <th>Origin</th>
                <th>Remarks</th>
              </tr>
            </thead>
            <tbody id="train-board">{trainsInfo}</tbody>
          </table>
        ) : (
          // <table>
          //   <thead>
          //     <Time
          //       stationName={this.props.stationName}
          //       timeZone={this.props.timeZone}
          //     />
          //     <tr>
          //       <th>Train Number</th>
          //       <th>Train Name</th>
          //       <th>Destination</th>
          //       <th>Scheduled Time</th>
          //       <th>Scheduled - 24h</th>
          //       <th>New Time</th>
          //       <th>New Time - 24h</th>
          //       <th>Origin</th>
          //       <th>Remarks</th>
          //     </tr>
          //   </thead>
          //   <tbody id="train-board">
          //     <tr>
          //       <th colSpan="2">{null}</th>
          //       <th />
          //       <th colSpan="3">No Trains Found</th>
          //       <th />
          //       <th colSpan="2">{null}</th>
          //     </tr>
          //   </tbody>
          // </table>
          <Loading />
        )}
      </React.Fragment>
    );
  }
}

export default AmtrakSelectBoard;
