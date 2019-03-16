import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { getAmtrakTrains } from "../actions/amtrakTrainActions";
import AmtrakSelectBoard from "../components/AmtrakSelectBoard";

class StationSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stationCode: "",
      stationName: "",
      showBoard: false,
      timeZone: 0
    };
  }

  onChange = e => {
    this.setState({
      stationCode: e.target.value,
      stationName: e.target.selectedOptions[0].innerText,
      timeZone: e.target.selectedOptions[0].dataset.timezone
    });
  };

  onSubmitAmtrak = e => {
    e.preventDefault();
    if (this.state.stationCode) {
      this.props.getAmtrakTrains(this.state.stationCode);
      this.setState({
        showBoard: true
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        <form>
          <div id="station-select" className="center">
            <h4>Choose a station:</h4> <br />
            <select
              name="stationCode"
              value={this.state.station}
              onChange={this.onChange}
            >
              <option value="" />
              <option value="NYP" data-timezone="3">
                New York Penn Station
              </option>
              <option value="WAS" data-timezone="3">
                Washington Union Station
              </option>
              <option value="PHL" data-timezone="3">
                Philadelphia 30th Street
              </option>
              <option value="BOS" data-timezone="3">
                Boston South Station
              </option>
              <option value="CHI" data-timezone="2">
                Chicago Union Station
              </option>
              <option value="STL" data-timezone="2">
                St. Louis Gateway Transit Center
              </option>
              <option value="LAX" data-timezone="0">
                Los Angeles Union Station{" "}
              </option>
              <option value="SAN" data-timezone="0">
                San Diego Santa Fe Depot
              </option>
              <option value="EMY" data-timezone="0">
                Emeryville (Oakland) CA
              </option>
              <option value="SEA" data-timezone="0">
                Seattle King Street Station
              </option>
            </select>
            <button type="button" id="searchBtn" onClick={this.onSubmitAmtrak}>
              See This Station
            </button>
          </div>
        </form>
        {this.state.showBoard ? (
          <AmtrakSelectBoard
            stationName={this.state.stationName}
            amtrakTrains={this.props.trains}
            timeZone={this.state.timeZone}
          />
        ) : null}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  trains: state.amtrakTrains.amtrakTrains
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getAmtrakTrains
    },
    dispatch
  );

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(StationSelect)
);
