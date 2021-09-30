import classes from "./Carts.module.css";

const Carts = (props) => {
  return <cart className={classes.Carts}>{props.children}</cart>;
};
export default Carts;
