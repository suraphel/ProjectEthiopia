import FetchingFromDB from "../../../pages/FetchingFromDB";
import classes from "./StartingPageContent.module.css";

const StartingPageContent = () => {
  // const tester = () => {
  //   // on click show the details

  //   const loadedChores = [];

  //   for (const key in data) {
  //     loadedChores.push({
  //       id: key,
  //       descriptionData: data[key].descriptionData,
  //       // introData: data[key].introData,
  //       // introData: data[key].introData
  //     });
  //     //
  //   }
  return (
    <section className={classes.starting}>
      {/* <button onClick={tester}>
          <h1>Data from the server </h1> */}
      <FetchingFromDB />
      {/* </button> */}
    </section>
  );
};
// };
export default StartingPageContent;
