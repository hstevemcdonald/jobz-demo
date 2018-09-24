import React, { Component } from "react";
import App from "../../components/App/App";

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    // mount
    // do this
  }

  render(props) {
    return <App {...props} />;
  }
}

export default AppContainer;
