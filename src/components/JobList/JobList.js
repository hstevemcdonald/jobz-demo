import React from "react";
import "./JobList.css";

const JobList = props => (
  <div className="JobList">
    <p>Company: {props.company}</p>
    <p>Title: {props.title}</p>
    <p>Description: {props.description}</p>
    <p>Location: {props.location}</p>
  </div>
);

export default JobList;
