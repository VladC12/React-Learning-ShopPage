import { useRef, useState } from "react";

import classes from "./SKUItemForm.module.css";
import Input from "../../UI/Input";

const SKUItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault(); //! the browser default of reloading the page is prevented

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount; // converts the string to an actual number

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return; // if any of the conditions are met (empty string, low number or number too high) don't continue with the submit handler
    }

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>Add</button>
      {!amountIsValid && <p>Please Enter a Valid amount from 1 to 5!</p>}
    </form>
  );
};

export default SKUItemForm;
