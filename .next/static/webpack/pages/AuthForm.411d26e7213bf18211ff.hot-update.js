self["webpackHotUpdate_N_E"]("pages/AuthForm",{

/***/ "./pages/AuthForm.js":
/*!***************************!*\
  !*** ./pages/AuthForm.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

 // import classes from "../components/usersAccount/Auth/AuthForm.module.css";








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
      lineNumber: 135,
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
          lineNumber: 138,
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
          lineNumber: 139,
          columnNumber: 11
        }, _this), inValidUsername && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
          className: "error-text",
          children: " Please enter the User-name"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: passwordInputClasses,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("label", {
          htmlFor: "password",
          children: "Your Password"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 154,
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
          lineNumber: 155,
          columnNumber: 11
        }, _this), inValidPassword && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
          className: "error-text",
          children: " Please enter the password"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: (_components_usersAccount_Auth_AuthForm_module_css__WEBPACK_IMPORTED_MODULE_6___default().actions),
        children: [!isLoading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_ui_button_Button__WEBPACK_IMPORTED_MODULE_3__.default, {
          children: isLogin ? "Login" : "Create Account"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 13
        }, _this), isLoading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
          children: "Loading..."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 25
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("button", {
          type: "button",
          className: (_components_usersAccount_Auth_AuthForm_module_css__WEBPACK_IMPORTED_MODULE_6___default().toggle),
          onClick: switchAuthModeHandler,
          children: isLogin ? "Create new account" : "Login with existing account"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 133,
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


/***/ }),

/***/ "./components/usersAccount/Auth/AuthForm.module.css":
/*!**********************************************************!*\
  !*** ./components/usersAccount/Auth/AuthForm.module.css ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./AuthForm.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/usersAccount/Auth/AuthForm.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = function(element) {
                // These elements should always exist. If they do not,
                // this code should fail.
                var anchorElement = document.querySelector('#__next_css__DO_NOT_USE__');
                var parentNode = anchorElement.parentNode// Normally <head>
                ;
                // Each style tag should be placed right before our
                // anchor. By inserting before and not after, we do not
                // need to track the last inserted element.
                parentNode.insertBefore(element, anchorElement);
            };
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
    if (!a && b || a && !b) {
        return false;
    }
    let p;
    for(p in a){
        if (isNamedExport && p === 'default') {
            continue;
        }
        if (a[p] !== b[p]) {
            return false;
        }
    }
    for(p in b){
        if (isNamedExport && p === 'default') {
            continue;
        }
        if (!a[p]) {
            return false;
        }
    }
    return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !!../../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./AuthForm.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/usersAccount/Auth/AuthForm.module.css",
      function () {
        content = __webpack_require__(/*! !!../../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./AuthForm.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/usersAccount/Auth/AuthForm.module.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.id, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/usersAccount/Auth/AuthForm.module.css":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/usersAccount/Auth/AuthForm.module.css ***!
  \************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".AuthForm_auth__3vA2O {\n  width: 100%;\n  max-width: 63rem;\n  border-radius: 6px;\n  background-color: #f3f0f5;\n  /* box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2); */\n  padding: 1rem;\n  text-align: center;\n  padding-bottom: 14rem;\n  padding-bottom: 6rem;\n}\n\n@media (min-width: 768px) {\n  .AuthForm_auth__3vA2O {\n    padding: 3rem;\n    margin: 3rem auto;\n  }\n}\n\n.AuthForm_auth__3vA2O h1 {\n  text-align: center;\n}\n\n.AuthForm_control__3sMJR {\n  margin-bottom: 0.5rem;\n}\n\n.AuthForm_control__3sMJR label {\n  display: block;\n  font-weight: bold;\n  margin-bottom: 0.5rem;\n}\n\n.AuthForm_control__3sMJR input {\n  font: inherit;\n  background-color: #f4f1f7;\n  color: #631b7e;\n  border-radius: 12px;\n  border: 1px solid rgb(189, 181, 181);\n  width: 100%;\n  text-align: left;\n  padding: 0.5rem;\n}\n\n.AuthForm_actions__2Dv-T {\n  margin-top: 1.5rem;\n  display: -moz-box;\n  display: flex;\n  -moz-box-orient: vertical;\n  -moz-box-direction: normal;\n       flex-direction: column;\n  -moz-box-align: center;\n       align-items: center;\n}\n\n/* .actions button {\n  cursor: pointer;\n  font: inherit;\n  color: white;\n  background-color: #d88418;\n  border: 1px solid #d88418;\n  border-radius: 6px;\n  padding: 0.5rem 2.5rem;\n  width: 100%;\n}\n\n.actions button:hover {\n  background-color: #873abb;\n  border-color: #873abb;\n} */\n\n.AuthForm_actions__2Dv-T .AuthForm_toggle__35EIc {\n  margin-top: 1rem;\n  background-color: transparent;\n  color: #250fa3f6;\n  border: none;\n  padding: 0.15rem 1.5rem;\n}\n\n.AuthForm_actions__2Dv-T .AuthForm_toggle__35EIc:hover {\n  background-color: transparent;\n  color: #ae82cc;\n}\n\n@media (min-width: 768px) {\n  .AuthForm_button__2_I67 {\n    width: auto;\n  }\n}\n", "",{"version":3,"sources":["webpack://components/usersAccount/Auth/AuthForm.module.css"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,gBAAgB;EAChB,kBAAkB;EAClB,yBAAyB;EACzB,8CAA8C;EAC9C,aAAa;EACb,kBAAkB;EAClB,qBAAqB;EACrB,oBAAoB;AACtB;;AAEA;EACE;IACE,aAAa;IACb,iBAAiB;EACnB;AACF;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,cAAc;EACd,iBAAiB;EACjB,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,yBAAyB;EACzB,cAAc;EACd,mBAAmB;EACnB,oCAAoC;EACpC,WAAW;EACX,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,iBAAa;EAAb,aAAa;EACb,yBAAsB;EAAtB,0BAAsB;OAAtB,sBAAsB;EACtB,sBAAmB;OAAnB,mBAAmB;AACrB;;AAEA;;;;;;;;;;;;;;GAcG;;AAEH;EACE,gBAAgB;EAChB,6BAA6B;EAC7B,gBAAgB;EAChB,YAAY;EACZ,uBAAuB;AACzB;;AAEA;EACE,6BAA6B;EAC7B,cAAc;AAChB;;AAEA;EACE;IACE,WAAW;EACb;AACF","sourcesContent":[".auth {\n  width: 100%;\n  max-width: 63rem;\n  border-radius: 6px;\n  background-color: #f3f0f5;\n  /* box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2); */\n  padding: 1rem;\n  text-align: center;\n  padding-bottom: 14rem;\n  padding-bottom: 6rem;\n}\n\n@media (min-width: 768px) {\n  .auth {\n    padding: 3rem;\n    margin: 3rem auto;\n  }\n}\n\n.auth h1 {\n  text-align: center;\n}\n\n.control {\n  margin-bottom: 0.5rem;\n}\n\n.control label {\n  display: block;\n  font-weight: bold;\n  margin-bottom: 0.5rem;\n}\n\n.control input {\n  font: inherit;\n  background-color: #f4f1f7;\n  color: #631b7e;\n  border-radius: 12px;\n  border: 1px solid rgb(189, 181, 181);\n  width: 100%;\n  text-align: left;\n  padding: 0.5rem;\n}\n\n.actions {\n  margin-top: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n/* .actions button {\n  cursor: pointer;\n  font: inherit;\n  color: white;\n  background-color: #d88418;\n  border: 1px solid #d88418;\n  border-radius: 6px;\n  padding: 0.5rem 2.5rem;\n  width: 100%;\n}\n\n.actions button:hover {\n  background-color: #873abb;\n  border-color: #873abb;\n} */\n\n.actions .toggle {\n  margin-top: 1rem;\n  background-color: transparent;\n  color: #250fa3f6;\n  border: none;\n  padding: 0.15rem 1.5rem;\n}\n\n.actions .toggle:hover {\n  background-color: transparent;\n  color: #ae82cc;\n}\n\n@media (min-width: 768px) {\n  .button {\n    width: auto;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"auth": "AuthForm_auth__3vA2O",
	"control": "AuthForm_control__3sMJR",
	"actions": "AuthForm_actions__2Dv-T",
	"toggle": "AuthForm_toggle__35EIc",
	"button": "AuthForm_button__2_I67"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvQXV0aEZvcm0uNDExZDI2ZTcyMTNiZjE4MjExZmYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7Q0FFQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxJQUFNUyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQUE7O0FBQ3JCLG1CQU9JRixzRUFBUyxDQUFDLFVBQUNHLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLElBQU4sT0FBaUIsRUFBNUI7QUFBQSxHQUFELENBUGI7QUFBQSxNQUNTQyxRQURULGNBQ0VGLEtBREY7QUFBQSxNQUVXRyxhQUZYLGNBRUVDLE9BRkY7QUFBQSxNQUdZQyxlQUhaLGNBR0VDLFFBSEY7QUFBQSxNQUlzQkMscUJBSnRCLGNBSUVDLGtCQUpGO0FBQUEsTUFLa0JDLFlBTGxCLGNBS0VDLGNBTEY7QUFBQSxNQU1TQyxhQU5ULGNBTUVDLEtBTkY7O0FBU0Esb0JBT0lmLHNFQUFTLENBQUMsVUFBQ0csS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBTixPQUFpQixFQUE1QjtBQUFBLEdBQUQsQ0FQYjtBQUFBLE1BQ1NZLFFBRFQsZUFDRWIsS0FERjtBQUFBLE1BRVdjLGFBRlgsZUFFRVYsT0FGRjtBQUFBLE1BR1lXLGVBSFosZUFHRVQsUUFIRjtBQUFBLE1BSXNCVSxxQkFKdEIsZUFJRVIsa0JBSkY7QUFBQSxNQUtrQlMsWUFMbEIsZUFLRVAsY0FMRjtBQUFBLE1BTVNRLGFBTlQsZUFNRU4sS0FORixDQVZxQixDQW1CckI7OztBQUNBLE1BQUlPLGNBQWMsR0FBRyxLQUFyQjs7QUFFQSxNQUFJaEIsYUFBYSxJQUFJVyxhQUFyQixFQUFvQztBQUNsQ0ssSUFBQUEsY0FBYyxHQUFHLElBQWpCO0FBQ0Q7O0FBRUQsTUFBTUMsTUFBTSxHQUFHekIsc0RBQVMsRUFBeEI7QUFFQSxNQUFNMEIsZ0JBQWdCLEdBQUc5Qiw2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QixLQUFLLEdBQUcscUJBQXFCO0FBQ3I2SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvQXV0aEZvcm0uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdXNlcnNBY2NvdW50L0F1dGgvQXV0aEZvcm0ubW9kdWxlLmNzcz9lNjg0Iiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3VzZXJzQWNjb3VudC9BdXRoL0F1dGhGb3JtLm1vZHVsZS5jc3MiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTG9nSW4gZm9ybSBhbmQgdmFsaWRhdGlvbiB3aXRoIGZpcmViYXNlXG5cbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBdXRoZW5Db250ZXh0IGZyb20gXCIuLi9jb21wb25lbnRzL1Rva2VuL0xvZ0luQXV0aGVudGljYXRpb24gXCI7XG4vLyBpbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi4vY29tcG9uZW50cy91c2Vyc0FjY291bnQvQXV0aC9BdXRoRm9ybS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi4vY29tcG9uZW50cy91c2Vyc0FjY291bnQvQXV0aC9BdXRoRm9ybS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvdWkvYnV0dG9uL0J1dHRvblwiO1xuaW1wb3J0IFVzZXJJbnB1dCBmcm9tIFwiLi4vY29tcG9uZW50cy9ob29rcy91c2VyLWlucHV0c1wiO1xuaW1wb3J0IHsgdXNlSGlzdG9yeSB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5jb25zdCBBdXRoRm9ybSA9ICgpID0+IHtcbiAgY29uc3Qge1xuICAgIHZhbHVlOiB1c2VybmFtZSxcbiAgICBpc1ZhbGlkOiB2YWxpZFVzZXJuYW1lLFxuICAgIGhhc0Vycm9yOiBpblZhbGlkVXNlcm5hbWUsXG4gICAgdmFsdWVDaGFuZ2VIYW5kbGVyOiBVc2VybmFtZUNoYW5nZUhhbmRsZXIsXG4gICAgb25mb2N1c0hhbmRsZXI6IGJsdXJVc2VybmFtZSxcbiAgICByZXNldDogcmVzZXRVc2VybmFtZSxcbiAgfSA9IFVzZXJJbnB1dCgodmFsdWUpID0+IHZhbHVlLnRyaW0oKSAhPT0gXCJcIik7XG5cbiAgY29uc3Qge1xuICAgIHZhbHVlOiBwYXNzd29yZCxcbiAgICBpc1ZhbGlkOiB2YWxpZFBhc3N3b3JkLFxuICAgIGhhc0Vycm9yOiBpblZhbGlkUGFzc3dvcmQsXG4gICAgdmFsdWVDaGFuZ2VIYW5kbGVyOiBQYXNzd29yZENoYW5nZUhhbmRsZXIsXG4gICAgb25mb2N1c0hhbmRsZXI6IGJsdXJQYXNzd29yZCxcbiAgICByZXNldDogcmVzZXRQYXNzd29yZCxcbiAgfSA9IFVzZXJJbnB1dCgodmFsdWUpID0+IHZhbHVlLnRyaW0oKSAhPT0gXCJcIik7XG5cbiAgLy8gY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcbiAgbGV0IGZvcm1WYWxpZGF0aW9uID0gZmFsc2U7XG5cbiAgaWYgKHZhbGlkVXNlcm5hbWUgJiYgdmFsaWRQYXNzd29yZCkge1xuICAgIGZvcm1WYWxpZGF0aW9uID0gdHJ1ZTtcbiAgfVxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IHVzZXJuYW1lSW5wdXRSZWYgPSB1c2VSZWYoKTtcbiAgY29uc3QgcGFzc3dvcmRJbnB1dFJlZiA9IHVzZVJlZigpO1xuICAvLyBjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpO1xuXG4gIGNvbnN0IGF1dGhDdHggPSB1c2VDb250ZXh0KEF1dGhlbkNvbnRleHQpO1xuICAvLyB2YWxpZGF0aW9uIGlmIG5lZWRlZFxuICBjb25zdCBbaXNMb2dpbiwgc2V0SXNMb2dpbl0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3Qgc3dpdGNoQXV0aE1vZGVIYW5kbGVyID0gKCkgPT4ge1xuICAgIHNldElzTG9naW4oKHByZXZTdGF0ZSkgPT4gIXByZXZTdGF0ZSk7XG4gIH07XG5cbiAgY29uc3Qgc3VibWl0SGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBpZiAoIWZvcm1WYWxpZGF0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZW50ZXJlZEVtYWlsID0gdXNlcm5hbWVJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xuICAgIGNvbnN0IGVudGVyZWRQYXNzd29yZCA9IHBhc3N3b3JkSW5wdXRSZWYuY3VycmVudC52YWx1ZTtcblxuICAgIGxldCB1cmw7XG5cbiAgICBpZiAoaXNMb2dpbikge1xuICAgICAgdXJsID1cbiAgICAgICAgLy8gdGhpcyBnb2VzIHRvIHRoZSB0ZXN0IHBhZ2Ugb2YgdGhlIHNlcnZlclxuICAgICAgICAvLyBcImh0dHBzOi8vaWRlbnRpdHl0b29sa2l0Lmdvb2dsZWFwaXMuY29tL3YxL2FjY291bnRzOnNpZ25JbldpdGhQYXNzd29yZD9rZXk9QUl6YVN5QklMSHRnSV9JYmJaQURyUGYtb1RhLTNuSlB2SUw0cVNzXCI7XG5cbiAgICAgICAgXCJodHRwczovL2lkZW50aXR5dG9vbGtpdC5nb29nbGVhcGlzLmNvbS92MS9hY2NvdW50czpzaWduSW5XaXRoUGFzc3dvcmQ/a2V5PUFJemFTeUQyZEh2TVhtSkU5UklBZ1B3SnZjMDl6OEw4aXJoMFZtY1wiO1xuXG4gICAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB1cmwgPVxuICAgICAgICAvLyBcImh0dHBzOi8vaWRlbnRpdHl0b29sa2l0Lmdvb2dsZWFwaXMuY29tL3YxL2FjY291bnRzOnNpZ25VcD9rZXk9QUl6YVN5QklMSHRnSV9JYmJaQURyUGYtb1RhLTNuSlB2SUw0cVNzXCI7XG4gICAgICAgIC8vIGZvciB0aGUgdGVzdCBwYWdlIGFuZCBpdCB3b3Jrc1xuICAgICAgICBcImh0dHBzOi8vaWRlbnRpdHl0b29sa2l0Lmdvb2dsZWFwaXMuY29tL3YxL2FjY291bnRzOnNpZ25VcD9rZXk9QUl6YVN5RDJkSHZNWG1KRTlSSUFnUHdKdmMwOXo4TDhpcmgwVm1jXCI7XG4gICAgfVxuXG4gICAgZmV0Y2godXJsLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBlbWFpbDogZW50ZXJlZEVtYWlsLFxuICAgICAgICBwYXNzd29yZDogZW50ZXJlZFBhc3N3b3JkLFxuICAgICAgICByZXR1cm5TZWN1cmVUb2tlbjogdHJ1ZSxcbiAgICAgIH0pLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIH0sXG4gICAgfSlcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIGlmIChyZXMub2spIHtcbiAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICBhdXRoQ3R4LmxvZ2luKGRhdGEuaWRUb2tlbik7XG4gICAgICAgICAgICBjb25zdCBlcnJvck0gPSBkYXRhLmVycm9yLm1lc3NhZ2U7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3JNKTsgLy8gaWYgYSBwcm9ibGVtIGxvb2sgaW4gaGVyZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIEF1dG9tYXRpYyBsb2dvdXQgYmFzZWQgb24gdGltZVxuICAgICAgfSlcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiaWYgaXQgd2VudCB3ZWxsXCIgKyBkYXRhKTtcbiAgICAgICAgY29uc3QgZXhwaXJhdGlvblRpbWUgPSBuZXcgRGF0ZShcbiAgICAgICAgICBuZXcgRGF0ZSgpLmdldFRpbWUoKSArICtkYXRhLmV4cGlyZXNJbiAqIDM2MDBcbiAgICAgICAgKTtcbiAgICAgICAgYXV0aEN0eC5sb2dpbihkYXRhLmlkVG9rZW4sIGV4cGlyYXRpb25UaW1lLnRvSVNPU3RyaW5nKCkpO1xuICAgICAgICByb3V0ZXIucHVzaChcIi9GZXRjaGluZ0Zyb21EQlwiKTtcbiAgICAgICAgLy90ZXN0aW5nXG4gICAgICAgIC8vIGhpc3RvcnkucmVwbGFjZShcIi9cIik7XG4gICAgICAgIC8vIE5vdyB0aGUgdXNlciBpcyBsb2dnZWQgYXMgaGUgaGFzIHJlY2VpdmVkIGEgdG9ra2VuLlxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIC8vZXJyb3Igc291cmNlIGlzIGJ1aWx0LWluIG1lc3NhZ2UgZnJvbSBmaXJlYmFzZVxuICAgICAgICBhbGVydChlcnIubWVzc2FnZSk7XG4gICAgICB9KTtcblxuICAgIHJlc2V0VXNlcm5hbWUoXCJcIik7XG4gICAgcmVzZXRQYXNzd29yZChcIlwiKTtcbiAgfTtcblxuICBjb25zdCB1c2VybmFtZUlucHV0Q2xhc3NlcyA9IGluVmFsaWRVc2VybmFtZVxuICAgID8gXCJmb3JtLWNvbnRyb2wgaW52YWxpZFwiXG4gICAgOiBcImZvcm0tY29udHJvbCBcIjtcblxuICBjb25zdCBwYXNzd29yZElucHV0Q2xhc3NlcyA9IGluVmFsaWRQYXNzd29yZFxuICAgID8gXCJmb3JtLWNvbnRyb2wgaW52YWxpZFwiXG4gICAgOiBcImZvcm0tY29udHJvbCBcIjtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5hdXRofT5cbiAgICAgIHsvKm9wdGlvbiBiL24gbG9naW4gb3Igc2lnblVwICAqL31cbiAgICAgIDxoMT57aXNMb2dpbiA/IFwiTG9nIGluIFwiIDogXCJTaWduIHVwXCJ9PC9oMT5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXtzdWJtaXRIYW5kbGVyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3VzZXJuYW1lSW5wdXRDbGFzc2VzfT5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+WW91ciBFbWFpbDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXG4gICAgICAgICAgICByZWY9e3VzZXJuYW1lSW5wdXRSZWZ9XG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgb25CbHVyPXtibHVyVXNlcm5hbWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17VXNlcm5hbWVDaGFuZ2VIYW5kbGVyfVxuICAgICAgICAgICAgdmFsdWU9e3VzZXJuYW1lfVxuICAgICAgICAgIC8+XG4gICAgICAgICAge2luVmFsaWRVc2VybmFtZSAmJiAoXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJlcnJvci10ZXh0XCI+IFBsZWFzZSBlbnRlciB0aGUgVXNlci1uYW1lPC9wPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtwYXNzd29yZElucHV0Q2xhc3Nlc30+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiPllvdXIgUGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgcmVmPXtwYXNzd29yZElucHV0UmVmfVxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIG9uQmx1cj17Ymx1clBhc3N3b3JkfVxuICAgICAgICAgICAgb25DaGFuZ2U9e1Bhc3N3b3JkQ2hhbmdlSGFuZGxlcn1cbiAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIHtpblZhbGlkUGFzc3dvcmQgJiYgKFxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZXJyb3ItdGV4dFwiPiBQbGVhc2UgZW50ZXIgdGhlIHBhc3N3b3JkPC9wPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5hY3Rpb25zfT5cbiAgICAgICAgICB7IWlzTG9hZGluZyAmJiAoXG4gICAgICAgICAgICA8QnV0dG9uPntpc0xvZ2luID8gXCJMb2dpblwiIDogXCJDcmVhdGUgQWNjb3VudFwifTwvQnV0dG9uPlxuICAgICAgICAgICl9XG4gICAgICAgICAge2lzTG9hZGluZyAmJiA8cD5Mb2FkaW5nLi4uPC9wPn1cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50b2dnbGV9XG4gICAgICAgICAgICBvbkNsaWNrPXtzd2l0Y2hBdXRoTW9kZUhhbmRsZXJ9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2lzTG9naW4gPyBcIkNyZWF0ZSBuZXcgYWNjb3VudFwiIDogXCJMb2dpbiB3aXRoIGV4aXN0aW5nIGFjY291bnRcIn1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXV0aEZvcm07XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXN0eWxlLWxvYWRlci9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZlsyXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbMl0udXNlWzJdIS4vQXV0aEZvcm0ubW9kdWxlLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbiAgICAgICAgICAgICAgICAvLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG4gICAgICAgICAgICAgICAgdmFyIGFuY2hvckVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7XG4gICAgICAgICAgICAgICAgdmFyIHBhcmVudE5vZGUgPSBhbmNob3JFbGVtZW50LnBhcmVudE5vZGUvLyBOb3JtYWxseSA8aGVhZD5cbiAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgICAgLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4gICAgICAgICAgICAgICAgLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuICAgICAgICAgICAgICAgIC8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbiAgICAgICAgICAgICAgICBwYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LCBhbmNob3JFbGVtZW50KTtcbiAgICAgICAgICAgIH07XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgbGV0IHA7XG4gICAgZm9yKHAgaW4gYSl7XG4gICAgICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09ICdkZWZhdWx0Jykge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmb3IocCBpbiBiKXtcbiAgICAgICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gJ2RlZmF1bHQnKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWFbcF0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZlsyXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbMl0udXNlWzJdIS4vQXV0aEZvcm0ubW9kdWxlLmNzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZlsyXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbMl0udXNlWzJdIS4vQXV0aEZvcm0ubW9kdWxlLmNzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuQXV0aEZvcm1fYXV0aF9fM3ZBMk8ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDYzcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjBmNTtcXG4gIC8qIGJveC1zaGFkb3c6IDAgMXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMik7ICovXFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZy1ib3R0b206IDE0cmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDZyZW07XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgLkF1dGhGb3JtX2F1dGhfXzN2QTJPIHtcXG4gICAgcGFkZGluZzogM3JlbTtcXG4gICAgbWFyZ2luOiAzcmVtIGF1dG87XFxuICB9XFxufVxcblxcbi5BdXRoRm9ybV9hdXRoX18zdkEyTyBoMSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5BdXRoRm9ybV9jb250cm9sX18zc01KUiB7XFxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxufVxcblxcbi5BdXRoRm9ybV9jb250cm9sX18zc01KUiBsYWJlbCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbn1cXG5cXG4uQXV0aEZvcm1fY29udHJvbF9fM3NNSlIgaW5wdXQge1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGYxZjc7XFxuICBjb2xvcjogIzYzMWI3ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTg5LCAxODEsIDE4MSk7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxufVxcblxcbi5BdXRoRm9ybV9hY3Rpb25zX18yRHYtVCB7XFxuICBtYXJnaW4tdG9wOiAxLjVyZW07XFxuICBkaXNwbGF5OiAtbW96LWJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtbW96LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcbiAgLW1vei1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XFxuICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAtbW96LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4vKiAuYWN0aW9ucyBidXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkODg0MTg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZDg4NDE4O1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgcGFkZGluZzogMC41cmVtIDIuNXJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uYWN0aW9ucyBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg3M2FiYjtcXG4gIGJvcmRlci1jb2xvcjogIzg3M2FiYjtcXG59ICovXFxuXFxuLkF1dGhGb3JtX2FjdGlvbnNfXzJEdi1UIC5BdXRoRm9ybV90b2dnbGVfXzM1RUljIHtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGNvbG9yOiAjMjUwZmEzZjY7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiAwLjE1cmVtIDEuNXJlbTtcXG59XFxuXFxuLkF1dGhGb3JtX2FjdGlvbnNfXzJEdi1UIC5BdXRoRm9ybV90b2dnbGVfXzM1RUljOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgY29sb3I6ICNhZTgyY2M7XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgLkF1dGhGb3JtX2J1dHRvbl9fMl9JNjcge1xcbiAgICB3aWR0aDogYXV0bztcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL2NvbXBvbmVudHMvdXNlcnNBY2NvdW50L0F1dGgvQXV0aEZvcm0ubW9kdWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6Qiw4Q0FBOEM7RUFDOUMsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0lBQ2IsaUJBQWlCO0VBQ25CO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixvQ0FBb0M7RUFDcEMsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFzQjtFQUF0QiwwQkFBc0I7T0FBdEIsc0JBQXNCO0VBQ3RCLHNCQUFtQjtPQUFuQixtQkFBbUI7QUFDckI7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0dBY0c7O0FBRUg7RUFDRSxnQkFBZ0I7RUFDaEIsNkJBQTZCO0VBQzdCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRTtJQUNFLFdBQVc7RUFDYjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5hdXRoIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiA2M3JlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2YwZjU7XFxuICAvKiBib3gtc2hhZG93OiAwIDFweCA0cHggcmdiYSgwLCAwLCAwLCAwLjIpOyAqL1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmctYm90dG9tOiAxNHJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiA2cmVtO1xcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIC5hdXRoIHtcXG4gICAgcGFkZGluZzogM3JlbTtcXG4gICAgbWFyZ2luOiAzcmVtIGF1dG87XFxuICB9XFxufVxcblxcbi5hdXRoIGgxIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRyb2wge1xcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbn1cXG5cXG4uY29udHJvbCBsYWJlbCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbn1cXG5cXG4uY29udHJvbCBpbnB1dCB7XFxuICBmb250OiBpbmhlcml0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjFmNztcXG4gIGNvbG9yOiAjNjMxYjdlO1xcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxODksIDE4MSwgMTgxKTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG59XFxuXFxuLmFjdGlvbnMge1xcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4vKiAuYWN0aW9ucyBidXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkODg0MTg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZDg4NDE4O1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgcGFkZGluZzogMC41cmVtIDIuNXJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uYWN0aW9ucyBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg3M2FiYjtcXG4gIGJvcmRlci1jb2xvcjogIzg3M2FiYjtcXG59ICovXFxuXFxuLmFjdGlvbnMgLnRvZ2dsZSB7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogIzI1MGZhM2Y2O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogMC4xNXJlbSAxLjVyZW07XFxufVxcblxcbi5hY3Rpb25zIC50b2dnbGU6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogI2FlODJjYztcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAuYnV0dG9uIHtcXG4gICAgd2lkdGg6IGF1dG87XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImF1dGhcIjogXCJBdXRoRm9ybV9hdXRoX18zdkEyT1wiLFxuXHRcImNvbnRyb2xcIjogXCJBdXRoRm9ybV9jb250cm9sX18zc01KUlwiLFxuXHRcImFjdGlvbnNcIjogXCJBdXRoRm9ybV9hY3Rpb25zX18yRHYtVFwiLFxuXHRcInRvZ2dsZVwiOiBcIkF1dGhGb3JtX3RvZ2dsZV9fMzVFSWNcIixcblx0XCJidXR0b25cIjogXCJBdXRoRm9ybV9idXR0b25fXzJfSTY3XCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlUmVmIiwidXNlQ29udGV4dCIsIkF1dGhlbkNvbnRleHQiLCJjbGFzc2VzIiwidXNlUm91dGVyIiwiQnV0dG9uIiwiVXNlcklucHV0IiwidXNlSGlzdG9yeSIsIkF1dGhGb3JtIiwidmFsdWUiLCJ0cmltIiwidXNlcm5hbWUiLCJ2YWxpZFVzZXJuYW1lIiwiaXNWYWxpZCIsImluVmFsaWRVc2VybmFtZSIsImhhc0Vycm9yIiwiVXNlcm5hbWVDaGFuZ2VIYW5kbGVyIiwidmFsdWVDaGFuZ2VIYW5kbGVyIiwiYmx1clVzZXJuYW1lIiwib25mb2N1c0hhbmRsZXIiLCJyZXNldFVzZXJuYW1lIiwicmVzZXQiLCJwYXNzd29yZCIsInZhbGlkUGFzc3dvcmQiLCJpblZhbGlkUGFzc3dvcmQiLCJQYXNzd29yZENoYW5nZUhhbmRsZXIiLCJibHVyUGFzc3dvcmQiLCJyZXNldFBhc3N3b3JkIiwiZm9ybVZhbGlkYXRpb24iLCJyb3V0ZXIiLCJ1c2VybmFtZUlucHV0UmVmIiwicGFzc3dvcmRJbnB1dFJlZiIsImF1dGhDdHgiLCJpc0xvZ2luIiwic2V0SXNMb2dpbiIsImlzTG9hZGluZyIsInNldExvYWRpbmciLCJzd2l0Y2hBdXRoTW9kZUhhbmRsZXIiLCJwcmV2U3RhdGUiLCJzdWJtaXRIYW5kbGVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImVudGVyZWRFbWFpbCIsImN1cnJlbnQiLCJlbnRlcmVkUGFzc3dvcmQiLCJ1cmwiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZW1haWwiLCJyZXR1cm5TZWN1cmVUb2tlbiIsImhlYWRlcnMiLCJ0aGVuIiwicmVzIiwib2siLCJqc29uIiwiZGF0YSIsImxvZ2luIiwiaWRUb2tlbiIsImVycm9yTSIsImVycm9yIiwibWVzc2FnZSIsIkVycm9yIiwiY29uc29sZSIsImxvZyIsImV4cGlyYXRpb25UaW1lIiwiRGF0ZSIsImdldFRpbWUiLCJleHBpcmVzSW4iLCJ0b0lTT1N0cmluZyIsInB1c2giLCJlcnIiLCJhbGVydCIsInVzZXJuYW1lSW5wdXRDbGFzc2VzIiwicGFzc3dvcmRJbnB1dENsYXNzZXMiLCJhdXRoIiwiYWN0aW9ucyIsInRvZ2dsZSJdLCJzb3VyY2VSb290IjoiIn0=