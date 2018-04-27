import React, { Component } from "react";

export class Input extends Component {
  render() {
    return (
      <div className="inline">
        <textarea
          className="form-control input-text"
          onChange={this.props.onChange}
          value={this.props.value}
          rows="1"
        />
      </div>
    );
  }
}
