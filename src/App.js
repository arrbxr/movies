import React, { Component } from "react";
import Movie from "./components/movies";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <Movie />
      </div>
    );
  }
}

export default App;
