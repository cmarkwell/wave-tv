import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./header.css";
import Logo from "./logo.png";

class App extends Component {
  render() {
    return (
      <body>
        <header className="App-header">
        <img src={Logo} className="logo"/>
        </header>
      </body>
    );
  }
}

export default App;
