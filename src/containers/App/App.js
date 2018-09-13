import React, { Component } from "react";
import "./App.css";

import Myjobs from "../../components/Myjobs/Myjobs";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      myjobs: [
        {
          id: "1",
          company: "Google",
          title: "Software Engineer",
          description: "Work at Google as a Software Engineer",
          posted: "9-29-2018",
          location: "Mountain View, CA"
        },
        {
          id: "2",
          company: "Home Depot",
          title: "Backend Engineer",
          description: "Work at Home Depot as a Software Engineer",
          posted: "9-23-2018",
          location: "Oakland, CA"
        }
      ],
      jobs: []
    };

    this.addJobHandler = this.addJobHandler.bind(this);
  }

  addJobHandler(event) {
    event.preventDefault();
    // console.log(data);
    let myjobs = { ...this.state.myjobs };
    // myjobs.push({
    //   id: "3",
    //   company: "Some Company",
    //   title: "Some Job",
    //   description: "Work at Home Depot as a Software Engineer",
    //   posted: "9-23-2018"
    // });
    // this.setState({
    //   myjobs: {}
    // });
  }

  render() {
    return (
      <div className="App">
        <Myjobs myjobs={this.state.myjobs} addJobHandler={this.addJobHandler} />
      </div>
    );
  }
}

export default App;
