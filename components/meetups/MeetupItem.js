// For what will be rendered on the home page

import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";
import { useRouter } from "next/router";
import MeetupDetail from "../../pages/[meetupId]/index";
import MeetupDetails from "./MeetupDetails";

function MeetupItem(props) {
  const router = useRouter();

  function showDetails() {
    router.push("/" + props.id);
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h1>{props.title}</h1>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetails}> Contact Customer</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
