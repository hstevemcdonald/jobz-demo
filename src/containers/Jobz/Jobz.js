import React, { Component } from "react";
import Jobz from "../../components/Jobz/Jobz";

class JobzContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jobz: [
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
        },
        {
          id: "3",
          company: "Flower Depot",
          title: "Backend Engineer",
          description: "Work at Home Depot as a Software Engineer",
          posted: "9-23-2018",
          location: "Oakland, CA"
        },
        {
          id: "4",
          company: "Hardware Depot",
          title: "Backend Engineer",
          description: "Work at Home Depot as a Software Engineer",
          posted: "9-23-2018",
          location: "Oakland, CA"
        },
        {
          id: "5",
          company: "Software Depot",
          title: "Backend Engineer",
          description: "Work at Home Depot as a Software Engineer",
          posted: "9-23-2018",
          location: "Oakland, CA"
        }
      ]
    };
  }

  onComponentDidMount() {}

  render(props) {
    return <Jobz jobz={this.state.jobz} {...props} />;
  }
}

export default JobzContainer;
