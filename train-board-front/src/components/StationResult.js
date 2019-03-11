import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { getAmtrakStation } from "../actions/amtrakTrainActions";

class StationResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placeAr: []
    };
  }

  componentDidUpdate(prevProps) {
    console.log("cdu fires");
    console.log(prevProps);
    console.log(this.props.trains);
    if (this.props.trains.length !== prevProps.trains.length) {
      this.fixAr();
    }
  }

  fixAr() {
    console.log("fixAr fires");

    if (this.props.trains) {
      const trainsString = this.props.trains;
      console.log("trainsString=", trainsString);
      let newAr = [];
      newAr = trainsString
        .split('blank">')
        .slice(1)
        .forEach(place =>
          newAr.push(
            `<a href="https://cors-anywhere.herokuapp.com/http://www.dixielandsoftware.net/cgi-bin/station_search.pl?data=${place
              .trim()
              .slice(0, 3)}" target="_blank">${place
              .split("")
              .slice(4, place.indexOf("<"))
              .join("")}</a><br>`
          )
        );
      console.log("newAr=", newAr);
      this.setState({ placeAr: newAr });
    }
  }

  render() {
    // const trainsString = this.props.trains;
    // console.log("trainsString=", trainsString);
    // let newAr = [];
    // console.log("newAr=", newAr);
    // newAr = trainsString
    //   .split('blank">')
    //   .slice(1)
    //   .forEach(place =>
    //     newAr.push(
    //       `<a href="https://cors-anywhere.herokuapp.com/http://www.dixielandsoftware.net/cgi-bin/station_search.pl?data=${place
    //         .trim()
    //         .slice(0, 3)}" target="_blank">${place
    //         .split("")
    //         .slice(4, place.indexOf("<"))
    //         .join("")}</a> <br>`
    //     )
    //   );
    console.log("t.p.t=", this.props.trains);
    if (this.props.trains) {
      console.log("t.p.t2=", this.props.trains);
      const places =
        this.state.placeAr && this.state.placeAr.map(place => place);
    }

    // console.log("places=", places);

    return (
      <React.Fragment>
        <div
          id="search-result"
          dangerouslySetInnerHTML={{ __html: this.props.trains }}
        />
        <div
          className="hidden"
          dangerouslySetInnerHTML={{ __html: this.props.trains }}
        />
        {/* <div>{places}</div> */}
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
      getAmtrakStation
    },
    dispatch
  );

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(StationResult)
);
