//  import    '../companyregistration/AddCompanies.css'
import classes from "../choreregistreation/AddChore.module.css";
import UserInput from "../../hooks/user-inputs";
import Card from "../../ui/Card";
import Button from "../../ui/button/Button";
import { useRef } from "react";

function Addchoresform(props) {
  const {
    value: introData,
    isValid: validIntro,
    hasError: inValidIntro,
    valueChangeHandler: IntroChangeHandler,
    onfocusHandler: blurIntro,
    reset: resetIntro,
  } = UserInput((value) => value.trim() !== "");

  const {
    value: descriptionData,
    isValid: validdetail,
    hasError: inValiddetail,
    valueChangeHandler: detailChangeHandler,
    onfocusHandler: blurdetail,
    reset: resetdetail,
  } = UserInput((value) => value.trim() !== "");

  const description = useRef("");
  const intro = useRef("");

  let formValidation = false;
  if (validIntro && validdetail) {
    formValidation = true;
  }

  function submitHandler(event) {
    event.preventDefault();

    if (!formValidation) {
      return;
    }

    // const choreDataObject = {
    //   descriptionData,
    //   introData,
    // };

    const choreDataObject = {
      descriptionData: description.current.value,
      introData: intro.current.value,
    };
    // console.log(choreDataObject);
    props.onAddchoresform(choreDataObject);

    resetIntro("");
    resetdetail("");
  }

  const introInputClasses = inValidIntro
    ? "form-control invalid"
    : "form-control ";

  const detailInputClasses = inValiddetail
    ? "form-control invalid"
    : "form-control ";

  return (
    <Card>
      <form onSubmit={submitHandler}>
        <div className="app">
          <div className={classes.control}>
            <label htmlFor="choreintro">Introduction</label>
            <textarea
              rows="2"
              id="choreintro"
              placeholder="Short explanation of the chore"
              ref={intro}
              onBlur={blurIntro}
              onChange={IntroChangeHandler}
              value={introData}
            ></textarea>
            {inValidIntro && (
              <p className="error-text"> Please enter an Introduction </p>
            )}
          </div>

          <div className={classes.control}>
            <label htmlFor="descrip">Description</label>
            <textarea
              rows="5"
              id="descrip"
              ref={description}
              onBlur={blurdetail}
              onChange={detailChangeHandler}
              value={descriptionData}
            ></textarea>
            {inValiddetail && (
              <p className="error-text"> Please enter the details</p>
            )}
          </div>
          <div className={classes.action}>
            {/* <button className={classes.button}>Add Chores</button> */}
            <Button className={classes.button}>Add Chores</Button>
          </div>
        </div>
      </form>
    </Card>
  );
}
export default Addchoresform;
