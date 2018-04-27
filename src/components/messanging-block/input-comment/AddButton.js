import React, { Component } from "react";

export class AddButton extends Component {
  render() {
    return (
      <div className="comments-button-block inline">
        <button
          className="add-button transparent-button"
          onClick={this.props.onClick}
        >
          <i className="far fa-comment" />
        </button>
      </div>
    );
  }
}
