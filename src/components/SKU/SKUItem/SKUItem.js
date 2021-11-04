import classes from "./SKUItem.module.css";
import SKUItemForm from "./SKUItemForm";

const SKUItem = (props) => {
const price = `$${props.price.toFixed(2)}`; // `` used for literal, the first dollar sign is just that a $ and the ${} outputs the price and .toFixed(2) is to ensure 2 decimals

  return (
    <li className={classes.SKU}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
          <SKUItemForm />
      </div>
    </li>
  );
};

export default SKUItem;
