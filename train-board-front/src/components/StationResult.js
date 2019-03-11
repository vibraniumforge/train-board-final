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
          newAr.push(
            `<a href="https://cors-anywhere.herokuapp.com/http://www.dixielandsoftware.net/cgi-bin/station_search.pl?data=${place
              .trim()
              .slice(0, 3)}"target="_blank">${place
              .split("")
              .slice(4, place.indexOf("<"))
              .join("")}</a><br>`
          )
        );
      console.log("newAr in fixAr=", newAr);
      this.setState({ placeAr: newAr }, () =>
        console.log("setstate fires", this.state.placeAr)
      );
    }
  }

  render() {
    // console.log("t.p.t in render=", this.props.trains);
    const places =
      this.state.placeAr &&
      this.state.placeAr !== [] &&
      this.state.placeAr.map((place, index) => (
        <ul>
          <li key={index}>
            <button type="button" onClick={this.props.getAmtrakTrains()}>
              {place.innerHTML}
            </button>
          </li>
        </ul>
      ));
    console.log("places in render=", places);
    return (
      <React.Fragment>
        <div
          id="search-result"
          dangerouslySetInnerHTML={{ __html: this.props.trains }}
        />
        <div id="search-result2" dangerouslySetInnerHTML={{ __html: places }} />
        <div
          className="hidden"
          dangerouslySetInnerHTML={{ __html: this.props.trains }}
        />
      </React.Fragment>
    );
  }
}

// export default StationResult;

// var span = document.createElement("span");
// span.innerHTML = trainsString;
// console.log(span.innerHTML);
// // let newAr = [];
// console.log(
//   document
//     .getElementsByTagName("table")
//     .item(0)
//     .textContent.trim()
//     .split("\n ")
// );
// let text = document
//   .getElementsByTagName("table")
//   .item(0)
//   .textContent.trim()
//   .split("\n ");
// console.log("text=", text);

// const trainsString = this.props.trains;
// let newAr = trainsString.split('blank">').slice(1);
// console.log("na=", newAr);
// for (let i = 0; i < newAr.length; i++) {
//   let secAr = [];
//   let thAr = [];
//   for (let j = 0; j !== "<"; j++) {
//     thAr.push(newAr[i][j]);
//   }
//   secAr.push(thAr);
//   console.log("secAr=", secAr);
// }

// console.log("tpt=", this.props.trains);
// if (this.props.trains) {
//   const x = document
//     .getElementsByTagName("table")
//     .item(0)
//     .textContent.trim()
//     .split("\n ");
//   x.forEach(place =>
//     console.log(
//       `<a href="https://cors-anywhere.herokuapp.com/http://www.dixielandsoftware.net/cgi-bin/station_search.pl?data=${place
//         .trim()
//         .slice(0, 3)}" target="_blank">${place}</a> <br>`
//     )
//   );
// }

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
