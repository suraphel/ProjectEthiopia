// //LogIn form and validation with firebase

// import { useRef, useState, useContext } from "react";
// import AuthenticationContext from "../components/Token/LogInAuthentication ";
// // import { useHistory } from 'react-router-dom'
// import { useRouter } from "next/router";

// import classes from "../components/userAccount/components/auth/AuthForm.module.css";
// import LoginNavigation from "../components/userAccount/components/Layout/LoginNavigation";
// // ./auth/AuthForm.module.css'
// // import classes from '../../Token/AuthForm.module.css'

// const AuthForm = () => {
//   const router = useRouter();

//   const usernameInputRef = useRef();
//   const passwordInputRef = useRef();
//   // const history = useHistory();

//   const authCtx = useContext(AuthenticationContext);
//   // validation here
//   const [isLogin, setIsLogin] = useState(true);
//   const [isLoading, setLoading] = useState(false);

//   const switchAuthModeHandler = () => {
//     setIsLogin((prevState) => !prevState);
//   };

//   const submitHandler = (event) => {
//     event.preventDefault();

//     const enteredEmail = usernameInputRef.current.value;
//     const enteredPassword = passwordInputRef.current.value;

//     let url;

//     if (isLogin) {
//       url =
//         "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBILHtgI_IbbZADrPf-oTa-3nJPvIL4qSs";
//       setLoading(true);
//     } else {
//       url =
//         "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBILHtgI_IbbZADrPf-oTa-3nJPvIL4qSs";
//     }
//     fetch(url, {
//       method: "POST",
//       body: JSON.stringify({
//         email: enteredEmail,
//         password: enteredPassword,
//         returnSecureToken: true,
//       }),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//       .then((res) => {
//         setLoading(false);
//         if (res.ok) {
//           return res.json();
//         } else {
//           return res.json().then((data) => {
//             //console.log(data);
//             const errorM = data.error.message;
//             throw new Error(errorM); // if a problem look in here
//           });
//         } // Automatic logout based on time
//       })
//       .then((data) => {
//         const expirationTime = new Date(
//           new Date().getTime() + +data.expiresIn * 1000
//         );
//         authCtx.login(data.idToken, expirationTime.toISOString());
//         router.push("/FetchingFromDB");
//         // history.replace("/");
//         // Now the user is logged as he has received a tokken.  //console.log(data);
//       })
//       .catch((err) => {
//         //error source is built-in message form the firebase
//         alert(err.message);
//       });
//   };

//   return (
//     <section className={classes.auth}>
//       {/*option b/n login or signUp  */}
//       <form onSubmit={submitHandler}>
//         <div className={classes.control}>
//           <label htmlFor="email">Your Email</label>
//           <input type="email" id="email" ref={usernameInputRef} required />
//         </div>

//         <div className={classes.control}>
//           <label htmlFor="password">Your Password</label>
//           <input
//             type="password"
//             id="password"
//             ref={passwordInputRef}
//             required
//           />
//         </div>

//         <div className={classes.actions}>
//           {!isLoading && (
//             <button>{isLogin ? "Login" : "Create Account"}</button>
//           )}
//           {isLoading && <p>Loading...</p>}

//           <button
//             type="button"
//             className={classes.toggle}
//             onClick={switchAuthModeHandler}
//           >
//             {isLogin ? "Create new account" : "Login with existing account"}
//           </button>
//         </div>
//       </form>
//     </section>
//   );
// };

// export default AuthForm;

//---------------------------------------------------------------------------------------
// // This page holds the signIn, signUp form, duration  and Authentication Api

// import {useRef, useState, useContext } from 'react'
// import AuthenticationContext from '../../Token/LogInAuthentication ';
// import { useHistory } from 'react-router-dom'
// import classes from '../../Token/AuthForm.module.css'

// const LogIn = () =>{
//     const usernameInputRef =  useRef();
//     const passwordInputRef = useRef();
//     const history = useHistory();

//     const authen = useContext(AuthenticationContext);

//     const [isLogin, setLogin]=useState();
//     const [isLoading, setLoading] = useState();

//     const switchHandler = () => {
//         setLogin((prevState) => !prevState);
//     }

//     const submitHandler = (event) => {
//         event.preventDefault();

//         const enterdEmail = usernameInputRef.current.value;
//         const enterdPassword = passwordInputRef.current.value;

//         let url;

//         if(isLogin){
//             url ='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBILHtgI_IbbZADrPf-oTa-3nJPvIL4qSs';

//             setLoading(true);
//         }else {
//             url ='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBILHtgI_IbbZADrPf-oTa-3nJPvIL4qSs';
//         }
//         fetch(url, {
//             method: 'POST',
//             body: JSON.stringify({
//                 email:enterdEmail,
//                 password:enterdPassword,
//                 returnSecureToken: true,
//             }),
//             headers:{
//                 'Content-Type': 'application/json',
//             }
//         }).then(res => {
//             setLoading(false);
//              if(res.ok){
//                 return res.json();
//              }else {
//                 return res.json().then(data => {
//                     const errorMessage = data.error.message;
//                     throw new Error(errorMessage);
//                 });
//             }
//              // automatic time limit logout
//         }).then(data => {
//             const expirationTime = new Date((new Date().getTime() + (data.expiresIn * 1000)));
//             authen.logIn(data.idToken, expirationTime.toISOString());
//             history.replace('/');

//         })
//         .catch(err =>{
//             alert(err.message);
//         } )
//     }

//     return(
//         <section>
//         <h1>{isLogin ? 'Login' : 'Create Account'}</h1>
//             <form onSubmit={submitHandler}>
//                 <div className ={classes.control}>
//                     <label htmlFor='email'>Your Email</label>
//                     <input type='username' id='email' ref={usernameInputRef} />
//                 </div>

//                 <div className={classes.control}>
//                     <label htmlFor='password'>Your Password</label>
//                     <input type='password' id='password' ref={passwordInputRef} />
//                 </div>

//                 <div className ={classes.actions}>
//                 {!isLoading && <button>{isLogin ? 'LogIn' : 'Create Account'}</button>}
//                 {!isLoading && <p>Loading ...</p>}
//                 <button
//                     type='button'
//                     className={classes.toggle}
//                     onclick={switchHandler}>
//                     {isLogin ? 'Create an Account' : 'Use Existing account'}
//                 </button>
//                 </div>
//             </form>
//         </section>
//         );
//         }

// export default LogIn;

//-------------------------------------------------------------

// import React, { useState, useEffect, useRef, useContext } from 'react';
// import { useHistory } from 'react-router-dom';

// import Card from '../UI/Card/Card';
// import classes from './Login.module.css';
// import Button from '../UI/Button/Button';
// import AuthenticationContext from '../../../Token/LogInAuthen';

// // import AuthenticationContext from '../../Token/LogInAuthen'

// const Login = (props) => {

// 		const userenterEmail = useRef();
// 		const userenterPassword = useRef();

// 		const [ enteredEmail, setEnteredEmail ] = useState('');
// 		const [ emailIsValid, setEmailIsValid ] = useState();
// 		const [ enteredPassword, setEnteredPassword ] = useState('');
// 		const [ passwordIsValid, setPasswordIsValid ] = useState();

// 		const [ formIsValid, setFormIsValid ] = useState(false);

// 		const [isLogin, setIsLogin] =useState(true);
// 		const [isLoading, setLoading] = useState(false);

// 		const authentication = useContext(AuthenticationContext);
// 		  const history = useHistory();

// 		  const switchAuthModeHandler = () => {
//     	   setIsLogin((prevState) => !prevState);
//   };

// 		// useEffect(
// 		// 	() => {
// 		// 		setFormIsValid(enteredEmail.includes('@') && enteredPassword.trim().length > 6);
// 		// 	},
// 		// 	[ setFormIsValid, enteredEmail, enteredPassword ]
// 		// );
// 		// -------------------------------------------------------------------
// 		const createAccountHandler = (event) => {
// 			event.preventDefault();

// 			// const email = userenterEmail.current.value;
// 			// const password = userenterPassword.current.value;
// 			// let url;
// 			// const submitHandler = (event)=> {
// 			// event.preventDefault();

//     const enteredEmail = userenterEmail.current.value;
//     const enteredPassword = userenterPassword.current.value;

//     let url;

//     if(isLogin){
//       url  = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBILHtgI_IbbZADrPf-oTa-3nJPvIL4qSs';

//    //setLoading(true);
//     } else {
//       url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBILHtgI_IbbZADrPf-oTa-3nJPvIL4qSs';
//     }
//     fetch(url,
//     {
//       method:'POST',
//       body: JSON.stringify({
//         email: enteredEmail,
//         password: enteredPassword,
//         returnSecureToken: true,
//       }),
//     headers:{
//     'Content-Type': 'application/json',
//      },
//    }
//    ).then(res => {
//     setLoading(false);
//     if(res.ok){
//       return res.json();
//     }else{
//         return res.json().then(data => {
//           //console.log(data);
//          const errorM = data.error.message;
//          throw new Error(errorM); // if a problem look in here
//         });
//       }
//       // Automatic logout based on time
//    }).then(data =>{
//     const expirationTime = new Date((new Date().getTime() + ( +data.expiresIn * 1000)));
//      authentication.login(data.idToken, expirationTime.toISOString());
//     history.replace('/'); // Now the user is logged as he has received a tokken.
//     //console.log(data);
//    })
//    .catch(err => {
//      //error source is built-in message form the firebase
//     alert(err.message);
//    });
//   };

// 			//----------------------------------------
// 		//  if(isLogin){
// 		// 	 //logging in
// 		// 	url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBILHtgI_IbbZADrPf-oTa-3nJPvIL4qSs';
// 		//  }else{
// 		// 	 //signing up
// 		// 	 url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBILHtgI_IbbZADrPf-oTa-3nJPvIL4qSs';
// 		// 	}
// 		//  // const accountHandler = () => {
// 		//  fetch(url,
// 		// {
// 		// 	method: 'POST',
// 		// 	body: JSON.stringify({
// 		// 		email: email,
// 		// 		password: password,
// 		// 		returnSecureToken: true
// 		// 	}),
// 		// 	headers:{
// 		// 		'Content-type' : 'application/json',
// 		// 	},
// 		//  }).then(async res => {
// 		// 	if(res.ok){
// 		// 		return res.json();
// 		// 	}else{
// 		// 		const data = await res.json();
// 		// 		const errorM = data.error.message;
// 		// 		throw new Error(errorM);
// 		// 	}
// 		//  })
// 		//  .catch(err =>{
// 		// 	alert(err.message);
// 		//  });
// 		// }
// 		//-------------------------------------------------------

// 		// const passwordChangeHandler = (event) => {// }, [emailChangeHandler, passwordChangeHandler])

// 	const emailChangeHandler = (event) => {
// 		setEnteredEmail(event.target.value);
// 		setFormIsValid(event.target.value.includes('@') && enteredPassword.trim().length > 6);
// 	};

// 	const passwordChangeHandler = (event) => {
// 		setEnteredPassword(event.target.value);
// 		setFormIsValid(event.target.value.trim().length > 6 && enteredEmail.includes('@'));
// 	};

// 	const validateEmailHandler = () => {
// 		setEmailIsValid(enteredEmail.includes('@'));
// 	};

// 	const validatePasswordHandler = () => {
// 		setPasswordIsValid(enteredPassword.trim().length > 6);
// 	};

// 	// const submitHandler = (event) => {
// 	// 	event.preventDefault();
// 	// 	props.onLogin(enteredEmail, enteredPassword);
// 	// };

// 	return (
// 		  <section className={classes.auth}>
//     {/*option b/n login or signUp  */}
//       <h1>{isLogin ? 'Login '  : 'what ever'}</h1>
//       <form onSubmit={createAccountHandler}>
//         <div className={classes.control}>
//           <label htmlFor='email'>Your Email</label>
//           <input type='email' id='email' ref={userenterEmail} required />
//         </div>
//         <div className={classes.control}>
//           <label htmlFor='password'>Your Password</label>
//           <input type='password' id='password' ref={userenterPassword} required />
//         </div>
//         <div className={classes.actions}>
//           {!isLoading && <button>{isLogin ? 'Login' : 'Create Account'}</button>}
//           {isLoading && <p>Loading...</p>}
//           <button
//             type='button'
//             className={classes.toggle}
//             onClick={switchAuthModeHandler}
//           >
//             {isLogin ? 'Create new account' : 'Login with existing account'}
//           </button>
//         </div>
//       </form>
//     </section>
// 		// <Card className={classes.login}>
// 		// 	<form onSubmit={createAccountHandler}>
// 		// 		<div className={`${classes.control} ${emailIsValid === false ? classes.invalid : ''}`}>
// 		// 			<label htmlFor="email">E-Mail form2</label>
// 		// 			<input
// 		// 				type="email"
// 		// 				id="email"
// 		// 				ref={userenterEmail}
// 		// 				value={enteredEmail}
// 		// 				onChange={emailChangeHandler}
// 		// 				onBlur={validateEmailHandler}
// 		// 			/>
// 		// 		</div>
// 		// 		<div
// 		// 			className={`${classes.control} ${passwordIsValid === false
// 		// 				? classes.invalid
// 		// 				: ''}`}
// 		// 		>
// 		// 			<label htmlFor="password">Password</label>
// 		// 			<input
// 		// 				type="password"
// 		// 				id="password"
// 		// 				ref= {userenterPassword}
// 		// 				value={enteredPassword}
// 		// 				onChange={passwordChangeHandler}
// 		// 				onBlur={validatePasswordHandler}
// 		// 			/>
// 		// 		</div>
// 		// 		<div className={classes.actions}>
// 		// 			<Button
// 		// 				type="submit"
// 		// 				className={classes.btn}
// 		// 				disabled={!formIsValid} // deactivate until verified
// 		// 			> Login </Button>

// 		// 			<button onClick = {createAccountHandler}> Create an account</button>

// 		// 		</div>
// 		// 	</form>
// 		// </Card>
// 	);
// };

// export default Login;
