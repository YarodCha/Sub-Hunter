import "./App.css";
import React, { Component } from "react";
import Tablero from "./components/Tablero";

export default class App extends Component {
  
  render() {
    return (
      <div id="contenedor">
        <Tablero />
      </div>
    );
  }
}
