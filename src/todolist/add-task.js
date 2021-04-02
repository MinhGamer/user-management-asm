import React, { Component } from "react";

export default class AddTask extends Component {
  render() {
    return (
      <>
        <input id="newTask" type="text" placeholder="Enter an activity..." />
        <button id="addItem">
          <i className="fa fa-plus" />
        </button>
      </>
    );
  }
}
