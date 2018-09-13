import React from "react";
import Formrow from "../../../components/ui/Formrow";
import Button from "../../../components/forms/Button";

const Addjob = props => {
  return (
    <div>
      <h4>Add Job</h4>
      <Formrow
        labeltext="Company"
        id="company"
        name="company"
        placeholder="Enter company"
      />
      <Formrow
        labeltext="Title"
        id="title"
        name="title"
        placeholder="Enter job title"
      />
      <Formrow
        labeltext="Description"
        type="textarea"
        id="description"
        name="company"
        placeholder="Enter job description"
      />
      <Formrow
        labeltext="Location"
        id="location"
        name="location"
        placeholder="Enter job location"
      />
      <Button
        buttonText="Add Job"
        class="btn"
        clickHandler={props.addJobHandler}
      >
        Add Job
      </Button>
    </div>
  );
};

export default Addjob;
