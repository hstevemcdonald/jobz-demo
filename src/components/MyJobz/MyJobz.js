import React from "react";
import JobList from "../JobList/JobList";
import Form from "../common/Form/Form";

const MyJobz = props => (
  <div>
    <p>My Jobs</p>
    <div>
      {this.props.myjobz.map(myjob => {
        return <JobList key={myjob.id} myjob={myjob} />;
      })}
    </div>
    <div>
      <Form type="button" value="Add Job" />
    </div>
  </div>
);

export default MyJobz;
