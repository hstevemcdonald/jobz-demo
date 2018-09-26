import React from "react";
import JobList from "../JobList/JobList";
import "./Jobz.css";

const Jobz = props => {
  return (
    <div>
      <h4>Jobz</h4>
      {props.jobz.map(job => {
        return <JobList key={job.id} {...job} />;
      })}
    </div>
  );
};

export default Jobz;
