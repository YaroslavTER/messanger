import React, { Component } from "react";
import { Miniature } from "../miniature/Miniature";
import { Body } from "./Body";
import { Modal } from "./Modal";

export class MessagingBlock extends Component {
  constructor() {
    super();

    const commentList = null; //JSON.parse(localStorage.getItem("commentList"));
    this.state = {
      commentList: commentList || [],
      isMessangerHidden: true,
      isMiniatureHidden: false,
      inputText: ""
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleCloseClick = this.handleCloseClick.bind(this);
    this.handlePinClik = this.handlePinClik.bind(this);
    this.handleShowMessangerClick = this.handleShowMessangerClick.bind(this);
  }

  handleClick() {
    const array = JSON.parse(JSON.stringify(this.state.commentList));
    array.push({ text: this.state.inputText });
    this.setState({ commentList: [].concat(array) }, () => {
      localStorage.setItem(
        "commentList",
        JSON.stringify(this.state.commentList)
      );
    });
  }

  handleChange(event) {
    this.setState({ inputText: event.target.value });
  }

  handleCloseClick() {
    this.setState({ isMessangerHidden: true, isMiniatureHidden: false });
  }

  handlePinClik() {
    this.setState({ isMessangerHidden: true, isMiniatureHidden: false });
  }

  handleShowMessangerClick() {
    this.setState({ isMessangerHidden: false, isMiniatureHidden: true });
  }

  render() {
    const hiddenMessanger = this.state.isMessangerHidden ? "hide" : "";
    const hiddenMiniature = this.state.isMiniatureHidden ? "hide" : "";
    return (
      <div>
        <Modal
          onCloseClick={this.handleCloseClick}
          commentList={this.state.commentList}
          onClick={this.handleClick}
          onChange={this.handleChange}
          value={this.state.inputText}
          isModal={true}
        />

        <div className={"container comments " + hiddenMessanger}>
          <Body
            onCloseClick={this.handleCloseClick}
            onPinClick={this.handlePinClik}
            commentList={this.state.commentList}
            onClick={this.handleClick}
            onChange={this.handleChange}
            value={this.state.inputText}
            isModal={false}
          />
        </div>
        <Miniature
          hideClass={hiddenMiniature}
          onClick={this.handleShowMessangerClick}
        />
      </div>
    );
  }
}
