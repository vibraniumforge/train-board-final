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
      stationSearchInput: "",
      showBoard: false
    };
  }

  onChange = e => {
    this.setState({ stationSearchInput: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    if (this.state.stationSearchInput) {
      this.props.getAmtrakStation(this.state.stationSearchInput);
      this.setState({ stationSearchInput: "", showBoard: true });
    }
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
          <button type="button" id="search-btn" onClick={e => this.onSubmit(e)}>
            Search
          </button>
        </div>
        <div id="search-result">
          <StationResult
            amtrakStationSearchResult={this.props.amtrakStationSearchResult}
          />
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  amtrakStationSearchResult: state.amtrakTrains.amtrakStationSearchResult
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
