import React from "react"; // for ref

import classes from "./Input.module.css";

// instead of for we use htmlFor
const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input
        ref={ref}
        {...props.input} /* ... is the spread operator. This ensures that all the key value pairs in this input object are added as props to input*/
      />
    </div>
  );
});

export default Input;
