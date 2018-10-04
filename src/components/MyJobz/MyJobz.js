import React from "react";
import Form from "../common/Form/Form";
import JobList from "../JobList/JobList";

const MyJobz = ({ myjobz }) => {
  console.log("Jobz", myjobz);
  return (
    <div>
      <h4>My Jobz</h4>
      {
        (myjobz.length) ? myjobz.map(myjob => {
          return <JobList key={myjob.id} {...myjob} />;
        }) : (<h6>No jobs have been saved.</h6>)
      }
      <div>
        <Form type="button" value="Add Job" />
      </div>
    </div>
  );
};

export default MyJobz;
