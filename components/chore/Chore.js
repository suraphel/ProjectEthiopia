// Defines a Chore and what it takes in

import classes from "../chore/Chore.module.css";

const Chore = (props) => {
  /* // font for the rendered page title */

  return (
    <li className={classes.chore}>
      <h3>{props.introData}</h3>
      <h4>{props.descriptionData}</h4>
      {/* <p>{props.openingText}</p> */}
    </li>
  );
};

export default Chore;
