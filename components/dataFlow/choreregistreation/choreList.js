import classes from "./choreList.module.css";
import Chore from "../../chore/Chore";

const choreList = (props) => {
  return (
    <ul className={classes["chorelist"]}>
      {props.chores.map((chore) => (
        <Chore
          key={chore.id}
          descriptionData={chore.descriptionData}
          introData={chore.introData}
          // lineOfBusiness={chore.lineOfBusiness}
        />
      ))}

      {/* console.log(Chore); */}
    </ul>
  );
};
export default choreList;
