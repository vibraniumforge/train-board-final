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
    this.setState(prevState => {
      return {
        likes: prevState.likes + 1
      };
    });
  };

  render() {
    return (
      <div>
        <button
          type="button"
          className="board-button"
          onClick={this.incrementLikes}
        >
          Likes: {this.state.likes}
        </button>
      </div>
    );
  }
}

export default LikeButton;
