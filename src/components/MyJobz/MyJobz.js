import React from "react";
import JobList from "../JobList/JobList";
import Form from "../common/Form/Form";

const MyJobz = props => (
  <div>
    <h4>My Jobz</h4>
    {props.myjobz.map(myjob => {
      return <JobList key={myjob.id} myjob={myjob} />;
    })}
    <div>
      <Form type="button" value="Add Job" />
    </div>
  </div>
);

export default MyJobz;
