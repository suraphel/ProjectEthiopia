import classes from "./Carts.module.css";

const Carts = (props) => {
  return <carts className={classes.cart}>{props.children}</carts>;
};
export default Carts;
