import React from "react";

const Addjob = props => {
  return (
    <div>
      <p>Add Job</p>
      <label htmlFor="company">
        <span>Company</span>
        <input type="text" id="company" name="company" />
      </label>
      <label htmlFor="title">
        <span>Company</span>
        <input type="text" id="title" name="title" />
      </label>
      <label htmlFor="description">
        <span>Description</span>
        <input type="text" id="description" />
      </label>
      <label htmlFor="location">
        <span>Location</span>
        <input type="text" id="location" />
      </label>
      <button onClick={() => props.addJobHandler(props.changed)}>
        Add Job
      </button>
    </div>
  );
};

export default Addjob;
