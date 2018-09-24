import React, { Component } from "react";
import Addjob from "./Addjob/Addjob";
import MyJobz from "../../components/MyJobz/MyJobz";

class myjobz extends Component {
  constructor(props) {
    super(props);

    this.state = {
      myjobz: [
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

  onComponentDidMount() {}

  addJobHandler(event) {
    event.preventDefault();

    console.log(event.target);
    let myjobz = [
      ...this.state.myjobz,
      {
        id: "3",
        company: "Some Company",
        title: "Some Job",
        description: "Work at Home Depot as a Software Engineer",
        posted: "9-23-2018"
      }
    ];

    this.setState(() => {
      return {
        myjobz
      };
    });
    myjobz.push();
  }

  render() {
    return <MyJobz {...props} />;
  }
}

export default myjobz;
