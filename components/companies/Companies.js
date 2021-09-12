// Defines a company layout for rendering and fetching

import classes from "../companies/Companies.module.css";

const Companies = (props) => {
  return (
    <li className={classes.companies}>
      <h2>{props.namedata}</h2>
      <h3>{props.contactData}</h3>
      <h3>{props.tele}</h3>
    </li>
  );
};

export default Companies;
