import React from "react";
import Form from "../common/Form/Form";

const Addjob = props => {
  return (
    <div>
      <h4>Add Job</h4>
      <Form
        label="Company"
        id="company"
        name="company"
        type="text"
        placeholder="Enter company"
      />
      <Form
        label="Title"
        id="title"
        name="title"
        type="text"
        placeholder="Enter job title"
      />
      <Form
        label="Description"
        type="textarea"
        id="description"
        name="company"
        placeholder="Enter job description"
      />
      <Form
        label="Location"
        id="location"
        name="location"
        type="text"
        placeholder="Enter job location"
      />
      <Form
        value="Add Job"
        class="btn"
        type="button"
        clickHandler={props.addJobHandler}
      />
    </div>
  );
};

export default Addjob;
