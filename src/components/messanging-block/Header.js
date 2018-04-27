import React, { Component } from "react";

export class Header extends Component {
  render() {
    const renderCloseButton = !this.props.isModal ? (
      <button
        className="transparent-button header-button"
        onClick={this.props.onCloseClick}
      >
        <i className="far fa-window-close" />
      </button>
    ) : null;
    return (
      <div className="header">
        <div className="header-button-block inline">
          <button
            className="transparent-button header-button"
            data-toggle="modal"
            data-target="#exampleModal"
            onClick={this.props.onPinClick}
          >
            <i className="fas fa-thumbtack" />
          </button>
          {renderCloseButton}
        </div>
        <div className="inline">
          <div className="header-name inline">{this.props.name}</div>
        </div>
      </div>
    );
  }
}
