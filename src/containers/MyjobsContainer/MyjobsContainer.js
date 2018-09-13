import React, { Component } from "react";
import Addjob from "./Addjob/Addjob";
import Myjob from "./Myjob/Myjob";

class Myjobs extends Component {
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

  onComponentDidMount() {}

  addJobHandler(event) {
    event.preventDefault();

    console.log(event.target);
    let myjobs = [
      ...this.state.myjobs,
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
        myjobs
      };
    });
    myjobs.push();
  }

  render() {
    return (
      <div>
        <p>My Jobs</p>
        <div>
          {this.state.myjobs.map(myjob => {
            return <Myjob key={myjob.id} myjob={myjob} />;
          })}
        </div>
        <div>
          <Addjob addJobHandler={this.addJobHandler} />
        </div>
      </div>
    );
  }
}

export default Myjobs;
