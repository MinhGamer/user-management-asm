import React, { Component } from "react";

export default class ItemTask extends Component {
  render() {
    return (
      <li>
        <span className="liName">ReactJs</span>
        <span>
          <i className="fas fa-trash-alt" />
          <i className="far fa-check-circle" />
        </span>
      </li>
    );
  }
}
