import React, { Component } from "react";
import SplitFlapDisplay from "react-split-flap-display";

class Display extends Component {
  render() {
    return (
      <SplitFlapDisplay
        characterSet={["1", "2", "3", "4", ":"]}
        value="12:34"
      />
    );
  }
}

export default Display;
