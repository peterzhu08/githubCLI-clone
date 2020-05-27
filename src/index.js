import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";

// Method One of generating Hello World
// const element = <h1>Hello World</h1>;
// ReactDOM.render(element, document.getElementById("root"));

// Component Method of Hello World
import Name from "./components/name";
import Time from "./components/time";
ReactDOM.render(
  <div>
    <Name />
    <Time />
  </div>,
  document.getElementById("root")
);
