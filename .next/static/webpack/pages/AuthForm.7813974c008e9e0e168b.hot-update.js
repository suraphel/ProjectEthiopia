"use strict";
self["webpackHotUpdate_N_E"]("pages/AuthForm",{

/***/ "./pages/AuthForm.js":
/*!***************************!*\
  !*** ./pages/AuthForm.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Token_LogInAuthentication___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Token/LogInAuthentication  */ "./components/Token/LogInAuthentication .js");
/* harmony import */ var _components_usersAccount_Auth_AuthForm_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/usersAccount/Auth/AuthForm.module.css */ "./components/usersAccount/Auth/AuthForm.module.css");
/* harmony import */ var _components_usersAccount_Auth_AuthForm_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_components_usersAccount_Auth_AuthForm_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ui_button_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ui/button/Button */ "./components/ui/button/Button.js");
/* harmony import */ var _components_hooks_user_inputs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/hooks/user-inputs */ "./components/hooks/user-inputs.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "A:\\Projects\\NextJs\\Balemoja_Next\\Balemoja\\pages\\AuthForm.js",
    _this = undefined,
    _s = $RefreshSig$();

// LogIn form and validation with firebase









var AuthForm = function AuthForm() {
  _s();

  var _UserInput = (0,_components_hooks_user_inputs__WEBPACK_IMPORTED_MODULE_4__.default)(function (value) {
    return value.trim() !== "";
  }),
      username = _UserInput.value,
      validUsername = _UserInput.isValid,
      inValidUsername = _UserInput.hasError,
      UsernameChangeHandler = _UserInput.valueChangeHandler,
      blurUsername = _UserInput.onfocusHandler,
      resetUsername = _UserInput.reset;

  var _UserInput2 = (0,_components_hooks_user_inputs__WEBPACK_IMPORTED_MODULE_4__.default)(function (value) {
    return value.trim() !== "";
  }),
      password = _UserInput2.value,
      validPassword = _UserInput2.isValid,
      inValidPassword = _UserInput2.hasError,
      PasswordChangeHandler = _UserInput2.valueChangeHandler,
      blurPassword = _UserInput2.onfocusHandler,
      resetPassword = _UserInput2.reset; // const history = useHistory();


  var formValidation = false;

  if (validUsername && validPassword) {
    formValidation = true;
  }

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  var usernameInputRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var passwordInputRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(); // const history = useHistory();

  var authCtx = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_components_Token_LogInAuthentication___WEBPACK_IMPORTED_MODULE_1__.default); // validation if needed

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
      isLogin = _useState[0],
      setIsLogin = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      isLoading = _useState2[0],
      setLoading = _useState2[1];

  var switchAuthModeHandler = function switchAuthModeHandler() {
    setIsLogin(function (prevState) {
      return !prevState;
    });
  };

  var submitHandler = function submitHandler(event) {
    event.preventDefault();

    if (!formValidation) {
      return;
    }

    var enteredEmail = usernameInputRef.current.value;
    var enteredPassword = passwordInputRef.current.value;
    var url;

    if (isLogin) {
      url = // "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBILHtgI_IbbZADrPf-oTa-3nJPvIL4qSs";
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD2dHvMXmJE9RIAgPwJvc09z8L8irh0Vmc";
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
    }).then(function (res) {
      setLoading(false);

      if (res.ok) {
        return res.json();
      } else {
        return res.json().then(function (data) {
          authCtx.login(data.idToken);
          var errorM = data.error.message;
          throw new Error(errorM); // if a problem look in here
        });
      } // Automatic logout based on time

    }).then(function (data) {
      console.log("if it went well" + data);
      var expirationTime = new Date(new Date().getTime() + +data.expiresIn * 3600);
      authCtx.login(data.idToken, expirationTime.toISOString());
      router.push("/FetchingFromDB"); //testing
      // history.replace("/");
      // Now the user is logged as he has received a tokken.
    })["catch"](function (err) {
      //error source is built-in message from firebase
      alert(err.message);
    });
    resetUsername("");
    resetPassword("");
  };

  var usernameInputClasses = inValidUsername ? "form-control invalid" : "form-control ";
  var passwordInputClasses = inValidPassword ? "form-control invalid" : "form-control ";
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("section", {
    className: (_components_usersAccount_Auth_AuthForm_module_css__WEBPACK_IMPORTED_MODULE_6___default().auth),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h1", {
      children: isLogin ? "Log in " : "Sign up"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("form", {
      onSubmit: submitHandler,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: usernameInputClasses,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("label", {
          htmlFor: "email",
          children: "Your Email"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", {
          type: "email",
          id: "email",
          ref: usernameInputRef,
          required: true,
          onBlur: blurUsername,
          onChange: UsernameChangeHandler,
          value: username
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 11
        }, _this), inValidUsername && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
          className: "error-text",
          children: " Please enter the User-name"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: passwordInputClasses,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("label", {
          htmlFor: "password",
          children: "Your Password"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", {
          type: "password",
          id: "password",
          ref: passwordInputRef,
          required: true,
          onBlur: blurPassword,
          onChange: PasswordChangeHandler,
          value: password
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 11
        }, _this), inValidPassword && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
          className: "error-text",
          children: " Please enter the password"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: (_components_usersAccount_Auth_AuthForm_module_css__WEBPACK_IMPORTED_MODULE_6___default().actions),
        children: [!isLoading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_ui_button_Button__WEBPACK_IMPORTED_MODULE_3__.default, {
          children: isLogin ? "Login" : "Create Account"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 13
        }, _this), isLoading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
          children: "Loading..."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 25
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("button", {
          type: "button",
          className: (_components_usersAccount_Auth_AuthForm_module_css__WEBPACK_IMPORTED_MODULE_6___default().toggle),
          onClick: switchAuthModeHandler,
          children: isLogin ? "Create new account" : "Login with existing account"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 131,
    columnNumber: 5
  }, _this);
};

_s(AuthForm, "8ZDxDPzXLANbc8Ld9k2lnfITuEQ=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter];
});

_c = AuthForm;
/* harmony default export */ __webpack_exports__["default"] = (AuthForm);

var _c;

$RefreshReg$(_c, "AuthForm");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvQXV0aEZvcm0uNzgxMzk3NGMwMDhlOWUwZTE2OGIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1TLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFBQTs7QUFDckIsbUJBT0lGLHNFQUFTLENBQUMsVUFBQ0csS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBTixPQUFpQixFQUE1QjtBQUFBLEdBQUQsQ0FQYjtBQUFBLE1BQ1NDLFFBRFQsY0FDRUYsS0FERjtBQUFBLE1BRVdHLGFBRlgsY0FFRUMsT0FGRjtBQUFBLE1BR1lDLGVBSFosY0FHRUMsUUFIRjtBQUFBLE1BSXNCQyxxQkFKdEIsY0FJRUMsa0JBSkY7QUFBQSxNQUtrQkMsWUFMbEIsY0FLRUMsY0FMRjtBQUFBLE1BTVNDLGFBTlQsY0FNRUMsS0FORjs7QUFTQSxvQkFPSWYsc0VBQVMsQ0FBQyxVQUFDRyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFOLE9BQWlCLEVBQTVCO0FBQUEsR0FBRCxDQVBiO0FBQUEsTUFDU1ksUUFEVCxlQUNFYixLQURGO0FBQUEsTUFFV2MsYUFGWCxlQUVFVixPQUZGO0FBQUEsTUFHWVcsZUFIWixlQUdFVCxRQUhGO0FBQUEsTUFJc0JVLHFCQUp0QixlQUlFUixrQkFKRjtBQUFBLE1BS2tCUyxZQUxsQixlQUtFUCxjQUxGO0FBQUEsTUFNU1EsYUFOVCxlQU1FTixLQU5GLENBVnFCLENBbUJyQjs7O0FBQ0EsTUFBSU8sY0FBYyxHQUFHLEtBQXJCOztBQUVBLE1BQUloQixhQUFhLElBQUlXLGFBQXJCLEVBQW9DO0FBQ2xDSyxJQUFBQSxjQUFjLEdBQUcsSUFBakI7QUFDRDs7QUFFRCxNQUFNQyxNQUFNLEdBQUd6QixzREFBUyxFQUF4QjtBQUVBLE1BQU0wQixnQkFBZ0IsR0FBRzlCLDZD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QURQO0FBRUUsWUFBRSxFQUFDLFVBRkw7QUFHRSxhQUFHLEVBQUU3QyxnQkFIUDtBQUlFLGtCQUFRLE1BSlY7QUFLRSxnQkFBTSxFQUFFTCxZQUxWO0FBTUUsa0JBQVEsRUFBRUQscUJBTlo7QUFPRSxlQUFLLEVBQUVIO0FBUFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixFQVdHRSxlQUFlLGlCQUNkO0FBQUcsbUJBQVMsRUFBQyxZQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWpCRixlQWdDRTtBQUFLLGlCQUFTLEVBQUVyQixrR0FBaEI7QUFBQSxtQkFDRyxDQUFDZ0MsU0FBRCxpQkFDQyw4REFBQyxpRUFBRDtBQUFBLG9CQUFTRixPQUFPLEdBQUcsT0FBSCxHQUFhO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkosRUFJR0UsU0FBUyxpQkFBSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKaEIsZUFLRTtBQUNFLGNBQUksRUFBQyxRQURQO0FBRUUsbUJBQVMsRUFBRWhDLGlHQUZiO0FBR0UsaUJBQU8sRUFBRWtDLHFCQUhYO0FBQUEsb0JBS0dKLE9BQU8sR0FBRyxvQkFBSCxHQUEwQjtBQUxwQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWhDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQW9ERCxDQTNLRDs7R0FBTXpCO1VBMEJXSjs7O0tBMUJYSTtBQTZLTiwrREFBZUEsUUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9BdXRoRm9ybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMb2dJbiBmb3JtIGFuZCB2YWxpZGF0aW9uIHdpdGggZmlyZWJhc2VcblxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEF1dGhlbkNvbnRleHQgZnJvbSBcIi4uL2NvbXBvbmVudHMvVG9rZW4vTG9nSW5BdXRoZW50aWNhdGlvbiBcIjtcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuLi9jb21wb25lbnRzL3VzZXJzQWNjb3VudC9BdXRoL0F1dGhGb3JtLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy91aS9idXR0b24vQnV0dG9uXCI7XG5pbXBvcnQgVXNlcklucHV0IGZyb20gXCIuLi9jb21wb25lbnRzL2hvb2tzL3VzZXItaW5wdXRzXCI7XG5pbXBvcnQgeyB1c2VIaXN0b3J5IH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmNvbnN0IEF1dGhGb3JtID0gKCkgPT4ge1xuICBjb25zdCB7XG4gICAgdmFsdWU6IHVzZXJuYW1lLFxuICAgIGlzVmFsaWQ6IHZhbGlkVXNlcm5hbWUsXG4gICAgaGFzRXJyb3I6IGluVmFsaWRVc2VybmFtZSxcbiAgICB2YWx1ZUNoYW5nZUhhbmRsZXI6IFVzZXJuYW1lQ2hhbmdlSGFuZGxlcixcbiAgICBvbmZvY3VzSGFuZGxlcjogYmx1clVzZXJuYW1lLFxuICAgIHJlc2V0OiByZXNldFVzZXJuYW1lLFxuICB9ID0gVXNlcklucHV0KCh2YWx1ZSkgPT4gdmFsdWUudHJpbSgpICE9PSBcIlwiKTtcblxuICBjb25zdCB7XG4gICAgdmFsdWU6IHBhc3N3b3JkLFxuICAgIGlzVmFsaWQ6IHZhbGlkUGFzc3dvcmQsXG4gICAgaGFzRXJyb3I6IGluVmFsaWRQYXNzd29yZCxcbiAgICB2YWx1ZUNoYW5nZUhhbmRsZXI6IFBhc3N3b3JkQ2hhbmdlSGFuZGxlcixcbiAgICBvbmZvY3VzSGFuZGxlcjogYmx1clBhc3N3b3JkLFxuICAgIHJlc2V0OiByZXNldFBhc3N3b3JkLFxuICB9ID0gVXNlcklucHV0KCh2YWx1ZSkgPT4gdmFsdWUudHJpbSgpICE9PSBcIlwiKTtcblxuICAvLyBjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpO1xuICBsZXQgZm9ybVZhbGlkYXRpb24gPSBmYWxzZTtcblxuICBpZiAodmFsaWRVc2VybmFtZSAmJiB2YWxpZFBhc3N3b3JkKSB7XG4gICAgZm9ybVZhbGlkYXRpb24gPSB0cnVlO1xuICB9XG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgdXNlcm5hbWVJbnB1dFJlZiA9IHVzZVJlZigpO1xuICBjb25zdCBwYXNzd29yZElucHV0UmVmID0gdXNlUmVmKCk7XG4gIC8vIGNvbnN0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KCk7XG5cbiAgY29uc3QgYXV0aEN0eCA9IHVzZUNvbnRleHQoQXV0aGVuQ29udGV4dCk7XG4gIC8vIHZhbGlkYXRpb24gaWYgbmVlZGVkXG4gIGNvbnN0IFtpc0xvZ2luLCBzZXRJc0xvZ2luXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBzd2l0Y2hBdXRoTW9kZUhhbmRsZXIgPSAoKSA9PiB7XG4gICAgc2V0SXNMb2dpbigocHJldlN0YXRlKSA9PiAhcHJldlN0YXRlKTtcbiAgfTtcblxuICBjb25zdCBzdWJtaXRIYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGlmICghZm9ybVZhbGlkYXRpb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBlbnRlcmVkRW1haWwgPSB1c2VybmFtZUlucHV0UmVmLmN1cnJlbnQudmFsdWU7XG4gICAgY29uc3QgZW50ZXJlZFBhc3N3b3JkID0gcGFzc3dvcmRJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xuXG4gICAgbGV0IHVybDtcblxuICAgIGlmIChpc0xvZ2luKSB7XG4gICAgICB1cmwgPVxuICAgICAgICAvLyBcImh0dHBzOi8vaWRlbnRpdHl0b29sa2l0Lmdvb2dsZWFwaXMuY29tL3YxL2FjY291bnRzOnNpZ25JbldpdGhQYXNzd29yZD9rZXk9QUl6YVN5QklMSHRnSV9JYmJaQURyUGYtb1RhLTNuSlB2SUw0cVNzXCI7XG5cbiAgICAgICAgXCJodHRwczovL2lkZW50aXR5dG9vbGtpdC5nb29nbGVhcGlzLmNvbS92MS9hY2NvdW50czpzaWduVXA/a2V5PUFJemFTeUQyZEh2TVhtSkU5UklBZ1B3SnZjMDl6OEw4aXJoMFZtY1wiO1xuXG4gICAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB1cmwgPVxuICAgICAgICAvLyBcImh0dHBzOi8vaWRlbnRpdHl0b29sa2l0Lmdvb2dsZWFwaXMuY29tL3YxL2FjY291bnRzOnNpZ25VcD9rZXk9QUl6YVN5QklMSHRnSV9JYmJaQURyUGYtb1RhLTNuSlB2SUw0cVNzXCI7XG4gICAgICAgIC8vIGZvciB0aGUgdGVzdCBwYWdlIGFuZCBpdCB3b3Jrc1xuICAgICAgICBcImh0dHBzOi8vaWRlbnRpdHl0b29sa2l0Lmdvb2dsZWFwaXMuY29tL3YxL2FjY291bnRzOnNpZ25VcD9rZXk9QUl6YVN5RDJkSHZNWG1KRTlSSUFnUHdKdmMwOXo4TDhpcmgwVm1jXCI7XG4gICAgfVxuXG4gICAgZmV0Y2godXJsLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBlbWFpbDogZW50ZXJlZEVtYWlsLFxuICAgICAgICBwYXNzd29yZDogZW50ZXJlZFBhc3N3b3JkLFxuICAgICAgICByZXR1cm5TZWN1cmVUb2tlbjogdHJ1ZSxcbiAgICAgIH0pLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIH0sXG4gICAgfSlcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIGlmIChyZXMub2spIHtcbiAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICBhdXRoQ3R4LmxvZ2luKGRhdGEuaWRUb2tlbik7XG4gICAgICAgICAgICBjb25zdCBlcnJvck0gPSBkYXRhLmVycm9yLm1lc3NhZ2U7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3JNKTsgLy8gaWYgYSBwcm9ibGVtIGxvb2sgaW4gaGVyZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIEF1dG9tYXRpYyBsb2dvdXQgYmFzZWQgb24gdGltZVxuICAgICAgfSlcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiaWYgaXQgd2VudCB3ZWxsXCIgKyBkYXRhKTtcbiAgICAgICAgY29uc3QgZXhwaXJhdGlvblRpbWUgPSBuZXcgRGF0ZShcbiAgICAgICAgICBuZXcgRGF0ZSgpLmdldFRpbWUoKSArICtkYXRhLmV4cGlyZXNJbiAqIDM2MDBcbiAgICAgICAgKTtcbiAgICAgICAgYXV0aEN0eC5sb2dpbihkYXRhLmlkVG9rZW4sIGV4cGlyYXRpb25UaW1lLnRvSVNPU3RyaW5nKCkpO1xuICAgICAgICByb3V0ZXIucHVzaChcIi9GZXRjaGluZ0Zyb21EQlwiKTtcbiAgICAgICAgLy90ZXN0aW5nXG4gICAgICAgIC8vIGhpc3RvcnkucmVwbGFjZShcIi9cIik7XG4gICAgICAgIC8vIE5vdyB0aGUgdXNlciBpcyBsb2dnZWQgYXMgaGUgaGFzIHJlY2VpdmVkIGEgdG9ra2VuLlxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIC8vZXJyb3Igc291cmNlIGlzIGJ1aWx0LWluIG1lc3NhZ2UgZnJvbSBmaXJlYmFzZVxuICAgICAgICBhbGVydChlcnIubWVzc2FnZSk7XG4gICAgICB9KTtcblxuICAgIHJlc2V0VXNlcm5hbWUoXCJcIik7XG4gICAgcmVzZXRQYXNzd29yZChcIlwiKTtcbiAgfTtcblxuICBjb25zdCB1c2VybmFtZUlucHV0Q2xhc3NlcyA9IGluVmFsaWRVc2VybmFtZVxuICAgID8gXCJmb3JtLWNvbnRyb2wgaW52YWxpZFwiXG4gICAgOiBcImZvcm0tY29udHJvbCBcIjtcblxuICBjb25zdCBwYXNzd29yZElucHV0Q2xhc3NlcyA9IGluVmFsaWRQYXNzd29yZFxuICAgID8gXCJmb3JtLWNvbnRyb2wgaW52YWxpZFwiXG4gICAgOiBcImZvcm0tY29udHJvbCBcIjtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5hdXRofT5cbiAgICAgIHsvKm9wdGlvbiBiL24gbG9naW4gb3Igc2lnblVwICAqL31cbiAgICAgIDxoMT57aXNMb2dpbiA/IFwiTG9nIGluIFwiIDogXCJTaWduIHVwXCJ9PC9oMT5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXtzdWJtaXRIYW5kbGVyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3VzZXJuYW1lSW5wdXRDbGFzc2VzfT5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+WW91ciBFbWFpbDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXG4gICAgICAgICAgICByZWY9e3VzZXJuYW1lSW5wdXRSZWZ9XG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgb25CbHVyPXtibHVyVXNlcm5hbWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17VXNlcm5hbWVDaGFuZ2VIYW5kbGVyfVxuICAgICAgICAgICAgdmFsdWU9e3VzZXJuYW1lfVxuICAgICAgICAgIC8+XG4gICAgICAgICAge2luVmFsaWRVc2VybmFtZSAmJiAoXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJlcnJvci10ZXh0XCI+IFBsZWFzZSBlbnRlciB0aGUgVXNlci1uYW1lPC9wPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtwYXNzd29yZElucHV0Q2xhc3Nlc30+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiPllvdXIgUGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgcmVmPXtwYXNzd29yZElucHV0UmVmfVxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIG9uQmx1cj17Ymx1clBhc3N3b3JkfVxuICAgICAgICAgICAgb25DaGFuZ2U9e1Bhc3N3b3JkQ2hhbmdlSGFuZGxlcn1cbiAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIHtpblZhbGlkUGFzc3dvcmQgJiYgKFxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZXJyb3ItdGV4dFwiPiBQbGVhc2UgZW50ZXIgdGhlIHBhc3N3b3JkPC9wPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5hY3Rpb25zfT5cbiAgICAgICAgICB7IWlzTG9hZGluZyAmJiAoXG4gICAgICAgICAgICA8QnV0dG9uPntpc0xvZ2luID8gXCJMb2dpblwiIDogXCJDcmVhdGUgQWNjb3VudFwifTwvQnV0dG9uPlxuICAgICAgICAgICl9XG4gICAgICAgICAge2lzTG9hZGluZyAmJiA8cD5Mb2FkaW5nLi4uPC9wPn1cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50b2dnbGV9XG4gICAgICAgICAgICBvbkNsaWNrPXtzd2l0Y2hBdXRoTW9kZUhhbmRsZXJ9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2lzTG9naW4gPyBcIkNyZWF0ZSBuZXcgYWNjb3VudFwiIDogXCJMb2dpbiB3aXRoIGV4aXN0aW5nIGFjY291bnRcIn1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXV0aEZvcm07XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VSZWYiLCJ1c2VDb250ZXh0IiwiQXV0aGVuQ29udGV4dCIsImNsYXNzZXMiLCJ1c2VSb3V0ZXIiLCJCdXR0b24iLCJVc2VySW5wdXQiLCJ1c2VIaXN0b3J5IiwiQXV0aEZvcm0iLCJ2YWx1ZSIsInRyaW0iLCJ1c2VybmFtZSIsInZhbGlkVXNlcm5hbWUiLCJpc1ZhbGlkIiwiaW5WYWxpZFVzZXJuYW1lIiwiaGFzRXJyb3IiLCJVc2VybmFtZUNoYW5nZUhhbmRsZXIiLCJ2YWx1ZUNoYW5nZUhhbmRsZXIiLCJibHVyVXNlcm5hbWUiLCJvbmZvY3VzSGFuZGxlciIsInJlc2V0VXNlcm5hbWUiLCJyZXNldCIsInBhc3N3b3JkIiwidmFsaWRQYXNzd29yZCIsImluVmFsaWRQYXNzd29yZCIsIlBhc3N3b3JkQ2hhbmdlSGFuZGxlciIsImJsdXJQYXNzd29yZCIsInJlc2V0UGFzc3dvcmQiLCJmb3JtVmFsaWRhdGlvbiIsInJvdXRlciIsInVzZXJuYW1lSW5wdXRSZWYiLCJwYXNzd29yZElucHV0UmVmIiwiYXV0aEN0eCIsImlzTG9naW4iLCJzZXRJc0xvZ2luIiwiaXNMb2FkaW5nIiwic2V0TG9hZGluZyIsInN3aXRjaEF1dGhNb2RlSGFuZGxlciIsInByZXZTdGF0ZSIsInN1Ym1pdEhhbmRsZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZW50ZXJlZEVtYWlsIiwiY3VycmVudCIsImVudGVyZWRQYXNzd29yZCIsInVybCIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJlbWFpbCIsInJldHVyblNlY3VyZVRva2VuIiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJvayIsImpzb24iLCJkYXRhIiwibG9naW4iLCJpZFRva2VuIiwiZXJyb3JNIiwiZXJyb3IiLCJtZXNzYWdlIiwiRXJyb3IiLCJjb25zb2xlIiwibG9nIiwiZXhwaXJhdGlvblRpbWUiLCJEYXRlIiwiZ2V0VGltZSIsImV4cGlyZXNJbiIsInRvSVNPU3RyaW5nIiwicHVzaCIsImVyciIsImFsZXJ0IiwidXNlcm5hbWVJbnB1dENsYXNzZXMiLCJwYXNzd29yZElucHV0Q2xhc3NlcyIsImF1dGgiLCJhY3Rpb25zIiwidG9nZ2xlIl0sInNvdXJjZVJvb3QiOiIifQ==