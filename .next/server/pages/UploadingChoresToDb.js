(() => {
var exports = {};
exports.id = "pages/UploadingChoresToDb";
exports.ids = ["pages/UploadingChoresToDb"];
exports.modules = {

/***/ "./components/dataFlow/choreregistreation/AddChoresForm.js":
/*!*****************************************************************!*\
  !*** ./components/dataFlow/choreregistreation/AddChoresForm.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _choreregistreation_AddChore_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../choreregistreation/AddChore.module.css */ "./components/dataFlow/choreregistreation/AddChore.module.css");
/* harmony import */ var _choreregistreation_AddChore_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_choreregistreation_AddChore_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _hooks_user_inputs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../hooks/user-inputs */ "./components/hooks/user-inputs.js");
/* harmony import */ var _ui_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/Card */ "./components/ui/Card.js");
/* harmony import */ var _ui_button_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/button/Button */ "./components/ui/button/Button.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "A:\\Projects\\NextJs\\Balemoja_Next\\Balemoja\\components\\dataFlow\\choreregistreation\\AddChoresForm.js";
//  import    '../companyregistration/AddCompanies.css'







function Addchoresform(props) {
  const {
    value: introData,
    isValid: validIntro,
    hasError: inValidIntro,
    valueChangeHandler: IntroChangeHandler,
    onfocusHandler: blurIntro,
    reset: resetIntro
  } = (0,_hooks_user_inputs__WEBPACK_IMPORTED_MODULE_0__.default)(value => value.trim() !== "");
  const {
    value: descriptionData,
    isValid: validdetail,
    hasError: inValiddetail,
    valueChangeHandler: detailChangeHandler,
    onfocusHandler: blurdetail,
    reset: resetdetail
  } = (0,_hooks_user_inputs__WEBPACK_IMPORTED_MODULE_0__.default)(value => value.trim() !== "");
  const description = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)("");
  const intro = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)("");
  let formValidation = false;

  if (validIntro && validdetail) {
    formValidation = true;
  }

  function submitHandler(event) {
    event.preventDefault();
    let e = document.getElementById("paintJob");
    let paintJob = e.value;
    console.log("this is from the checkBox" + paintJob);

    if (!formValidation) {
      return;
    }

    const choreDataObject = {
      descriptionData,
      introData,
      paintJob
    }; // const choreDataObject = {
    //   descriptionData: description.current.value,
    //   introData: intro.current.value,
    // };
    // console.log(choreDataObject);

    props.onAddchoresform(choreDataObject);
    resetIntro("");
    resetdetail("");
  }

  const introInputClasses = inValidIntro ? "form-control invalid" : "form-control ";
  const detailInputClasses = inValiddetail ? "form-control invalid" : "form-control ";
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_ui_Card__WEBPACK_IMPORTED_MODULE_1__.default, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("form", {
      onSubmit: submitHandler,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: "app",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: (_choreregistreation_AddChore_module_css__WEBPACK_IMPORTED_MODULE_5___default().control),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("label", {
            htmlFor: "choreintro",
            children: "Line of maintainance"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("select", {
            id: "paintJob",
            required: true,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
              value: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
              value: "PaintJob",
              children: "PaintJob"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
              value: "Body Work",
              children: "Body Work"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
              value: "Motor Overhole",
              children: "Motor Overhole"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
              value: "Kelodo",
              children: "Kelodo"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
              value: "Car window",
              children: "Car window"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
              value: "Motorcycle",
              children: "Motorcycle"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
              value: "Gear box",
              children: "Gear Box"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
              value: "Wheel repair",
              children: "Wheel repair"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
              value: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
              value: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
              value: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 13
          }, this), inValidIntro && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
            className: "error-text",
            children: " Please enter an Introduction "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: (_choreregistreation_AddChore_module_css__WEBPACK_IMPORTED_MODULE_5___default().control),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("label", {
            htmlFor: "choreintro",
            children: "Introduction"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("textarea", {
            rows: "2",
            id: "choreintro",
            placeholder: "Short explanation of the chore",
            ref: intro,
            onBlur: blurIntro,
            onChange: IntroChangeHandler,
            value: introData
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 13
          }, this), inValidIntro && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
            className: "error-text",
            children: " Please enter an Introduction "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: (_choreregistreation_AddChore_module_css__WEBPACK_IMPORTED_MODULE_5___default().control),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("label", {
            htmlFor: "descrip",
            children: "Description"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("textarea", {
            rows: "5",
            id: "descrip",
            ref: description,
            onBlur: blurdetail,
            onChange: detailChangeHandler,
            value: descriptionData
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 13
          }, this), inValiddetail && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
            className: "error-text",
            children: " Please enter the details"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 133,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: (_choreregistreation_AddChore_module_css__WEBPACK_IMPORTED_MODULE_5___default().action),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_ui_button_Button__WEBPACK_IMPORTED_MODULE_2__.default, {
            className: (_choreregistreation_AddChore_module_css__WEBPACK_IMPORTED_MODULE_5___default().button),
            children: "Add Chores"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 146,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 73,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Addchoresform);

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

/***/ "./components/ui/Card.js":
/*!*******************************!*\
  !*** ./components/ui/Card.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card.module.css */ "./components/ui/Card.module.css");
/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Card_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "A:\\Projects\\NextJs\\Balemoja_Next\\Balemoja\\components\\ui\\Card.js";



const Card = props => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("card", {
    className: (_Card_module_css__WEBPACK_IMPORTED_MODULE_1___default().card),
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 10
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);

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

/***/ "./pages/UploadingChoresToDb.js":
/*!**************************************!*\
  !*** ./pages/UploadingChoresToDb.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_dataFlow_choreregistreation_AddChoresForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/dataFlow/choreregistreation/AddChoresForm */ "./components/dataFlow/choreregistreation/AddChoresForm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "A:\\Projects\\NextJs\\Balemoja_Next\\Balemoja\\pages\\UploadingChoresToDb.js";

 //  import choreList from '../choreregistreation/choreList';



function UploadingChoresToDb() {
  async function toDbHandler(choreDataObject) {
    const responce = await fetch("https://balemoja-9c5e6-default-rtdb.europe-west1.firebasedatabase.app/Chores.json", // "https://balmoja-49d90-default-rtdb.europe-west1.firebasedatabase.app/Chores.json",
    {
      method: "POST",
      body: JSON.stringify(choreDataObject),
      headers: {
        "Content-Type": "application/json"
      }
    });

    if (!responce.ok) {
      throw new Error("Error");
    }

    const data = await responce.json();
    console.log(data);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("section", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_dataFlow_choreregistreation_AddChoresForm__WEBPACK_IMPORTED_MODULE_1__.default, {
        onAddchoresform: toDbHandler
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UploadingChoresToDb);

/***/ }),

/***/ "./components/dataFlow/choreregistreation/AddChore.module.css":
/*!********************************************************************!*\
  !*** ./components/dataFlow/choreregistreation/AddChore.module.css ***!
  \********************************************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"control": "AddChore_control__2n8Lt",
	"action": "AddChore_action__3de8a"
};


/***/ }),

/***/ "./components/ui/Card.module.css":
/*!***************************************!*\
  !*** ./components/ui/Card.module.css ***!
  \***************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"Card": "Card_Card__2eggf"
};


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
var __webpack_exports__ = (__webpack_exec__("./pages/UploadingChoresToDb.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQUE7QUFBQSxVQURGO0FBT0Q7O0FBRUQsaUVBQWVELG1CQUFmOzs7Ozs7Ozs7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDSkE7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYWxlbW9qYS8uL2NvbXBvbmVudHMvZGF0YUZsb3cvY2hvcmVyZWdpc3RyZWF0aW9uL0FkZENob3Jlc0Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmFsZW1vamEvLi9jb21wb25lbnRzL2hvb2tzL3VzZXItaW5wdXRzLmpzIiwid2VicGFjazovL2JhbGVtb2phLy4vY29tcG9uZW50cy91aS9DYXJkLmpzIiwid2VicGFjazovL2JhbGVtb2phLy4vY29tcG9uZW50cy91aS9idXR0b24vQnV0dG9uLmpzIiwid2VicGFjazovL2JhbGVtb2phLy4vcGFnZXMvVXBsb2FkaW5nQ2hvcmVzVG9EYi5qcyIsIndlYnBhY2s6Ly9iYWxlbW9qYS8uL2NvbXBvbmVudHMvZGF0YUZsb3cvY2hvcmVyZWdpc3RyZWF0aW9uL0FkZENob3JlLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vYmFsZW1vamEvLi9jb21wb25lbnRzL3VpL0NhcmQubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9iYWxlbW9qYS8uL2NvbXBvbmVudHMvdWkvYnV0dG9uL0J1dHRvbi5tb2R1bGUuY3NzIiwid2VicGFjazovL2JhbGVtb2phL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9iYWxlbW9qYS9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbIi8vICBpbXBvcnQgICAgJy4uL2NvbXBhbnlyZWdpc3RyYXRpb24vQWRkQ29tcGFuaWVzLmNzcydcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4uL2Nob3JlcmVnaXN0cmVhdGlvbi9BZGRDaG9yZS5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBVc2VySW5wdXQgZnJvbSBcIi4uLy4uL2hvb2tzL3VzZXItaW5wdXRzXCI7XHJcbmltcG9ydCBDYXJkIGZyb20gXCIuLi8uLi91aS9DYXJkXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uLy4uL3VpL2J1dHRvbi9CdXR0b25cIjtcclxuaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5mdW5jdGlvbiBBZGRjaG9yZXNmb3JtKHByb3BzKSB7XHJcbiAgY29uc3Qge1xyXG4gICAgdmFsdWU6IGludHJvRGF0YSxcclxuICAgIGlzVmFsaWQ6IHZhbGlkSW50cm8sXHJcbiAgICBoYXNFcnJvcjogaW5WYWxpZEludHJvLFxyXG4gICAgdmFsdWVDaGFuZ2VIYW5kbGVyOiBJbnRyb0NoYW5nZUhhbmRsZXIsXHJcbiAgICBvbmZvY3VzSGFuZGxlcjogYmx1ckludHJvLFxyXG4gICAgcmVzZXQ6IHJlc2V0SW50cm8sXHJcbiAgfSA9IFVzZXJJbnB1dCgodmFsdWUpID0+IHZhbHVlLnRyaW0oKSAhPT0gXCJcIik7XHJcblxyXG4gIGNvbnN0IHtcclxuICAgIHZhbHVlOiBkZXNjcmlwdGlvbkRhdGEsXHJcbiAgICBpc1ZhbGlkOiB2YWxpZGRldGFpbCxcclxuICAgIGhhc0Vycm9yOiBpblZhbGlkZGV0YWlsLFxyXG4gICAgdmFsdWVDaGFuZ2VIYW5kbGVyOiBkZXRhaWxDaGFuZ2VIYW5kbGVyLFxyXG4gICAgb25mb2N1c0hhbmRsZXI6IGJsdXJkZXRhaWwsXHJcbiAgICByZXNldDogcmVzZXRkZXRhaWwsXHJcbiAgfSA9IFVzZXJJbnB1dCgodmFsdWUpID0+IHZhbHVlLnRyaW0oKSAhPT0gXCJcIik7XHJcblxyXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gdXNlUmVmKFwiXCIpO1xyXG4gIGNvbnN0IGludHJvID0gdXNlUmVmKFwiXCIpO1xyXG5cclxuICBsZXQgZm9ybVZhbGlkYXRpb24gPSBmYWxzZTtcclxuICBpZiAodmFsaWRJbnRybyAmJiB2YWxpZGRldGFpbCkge1xyXG4gICAgZm9ybVZhbGlkYXRpb24gPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc3VibWl0SGFuZGxlcihldmVudCkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBsZXQgZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFpbnRKb2JcIik7XHJcbiAgICBsZXQgcGFpbnRKb2IgPSBlLnZhbHVlO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwidGhpcyBpcyBmcm9tIHRoZSBjaGVja0JveFwiICsgcGFpbnRKb2IpO1xyXG5cclxuICAgIGlmICghZm9ybVZhbGlkYXRpb24pIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNob3JlRGF0YU9iamVjdCA9IHtcclxuICAgICAgZGVzY3JpcHRpb25EYXRhLFxyXG4gICAgICBpbnRyb0RhdGEsXHJcbiAgICAgIHBhaW50Sm9iLFxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBjb25zdCBjaG9yZURhdGFPYmplY3QgPSB7XHJcbiAgICAvLyAgIGRlc2NyaXB0aW9uRGF0YTogZGVzY3JpcHRpb24uY3VycmVudC52YWx1ZSxcclxuICAgIC8vICAgaW50cm9EYXRhOiBpbnRyby5jdXJyZW50LnZhbHVlLFxyXG4gICAgLy8gfTtcclxuICAgIC8vIGNvbnNvbGUubG9nKGNob3JlRGF0YU9iamVjdCk7XHJcbiAgICBwcm9wcy5vbkFkZGNob3Jlc2Zvcm0oY2hvcmVEYXRhT2JqZWN0KTtcclxuXHJcbiAgICByZXNldEludHJvKFwiXCIpO1xyXG4gICAgcmVzZXRkZXRhaWwoXCJcIik7XHJcbiAgfVxyXG5cclxuICBjb25zdCBpbnRyb0lucHV0Q2xhc3NlcyA9IGluVmFsaWRJbnRyb1xyXG4gICAgPyBcImZvcm0tY29udHJvbCBpbnZhbGlkXCJcclxuICAgIDogXCJmb3JtLWNvbnRyb2wgXCI7XHJcblxyXG4gIGNvbnN0IGRldGFpbElucHV0Q2xhc3NlcyA9IGluVmFsaWRkZXRhaWxcclxuICAgID8gXCJmb3JtLWNvbnRyb2wgaW52YWxpZFwiXHJcbiAgICA6IFwiZm9ybS1jb250cm9sIFwiO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENhcmQ+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtzdWJtaXRIYW5kbGVyfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udHJvbH0+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY2hvcmVpbnRyb1wiPkxpbmUgb2YgbWFpbnRhaW5hbmNlPC9sYWJlbD5cclxuICAgICAgICAgICAgPHNlbGVjdCBpZD1cInBhaW50Sm9iXCIgcmVxdWlyZWQ+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJQYWludEpvYlwiPlBhaW50Sm9iPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkJvZHkgV29ya1wiPkJvZHkgV29yazwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJNb3RvciBPdmVyaG9sZVwiPk1vdG9yIE92ZXJob2xlPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIktlbG9kb1wiPktlbG9kbzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJDYXIgd2luZG93XCI+Q2FyIHdpbmRvdzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJNb3RvcmN5Y2xlXCI+TW90b3JjeWNsZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJHZWFyIGJveFwiPkdlYXIgQm94PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIldoZWVsIHJlcGFpclwiPldoZWVsIHJlcGFpcjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj48L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPjwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgey8qIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgIHJvd3M9XCIyXCJcclxuICAgICAgICAgICAgICBpZD1cImNob3JlaW50cm9cIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2hvcnQgZXhwbGFuYXRpb24gb2YgdGhlIGNob3JlXCJcclxuICAgICAgICAgICAgICByZWY9e2ludHJvfVxyXG4gICAgICAgICAgICAgIG9uQmx1cj17Ymx1ckludHJvfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtJbnRyb0NoYW5nZUhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgdmFsdWU9e2ludHJvRGF0YX1cclxuICAgICAgICAgICAgPjwvdGV4dGFyZWE+ICovfVxyXG4gICAgICAgICAgICB7aW5WYWxpZEludHJvICYmIChcclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJlcnJvci10ZXh0XCI+IFBsZWFzZSBlbnRlciBhbiBJbnRyb2R1Y3Rpb24gPC9wPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udHJvbH0+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY2hvcmVpbnRyb1wiPkludHJvZHVjdGlvbjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgIHJvd3M9XCIyXCJcclxuICAgICAgICAgICAgICBpZD1cImNob3JlaW50cm9cIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2hvcnQgZXhwbGFuYXRpb24gb2YgdGhlIGNob3JlXCJcclxuICAgICAgICAgICAgICByZWY9e2ludHJvfVxyXG4gICAgICAgICAgICAgIG9uQmx1cj17Ymx1ckludHJvfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtJbnRyb0NoYW5nZUhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgdmFsdWU9e2ludHJvRGF0YX1cclxuICAgICAgICAgICAgPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgIHtpblZhbGlkSW50cm8gJiYgKFxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImVycm9yLXRleHRcIj4gUGxlYXNlIGVudGVyIGFuIEludHJvZHVjdGlvbiA8L3A+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250cm9sfT5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkZXNjcmlwXCI+RGVzY3JpcHRpb248L2xhYmVsPlxyXG4gICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICByb3dzPVwiNVwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJkZXNjcmlwXCJcclxuICAgICAgICAgICAgICByZWY9e2Rlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgIG9uQmx1cj17Ymx1cmRldGFpbH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZGV0YWlsQ2hhbmdlSGFuZGxlcn1cclxuICAgICAgICAgICAgICB2YWx1ZT17ZGVzY3JpcHRpb25EYXRhfVxyXG4gICAgICAgICAgICA+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAge2luVmFsaWRkZXRhaWwgJiYgKFxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImVycm9yLXRleHRcIj4gUGxlYXNlIGVudGVyIHRoZSBkZXRhaWxzPC9wPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5hY3Rpb259PlxyXG4gICAgICAgICAgICB7LyogPGJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufT5BZGQgQ2hvcmVzPC9idXR0b24+ICovfVxyXG5cclxuICAgICAgICAgICAgey8qIDx1bCBjbGFzc05hbWU9e2NsYXNzZXMuQ2hlY2tCb3hzfT5cclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImxhYmVsXCI+UGFpbnQgam9iIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJQYWludEpvYlwiIHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJ2ZWhpY2xlXCIgLz5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPiAqL31cclxuXHJcbiAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn0+QWRkIENob3JlczwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvQ2FyZD5cclxuICApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEFkZGNob3Jlc2Zvcm07XHJcbiIsImltcG9ydCB7ICB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuXHJcbmNvbnN0IFVzZXJJbnB1dCA9ICh2YWxpZGF0aW9uKSA9PntcclxuICAgIGNvbnN0IFtlbnRlcmVkVmFsdWUsIHNldEVudGVyZWRWYWx1ZV0gPSB1c2VTdGF0ZSgnJyk7IFxyXG4gICAgY29uc3QgW2lzVG91Y2VkLCBzZXRJc1RvdWNoZWRdID0gdXNlU3RhdGUoJycpOyBcclxuXHJcbiAgICBjb25zdCB2YWx1ZUlzVmFsaWQgPSB2YWxpZGF0aW9uKGVudGVyZWRWYWx1ZSk7IFxyXG4gICAgY29uc3QgaGFzRXJyb3IgPSAhdmFsdWVJc1ZhbGlkICYmIGlzVG91Y2VkOyBcclxuXHJcbiAgICBjb25zdCB2YWx1ZUNoYW5nZUhhbmRsZXIgPSAoZXZlbnQpID0+e1xyXG4gICAgICAgIHNldEVudGVyZWRWYWx1ZShldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG9uZm9jdXNIYW5kbGVyID0oZXZlbnQpID0+IHtcclxuICAgICAgICBzZXRJc1RvdWNoZWQodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVzZXRWYWx1ZSA9ICgpID0+IHtcclxuICAgICAgICBzZXRFbnRlcmVkVmFsdWUoJycpO1xyXG4gICAgICAgIHNldElzVG91Y2hlZChmYWxzZSk7IFxyXG4gICAgfVxyXG5cclxuICAgIC8vIFZhbGlkYXRpb24gb2JqZWN0XHJcbiAgICByZXR1cm4ge1xyXG4gICAgdmFsdWU6ZW50ZXJlZFZhbHVlLFxyXG4gICAgaXNWYWxpZCA6IHZhbHVlSXNWYWxpZCxcclxuICAgIGhhc0Vycm9yIDogaGFzRXJyb3IsXHJcbiAgICB2YWx1ZUNoYW5nZUhhbmRsZXIsXHJcbiAgICBvbmZvY3VzSGFuZGxlcixcclxuICAgIHJlc2V0OnJlc2V0VmFsdWUsXHJcbn07XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VySW5wdXQ7IiwiaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vQ2FyZC5tb2R1bGUuY3NzXCI7XG5cbmNvbnN0IENhcmQgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIDxjYXJkIGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkfT57cHJvcHMuY2hpbGRyZW59PC9jYXJkPjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhcmQ7XG4iLCIvLyBpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG4vLyBpbXBvcnQgY2xhc3NlcyBmcm9tICcuL0J1dHRvbi5tb2R1bGUuY3NzJ1xyXG5cclxuLy8gIGNvbnN0IEJ1dHRvbiA9IChwcm9wcykgPT4ge1xyXG4vLyAgICAgcmV0dXJuIChcclxuLy8gICAgICAgICA8YnV0dG9uXHJcbi8vICAgICAgICAgY2xhc3NOYW1lID0ge2NsYXNzZXMuYnV0dG9ufVxyXG4vLyAgICAgICAgIHR5cGU9IHtwcm9wcy50eXBlIHx8ICdidXR0b24nfVxyXG4vLyAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9XHJcbi8vICAgICAgICAgPlxyXG4vLyAgICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbi8vICAgICAgICAgPC9idXR0b24+XHJcbi8vICAgICApXHJcbi8vIH1cclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IEJ1dHRvbjtcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4uL2J1dHRvbi9CdXR0b24ubW9kdWxlLmNzc1wiO1xyXG5cclxuY29uc3QgQnV0dG9uID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxidXR0b25cclxuICAgICAgdHlwZT17cHJvcHMudHlwZX1cclxuICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn1cclxuICAgICAgb25DbGljaz17cHJvcHMub25DbGlja31cclxuICAgID5cclxuICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgPC9idXR0b24+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBZGRDaG9yZXNGb3JtIGZyb20gXCIuLi9jb21wb25lbnRzL2RhdGFGbG93L2Nob3JlcmVnaXN0cmVhdGlvbi9BZGRDaG9yZXNGb3JtXCI7XHJcbi8vICBpbXBvcnQgY2hvcmVMaXN0IGZyb20gJy4uL2Nob3JlcmVnaXN0cmVhdGlvbi9jaG9yZUxpc3QnO1xyXG5cclxuZnVuY3Rpb24gVXBsb2FkaW5nQ2hvcmVzVG9EYigpIHtcclxuICBhc3luYyBmdW5jdGlvbiB0b0RiSGFuZGxlcihjaG9yZURhdGFPYmplY3QpIHtcclxuICAgIGNvbnN0IHJlc3BvbmNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgIFwiaHR0cHM6Ly9iYWxlbW9qYS05YzVlNi1kZWZhdWx0LXJ0ZGIuZXVyb3BlLXdlc3QxLmZpcmViYXNlZGF0YWJhc2UuYXBwL0Nob3Jlcy5qc29uXCIsXHJcbiAgICAgIC8vIFwiaHR0cHM6Ly9iYWxtb2phLTQ5ZDkwLWRlZmF1bHQtcnRkYi5ldXJvcGUtd2VzdDEuZmlyZWJhc2VkYXRhYmFzZS5hcHAvQ2hvcmVzLmpzb25cIixcclxuICAgICAge1xyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoY2hvcmVEYXRhT2JqZWN0KSxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICB9LFxyXG4gICAgICB9XHJcbiAgICApO1xyXG4gICAgaWYgKCFyZXNwb25jZS5vaykge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFcnJvclwiKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25jZS5qc29uKCk7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgPEFkZENob3Jlc0Zvcm0gb25BZGRjaG9yZXNmb3JtPXt0b0RiSGFuZGxlcn0gLz5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVcGxvYWRpbmdDaG9yZXNUb0RiO1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250cm9sXCI6IFwiQWRkQ2hvcmVfY29udHJvbF9fMm44THRcIixcblx0XCJhY3Rpb25cIjogXCJBZGRDaG9yZV9hY3Rpb25fXzNkZThhXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJDYXJkXCI6IFwiQ2FyZF9DYXJkX18yZWdnZlwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYnV0dG9uXCI6IFwiQnV0dG9uX2J1dHRvbl9fNUJGQ2lcIixcblx0XCJmb2N1c1wiOiBcIkJ1dHRvbl9mb2N1c19fMnh3Q1hcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsiY2xhc3NlcyIsIlVzZXJJbnB1dCIsIkNhcmQiLCJCdXR0b24iLCJ1c2VSZWYiLCJBZGRjaG9yZXNmb3JtIiwicHJvcHMiLCJ2YWx1ZSIsImludHJvRGF0YSIsImlzVmFsaWQiLCJ2YWxpZEludHJvIiwiaGFzRXJyb3IiLCJpblZhbGlkSW50cm8iLCJ2YWx1ZUNoYW5nZUhhbmRsZXIiLCJJbnRyb0NoYW5nZUhhbmRsZXIiLCJvbmZvY3VzSGFuZGxlciIsImJsdXJJbnRybyIsInJlc2V0IiwicmVzZXRJbnRybyIsInRyaW0iLCJkZXNjcmlwdGlvbkRhdGEiLCJ2YWxpZGRldGFpbCIsImluVmFsaWRkZXRhaWwiLCJkZXRhaWxDaGFuZ2VIYW5kbGVyIiwiYmx1cmRldGFpbCIsInJlc2V0ZGV0YWlsIiwiZGVzY3JpcHRpb24iLCJpbnRybyIsImZvcm1WYWxpZGF0aW9uIiwic3VibWl0SGFuZGxlciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInBhaW50Sm9iIiwiY29uc29sZSIsImxvZyIsImNob3JlRGF0YU9iamVjdCIsIm9uQWRkY2hvcmVzZm9ybSIsImludHJvSW5wdXRDbGFzc2VzIiwiZGV0YWlsSW5wdXRDbGFzc2VzIiwiY29udHJvbCIsImFjdGlvbiIsImJ1dHRvbiIsInVzZVN0YXRlIiwidmFsaWRhdGlvbiIsImVudGVyZWRWYWx1ZSIsInNldEVudGVyZWRWYWx1ZSIsImlzVG91Y2VkIiwic2V0SXNUb3VjaGVkIiwidmFsdWVJc1ZhbGlkIiwidGFyZ2V0IiwicmVzZXRWYWx1ZSIsImNhcmQiLCJjaGlsZHJlbiIsInR5cGUiLCJvbkNsaWNrIiwiUmVhY3QiLCJBZGRDaG9yZXNGb3JtIiwiVXBsb2FkaW5nQ2hvcmVzVG9EYiIsInRvRGJIYW5kbGVyIiwicmVzcG9uY2UiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsIm9rIiwiRXJyb3IiLCJkYXRhIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=