import classes from "./ProfileForm.module.css";
import React, { useRef, useContext } from "react";
import AuthenticationContext from "../../Token/LogInAuthentication ";
import { useRouter } from "next/router";

const ProfileForm = () => {
  const router = useRouter();

  const newPasswordInputRef = useRef();
  const authCtx = useContext(AuthenticationContext); //  out password is stored in the Context field.
  // const history = useHistory();

  // for changing existing password, accesable only if logged in

  const submitHandler = (event) => {
    event.preventDefaultevent();

    const enteredNewPassword = newPasswordInputRef.current.value;

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBILHtgI_IbbZADrPf-oTa-3nJPvIL4qSs",
      {
        method: "POST",
        body: JSON.stringify({
          IdToken: authCtx.token,
          password: enteredNewPassword,
          returnSecureToken: false,
        }),
        headers: { "content-type": "application.json" },
      }
    ).then((res) => {
      // .then(response => {}) // more has to be done here display error if occured
      router.replace("/");
      // history.replace("/"); //once successful password update send to home page
    });
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input type="password" id="new-password" ref={newPasswordInputRef} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
