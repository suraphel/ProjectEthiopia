(() => {
var exports = {};
exports.id = "pages/AuthForm";
exports.ids = ["pages/AuthForm"];
exports.modules = {

/***/ "./components/Token/LogInAuthentication .js":
/*!**************************************************!*\
  !*** ./components/Token/LogInAuthentication .js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthenticationWrapper": () => (/* binding */ AuthenticationWrapper),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "A:\\Projects\\NextJs\\Balemoja_Next\\Balemoja\\components\\Token\\LogInAuthentication .js";


let logoutTimer;
const AuthenticationContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext({
  token: "",
  login: token => {},
  IsloggedIn: false,
  logout: () => {}
});

const timeCalculator = expirationTime => {
  const startTime = new Date().getTime();
  const endingTime = new Date(expirationTime).getTime();
  const remainingTime = endingTime - startTime;
  return remainingTime;
};

const gettingStoredToken = () => {
  const storedToken = localStorage.getItem("token");
  const storedExpirationTime = localStorage.getItem("expirationTime");
  const remainingTime = timeCalculator(storedExpirationTime);

  if (remainingTime < 3600) {
    localStorage.removeItem("token");
  }

  return {
    token: storedToken,
    duration: remainingTime
  };
};

const AuthenticationWrapper = props => {
  const tokenData = gettingStoredToken();
  let startToken;

  if (startToken) {
    startToken = tokenData.data;
  }

  const {
    0: token,
    1: setToken
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(startToken);
  const userIsLoggedIn = !!token; // flips the bool value.

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");

    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  };

  const loginHandler = (token, expirationTime) => {
    setToken("token");
    localStorage.setItem("token", token);
    const remainingTime = timeCalculator(expirationTime);
    logoutTimer = setTimeout(logoutHandler, remainingTime);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (tokenData) {
      setTimeout(logoutHandler, tokenData.duration);
    }
  }, [tokenData]);
  const contextValue = {
    token: token,
    IsloggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(AuthenticationContext.Provider, {
    value: contextValue,
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 70,
    columnNumber: 17
  }, undefined);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthenticationContext);

/***/ }),

/***/ "./components/hooks/user-inputs.js":
/*!*****************************************!*\
  !*** ./components/hooks/user-inputs.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const UserInput = validation => {
  const {
    0: enteredValue,
    1: setEnteredValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const {
    0: isTouced,
    1: setIsTouched
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const valueIsValid = validation(enteredValue);
  const hasError = !valueIsValid && isTouced;

  const valueChangeHandler = event => {
    setEnteredValue(event.target.value);
  };

  const onfocusHandler = event => {
    setIsTouched(true);
  };

  const resetValue = () => {
    setEnteredValue('');
    setIsTouched(false);
  }; // Validation object


  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError: hasError,
    valueChangeHandler,
    onfocusHandler,
    reset: resetValue
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserInput);

/***/ }),

/***/ "./components/ui/button/Button.js":
/*!****************************************!*\
  !*** ./components/ui/button/Button.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _button_Button_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../button/Button.module.css */ "./components/ui/button/Button.module.css");
/* harmony import */ var _button_Button_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_button_Button_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "A:\\Projects\\NextJs\\Balemoja_Next\\Balemoja\\components\\ui\\button\\Button.js";
// import React from 'react';
// import classes from './Button.module.css'
//  const Button = (props) => {
//     return (
//         <button
//         className = {classes.button}
//         type= {props.type || 'button'}
//         onClick={props.onClick}
//         >
//             {props.children}
//         </button>
//     )
// }
// export default Button;



const Button = props => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
    type: props.type,
    className: (_button_Button_module_css__WEBPACK_IMPORTED_MODULE_1___default().button),
    onClick: props.onClick,
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);

/***/ }),

/***/ "./pages/AuthForm.js":
/*!***************************!*\
  !*** ./pages/AuthForm.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Token_LogInAuthentication___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Token/LogInAuthentication  */ "./components/Token/LogInAuthentication .js");
/* harmony import */ var _components_usersAccount_Auth_AuthForm_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/usersAccount/Auth/AuthForm.module.css */ "./components/usersAccount/Auth/AuthForm.module.css");
/* harmony import */ var _components_usersAccount_Auth_AuthForm_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_components_usersAccount_Auth_AuthForm_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ui_button_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ui/button/Button */ "./components/ui/button/Button.js");
/* harmony import */ var _components_hooks_user_inputs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/hooks/user-inputs */ "./components/hooks/user-inputs.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "A:\\Projects\\NextJs\\Balemoja_Next\\Balemoja\\pages\\AuthForm.js";
// LogIn form and validation with firebase








const AuthForm = () => {
  const {
    value: username,
    isValid: validUsername,
    hasError: inValidUsername,
    valueChangeHandler: UsernameChangeHandler,
    onfocusHandler: blurUsername,
    reset: resetUsername
  } = (0,_components_hooks_user_inputs__WEBPACK_IMPORTED_MODULE_4__.default)(value => value.trim() !== "");
  const {
    value: password,
    isValid: validPassword,
    hasError: inValidPassword,
    valueChangeHandler: PasswordChangeHandler,
    onfocusHandler: blurPassword,
    reset: resetPassword
  } = (0,_components_hooks_user_inputs__WEBPACK_IMPORTED_MODULE_4__.default)(value => value.trim() !== "");
  let formValidation = false;

  if (validUsername && validPassword) {
    formValidation = true;
  }

  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  const usernameInputRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const passwordInputRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(); // const history = useHistory();

  const authCtx = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_components_Token_LogInAuthentication___WEBPACK_IMPORTED_MODULE_1__.default); // validation if needed

  const {
    0: isLogin,
    1: setIsLogin
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const {
    0: isLoading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  const switchAuthModeHandler = () => {
    setIsLogin(prevState => !prevState);
  };

  const submitHandler = event => {
    event.preventDefault();

    if (!formValidation) {
      return;
    }

    const enteredEmail = usernameInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    let url;

    if (isLogin) {
      url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=FIREBASE_AUTH";
      setLoading(true);
    } else {
      url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBILHtgI_IbbZADrPf-oTa-3nJPvIL4qSs";
    }

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true
      }),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => {
      setLoading(false);

      if (res.ok) {
        return res.json();
      } else {
        return res.json().then(data => {
          //console.log(data);
          const errorM = data.error.message;
          throw new Error(errorM); // if a problem look in here
        });
      } // Automatic logout based on time

    }).then(data => {
      const expirationTime = new Date(new Date().getTime() + +data.expiresIn * 1000);
      authCtx.login(data.idToken, expirationTime.toISOString());
      router.push("/Gardner"); // history.replace("/");
      // Now the user is logged as he has received a tokken.
      //console.log(data);
    }).catch(err => {
      //error source is built-in message form the firebase
      alert(err.message);
    });
    resetUsername("");
    resetPassword("");
  };

  const usernameInputClasses = inValidUsername ? "form-control invalid" : "form-control ";
  const passwordInputClasses = inValidPassword ? "form-control invalid" : "form-control ";
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("section", {
    className: (_components_usersAccount_Auth_AuthForm_module_css__WEBPACK_IMPORTED_MODULE_6___default().auth),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h1", {
      children: isLogin ? "Log in " : "Sign up"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("form", {
      onSubmit: submitHandler,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: usernameInputClasses,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("label", {
          htmlFor: "email",
          children: "Your Email"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", {
          type: "email",
          id: "email",
          ref: usernameInputRef,
          required: true,
          onBlur: blurUsername,
          onChange: UsernameChangeHandler,
          value: username
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 11
        }, undefined), inValidUsername && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
          className: "error-text",
          children: " Please enter the User-name"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: passwordInputClasses,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("label", {
          htmlFor: "password",
          children: "Your Password"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", {
          type: "password",
          id: "password",
          ref: passwordInputRef,
          required: true,
          onBlur: blurPassword,
          onChange: PasswordChangeHandler,
          value: password
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 11
        }, undefined), inValidPassword && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
          className: "error-text",
          children: " Please enter the password"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: (_components_usersAccount_Auth_AuthForm_module_css__WEBPACK_IMPORTED_MODULE_6___default().actions),
        children: [!isLoading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_ui_button_Button__WEBPACK_IMPORTED_MODULE_3__.default, {
          children: isLogin ? "Login" : "Create Account"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 13
        }, undefined), isLoading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
          children: "Loading..."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 25
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("button", {
          type: "button",
          className: (_components_usersAccount_Auth_AuthForm_module_css__WEBPACK_IMPORTED_MODULE_6___default().toggle),
          onClick: switchAuthModeHandler,
          children: isLogin ? "Create new account" : "Login with existing account"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 124,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthForm);

/***/ }),

/***/ "./components/ui/button/Button.module.css":
/*!************************************************!*\
  !*** ./components/ui/button/Button.module.css ***!
  \************************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"button": "Button_button__5BFCi",
	"focus": "Button_focus__2xwCX"
};


/***/ }),

/***/ "./components/usersAccount/Auth/AuthForm.module.css":
/*!**********************************************************!*\
  !*** ./components/usersAccount/Auth/AuthForm.module.css ***!
  \**********************************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"auth": "AuthForm_auth__3vA2O",
	"control": "AuthForm_control__3sMJR",
	"actions": "AuthForm_actions__2Dv-T",
	"toggle": "AuthForm_toggle__35EIc",
	"button": "AuthForm_button__2_I67"
};


/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/AuthForm.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvQXV0aEZvcm0uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFJRyxXQUFKO0FBRUEsTUFBTUMscUJBQXFCLGdCQUFHSiwwREFBQSxDQUFvQjtBQUMxQ00sRUFBQUEsS0FBSyxFQUFFLEVBRG1DO0FBRTFDQyxFQUFBQSxLQUFLLEVBQUdELEtBQUQsSUFBVyxDQUFFLENBRnNCO0FBRzFDRSxFQUFBQSxVQUFVLEVBQUUsS0FIOEI7QUFJMUNDLEVBQUFBLE1BQU0sRUFBRSxNQUFNLENBQUU7QUFKMEIsQ0FBcEIsQ0FBOUI7O0FBT0EsTUFBTUMsY0FBYyxHQUFJQyxjQUFELElBQW9CO0FBQ25DLFFBQU1DLFNBQVMsR0FBRyxJQUFJQyxJQUFKLEdBQVdDLE9BQVgsRUFBbEI7QUFDQSxRQUFNQyxVQUFVLEdBQUcsSUFBSUYsSUFBSixDQUFTRixjQUFULEVBQXlCRyxPQUF6QixFQUFuQjtBQUNBLFFBQU1FLGFBQWEsR0FBR0QsVUFBVSxHQUFHSCxTQUFuQztBQUNBLFNBQU9JLGFBQVA7QUFDUCxDQUxEOztBQU9BLE1BQU1DLGtCQUFrQixHQUFHLE1BQU07QUFDekIsUUFBTUMsV0FBVyxHQUFHQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsT0FBckIsQ0FBcEI7QUFDQSxRQUFNQyxvQkFBb0IsR0FBR0YsWUFBWSxDQUFDQyxPQUFiLENBQXFCLGdCQUFyQixDQUE3QjtBQUNBLFFBQU1KLGFBQWEsR0FBR04sY0FBYyxDQUFDVyxvQkFBRCxDQUFwQzs7QUFFQSxNQUFJTCxhQUFhLEdBQUcsSUFBcEIsRUFBMEI7QUFDbEJHLElBQUFBLFlBQVksQ0FBQ0csVUFBYixDQUF3QixPQUF4QjtBQUNQOztBQUNELFNBQU87QUFDQ2hCLElBQUFBLEtBQUssRUFBRVksV0FEUjtBQUVDSyxJQUFBQSxRQUFRLEVBQUVQO0FBRlgsR0FBUDtBQUlQLENBWkQ7O0FBY08sTUFBTVEscUJBQXFCLEdBQUlDLEtBQUQsSUFBVztBQUN4QyxRQUFNQyxTQUFTLEdBQUdULGtCQUFrQixFQUFwQztBQUNBLE1BQUlVLFVBQUo7O0FBQ0EsTUFBSUEsVUFBSixFQUFnQjtBQUNSQSxJQUFBQSxVQUFVLEdBQUdELFNBQVMsQ0FBQ0UsSUFBdkI7QUFDUDs7QUFDRCxRQUFNO0FBQUEsT0FBQ3RCLEtBQUQ7QUFBQSxPQUFRdUI7QUFBUixNQUFvQjVCLCtDQUFRLENBQUMwQixVQUFELENBQWxDO0FBQ0EsUUFBTUcsY0FBYyxHQUFHLENBQUMsQ0FBQ3hCLEtBQXpCLENBUHdDLENBT1I7O0FBRWhDLFFBQU15QixhQUFhLEdBQUcsTUFBTTtBQUNwQkYsSUFBQUEsUUFBUSxDQUFDLElBQUQsQ0FBUjtBQUNBVixJQUFBQSxZQUFZLENBQUNHLFVBQWIsQ0FBd0IsT0FBeEI7O0FBQ0EsUUFBSW5CLFdBQUosRUFBaUI7QUFDVDZCLE1BQUFBLFlBQVksQ0FBQzdCLFdBQUQsQ0FBWjtBQUNQO0FBQ1IsR0FORDs7QUFRQSxRQUFNOEIsWUFBWSxHQUFHLENBQUMzQixLQUFELEVBQVFLLGNBQVIsS0FBMkI7QUFDeENrQixJQUFBQSxRQUFRLENBQUMsT0FBRCxDQUFSO0FBQ0FWLElBQUFBLFlBQVksQ0FBQ2UsT0FBYixDQUFxQixPQUFyQixFQUE4QjVCLEtBQTlCO0FBQ0EsVUFBTVUsYUFBYSxHQUFHTixjQUFjLENBQUNDLGNBQUQsQ0FBcEM7QUFDQVIsSUFBQUEsV0FBVyxHQUFHZ0MsVUFBVSxDQUFDSixhQUFELEVBQWdCZixhQUFoQixDQUF4QjtBQUNQLEdBTEQ7O0FBT0FkLEVBQUFBLGdEQUFTLENBQUMsTUFBTTtBQUNSLFFBQUl3QixTQUFKLEVBQWU7QUFDUFMsTUFBQUEsVUFBVSxDQUFDSixhQUFELEVBQWdCTCxTQUFTLENBQUNILFFBQTFCLENBQVY7QUFDUDtBQUNSLEdBSlEsRUFJTixDQUFDRyxTQUFELENBSk0sQ0FBVDtBQU1BLFFBQU1VLFlBQVksR0FBRztBQUNiOUIsSUFBQUEsS0FBSyxFQUFFQSxLQURNO0FBRWJFLElBQUFBLFVBQVUsRUFBRXNCLGNBRkM7QUFHYnZCLElBQUFBLEtBQUssRUFBRTBCLFlBSE07QUFJYnhCLElBQUFBLE1BQU0sRUFBRXNCO0FBSkssR0FBckI7QUFNQSxzQkFDUSw4REFBQyxxQkFBRCxDQUF1QixRQUF2QjtBQUFnQyxTQUFLLEVBQUVLLFlBQXZDO0FBQUEsY0FDU1gsS0FBSyxDQUFDWTtBQURmO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEUjtBQUtQLENBekNNO0FBMENQLGlFQUFlakMscUJBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUVBOztBQUdBLE1BQU1rQyxTQUFTLEdBQUlDLFVBQUQsSUFBZTtBQUM3QixRQUFNO0FBQUEsT0FBQ0MsWUFBRDtBQUFBLE9BQWVDO0FBQWYsTUFBa0N4QywrQ0FBUSxDQUFDLEVBQUQsQ0FBaEQ7QUFDQSxRQUFNO0FBQUEsT0FBQ3lDLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTJCMUMsK0NBQVEsQ0FBQyxFQUFELENBQXpDO0FBRUEsUUFBTTJDLFlBQVksR0FBR0wsVUFBVSxDQUFDQyxZQUFELENBQS9CO0FBQ0EsUUFBTUssUUFBUSxHQUFHLENBQUNELFlBQUQsSUFBaUJGLFFBQWxDOztBQUVBLFFBQU1JLGtCQUFrQixHQUFJQyxLQUFELElBQVU7QUFDakNOLElBQUFBLGVBQWUsQ0FBQ00sS0FBSyxDQUFDQyxNQUFOLENBQWFDLEtBQWQsQ0FBZjtBQUNILEdBRkQ7O0FBSUEsUUFBTUMsY0FBYyxHQUFHSCxLQUFELElBQVc7QUFDN0JKLElBQUFBLFlBQVksQ0FBQyxJQUFELENBQVo7QUFDSCxHQUZEOztBQUlBLFFBQU1RLFVBQVUsR0FBRyxNQUFNO0FBQ3JCVixJQUFBQSxlQUFlLENBQUMsRUFBRCxDQUFmO0FBQ0FFLElBQUFBLFlBQVksQ0FBQyxLQUFELENBQVo7QUFDSCxHQUhELENBZjZCLENBb0I3Qjs7O0FBQ0EsU0FBTztBQUNQTSxJQUFBQSxLQUFLLEVBQUNULFlBREM7QUFFUFksSUFBQUEsT0FBTyxFQUFHUixZQUZIO0FBR1BDLElBQUFBLFFBQVEsRUFBR0EsUUFISjtBQUlQQyxJQUFBQSxrQkFKTztBQUtQSSxJQUFBQSxjQUxPO0FBTVBHLElBQUFBLEtBQUssRUFBQ0Y7QUFOQyxHQUFQO0FBU0gsQ0E5QkQ7O0FBZ0NBLGlFQUFlYixTQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25DQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7OztBQUVBLE1BQU1pQixNQUFNLEdBQUk5QixLQUFELElBQVc7QUFDeEIsc0JBQ0U7QUFDRSxRQUFJLEVBQUVBLEtBQUssQ0FBQytCLElBRGQ7QUFFRSxhQUFTLEVBQUVGLHlFQUZiO0FBR0UsV0FBTyxFQUFFN0IsS0FBSyxDQUFDaUMsT0FIakI7QUFBQSxjQUtHakMsS0FBSyxDQUFDWTtBQUxUO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQVNELENBVkQ7O0FBV0EsaUVBQWVrQixNQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLE1BQU1PLFFBQVEsR0FBRyxNQUFNO0FBQ3JCLFFBQU07QUFDSmIsSUFBQUEsS0FBSyxFQUFFYyxRQURIO0FBRUpYLElBQUFBLE9BQU8sRUFBRVksYUFGTDtBQUdKbkIsSUFBQUEsUUFBUSxFQUFFb0IsZUFITjtBQUlKbkIsSUFBQUEsa0JBQWtCLEVBQUVvQixxQkFKaEI7QUFLSmhCLElBQUFBLGNBQWMsRUFBRWlCLFlBTFo7QUFNSmQsSUFBQUEsS0FBSyxFQUFFZTtBQU5ILE1BT0Y5QixzRUFBUyxDQUFFVyxLQUFELElBQVdBLEtBQUssQ0FBQ29CLElBQU4sT0FBaUIsRUFBN0IsQ0FQYjtBQVNBLFFBQU07QUFDSnBCLElBQUFBLEtBQUssRUFBRXFCLFFBREg7QUFFSmxCLElBQUFBLE9BQU8sRUFBRW1CLGFBRkw7QUFHSjFCLElBQUFBLFFBQVEsRUFBRTJCLGVBSE47QUFJSjFCLElBQUFBLGtCQUFrQixFQUFFMkIscUJBSmhCO0FBS0p2QixJQUFBQSxjQUFjLEVBQUV3QixZQUxaO0FBTUpyQixJQUFBQSxLQUFLLEVBQUVzQjtBQU5ILE1BT0ZyQyxzRUFBUyxDQUFFVyxLQUFELElBQVdBLEtBQUssQ0FBQ29CLElBQU4sT0FBaUIsRUFBN0IsQ0FQYjtBQVNBLE1BQUlPLGNBQWMsR0FBRyxLQUFyQjs7QUFFQSxNQUFJWixhQUFhLElBQUlPLGFBQXJCLEVBQW9DO0FBQ2xDSyxJQUFBQSxjQUFjLEdBQUcsSUFBakI7QUFDRDs7QUFFRCxRQUFNQyxNQUFNLEdBQUdoQixzREFBUyxFQUF4QjtBQUVBLFFBQU1pQixnQkFBZ0IsR0FBR25CLDZDQUFNLEVBQS9CO0FBQ0EsUUFBTW9CLGdCQUFnQixHQUFHcEIsNkNBQU0sRUFBL0IsQ0E1QnFCLENBNkJyQjs7QUFFQSxRQUFNcUIsT0FBTyxHQUFHcEIsaURBQVUsQ0FBQ3hELDJFQUFELENBQTFCLENBL0JxQixDQWdDckI7O0FBQ0EsUUFBTTtBQUFBLE9BQUM2RSxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3QmpGLCtDQUFRLENBQUMsSUFBRCxDQUF0QztBQUNBLFFBQU07QUFBQSxPQUFDa0YsU0FBRDtBQUFBLE9BQVlDO0FBQVosTUFBMEJuRiwrQ0FBUSxDQUFDLEtBQUQsQ0FBeEM7O0FBRUEsUUFBTW9GLHFCQUFxQixHQUFHLE1BQU07QUFDbENILElBQUFBLFVBQVUsQ0FBRUksU0FBRCxJQUFlLENBQUNBLFNBQWpCLENBQVY7QUFDRCxHQUZEOztBQUlBLFFBQU1DLGFBQWEsR0FBSXhDLEtBQUQsSUFBVztBQUMvQkEsSUFBQUEsS0FBSyxDQUFDeUMsY0FBTjs7QUFFQSxRQUFJLENBQUNaLGNBQUwsRUFBcUI7QUFDbkI7QUFDRDs7QUFFRCxVQUFNYSxZQUFZLEdBQUdYLGdCQUFnQixDQUFDWSxPQUFqQixDQUF5QnpDLEtBQTlDO0FBQ0EsVUFBTTBDLGVBQWUsR0FBR1osZ0JBQWdCLENBQUNXLE9BQWpCLENBQXlCekMsS0FBakQ7QUFFQSxRQUFJMkMsR0FBSjs7QUFFQSxRQUFJWCxPQUFKLEVBQWE7QUFDWFcsTUFBQUEsR0FBRyxHQUNELHlGQURGO0FBR0FSLE1BQUFBLFVBQVUsQ0FBQyxJQUFELENBQVY7QUFDRCxLQUxELE1BS087QUFDTFEsTUFBQUEsR0FBRyxHQUNELHVHQURGO0FBRUQ7O0FBQ0RDLElBQUFBLEtBQUssQ0FBQ0QsR0FBRCxFQUFNO0FBQ1RFLE1BQUFBLE1BQU0sRUFBRSxNQURDO0FBRVRDLE1BQUFBLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFDbkJDLFFBQUFBLEtBQUssRUFBRVQsWUFEWTtBQUVuQm5CLFFBQUFBLFFBQVEsRUFBRXFCLGVBRlM7QUFHbkJRLFFBQUFBLGlCQUFpQixFQUFFO0FBSEEsT0FBZixDQUZHO0FBT1RDLE1BQUFBLE9BQU8sRUFBRTtBQUNQLHdCQUFnQjtBQURUO0FBUEEsS0FBTixDQUFMLENBV0dDLElBWEgsQ0FXU0MsR0FBRCxJQUFTO0FBQ2JsQixNQUFBQSxVQUFVLENBQUMsS0FBRCxDQUFWOztBQUNBLFVBQUlrQixHQUFHLENBQUNDLEVBQVIsRUFBWTtBQUNWLGVBQU9ELEdBQUcsQ0FBQ0UsSUFBSixFQUFQO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsZUFBT0YsR0FBRyxDQUFDRSxJQUFKLEdBQVdILElBQVgsQ0FBaUJ6RSxJQUFELElBQVU7QUFDL0I7QUFDQSxnQkFBTTZFLE1BQU0sR0FBRzdFLElBQUksQ0FBQzhFLEtBQUwsQ0FBV0MsT0FBMUI7QUFDQSxnQkFBTSxJQUFJQyxLQUFKLENBQVVILE1BQVYsQ0FBTixDQUgrQixDQUdOO0FBQzFCLFNBSk0sQ0FBUDtBQUtELE9BVlksQ0FXYjs7QUFDRCxLQXZCSCxFQXdCR0osSUF4QkgsQ0F3QlN6RSxJQUFELElBQVU7QUFDZCxZQUFNakIsY0FBYyxHQUFHLElBQUlFLElBQUosQ0FDckIsSUFBSUEsSUFBSixHQUFXQyxPQUFYLEtBQXVCLENBQUNjLElBQUksQ0FBQ2lGLFNBQU4sR0FBa0IsSUFEcEIsQ0FBdkI7QUFHQTdCLE1BQUFBLE9BQU8sQ0FBQ3pFLEtBQVIsQ0FBY3FCLElBQUksQ0FBQ2tGLE9BQW5CLEVBQTRCbkcsY0FBYyxDQUFDb0csV0FBZixFQUE1QjtBQUNBbEMsTUFBQUEsTUFBTSxDQUFDbUMsSUFBUCxDQUFZLFVBQVosRUFMYyxDQU9kO0FBQ0E7QUFDQTtBQUNELEtBbENILEVBbUNHQyxLQW5DSCxDQW1DVUMsR0FBRCxJQUFTO0FBQ2Q7QUFDQUMsTUFBQUEsS0FBSyxDQUFDRCxHQUFHLENBQUNQLE9BQUwsQ0FBTDtBQUNELEtBdENIO0FBd0NBdkMsSUFBQUEsYUFBYSxDQUFDLEVBQUQsQ0FBYjtBQUNBTyxJQUFBQSxhQUFhLENBQUMsRUFBRCxDQUFiO0FBQ0QsR0EvREQ7O0FBaUVBLFFBQU15QyxvQkFBb0IsR0FBR25ELGVBQWUsR0FDeEMsc0JBRHdDLEdBRXhDLGVBRko7QUFJQSxRQUFNb0Qsb0JBQW9CLEdBQUc3QyxlQUFlLEdBQ3hDLHNCQUR3QyxHQUV4QyxlQUZKO0FBSUEsc0JBQ0U7QUFBUyxhQUFTLEVBQUVsQiwrRkFBcEI7QUFBQSw0QkFFRTtBQUFBLGdCQUFLMkIsT0FBTyxHQUFHLFNBQUgsR0FBZTtBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGLGVBR0U7QUFBTSxjQUFRLEVBQUVNLGFBQWhCO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFFNkIsb0JBQWhCO0FBQUEsZ0NBQ0U7QUFBTyxpQkFBTyxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRTtBQUNFLGNBQUksRUFBQyxPQURQO0FBRUUsWUFBRSxFQUFDLE9BRkw7QUFHRSxhQUFHLEVBQUV0QyxnQkFIUDtBQUlFLGtCQUFRLE1BSlY7QUFLRSxnQkFBTSxFQUFFWCxZQUxWO0FBTUUsa0JBQVEsRUFBRUQscUJBTlo7QUFPRSxlQUFLLEVBQUVIO0FBUFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRixFQVdHRSxlQUFlLGlCQUNkO0FBQUcsbUJBQVMsRUFBQyxZQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQWlCRTtBQUFLLGlCQUFTLEVBQUVvRCxvQkFBaEI7QUFBQSxnQ0FDRTtBQUFPLGlCQUFPLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFO0FBQ0UsY0FBSSxFQUFDLFVBRFA7QUFFRSxZQUFFLEVBQUMsVUFGTDtBQUdFLGFBQUcsRUFBRXRDLGdCQUhQO0FBSUUsa0JBQVEsTUFKVjtBQUtFLGdCQUFNLEVBQUVMLFlBTFY7QUFNRSxrQkFBUSxFQUFFRCxxQkFOWjtBQU9FLGVBQUssRUFBRUg7QUFQVDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGLEVBV0dFLGVBQWUsaUJBQ2Q7QUFBRyxtQkFBUyxFQUFDLFlBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBWko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWpCRixlQWdDRTtBQUFLLGlCQUFTLEVBQUVsQixrR0FBaEI7QUFBQSxtQkFDRyxDQUFDNkIsU0FBRCxpQkFDQyw4REFBQyxpRUFBRDtBQUFBLG9CQUFTRixPQUFPLEdBQUcsT0FBSCxHQUFhO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkosRUFJR0UsU0FBUyxpQkFBSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFKaEIsZUFLRTtBQUNFLGNBQUksRUFBQyxRQURQO0FBRUUsbUJBQVMsRUFBRTdCLGlHQUZiO0FBR0UsaUJBQU8sRUFBRStCLHFCQUhYO0FBQUEsb0JBS0dKLE9BQU8sR0FBRyxvQkFBSCxHQUEwQjtBQUxwQztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFoQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBb0RELENBcktEOztBQXVLQSxpRUFBZW5CLFFBQWY7Ozs7Ozs7Ozs7QUNoTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNQQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhbGVtb2phLy4vY29tcG9uZW50cy9Ub2tlbi9Mb2dJbkF1dGhlbnRpY2F0aW9uIC5qcyIsIndlYnBhY2s6Ly9iYWxlbW9qYS8uL2NvbXBvbmVudHMvaG9va3MvdXNlci1pbnB1dHMuanMiLCJ3ZWJwYWNrOi8vYmFsZW1vamEvLi9jb21wb25lbnRzL3VpL2J1dHRvbi9CdXR0b24uanMiLCJ3ZWJwYWNrOi8vYmFsZW1vamEvLi9wYWdlcy9BdXRoRm9ybS5qcyIsIndlYnBhY2s6Ly9iYWxlbW9qYS8uL2NvbXBvbmVudHMvdWkvYnV0dG9uL0J1dHRvbi5tb2R1bGUuY3NzIiwid2VicGFjazovL2JhbGVtb2phLy4vY29tcG9uZW50cy91c2Vyc0FjY291bnQvQXV0aC9BdXRoRm9ybS5tb2R1bGUuY3NzIiwid2VicGFjazovL2JhbGVtb2phL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9iYWxlbW9qYS9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vYmFsZW1vamEvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxubGV0IGxvZ291dFRpbWVyO1xyXG5cclxuY29uc3QgQXV0aGVudGljYXRpb25Db250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCh7XHJcbiAgICAgICAgdG9rZW46IFwiXCIsXHJcbiAgICAgICAgbG9naW46ICh0b2tlbikgPT4ge30sXHJcbiAgICAgICAgSXNsb2dnZWRJbjogZmFsc2UsXHJcbiAgICAgICAgbG9nb3V0OiAoKSA9PiB7fSxcclxufSk7XHJcblxyXG5jb25zdCB0aW1lQ2FsY3VsYXRvciA9IChleHBpcmF0aW9uVGltZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHN0YXJ0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICAgIGNvbnN0IGVuZGluZ1RpbWUgPSBuZXcgRGF0ZShleHBpcmF0aW9uVGltZSkuZ2V0VGltZSgpO1xyXG4gICAgICAgIGNvbnN0IHJlbWFpbmluZ1RpbWUgPSBlbmRpbmdUaW1lIC0gc3RhcnRUaW1lO1xyXG4gICAgICAgIHJldHVybiByZW1haW5pbmdUaW1lO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0dGluZ1N0b3JlZFRva2VuID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHN0b3JlZFRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKTtcclxuICAgICAgICBjb25zdCBzdG9yZWRFeHBpcmF0aW9uVGltZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZXhwaXJhdGlvblRpbWVcIik7XHJcbiAgICAgICAgY29uc3QgcmVtYWluaW5nVGltZSA9IHRpbWVDYWxjdWxhdG9yKHN0b3JlZEV4cGlyYXRpb25UaW1lKTtcclxuXHJcbiAgICAgICAgaWYgKHJlbWFpbmluZ1RpbWUgPCAzNjAwKSB7XHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInRva2VuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgdG9rZW46IHN0b3JlZFRva2VuLFxyXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IHJlbWFpbmluZ1RpbWUsXHJcbiAgICAgICAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBBdXRoZW50aWNhdGlvbldyYXBwZXIgPSAocHJvcHMpID0+IHtcclxuICAgICAgICBjb25zdCB0b2tlbkRhdGEgPSBnZXR0aW5nU3RvcmVkVG9rZW4oKTtcclxuICAgICAgICBsZXQgc3RhcnRUb2tlbjtcclxuICAgICAgICBpZiAoc3RhcnRUb2tlbikge1xyXG4gICAgICAgICAgICAgICAgc3RhcnRUb2tlbiA9IHRva2VuRGF0YS5kYXRhO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBbdG9rZW4sIHNldFRva2VuXSA9IHVzZVN0YXRlKHN0YXJ0VG9rZW4pO1xyXG4gICAgICAgIGNvbnN0IHVzZXJJc0xvZ2dlZEluID0gISF0b2tlbjsgLy8gZmxpcHMgdGhlIGJvb2wgdmFsdWUuXHJcblxyXG4gICAgICAgIGNvbnN0IGxvZ291dEhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRUb2tlbihudWxsKTtcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidG9rZW5cIik7XHJcbiAgICAgICAgICAgICAgICBpZiAobG9nb3V0VGltZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGxvZ291dFRpbWVyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBsb2dpbkhhbmRsZXIgPSAodG9rZW4sIGV4cGlyYXRpb25UaW1lKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRUb2tlbihcInRva2VuXCIpO1xyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2tlblwiLCB0b2tlbik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZW1haW5pbmdUaW1lID0gdGltZUNhbGN1bGF0b3IoZXhwaXJhdGlvblRpbWUpO1xyXG4gICAgICAgICAgICAgICAgbG9nb3V0VGltZXIgPSBzZXRUaW1lb3V0KGxvZ291dEhhbmRsZXIsIHJlbWFpbmluZ1RpbWUpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodG9rZW5EYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQobG9nb3V0SGFuZGxlciwgdG9rZW5EYXRhLmR1cmF0aW9uKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBbdG9rZW5EYXRhXSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbnRleHRWYWx1ZSA9IHtcclxuICAgICAgICAgICAgICAgIHRva2VuOiB0b2tlbixcclxuICAgICAgICAgICAgICAgIElzbG9nZ2VkSW46IHVzZXJJc0xvZ2dlZEluLFxyXG4gICAgICAgICAgICAgICAgbG9naW46IGxvZ2luSGFuZGxlcixcclxuICAgICAgICAgICAgICAgIGxvZ291dDogbG9nb3V0SGFuZGxlcixcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8QXV0aGVudGljYXRpb25Db250ZXh0LlByb3ZpZGVyIHZhbHVlPXtjb250ZXh0VmFsdWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgICA8L0F1dGhlbnRpY2F0aW9uQ29udGV4dC5Qcm92aWRlcj5cclxuICAgICAgICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBBdXRoZW50aWNhdGlvbkNvbnRleHQ7XHJcbiIsImltcG9ydCB7ICB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuXHJcbmNvbnN0IFVzZXJJbnB1dCA9ICh2YWxpZGF0aW9uKSA9PntcclxuICAgIGNvbnN0IFtlbnRlcmVkVmFsdWUsIHNldEVudGVyZWRWYWx1ZV0gPSB1c2VTdGF0ZSgnJyk7IFxyXG4gICAgY29uc3QgW2lzVG91Y2VkLCBzZXRJc1RvdWNoZWRdID0gdXNlU3RhdGUoJycpOyBcclxuXHJcbiAgICBjb25zdCB2YWx1ZUlzVmFsaWQgPSB2YWxpZGF0aW9uKGVudGVyZWRWYWx1ZSk7IFxyXG4gICAgY29uc3QgaGFzRXJyb3IgPSAhdmFsdWVJc1ZhbGlkICYmIGlzVG91Y2VkOyBcclxuXHJcbiAgICBjb25zdCB2YWx1ZUNoYW5nZUhhbmRsZXIgPSAoZXZlbnQpID0+e1xyXG4gICAgICAgIHNldEVudGVyZWRWYWx1ZShldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG9uZm9jdXNIYW5kbGVyID0oZXZlbnQpID0+IHtcclxuICAgICAgICBzZXRJc1RvdWNoZWQodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVzZXRWYWx1ZSA9ICgpID0+IHtcclxuICAgICAgICBzZXRFbnRlcmVkVmFsdWUoJycpO1xyXG4gICAgICAgIHNldElzVG91Y2hlZChmYWxzZSk7IFxyXG4gICAgfVxyXG5cclxuICAgIC8vIFZhbGlkYXRpb24gb2JqZWN0XHJcbiAgICByZXR1cm4ge1xyXG4gICAgdmFsdWU6ZW50ZXJlZFZhbHVlLFxyXG4gICAgaXNWYWxpZCA6IHZhbHVlSXNWYWxpZCxcclxuICAgIGhhc0Vycm9yIDogaGFzRXJyb3IsXHJcbiAgICB2YWx1ZUNoYW5nZUhhbmRsZXIsXHJcbiAgICBvbmZvY3VzSGFuZGxlcixcclxuICAgIHJlc2V0OnJlc2V0VmFsdWUsXHJcbn07XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VySW5wdXQ7IiwiLy8gaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuLy8gaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9CdXR0b24ubW9kdWxlLmNzcydcclxuXHJcbi8vICBjb25zdCBCdXR0b24gPSAocHJvcHMpID0+IHtcclxuLy8gICAgIHJldHVybiAoXHJcbi8vICAgICAgICAgPGJ1dHRvblxyXG4vLyAgICAgICAgIGNsYXNzTmFtZSA9IHtjbGFzc2VzLmJ1dHRvbn1cclxuLy8gICAgICAgICB0eXBlPSB7cHJvcHMudHlwZSB8fCAnYnV0dG9uJ31cclxuLy8gICAgICAgICBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfVxyXG4vLyAgICAgICAgID5cclxuLy8gICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4vLyAgICAgICAgIDwvYnV0dG9uPlxyXG4vLyAgICAgKVxyXG4vLyB9XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBCdXR0b247XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuLi9idXR0b24vQnV0dG9uLm1vZHVsZS5jc3NcIjtcclxuXHJcbmNvbnN0IEJ1dHRvbiA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8YnV0dG9uXHJcbiAgICAgIHR5cGU9e3Byb3BzLnR5cGV9XHJcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259XHJcbiAgICAgIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9XHJcbiAgICA+XHJcbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgIDwvYnV0dG9uPlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjtcclxuIiwiLy8gTG9nSW4gZm9ybSBhbmQgdmFsaWRhdGlvbiB3aXRoIGZpcmViYXNlXG5cbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBdXRoZW50aWNhdGlvbkNvbnRleHQgZnJvbSBcIi4uL2NvbXBvbmVudHMvVG9rZW4vTG9nSW5BdXRoZW50aWNhdGlvbiBcIjtcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuLi9jb21wb25lbnRzL3VzZXJzQWNjb3VudC9BdXRoL0F1dGhGb3JtLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy91aS9idXR0b24vQnV0dG9uXCI7XG5pbXBvcnQgVXNlcklucHV0IGZyb20gXCIuLi9jb21wb25lbnRzL2hvb2tzL3VzZXItaW5wdXRzXCI7XG5cbmNvbnN0IEF1dGhGb3JtID0gKCkgPT4ge1xuICBjb25zdCB7XG4gICAgdmFsdWU6IHVzZXJuYW1lLFxuICAgIGlzVmFsaWQ6IHZhbGlkVXNlcm5hbWUsXG4gICAgaGFzRXJyb3I6IGluVmFsaWRVc2VybmFtZSxcbiAgICB2YWx1ZUNoYW5nZUhhbmRsZXI6IFVzZXJuYW1lQ2hhbmdlSGFuZGxlcixcbiAgICBvbmZvY3VzSGFuZGxlcjogYmx1clVzZXJuYW1lLFxuICAgIHJlc2V0OiByZXNldFVzZXJuYW1lLFxuICB9ID0gVXNlcklucHV0KCh2YWx1ZSkgPT4gdmFsdWUudHJpbSgpICE9PSBcIlwiKTtcblxuICBjb25zdCB7XG4gICAgdmFsdWU6IHBhc3N3b3JkLFxuICAgIGlzVmFsaWQ6IHZhbGlkUGFzc3dvcmQsXG4gICAgaGFzRXJyb3I6IGluVmFsaWRQYXNzd29yZCxcbiAgICB2YWx1ZUNoYW5nZUhhbmRsZXI6IFBhc3N3b3JkQ2hhbmdlSGFuZGxlcixcbiAgICBvbmZvY3VzSGFuZGxlcjogYmx1clBhc3N3b3JkLFxuICAgIHJlc2V0OiByZXNldFBhc3N3b3JkLFxuICB9ID0gVXNlcklucHV0KCh2YWx1ZSkgPT4gdmFsdWUudHJpbSgpICE9PSBcIlwiKTtcblxuICBsZXQgZm9ybVZhbGlkYXRpb24gPSBmYWxzZTtcblxuICBpZiAodmFsaWRVc2VybmFtZSAmJiB2YWxpZFBhc3N3b3JkKSB7XG4gICAgZm9ybVZhbGlkYXRpb24gPSB0cnVlO1xuICB9XG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgdXNlcm5hbWVJbnB1dFJlZiA9IHVzZVJlZigpO1xuICBjb25zdCBwYXNzd29yZElucHV0UmVmID0gdXNlUmVmKCk7XG4gIC8vIGNvbnN0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KCk7XG5cbiAgY29uc3QgYXV0aEN0eCA9IHVzZUNvbnRleHQoQXV0aGVudGljYXRpb25Db250ZXh0KTtcbiAgLy8gdmFsaWRhdGlvbiBpZiBuZWVkZWRcbiAgY29uc3QgW2lzTG9naW4sIHNldElzTG9naW5dID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IHN3aXRjaEF1dGhNb2RlSGFuZGxlciA9ICgpID0+IHtcbiAgICBzZXRJc0xvZ2luKChwcmV2U3RhdGUpID0+ICFwcmV2U3RhdGUpO1xuICB9O1xuXG4gIGNvbnN0IHN1Ym1pdEhhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgaWYgKCFmb3JtVmFsaWRhdGlvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGVudGVyZWRFbWFpbCA9IHVzZXJuYW1lSW5wdXRSZWYuY3VycmVudC52YWx1ZTtcbiAgICBjb25zdCBlbnRlcmVkUGFzc3dvcmQgPSBwYXNzd29yZElucHV0UmVmLmN1cnJlbnQudmFsdWU7XG5cbiAgICBsZXQgdXJsO1xuXG4gICAgaWYgKGlzTG9naW4pIHtcbiAgICAgIHVybCA9XG4gICAgICAgIFwiaHR0cHM6Ly9pZGVudGl0eXRvb2xraXQuZ29vZ2xlYXBpcy5jb20vdjEvYWNjb3VudHM6c2lnbkluV2l0aFBhc3N3b3JkP2tleT1GSVJFQkFTRV9BVVRIXCI7XG5cbiAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHVybCA9XG4gICAgICAgIFwiaHR0cHM6Ly9pZGVudGl0eXRvb2xraXQuZ29vZ2xlYXBpcy5jb20vdjEvYWNjb3VudHM6c2lnblVwP2tleT1BSXphU3lCSUxIdGdJX0liYlpBRHJQZi1vVGEtM25KUHZJTDRxU3NcIjtcbiAgICB9XG4gICAgZmV0Y2godXJsLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBlbWFpbDogZW50ZXJlZEVtYWlsLFxuICAgICAgICBwYXNzd29yZDogZW50ZXJlZFBhc3N3b3JkLFxuICAgICAgICByZXR1cm5TZWN1cmVUb2tlbjogdHJ1ZSxcbiAgICAgIH0pLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIH0sXG4gICAgfSlcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIGlmIChyZXMub2spIHtcbiAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgY29uc3QgZXJyb3JNID0gZGF0YS5lcnJvci5tZXNzYWdlO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yTSk7IC8vIGlmIGEgcHJvYmxlbSBsb29rIGluIGhlcmVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBBdXRvbWF0aWMgbG9nb3V0IGJhc2VkIG9uIHRpbWVcbiAgICAgIH0pXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBjb25zdCBleHBpcmF0aW9uVGltZSA9IG5ldyBEYXRlKFxuICAgICAgICAgIG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgK2RhdGEuZXhwaXJlc0luICogMTAwMFxuICAgICAgICApO1xuICAgICAgICBhdXRoQ3R4LmxvZ2luKGRhdGEuaWRUb2tlbiwgZXhwaXJhdGlvblRpbWUudG9JU09TdHJpbmcoKSk7XG4gICAgICAgIHJvdXRlci5wdXNoKFwiL0dhcmRuZXJcIik7XG5cbiAgICAgICAgLy8gaGlzdG9yeS5yZXBsYWNlKFwiL1wiKTtcbiAgICAgICAgLy8gTm93IHRoZSB1c2VyIGlzIGxvZ2dlZCBhcyBoZSBoYXMgcmVjZWl2ZWQgYSB0b2trZW4uXG4gICAgICAgIC8vY29uc29sZS5sb2coZGF0YSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgLy9lcnJvciBzb3VyY2UgaXMgYnVpbHQtaW4gbWVzc2FnZSBmb3JtIHRoZSBmaXJlYmFzZVxuICAgICAgICBhbGVydChlcnIubWVzc2FnZSk7XG4gICAgICB9KTtcblxuICAgIHJlc2V0VXNlcm5hbWUoXCJcIik7XG4gICAgcmVzZXRQYXNzd29yZChcIlwiKTtcbiAgfTtcblxuICBjb25zdCB1c2VybmFtZUlucHV0Q2xhc3NlcyA9IGluVmFsaWRVc2VybmFtZVxuICAgID8gXCJmb3JtLWNvbnRyb2wgaW52YWxpZFwiXG4gICAgOiBcImZvcm0tY29udHJvbCBcIjtcblxuICBjb25zdCBwYXNzd29yZElucHV0Q2xhc3NlcyA9IGluVmFsaWRQYXNzd29yZFxuICAgID8gXCJmb3JtLWNvbnRyb2wgaW52YWxpZFwiXG4gICAgOiBcImZvcm0tY29udHJvbCBcIjtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5hdXRofT5cbiAgICAgIHsvKm9wdGlvbiBiL24gbG9naW4gb3Igc2lnblVwICAqL31cbiAgICAgIDxoMT57aXNMb2dpbiA/IFwiTG9nIGluIFwiIDogXCJTaWduIHVwXCJ9PC9oMT5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXtzdWJtaXRIYW5kbGVyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3VzZXJuYW1lSW5wdXRDbGFzc2VzfT5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+WW91ciBFbWFpbDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXG4gICAgICAgICAgICByZWY9e3VzZXJuYW1lSW5wdXRSZWZ9XG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgb25CbHVyPXtibHVyVXNlcm5hbWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17VXNlcm5hbWVDaGFuZ2VIYW5kbGVyfVxuICAgICAgICAgICAgdmFsdWU9e3VzZXJuYW1lfVxuICAgICAgICAgIC8+XG4gICAgICAgICAge2luVmFsaWRVc2VybmFtZSAmJiAoXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJlcnJvci10ZXh0XCI+IFBsZWFzZSBlbnRlciB0aGUgVXNlci1uYW1lPC9wPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtwYXNzd29yZElucHV0Q2xhc3Nlc30+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiPllvdXIgUGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgcmVmPXtwYXNzd29yZElucHV0UmVmfVxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIG9uQmx1cj17Ymx1clBhc3N3b3JkfVxuICAgICAgICAgICAgb25DaGFuZ2U9e1Bhc3N3b3JkQ2hhbmdlSGFuZGxlcn1cbiAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIHtpblZhbGlkUGFzc3dvcmQgJiYgKFxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZXJyb3ItdGV4dFwiPiBQbGVhc2UgZW50ZXIgdGhlIHBhc3N3b3JkPC9wPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5hY3Rpb25zfT5cbiAgICAgICAgICB7IWlzTG9hZGluZyAmJiAoXG4gICAgICAgICAgICA8QnV0dG9uPntpc0xvZ2luID8gXCJMb2dpblwiIDogXCJDcmVhdGUgQWNjb3VudFwifTwvQnV0dG9uPlxuICAgICAgICAgICl9XG4gICAgICAgICAge2lzTG9hZGluZyAmJiA8cD5Mb2FkaW5nLi4uPC9wPn1cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50b2dnbGV9XG4gICAgICAgICAgICBvbkNsaWNrPXtzd2l0Y2hBdXRoTW9kZUhhbmRsZXJ9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2lzTG9naW4gPyBcIkNyZWF0ZSBuZXcgYWNjb3VudFwiIDogXCJMb2dpbiB3aXRoIGV4aXN0aW5nIGFjY291bnRcIn1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXV0aEZvcm07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJidXR0b25cIjogXCJCdXR0b25fYnV0dG9uX181QkZDaVwiLFxuXHRcImZvY3VzXCI6IFwiQnV0dG9uX2ZvY3VzX18yeHdDWFwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYXV0aFwiOiBcIkF1dGhGb3JtX2F1dGhfXzN2QTJPXCIsXG5cdFwiY29udHJvbFwiOiBcIkF1dGhGb3JtX2NvbnRyb2xfXzNzTUpSXCIsXG5cdFwiYWN0aW9uc1wiOiBcIkF1dGhGb3JtX2FjdGlvbnNfXzJEdi1UXCIsXG5cdFwidG9nZ2xlXCI6IFwiQXV0aEZvcm1fdG9nZ2xlX18zNUVJY1wiLFxuXHRcImJ1dHRvblwiOiBcIkF1dGhGb3JtX2J1dHRvbl9fMl9JNjdcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImxvZ291dFRpbWVyIiwiQXV0aGVudGljYXRpb25Db250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInRva2VuIiwibG9naW4iLCJJc2xvZ2dlZEluIiwibG9nb3V0IiwidGltZUNhbGN1bGF0b3IiLCJleHBpcmF0aW9uVGltZSIsInN0YXJ0VGltZSIsIkRhdGUiLCJnZXRUaW1lIiwiZW5kaW5nVGltZSIsInJlbWFpbmluZ1RpbWUiLCJnZXR0aW5nU3RvcmVkVG9rZW4iLCJzdG9yZWRUb2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzdG9yZWRFeHBpcmF0aW9uVGltZSIsInJlbW92ZUl0ZW0iLCJkdXJhdGlvbiIsIkF1dGhlbnRpY2F0aW9uV3JhcHBlciIsInByb3BzIiwidG9rZW5EYXRhIiwic3RhcnRUb2tlbiIsImRhdGEiLCJzZXRUb2tlbiIsInVzZXJJc0xvZ2dlZEluIiwibG9nb3V0SGFuZGxlciIsImNsZWFyVGltZW91dCIsImxvZ2luSGFuZGxlciIsInNldEl0ZW0iLCJzZXRUaW1lb3V0IiwiY29udGV4dFZhbHVlIiwiY2hpbGRyZW4iLCJVc2VySW5wdXQiLCJ2YWxpZGF0aW9uIiwiZW50ZXJlZFZhbHVlIiwic2V0RW50ZXJlZFZhbHVlIiwiaXNUb3VjZWQiLCJzZXRJc1RvdWNoZWQiLCJ2YWx1ZUlzVmFsaWQiLCJoYXNFcnJvciIsInZhbHVlQ2hhbmdlSGFuZGxlciIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJvbmZvY3VzSGFuZGxlciIsInJlc2V0VmFsdWUiLCJpc1ZhbGlkIiwicmVzZXQiLCJjbGFzc2VzIiwiQnV0dG9uIiwidHlwZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJ1c2VSZWYiLCJ1c2VDb250ZXh0IiwidXNlUm91dGVyIiwiQXV0aEZvcm0iLCJ1c2VybmFtZSIsInZhbGlkVXNlcm5hbWUiLCJpblZhbGlkVXNlcm5hbWUiLCJVc2VybmFtZUNoYW5nZUhhbmRsZXIiLCJibHVyVXNlcm5hbWUiLCJyZXNldFVzZXJuYW1lIiwidHJpbSIsInBhc3N3b3JkIiwidmFsaWRQYXNzd29yZCIsImluVmFsaWRQYXNzd29yZCIsIlBhc3N3b3JkQ2hhbmdlSGFuZGxlciIsImJsdXJQYXNzd29yZCIsInJlc2V0UGFzc3dvcmQiLCJmb3JtVmFsaWRhdGlvbiIsInJvdXRlciIsInVzZXJuYW1lSW5wdXRSZWYiLCJwYXNzd29yZElucHV0UmVmIiwiYXV0aEN0eCIsImlzTG9naW4iLCJzZXRJc0xvZ2luIiwiaXNMb2FkaW5nIiwic2V0TG9hZGluZyIsInN3aXRjaEF1dGhNb2RlSGFuZGxlciIsInByZXZTdGF0ZSIsInN1Ym1pdEhhbmRsZXIiLCJwcmV2ZW50RGVmYXVsdCIsImVudGVyZWRFbWFpbCIsImN1cnJlbnQiLCJlbnRlcmVkUGFzc3dvcmQiLCJ1cmwiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZW1haWwiLCJyZXR1cm5TZWN1cmVUb2tlbiIsImhlYWRlcnMiLCJ0aGVuIiwicmVzIiwib2siLCJqc29uIiwiZXJyb3JNIiwiZXJyb3IiLCJtZXNzYWdlIiwiRXJyb3IiLCJleHBpcmVzSW4iLCJpZFRva2VuIiwidG9JU09TdHJpbmciLCJwdXNoIiwiY2F0Y2giLCJlcnIiLCJhbGVydCIsInVzZXJuYW1lSW5wdXRDbGFzc2VzIiwicGFzc3dvcmRJbnB1dENsYXNzZXMiLCJhdXRoIiwiYWN0aW9ucyIsInRvZ2dsZSJdLCJzb3VyY2VSb290IjoiIn0=