import React, { Component } from "react";

class LikeButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0
    };
  }

  incrementLikes = e => {
    e.preventDefault();
    console.log("incrementLikes fires");
    this.setState({ likes: this.state.likes + 1 }, () =>
      console.log(this.state.likes)
    );
  };

  render() {
    return (
      <div>
        <button
          type="button"
          //   data-id={this.props.id}
          onClick={e => this.incrementLikes(e)}
        >
          Likes: {this.state.likes}
        </button>
      </div>
    );
  }
}

export default LikeButton;
