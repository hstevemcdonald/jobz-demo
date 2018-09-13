import React from "react";

const Button = props => {
  return (
    <button className="props.class" onClick={e => props.clickHandler(e)}>
      {props.buttonText}
    </button>
  );
};

export default Button;
