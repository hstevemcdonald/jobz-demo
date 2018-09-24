import React, { Component } from "react";
import AddJob from "../../components/AddJob/AddJob";

class AddJobContainer extends Component {
  constructor(props) {
    super(props);
  }

  render(props) {
    return <AddJob {...props} />;
  }
}

export default AddJobContainer;
