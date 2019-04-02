import React, { Component } from 'react';
import Homescreen from './components/homescreen/HomeScreen'
import './App.css';
import { BrowserRouter, Route, Redirect } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Homescreen />
      </div>
    );
  }
}
export default App;
