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
/* harmony export */   "AuthContextProvider": () => (/* binding */ AuthContextProvider),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "A:\\Projects\\NextJs\\Balemoja_Next\\Balemoja\\components\\Token\\LogInAuthentication .js";
 // const localhost = dynamic(
//   () => import("../components/chatroom/chatComponents"),
//   {
//     ssr: false,
//   }
// );
// import Cookies from "cookies";


let logoutTimer;
const AuthenContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext({
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
}; // function parseCookies(req) {
//   return cookie.parse(req ? req.headers.cookie || "" : document.cookie);
// }
// gettingStoredToken.getIntialProps = ({ req, res }) => {
//   const cookies = new Cookies(req, res);
//   // parseCookies(req);
//   cookies.get("cname");
//   return {
//     works: cookies.value,
//   };
//   console.log(cname);
// };


const gettingStoredToken = () => {
  // const localhost = window.localhost();
  // console.log("localhosta");
  const storedToken = localhost.getItem("token");
  const storedExpirationTime = localStorage.getItem("expirationTime");
  const remainingTime = timeCalculator(storedExpirationTime);

  if (remainingTime < 7200) {
    localStorage.removeItem("token");
  }

  return {
    token: storedToken,
    duration: remainingTime
  };
};

const AuthContextProvider = props => {
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
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(AuthenContext.Provider, {
    value: contextValue,
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 98,
    columnNumber: 5
  }, undefined);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthenContext);

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
  } = (0,_components_hooks_user_inputs__WEBPACK_IMPORTED_MODULE_4__.default)(value => value.trim() !== ""); // const history = useHistory();

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
      url = // this goes to the test page of the server
      // "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBILHtgI_IbbZADrPf-oTa-3nJPvIL4qSs";
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD2dHvMXmJE9RIAgPwJvc09z8L8irh0Vmc";
      setLoading(true);
    } else {
      url = // "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBILHtgI_IbbZADrPf-oTa-3nJPvIL4qSs";
      // for the test page and it works
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD2dHvMXmJE9RIAgPwJvc09z8L8irh0Vmc";
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
          authCtx.login(data.idToken);
          const errorM = data.error.message;
          throw new Error(errorM); // if a problem look in here
        });
      } // Automatic logout based on time

    }).then(data => {
      console.log("if it went well" + data);
      const expirationTime = new Date(new Date().getTime() + +data.expiresIn * 3600);
      authCtx.login(data.idToken, expirationTime.toISOString());
      router.push("/FetchingFromDB"); //testing
      // history.replace("/");
      // Now the user is logged as he has received a tokken.
    }).catch(err => {
      //error source is built-in message from firebase
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
      lineNumber: 135,
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
          lineNumber: 138,
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
          lineNumber: 139,
          columnNumber: 11
        }, undefined), inValidUsername && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
          className: "error-text",
          children: " Please enter the User-name"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: passwordInputClasses,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("label", {
          htmlFor: "password",
          children: "Your Password"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 154,
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
          lineNumber: 155,
          columnNumber: 11
        }, undefined), inValidPassword && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
          className: "error-text",
          children: " Please enter the password"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: (_components_usersAccount_Auth_AuthForm_module_css__WEBPACK_IMPORTED_MODULE_6___default().actions),
        children: [!isLoading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_ui_button_Button__WEBPACK_IMPORTED_MODULE_3__.default, {
          children: isLogin ? "Login" : "Create Account"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 13
        }, undefined), isLoading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
          children: "Loading..."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 25
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("button", {
          type: "button",
          className: (_components_usersAccount_Auth_AuthForm_module_css__WEBPACK_IMPORTED_MODULE_6___default().toggle),
          onClick: switchAuthModeHandler,
          children: isLogin ? "Create new account" : "Login with existing account"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 133,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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MEI7QUFMcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBaENGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQW9ERCxDQTVLRDs7QUE4S0EsaUVBQWVuQixRQUFmOzs7Ozs7Ozs7O0FDekxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDUEE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYWxlbW9qYS8uL2NvbXBvbmVudHMvVG9rZW4vTG9nSW5BdXRoZW50aWNhdGlvbiAuanMiLCJ3ZWJwYWNrOi8vYmFsZW1vamEvLi9jb21wb25lbnRzL2hvb2tzL3VzZXItaW5wdXRzLmpzIiwid2VicGFjazovL2JhbGVtb2phLy4vY29tcG9uZW50cy91aS9idXR0b24vQnV0dG9uLmpzIiwid2VicGFjazovL2JhbGVtb2phLy4vcGFnZXMvQXV0aEZvcm0uanMiLCJ3ZWJwYWNrOi8vYmFsZW1vamEvLi9jb21wb25lbnRzL3VpL2J1dHRvbi9CdXR0b24ubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9iYWxlbW9qYS8uL2NvbXBvbmVudHMvdXNlcnNBY2NvdW50L0F1dGgvQXV0aEZvcm0ubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9iYWxlbW9qYS9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vYmFsZW1vamEvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2JhbGVtb2phL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbi8vIGNvbnN0IGxvY2FsaG9zdCA9IGR5bmFtaWMoXHJcbi8vICAgKCkgPT4gaW1wb3J0KFwiLi4vY29tcG9uZW50cy9jaGF0cm9vbS9jaGF0Q29tcG9uZW50c1wiKSxcclxuLy8gICB7XHJcbi8vICAgICBzc3I6IGZhbHNlLFxyXG4vLyAgIH1cclxuLy8gKTtcclxuXHJcbi8vIGltcG9ydCBDb29raWVzIGZyb20gXCJjb29raWVzXCI7XHJcblxyXG5sZXQgbG9nb3V0VGltZXI7XHJcblxyXG5jb25zdCBBdXRoZW5Db250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCh7XHJcbiAgdG9rZW46IFwiXCIsXHJcbiAgbG9naW46ICh0b2tlbikgPT4ge30sXHJcbiAgSXNsb2dnZWRJbjogZmFsc2UsXHJcbiAgbG9nb3V0OiAoKSA9PiB7fSxcclxufSk7XHJcblxyXG5jb25zdCB0aW1lQ2FsY3VsYXRvciA9IChleHBpcmF0aW9uVGltZSkgPT4ge1xyXG4gIGNvbnN0IHN0YXJ0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gIGNvbnN0IGVuZGluZ1RpbWUgPSBuZXcgRGF0ZShleHBpcmF0aW9uVGltZSkuZ2V0VGltZSgpO1xyXG4gIGNvbnN0IHJlbWFpbmluZ1RpbWUgPSBlbmRpbmdUaW1lIC0gc3RhcnRUaW1lO1xyXG4gIHJldHVybiByZW1haW5pbmdUaW1lO1xyXG59O1xyXG5cclxuLy8gZnVuY3Rpb24gcGFyc2VDb29raWVzKHJlcSkge1xyXG4vLyAgIHJldHVybiBjb29raWUucGFyc2UocmVxID8gcmVxLmhlYWRlcnMuY29va2llIHx8IFwiXCIgOiBkb2N1bWVudC5jb29raWUpO1xyXG4vLyB9XHJcblxyXG4vLyBnZXR0aW5nU3RvcmVkVG9rZW4uZ2V0SW50aWFsUHJvcHMgPSAoeyByZXEsIHJlcyB9KSA9PiB7XHJcbi8vICAgY29uc3QgY29va2llcyA9IG5ldyBDb29raWVzKHJlcSwgcmVzKTtcclxuLy8gICAvLyBwYXJzZUNvb2tpZXMocmVxKTtcclxuXHJcbi8vICAgY29va2llcy5nZXQoXCJjbmFtZVwiKTtcclxuXHJcbi8vICAgcmV0dXJuIHtcclxuLy8gICAgIHdvcmtzOiBjb29raWVzLnZhbHVlLFxyXG4vLyAgIH07XHJcblxyXG4vLyAgIGNvbnNvbGUubG9nKGNuYW1lKTtcclxuLy8gfTtcclxuXHJcbmNvbnN0IGdldHRpbmdTdG9yZWRUb2tlbiA9ICgpID0+IHtcclxuICAvLyBjb25zdCBsb2NhbGhvc3QgPSB3aW5kb3cubG9jYWxob3N0KCk7XHJcbiAgLy8gY29uc29sZS5sb2coXCJsb2NhbGhvc3RhXCIpO1xyXG4gIGNvbnN0IHN0b3JlZFRva2VuID0gbG9jYWxob3N0LmdldEl0ZW0oXCJ0b2tlblwiKTtcclxuICBjb25zdCBzdG9yZWRFeHBpcmF0aW9uVGltZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZXhwaXJhdGlvblRpbWVcIik7XHJcbiAgY29uc3QgcmVtYWluaW5nVGltZSA9IHRpbWVDYWxjdWxhdG9yKHN0b3JlZEV4cGlyYXRpb25UaW1lKTtcclxuXHJcbiAgaWYgKHJlbWFpbmluZ1RpbWUgPCA3MjAwKSB7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInRva2VuXCIpO1xyXG4gIH1cclxuICByZXR1cm4ge1xyXG4gICAgdG9rZW46IHN0b3JlZFRva2VuLFxyXG4gICAgZHVyYXRpb246IHJlbWFpbmluZ1RpbWUsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBBdXRoQ29udGV4dFByb3ZpZGVyID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgdG9rZW5EYXRhID0gZ2V0dGluZ1N0b3JlZFRva2VuKCk7XHJcbiAgbGV0IHN0YXJ0VG9rZW47XHJcbiAgaWYgKHN0YXJ0VG9rZW4pIHtcclxuICAgIHN0YXJ0VG9rZW4gPSB0b2tlbkRhdGEuZGF0YTtcclxuICB9XHJcbiAgY29uc3QgW3Rva2VuLCBzZXRUb2tlbl0gPSB1c2VTdGF0ZShzdGFydFRva2VuKTtcclxuICBjb25zdCB1c2VySXNMb2dnZWRJbiA9ICEhdG9rZW47IC8vIGZsaXBzIHRoZSBib29sIHZhbHVlLlxyXG5cclxuICBjb25zdCBsb2dvdXRIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgc2V0VG9rZW4obnVsbCk7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInRva2VuXCIpO1xyXG4gICAgaWYgKGxvZ291dFRpbWVyKSB7XHJcbiAgICAgIGNsZWFyVGltZW91dChsb2dvdXRUaW1lcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbG9naW5IYW5kbGVyID0gKHRva2VuLCBleHBpcmF0aW9uVGltZSkgPT4ge1xyXG4gICAgc2V0VG9rZW4oXCJ0b2tlblwiKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9rZW5cIiwgdG9rZW4pO1xyXG4gICAgY29uc3QgcmVtYWluaW5nVGltZSA9IHRpbWVDYWxjdWxhdG9yKGV4cGlyYXRpb25UaW1lKTtcclxuICAgIGxvZ291dFRpbWVyID0gc2V0VGltZW91dChsb2dvdXRIYW5kbGVyLCByZW1haW5pbmdUaW1lKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHRva2VuRGF0YSkge1xyXG4gICAgICBzZXRUaW1lb3V0KGxvZ291dEhhbmRsZXIsIHRva2VuRGF0YS5kdXJhdGlvbik7XHJcbiAgICB9XHJcbiAgfSwgW3Rva2VuRGF0YV0pO1xyXG5cclxuICBjb25zdCBjb250ZXh0VmFsdWUgPSB7XHJcbiAgICB0b2tlbjogdG9rZW4sXHJcbiAgICBJc2xvZ2dlZEluOiB1c2VySXNMb2dnZWRJbixcclxuICAgIGxvZ2luOiBsb2dpbkhhbmRsZXIsXHJcbiAgICBsb2dvdXQ6IGxvZ291dEhhbmRsZXIsXHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPEF1dGhlbkNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2NvbnRleHRWYWx1ZX0+XHJcbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgIDwvQXV0aGVuQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBBdXRoZW5Db250ZXh0O1xyXG4iLCJpbXBvcnQgeyAgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcblxyXG5jb25zdCBVc2VySW5wdXQgPSAodmFsaWRhdGlvbikgPT57XHJcbiAgICBjb25zdCBbZW50ZXJlZFZhbHVlLCBzZXRFbnRlcmVkVmFsdWVdID0gdXNlU3RhdGUoJycpOyBcclxuICAgIGNvbnN0IFtpc1RvdWNlZCwgc2V0SXNUb3VjaGVkXSA9IHVzZVN0YXRlKCcnKTsgXHJcblxyXG4gICAgY29uc3QgdmFsdWVJc1ZhbGlkID0gdmFsaWRhdGlvbihlbnRlcmVkVmFsdWUpOyBcclxuICAgIGNvbnN0IGhhc0Vycm9yID0gIXZhbHVlSXNWYWxpZCAmJiBpc1RvdWNlZDsgXHJcblxyXG4gICAgY29uc3QgdmFsdWVDaGFuZ2VIYW5kbGVyID0gKGV2ZW50KSA9PntcclxuICAgICAgICBzZXRFbnRlcmVkVmFsdWUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvbmZvY3VzSGFuZGxlciA9KGV2ZW50KSA9PiB7XHJcbiAgICAgICAgc2V0SXNUb3VjaGVkKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlc2V0VmFsdWUgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0RW50ZXJlZFZhbHVlKCcnKTtcclxuICAgICAgICBzZXRJc1RvdWNoZWQoZmFsc2UpOyBcclxuICAgIH1cclxuXHJcbiAgICAvLyBWYWxpZGF0aW9uIG9iamVjdFxyXG4gICAgcmV0dXJuIHtcclxuICAgIHZhbHVlOmVudGVyZWRWYWx1ZSxcclxuICAgIGlzVmFsaWQgOiB2YWx1ZUlzVmFsaWQsXHJcbiAgICBoYXNFcnJvciA6IGhhc0Vycm9yLFxyXG4gICAgdmFsdWVDaGFuZ2VIYW5kbGVyLFxyXG4gICAgb25mb2N1c0hhbmRsZXIsXHJcbiAgICByZXNldDpyZXNldFZhbHVlLFxyXG59O1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlcklucHV0OyIsIi8vIGltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbi8vIGltcG9ydCBjbGFzc2VzIGZyb20gJy4vQnV0dG9uLm1vZHVsZS5jc3MnXHJcblxyXG4vLyAgY29uc3QgQnV0dG9uID0gKHByb3BzKSA9PiB7XHJcbi8vICAgICByZXR1cm4gKFxyXG4vLyAgICAgICAgIDxidXR0b25cclxuLy8gICAgICAgICBjbGFzc05hbWUgPSB7Y2xhc3Nlcy5idXR0b259XHJcbi8vICAgICAgICAgdHlwZT0ge3Byb3BzLnR5cGUgfHwgJ2J1dHRvbid9XHJcbi8vICAgICAgICAgb25DbGljaz17cHJvcHMub25DbGlja31cclxuLy8gICAgICAgICA+XHJcbi8vICAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuLy8gICAgICAgICA8L2J1dHRvbj5cclxuLy8gICAgIClcclxuLy8gfVxyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgQnV0dG9uO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi4vYnV0dG9uL0J1dHRvbi5tb2R1bGUuY3NzXCI7XHJcblxyXG5jb25zdCBCdXR0b24gPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGJ1dHRvblxyXG4gICAgICB0eXBlPXtwcm9wcy50eXBlfVxyXG4gICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufVxyXG4gICAgICBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfVxyXG4gICAgPlxyXG4gICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICA8L2J1dHRvbj5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBCdXR0b247XHJcbiIsIi8vIExvZ0luIGZvcm0gYW5kIHZhbGlkYXRpb24gd2l0aCBmaXJlYmFzZVxuXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQXV0aGVuQ29udGV4dCBmcm9tIFwiLi4vY29tcG9uZW50cy9Ub2tlbi9Mb2dJbkF1dGhlbnRpY2F0aW9uIFwiO1xuXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi4vY29tcG9uZW50cy91c2Vyc0FjY291bnQvQXV0aC9BdXRoRm9ybS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvdWkvYnV0dG9uL0J1dHRvblwiO1xuaW1wb3J0IFVzZXJJbnB1dCBmcm9tIFwiLi4vY29tcG9uZW50cy9ob29rcy91c2VyLWlucHV0c1wiO1xuaW1wb3J0IHsgdXNlSGlzdG9yeSB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5jb25zdCBBdXRoRm9ybSA9ICgpID0+IHtcbiAgY29uc3Qge1xuICAgIHZhbHVlOiB1c2VybmFtZSxcbiAgICBpc1ZhbGlkOiB2YWxpZFVzZXJuYW1lLFxuICAgIGhhc0Vycm9yOiBpblZhbGlkVXNlcm5hbWUsXG4gICAgdmFsdWVDaGFuZ2VIYW5kbGVyOiBVc2VybmFtZUNoYW5nZUhhbmRsZXIsXG4gICAgb25mb2N1c0hhbmRsZXI6IGJsdXJVc2VybmFtZSxcbiAgICByZXNldDogcmVzZXRVc2VybmFtZSxcbiAgfSA9IFVzZXJJbnB1dCgodmFsdWUpID0+IHZhbHVlLnRyaW0oKSAhPT0gXCJcIik7XG5cbiAgY29uc3Qge1xuICAgIHZhbHVlOiBwYXNzd29yZCxcbiAgICBpc1ZhbGlkOiB2YWxpZFBhc3N3b3JkLFxuICAgIGhhc0Vycm9yOiBpblZhbGlkUGFzc3dvcmQsXG4gICAgdmFsdWVDaGFuZ2VIYW5kbGVyOiBQYXNzd29yZENoYW5nZUhhbmRsZXIsXG4gICAgb25mb2N1c0hhbmRsZXI6IGJsdXJQYXNzd29yZCxcbiAgICByZXNldDogcmVzZXRQYXNzd29yZCxcbiAgfSA9IFVzZXJJbnB1dCgodmFsdWUpID0+IHZhbHVlLnRyaW0oKSAhPT0gXCJcIik7XG5cbiAgLy8gY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcbiAgbGV0IGZvcm1WYWxpZGF0aW9uID0gZmFsc2U7XG5cbiAgaWYgKHZhbGlkVXNlcm5hbWUgJiYgdmFsaWRQYXNzd29yZCkge1xuICAgIGZvcm1WYWxpZGF0aW9uID0gdHJ1ZTtcbiAgfVxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IHVzZXJuYW1lSW5wdXRSZWYgPSB1c2VSZWYoKTtcbiAgY29uc3QgcGFzc3dvcmRJbnB1dFJlZiA9IHVzZVJlZigpO1xuICAvLyBjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpO1xuXG4gIGNvbnN0IGF1dGhDdHggPSB1c2VDb250ZXh0KEF1dGhlbkNvbnRleHQpO1xuICAvLyB2YWxpZGF0aW9uIGlmIG5lZWRlZFxuICBjb25zdCBbaXNMb2dpbiwgc2V0SXNMb2dpbl0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3Qgc3dpdGNoQXV0aE1vZGVIYW5kbGVyID0gKCkgPT4ge1xuICAgIHNldElzTG9naW4oKHByZXZTdGF0ZSkgPT4gIXByZXZTdGF0ZSk7XG4gIH07XG5cbiAgY29uc3Qgc3VibWl0SGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBpZiAoIWZvcm1WYWxpZGF0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZW50ZXJlZEVtYWlsID0gdXNlcm5hbWVJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xuICAgIGNvbnN0IGVudGVyZWRQYXNzd29yZCA9IHBhc3N3b3JkSW5wdXRSZWYuY3VycmVudC52YWx1ZTtcblxuICAgIGxldCB1cmw7XG5cbiAgICBpZiAoaXNMb2dpbikge1xuICAgICAgdXJsID1cbiAgICAgICAgLy8gdGhpcyBnb2VzIHRvIHRoZSB0ZXN0IHBhZ2Ugb2YgdGhlIHNlcnZlclxuICAgICAgICAvLyBcImh0dHBzOi8vaWRlbnRpdHl0b29sa2l0Lmdvb2dsZWFwaXMuY29tL3YxL2FjY291bnRzOnNpZ25JbldpdGhQYXNzd29yZD9rZXk9QUl6YVN5QklMSHRnSV9JYmJaQURyUGYtb1RhLTNuSlB2SUw0cVNzXCI7XG5cbiAgICAgICAgXCJodHRwczovL2lkZW50aXR5dG9vbGtpdC5nb29nbGVhcGlzLmNvbS92MS9hY2NvdW50czpzaWduSW5XaXRoUGFzc3dvcmQ/a2V5PUFJemFTeUQyZEh2TVhtSkU5UklBZ1B3SnZjMDl6OEw4aXJoMFZtY1wiO1xuXG4gICAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB1cmwgPVxuICAgICAgICAvLyBcImh0dHBzOi8vaWRlbnRpdHl0b29sa2l0Lmdvb2dsZWFwaXMuY29tL3YxL2FjY291bnRzOnNpZ25VcD9rZXk9QUl6YVN5QklMSHRnSV9JYmJaQURyUGYtb1RhLTNuSlB2SUw0cVNzXCI7XG4gICAgICAgIC8vIGZvciB0aGUgdGVzdCBwYWdlIGFuZCBpdCB3b3Jrc1xuICAgICAgICBcImh0dHBzOi8vaWRlbnRpdHl0b29sa2l0Lmdvb2dsZWFwaXMuY29tL3YxL2FjY291bnRzOnNpZ25VcD9rZXk9QUl6YVN5RDJkSHZNWG1KRTlSSUFnUHdKdmMwOXo4TDhpcmgwVm1jXCI7XG4gICAgfVxuXG4gICAgZmV0Y2godXJsLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBlbWFpbDogZW50ZXJlZEVtYWlsLFxuICAgICAgICBwYXNzd29yZDogZW50ZXJlZFBhc3N3b3JkLFxuICAgICAgICByZXR1cm5TZWN1cmVUb2tlbjogdHJ1ZSxcbiAgICAgIH0pLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIH0sXG4gICAgfSlcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIGlmIChyZXMub2spIHtcbiAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICBhdXRoQ3R4LmxvZ2luKGRhdGEuaWRUb2tlbik7XG4gICAgICAgICAgICBjb25zdCBlcnJvck0gPSBkYXRhLmVycm9yLm1lc3NhZ2U7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3JNKTsgLy8gaWYgYSBwcm9ibGVtIGxvb2sgaW4gaGVyZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIEF1dG9tYXRpYyBsb2dvdXQgYmFzZWQgb24gdGltZVxuICAgICAgfSlcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiaWYgaXQgd2VudCB3ZWxsXCIgKyBkYXRhKTtcbiAgICAgICAgY29uc3QgZXhwaXJhdGlvblRpbWUgPSBuZXcgRGF0ZShcbiAgICAgICAgICBuZXcgRGF0ZSgpLmdldFRpbWUoKSArICtkYXRhLmV4cGlyZXNJbiAqIDM2MDBcbiAgICAgICAgKTtcbiAgICAgICAgYXV0aEN0eC5sb2dpbihkYXRhLmlkVG9rZW4sIGV4cGlyYXRpb25UaW1lLnRvSVNPU3RyaW5nKCkpO1xuICAgICAgICByb3V0ZXIucHVzaChcIi9GZXRjaGluZ0Zyb21EQlwiKTtcbiAgICAgICAgLy90ZXN0aW5nXG4gICAgICAgIC8vIGhpc3RvcnkucmVwbGFjZShcIi9cIik7XG4gICAgICAgIC8vIE5vdyB0aGUgdXNlciBpcyBsb2dnZWQgYXMgaGUgaGFzIHJlY2VpdmVkIGEgdG9ra2VuLlxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIC8vZXJyb3Igc291cmNlIGlzIGJ1aWx0LWluIG1lc3NhZ2UgZnJvbSBmaXJlYmFzZVxuICAgICAgICBhbGVydChlcnIubWVzc2FnZSk7XG4gICAgICB9KTtcblxuICAgIHJlc2V0VXNlcm5hbWUoXCJcIik7XG4gICAgcmVzZXRQYXNzd29yZChcIlwiKTtcbiAgfTtcblxuICBjb25zdCB1c2VybmFtZUlucHV0Q2xhc3NlcyA9IGluVmFsaWRVc2VybmFtZVxuICAgID8gXCJmb3JtLWNvbnRyb2wgaW52YWxpZFwiXG4gICAgOiBcImZvcm0tY29udHJvbCBcIjtcblxuICBjb25zdCBwYXNzd29yZElucHV0Q2xhc3NlcyA9IGluVmFsaWRQYXNzd29yZFxuICAgID8gXCJmb3JtLWNvbnRyb2wgaW52YWxpZFwiXG4gICAgOiBcImZvcm0tY29udHJvbCBcIjtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5hdXRofT5cbiAgICAgIHsvKm9wdGlvbiBiL24gbG9naW4gb3Igc2lnblVwICAqL31cbiAgICAgIDxoMT57aXNMb2dpbiA/IFwiTG9nIGluIFwiIDogXCJTaWduIHVwXCJ9PC9oMT5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXtzdWJtaXRIYW5kbGVyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3VzZXJuYW1lSW5wdXRDbGFzc2VzfT5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+WW91ciBFbWFpbDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXG4gICAgICAgICAgICByZWY9e3VzZXJuYW1lSW5wdXRSZWZ9XG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgb25CbHVyPXtibHVyVXNlcm5hbWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17VXNlcm5hbWVDaGFuZ2VIYW5kbGVyfVxuICAgICAgICAgICAgdmFsdWU9e3VzZXJuYW1lfVxuICAgICAgICAgIC8+XG4gICAgICAgICAge2luVmFsaWRVc2VybmFtZSAmJiAoXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJlcnJvci10ZXh0XCI+IFBsZWFzZSBlbnRlciB0aGUgVXNlci1uYW1lPC9wPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtwYXNzd29yZElucHV0Q2xhc3Nlc30+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiPllvdXIgUGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgcmVmPXtwYXNzd29yZElucHV0UmVmfVxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIG9uQmx1cj17Ymx1clBhc3N3b3JkfVxuICAgICAgICAgICAgb25DaGFuZ2U9e1Bhc3N3b3JkQ2hhbmdlSGFuZGxlcn1cbiAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIHtpblZhbGlkUGFzc3dvcmQgJiYgKFxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZXJyb3ItdGV4dFwiPiBQbGVhc2UgZW50ZXIgdGhlIHBhc3N3b3JkPC9wPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5hY3Rpb25zfT5cbiAgICAgICAgICB7IWlzTG9hZGluZyAmJiAoXG4gICAgICAgICAgICA8QnV0dG9uPntpc0xvZ2luID8gXCJMb2dpblwiIDogXCJDcmVhdGUgQWNjb3VudFwifTwvQnV0dG9uPlxuICAgICAgICAgICl9XG4gICAgICAgICAge2lzTG9hZGluZyAmJiA8cD5Mb2FkaW5nLi4uPC9wPn1cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50b2dnbGV9XG4gICAgICAgICAgICBvbkNsaWNrPXtzd2l0Y2hBdXRoTW9kZUhhbmRsZXJ9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2lzTG9naW4gPyBcIkNyZWF0ZSBuZXcgYWNjb3VudFwiIDogXCJMb2dpbiB3aXRoIGV4aXN0aW5nIGFjY291bnRcIn1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXV0aEZvcm07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJidXR0b25cIjogXCJCdXR0b25fYnV0dG9uX181QkZDaVwiLFxuXHRcImZvY3VzXCI6IFwiQnV0dG9uX2ZvY3VzX18yeHdDWFwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYXV0aFwiOiBcIkF1dGhGb3JtX2F1dGhfXzN2QTJPXCIsXG5cdFwiY29udHJvbFwiOiBcIkF1dGhGb3JtX2NvbnRyb2xfXzNzTUpSXCIsXG5cdFwiYWN0aW9uc1wiOiBcIkF1dGhGb3JtX2FjdGlvbnNfXzJEdi1UXCIsXG5cdFwidG9nZ2xlXCI6IFwiQXV0aEZvcm1fdG9nZ2xlX18zNUVJY1wiLFxuXHRcImJ1dHRvblwiOiBcIkF1dGhGb3JtX2J1dHRvbl9fMl9JNjdcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImxvZ291dFRpbWVyIiwiQXV0aGVuQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ0b2tlbiIsImxvZ2luIiwiSXNsb2dnZWRJbiIsImxvZ291dCIsInRpbWVDYWxjdWxhdG9yIiwiZXhwaXJhdGlvblRpbWUiLCJzdGFydFRpbWUiLCJEYXRlIiwiZ2V0VGltZSIsImVuZGluZ1RpbWUiLCJyZW1haW5pbmdUaW1lIiwiZ2V0dGluZ1N0b3JlZFRva2VuIiwic3RvcmVkVG9rZW4iLCJsb2NhbGhvc3QiLCJnZXRJdGVtIiwic3RvcmVkRXhwaXJhdGlvblRpbWUiLCJsb2NhbFN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwiZHVyYXRpb24iLCJBdXRoQ29udGV4dFByb3ZpZGVyIiwicHJvcHMiLCJ0b2tlbkRhdGEiLCJzdGFydFRva2VuIiwiZGF0YSIsInNldFRva2VuIiwidXNlcklzTG9nZ2VkSW4iLCJsb2dvdXRIYW5kbGVyIiwiY2xlYXJUaW1lb3V0IiwibG9naW5IYW5kbGVyIiwic2V0SXRlbSIsInNldFRpbWVvdXQiLCJjb250ZXh0VmFsdWUiLCJjaGlsZHJlbiIsIlVzZXJJbnB1dCIsInZhbGlkYXRpb24iLCJlbnRlcmVkVmFsdWUiLCJzZXRFbnRlcmVkVmFsdWUiLCJpc1RvdWNlZCIsInNldElzVG91Y2hlZCIsInZhbHVlSXNWYWxpZCIsImhhc0Vycm9yIiwidmFsdWVDaGFuZ2VIYW5kbGVyIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uZm9jdXNIYW5kbGVyIiwicmVzZXRWYWx1ZSIsImlzVmFsaWQiLCJyZXNldCIsImNsYXNzZXMiLCJCdXR0b24iLCJ0eXBlIiwiYnV0dG9uIiwib25DbGljayIsInVzZVJlZiIsInVzZUNvbnRleHQiLCJ1c2VSb3V0ZXIiLCJ1c2VIaXN0b3J5IiwiQXV0aEZvcm0iLCJ1c2VybmFtZSIsInZhbGlkVXNlcm5hbWUiLCJpblZhbGlkVXNlcm5hbWUiLCJVc2VybmFtZUNoYW5nZUhhbmRsZXIiLCJibHVyVXNlcm5hbWUiLCJyZXNldFVzZXJuYW1lIiwidHJpbSIsInBhc3N3b3JkIiwidmFsaWRQYXNzd29yZCIsImluVmFsaWRQYXNzd29yZCIsIlBhc3N3b3JkQ2hhbmdlSGFuZGxlciIsImJsdXJQYXNzd29yZCIsInJlc2V0UGFzc3dvcmQiLCJmb3JtVmFsaWRhdGlvbiIsInJvdXRlciIsInVzZXJuYW1lSW5wdXRSZWYiLCJwYXNzd29yZElucHV0UmVmIiwiYXV0aEN0eCIsImlzTG9naW4iLCJzZXRJc0xvZ2luIiwiaXNMb2FkaW5nIiwic2V0TG9hZGluZyIsInN3aXRjaEF1dGhNb2RlSGFuZGxlciIsInByZXZTdGF0ZSIsInN1Ym1pdEhhbmRsZXIiLCJwcmV2ZW50RGVmYXVsdCIsImVudGVyZWRFbWFpbCIsImN1cnJlbnQiLCJlbnRlcmVkUGFzc3dvcmQiLCJ1cmwiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZW1haWwiLCJyZXR1cm5TZWN1cmVUb2tlbiIsImhlYWRlcnMiLCJ0aGVuIiwicmVzIiwib2siLCJqc29uIiwiaWRUb2tlbiIsImVycm9yTSIsImVycm9yIiwibWVzc2FnZSIsIkVycm9yIiwiY29uc29sZSIsImxvZyIsImV4cGlyZXNJbiIsInRvSVNPU3RyaW5nIiwicHVzaCIsImNhdGNoIiwiZXJyIiwiYWxlcnQiLCJ1c2VybmFtZUlucHV0Q2xhc3NlcyIsInBhc3N3b3JkSW5wdXRDbGFzc2VzIiwiYXV0aCIsImFjdGlvbnMiLCJ0b2dnbGUiXSwic291cmNlUm9vdCI6IiJ9