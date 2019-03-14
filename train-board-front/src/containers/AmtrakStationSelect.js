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
      showBoard: false
    };
  }

  onChange = e => {
    this.setState({
      stationCode: e.target.value,
      stationName: e.target.selectedOptions[0].innerText
    });
  };

  onSubmitAmtrak = e => {
    e.preventDefault();
    this.props.getAmtrakTrains(this.state.stationCode);
    this.setState({ showBoard: true });
  };

  render() {
    return (
      <React.Fragment>
        <form>
          <div id="station-select" className="center">
            <h4>Choose a station:</h4>{" "}
            <select
              name="stationCode"
              value={this.state.station}
              onChange={this.onChange}
            >
              <option value="" />
              <option value="NYP">New York Penn Station</option>
              <option value="WAS">Washington Union Station</option>
              <option value="PHL">Philadelphia 30th Street</option>
              <option value="BOS">Boston South Station</option>
              <option value="CHI">Chicago Union Station</option>
              <option value="STL">St. Louis Gateway Transit Center</option>
              <option value="LAX">Los Angeles Union Station </option>
              <option value="SAN">San Diego Santa Fe Depot</option>
              <option value="EMY">Emeryville (Oakland) CA</option>
              <option value="SEA">Seattle King Street Station</option>
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
