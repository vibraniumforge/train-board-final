import React, { Component } from "react";

class StationResult extends Component {
  render() {
    const result = this.props.trains;
    console.log("this.props.trains=", this.props.trains);
    console.log("result=", result);
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
        {/* <div>
          <table />
        </div> */}
      </React.Fragment>
    );
  }
}

export default StationResult;
