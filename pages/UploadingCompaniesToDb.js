import React from "react";
import AddCompaniesForm from "../components/dataFlow/companyregistration/AddCompaniesForm";

function UploadingCompaniesToDb() {
  async function toDbHandler(companyDataObject) {
    const responce = await fetch(
      "https://balmoja-49d90-default-rtdb.europe-west1.firebasedatabase.app/Companies.json",
      {
        method: "POST",
        body: JSON.stringify(companyDataObject),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    // if(!responce.ok){
    //   throw new Error('Error');
    // }
    const data = await responce.json();
    console.log(data);
  }
  return (
    <React.Fragment>
      <section>
        <AddCompaniesForm onAddcompaniesform={toDbHandler} />
      </section>
    </React.Fragment>
  );
}

export default UploadingCompaniesToDb;