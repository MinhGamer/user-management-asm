import React, { Component } from "react";
import ItemTask from "./item-task";

export default class ListTask extends Component {
  render() {
    return (
      <>
        <ul className="todo" id="todo">
          <ItemTask />
        </ul>
        {/* Completed tasks */}
        <ul className="todo" id="completed">
          <ItemTask />
        </ul>
      </>
    );
  }
}
