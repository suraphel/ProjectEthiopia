"use strict";
self["webpackHotUpdate_N_E"]("pages/UploadingCompaniesToDb",{

/***/ "./components/dataFlow/companyregistration/AddCompaniesForm.js":
/*!*********************************************************************!*\
  !*** ./components/dataFlow/companyregistration/AddCompaniesForm.js ***!
  \*********************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hooks_user_inputs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../hooks/user-inputs */ "./components/hooks/user-inputs.js");
/* harmony import */ var _ui_button_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/button/Button */ "./components/ui/button/Button.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "A:\\Projects\\NextJs\\Balemoja_Next\\Balemoja\\components\\dataFlow\\companyregistration\\AddCompaniesForm.js";
// import  {useRef} from 'react'
// import  './AddCompanies.css';
// import { Int32 } from "bson";




function AddCompaniesForm(props) {
  var _UserInput = (0,_hooks_user_inputs__WEBPACK_IMPORTED_MODULE_0__.default)(function (value) {
    return value.trim() !== "";
  }),
      companyname = _UserInput.value,
      validcompname = _UserInput.isValid,
      inValidcompname = _UserInput.hasError,
      compnameChangeHandler = _UserInput.valueChangeHandler,
      blurcompname = _UserInput.onfocusHandler,
      resetcompanyname = _UserInput.reset;

  var _UserInput2 = (0,_hooks_user_inputs__WEBPACK_IMPORTED_MODULE_0__.default)(function (value) {
    return value.trim() !== "";
  }),
      lineOfBusiness = _UserInput2.value,
      ValidlineOfBusiness = _UserInput2.isValid,
      inValidlineOfBusiness = _UserInput2.hasError,
      lineOfBusinessChangeHandler = _UserInput2.valueChangeHandler,
      blurlineOfBusiness = _UserInput2.onfocusHandler,
      resetlineOfBusiness = _UserInput2.reset;

  var _UserInput3 = (0,_hooks_user_inputs__WEBPACK_IMPORTED_MODULE_0__.default)(function (value) {
    return value.trim() !== "";
  }),
      contactperson = _UserInput3.value,
      validcontactperson = _UserInput3.isValid,
      inValidcontactperson = _UserInput3.hasError,
      contactpersonChangeHandler = _UserInput3.valueChangeHandler,
      blurcontactperson = _UserInput3.onfocusHandler,
      resetcontactperson = _UserInput3.reset;

  var _UserInput4 = (0,_hooks_user_inputs__WEBPACK_IMPORTED_MODULE_0__.default)(function (value) {
    return value.trim() !== "";
  }),
      tele = _UserInput4.value,
      validtele = _UserInput4.isValid,
      inValidtele = _UserInput4.hasError,
      teleChangeHandler = _UserInput4.valueChangeHandler,
      blurtele = _UserInput4.onfocusHandler,
      resettele = _UserInput4.reset;

  var _UserInput5 = (0,_hooks_user_inputs__WEBPACK_IMPORTED_MODULE_0__.default)(function (value) {
    return value.trim() !== "";
  }),
      TIN = _UserInput5.value,
      validtin = _UserInput5.isValid,
      inValidtin = _UserInput5.hasError,
      tinChangeHandler = _UserInput5.valueChangeHandler,
      blurtin = _UserInput5.onfocusHandler,
      resettin = _UserInput5.reset;

  var formValidation = false;

  if (validcompname && validcontactperson && validtele && validtin // lineOfBusiness
  ) {
    formValidation = true;
  } // const companyname = useRef();
  // const contactperson = useRef();
  // const telephone = useRef();
  // cn


  var submitHandler = function submitHandler(event) {
    event.preventDefault();

    if (!formValidation) {
      return;
    } // console.log(companyname,contactperson,tele);
    //getting the select option  form input from the form


    var e = document.getElementById("lineOfBusiness");
    var lineOfBusiness = e.value;
    var companyDataObject = {
      companyname: companyname,
      contactperson: contactperson,
      tele: tele,
      TIN: TIN,
      lineOfBusiness: lineOfBusiness
    };
    console.log("here is the text " + lineOfBusiness);
    props.onAddcompaniesform(companyDataObject);
    resetcompanyname("");
    resetcontactperson("");
    resettele("");
    resettin("");
    lineOfBusiness.reset(); // const items = {
    //   name: companyname.current.value,
    //   cperson: contactperson.current.value,
    //   sname: telephone.current.value}
  }; // const items = {
  //   name :companyname.current.value,
  //   cperson: contactperson.current.value,
  //   sname :telephone.current.value
  // }


  var nameInputClasses = inValidcompname ? "form-control invalid" : "form-control ";
  var contactInputClasses = inValidcontactperson ? "form-control invalid" : "form-control ";
  var teleInputClasses = inValidtele ? "form-control invalid" : "form-control ";
  var tinInputClasses = inValidtin ? "form-control invalid" : "form-control ";
  var lineOfBusinessClasses = inValidlineOfBusiness ? "form-control invalid" : "form-control";
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
          lineNumber: 135,
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
          lineNumber: 136,
          columnNumber: 11
        }, this), inValidtin && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
          className: "error-text",
          children: "Please enter a valid TIN ID"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: nameInputClasses,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("label", {
          htmlFor: "compname",
          children: " Company Name "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 149,
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
          lineNumber: 150,
          columnNumber: 11
        }, this), inValidcompname && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
          className: "error-text",
          children: "Please fill in a valid name"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: lineOfBusinessClasses,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("label", {
          htmlFor: "lineOfBusiness",
          children: " Line of Business "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("select", {
          id: "lineOfBusiness",
          required: true,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
            value: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 166,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
            value: "Mechanic",
            children: "Mechanic "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 167,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
            value: "HandyMan",
            children: "HandyMan "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 168,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
            value: "House Hel",
            children: "House Help "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 169,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
            value: "IT Solution",
            children: "IT Solution "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 170,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
            value: "Architect",
            children: "Architect "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 171,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
            value: "Gardner",
            children: "Gardner "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 172,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
            value: "Transport",
            children: "Transport "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 173,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
            value: "Cleaning",
            children: "Cleaning "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 174,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
            value: "other",
            children: "Other ... "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 175,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: contactInputClasses,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("label", {
          htmlFor: "contperson",
          children: " Contact Person "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 193,
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
          lineNumber: 194,
          columnNumber: 11
        }, this), inValidcontactperson && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
          className: "error-text",
          children: "Please enter a valid Contact Person"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 203,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: teleInputClasses,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("label", {
          htmlFor: "tel",
          children: " Telephone "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 207,
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
          lineNumber: 208,
          columnNumber: 11
        }, this), inValidtele && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
          className: "error-text",
          children: "Please enter a valid Phone number"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 217,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_ui_button_Button__WEBPACK_IMPORTED_MODULE_1__.default, {
        className: "button",
        children: " Add Company "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 221,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 132,
    columnNumber: 5
  }, this);
}

_c = AddCompaniesForm;
/* harmony default export */ __webpack_exports__["default"] = (AddCompaniesForm);

var _c;

$RefreshReg$(_c, "AddCompaniesForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvVXBsb2FkaW5nQ29tcGFuaWVzVG9EYi45OTlhYTIxMzdlYTYzYmU0NWNkZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxTQUFTRSxnQkFBVCxDQUEwQkMsS0FBMUIsRUFBaUM7QUFDL0IsbUJBT0lILDJEQUFTLENBQUMsVUFBQ0ksS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBTixPQUFpQixFQUE1QjtBQUFBLEdBQUQsQ0FQYjtBQUFBLE1BQ1NDLFdBRFQsY0FDRUYsS0FERjtBQUFBLE1BRVdHLGFBRlgsY0FFRUMsT0FGRjtBQUFBLE1BR1lDLGVBSFosY0FHRUMsUUFIRjtBQUFBLE1BSXNCQyxxQkFKdEIsY0FJRUMsa0JBSkY7QUFBQSxNQUtrQkMsWUFMbEIsY0FLRUMsY0FMRjtBQUFBLE1BTVNDLGdCQU5ULGNBTUVDLEtBTkY7O0FBU0Esb0JBT0loQiwyREFBUyxDQUFDLFVBQUNJLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLElBQU4sT0FBaUIsRUFBNUI7QUFBQSxHQUFELENBUGI7QUFBQSxNQUNTWSxjQURULGVBQ0ViLEtBREY7QUFBQSxNQUVXYyxtQkFGWCxlQUVFVixPQUZGO0FBQUEsTUFHWVcscUJBSFosZUFHRVQsUUFIRjtBQUFBLE1BSXNCVSwyQkFKdEIsZUFJRVIsa0JBSkY7QUFBQSxNQUtrQlMsa0JBTGxCLGVBS0VQLGNBTEY7QUFBQSxNQU1TUSxtQkFOVCxlQU1FTixLQU5GOztBQVNBLG9CQU9JaEIsMkRBQVMsQ0FBQyxVQUFDSSxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFOLE9BQWlCLEVBQTVCO0FBQUEsR0FBRCxDQVBiO0FBQUEsTUFDU2tCLGFBRFQsZUFDRW5CLEtBREY7QUFBQSxNQUVXb0Isa0JBRlgsZUFFRWhCLE9BRkY7QUFBQSxNQUdZaUIsb0JBSFosZUFHRWYsUUFIRjtBQUFBLE1BSXNC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a0JBQVEsRUFBRUQ7QUFOWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGLEVBVUdELG9CQUFvQixpQkFDbkI7QUFBRyxtQkFBUyxFQUFDLFlBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBWEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBM0RGLGVBeUVFO0FBQUssaUJBQVMsRUFBRTZCLGdCQUFoQjtBQUFBLGdDQUNFO0FBQU8saUJBQU8sRUFBQyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUU7QUFDRSxjQUFJLEVBQUMsS0FEUDtBQUVFLFlBQUUsRUFBQyxLQUZMLENBR0U7QUFIRjtBQUlFLGVBQUssRUFBRXpCLElBSlQ7QUFLRSxnQkFBTSxFQUFFSSxRQUxWO0FBTUUsa0JBQVEsRUFBRUQ7QUFOWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGLEVBVUdELFdBQVcsaUJBQ1Y7QUFBRyxtQkFBUyxFQUFDLFlBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBWEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBekVGLGVBd0ZFLDhEQUFDLHNEQUFEO0FBQVEsaUJBQVMsRUFBQyxRQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXhGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUE4RkQ7O0tBMU5RN0I7QUE0TlQsK0RBQWVBLGdCQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZGF0YUZsb3cvY29tcGFueXJlZ2lzdHJhdGlvbi9BZGRDb21wYW5pZXNGb3JtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCAge3VzZVJlZn0gZnJvbSAncmVhY3QnXHJcbi8vIGltcG9ydCAgJy4vQWRkQ29tcGFuaWVzLmNzcyc7XHJcbi8vIGltcG9ydCB7IEludDMyIH0gZnJvbSBcImJzb25cIjtcclxuaW1wb3J0IFVzZXJJbnB1dCBmcm9tIFwiLi4vLi4vaG9va3MvdXNlci1pbnB1dHNcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vLi4vdWkvYnV0dG9uL0J1dHRvblwiO1xyXG5cclxuZnVuY3Rpb24gQWRkQ29tcGFuaWVzRm9ybShwcm9wcykge1xyXG4gIGNvbnN0IHtcclxuICAgIHZhbHVlOiBjb21wYW55bmFtZSxcclxuICAgIGlzVmFsaWQ6IHZhbGlkY29tcG5hbWUsXHJcbiAgICBoYXNFcnJvcjogaW5WYWxpZGNvbXBuYW1lLFxyXG4gICAgdmFsdWVDaGFuZ2VIYW5kbGVyOiBjb21wbmFtZUNoYW5nZUhhbmRsZXIsXHJcbiAgICBvbmZvY3VzSGFuZGxlcjogYmx1cmNvbXBuYW1lLFxyXG4gICAgcmVzZXQ6IHJlc2V0Y29tcGFueW5hbWUsXHJcbiAgfSA9IFVzZXJJbnB1dCgodmFsdWUpID0+IHZhbHVlLnRyaW0oKSAhPT0gXCJcIik7XHJcblxyXG4gIGNvbnN0IHtcclxuICAgIHZhbHVlOiBsaW5lT2ZCdXNpbmVzcyxcclxuICAgIGlzVmFsaWQ6IFZhbGlkbGluZU9mQnVzaW5lc3MsXHJcbiAgICBoYXNFcnJvcjogaW5WYWxpZGxpbmVPZkJ1c2luZXNzLFxyXG4gICAgdmFsdWVDaGFuZ2VIYW5kbGVyOiBsaW5lT2ZCdXNpbmVzc0NoYW5nZUhhbmRsZXIsXHJcbiAgICBvbmZvY3VzSGFuZGxlcjogYmx1cmxpbmVPZkJ1c2luZXNzLFxyXG4gICAgcmVzZXQ6IHJlc2V0bGluZU9mQnVzaW5lc3MsXHJcbiAgfSA9IFVzZXJJbnB1dCgodmFsdWUpID0+IHZhbHVlLnRyaW0oKSAhPT0gXCJcIik7XHJcblxyXG4gIGNvbnN0IHtcclxuICAgIHZhbHVlOiBjb250YWN0cGVyc29uLFxyXG4gICAgaXNWYWxpZDogdmFsaWRjb250YWN0cGVyc29uLFxyXG4gICAgaGFzRXJyb3I6IGluVmFsaWRjb250YWN0cGVyc29uLFxyXG4gICAgdmFsdWVDaGFuZ2VIYW5kbGVyOiBjb250YWN0cGVyc29uQ2hhbmdlSGFuZGxlcixcclxuICAgIG9uZm9jdXNIYW5kbGVyOiBibHVyY29udGFjdHBlcnNvbixcclxuICAgIHJlc2V0OiByZXNldGNvbnRhY3RwZXJzb24sXHJcbiAgfSA9IFVzZXJJbnB1dCgodmFsdWUpID0+IHZhbHVlLnRyaW0oKSAhPT0gXCJcIik7XHJcblxyXG4gIGNvbnN0IHtcclxuICAgIHZhbHVlOiB0ZWxlLFxyXG4gICAgaXNWYWxpZDogdmFsaWR0ZWxlLFxyXG4gICAgaGFzRXJyb3I6IGluVmFsaWR0ZWxlLFxyXG4gICAgdmFsdWVDaGFuZ2VIYW5kbGVyOiB0ZWxlQ2hhbmdlSGFuZGxlcixcclxuICAgIG9uZm9jdXNIYW5kbGVyOiBibHVydGVsZSxcclxuICAgIHJlc2V0OiByZXNldHRlbGUsXHJcbiAgfSA9IFVzZXJJbnB1dCgodmFsdWUpID0+IHZhbHVlLnRyaW0oKSAhPT0gXCJcIik7XHJcblxyXG4gIGNvbnN0IHtcclxuICAgIHZhbHVlOiBUSU4sXHJcbiAgICBpc1ZhbGlkOiB2YWxpZHRpbixcclxuICAgIGhhc0Vycm9yOiBpblZhbGlkdGluLFxyXG4gICAgdmFsdWVDaGFuZ2VIYW5kbGVyOiB0aW5DaGFuZ2VIYW5kbGVyLFxyXG4gICAgb25mb2N1c0hhbmRsZXI6IGJsdXJ0aW4sXHJcbiAgICByZXNldDogcmVzZXR0aW4sXHJcbiAgfSA9IFVzZXJJbnB1dCgodmFsdWUpID0+IHZhbHVlLnRyaW0oKSAhPT0gXCJcIik7XHJcblxyXG4gIGxldCBmb3JtVmFsaWRhdGlvbiA9IGZhbHNlO1xyXG4gIGlmIChcclxuICAgIHZhbGlkY29tcG5hbWUgJiZcclxuICAgIHZhbGlkY29udGFjdHBlcnNvbiAmJlxyXG4gICAgdmFsaWR0ZWxlICYmXHJcbiAgICB2YWxpZHRpblxyXG4gICAgLy8gbGluZU9mQnVzaW5lc3NcclxuICApIHtcclxuICAgIGZvcm1WYWxpZGF0aW9uID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIC8vIGNvbnN0IGNvbXBhbnluYW1lID0gdXNlUmVmKCk7XHJcbiAgLy8gY29uc3QgY29udGFjdHBlcnNvbiA9IHVzZVJlZigpO1xyXG4gIC8vIGNvbnN0IHRlbGVwaG9uZSA9IHVzZVJlZigpO1xyXG4gIC8vIGNuXHJcblxyXG4gIGNvbnN0IHN1Ym1pdEhhbmRsZXIgPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgaWYgKCFmb3JtVmFsaWRhdGlvbikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY29uc29sZS5sb2coY29tcGFueW5hbWUsY29udGFjdHBlcnNvbix0ZWxlKTtcclxuXHJcbiAgICAvL2dldHRpbmcgdGhlIHNlbGVjdCBvcHRpb24gIGZvcm0gaW5wdXQgZnJvbSB0aGUgZm9ybVxyXG4gICAgbGV0IGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpbmVPZkJ1c2luZXNzXCIpO1xyXG4gICAgbGV0IGxpbmVPZkJ1c2luZXNzID0gZS52YWx1ZTtcclxuXHJcbiAgICBjb25zdCBjb21wYW55RGF0YU9iamVjdCA9IHtcclxuICAgICAgY29tcGFueW5hbWUsXHJcbiAgICAgIGNvbnRhY3RwZXJzb24sXHJcbiAgICAgIHRlbGUsXHJcbiAgICAgIFRJTixcclxuICAgICAgbGluZU9mQnVzaW5lc3MsXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiaGVyZSBpcyB0aGUgdGV4dCBcIiArIGxpbmVPZkJ1c2luZXNzKTtcclxuXHJcbiAgICBwcm9wcy5vbkFkZGNvbXBhbmllc2Zvcm0oY29tcGFueURhdGFPYmplY3QpO1xyXG5cclxuICAgIHJlc2V0Y29tcGFueW5hbWUoXCJcIik7XHJcbiAgICByZXNldGNvbnRhY3RwZXJzb24oXCJcIik7XHJcbiAgICByZXNldHRlbGUoXCJcIik7XHJcbiAgICByZXNldHRpbihcIlwiKTtcclxuICAgIGxpbmVPZkJ1c2luZXNzLnJlc2V0KCk7XHJcblxyXG4gICAgLy8gY29uc3QgaXRlbXMgPSB7XHJcbiAgICAvLyAgIG5hbWU6IGNvbXBhbnluYW1lLmN1cnJlbnQudmFsdWUsXHJcbiAgICAvLyAgIGNwZXJzb246IGNvbnRhY3RwZXJzb24uY3VycmVudC52YWx1ZSxcclxuICAgIC8vICAgc25hbWU6IHRlbGVwaG9uZS5jdXJyZW50LnZhbHVlfVxyXG4gIH07XHJcblxyXG4gIC8vIGNvbnN0IGl0ZW1zID0ge1xyXG4gIC8vICAgbmFtZSA6Y29tcGFueW5hbWUuY3VycmVudC52YWx1ZSxcclxuICAvLyAgIGNwZXJzb246IGNvbnRhY3RwZXJzb24uY3VycmVudC52YWx1ZSxcclxuICAvLyAgIHNuYW1lIDp0ZWxlcGhvbmUuY3VycmVudC52YWx1ZVxyXG5cclxuICAvLyB9XHJcblxyXG4gIGNvbnN0IG5hbWVJbnB1dENsYXNzZXMgPSBpblZhbGlkY29tcG5hbWVcclxuICAgID8gXCJmb3JtLWNvbnRyb2wgaW52YWxpZFwiXHJcbiAgICA6IFwiZm9ybS1jb250cm9sIFwiO1xyXG5cclxuICBjb25zdCBjb250YWN0SW5wdXRDbGFzc2VzID0gaW5WYWxpZGNvbnRhY3RwZXJzb25cclxuICAgID8gXCJmb3JtLWNvbnRyb2wgaW52YWxpZFwiXHJcbiAgICA6IFwiZm9ybS1jb250cm9sIFwiO1xyXG5cclxuICBjb25zdCB0ZWxlSW5wdXRDbGFzc2VzID0gaW5WYWxpZHRlbGVcclxuICAgID8gXCJmb3JtLWNvbnRyb2wgaW52YWxpZFwiXHJcbiAgICA6IFwiZm9ybS1jb250cm9sIFwiO1xyXG5cclxuICBjb25zdCB0aW5JbnB1dENsYXNzZXMgPSBpblZhbGlkdGluID8gXCJmb3JtLWNvbnRyb2wgaW52YWxpZFwiIDogXCJmb3JtLWNvbnRyb2wgXCI7XHJcblxyXG4gIGNvbnN0IGxpbmVPZkJ1c2luZXNzQ2xhc3NlcyA9IGluVmFsaWRsaW5lT2ZCdXNpbmVzc1xyXG4gICAgPyBcImZvcm0tY29udHJvbCBpbnZhbGlkXCJcclxuICAgIDogXCJmb3JtLWNvbnRyb2xcIjtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxmb3JtIG9uU3VibWl0PXtzdWJtaXRIYW5kbGVyfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcHBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGluSW5wdXRDbGFzc2VzfT5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidGluXCI+IFRJTiBJRCA8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICBpZD1cIlRJTlwiXHJcbiAgICAgICAgICAgIC8vIHJlZj17dGVsZXBob25lfVxyXG4gICAgICAgICAgICB2YWx1ZT17VElOfVxyXG4gICAgICAgICAgICBvbkJsdXI9e2JsdXJ0aW59XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aW5DaGFuZ2VIYW5kbGVyfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIHtpblZhbGlkdGluICYmIChcclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZXJyb3ItdGV4dFwiPlBsZWFzZSBlbnRlciBhIHZhbGlkIFRJTiBJRDwvcD5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e25hbWVJbnB1dENsYXNzZXN9PlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjb21wbmFtZVwiPiBDb21wYW55IE5hbWUgPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIGlkPVwiY29tcG5hbWVcIlxyXG4gICAgICAgICAgICAvLyByZWY9e2NvbXBhbnluYW1lfVxyXG4gICAgICAgICAgICBvbkJsdXI9e2JsdXJjb21wbmFtZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2NvbXBuYW1lQ2hhbmdlSGFuZGxlcn1cclxuICAgICAgICAgICAgdmFsdWU9e2NvbXBhbnluYW1lfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIHtpblZhbGlkY29tcG5hbWUgJiYgKFxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJlcnJvci10ZXh0XCI+UGxlYXNlIGZpbGwgaW4gYSB2YWxpZCBuYW1lPC9wPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2xpbmVPZkJ1c2luZXNzQ2xhc3Nlc30+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImxpbmVPZkJ1c2luZXNzXCI+IExpbmUgb2YgQnVzaW5lc3MgPC9sYWJlbD5cclxuICAgICAgICAgIDxzZWxlY3QgaWQ9XCJsaW5lT2ZCdXNpbmVzc1wiIHJlcXVpcmVkPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+PC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJNZWNoYW5pY1wiPk1lY2hhbmljIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiSGFuZHlNYW5cIj5IYW5keU1hbiA8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkhvdXNlIEhlbFwiPkhvdXNlIEhlbHAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJJVCBTb2x1dGlvblwiPklUIFNvbHV0aW9uIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQXJjaGl0ZWN0XCI+QXJjaGl0ZWN0IDwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiR2FyZG5lclwiPkdhcmRuZXIgPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJUcmFuc3BvcnRcIj5UcmFuc3BvcnQgPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJDbGVhbmluZ1wiPkNsZWFuaW5nIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwib3RoZXJcIj5PdGhlciAuLi4gPC9vcHRpb24+XHJcbiAgICAgICAgICA8L3NlbGVjdD5cclxuXHJcbiAgICAgICAgICB7LyogLy8gKSB8fCAoXHJcbiAgICAgICAgICAgIC8vICAgPGlucHV0XHJcbiAgICAgICAgICAgIC8vICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIC8vICAgICBpZD1cImxpbmVPZkJ1c2luZXNzXCJcclxuICAgICAgICAgICAgLy8gICAgIC8vIHJlZj17dGVsZXBob25lfVxyXG4gICAgICAgICAgICAvLyAgICAgdmFsdWU9e2xpbmVPZkJ1c2luZXNzfVxyXG4gICAgICAgICAgICAvLyAgICAgb25CbHVyPXtibHVybGluZU9mQnVzaW5lc3N9XHJcbiAgICAgICAgICAgIC8vICAgICBvbkNoYW5nZT17bGluZU9mQnVzaW5lc3NDaGFuZ2VIYW5kbGVyfVxyXG4gICAgICAgICAgICAvLyAgIC8+IFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAvLyB7aW5WYWxpZGxpbmVPZkJ1c2luZXNzICYmIChcclxuICAgICAgICAgIC8vICAgPHAgY2xhc3NOYW1lPVwiZXJyb3ItdGV4dFwiPlNwZWNpZnkgTGluZSBvZiBCdXNpbmVzcyA8L3A+XHJcbiAgICAgICAgICAvLyApfSovfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb250YWN0SW5wdXRDbGFzc2VzfT5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY29udHBlcnNvblwiPiBDb250YWN0IFBlcnNvbiA8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgaWQ9XCJjb250cGVyc29uXCJcclxuICAgICAgICAgICAgLy8gcmVmPXtjb250YWN0cGVyc29ufVxyXG4gICAgICAgICAgICB2YWx1ZT17Y29udGFjdHBlcnNvbn1cclxuICAgICAgICAgICAgb25CbHVyPXtibHVyY29udGFjdHBlcnNvbn1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2NvbnRhY3RwZXJzb25DaGFuZ2VIYW5kbGVyfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIHtpblZhbGlkY29udGFjdHBlcnNvbiAmJiAoXHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImVycm9yLXRleHRcIj5QbGVhc2UgZW50ZXIgYSB2YWxpZCBDb250YWN0IFBlcnNvbjwvcD5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RlbGVJbnB1dENsYXNzZXN9PlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0ZWxcIj4gVGVsZXBob25lIDwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRlbFwiXHJcbiAgICAgICAgICAgIGlkPVwidGVsXCJcclxuICAgICAgICAgICAgLy8gcmVmPXt0ZWxlcGhvbmV9XHJcbiAgICAgICAgICAgIHZhbHVlPXt0ZWxlfVxyXG4gICAgICAgICAgICBvbkJsdXI9e2JsdXJ0ZWxlfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17dGVsZUNoYW5nZUhhbmRsZXJ9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAge2luVmFsaWR0ZWxlICYmIChcclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZXJyb3ItdGV4dFwiPlBsZWFzZSBlbnRlciBhIHZhbGlkIFBob25lIG51bWJlcjwvcD5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uXCI+IEFkZCBDb21wYW55IDwvQnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZm9ybT5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZGRDb21wYW5pZXNGb3JtO1xyXG4iXSwibmFtZXMiOlsiVXNlcklucHV0IiwiQnV0dG9uIiwiQWRkQ29tcGFuaWVzRm9ybSIsInByb3BzIiwidmFsdWUiLCJ0cmltIiwiY29tcGFueW5hbWUiLCJ2YWxpZGNvbXBuYW1lIiwiaXNWYWxpZCIsImluVmFsaWRjb21wbmFtZSIsImhhc0Vycm9yIiwiY29tcG5hbWVDaGFuZ2VIYW5kbGVyIiwidmFsdWVDaGFuZ2VIYW5kbGVyIiwiYmx1cmNvbXBuYW1lIiwib25mb2N1c0hhbmRsZXIiLCJyZXNldGNvbXBhbnluYW1lIiwicmVzZXQiLCJsaW5lT2ZCdXNpbmVzcyIsIlZhbGlkbGluZU9mQnVzaW5lc3MiLCJpblZhbGlkbGluZU9mQnVzaW5lc3MiLCJsaW5lT2ZCdXNpbmVzc0NoYW5nZUhhbmRsZXIiLCJibHVybGluZU9mQnVzaW5lc3MiLCJyZXNldGxpbmVPZkJ1c2luZXNzIiwiY29udGFjdHBlcnNvbiIsInZhbGlkY29udGFjdHBlcnNvbiIsImluVmFsaWRjb250YWN0cGVyc29uIiwiY29udGFjdHBlcnNvbkNoYW5nZUhhbmRsZXIiLCJibHVyY29udGFjdHBlcnNvbiIsInJlc2V0Y29udGFjdHBlcnNvbiIsInRlbGUiLCJ2YWxpZHRlbGUiLCJpblZhbGlkdGVsZSIsInRlbGVDaGFuZ2VIYW5kbGVyIiwiYmx1cnRlbGUiLCJyZXNldHRlbGUiLCJUSU4iLCJ2YWxpZHRpbiIsImluVmFsaWR0aW4iLCJ0aW5DaGFuZ2VIYW5kbGVyIiwiYmx1cnRpbiIsInJlc2V0dGluIiwiZm9ybVZhbGlkYXRpb24iLCJzdWJtaXRIYW5kbGVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY29tcGFueURhdGFPYmplY3QiLCJjb25zb2xlIiwibG9nIiwib25BZGRjb21wYW5pZXNmb3JtIiwibmFtZUlucHV0Q2xhc3NlcyIsImNvbnRhY3RJbnB1dENsYXNzZXMiLCJ0ZWxlSW5wdXRDbGFzc2VzIiwidGluSW5wdXRDbGFzc2VzIiwibGluZU9mQnVzaW5lc3NDbGFzc2VzIl0sInNvdXJjZVJvb3QiOiIifQ==