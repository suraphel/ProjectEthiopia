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
      url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBILHtgI_IbbZADrPf-oTa-3nJPvIL4qSs";
      setLoading(true);
    } else {
      url = // "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBILHtgI_IbbZADrPf-oTa-3nJPvIL4qSs";
      // for the test page
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
      lineNumber: 131,
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
          lineNumber: 134,
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
          lineNumber: 135,
          columnNumber: 11
        }, _this), inValidUsername && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
          className: "error-text",
          children: " Please enter the User-name"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: passwordInputClasses,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("label", {
          htmlFor: "password",
          children: "Your Password"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 150,
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
          lineNumber: 151,
          columnNumber: 11
        }, _this), inValidPassword && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
          className: "error-text",
          children: " Please enter the password"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: (_components_usersAccount_Auth_AuthForm_module_css__WEBPACK_IMPORTED_MODULE_6___default().actions),
        children: [!isLoading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_ui_button_Button__WEBPACK_IMPORTED_MODULE_3__.default, {
          children: isLogin ? "Login" : "Create Account"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 13
        }, _this), isLoading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
          children: "Loading..."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 25
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("button", {
          type: "button",
          className: (_components_usersAccount_Auth_AuthForm_module_css__WEBPACK_IMPORTED_MODULE_6___default().toggle),
          onClick: switchAuthModeHandler,
          children: isLogin ? "Create new account" : "Login with existing account"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 129,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvQXV0aEZvcm0uYzJjYWU0MzM3MjY0YzViMmI0MmUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1TLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFBQTs7QUFDckIsbUJBT0lGLHNFQUFTLENBQUMsVUFBQ0csS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBTixPQUFpQixFQUE1QjtBQUFBLEdBQUQsQ0FQYjtBQUFBLE1BQ1NDLFFBRFQsY0FDRUYsS0FERjtBQUFBLE1BRVdHLGFBRlgsY0FFRUMsT0FGRjtBQUFBLE1BR1lDLGVBSFosY0FHRUMsUUFIRjtBQUFBLE1BSXNCQyxxQkFKdEIsY0FJRUMsa0JBSkY7QUFBQSxNQUtrQkMsWUFMbEIsY0FLRUMsY0FMRjtBQUFBLE1BTVNDLGFBTlQsY0FNRUMsS0FORjs7QUFTQSxvQkFPSWYsc0VBQVMsQ0FBQyxVQUFDRyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFOLE9BQWlCLEVBQTVCO0FBQUEsR0FBRCxDQVBiO0FBQUEsTUFDU1ksUUFEVCxlQUNFYixLQURGO0FBQUEsTUFFV2MsYUFGWCxlQUVFVixPQUZGO0FBQUEsTUFHWVcsZUFIWixlQUdFVCxRQUhGO0FBQUEsTUFJc0JVLHFCQUp0QixlQUlFUixrQkFKRjtBQUFBLE1BS2tCUyxZQUxsQixlQUtFUCxjQUxGO0FBQUEsTUFNU1EsYUFOVCxlQU1FTixLQU5GLENBVnFCLENBbUJyQjs7O0FBQ0EsTUFBSU8sY0FBYyxHQUFHLEtBQXJCOztBQUVBLE1BQUloQixhQUFhLElBQUlXLGFBQXJCLEVBQW9DO0FBQ2xDSyxJQUFBQSxjQUFjLEdBQUcsSUFBakI7QUFDRDs7QUFFRCxNQUFNQyxNQUFNLEdBQUd6QixzREFBUyxFQUF4QjtBQUVBLE1BQU0wQixnQkFBZ0IsR0FBRzlCLDZD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QUVFLFlBQUUsRUFBQyxVQUZMO0FBR0UsYUFBRyxFQUFFN0MsZ0JBSFA7QUFJRSxrQkFBUSxNQUpWO0FBS0UsZ0JBQU0sRUFBRUwsWUFMVjtBQU1FLGtCQUFRLEVBQUVELHFCQU5aO0FBT0UsZUFBSyxFQUFFSDtBQVBUO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkYsRUFXR0UsZUFBZSxpQkFDZDtBQUFHLG1CQUFTLEVBQUMsWUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFaSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFqQkYsZUFnQ0U7QUFBSyxpQkFBUyxFQUFFckIsa0dBQWhCO0FBQUEsbUJBQ0csQ0FBQ2dDLFNBQUQsaUJBQ0MsOERBQUMsaUVBQUQ7QUFBQSxvQkFBU0YsT0FBTyxHQUFHLE9BQUgsR0FBYTtBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKLEVBSUdFLFNBQVMsaUJBQUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSmhCLGVBS0U7QUFDRSxjQUFJLEVBQUMsUUFEUDtBQUVFLG1CQUFTLEVBQUVoQyxpR0FGYjtBQUdFLGlCQUFPLEVBQUVrQyxxQkFIWDtBQUFBLG9CQUtHSixPQUFPLEdBQUcsb0JBQUgsR0FBMEI7QUFMcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFoQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFvREQsQ0F6S0Q7O0dBQU16QjtVQTBCV0o7OztLQTFCWEk7QUEyS04sK0RBQWVBLFFBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvQXV0aEZvcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTG9nSW4gZm9ybSBhbmQgdmFsaWRhdGlvbiB3aXRoIGZpcmViYXNlXG5cbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBdXRoZW5Db250ZXh0IGZyb20gXCIuLi9jb21wb25lbnRzL1Rva2VuL0xvZ0luQXV0aGVudGljYXRpb24gXCI7XG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi4vY29tcG9uZW50cy91c2Vyc0FjY291bnQvQXV0aC9BdXRoRm9ybS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvdWkvYnV0dG9uL0J1dHRvblwiO1xuaW1wb3J0IFVzZXJJbnB1dCBmcm9tIFwiLi4vY29tcG9uZW50cy9ob29rcy91c2VyLWlucHV0c1wiO1xuaW1wb3J0IHsgdXNlSGlzdG9yeSB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5jb25zdCBBdXRoRm9ybSA9ICgpID0+IHtcbiAgY29uc3Qge1xuICAgIHZhbHVlOiB1c2VybmFtZSxcbiAgICBpc1ZhbGlkOiB2YWxpZFVzZXJuYW1lLFxuICAgIGhhc0Vycm9yOiBpblZhbGlkVXNlcm5hbWUsXG4gICAgdmFsdWVDaGFuZ2VIYW5kbGVyOiBVc2VybmFtZUNoYW5nZUhhbmRsZXIsXG4gICAgb25mb2N1c0hhbmRsZXI6IGJsdXJVc2VybmFtZSxcbiAgICByZXNldDogcmVzZXRVc2VybmFtZSxcbiAgfSA9IFVzZXJJbnB1dCgodmFsdWUpID0+IHZhbHVlLnRyaW0oKSAhPT0gXCJcIik7XG5cbiAgY29uc3Qge1xuICAgIHZhbHVlOiBwYXNzd29yZCxcbiAgICBpc1ZhbGlkOiB2YWxpZFBhc3N3b3JkLFxuICAgIGhhc0Vycm9yOiBpblZhbGlkUGFzc3dvcmQsXG4gICAgdmFsdWVDaGFuZ2VIYW5kbGVyOiBQYXNzd29yZENoYW5nZUhhbmRsZXIsXG4gICAgb25mb2N1c0hhbmRsZXI6IGJsdXJQYXNzd29yZCxcbiAgICByZXNldDogcmVzZXRQYXNzd29yZCxcbiAgfSA9IFVzZXJJbnB1dCgodmFsdWUpID0+IHZhbHVlLnRyaW0oKSAhPT0gXCJcIik7XG5cbiAgLy8gY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcbiAgbGV0IGZvcm1WYWxpZGF0aW9uID0gZmFsc2U7XG5cbiAgaWYgKHZhbGlkVXNlcm5hbWUgJiYgdmFsaWRQYXNzd29yZCkge1xuICAgIGZvcm1WYWxpZGF0aW9uID0gdHJ1ZTtcbiAgfVxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IHVzZXJuYW1lSW5wdXRSZWYgPSB1c2VSZWYoKTtcbiAgY29uc3QgcGFzc3dvcmRJbnB1dFJlZiA9IHVzZVJlZigpO1xuICAvLyBjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpO1xuXG4gIGNvbnN0IGF1dGhDdHggPSB1c2VDb250ZXh0KEF1dGhlbkNvbnRleHQpO1xuICAvLyB2YWxpZGF0aW9uIGlmIG5lZWRlZFxuICBjb25zdCBbaXNMb2dpbiwgc2V0SXNMb2dpbl0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3Qgc3dpdGNoQXV0aE1vZGVIYW5kbGVyID0gKCkgPT4ge1xuICAgIHNldElzTG9naW4oKHByZXZTdGF0ZSkgPT4gIXByZXZTdGF0ZSk7XG4gIH07XG5cbiAgY29uc3Qgc3VibWl0SGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBpZiAoIWZvcm1WYWxpZGF0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZW50ZXJlZEVtYWlsID0gdXNlcm5hbWVJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xuICAgIGNvbnN0IGVudGVyZWRQYXNzd29yZCA9IHBhc3N3b3JkSW5wdXRSZWYuY3VycmVudC52YWx1ZTtcblxuICAgIGxldCB1cmw7XG5cbiAgICBpZiAoaXNMb2dpbikge1xuICAgICAgdXJsID1cbiAgICAgICAgXCJodHRwczovL2lkZW50aXR5dG9vbGtpdC5nb29nbGVhcGlzLmNvbS92MS9hY2NvdW50czpzaWduSW5XaXRoUGFzc3dvcmQ/a2V5PUFJemFTeUJJTEh0Z0lfSWJiWkFEclBmLW9UYS0zbkpQdklMNHFTc1wiO1xuXG4gICAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB1cmwgPVxuICAgICAgICAvLyBcImh0dHBzOi8vaWRlbnRpdHl0b29sa2l0Lmdvb2dsZWFwaXMuY29tL3YxL2FjY291bnRzOnNpZ25VcD9rZXk9QUl6YVN5QklMSHRnSV9JYmJaQURyUGYtb1RhLTNuSlB2SUw0cVNzXCI7XG4gICAgICAgIC8vIGZvciB0aGUgdGVzdCBwYWdlXG4gICAgICAgIFwiaHR0cHM6Ly9pZGVudGl0eXRvb2xraXQuZ29vZ2xlYXBpcy5jb20vdjEvYWNjb3VudHM6c2lnblVwP2tleT1BSXphU3lEMmRIdk1YbUpFOVJJQWdQd0p2YzA5ejhMOGlyaDBWbWNcIjtcbiAgICB9XG5cbiAgICBmZXRjaCh1cmwsIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGVtYWlsOiBlbnRlcmVkRW1haWwsXG4gICAgICAgIHBhc3N3b3JkOiBlbnRlcmVkUGFzc3dvcmQsXG4gICAgICAgIHJldHVyblNlY3VyZVRva2VuOiB0cnVlLFxuICAgICAgfSksXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgfSxcbiAgICB9KVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgaWYgKHJlcy5vaykge1xuICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiByZXMuanNvbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGF1dGhDdHgubG9naW4oZGF0YS5pZFRva2VuKTtcbiAgICAgICAgICAgIGNvbnN0IGVycm9yTSA9IGRhdGEuZXJyb3IubWVzc2FnZTtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvck0pOyAvLyBpZiBhIHByb2JsZW0gbG9vayBpbiBoZXJlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQXV0b21hdGljIGxvZ291dCBiYXNlZCBvbiB0aW1lXG4gICAgICB9KVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJpZiBpdCB3ZW50IHdlbGxcIiArIGRhdGEpO1xuICAgICAgICBjb25zdCBleHBpcmF0aW9uVGltZSA9IG5ldyBEYXRlKFxuICAgICAgICAgIG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgK2RhdGEuZXhwaXJlc0luICogMzYwMFxuICAgICAgICApO1xuICAgICAgICBhdXRoQ3R4LmxvZ2luKGRhdGEuaWRUb2tlbiwgZXhwaXJhdGlvblRpbWUudG9JU09TdHJpbmcoKSk7XG4gICAgICAgIHJvdXRlci5wdXNoKFwiL0ZldGNoaW5nRnJvbURCXCIpO1xuICAgICAgICAvL3Rlc3RpbmdcbiAgICAgICAgLy8gaGlzdG9yeS5yZXBsYWNlKFwiL1wiKTtcbiAgICAgICAgLy8gTm93IHRoZSB1c2VyIGlzIGxvZ2dlZCBhcyBoZSBoYXMgcmVjZWl2ZWQgYSB0b2trZW4uXG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgLy9lcnJvciBzb3VyY2UgaXMgYnVpbHQtaW4gbWVzc2FnZSBmcm9tIGZpcmViYXNlXG4gICAgICAgIGFsZXJ0KGVyci5tZXNzYWdlKTtcbiAgICAgIH0pO1xuXG4gICAgcmVzZXRVc2VybmFtZShcIlwiKTtcbiAgICByZXNldFBhc3N3b3JkKFwiXCIpO1xuICB9O1xuXG4gIGNvbnN0IHVzZXJuYW1lSW5wdXRDbGFzc2VzID0gaW5WYWxpZFVzZXJuYW1lXG4gICAgPyBcImZvcm0tY29udHJvbCBpbnZhbGlkXCJcbiAgICA6IFwiZm9ybS1jb250cm9sIFwiO1xuXG4gIGNvbnN0IHBhc3N3b3JkSW5wdXRDbGFzc2VzID0gaW5WYWxpZFBhc3N3b3JkXG4gICAgPyBcImZvcm0tY29udHJvbCBpbnZhbGlkXCJcbiAgICA6IFwiZm9ybS1jb250cm9sIFwiO1xuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtjbGFzc2VzLmF1dGh9PlxuICAgICAgey8qb3B0aW9uIGIvbiBsb2dpbiBvciBzaWduVXAgICovfVxuICAgICAgPGgxPntpc0xvZ2luID8gXCJMb2cgaW4gXCIgOiBcIlNpZ24gdXBcIn08L2gxPlxuICAgICAgPGZvcm0gb25TdWJtaXQ9e3N1Ym1pdEhhbmRsZXJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dXNlcm5hbWVJbnB1dENsYXNzZXN9PlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5Zb3VyIEVtYWlsPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICBpZD1cImVtYWlsXCJcbiAgICAgICAgICAgIHJlZj17dXNlcm5hbWVJbnB1dFJlZn1cbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICBvbkJsdXI9e2JsdXJVc2VybmFtZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtVc2VybmFtZUNoYW5nZUhhbmRsZXJ9XG4gICAgICAgICAgICB2YWx1ZT17dXNlcm5hbWV9XG4gICAgICAgICAgLz5cbiAgICAgICAgICB7aW5WYWxpZFVzZXJuYW1lICYmIChcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImVycm9yLXRleHRcIj4gUGxlYXNlIGVudGVyIHRoZSBVc2VyLW5hbWU8L3A+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3Bhc3N3b3JkSW5wdXRDbGFzc2VzfT5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCI+WW91ciBQYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICByZWY9e3Bhc3N3b3JkSW5wdXRSZWZ9XG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgb25CbHVyPXtibHVyUGFzc3dvcmR9XG4gICAgICAgICAgICBvbkNoYW5nZT17UGFzc3dvcmRDaGFuZ2VIYW5kbGVyfVxuICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxuICAgICAgICAgIC8+XG4gICAgICAgICAge2luVmFsaWRQYXNzd29yZCAmJiAoXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJlcnJvci10ZXh0XCI+IFBsZWFzZSBlbnRlciB0aGUgcGFzc3dvcmQ8L3A+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmFjdGlvbnN9PlxuICAgICAgICAgIHshaXNMb2FkaW5nICYmIChcbiAgICAgICAgICAgIDxCdXR0b24+e2lzTG9naW4gPyBcIkxvZ2luXCIgOiBcIkNyZWF0ZSBBY2NvdW50XCJ9PC9CdXR0b24+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7aXNMb2FkaW5nICYmIDxwPkxvYWRpbmcuLi48L3A+fVxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRvZ2dsZX1cbiAgICAgICAgICAgIG9uQ2xpY2s9e3N3aXRjaEF1dGhNb2RlSGFuZGxlcn1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7aXNMb2dpbiA/IFwiQ3JlYXRlIG5ldyBhY2NvdW50XCIgOiBcIkxvZ2luIHdpdGggZXhpc3RpbmcgYWNjb3VudFwifVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBdXRoRm9ybTtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZVJlZiIsInVzZUNvbnRleHQiLCJBdXRoZW5Db250ZXh0IiwiY2xhc3NlcyIsInVzZVJvdXRlciIsIkJ1dHRvbiIsIlVzZXJJbnB1dCIsInVzZUhpc3RvcnkiLCJBdXRoRm9ybSIsInZhbHVlIiwidHJpbSIsInVzZXJuYW1lIiwidmFsaWRVc2VybmFtZSIsImlzVmFsaWQiLCJpblZhbGlkVXNlcm5hbWUiLCJoYXNFcnJvciIsIlVzZXJuYW1lQ2hhbmdlSGFuZGxlciIsInZhbHVlQ2hhbmdlSGFuZGxlciIsImJsdXJVc2VybmFtZSIsIm9uZm9jdXNIYW5kbGVyIiwicmVzZXRVc2VybmFtZSIsInJlc2V0IiwicGFzc3dvcmQiLCJ2YWxpZFBhc3N3b3JkIiwiaW5WYWxpZFBhc3N3b3JkIiwiUGFzc3dvcmRDaGFuZ2VIYW5kbGVyIiwiYmx1clBhc3N3b3JkIiwicmVzZXRQYXNzd29yZCIsImZvcm1WYWxpZGF0aW9uIiwicm91dGVyIiwidXNlcm5hbWVJbnB1dFJlZiIsInBhc3N3b3JkSW5wdXRSZWYiLCJhdXRoQ3R4IiwiaXNMb2dpbiIsInNldElzTG9naW4iLCJpc0xvYWRpbmciLCJzZXRMb2FkaW5nIiwic3dpdGNoQXV0aE1vZGVIYW5kbGVyIiwicHJldlN0YXRlIiwic3VibWl0SGFuZGxlciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJlbnRlcmVkRW1haWwiLCJjdXJyZW50IiwiZW50ZXJlZFBhc3N3b3JkIiwidXJsIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImVtYWlsIiwicmV0dXJuU2VjdXJlVG9rZW4iLCJoZWFkZXJzIiwidGhlbiIsInJlcyIsIm9rIiwianNvbiIsImRhdGEiLCJsb2dpbiIsImlkVG9rZW4iLCJlcnJvck0iLCJlcnJvciIsIm1lc3NhZ2UiLCJFcnJvciIsImNvbnNvbGUiLCJsb2ciLCJleHBpcmF0aW9uVGltZSIsIkRhdGUiLCJnZXRUaW1lIiwiZXhwaXJlc0luIiwidG9JU09TdHJpbmciLCJwdXNoIiwiZXJyIiwiYWxlcnQiLCJ1c2VybmFtZUlucHV0Q2xhc3NlcyIsInBhc3N3b3JkSW5wdXRDbGFzc2VzIiwiYXV0aCIsImFjdGlvbnMiLCJ0b2dnbGUiXSwic291cmNlUm9vdCI6IiJ9