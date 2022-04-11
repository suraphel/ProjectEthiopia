// Destination home page, collect data from the server and renders it on the homepage/ StartPage

import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";
import Head from "next/head";
import ComponentUI from "../pages/HouseCleaner";
import classes from "../components/layout/Index.module.css";

import RoutingPage from "../components/RoutingPage";
// import LoginNavigation from "../components/userAccount/components/Layout/LoginNavigation";
import FetchingFromDB from "./FetchingFromDB";
import SearchBar from "./SearchBar";
import SecurityService from "./SecurityService";
import { Fragment } from "react";
import UploaddingChoresToDb from "./UploadingChoresToDb";

const StartPage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>Balemoja</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Connects highly skilled and reliable professionals with end users"
        />
      </Head>

      {/* <div className={classes.background}> </div> */}

      {/* <UploaddingChoresToDb /> */}
      <ComponentUI />

      {/* <MeetupList meetups={props.meetups} /> */}
      {/* <div className={backGround}> */}
      {/* <Image src="/ok.png" width={277} height={75} /> */}
      {/* <SearchBar /> */}
      {/* </div> */}
    </Fragment>
  );
};

//reserver name
//SAFE:: code written in here will only run on the server side.

//will updata the page every time there is a request.
// export async function getServerSideProps(context) {
//   const request = context.req;
//   const responce = context.res;
//   // Get the data from any where API or .....
//   // Always returns an object
//   return {
//     props: {
//       meetups: dummyData,
//     },
//   };
// }

export async function getStaticProps() {
  // we are fetching the data directly from the user input form as there is no need to make a trip to the server at this point in time.

  // connect to the server
  //establish connection, get acces to db, and getting data
  const client = await MongoClient.connect(
    "mongodb+srv://admin:fdxCicGrFtNJd9gA@cluster0.xdax3.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db(); // to connect to the meetups db
  const meetupcollection = db.collection("meetups"); // create a data collection called meetup on the server
  // result is an object with an id as one of its properties
  const allresult = await meetupcollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: allresult.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },

    revalidate: 100, //refreshs the page on the server every x seconds if there request are there
  };
}

export default StartPage;

// export default UploadingChoresToDb;

// export async function getServerSideProps() {
//   console.log(process.env.FIREBASE_AUTH);
//   return {
//     props: { Hello: suri },
//   };
// }
