import React, { Component } from "react";
import { AddButton } from "./AddButton";
import { Input } from "./Input";

export class InputComment extends Component {
  render() {
    return (
      <div className="input-comment-block">
        <AddButton onClick={this.props.onClick} />
        <Input onChange={this.props.onChange} value={this.props.value} />
      </div>
    );
  }
}
