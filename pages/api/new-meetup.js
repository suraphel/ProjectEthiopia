//THE API :Sends form input to the server,  connects to MongoDB and creates a collection page.

import { MongoClient } from "mongodb";

// this will only run on the server, never on the client side
// nothing to do with page rendering

async function Handler(req, res) {
  console.log(process.env.FIREBASE_AUTH);
  if (req.method === "POST") {
    const data = req.body;

    // expection data from the form and adding to the DB
    // because mongodb doc takes an object no need for disstructuring.
    // const { title, address, image, description } = data;

    const client = await MongoClient.connect(
      "mongodb+srv://admin:fdxCicGrFtNJd9gA@cluster0.xdax3.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db(); // to connect to the client-side db
    const meetupcollection = db.collection("meetups"); // create a collection called meetup
    // result is an object with an id as one of its properties
    const result = await meetupcollection.insertOne(data); // in Mongodb doc is an js object

    // will add error handling

    console.log(result);

    client.close();

    // on the above lines we are getting a request for storing data
    // now we will send a responce to that call

    res.status(201).json({ message: "successfully inserted" });
  }
}

export default Handler;

// //THE API :Sends form input to the server,  connects to MongoDB and creates a collection page.

// import { MongoClient } from "mongodb";

// // this will only run on the server, never on the client side
// // nothing to do with page rendering

// async function Handler(req, res) {
//   if (req.method === "POST") {
//     const data = req.body;

//     // expection data from the form and adding to the DB
//     // because mongodb doc takes an object no need for disstructuring.
//     // const { title, address, image, description } = data;

//     const client = await MongoClient.connect(
//       "mongodb+srv://admin:fdxCicGrFtNJd9gA@cluster0.xdax3.mongodb.net/meetups?retryWrites=true&w=majority"
//     );
//     const db = client.db(); // to connect to the client-side db
//     const meetupcollection = db.collection("meetups"); // create a collection called meetup
//     // result is an object with an id as one of its properties
//     const result = await meetupcollection.insertOne(data); // in Mongodb doc is an js object

//     // will add error handling

//     console.log(result);

//     client.close();

//     // on the above lines we are getting a request for storing data
//     // now we will send a responce to that call

//     res.status(201).json({ message: "successfully inserted" });
//   }
// }

// export default Handler;
