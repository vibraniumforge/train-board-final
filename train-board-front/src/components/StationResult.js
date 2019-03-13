import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { getAmtrakTrains } from "../actions/amtrakTrainActions";

class StationResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placeAr: []
    };
  }

  componentDidMount() {
    console.log("cdm fires");
    console.log("this.props.trains in CDM=", this.props.trains);
    this.setState({ placeAr: [] });
    this.fixAr();
  }

  componentDidUpdate(prevProps) {
    console.log("cdu fires");
    console.log("prevProps=", prevProps.trains);
    console.log("this.props.trains in CDU=", this.props.trains);
    if (this.props.trains.length !== prevProps.trains.length) {
      console.log("Cdu logic fires");
      this.fixAr();
    }
  }

  sendStationRequest = e => {
    this.props.getAmtrakTrains(e.target.dataset.stationcode);
    this.props.history.push("/select_amtrak_station");
  };

  fixAr() {
    console.log("fixAr fires");
    if (this.props.trains) {
      const trainsString = this.props.trains;
      console.log("trainsString in fixAr=", trainsString);
      let newAr = [];
      trainsString
        .split('blank">')
        .slice(1)
        .forEach(place =>
          newAr.push(place.trim().slice(0, place.indexOf("<")))
        );
      this.setState({ placeAr: newAr }, () =>
        console.log("setstate fires", "this.state.placeAr=", this.state.placeAr)
      );
    }
  }

  render() {
    const places =
      this.state.placeAr &&
      this.state.placeAr !== [] &&
      this.state.placeAr.map((place, index) => (
        <li key={index}>
          <button
            type="button"
            onClick={this.sendStationRequest}
            data-stationcode={place.slice(0, 3)}
          >
            {place}
          </button>
        </li>
      ));
    return (
      <React.Fragment>
        <div
          id="search-result"
          dangerouslySetInnerHTML={{ __html: this.props.trains }}
        />
        <div>
          <ul>{places}</ul>
        </div>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getAmtrakTrains
    },
    dispatch
  );

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(StationResult)
);
