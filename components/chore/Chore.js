// Defines a Chore and what it takes in
import Button from "../ui/button/Button";
import classes from "../chore/Chore.module.css";
import Link from "next/link";

const Chore = (props) => {
  /* // font for the rendered page title */

  return (
    <li className={classes.chore}>
      <h3>{props.introData}</h3>
      <h4>{props.descriptionData}</h4>
      <p>{props.paintJob}</p>
      {/* <h4>{props.lineOfBusiness}</h4> */}

      <Link href="/testing">
        <button className={classes.button}> Show Details </button>
      </Link>

      {/* <p>{props.openingText}</p> */}
    </li>
  );
};

export default Chore;
