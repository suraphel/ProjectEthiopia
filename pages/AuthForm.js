// LogIn form and validation with firebase

import { useState, useRef, useContext } from "react";
import AuthenContext from "../components/Token/LogInAuthentication ";

import classes from "../components/usersAccount/Auth/AuthForm.module.css";
import { useRouter } from "next/router";
import Button from "../components/ui/button/Button";
import UserInput from "../components/hooks/user-inputs";
// import { useHistory } from "next/router";

const AuthForm = () => {
  const {
    value: username,
    isValid: validUsername,
    hasError: inValidUsername,
    valueChangeHandler: UsernameChangeHandler,
    onfocusHandler: blurUsername,
    reset: resetUsername,
  } = UserInput((value) => value.trim() !== "");

  const {
    value: password,
    isValid: validPassword,
    hasError: inValidPassword,
    valueChangeHandler: PasswordChangeHandler,
    onfocusHandler: blurPassword,
    reset: resetPassword,
  } = UserInput((value) => value.trim() !== "");

  // const history = useHistory();
  let formValidation = false;

  if (validUsername && validPassword) {
    formValidation = true;
  }

  const router = useRouter();

  const usernameInputRef = useRef();
  const passwordInputRef = useRef();
  // const history = useHistory();

  const authCtx = useContext(AuthenContext);
  // validation if needed
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formValidation) {
      return;
    }

    const enteredEmail = usernameInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    let url;

    if (isLogin) {
      url =
        // this goes to the test page of the server
        // "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBILHtgI_IbbZADrPf-oTa-3nJPvIL4qSs";

        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD2dHvMXmJE9RIAgPwJvc09z8L8irh0Vmc";

      setLoading(true);
    } else {
      url =
        // "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBILHtgI_IbbZADrPf-oTa-3nJPvIL4qSs";
        // for the test page and it works
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD2dHvMXmJE9RIAgPwJvc09z8L8irh0Vmc";
    }

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            authCtx.login(data.idToken);
            const errorM = data.error.message;
            throw new Error(errorM); // if a problem look in here
          });
        }
        // Automatic logout based on time
      })
      .then((data) => {
        console.log("if it went well" + data);
        const expirationTime = new Date(
          new Date().getTime() + +data.expiresIn * 3600
        );
        authCtx.login(data.idToken, expirationTime.toISOString());
        router.push("/FetchingFromDB");
        //testing
        // history.replace("/");
        // Now the user is logged as he has received a tokken.
      })
      .catch((err) => {
        //error source is built-in message from firebase
        alert(err.message);
      });

    resetUsername("");
    resetPassword("");
  };

  const usernameInputClasses = inValidUsername
    ? "form-control invalid"
    : "form-control ";

  const passwordInputClasses = inValidPassword
    ? "form-control invalid"
    : "form-control ";

  return (
    <section className={classes.auth}>
      {/*option b/n login or signUp  */}
      <h1>{isLogin ? "Log in " : "Sign up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={usernameInputClasses}>
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            ref={usernameInputRef}
            required
            onBlur={blurUsername}
            onChange={UsernameChangeHandler}
            value={username}
          />
          {inValidUsername && (
            <p className="error-text"> Please enter the User-name</p>
          )}
        </div>

        <div className={passwordInputClasses}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            ref={passwordInputRef}
            required
            onBlur={blurPassword}
            onChange={PasswordChangeHandler}
            value={password}
          />
          {inValidPassword && (
            <p className="error-text"> Please enter the password</p>
          )}
        </div>
        <div className={classes.actions}>
          {!isLoading && (
            <Button>{isLogin ? "Login" : "Create Account"}</Button>
          )}
          {isLoading && <p>Loading...</p>}
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
