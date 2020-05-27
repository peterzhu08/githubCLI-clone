import React, { Component } from "react";

class Name extends Component {
  constructor(props) {
    super(props);

    this.state = {
      msg: "Hello World",
      people: null,
    };
  }

  clickHandler() {
    const name = this.state.people.name.first;
    const message = "Hello ".concat(name);
    console.log(message);
    this.setState({ msg: message });
  }

  async componentDidMount() {
    const url = "https://randomuser.me/api/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ people: data.results[0] });
  }

  render() {
    return (
      <React.Fragment>
        <h1>{this.state.msg}</h1>
        <button onClick={this.clickHandler.bind(this)}>Update</button>
      </React.Fragment>
    );
  }
}

export default Name;
