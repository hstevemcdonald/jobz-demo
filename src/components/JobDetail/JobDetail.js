import React from "react";

const JobDetail = props => (
  <div>
    <p>Company: {props.job.company}</p>
    <p>Title: {props.job.title}</p>
    <p>Description: {props.job.description}</p>
    <p>Location: {props.job.location}</p>
  </div>
);

export default JobDetail;
