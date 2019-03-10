import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { getUserTrains } from "../actions/userTrainActions";
import UserBoard from "../components/UserBoard";

class UserTrains extends Component {
  componentDidMount() {
    this.props.getUserTrains(() =>
      this.props.history.push("/view_user_trains")
    );
  }

  onSubmitTrains = e => {
    e.preventDefault();
    console.log("onSubmitTrains in UserTrains fires");
    this.props.getUserTrains(() =>
      this.props.history.push("/view_user_trains")
    );
  };

  render() {
    return (
      <React.Fragment>
        <form>
          <div className="center">
            <h4>View my Trains:</h4>{" "}
            <button type="button" id="trainsBtn" onClick={this.onSubmitTrains}>
              Refresh
            </button>
          </div>
        </form>
        <UserBoard userTrains={this.props.trains} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  trains: state.userTrains.userTrains
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getUserTrains
    },
    dispatch
  );

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(UserTrains)
);
