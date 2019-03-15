import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { getAmtrakTrains } from "../actions/amtrakTrainActions";
import AmtrakSearchBoard from "./AmtrakSearchBoard";

class StationResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placeAr: [],
      stationName: "",
      showBoard: false
    };
  }

  componentDidMount() {
    console.log("cDM fires");
    console.log(
      "this.props.amtrakStationSearchResult in cDM=",
      this.props.amtrakStationSearchResult
    );
    this.setState({ placeAr: [] });
    this.fixAr();
  }

  componentDidUpdate(prevProps) {
    console.log("cDU fires");
    console.log(
      "prevProps.amtrakStationSearchResult=",
      prevProps.amtrakStationSearchResult
    );
    console.log(
      "this.props.amtrakStationSearchResult in cDU=",
      this.props.amtrakStationSearchResult
    );
    if (
      this.props.amtrakStationSearchResult.length !==
      prevProps.amtrakStationSearchResult.length
    ) {
      console.log("Cdu logic fires");
      this.fixAr();
    }
  }

  onSubmit = e => {
    console.log("onSubmit fires in StationResult");
    this.props.getAmtrakTrains(e.target.dataset.stationcode);
    this.setState({
      placeAr: "",
      stationName: e.target.dataset.stationname,
      showBoard: true
    });
  };

  fixAr() {
    console.log("fixAr fires");
    if (this.props.amtrakStationSearchResult) {
      const trainsString = this.props.amtrakStationSearchResult;
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
            className="station-button"
            onClick={this.onSubmit}
            data-stationcode={place.slice(0, 3)}
            data-stationname={place.slice(4)}
          >
            {place}
          </button>
        </li>
      ));
    return (
      <React.Fragment>
        {/* <div dangerouslySetInnerHTML={{ __html: this.props.trains }}>
        </div> */}
        <div id="station-buttons-div" className="center">
          <ul className="center">{places}</ul>
        </div>
        <div>
          {this.state.showBoard ? (
            <AmtrakSearchBoard
              stationName={this.state.stationName}
              amtrakTrains={this.props.amtrakTrains}
            />
          ) : null}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  amtrakTrains: state.amtrakTrains.amtrakTrains
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
  )(StationResult)
);
