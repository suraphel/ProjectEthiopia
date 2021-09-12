import React from "react";
import AddChoresForm from "../components/dataFlow/choreregistreation/AddChoresForm";
//  import choreList from '../choreregistreation/choreList';

function UploadingChoresToDb() {
  async function toDbHandler(choreDataObject) {
    const responce = await fetch(
      "https://balmoja-49d90-default-rtdb.europe-west1.firebasedatabase.app/Chores.json",
      {
        method: "POST",
        body: JSON.stringify(choreDataObject),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!responce.ok) {
      throw new Error("Error");
    }
    const data = await responce.json();
    console.log(data);
  }
  return (
    <React.Fragment>
      <section>
        <AddChoresForm onAddchoresform={toDbHandler} />
      </section>
    </React.Fragment>
  );
}

export default UploadingChoresToDb;
