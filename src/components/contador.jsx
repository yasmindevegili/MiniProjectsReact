import React, { Component } from "react";
import './contador.css'
export default class Contador extends Component {
  state = {
    numero: this.props.numeroInicial,
    passo: this.props.passoInicial || 1,
  };
  inc = () => {
    this.setState({
      numero: this.state.numero + this.state.passo,
    });
  };

  dec = () => {
    this.setState({
      numero: this.state.numero - this.state.passo,
    });
  };

  setPasso = (e) => {
    this.setState({
      passo: +e.target.value,
    });
  };

  render() {
    return (
      <div>
        <p>{this.state.numero}</p>
        <div>
          <label htmlFor="passoInput">Passo: </label>
          <input 
          id="passoInput"
          type="number"
          value={this.state.passo}
          onChange={this.setPasso}
          />
        </div>
        <button onClick={this.inc}>+</button>
        <button onClick={this.dec}>-</button>
      </div>
    );
  }
}
