import React, { Component } from "react";
import "./App.css";

import MyjobsContainer from "../MyjobsContainer/MyjobsContainer";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <MyjobsContainer />
      </div>
    );
  }
}

export default App;
