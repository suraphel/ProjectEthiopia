import { useRef } from "react";

import Card from "../components/ui/Card";
import classes from "../components/meetups/NewMeetupForm.module.css";
import Button from "../components/ui/button/Button";

function NewMeetupForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    console.log(meetupData);

    props.onAddMeetup(meetupData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Topic</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>

        <div className={classes.control}>
          <label htmlFor="image"> Image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>

        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" ref={addressInputRef} />
        </div>

        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            required
            rows="5"
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <Button>Add Product</Button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
