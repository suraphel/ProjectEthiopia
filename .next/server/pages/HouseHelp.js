(() => {
var exports = {};
exports.id = "pages/HouseHelp";
exports.ids = ["pages/HouseHelp"];
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

    if (!formValidation) {
      return;
    } // const choreDataObject = {
    //   descriptionData,
    //   introData,
    // };


    const choreDataObject = {
      descriptionData: description.current.value,
      introData: intro.current.value
    }; // console.log(choreDataObject);

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
            children: "Introduction"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
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
            lineNumber: 72,
            columnNumber: 13
          }, this), inValidIntro && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
            className: "error-text",
            children: " Please enter an Introduction "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: (_choreregistreation_AddChore_module_css__WEBPACK_IMPORTED_MODULE_5___default().control),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("label", {
            htmlFor: "descrip",
            children: "Description"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
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
            lineNumber: 88,
            columnNumber: 13
          }, this), inValiddetail && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
            className: "error-text",
            children: " Please enter the details"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: (_choreregistreation_AddChore_module_css__WEBPACK_IMPORTED_MODULE_5___default().action),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_ui_button_Button__WEBPACK_IMPORTED_MODULE_2__.default, {
            className: (_choreregistreation_AddChore_module_css__WEBPACK_IMPORTED_MODULE_5___default().button),
            children: "Add Chores"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 67,
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

/***/ "./pages/HouseHelp.js":
/*!****************************!*\
  !*** ./pages/HouseHelp.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Mechanic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Mechanic */ "./pages/Mechanic.js");
/* harmony import */ var _SearchBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchBar */ "./pages/SearchBar.js");
/* harmony import */ var _UploadingChoresToDb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UploadingChoresToDb */ "./pages/UploadingChoresToDb.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "A:\\Projects\\NextJs\\Balemoja_Next\\Balemoja\\pages\\HouseHelp.js";
// import UploadingToDb from "../../dataFlow/uploadingToDb/UploadingToDb";


 // import classes from "./Pages.module.css";



const HouseHelp = props => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_UploadingChoresToDb__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_Mechanic__WEBPACK_IMPORTED_MODULE_0__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HouseHelp);

/***/ }),

/***/ "./pages/Mechanic.js":
/*!***************************!*\
  !*** ./pages/Mechanic.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UploadingChoresToDb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UploadingChoresToDb */ "./pages/UploadingChoresToDb.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_dataFlow_choreregistreation_AddChoresForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/dataFlow/choreregistreation/AddChoresForm */ "./components/dataFlow/choreregistreation/AddChoresForm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "A:\\Projects\\NextJs\\Balemoja_Next\\Balemoja\\pages\\Mechanic.js";





const Mechanic = props => {
  //   async function toDbHandler(choreDataObject) {
  //     const responce = await fetch(
  //       "https://balemoja-9c5e6-default-rtdb.europe-west1.firebasedatabase.app/Chores.json",
  //       // "https://balmoja-49d90-default-rtdb.europe-west1.firebasedatabase.app/Chores.json",
  //       {
  //         method: "POST",
  //         body: JSON.stringify(choreDataObject),
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );
  //     if (!responce.ok) {
  //       throw new Error("Error");
  //     }
  //     const data = await responce.json();
  //     console.log(data);
  //   }
  let clonedElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().cloneElement(_components_dataFlow_choreregistreation_AddChoresForm__WEBPACK_IMPORTED_MODULE_2__.default, {
    additionaldata: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("form", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("label", {
        htmlFor: "input",
        children: "additional inputs"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
        type: "checkbox"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("label", {
        htmlFor: "input",
        children: "additional inputs"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
        type: "checkbox"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("label", {
        htmlFor: "input",
        children: "additional inputs"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
        type: "checkbox"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("label", {
        htmlFor: "input",
        children: "additional inputs"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
        type: "checkbox"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("label", {
        htmlFor: "input",
        children: "additional inputs"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
        type: "checkbox"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, undefined), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("label", {
        htmlFor: "input",
        children: "additional inputs"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
        type: "checkbox"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, undefined)
  });
  console.log("testings" + clonedElement);
  let out = "suri";
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_UploadingChoresToDb__WEBPACK_IMPORTED_MODULE_0__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("label", {
      htmlFor: "input",
      children: "additional inputs"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
      type: "checkbox"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Mechanic);

/***/ }),

/***/ "./pages/SearchBar.js":
/*!****************************!*\
  !*** ./pages/SearchBar.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_searchBar_Search_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/searchBar/Search.module.css */ "./components/searchBar/Search.module.css");
/* harmony import */ var _components_searchBar_Search_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_searchBar_Search_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "A:\\Projects\\NextJs\\Balemoja_Next\\Balemoja\\pages\\SearchBar.js";



const SearchBar = props => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
      className: (_components_searchBar_Search_module_css__WEBPACK_IMPORTED_MODULE_1___default().searchbar),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        type: "text",
        name: "search"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, undefined);
};

SearchBar.propTypes = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchBar);

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

/***/ "./components/searchBar/Search.module.css":
/*!************************************************!*\
  !*** ./components/searchBar/Search.module.css ***!
  \************************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"searchbar": "Search_searchbar__pvN2v",
	"h2": "Search_h2__2IiW3",
	"h3": "Search_h3__1IymW"
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
var __webpack_exports__ = (__webpack_exec__("./pages/HouseHelp.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7QUNKQTs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhbGVtb2phLy4vY29tcG9uZW50cy9kYXRhRmxvdy9jaG9yZXJlZ2lzdHJlYXRpb24vQWRkQ2hvcmVzRm9ybS5qcyIsIndlYnBhY2s6Ly9iYWxlbW9qYS8uL2NvbXBvbmVudHMvaG9va3MvdXNlci1pbnB1dHMuanMiLCJ3ZWJwYWNrOi8vYmFsZW1vamEvLi9jb21wb25lbnRzL3VpL0NhcmQuanMiLCJ3ZWJwYWNrOi8vYmFsZW1vamEvLi9jb21wb25lbnRzL3VpL2J1dHRvbi9CdXR0b24uanMiLCJ3ZWJwYWNrOi8vYmFsZW1vamEvLi9wYWdlcy9Ib3VzZUhlbHAuanMiLCJ3ZWJwYWNrOi8vYmFsZW1vamEvLi9wYWdlcy9NZWNoYW5pYy5qcyIsIndlYnBhY2s6Ly9iYWxlbW9qYS8uL3BhZ2VzL1NlYXJjaEJhci5qcyIsIndlYnBhY2s6Ly9iYWxlbW9qYS8uL3BhZ2VzL1VwbG9hZGluZ0Nob3Jlc1RvRGIuanMiLCJ3ZWJwYWNrOi8vYmFsZW1vamEvLi9jb21wb25lbnRzL2RhdGFGbG93L2Nob3JlcmVnaXN0cmVhdGlvbi9BZGRDaG9yZS5tb2R1bGUuY3NzIiwid2VicGFjazovL2JhbGVtb2phLy4vY29tcG9uZW50cy9zZWFyY2hCYXIvU2VhcmNoLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vYmFsZW1vamEvLi9jb21wb25lbnRzL3VpL0NhcmQubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9iYWxlbW9qYS8uL2NvbXBvbmVudHMvdWkvYnV0dG9uL0J1dHRvbi5tb2R1bGUuY3NzIiwid2VicGFjazovL2JhbGVtb2phL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9iYWxlbW9qYS9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbIi8vICBpbXBvcnQgICAgJy4uL2NvbXBhbnlyZWdpc3RyYXRpb24vQWRkQ29tcGFuaWVzLmNzcydcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4uL2Nob3JlcmVnaXN0cmVhdGlvbi9BZGRDaG9yZS5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBVc2VySW5wdXQgZnJvbSBcIi4uLy4uL2hvb2tzL3VzZXItaW5wdXRzXCI7XHJcbmltcG9ydCBDYXJkIGZyb20gXCIuLi8uLi91aS9DYXJkXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uLy4uL3VpL2J1dHRvbi9CdXR0b25cIjtcclxuaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5mdW5jdGlvbiBBZGRjaG9yZXNmb3JtKHByb3BzKSB7XHJcbiAgY29uc3Qge1xyXG4gICAgdmFsdWU6IGludHJvRGF0YSxcclxuICAgIGlzVmFsaWQ6IHZhbGlkSW50cm8sXHJcbiAgICBoYXNFcnJvcjogaW5WYWxpZEludHJvLFxyXG4gICAgdmFsdWVDaGFuZ2VIYW5kbGVyOiBJbnRyb0NoYW5nZUhhbmRsZXIsXHJcbiAgICBvbmZvY3VzSGFuZGxlcjogYmx1ckludHJvLFxyXG4gICAgcmVzZXQ6IHJlc2V0SW50cm8sXHJcbiAgfSA9IFVzZXJJbnB1dCgodmFsdWUpID0+IHZhbHVlLnRyaW0oKSAhPT0gXCJcIik7XHJcblxyXG4gIGNvbnN0IHtcclxuICAgIHZhbHVlOiBkZXNjcmlwdGlvbkRhdGEsXHJcbiAgICBpc1ZhbGlkOiB2YWxpZGRldGFpbCxcclxuICAgIGhhc0Vycm9yOiBpblZhbGlkZGV0YWlsLFxyXG4gICAgdmFsdWVDaGFuZ2VIYW5kbGVyOiBkZXRhaWxDaGFuZ2VIYW5kbGVyLFxyXG4gICAgb25mb2N1c0hhbmRsZXI6IGJsdXJkZXRhaWwsXHJcbiAgICByZXNldDogcmVzZXRkZXRhaWwsXHJcbiAgfSA9IFVzZXJJbnB1dCgodmFsdWUpID0+IHZhbHVlLnRyaW0oKSAhPT0gXCJcIik7XHJcblxyXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gdXNlUmVmKFwiXCIpO1xyXG4gIGNvbnN0IGludHJvID0gdXNlUmVmKFwiXCIpO1xyXG5cclxuICBsZXQgZm9ybVZhbGlkYXRpb24gPSBmYWxzZTtcclxuICBpZiAodmFsaWRJbnRybyAmJiB2YWxpZGRldGFpbCkge1xyXG4gICAgZm9ybVZhbGlkYXRpb24gPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc3VibWl0SGFuZGxlcihldmVudCkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBpZiAoIWZvcm1WYWxpZGF0aW9uKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBjb25zdCBjaG9yZURhdGFPYmplY3QgPSB7XHJcbiAgICAvLyAgIGRlc2NyaXB0aW9uRGF0YSxcclxuICAgIC8vICAgaW50cm9EYXRhLFxyXG4gICAgLy8gfTtcclxuXHJcbiAgICBjb25zdCBjaG9yZURhdGFPYmplY3QgPSB7XHJcbiAgICAgIGRlc2NyaXB0aW9uRGF0YTogZGVzY3JpcHRpb24uY3VycmVudC52YWx1ZSxcclxuICAgICAgaW50cm9EYXRhOiBpbnRyby5jdXJyZW50LnZhbHVlLFxyXG4gICAgfTtcclxuICAgIC8vIGNvbnNvbGUubG9nKGNob3JlRGF0YU9iamVjdCk7XHJcbiAgICBwcm9wcy5vbkFkZGNob3Jlc2Zvcm0oY2hvcmVEYXRhT2JqZWN0KTtcclxuXHJcbiAgICByZXNldEludHJvKFwiXCIpO1xyXG4gICAgcmVzZXRkZXRhaWwoXCJcIik7XHJcbiAgfVxyXG5cclxuICBjb25zdCBpbnRyb0lucHV0Q2xhc3NlcyA9IGluVmFsaWRJbnRyb1xyXG4gICAgPyBcImZvcm0tY29udHJvbCBpbnZhbGlkXCJcclxuICAgIDogXCJmb3JtLWNvbnRyb2wgXCI7XHJcblxyXG4gIGNvbnN0IGRldGFpbElucHV0Q2xhc3NlcyA9IGluVmFsaWRkZXRhaWxcclxuICAgID8gXCJmb3JtLWNvbnRyb2wgaW52YWxpZFwiXHJcbiAgICA6IFwiZm9ybS1jb250cm9sIFwiO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENhcmQ+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtzdWJtaXRIYW5kbGVyfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udHJvbH0+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY2hvcmVpbnRyb1wiPkludHJvZHVjdGlvbjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgIHJvd3M9XCIyXCJcclxuICAgICAgICAgICAgICBpZD1cImNob3JlaW50cm9cIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2hvcnQgZXhwbGFuYXRpb24gb2YgdGhlIGNob3JlXCJcclxuICAgICAgICAgICAgICByZWY9e2ludHJvfVxyXG4gICAgICAgICAgICAgIG9uQmx1cj17Ymx1ckludHJvfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtJbnRyb0NoYW5nZUhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgdmFsdWU9e2ludHJvRGF0YX1cclxuICAgICAgICAgICAgPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgIHtpblZhbGlkSW50cm8gJiYgKFxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImVycm9yLXRleHRcIj4gUGxlYXNlIGVudGVyIGFuIEludHJvZHVjdGlvbiA8L3A+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250cm9sfT5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkZXNjcmlwXCI+RGVzY3JpcHRpb248L2xhYmVsPlxyXG4gICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICByb3dzPVwiNVwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJkZXNjcmlwXCJcclxuICAgICAgICAgICAgICByZWY9e2Rlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgIG9uQmx1cj17Ymx1cmRldGFpbH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZGV0YWlsQ2hhbmdlSGFuZGxlcn1cclxuICAgICAgICAgICAgICB2YWx1ZT17ZGVzY3JpcHRpb25EYXRhfVxyXG4gICAgICAgICAgICA+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAge2luVmFsaWRkZXRhaWwgJiYgKFxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImVycm9yLXRleHRcIj4gUGxlYXNlIGVudGVyIHRoZSBkZXRhaWxzPC9wPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5hY3Rpb259PlxyXG4gICAgICAgICAgICB7LyogPGJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufT5BZGQgQ2hvcmVzPC9idXR0b24+ICovfVxyXG4gICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259PkFkZCBDaG9yZXM8L0J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L0NhcmQ+XHJcbiAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBBZGRjaG9yZXNmb3JtO1xyXG4iLCJpbXBvcnQgeyAgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcblxyXG5jb25zdCBVc2VySW5wdXQgPSAodmFsaWRhdGlvbikgPT57XHJcbiAgICBjb25zdCBbZW50ZXJlZFZhbHVlLCBzZXRFbnRlcmVkVmFsdWVdID0gdXNlU3RhdGUoJycpOyBcclxuICAgIGNvbnN0IFtpc1RvdWNlZCwgc2V0SXNUb3VjaGVkXSA9IHVzZVN0YXRlKCcnKTsgXHJcblxyXG4gICAgY29uc3QgdmFsdWVJc1ZhbGlkID0gdmFsaWRhdGlvbihlbnRlcmVkVmFsdWUpOyBcclxuICAgIGNvbnN0IGhhc0Vycm9yID0gIXZhbHVlSXNWYWxpZCAmJiBpc1RvdWNlZDsgXHJcblxyXG4gICAgY29uc3QgdmFsdWVDaGFuZ2VIYW5kbGVyID0gKGV2ZW50KSA9PntcclxuICAgICAgICBzZXRFbnRlcmVkVmFsdWUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvbmZvY3VzSGFuZGxlciA9KGV2ZW50KSA9PiB7XHJcbiAgICAgICAgc2V0SXNUb3VjaGVkKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlc2V0VmFsdWUgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0RW50ZXJlZFZhbHVlKCcnKTtcclxuICAgICAgICBzZXRJc1RvdWNoZWQoZmFsc2UpOyBcclxuICAgIH1cclxuXHJcbiAgICAvLyBWYWxpZGF0aW9uIG9iamVjdFxyXG4gICAgcmV0dXJuIHtcclxuICAgIHZhbHVlOmVudGVyZWRWYWx1ZSxcclxuICAgIGlzVmFsaWQgOiB2YWx1ZUlzVmFsaWQsXHJcbiAgICBoYXNFcnJvciA6IGhhc0Vycm9yLFxyXG4gICAgdmFsdWVDaGFuZ2VIYW5kbGVyLFxyXG4gICAgb25mb2N1c0hhbmRsZXIsXHJcbiAgICByZXNldDpyZXNldFZhbHVlLFxyXG59O1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlcklucHV0OyIsImltcG9ydCBjbGFzc2VzIGZyb20gXCIuL0NhcmQubW9kdWxlLmNzc1wiO1xuXG5jb25zdCBDYXJkID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiA8Y2FyZCBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZH0+e3Byb3BzLmNoaWxkcmVufTwvY2FyZD47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXJkO1xuIiwiLy8gaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuLy8gaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9CdXR0b24ubW9kdWxlLmNzcydcclxuXHJcbi8vICBjb25zdCBCdXR0b24gPSAocHJvcHMpID0+IHtcclxuLy8gICAgIHJldHVybiAoXHJcbi8vICAgICAgICAgPGJ1dHRvblxyXG4vLyAgICAgICAgIGNsYXNzTmFtZSA9IHtjbGFzc2VzLmJ1dHRvbn1cclxuLy8gICAgICAgICB0eXBlPSB7cHJvcHMudHlwZSB8fCAnYnV0dG9uJ31cclxuLy8gICAgICAgICBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfVxyXG4vLyAgICAgICAgID5cclxuLy8gICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4vLyAgICAgICAgIDwvYnV0dG9uPlxyXG4vLyAgICAgKVxyXG4vLyB9XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBCdXR0b247XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuLi9idXR0b24vQnV0dG9uLm1vZHVsZS5jc3NcIjtcclxuXHJcbmNvbnN0IEJ1dHRvbiA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8YnV0dG9uXHJcbiAgICAgIHR5cGU9e3Byb3BzLnR5cGV9XHJcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259XHJcbiAgICAgIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9XHJcbiAgICA+XHJcbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgIDwvYnV0dG9uPlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjtcclxuIiwiLy8gaW1wb3J0IFVwbG9hZGluZ1RvRGIgZnJvbSBcIi4uLy4uL2RhdGFGbG93L3VwbG9hZGluZ1RvRGIvVXBsb2FkaW5nVG9EYlwiO1xyXG5pbXBvcnQgTWVjaGFuaWMgZnJvbSBcIi4vTWVjaGFuaWNcIjtcclxuaW1wb3J0IFNlYXJjaEJhciBmcm9tIFwiLi9TZWFyY2hCYXJcIjtcclxuaW1wb3J0IFVwbG9hZGluZ0Nob3Jlc1RvRGIgZnJvbSBcIi4vVXBsb2FkaW5nQ2hvcmVzVG9EYlwiO1xyXG4vLyBpbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9QYWdlcy5tb2R1bGUuY3NzXCI7XHJcblxyXG5jb25zdCBIb3VzZUhlbHAgPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPFVwbG9hZGluZ0Nob3Jlc1RvRGIgLz5cclxuICAgICAgPE1lY2hhbmljIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBIb3VzZUhlbHA7XHJcbiIsImltcG9ydCBVcGxvYWRpbmdDaG9yZXNUb0RiIGZyb20gXCIuL1VwbG9hZGluZ0Nob3Jlc1RvRGJcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQWRkQ2hvcmVzRm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9kYXRhRmxvdy9jaG9yZXJlZ2lzdHJlYXRpb24vQWRkQ2hvcmVzRm9ybVwiO1xyXG5cclxuY29uc3QgTWVjaGFuaWMgPSAocHJvcHMpID0+IHtcclxuICAvLyAgIGFzeW5jIGZ1bmN0aW9uIHRvRGJIYW5kbGVyKGNob3JlRGF0YU9iamVjdCkge1xyXG4gIC8vICAgICBjb25zdCByZXNwb25jZSA9IGF3YWl0IGZldGNoKFxyXG4gIC8vICAgICAgIFwiaHR0cHM6Ly9iYWxlbW9qYS05YzVlNi1kZWZhdWx0LXJ0ZGIuZXVyb3BlLXdlc3QxLmZpcmViYXNlZGF0YWJhc2UuYXBwL0Nob3Jlcy5qc29uXCIsXHJcbiAgLy8gICAgICAgLy8gXCJodHRwczovL2JhbG1vamEtNDlkOTAtZGVmYXVsdC1ydGRiLmV1cm9wZS13ZXN0MS5maXJlYmFzZWRhdGFiYXNlLmFwcC9DaG9yZXMuanNvblwiLFxyXG4gIC8vICAgICAgIHtcclxuICAvLyAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgLy8gICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShjaG9yZURhdGFPYmplY3QpLFxyXG4gIC8vICAgICAgICAgaGVhZGVyczoge1xyXG4gIC8vICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAvLyAgICAgICAgIH0sXHJcbiAgLy8gICAgICAgfVxyXG4gIC8vICAgICApO1xyXG4gIC8vICAgICBpZiAoIXJlc3BvbmNlLm9rKSB7XHJcbiAgLy8gICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRXJyb3JcIik7XHJcbiAgLy8gICAgIH1cclxuICAvLyAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbmNlLmpzb24oKTtcclxuICAvLyAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgLy8gICB9XHJcblxyXG4gIGxldCBjbG9uZWRFbGVtZW50ID0gUmVhY3QuY2xvbmVFbGVtZW50KEFkZENob3Jlc0Zvcm0sIHtcclxuICAgIGFkZGl0aW9uYWxkYXRhOiAoXHJcbiAgICAgIDxmb3JtPlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaW5wdXRcIj5hZGRpdGlvbmFsIGlucHV0czwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIC8+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJpbnB1dFwiPmFkZGl0aW9uYWwgaW5wdXRzPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgLz5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImlucHV0XCI+YWRkaXRpb25hbCBpbnB1dHM8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAvPlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaW5wdXRcIj5hZGRpdGlvbmFsIGlucHV0czwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIC8+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJpbnB1dFwiPmFkZGl0aW9uYWwgaW5wdXRzPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgLz57XCIgXCJ9XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJpbnB1dFwiPmFkZGl0aW9uYWwgaW5wdXRzPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgLz5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgKSxcclxuICB9KTtcclxuICBjb25zb2xlLmxvZyhcInRlc3RpbmdzXCIgKyBjbG9uZWRFbGVtZW50KTtcclxuICBsZXQgb3V0ID0gXCJzdXJpXCI7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8VXBsb2FkaW5nQ2hvcmVzVG9EYiAvPlxyXG4gICAgICA8bGFiZWwgaHRtbEZvcj1cImlucHV0XCI+YWRkaXRpb25hbCBpbnB1dHM8L2xhYmVsPlxyXG4gICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgLz5cclxuXHJcbiAgICAgIHsvKiA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICA8QWRkQ2hvcmVzRm9ybSBvbkFkZGNob3Jlc2Zvcm09e3RvRGJIYW5kbGVyfSAvPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgPC9SZWFjdC5GcmFnbWVudD4gKi99XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVjaGFuaWM7XHJcbiIsImltcG9ydCBjbGFzc2VzIGZyb20gXCIuLi9jb21wb25lbnRzL3NlYXJjaEJhci9TZWFyY2gubW9kdWxlLmNzc1wiO1xyXG5cclxuY29uc3QgU2VhcmNoQmFyID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHsvKiA8aDI+IFNjcmVlbmVkLCBWZXR0ZWQgYW5kIFJhdGVkIHByb2Zlc3Npb25hbHMgYXJlIGEgY2xpY2sgYXdheTwvaDI+XHJcblx0XHRcdDxoMz5HZXQgdGhlIGpvYiBkb25lIGJ5IHJlbGlhYmxlIGFuZCBjZXJ0aWZpZWQgcHJvZmVzc2lvbmFsczwvaDM+ICovfVxyXG4gICAgICA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMuc2VhcmNoYmFyfT5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwic2VhcmNoXCIgLz5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuU2VhcmNoQmFyLnByb3BUeXBlcyA9IHt9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoQmFyO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBZGRDaG9yZXNGb3JtIGZyb20gXCIuLi9jb21wb25lbnRzL2RhdGFGbG93L2Nob3JlcmVnaXN0cmVhdGlvbi9BZGRDaG9yZXNGb3JtXCI7XHJcbi8vICBpbXBvcnQgY2hvcmVMaXN0IGZyb20gJy4uL2Nob3JlcmVnaXN0cmVhdGlvbi9jaG9yZUxpc3QnO1xyXG5cclxuZnVuY3Rpb24gVXBsb2FkaW5nQ2hvcmVzVG9EYigpIHtcclxuICBhc3luYyBmdW5jdGlvbiB0b0RiSGFuZGxlcihjaG9yZURhdGFPYmplY3QpIHtcclxuICAgIGNvbnN0IHJlc3BvbmNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgIFwiaHR0cHM6Ly9iYWxlbW9qYS05YzVlNi1kZWZhdWx0LXJ0ZGIuZXVyb3BlLXdlc3QxLmZpcmViYXNlZGF0YWJhc2UuYXBwL0Nob3Jlcy5qc29uXCIsXHJcbiAgICAgIC8vIFwiaHR0cHM6Ly9iYWxtb2phLTQ5ZDkwLWRlZmF1bHQtcnRkYi5ldXJvcGUtd2VzdDEuZmlyZWJhc2VkYXRhYmFzZS5hcHAvQ2hvcmVzLmpzb25cIixcclxuICAgICAge1xyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoY2hvcmVEYXRhT2JqZWN0KSxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICB9LFxyXG4gICAgICB9XHJcbiAgICApO1xyXG4gICAgaWYgKCFyZXNwb25jZS5vaykge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFcnJvclwiKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25jZS5qc29uKCk7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgPEFkZENob3Jlc0Zvcm0gb25BZGRjaG9yZXNmb3JtPXt0b0RiSGFuZGxlcn0gLz5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVcGxvYWRpbmdDaG9yZXNUb0RiO1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250cm9sXCI6IFwiQWRkQ2hvcmVfY29udHJvbF9fMm44THRcIixcblx0XCJhY3Rpb25cIjogXCJBZGRDaG9yZV9hY3Rpb25fXzNkZThhXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJzZWFyY2hiYXJcIjogXCJTZWFyY2hfc2VhcmNoYmFyX19wdk4ydlwiLFxuXHRcImgyXCI6IFwiU2VhcmNoX2gyX18ySWlXM1wiLFxuXHRcImgzXCI6IFwiU2VhcmNoX2gzX18xSXltV1wiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiQ2FyZFwiOiBcIkNhcmRfQ2FyZF9fMmVnZ2ZcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImJ1dHRvblwiOiBcIkJ1dHRvbl9idXR0b25fXzVCRkNpXCIsXG5cdFwiZm9jdXNcIjogXCJCdXR0b25fZm9jdXNfXzJ4d0NYXCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbImNsYXNzZXMiLCJVc2VySW5wdXQiLCJDYXJkIiwiQnV0dG9uIiwidXNlUmVmIiwiQWRkY2hvcmVzZm9ybSIsInByb3BzIiwidmFsdWUiLCJpbnRyb0RhdGEiLCJpc1ZhbGlkIiwidmFsaWRJbnRybyIsImhhc0Vycm9yIiwiaW5WYWxpZEludHJvIiwidmFsdWVDaGFuZ2VIYW5kbGVyIiwiSW50cm9DaGFuZ2VIYW5kbGVyIiwib25mb2N1c0hhbmRsZXIiLCJibHVySW50cm8iLCJyZXNldCIsInJlc2V0SW50cm8iLCJ0cmltIiwiZGVzY3JpcHRpb25EYXRhIiwidmFsaWRkZXRhaWwiLCJpblZhbGlkZGV0YWlsIiwiZGV0YWlsQ2hhbmdlSGFuZGxlciIsImJsdXJkZXRhaWwiLCJyZXNldGRldGFpbCIsImRlc2NyaXB0aW9uIiwiaW50cm8iLCJmb3JtVmFsaWRhdGlvbiIsInN1Ym1pdEhhbmRsZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY2hvcmVEYXRhT2JqZWN0IiwiY3VycmVudCIsIm9uQWRkY2hvcmVzZm9ybSIsImludHJvSW5wdXRDbGFzc2VzIiwiZGV0YWlsSW5wdXRDbGFzc2VzIiwiY29udHJvbCIsImFjdGlvbiIsImJ1dHRvbiIsInVzZVN0YXRlIiwidmFsaWRhdGlvbiIsImVudGVyZWRWYWx1ZSIsInNldEVudGVyZWRWYWx1ZSIsImlzVG91Y2VkIiwic2V0SXNUb3VjaGVkIiwidmFsdWVJc1ZhbGlkIiwidGFyZ2V0IiwicmVzZXRWYWx1ZSIsImNhcmQiLCJjaGlsZHJlbiIsInR5cGUiLCJvbkNsaWNrIiwiTWVjaGFuaWMiLCJTZWFyY2hCYXIiLCJVcGxvYWRpbmdDaG9yZXNUb0RiIiwiSG91c2VIZWxwIiwiUmVhY3QiLCJBZGRDaG9yZXNGb3JtIiwiY2xvbmVkRWxlbWVudCIsImNsb25lRWxlbWVudCIsImFkZGl0aW9uYWxkYXRhIiwiY29uc29sZSIsImxvZyIsIm91dCIsInNlYXJjaGJhciIsInByb3BUeXBlcyIsInRvRGJIYW5kbGVyIiwicmVzcG9uY2UiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsIm9rIiwiRXJyb3IiLCJkYXRhIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=