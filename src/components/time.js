import React, { Component } from "react";

class Time extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleString(),
    };
  }

  render() {
    return (
      <div>
        <span>{this.state.time}</span>
      </div>
    );
  }
}

export default Time;
