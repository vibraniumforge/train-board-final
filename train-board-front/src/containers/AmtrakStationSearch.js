import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { getAmtrakStation } from "../actions/amtrakTrainActions";
import StationResult from "../components/StationResult";

class AmtrakStationSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stationSearchInput: ""
    };
  }

  onChange = e => {
    this.setState({ stationSearchInput: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.getAmtrakStation(this.state.stationSearchInput);
  };

  render() {
    return (
      <React.Fragment>
        <div id="station-search" className="center">
          <h4>Search for an Amtrak Station:</h4>
          <br />
          <input
            type="text"
            id="search-bar"
            name="searchBar"
            value={this.state.stationSearchInput}
            onChange={this.onChange}
          />
          <button type="button" id="search-btn" onClick={this.onSubmit}>
            Search
          </button>
        </div>
        <div id="search-result">
          <StationResult trains={this.props.trains} />
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  trains: state.amtrakTrains.amtrakStationSearchResult
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getAmtrakStation
    },
    dispatch
  );

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AmtrakStationSearch)
);
