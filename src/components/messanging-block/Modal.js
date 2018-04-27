import React, { Component } from "react";
import { Header } from "./Header";
import { CommentList } from "./comment-list/CommentList";
import { InputComment } from "./input-comment/InputComment";

export class Modal extends Component {
  render() {
    return (
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <Header
              name="Messanger"
              onCloseClick={this.props.onCloseClick}
              onPinClick={this.props.onPinClick}
              isModal={this.props.isModal}
            />

            <CommentList commentList={this.props.commentList} />

            <InputComment
              onClick={this.props.onClick}
              onChange={this.props.onChange}
              value={this.props.value}
            />
          </div>
        </div>
      </div>
    );
  }
}
