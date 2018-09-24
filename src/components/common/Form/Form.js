import React from "react";
import "Form.css";

const Form = props => {
  let content = null,
    change = null,
    label = null;

  if (!props.id) {
    return null;
  }
  if (!props.type) {
    props.type = "text";
  }
  if (typeof props.change == "function") {
    change = () => props.change;
  }
  if (props.label) {
    label = (
      <label className="Form" {...props.label.attributes}>
        {props.label.text}
      </label>
    );
  }

  switch (props.type) {
    case "text":
      content = (
        <input
          type="text"
          {...props.attributes}
          className={props.class}
          value={props.value}
          onChange={() => change(event, props.id)}
        />
      );
      break;
    case "select":
      content = (
        <select
          {...props.attributes}
          value={props.value}
          className={props.class}
          onChange={() => change(event, props.id)}
        >
          {props.options.map(option => (
            <option key={option.id || option.value} value={option.value}>
              {option.displayValue || option.value}
            </option>
          ))}
        </select>
      );
      break;
    case "textarea":
      content = (
        <textarea
          {...props.attributes}
          className={props.class}
          onChange={() => change(event, props.id)}
        >
          {props.value}
        </textarea>
      );
      break;
    case "submit":
      content = (
        <input
          className={props.class}
          type="submit"
          {...props.attributes}
          value={props.value || "Submit"}
        />
      );
      break;
    case "button":
      content = (
        <input
          className={props.class}
          type="button"
          {...props.attributes}
          value={props.value || "Submit"}
        />
      );
      break;
  }
  return (
    <div className="Form">
      {label}
      {content}
    </div>
  );
};

export default Form;
