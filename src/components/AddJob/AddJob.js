import React from "react";
import Form from "../common/Form/Form";

const Addjob = props => {
  return (
    <div>
      <h4>Add Job</h4>
      <br />
      <Form
        label="Company"
        id="company"
        name="company"
        type="text"
        attributes={{
          name: "company"
        }}
        placeholder="Enter company"
        change={e => {
          props.change(e, "company");
        }}
      />
      <Form
        label="Title"
        id="title"
        attributes={{
          name: "title"
        }}
        type="text"
        placeholder="Enter job title"
        change={e => {
          props.change(e, "title");
        }}
      />
      <Form
        label="Description"
        type="textarea"
        id="description"
        name="company"
        attributes={{
          rows: "10",
          cols: "50"
        }}
        placeholder="Enter job description"
        change={e => {
          props.change(e, "description");
        }}
      />
      <Form
        label="Location"
        id="location"
        name="location"
        type="select"
        options={[
          { displayValue: "-----", value: "" },
          { displayValue: "Mountain View, CA", value: "MTNVIEW" },
          { displayValue: "Oakland, CA", value: "OAKLAND" },
          { displayValue: "San Francisco, CA", value: "SF" }
        ]}
        placeholder="Enter job location"
        change={e => {
          props.change(e, "location");
        }}
      />
      <Form
        id="addJobButton"
        value="Add Job"
        type="button"
        click={props.onSubmit}
      />
    </div>
  );
};

export default Addjob;
