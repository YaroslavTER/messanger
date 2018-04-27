import React, { Component } from "react";

export class Comment extends Component {
  render() {
    return (
      <div className="comment">
        <div className="comments-text">{this.props.text}</div>
      </div>
    );
  }
}
