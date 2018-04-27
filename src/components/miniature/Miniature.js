import React, { Component } from "react";

export class Miniature extends Component {
  render() {
    return (
      <div className={"miniature-block " + this.props.hideClass}>
        <button className="transparent-button" onClick={this.props.onClick}>
          <i className="far fa-comments" />
        </button>
      </div>
    );
  }
}
