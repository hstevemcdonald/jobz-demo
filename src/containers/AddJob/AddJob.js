import React, { Component } from "react";
import AddJob from "../../components/AddJob/AddJob";

class AddJobContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onChangeLocationHandler = this.onChangeLocationHandler.bind(this);
  }

  onChangeLocationHandler(e) {
    console.log(e.target.value);
  }

  render(props) {
    return <AddJob {...props} change={this.onChangeLocationHandler} />;
  }
}

export default AddJobContainer;
