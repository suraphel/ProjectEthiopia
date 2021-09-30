import React from "react";
import AddChoresForm from "../components/dataFlow/choreregistreation/AddChoresForm";

const Mechanic = () => {
  async function toDbHandler(choreDataObject) {
    const responce = await fetch(
      "https://balemoja-9c5e6-default-rtdb.europe-west1.firebasedatabase.app/Mechanic.json",
      // "https://balmoja-49d90-default-rtdb.europe-west1.firebasedatabase.app/Chores.json",
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
        <label htmlFor="label">Paint job </label>
        <input type="checkbox" />
      </section>
    </React.Fragment>
  );
};

export default Mechanic;
