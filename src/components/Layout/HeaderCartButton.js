import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  return (
    <button className={classes.button} onClick={props.onClick} /* props.onClick is from Header.js */ > 
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={classes.badge}>
        3{/* Logic count number of items */}
      </span>
    </button>
  );
};

export default HeaderCartButton;
