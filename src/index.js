import React from "react";
import ReactDOM from "react-dom";

// Method One of generating Hello World
// const element = <h1>Hello World</h1>;
// ReactDOM.render(element, document.getElementById("root"));

// Component Method of Hello World
import Name from "./components/name";
ReactDOM.render(<Name />, document.getElementById("root"));
