import React, { Component } from "react";
import App from "../../components/App/App";
import "./App.css";

class AppContainer extends Component {
  constructor(props) {
    super(props);
  }

  render(props) {
    return <App {...props} />;
  }
}

export default AppContainer;
