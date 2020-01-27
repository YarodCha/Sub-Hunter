import React, { Component } from "react";
import { Cuadro } from "./Cuadro";

export default class Tablero extends Component {
  constructor(props) {
    super(props);
    let gridWidth = 30;
    this.state = {
      win: false,
      numberHorizontalPixels: window.innerWidth,
      numberVerticalPixels: window.innerHeight,
      blockSize: Math.floor(window.innerWidth / gridWidth),
      gridWidth: gridWidth,
      gridHeight: Math.floor(
        window.innerHeight / Math.round(window.innerWidth / gridWidth)
      ),
      subPosition: -1,
      seleccionados: [],
      shotsTaken: 0,
      horizontalTouched: -100,
      verticalTouched: -100,
      distance: 9999,
      subHorizontalPosition: 0,
      subVerticalPosition: 0
    };
  }

  rellenarTablero() {
    let numeroCuadros = this.state.gridWidth * this.state.gridHeight;
    let cuadros = [];
    for (let i = 0; i < numeroCuadros; i++) {
      cuadros.push(
        <Cuadro
          key={i}
          id={i}
          color="solid 1px black"
          width={this.state.blockSize + "px"}
          height={this.state.blockSize + "px"}
          accion={() => this.disparar(i)}
        >
          {i}
        </Cuadro>
      );
    }
    return cuadros;
  }

  printDebugText() {
    return (
      <div className="info">
        <h1>
          Shots Taken: {this.state.shotsTaken} distance: {this.state.distance}{" "}
        </h1>
        {/* <p>win: {String(this.state.win)} </p>
        <p>numberHorizontalPixels: {this.state.numberHorizontalPixels} </p>
        <p>numberVerticalPixels: {this.state.numberVerticalPixels} </p>
        <p>horizontalTouched: {this.state.horizontalTouched} </p>
        <p>verticalTouched: {this.state.verticalTouched} </p>
        <p>subHorizontalPosition: {this.state.subHorizontalPosition} </p>
        <p>subVerticalPosition: {this.state.subVerticalPosition} </p>
        <p>gridWidth: {this.state.gridWidth} </p>
        <p>gridHeight: {this.state.gridHeight} </p>
        <p>blockSize: {this.state.blockSize} </p>         */}
      </div>
    );
  }

  printWin() {
    return (
      <div className="ganaste">
        <h1>GANASTE</h1>
        <button type="button" onClick={() => window.location.reload()}>Nuevo juego</button>
      </div>
    );
  }

  iniciarJuego() {
    let numeroCuadros = this.state.gridWidth * this.state.gridHeight;
    let ubicacionSub = Math.floor(Math.random() * numeroCuadros);

    let row = Math.floor(ubicacionSub / 30);
    let column = ubicacionSub % 30;

    this.setState({
      subPosition: ubicacionSub,
      subHorizontalPosition: column,
      subVerticalPosition: row
    });
  }

  disparar(idElemento) {
    if (this.state.seleccionados.includes(idElemento) || this.state.win) {
    } else {
      if (idElemento === this.state.subPosition) {
        this.setState({
          win: true
        });
      }

      let row = Math.floor(idElemento / 30);
      let column = idElemento % 30;
      let distancia = Math.floor(
        Math.sqrt(
          Math.pow(this.state.subHorizontalPosition - column, 2) +
            Math.pow(this.state.subVerticalPosition - row, 2)
        )
      );
      this.setState({
        seleccionados: [...this.state.seleccionados, idElemento],
        shotsTaken: this.state.shotsTaken + 1,
        horizontalTouched: column,
        verticalTouched: row,
        distance: distancia
      });
    }
  }

  componentDidMount() {
    this.iniciarJuego();
  }

  render() {
    this.state.seleccionados.forEach(i => {
      let cuadro = document.getElementById(i);
      if (
        this.state.seleccionados.indexOf(i) ===
        this.state.seleccionados.length - 1
      ) {
        cuadro.className = "cuadro seleccionadoUltimo";
      } else {
        cuadro.className = "cuadro seleccionado";
      }
    });

    return (
      <>
        {this.printDebugText()}
        {this.state.win ? this.printWin() : null}
        <div className="tablero">{this.rellenarTablero()}</div>
      </>
    );
  }
}
