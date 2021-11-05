import { useContext, useEffect, useState } from "react";

import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const [btnIsBump, setBtnIsBump] = useState(false);

  const cartCtx = useContext(CartContext);

  const { items } = cartCtx; // object de-structuring

  const numberOfCartItems = items.reduce((currentNumber, item) => { // .reduce((the value it took, the thing it looks at) => { returns whatever }, starting value)
    return currentNumber + item.amount;
  }, 0);


  const btnClasses = `${classes.button} ${btnIsBump ? classes.bump : '' }`; // conditionality styling

  useEffect(() => {
    if (items.length === 0){
      return;
    }
    setBtnIsBump(true);

    const timer = setTimeout(() => {
      setBtnIsBump(false);
    }, 300);

    return() => { // when using return() in a useEffect it is a clean-up function
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button
      className={btnClasses}
      onClick={props.onClick} /* props.onClick is from Header.js */
    >
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={classes.badge}>
        {numberOfCartItems}
      </span>
    </button>
  );
};

export default HeaderCartButton;
