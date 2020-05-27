import React, { Component } from "react";

class Name extends Component {
  state = {
    msg: "Hello World",
  };

  render() {
    return (
      <React.Fragment>
        <h1>{this.state.msg}</h1>
        <button>Name</button>
      </React.Fragment>
    );
  }
}

export default Name;
