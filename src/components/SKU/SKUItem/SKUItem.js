import { useContext } from "react";

import classes from "./SKUItem.module.css";
import SKUItemForm from "./SKUItemForm";
import CartContext from "../../../store/cart-context";

const SKUItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`; // `` used for literal, the first dollar sign is just that a $ and the ${} outputs the price and .toFixed(2) is to ensure 2 decimals

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={classes.SKU}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <SKUItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default SKUItem;
