import React, { Component } from "react";
import { Header } from "./Header";
import { CommentList } from "./comment-list/CommentList";
import { InputComment } from "./input-comment/InputComment";

export class Body extends Component {
  render() {
    return (
      <div>
        <Header
          name="Messanger"
          onCloseClick={this.props.onCloseClick}
          onPinClick={this.props.onPinClick}
        />

        <CommentList commentList={this.props.commentList} />

        <InputComment
          onClick={this.props.onClick}
          onChange={this.props.onChange}
          value={this.props.value}
        />
      </div>
    );
  }
}
