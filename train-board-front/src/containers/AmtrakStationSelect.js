import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { getAmtrakTrains } from "../actions/amtrakTrainActions";
import AmtrakBoard from "../components/AmtrakBoard";

class StationSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      station: ""
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmitAmtrak = e => {
    e.preventDefault();
    const station = this.state.station;
    this.props.getAmtrakTrains(station);
  };

  render() {
    return (
      <React.Fragment>
        <form>
          <div id="station-select" className="center">
            <h4>Choose a station:</h4>{" "}
            <select
              name="station"
              value={this.state.station}
              onChange={this.onChange}
            >
              <option value="" />
              <option value="NYP">New York Penn Station</option>
              <option value="WAS">Washington Union Station</option>
              <option value="PHL">Philadelphia 30th Street</option>
              <option value="BOS">Boston South Station</option>
              <option value="CHI">Chicago Union Station</option>
              <option value="LAX">Los Angeles Union Station </option>
              <option value="SAN">San Diego Santa Fe Depot</option>
              <option value="EMY">Emeryville (Oakland) CA</option>
              <option value="SEA">Seattle King Street Station</option>
              <option value="PDX">Portland Union Station</option>
            </select>
            <button type="button" id="searchBtn" onClick={this.onSubmitAmtrak}>
              Search This Station
            </button>
          </div>
        </form>
        <AmtrakBoard amtrakTrains={this.props.trains} />
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
