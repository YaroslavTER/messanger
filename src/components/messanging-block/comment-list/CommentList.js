import React, { Component } from "react";
import { Comment } from "./Comment";

export class CommentList extends Component {
  renderComments(commentList) {
    return commentList.map((element, index) => {
      return <Comment key={index} text={element.text} />;
    });
  }

  render() {
    return (
      <div className="comments-area">
        <div className="comments-list">
          {this.renderComments(this.props.commentList)}
        </div>
      </div>
    );
  }
}
