import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";

const Testing = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

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

export default Testing;
