import React from "react";

const Addjob = props => {
  return (
    <div>
      <p>Company: {props.myjob.company}</p>
      <p>Title: {props.myjob.title}</p>
      <p>Description: {props.myjob.description}</p>
      <p>Location: {props.myjob.location}</p>
    </div>
  );
};

export default Addjob;
