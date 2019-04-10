import * as React from "react";
import { Component } from "react";
import { render } from "react-dom";
import { defineCustomElements } from "@manifoldco/ui/esm/es2017/manifold.define";

defineCustomElements(window);

// import './index.css'

class App extends Component {
  render() {
    return <manifold-marketplace />;
  }
}

render(<App />, document.getElementById("root"));
