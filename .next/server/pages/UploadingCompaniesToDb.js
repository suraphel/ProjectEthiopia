(() => {
var exports = {};
exports.id = "pages/UploadingCompaniesToDb";
exports.ids = ["pages/UploadingCompaniesToDb"];
exports.modules = {

/***/ "./components/dataFlow/companyregistration/AddCompaniesForm.js":
/*!*********************************************************************!*\
  !*** ./components/dataFlow/companyregistration/AddCompaniesForm.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _hooks_user_inputs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../hooks/user-inputs */ "./components/hooks/user-inputs.js");
/* harmony import */ var _ui_button_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/button/Button */ "./components/ui/button/Button.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "A:\\Projects\\NextJs\\Balemoja_Next\\Balemoja\\components\\dataFlow\\companyregistration\\AddCompaniesForm.js";
// import  {useRef} from 'react'
// import  './AddCompanies.css';
// import { Int32 } from "bson";




function AddCompaniesForm(props) {
  const {
    value: companyname,
    isValid: validcompname,
    hasError: inValidcompname,
    valueChangeHandler: compnameChangeHandler,
    onfocusHandler: blurcompname,
    reset: resetcompanyname
  } = (0,_hooks_user_inputs__WEBPACK_IMPORTED_MODULE_0__.default)(value => value.trim() !== "");
  const {
    value: lineOfBusiness,
    isValid: ValidlineOfBusiness,
    hasError: inValidlineOfBusiness,
    valueChangeHandler: lineOfBusinessChangeHandler,
    onfocusHandler: blurlineOfBusiness,
    reset: resetlineOfBusiness
  } = (0,_hooks_user_inputs__WEBPACK_IMPORTED_MODULE_0__.default)(value => value.trim() !== "");
  const {
    value: contactperson,
    isValid: validcontactperson,
    hasError: inValidcontactperson,
    valueChangeHandler: contactpersonChangeHandler,
    onfocusHandler: blurcontactperson,
    reset: resetcontactperson
  } = (0,_hooks_user_inputs__WEBPACK_IMPORTED_MODULE_0__.default)(value => value.trim() !== "");
  const {
    value: tele,
    isValid: validtele,
    hasError: inValidtele,
    valueChangeHandler: teleChangeHandler,
    onfocusHandler: blurtele,
    reset: resettele
  } = (0,_hooks_user_inputs__WEBPACK_IMPORTED_MODULE_0__.default)(value => value.trim() !== "");
  const {
    value: TIN,
    isValid: validtin,
    hasError: inValidtin,
    valueChangeHandler: tinChangeHandler,
    onfocusHandler: blurtin,
    reset: resettin
  } = (0,_hooks_user_inputs__WEBPACK_IMPORTED_MODULE_0__.default)(value => value.trim() !== "");
  let formValidation = false;

  if (validcompname && validcontactperson && validtele && validtin // lineOfBusiness
  ) {
    formValidation = true;
  } // const companyname = useRef();
  // const contactperson = useRef();
  // const telephone = useRef();
  // cn


  const submitHandler = event => {
    event.preventDefault();

    if (!formValidation) {
      return;
    } // console.log(companyname,contactperson,tele);
    //getting the select option  form input from the form


    let e = document.getElementById("lineOfBusiness");
    let lineOfBusiness = e.value;
    const companyDataObject = {
      companyname,
      contactperson,
      tele,
      TIN,
      lineOfBusiness
    };
    console.log("here is the text " + lineOfBusiness);
    props.onAddcompaniesform(companyDataObject);
    resetcompanyname("");
    resetcontactperson("");
    resettele("");
    resettin("");
    let use = companyDataObject.lineOfBusiness = "";
    console.log("here is the formted form " + use); // resetForm("");
    // const items = {
    //   name: companyname.current.value,
    //   cperson: contactperson.current.value,
    //   sname: telephone.current.value}
  }; // const items = {
  //   name :companyname.current.value,
  //   cperson: contactperson.current.value,
  //   sname :telephone.current.value
  // }


  const nameInputClasses = inValidcompname ? "form-control invalid" : "form-control ";
  const contactInputClasses = inValidcontactperson ? "form-control invalid" : "form-control ";
  const teleInputClasses = inValidtele ? "form-control invalid" : "form-control ";
  const tinInputClasses = inValidtin ? "form-control invalid" : "form-control ";
  const lineOfBusinessClasses = inValidlineOfBusiness ? "form-control invalid" : "form-control";
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("form", {
    onSubmit: submitHandler,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: "app",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: tinInputClasses,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("label", {
          htmlFor: "tin",
          children: " TIN ID "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
          type: "number",
          id: "TIN" // ref={telephone}
          ,
          value: TIN,
          onBlur: blurtin,
          onChange: tinChangeHandler
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 11
        }, this), inValidtin && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
          className: "error-text",
          children: "Please enter a valid TIN ID"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 151,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: nameInputClasses,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("label", {
          htmlFor: "compname",
          children: " Company Name "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
          type: "text",
          id: "compname" // ref={companyname}
          ,
          onBlur: blurcompname,
          onChange: compnameChangeHandler,
          value: companyname
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 11
        }, this), inValidcompname && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
          className: "error-text",
          children: "Please fill in a valid name"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: lineOfBusinessClasses,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("label", {
          htmlFor: "lineOfBusiness",
          children: " Line of Business "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("select", {
          id: "lineOfBusiness",
          required: true,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
            value: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 172,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
            value: "Mechanic",
            children: "Mechanic "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 173,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
            value: "HandyMan",
            children: "HandyMan "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 174,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
            value: "House Hel",
            children: "House Help "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 175,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
            value: "IT Solution",
            children: "IT Solution "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 176,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
            value: "Architect",
            children: "Architect "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 177,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
            value: "Gardner",
            children: "Gardner "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 178,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
            value: "Transport",
            children: "Transport "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 179,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
            value: "Cleaning",
            children: "Cleaning "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 180,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
            value: "other",
            children: "Other ... "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 181,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: contactInputClasses,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("label", {
          htmlFor: "contperson",
          children: " Contact Person "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 199,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
          type: "text",
          id: "contperson" // ref={contactperson}
          ,
          value: contactperson,
          onBlur: blurcontactperson,
          onChange: contactpersonChangeHandler
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 200,
          columnNumber: 11
        }, this), inValidcontactperson && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
          className: "error-text",
          children: "Please enter a valid Contact Person"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 209,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 198,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: teleInputClasses,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("label", {
          htmlFor: "tel",
          children: " Telephone "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 213,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
          type: "tel",
          id: "tel" // ref={telephone}
          ,
          value: tele,
          onBlur: blurtele,
          onChange: teleChangeHandler
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 214,
          columnNumber: 11
        }, this), inValidtele && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
          className: "error-text",
          children: "Please enter a valid Phone number"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 223,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 212,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_ui_button_Button__WEBPACK_IMPORTED_MODULE_1__.default, {
        className: "button",
        children: " Add Company "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 227,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 138,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddCompaniesForm);

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

/***/ "./pages/UploadingCompaniesToDb.js":
/*!*****************************************!*\
  !*** ./pages/UploadingCompaniesToDb.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_dataFlow_companyregistration_AddCompaniesForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/dataFlow/companyregistration/AddCompaniesForm */ "./components/dataFlow/companyregistration/AddCompaniesForm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "A:\\Projects\\NextJs\\Balemoja_Next\\Balemoja\\pages\\UploadingCompaniesToDb.js";




function UploadingCompaniesToDb() {
  async function toDbHandler(companyDataObject) {
    const responce = await fetch("https://balemoja-9c5e6-default-rtdb.europe-west1.firebasedatabase.app/Companies.json", {
      method: "POST",
      body: JSON.stringify(companyDataObject),
      headers: {
        "Content-Type": "application/json"
      }
    }); // if(!responce.ok){
    //   throw new Error('Error');
    // }

    const data = await responce.json();
    console.log(data);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("section", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_dataFlow_companyregistration_AddCompaniesForm__WEBPACK_IMPORTED_MODULE_1__.default, {
        onAddcompaniesform: toDbHandler
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UploadingCompaniesToDb);

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
var __webpack_exports__ = (__webpack_exec__("./pages/UploadingCompaniesToDb.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBRTFCO0FBQ0VDLE1BQUFBLE1BQU0sRUFBRSxNQURWO0FBRUVDLE1BQUFBLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVoQyxpQkFBZixDQUZSO0FBR0VpQyxNQUFBQSxPQUFPLEVBQUU7QUFDUCx3QkFBZ0I7QUFEVDtBQUhYLEtBRjBCLENBQTVCLENBRDRDLENBVzVDO0FBQ0E7QUFDQTs7QUFDQSxVQUFNQyxJQUFJLEdBQUcsTUFBTVAsUUFBUSxDQUFDUSxJQUFULEVBQW5CO0FBQ0FsQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWWdDLElBQVo7QUFDRDs7QUFDRCxzQkFDRSw4REFBQyx1REFBRDtBQUFBLDJCQUNFO0FBQUEsNkJBQ0UsOERBQUMsOEZBQUQ7QUFBa0IsMEJBQWtCLEVBQUVSO0FBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBT0Q7O0FBRUQsaUVBQWVELHNCQUFmOzs7Ozs7Ozs7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0pBOzs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmFsZW1vamEvLi9jb21wb25lbnRzL2RhdGFGbG93L2NvbXBhbnlyZWdpc3RyYXRpb24vQWRkQ29tcGFuaWVzRm9ybS5qcyIsIndlYnBhY2s6Ly9iYWxlbW9qYS8uL2NvbXBvbmVudHMvaG9va3MvdXNlci1pbnB1dHMuanMiLCJ3ZWJwYWNrOi8vYmFsZW1vamEvLi9jb21wb25lbnRzL3VpL2J1dHRvbi9CdXR0b24uanMiLCJ3ZWJwYWNrOi8vYmFsZW1vamEvLi9wYWdlcy9VcGxvYWRpbmdDb21wYW5pZXNUb0RiLmpzIiwid2VicGFjazovL2JhbGVtb2phLy4vY29tcG9uZW50cy91aS9idXR0b24vQnV0dG9uLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vYmFsZW1vamEvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2JhbGVtb2phL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0ICB7dXNlUmVmfSBmcm9tICdyZWFjdCdcclxuLy8gaW1wb3J0ICAnLi9BZGRDb21wYW5pZXMuY3NzJztcclxuLy8gaW1wb3J0IHsgSW50MzIgfSBmcm9tIFwiYnNvblwiO1xyXG5pbXBvcnQgVXNlcklucHV0IGZyb20gXCIuLi8uLi9ob29rcy91c2VyLWlucHV0c1wiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi8uLi91aS9idXR0b24vQnV0dG9uXCI7XHJcblxyXG5mdW5jdGlvbiBBZGRDb21wYW5pZXNGb3JtKHByb3BzKSB7XHJcbiAgY29uc3Qge1xyXG4gICAgdmFsdWU6IGNvbXBhbnluYW1lLFxyXG4gICAgaXNWYWxpZDogdmFsaWRjb21wbmFtZSxcclxuICAgIGhhc0Vycm9yOiBpblZhbGlkY29tcG5hbWUsXHJcbiAgICB2YWx1ZUNoYW5nZUhhbmRsZXI6IGNvbXBuYW1lQ2hhbmdlSGFuZGxlcixcclxuICAgIG9uZm9jdXNIYW5kbGVyOiBibHVyY29tcG5hbWUsXHJcbiAgICByZXNldDogcmVzZXRjb21wYW55bmFtZSxcclxuICB9ID0gVXNlcklucHV0KCh2YWx1ZSkgPT4gdmFsdWUudHJpbSgpICE9PSBcIlwiKTtcclxuXHJcbiAgY29uc3Qge1xyXG4gICAgdmFsdWU6IGxpbmVPZkJ1c2luZXNzLFxyXG4gICAgaXNWYWxpZDogVmFsaWRsaW5lT2ZCdXNpbmVzcyxcclxuICAgIGhhc0Vycm9yOiBpblZhbGlkbGluZU9mQnVzaW5lc3MsXHJcbiAgICB2YWx1ZUNoYW5nZUhhbmRsZXI6IGxpbmVPZkJ1c2luZXNzQ2hhbmdlSGFuZGxlcixcclxuICAgIG9uZm9jdXNIYW5kbGVyOiBibHVybGluZU9mQnVzaW5lc3MsXHJcbiAgICByZXNldDogcmVzZXRsaW5lT2ZCdXNpbmVzcyxcclxuICB9ID0gVXNlcklucHV0KCh2YWx1ZSkgPT4gdmFsdWUudHJpbSgpICE9PSBcIlwiKTtcclxuXHJcbiAgY29uc3Qge1xyXG4gICAgdmFsdWU6IGNvbnRhY3RwZXJzb24sXHJcbiAgICBpc1ZhbGlkOiB2YWxpZGNvbnRhY3RwZXJzb24sXHJcbiAgICBoYXNFcnJvcjogaW5WYWxpZGNvbnRhY3RwZXJzb24sXHJcbiAgICB2YWx1ZUNoYW5nZUhhbmRsZXI6IGNvbnRhY3RwZXJzb25DaGFuZ2VIYW5kbGVyLFxyXG4gICAgb25mb2N1c0hhbmRsZXI6IGJsdXJjb250YWN0cGVyc29uLFxyXG4gICAgcmVzZXQ6IHJlc2V0Y29udGFjdHBlcnNvbixcclxuICB9ID0gVXNlcklucHV0KCh2YWx1ZSkgPT4gdmFsdWUudHJpbSgpICE9PSBcIlwiKTtcclxuXHJcbiAgY29uc3Qge1xyXG4gICAgdmFsdWU6IHRlbGUsXHJcbiAgICBpc1ZhbGlkOiB2YWxpZHRlbGUsXHJcbiAgICBoYXNFcnJvcjogaW5WYWxpZHRlbGUsXHJcbiAgICB2YWx1ZUNoYW5nZUhhbmRsZXI6IHRlbGVDaGFuZ2VIYW5kbGVyLFxyXG4gICAgb25mb2N1c0hhbmRsZXI6IGJsdXJ0ZWxlLFxyXG4gICAgcmVzZXQ6IHJlc2V0dGVsZSxcclxuICB9ID0gVXNlcklucHV0KCh2YWx1ZSkgPT4gdmFsdWUudHJpbSgpICE9PSBcIlwiKTtcclxuXHJcbiAgY29uc3Qge1xyXG4gICAgdmFsdWU6IFRJTixcclxuICAgIGlzVmFsaWQ6IHZhbGlkdGluLFxyXG4gICAgaGFzRXJyb3I6IGluVmFsaWR0aW4sXHJcbiAgICB2YWx1ZUNoYW5nZUhhbmRsZXI6IHRpbkNoYW5nZUhhbmRsZXIsXHJcbiAgICBvbmZvY3VzSGFuZGxlcjogYmx1cnRpbixcclxuICAgIHJlc2V0OiByZXNldHRpbixcclxuICB9ID0gVXNlcklucHV0KCh2YWx1ZSkgPT4gdmFsdWUudHJpbSgpICE9PSBcIlwiKTtcclxuXHJcbiAgbGV0IGZvcm1WYWxpZGF0aW9uID0gZmFsc2U7XHJcbiAgaWYgKFxyXG4gICAgdmFsaWRjb21wbmFtZSAmJlxyXG4gICAgdmFsaWRjb250YWN0cGVyc29uICYmXHJcbiAgICB2YWxpZHRlbGUgJiZcclxuICAgIHZhbGlkdGluXHJcbiAgICAvLyBsaW5lT2ZCdXNpbmVzc1xyXG4gICkge1xyXG4gICAgZm9ybVZhbGlkYXRpb24gPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgLy8gY29uc3QgY29tcGFueW5hbWUgPSB1c2VSZWYoKTtcclxuICAvLyBjb25zdCBjb250YWN0cGVyc29uID0gdXNlUmVmKCk7XHJcbiAgLy8gY29uc3QgdGVsZXBob25lID0gdXNlUmVmKCk7XHJcbiAgLy8gY25cclxuXHJcbiAgY29uc3Qgc3VibWl0SGFuZGxlciA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBpZiAoIWZvcm1WYWxpZGF0aW9uKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZyhjb21wYW55bmFtZSxjb250YWN0cGVyc29uLHRlbGUpO1xyXG5cclxuICAgIC8vZ2V0dGluZyB0aGUgc2VsZWN0IG9wdGlvbiAgZm9ybSBpbnB1dCBmcm9tIHRoZSBmb3JtXHJcblxyXG4gICAgbGV0IGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpbmVPZkJ1c2luZXNzXCIpO1xyXG4gICAgbGV0IGxpbmVPZkJ1c2luZXNzID0gZS52YWx1ZTtcclxuXHJcbiAgICBjb25zdCBjb21wYW55RGF0YU9iamVjdCA9IHtcclxuICAgICAgY29tcGFueW5hbWUsXHJcbiAgICAgIGNvbnRhY3RwZXJzb24sXHJcbiAgICAgIHRlbGUsXHJcbiAgICAgIFRJTixcclxuICAgICAgbGluZU9mQnVzaW5lc3MsXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiaGVyZSBpcyB0aGUgdGV4dCBcIiArIGxpbmVPZkJ1c2luZXNzKTtcclxuXHJcbiAgICBwcm9wcy5vbkFkZGNvbXBhbmllc2Zvcm0oY29tcGFueURhdGFPYmplY3QpO1xyXG5cclxuICAgIHJlc2V0Y29tcGFueW5hbWUoXCJcIik7XHJcbiAgICByZXNldGNvbnRhY3RwZXJzb24oXCJcIik7XHJcbiAgICByZXNldHRlbGUoXCJcIik7XHJcbiAgICByZXNldHRpbihcIlwiKTtcclxuXHJcbiAgICBsZXQgdXNlID0gKGNvbXBhbnlEYXRhT2JqZWN0LmxpbmVPZkJ1c2luZXNzID0gXCJcIik7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJoZXJlIGlzIHRoZSBmb3JtdGVkIGZvcm0gXCIgKyB1c2UpO1xyXG5cclxuICAgIC8vIHJlc2V0Rm9ybShcIlwiKTtcclxuXHJcbiAgICAvLyBjb25zdCBpdGVtcyA9IHtcclxuICAgIC8vICAgbmFtZTogY29tcGFueW5hbWUuY3VycmVudC52YWx1ZSxcclxuICAgIC8vICAgY3BlcnNvbjogY29udGFjdHBlcnNvbi5jdXJyZW50LnZhbHVlLFxyXG4gICAgLy8gICBzbmFtZTogdGVsZXBob25lLmN1cnJlbnQudmFsdWV9XHJcbiAgfTtcclxuXHJcbiAgLy8gY29uc3QgaXRlbXMgPSB7XHJcbiAgLy8gICBuYW1lIDpjb21wYW55bmFtZS5jdXJyZW50LnZhbHVlLFxyXG4gIC8vICAgY3BlcnNvbjogY29udGFjdHBlcnNvbi5jdXJyZW50LnZhbHVlLFxyXG4gIC8vICAgc25hbWUgOnRlbGVwaG9uZS5jdXJyZW50LnZhbHVlXHJcblxyXG4gIC8vIH1cclxuXHJcbiAgY29uc3QgbmFtZUlucHV0Q2xhc3NlcyA9IGluVmFsaWRjb21wbmFtZVxyXG4gICAgPyBcImZvcm0tY29udHJvbCBpbnZhbGlkXCJcclxuICAgIDogXCJmb3JtLWNvbnRyb2wgXCI7XHJcblxyXG4gIGNvbnN0IGNvbnRhY3RJbnB1dENsYXNzZXMgPSBpblZhbGlkY29udGFjdHBlcnNvblxyXG4gICAgPyBcImZvcm0tY29udHJvbCBpbnZhbGlkXCJcclxuICAgIDogXCJmb3JtLWNvbnRyb2wgXCI7XHJcblxyXG4gIGNvbnN0IHRlbGVJbnB1dENsYXNzZXMgPSBpblZhbGlkdGVsZVxyXG4gICAgPyBcImZvcm0tY29udHJvbCBpbnZhbGlkXCJcclxuICAgIDogXCJmb3JtLWNvbnRyb2wgXCI7XHJcblxyXG4gIGNvbnN0IHRpbklucHV0Q2xhc3NlcyA9IGluVmFsaWR0aW4gPyBcImZvcm0tY29udHJvbCBpbnZhbGlkXCIgOiBcImZvcm0tY29udHJvbCBcIjtcclxuXHJcbiAgY29uc3QgbGluZU9mQnVzaW5lc3NDbGFzc2VzID0gaW5WYWxpZGxpbmVPZkJ1c2luZXNzXHJcbiAgICA/IFwiZm9ybS1jb250cm9sIGludmFsaWRcIlxyXG4gICAgOiBcImZvcm0tY29udHJvbFwiO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGZvcm0gb25TdWJtaXQ9e3N1Ym1pdEhhbmRsZXJ9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aW5JbnB1dENsYXNzZXN9PlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0aW5cIj4gVElOIElEIDwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgIGlkPVwiVElOXCJcclxuICAgICAgICAgICAgLy8gcmVmPXt0ZWxlcGhvbmV9XHJcbiAgICAgICAgICAgIHZhbHVlPXtUSU59XHJcbiAgICAgICAgICAgIG9uQmx1cj17Ymx1cnRpbn1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e3RpbkNoYW5nZUhhbmRsZXJ9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAge2luVmFsaWR0aW4gJiYgKFxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJlcnJvci10ZXh0XCI+UGxlYXNlIGVudGVyIGEgdmFsaWQgVElOIElEPC9wPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17bmFtZUlucHV0Q2xhc3Nlc30+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImNvbXBuYW1lXCI+IENvbXBhbnkgTmFtZSA8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgaWQ9XCJjb21wbmFtZVwiXHJcbiAgICAgICAgICAgIC8vIHJlZj17Y29tcGFueW5hbWV9XHJcbiAgICAgICAgICAgIG9uQmx1cj17Ymx1cmNvbXBuYW1lfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17Y29tcG5hbWVDaGFuZ2VIYW5kbGVyfVxyXG4gICAgICAgICAgICB2YWx1ZT17Y29tcGFueW5hbWV9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAge2luVmFsaWRjb21wbmFtZSAmJiAoXHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImVycm9yLXRleHRcIj5QbGVhc2UgZmlsbCBpbiBhIHZhbGlkIG5hbWU8L3A+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17bGluZU9mQnVzaW5lc3NDbGFzc2VzfT5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibGluZU9mQnVzaW5lc3NcIj4gTGluZSBvZiBCdXNpbmVzcyA8L2xhYmVsPlxyXG4gICAgICAgICAgPHNlbGVjdCBpZD1cImxpbmVPZkJ1c2luZXNzXCIgcmVxdWlyZWQ+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj48L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk1lY2hhbmljXCI+TWVjaGFuaWMgPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJIYW5keU1hblwiPkhhbmR5TWFuIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiSG91c2UgSGVsXCI+SG91c2UgSGVscCA8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIklUIFNvbHV0aW9uXCI+SVQgU29sdXRpb24gPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJBcmNoaXRlY3RcIj5BcmNoaXRlY3QgPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJHYXJkbmVyXCI+R2FyZG5lciA8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlRyYW5zcG9ydFwiPlRyYW5zcG9ydCA8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkNsZWFuaW5nXCI+Q2xlYW5pbmcgPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJvdGhlclwiPk90aGVyIC4uLiA8L29wdGlvbj5cclxuICAgICAgICAgIDwvc2VsZWN0PlxyXG5cclxuICAgICAgICAgIHsvKiAvLyApIHx8IChcclxuICAgICAgICAgICAgLy8gICA8aW5wdXRcclxuICAgICAgICAgICAgLy8gICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgLy8gICAgIGlkPVwibGluZU9mQnVzaW5lc3NcIlxyXG4gICAgICAgICAgICAvLyAgICAgLy8gcmVmPXt0ZWxlcGhvbmV9XHJcbiAgICAgICAgICAgIC8vICAgICB2YWx1ZT17bGluZU9mQnVzaW5lc3N9XHJcbiAgICAgICAgICAgIC8vICAgICBvbkJsdXI9e2JsdXJsaW5lT2ZCdXNpbmVzc31cclxuICAgICAgICAgICAgLy8gICAgIG9uQ2hhbmdlPXtsaW5lT2ZCdXNpbmVzc0NoYW5nZUhhbmRsZXJ9XHJcbiAgICAgICAgICAgIC8vICAgLz4gXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIC8vIHtpblZhbGlkbGluZU9mQnVzaW5lc3MgJiYgKFxyXG4gICAgICAgICAgLy8gICA8cCBjbGFzc05hbWU9XCJlcnJvci10ZXh0XCI+U3BlY2lmeSBMaW5lIG9mIEJ1c2luZXNzIDwvcD5cclxuICAgICAgICAgIC8vICl9Ki99XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NvbnRhY3RJbnB1dENsYXNzZXN9PlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjb250cGVyc29uXCI+IENvbnRhY3QgUGVyc29uIDwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBpZD1cImNvbnRwZXJzb25cIlxyXG4gICAgICAgICAgICAvLyByZWY9e2NvbnRhY3RwZXJzb259XHJcbiAgICAgICAgICAgIHZhbHVlPXtjb250YWN0cGVyc29ufVxyXG4gICAgICAgICAgICBvbkJsdXI9e2JsdXJjb250YWN0cGVyc29ufVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17Y29udGFjdHBlcnNvbkNoYW5nZUhhbmRsZXJ9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAge2luVmFsaWRjb250YWN0cGVyc29uICYmIChcclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZXJyb3ItdGV4dFwiPlBsZWFzZSBlbnRlciBhIHZhbGlkIENvbnRhY3QgUGVyc29uPC9wPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGVsZUlucHV0Q2xhc3Nlc30+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRlbFwiPiBUZWxlcGhvbmUgPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGVsXCJcclxuICAgICAgICAgICAgaWQ9XCJ0ZWxcIlxyXG4gICAgICAgICAgICAvLyByZWY9e3RlbGVwaG9uZX1cclxuICAgICAgICAgICAgdmFsdWU9e3RlbGV9XHJcbiAgICAgICAgICAgIG9uQmx1cj17Ymx1cnRlbGV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0ZWxlQ2hhbmdlSGFuZGxlcn1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICB7aW5WYWxpZHRlbGUgJiYgKFxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJlcnJvci10ZXh0XCI+UGxlYXNlIGVudGVyIGEgdmFsaWQgUGhvbmUgbnVtYmVyPC9wPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b25cIj4gQWRkIENvbXBhbnkgPC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9mb3JtPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkZENvbXBhbmllc0Zvcm07XHJcbiIsImltcG9ydCB7ICB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuXHJcbmNvbnN0IFVzZXJJbnB1dCA9ICh2YWxpZGF0aW9uKSA9PntcclxuICAgIGNvbnN0IFtlbnRlcmVkVmFsdWUsIHNldEVudGVyZWRWYWx1ZV0gPSB1c2VTdGF0ZSgnJyk7IFxyXG4gICAgY29uc3QgW2lzVG91Y2VkLCBzZXRJc1RvdWNoZWRdID0gdXNlU3RhdGUoJycpOyBcclxuXHJcbiAgICBjb25zdCB2YWx1ZUlzVmFsaWQgPSB2YWxpZGF0aW9uKGVudGVyZWRWYWx1ZSk7IFxyXG4gICAgY29uc3QgaGFzRXJyb3IgPSAhdmFsdWVJc1ZhbGlkICYmIGlzVG91Y2VkOyBcclxuXHJcbiAgICBjb25zdCB2YWx1ZUNoYW5nZUhhbmRsZXIgPSAoZXZlbnQpID0+e1xyXG4gICAgICAgIHNldEVudGVyZWRWYWx1ZShldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG9uZm9jdXNIYW5kbGVyID0oZXZlbnQpID0+IHtcclxuICAgICAgICBzZXRJc1RvdWNoZWQodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVzZXRWYWx1ZSA9ICgpID0+IHtcclxuICAgICAgICBzZXRFbnRlcmVkVmFsdWUoJycpO1xyXG4gICAgICAgIHNldElzVG91Y2hlZChmYWxzZSk7IFxyXG4gICAgfVxyXG5cclxuICAgIC8vIFZhbGlkYXRpb24gb2JqZWN0XHJcbiAgICByZXR1cm4ge1xyXG4gICAgdmFsdWU6ZW50ZXJlZFZhbHVlLFxyXG4gICAgaXNWYWxpZCA6IHZhbHVlSXNWYWxpZCxcclxuICAgIGhhc0Vycm9yIDogaGFzRXJyb3IsXHJcbiAgICB2YWx1ZUNoYW5nZUhhbmRsZXIsXHJcbiAgICBvbmZvY3VzSGFuZGxlcixcclxuICAgIHJlc2V0OnJlc2V0VmFsdWUsXHJcbn07XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VySW5wdXQ7IiwiLy8gaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuLy8gaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9CdXR0b24ubW9kdWxlLmNzcydcclxuXHJcbi8vICBjb25zdCBCdXR0b24gPSAocHJvcHMpID0+IHtcclxuLy8gICAgIHJldHVybiAoXHJcbi8vICAgICAgICAgPGJ1dHRvblxyXG4vLyAgICAgICAgIGNsYXNzTmFtZSA9IHtjbGFzc2VzLmJ1dHRvbn1cclxuLy8gICAgICAgICB0eXBlPSB7cHJvcHMudHlwZSB8fCAnYnV0dG9uJ31cclxuLy8gICAgICAgICBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfVxyXG4vLyAgICAgICAgID5cclxuLy8gICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4vLyAgICAgICAgIDwvYnV0dG9uPlxyXG4vLyAgICAgKVxyXG4vLyB9XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBCdXR0b247XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuLi9idXR0b24vQnV0dG9uLm1vZHVsZS5jc3NcIjtcclxuXHJcbmNvbnN0IEJ1dHRvbiA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8YnV0dG9uXHJcbiAgICAgIHR5cGU9e3Byb3BzLnR5cGV9XHJcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259XHJcbiAgICAgIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9XHJcbiAgICA+XHJcbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgIDwvYnV0dG9uPlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQWRkQ29tcGFuaWVzRm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9kYXRhRmxvdy9jb21wYW55cmVnaXN0cmF0aW9uL0FkZENvbXBhbmllc0Zvcm1cIjtcclxuXHJcbmZ1bmN0aW9uIFVwbG9hZGluZ0NvbXBhbmllc1RvRGIoKSB7XHJcbiAgYXN5bmMgZnVuY3Rpb24gdG9EYkhhbmRsZXIoY29tcGFueURhdGFPYmplY3QpIHtcclxuICAgIGNvbnN0IHJlc3BvbmNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgIFwiaHR0cHM6Ly9iYWxlbW9qYS05YzVlNi1kZWZhdWx0LXJ0ZGIuZXVyb3BlLXdlc3QxLmZpcmViYXNlZGF0YWJhc2UuYXBwL0NvbXBhbmllcy5qc29uXCIsXHJcbiAgICAgIHtcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGNvbXBhbnlEYXRhT2JqZWN0KSxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICB9LFxyXG4gICAgICB9XHJcbiAgICApO1xyXG4gICAgLy8gaWYoIXJlc3BvbmNlLm9rKXtcclxuICAgIC8vICAgdGhyb3cgbmV3IEVycm9yKCdFcnJvcicpO1xyXG4gICAgLy8gfVxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbmNlLmpzb24oKTtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICA8c2VjdGlvbj5cclxuICAgICAgICA8QWRkQ29tcGFuaWVzRm9ybSBvbkFkZGNvbXBhbmllc2Zvcm09e3RvRGJIYW5kbGVyfSAvPlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVwbG9hZGluZ0NvbXBhbmllc1RvRGI7XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImJ1dHRvblwiOiBcIkJ1dHRvbl9idXR0b25fXzVCRkNpXCIsXG5cdFwiZm9jdXNcIjogXCJCdXR0b25fZm9jdXNfXzJ4d0NYXCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbIlVzZXJJbnB1dCIsIkJ1dHRvbiIsIkFkZENvbXBhbmllc0Zvcm0iLCJwcm9wcyIsInZhbHVlIiwiY29tcGFueW5hbWUiLCJpc1ZhbGlkIiwidmFsaWRjb21wbmFtZSIsImhhc0Vycm9yIiwiaW5WYWxpZGNvbXBuYW1lIiwidmFsdWVDaGFuZ2VIYW5kbGVyIiwiY29tcG5hbWVDaGFuZ2VIYW5kbGVyIiwib25mb2N1c0hhbmRsZXIiLCJibHVyY29tcG5hbWUiLCJyZXNldCIsInJlc2V0Y29tcGFueW5hbWUiLCJ0cmltIiwibGluZU9mQnVzaW5lc3MiLCJWYWxpZGxpbmVPZkJ1c2luZXNzIiwiaW5WYWxpZGxpbmVPZkJ1c2luZXNzIiwibGluZU9mQnVzaW5lc3NDaGFuZ2VIYW5kbGVyIiwiYmx1cmxpbmVPZkJ1c2luZXNzIiwicmVzZXRsaW5lT2ZCdXNpbmVzcyIsImNvbnRhY3RwZXJzb24iLCJ2YWxpZGNvbnRhY3RwZXJzb24iLCJpblZhbGlkY29udGFjdHBlcnNvbiIsImNvbnRhY3RwZXJzb25DaGFuZ2VIYW5kbGVyIiwiYmx1cmNvbnRhY3RwZXJzb24iLCJyZXNldGNvbnRhY3RwZXJzb24iLCJ0ZWxlIiwidmFsaWR0ZWxlIiwiaW5WYWxpZHRlbGUiLCJ0ZWxlQ2hhbmdlSGFuZGxlciIsImJsdXJ0ZWxlIiwicmVzZXR0ZWxlIiwiVElOIiwidmFsaWR0aW4iLCJpblZhbGlkdGluIiwidGluQ2hhbmdlSGFuZGxlciIsImJsdXJ0aW4iLCJyZXNldHRpbiIsImZvcm1WYWxpZGF0aW9uIiwic3VibWl0SGFuZGxlciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNvbXBhbnlEYXRhT2JqZWN0IiwiY29uc29sZSIsImxvZyIsIm9uQWRkY29tcGFuaWVzZm9ybSIsInVzZSIsIm5hbWVJbnB1dENsYXNzZXMiLCJjb250YWN0SW5wdXRDbGFzc2VzIiwidGVsZUlucHV0Q2xhc3NlcyIsInRpbklucHV0Q2xhc3NlcyIsImxpbmVPZkJ1c2luZXNzQ2xhc3NlcyIsInVzZVN0YXRlIiwidmFsaWRhdGlvbiIsImVudGVyZWRWYWx1ZSIsInNldEVudGVyZWRWYWx1ZSIsImlzVG91Y2VkIiwic2V0SXNUb3VjaGVkIiwidmFsdWVJc1ZhbGlkIiwidGFyZ2V0IiwicmVzZXRWYWx1ZSIsImNsYXNzZXMiLCJ0eXBlIiwiYnV0dG9uIiwib25DbGljayIsImNoaWxkcmVuIiwiUmVhY3QiLCJVcGxvYWRpbmdDb21wYW5pZXNUb0RiIiwidG9EYkhhbmRsZXIiLCJyZXNwb25jZSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwiZGF0YSIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9