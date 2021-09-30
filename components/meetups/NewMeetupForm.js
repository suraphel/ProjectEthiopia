import { isValidElement, useRef } from "react";

import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";
import Button from "../ui/button/Button";
import UserInput from "../hooks/user-inputs";

function NewMeetupForm(props) {
  const {
    value: typeData,
    valueChangeHandler: typeChangeHandler,
    reset: resetType,
  } = UserInput((value) => value.trim() !== "");

  const {
    value: addressData,
    valueChangeHandler: addressChangeHandler,
    reset: resetaddress,
  } = UserInput((value) => value.trim() !== "");

  const {
    value: DescriptionData,
    valueChangeHandler: DescriptionChangeHandler,
    reset: resetDescription,
  } = UserInput((value) => value.trim() !== "");

  const {
    value: imageData,
    valueChangeHandler: ImageChangeHandler,
    reset: resetImage,
  } = UserInput((value) => value.trim() !== "");

  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  let formValidation = true;

  function submitHandler(event) {
    event.preventDefault();

    if (!formValidation) {
      return;
    }

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    // blueprint for the DB
    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    console.log(meetupData);

    props.onAddMeetup(meetupData);

    resetType("");
    resetaddress("");
    resetDescription("");
    resetImage("");
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Type of help</label>
          <input
            type="text"
            required
            id="title"
            ref={titleInputRef}
            onChange={typeChangeHandler}
            value={typeData}
            placeholder="e.g Plumber ..."
          />
        </div>

        <div className={classes.control}>
          <label htmlFor="image"> Image of the problem</label>
          <input
            type="file"
            accept="video/*, image/*"
            capture="capture"
            id="image"
            ref={imageInputRef}
            onChange={ImageChangeHandler}
            value={imageData}
            placeholder="Picture of the problem"
          />
        </div>

        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            required
            id="address"
            ref={addressInputRef}
            onChange={addressChangeHandler}
            value={addressData}
            placeholder="e.g Addis Abeba, Lafto ..."
          />
        </div>

        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            required
            rows="5"
            ref={descriptionInputRef}
            onChange={DescriptionChangeHandler}
            value={DescriptionData}
            placeholder="Describe the problem in detail ..."
          ></textarea>
        </div>
        <div className={classes.actions}>
          <Button>Add Chore</Button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
