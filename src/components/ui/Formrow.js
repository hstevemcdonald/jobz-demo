import React from "react";
import Input from "../forms/Input";

import "./Formrow.css";

const Formrow = props => {
  return (
    <div className={Formrow}>
      <label>
        {props.label.text}
        <Input input={props.input} />
      </label>
    </div>
  );
};
