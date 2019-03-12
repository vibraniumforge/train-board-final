import React, { Component } from "react";

import { nameHelper } from "../helpers/nameHelper";
import { remarksHelper } from "../helpers/remarksHelper";
import { timeHelper } from "../helpers/timeHelper";

class Board extends Component {
  render() {
    const trainsInfo =
      this.props.amtrakTrains &&
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
              {train.remarks_boarding}
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

export default Board;
