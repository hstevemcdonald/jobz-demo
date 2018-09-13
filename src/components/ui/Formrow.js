import React from "react";
import Input from "../forms/Input";

import "./Formrow.css";

const Formrow = props => {
  let input = { ...props };

  return (
    <div className="Formrow">
      <label>
        {props.labeltext}
        <Input input={input} />
      </label>
    </div>
  );
};

export default Formrow;
