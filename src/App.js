import React, { Component } from "react";
import "./App.css";

import Conversor from "./components/Conversor";

class App extends Component {
  render() {
    return (
      <div className="linha">
        
        <div className="App">
          <h2> Converta e não fique triste.</h2>
          <Conversor moedaA="USD" moedaB="BRL"></Conversor>
          <h3>Muita hora nessa calma!</h3>
        </div>
      </div>
    );
  }
}

export default App;
