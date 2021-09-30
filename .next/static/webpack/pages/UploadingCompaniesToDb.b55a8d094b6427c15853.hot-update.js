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

  var resetForm = function resetForm() {
    document.getElementById("lineOfBusiness").reset();
  };

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
    resetForm(""); // const items = {
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
          lineNumber: 139,
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
          lineNumber: 140,
          columnNumber: 11
        }, this), inValidtin && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
          className: "error-text",
          children: "Please enter a valid TIN ID"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: nameInputClasses,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("label", {
          htmlFor: "compname",
          children: " Company Name "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 153,
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
          lineNumber: 154,
          columnNumber: 11
        }, this), inValidcompname && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
          className: "error-text",
          children: "Please fill in a valid name"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: lineOfBusinessClasses,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("label", {
          htmlFor: "lineOfBusiness",
          children: " Line of Business "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("select", {
          id: "lineOfBusiness",
          required: true,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
            value: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 170,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
            value: "Mechanic",
            children: "Mechanic "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 171,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
            value: "HandyMan",
            children: "HandyMan "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 172,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
            value: "House Hel",
            children: "House Help "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 173,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
            value: "IT Solution",
            children: "IT Solution "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 174,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
            value: "Architect",
            children: "Architect "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 175,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
            value: "Gardner",
            children: "Gardner "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 176,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
            value: "Transport",
            children: "Transport "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 177,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
            value: "Cleaning",
            children: "Cleaning "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 178,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
            value: "other",
            children: "Other ... "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 179,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: contactInputClasses,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("label", {
          htmlFor: "contperson",
          children: " Contact Person "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 197,
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
          lineNumber: 198,
          columnNumber: 11
        }, this), inValidcontactperson && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
          className: "error-text",
          children: "Please enter a valid Contact Person"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 207,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: teleInputClasses,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("label", {
          htmlFor: "tel",
          children: " Telephone "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 211,
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
          lineNumber: 212,
          columnNumber: 11
        }, this), inValidtele && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
          className: "error-text",
          children: "Please enter a valid Phone number"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 221,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 210,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_ui_button_Button__WEBPACK_IMPORTED_MODULE_1__.default, {
        className: "button",
        children: " Add Company "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 225,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 136,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvVXBsb2FkaW5nQ29tcGFuaWVzVG9EYi5iNTVhOGQwOTRiNjQyN2MxNTg1My5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxTQUFTRSxnQkFBVCxDQUEwQkMsS0FBMUIsRUFBaUM7QUFDL0IsbUJBT0lILDJEQUFTLENBQUMsVUFBQ0ksS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBTixPQUFpQixFQUE1QjtBQUFBLEdBQUQsQ0FQYjtBQUFBLE1BQ1NDLFdBRFQsY0FDRUYsS0FERjtBQUFBLE1BRVdHLGFBRlgsY0FFRUMsT0FGRjtBQUFBLE1BR1lDLGVBSFosY0FHRUMsUUFIRjtBQUFBLE1BSXNCQyxxQkFKdEIsY0FJRUMsa0JBSkY7QUFBQSxNQUtrQkMsWUFMbEIsY0FLRUMsY0FMRjtBQUFBLE1BTVNDLGdCQU5ULGNBTUVDLEtBTkY7O0FBU0Esb0JBT0loQiwyREFBUyxDQUFDLFVBQUNJLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLElBQU4sT0FBaUIsRUFBNUI7QUFBQSxHQUFELENBUGI7QUFBQSxNQUNTWSxjQURULGVBQ0ViLEtBREY7QUFBQSxNQUVXYyxtQkFGWCxlQUVFVixPQUZGO0FBQUEsTUFHWVcscUJBSFosZUFHRVQsUUFIRjtBQUFBLE1BSXNCVSwyQkFKdEIsZUFJRVIsa0JBSkY7QUFBQSxNQUtrQlMsa0JBTGxCLGVBS0VQLGNBTEY7QUFBQSxNQU1TUSxtQkFOVCxlQU1FTixLQU5GOztBQVNBLG9CQU9JaEIsMkRBQVMsQ0FBQyxVQUFDSSxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFOLE9BQWlCLEVBQTVCO0FBQUEsR0FBRCxDQVBiO0FBQUEsTUFDU2tCLGFBRFQsZUFDRW5CLEtBREY7QUFBQSxNQUVXb0Isa0JBRlgsZUFFRWhCLE9BRkY7QUFBQSxNQUdZaUIsb0JBSFosZUFHRWYsUUFIRjtBQUFBLE1BSXNC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REYsZUFFRTtBQUNFLGNBQUksRUFBQyxNQURQO0FBRUUsWUFBRSxFQUFDLFlBRkwsQ0FHRTtBQUhGO0FBSUUsZUFBSyxFQUFFL0IsYUFKVDtBQUtFLGdCQUFNLEVBQUVJLGlCQUxWO0FBTUUsa0JBQVEsRUFBRUQ7QUFOWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGLEVBVUdELG9CQUFvQixpQkFDbkI7QUFBRyxtQkFBUyxFQUFDLFlBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBWEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBM0RGLGVBeUVFO0FBQUssaUJBQVMsRUFBRThCLGdCQUFoQjtBQUFBLGdDQUNFO0FBQU8saUJBQU8sRUFBQyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUU7QUFDRSxjQUFJLEVBQUMsS0FEUDtBQUVFLFlBQUUsRUFBQyxLQUZMLENBR0U7QUFIRjtBQUlFLGVBQUssRUFBRTFCLElBSlQ7QUFLRSxnQkFBTSxFQUFFSSxRQUxWO0FBTUUsa0JBQVEsRUFBRUQ7QUFOWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGLEVBVUdELFdBQVcsaUJBQ1Y7QUFBRyxtQkFBUyxFQUFDLFlBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBWEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBekVGLGVBd0ZFLDhEQUFDLHNEQUFEO0FBQVEsaUJBQVMsRUFBQyxRQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXhGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUE4RkQ7O0tBOU5RN0I7QUFnT1QsK0RBQWVBLGdCQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZGF0YUZsb3cvY29tcGFueXJlZ2lzdHJhdGlvbi9BZGRDb21wYW5pZXNGb3JtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCAge3VzZVJlZn0gZnJvbSAncmVhY3QnXHJcbi8vIGltcG9ydCAgJy4vQWRkQ29tcGFuaWVzLmNzcyc7XHJcbi8vIGltcG9ydCB7IEludDMyIH0gZnJvbSBcImJzb25cIjtcclxuaW1wb3J0IFVzZXJJbnB1dCBmcm9tIFwiLi4vLi4vaG9va3MvdXNlci1pbnB1dHNcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vLi4vdWkvYnV0dG9uL0J1dHRvblwiO1xyXG5cclxuZnVuY3Rpb24gQWRkQ29tcGFuaWVzRm9ybShwcm9wcykge1xyXG4gIGNvbnN0IHtcclxuICAgIHZhbHVlOiBjb21wYW55bmFtZSxcclxuICAgIGlzVmFsaWQ6IHZhbGlkY29tcG5hbWUsXHJcbiAgICBoYXNFcnJvcjogaW5WYWxpZGNvbXBuYW1lLFxyXG4gICAgdmFsdWVDaGFuZ2VIYW5kbGVyOiBjb21wbmFtZUNoYW5nZUhhbmRsZXIsXHJcbiAgICBvbmZvY3VzSGFuZGxlcjogYmx1cmNvbXBuYW1lLFxyXG4gICAgcmVzZXQ6IHJlc2V0Y29tcGFueW5hbWUsXHJcbiAgfSA9IFVzZXJJbnB1dCgodmFsdWUpID0+IHZhbHVlLnRyaW0oKSAhPT0gXCJcIik7XHJcblxyXG4gIGNvbnN0IHtcclxuICAgIHZhbHVlOiBsaW5lT2ZCdXNpbmVzcyxcclxuICAgIGlzVmFsaWQ6IFZhbGlkbGluZU9mQnVzaW5lc3MsXHJcbiAgICBoYXNFcnJvcjogaW5WYWxpZGxpbmVPZkJ1c2luZXNzLFxyXG4gICAgdmFsdWVDaGFuZ2VIYW5kbGVyOiBsaW5lT2ZCdXNpbmVzc0NoYW5nZUhhbmRsZXIsXHJcbiAgICBvbmZvY3VzSGFuZGxlcjogYmx1cmxpbmVPZkJ1c2luZXNzLFxyXG4gICAgcmVzZXQ6IHJlc2V0bGluZU9mQnVzaW5lc3MsXHJcbiAgfSA9IFVzZXJJbnB1dCgodmFsdWUpID0+IHZhbHVlLnRyaW0oKSAhPT0gXCJcIik7XHJcblxyXG4gIGNvbnN0IHtcclxuICAgIHZhbHVlOiBjb250YWN0cGVyc29uLFxyXG4gICAgaXNWYWxpZDogdmFsaWRjb250YWN0cGVyc29uLFxyXG4gICAgaGFzRXJyb3I6IGluVmFsaWRjb250YWN0cGVyc29uLFxyXG4gICAgdmFsdWVDaGFuZ2VIYW5kbGVyOiBjb250YWN0cGVyc29uQ2hhbmdlSGFuZGxlcixcclxuICAgIG9uZm9jdXNIYW5kbGVyOiBibHVyY29udGFjdHBlcnNvbixcclxuICAgIHJlc2V0OiByZXNldGNvbnRhY3RwZXJzb24sXHJcbiAgfSA9IFVzZXJJbnB1dCgodmFsdWUpID0+IHZhbHVlLnRyaW0oKSAhPT0gXCJcIik7XHJcblxyXG4gIGNvbnN0IHtcclxuICAgIHZhbHVlOiB0ZWxlLFxyXG4gICAgaXNWYWxpZDogdmFsaWR0ZWxlLFxyXG4gICAgaGFzRXJyb3I6IGluVmFsaWR0ZWxlLFxyXG4gICAgdmFsdWVDaGFuZ2VIYW5kbGVyOiB0ZWxlQ2hhbmdlSGFuZGxlcixcclxuICAgIG9uZm9jdXNIYW5kbGVyOiBibHVydGVsZSxcclxuICAgIHJlc2V0OiByZXNldHRlbGUsXHJcbiAgfSA9IFVzZXJJbnB1dCgodmFsdWUpID0+IHZhbHVlLnRyaW0oKSAhPT0gXCJcIik7XHJcblxyXG4gIGNvbnN0IHtcclxuICAgIHZhbHVlOiBUSU4sXHJcbiAgICBpc1ZhbGlkOiB2YWxpZHRpbixcclxuICAgIGhhc0Vycm9yOiBpblZhbGlkdGluLFxyXG4gICAgdmFsdWVDaGFuZ2VIYW5kbGVyOiB0aW5DaGFuZ2VIYW5kbGVyLFxyXG4gICAgb25mb2N1c0hhbmRsZXI6IGJsdXJ0aW4sXHJcbiAgICByZXNldDogcmVzZXR0aW4sXHJcbiAgfSA9IFVzZXJJbnB1dCgodmFsdWUpID0+IHZhbHVlLnRyaW0oKSAhPT0gXCJcIik7XHJcblxyXG4gIGNvbnN0IHJlc2V0Rm9ybSA9ICgpID0+IHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGluZU9mQnVzaW5lc3NcIikucmVzZXQoKTtcclxuICB9O1xyXG5cclxuICBsZXQgZm9ybVZhbGlkYXRpb24gPSBmYWxzZTtcclxuICBpZiAoXHJcbiAgICB2YWxpZGNvbXBuYW1lICYmXHJcbiAgICB2YWxpZGNvbnRhY3RwZXJzb24gJiZcclxuICAgIHZhbGlkdGVsZSAmJlxyXG4gICAgdmFsaWR0aW5cclxuICAgIC8vIGxpbmVPZkJ1c2luZXNzXHJcbiAgKSB7XHJcbiAgICBmb3JtVmFsaWRhdGlvbiA9IHRydWU7XHJcbiAgfVxyXG5cclxuICAvLyBjb25zdCBjb21wYW55bmFtZSA9IHVzZVJlZigpO1xyXG4gIC8vIGNvbnN0IGNvbnRhY3RwZXJzb24gPSB1c2VSZWYoKTtcclxuICAvLyBjb25zdCB0ZWxlcGhvbmUgPSB1c2VSZWYoKTtcclxuICAvLyBjblxyXG5cclxuICBjb25zdCBzdWJtaXRIYW5kbGVyID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGlmICghZm9ybVZhbGlkYXRpb24pIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKGNvbXBhbnluYW1lLGNvbnRhY3RwZXJzb24sdGVsZSk7XHJcblxyXG4gICAgLy9nZXR0aW5nIHRoZSBzZWxlY3Qgb3B0aW9uICBmb3JtIGlucHV0IGZyb20gdGhlIGZvcm1cclxuICAgIGxldCBlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaW5lT2ZCdXNpbmVzc1wiKTtcclxuICAgIGxldCBsaW5lT2ZCdXNpbmVzcyA9IGUudmFsdWU7XHJcblxyXG4gICAgY29uc3QgY29tcGFueURhdGFPYmplY3QgPSB7XHJcbiAgICAgIGNvbXBhbnluYW1lLFxyXG4gICAgICBjb250YWN0cGVyc29uLFxyXG4gICAgICB0ZWxlLFxyXG4gICAgICBUSU4sXHJcbiAgICAgIGxpbmVPZkJ1c2luZXNzLFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcImhlcmUgaXMgdGhlIHRleHQgXCIgKyBsaW5lT2ZCdXNpbmVzcyk7XHJcblxyXG4gICAgcHJvcHMub25BZGRjb21wYW5pZXNmb3JtKGNvbXBhbnlEYXRhT2JqZWN0KTtcclxuXHJcbiAgICByZXNldGNvbXBhbnluYW1lKFwiXCIpO1xyXG4gICAgcmVzZXRjb250YWN0cGVyc29uKFwiXCIpO1xyXG4gICAgcmVzZXR0ZWxlKFwiXCIpO1xyXG4gICAgcmVzZXR0aW4oXCJcIik7XHJcbiAgICByZXNldEZvcm0oXCJcIik7XHJcblxyXG4gICAgLy8gY29uc3QgaXRlbXMgPSB7XHJcbiAgICAvLyAgIG5hbWU6IGNvbXBhbnluYW1lLmN1cnJlbnQudmFsdWUsXHJcbiAgICAvLyAgIGNwZXJzb246IGNvbnRhY3RwZXJzb24uY3VycmVudC52YWx1ZSxcclxuICAgIC8vICAgc25hbWU6IHRlbGVwaG9uZS5jdXJyZW50LnZhbHVlfVxyXG4gIH07XHJcblxyXG4gIC8vIGNvbnN0IGl0ZW1zID0ge1xyXG4gIC8vICAgbmFtZSA6Y29tcGFueW5hbWUuY3VycmVudC52YWx1ZSxcclxuICAvLyAgIGNwZXJzb246IGNvbnRhY3RwZXJzb24uY3VycmVudC52YWx1ZSxcclxuICAvLyAgIHNuYW1lIDp0ZWxlcGhvbmUuY3VycmVudC52YWx1ZVxyXG5cclxuICAvLyB9XHJcblxyXG4gIGNvbnN0IG5hbWVJbnB1dENsYXNzZXMgPSBpblZhbGlkY29tcG5hbWVcclxuICAgID8gXCJmb3JtLWNvbnRyb2wgaW52YWxpZFwiXHJcbiAgICA6IFwiZm9ybS1jb250cm9sIFwiO1xyXG5cclxuICBjb25zdCBjb250YWN0SW5wdXRDbGFzc2VzID0gaW5WYWxpZGNvbnRhY3RwZXJzb25cclxuICAgID8gXCJmb3JtLWNvbnRyb2wgaW52YWxpZFwiXHJcbiAgICA6IFwiZm9ybS1jb250cm9sIFwiO1xyXG5cclxuICBjb25zdCB0ZWxlSW5wdXRDbGFzc2VzID0gaW5WYWxpZHRlbGVcclxuICAgID8gXCJmb3JtLWNvbnRyb2wgaW52YWxpZFwiXHJcbiAgICA6IFwiZm9ybS1jb250cm9sIFwiO1xyXG5cclxuICBjb25zdCB0aW5JbnB1dENsYXNzZXMgPSBpblZhbGlkdGluID8gXCJmb3JtLWNvbnRyb2wgaW52YWxpZFwiIDogXCJmb3JtLWNvbnRyb2wgXCI7XHJcblxyXG4gIGNvbnN0IGxpbmVPZkJ1c2luZXNzQ2xhc3NlcyA9IGluVmFsaWRsaW5lT2ZCdXNpbmVzc1xyXG4gICAgPyBcImZvcm0tY29udHJvbCBpbnZhbGlkXCJcclxuICAgIDogXCJmb3JtLWNvbnRyb2xcIjtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxmb3JtIG9uU3VibWl0PXtzdWJtaXRIYW5kbGVyfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcHBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGluSW5wdXRDbGFzc2VzfT5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidGluXCI+IFRJTiBJRCA8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICBpZD1cIlRJTlwiXHJcbiAgICAgICAgICAgIC8vIHJlZj17dGVsZXBob25lfVxyXG4gICAgICAgICAgICB2YWx1ZT17VElOfVxyXG4gICAgICAgICAgICBvbkJsdXI9e2JsdXJ0aW59XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aW5DaGFuZ2VIYW5kbGVyfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIHtpblZhbGlkdGluICYmIChcclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZXJyb3ItdGV4dFwiPlBsZWFzZSBlbnRlciBhIHZhbGlkIFRJTiBJRDwvcD5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e25hbWVJbnB1dENsYXNzZXN9PlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjb21wbmFtZVwiPiBDb21wYW55IE5hbWUgPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIGlkPVwiY29tcG5hbWVcIlxyXG4gICAgICAgICAgICAvLyByZWY9e2NvbXBhbnluYW1lfVxyXG4gICAgICAgICAgICBvbkJsdXI9e2JsdXJjb21wbmFtZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2NvbXBuYW1lQ2hhbmdlSGFuZGxlcn1cclxuICAgICAgICAgICAgdmFsdWU9e2NvbXBhbnluYW1lfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIHtpblZhbGlkY29tcG5hbWUgJiYgKFxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJlcnJvci10ZXh0XCI+UGxlYXNlIGZpbGwgaW4gYSB2YWxpZCBuYW1lPC9wPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2xpbmVPZkJ1c2luZXNzQ2xhc3Nlc30+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImxpbmVPZkJ1c2luZXNzXCI+IExpbmUgb2YgQnVzaW5lc3MgPC9sYWJlbD5cclxuICAgICAgICAgIDxzZWxlY3QgaWQ9XCJsaW5lT2ZCdXNpbmVzc1wiIHJlcXVpcmVkPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+PC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJNZWNoYW5pY1wiPk1lY2hhbmljIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiSGFuZHlNYW5cIj5IYW5keU1hbiA8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkhvdXNlIEhlbFwiPkhvdXNlIEhlbHAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJJVCBTb2x1dGlvblwiPklUIFNvbHV0aW9uIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQXJjaGl0ZWN0XCI+QXJjaGl0ZWN0IDwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiR2FyZG5lclwiPkdhcmRuZXIgPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJUcmFuc3BvcnRcIj5UcmFuc3BvcnQgPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJDbGVhbmluZ1wiPkNsZWFuaW5nIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwib3RoZXJcIj5PdGhlciAuLi4gPC9vcHRpb24+XHJcbiAgICAgICAgICA8L3NlbGVjdD5cclxuXHJcbiAgICAgICAgICB7LyogLy8gKSB8fCAoXHJcbiAgICAgICAgICAgIC8vICAgPGlucHV0XHJcbiAgICAgICAgICAgIC8vICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIC8vICAgICBpZD1cImxpbmVPZkJ1c2luZXNzXCJcclxuICAgICAgICAgICAgLy8gICAgIC8vIHJlZj17dGVsZXBob25lfVxyXG4gICAgICAgICAgICAvLyAgICAgdmFsdWU9e2xpbmVPZkJ1c2luZXNzfVxyXG4gICAgICAgICAgICAvLyAgICAgb25CbHVyPXtibHVybGluZU9mQnVzaW5lc3N9XHJcbiAgICAgICAgICAgIC8vICAgICBvbkNoYW5nZT17bGluZU9mQnVzaW5lc3NDaGFuZ2VIYW5kbGVyfVxyXG4gICAgICAgICAgICAvLyAgIC8+IFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAvLyB7aW5WYWxpZGxpbmVPZkJ1c2luZXNzICYmIChcclxuICAgICAgICAgIC8vICAgPHAgY2xhc3NOYW1lPVwiZXJyb3ItdGV4dFwiPlNwZWNpZnkgTGluZSBvZiBCdXNpbmVzcyA8L3A+XHJcbiAgICAgICAgICAvLyApfSovfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb250YWN0SW5wdXRDbGFzc2VzfT5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY29udHBlcnNvblwiPiBDb250YWN0IFBlcnNvbiA8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgaWQ9XCJjb250cGVyc29uXCJcclxuICAgICAgICAgICAgLy8gcmVmPXtjb250YWN0cGVyc29ufVxyXG4gICAgICAgICAgICB2YWx1ZT17Y29udGFjdHBlcnNvbn1cclxuICAgICAgICAgICAgb25CbHVyPXtibHVyY29udGFjdHBlcnNvbn1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2NvbnRhY3RwZXJzb25DaGFuZ2VIYW5kbGVyfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIHtpblZhbGlkY29udGFjdHBlcnNvbiAmJiAoXHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImVycm9yLXRleHRcIj5QbGVhc2UgZW50ZXIgYSB2YWxpZCBDb250YWN0IFBlcnNvbjwvcD5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RlbGVJbnB1dENsYXNzZXN9PlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0ZWxcIj4gVGVsZXBob25lIDwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRlbFwiXHJcbiAgICAgICAgICAgIGlkPVwidGVsXCJcclxuICAgICAgICAgICAgLy8gcmVmPXt0ZWxlcGhvbmV9XHJcbiAgICAgICAgICAgIHZhbHVlPXt0ZWxlfVxyXG4gICAgICAgICAgICBvbkJsdXI9e2JsdXJ0ZWxlfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17dGVsZUNoYW5nZUhhbmRsZXJ9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAge2luVmFsaWR0ZWxlICYmIChcclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZXJyb3ItdGV4dFwiPlBsZWFzZSBlbnRlciBhIHZhbGlkIFBob25lIG51bWJlcjwvcD5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uXCI+IEFkZCBDb21wYW55IDwvQnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZm9ybT5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZGRDb21wYW5pZXNGb3JtO1xyXG4iXSwibmFtZXMiOlsiVXNlcklucHV0IiwiQnV0dG9uIiwiQWRkQ29tcGFuaWVzRm9ybSIsInByb3BzIiwidmFsdWUiLCJ0cmltIiwiY29tcGFueW5hbWUiLCJ2YWxpZGNvbXBuYW1lIiwiaXNWYWxpZCIsImluVmFsaWRjb21wbmFtZSIsImhhc0Vycm9yIiwiY29tcG5hbWVDaGFuZ2VIYW5kbGVyIiwidmFsdWVDaGFuZ2VIYW5kbGVyIiwiYmx1cmNvbXBuYW1lIiwib25mb2N1c0hhbmRsZXIiLCJyZXNldGNvbXBhbnluYW1lIiwicmVzZXQiLCJsaW5lT2ZCdXNpbmVzcyIsIlZhbGlkbGluZU9mQnVzaW5lc3MiLCJpblZhbGlkbGluZU9mQnVzaW5lc3MiLCJsaW5lT2ZCdXNpbmVzc0NoYW5nZUhhbmRsZXIiLCJibHVybGluZU9mQnVzaW5lc3MiLCJyZXNldGxpbmVPZkJ1c2luZXNzIiwiY29udGFjdHBlcnNvbiIsInZhbGlkY29udGFjdHBlcnNvbiIsImluVmFsaWRjb250YWN0cGVyc29uIiwiY29udGFjdHBlcnNvbkNoYW5nZUhhbmRsZXIiLCJibHVyY29udGFjdHBlcnNvbiIsInJlc2V0Y29udGFjdHBlcnNvbiIsInRlbGUiLCJ2YWxpZHRlbGUiLCJpblZhbGlkdGVsZSIsInRlbGVDaGFuZ2VIYW5kbGVyIiwiYmx1cnRlbGUiLCJyZXNldHRlbGUiLCJUSU4iLCJ2YWxpZHRpbiIsImluVmFsaWR0aW4iLCJ0aW5DaGFuZ2VIYW5kbGVyIiwiYmx1cnRpbiIsInJlc2V0dGluIiwicmVzZXRGb3JtIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImZvcm1WYWxpZGF0aW9uIiwic3VibWl0SGFuZGxlciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJlIiwiY29tcGFueURhdGFPYmplY3QiLCJjb25zb2xlIiwibG9nIiwib25BZGRjb21wYW5pZXNmb3JtIiwibmFtZUlucHV0Q2xhc3NlcyIsImNvbnRhY3RJbnB1dENsYXNzZXMiLCJ0ZWxlSW5wdXRDbGFzc2VzIiwidGluSW5wdXRDbGFzc2VzIiwibGluZU9mQnVzaW5lc3NDbGFzc2VzIl0sInNvdXJjZVJvb3QiOiIifQ==