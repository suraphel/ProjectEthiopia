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
    resetlineOfBusiness(""); // const items = {
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
          lineNumber: 131,
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
          lineNumber: 132,
          columnNumber: 11
        }, this), inValidtin && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
          className: "error-text",
          children: "Please enter a valid TIN ID"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: nameInputClasses,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("label", {
          htmlFor: "compname",
          children: " Company Name "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 145,
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
          lineNumber: 146,
          columnNumber: 11
        }, this), inValidcompname && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
          className: "error-text",
          children: "Please fill in a valid name"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: lineOfBusinessClasses,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("label", {
          htmlFor: "lineOfBusiness",
          children: " Line of Business "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("select", {
          id: "lineOfBusiness",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
            value: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 162,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
            value: "Mechanic",
            children: "Mechanic "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 163,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
            value: "HandyMan",
            children: "HandyMan "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 164,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
            value: "House Hel",
            children: "House Help "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 165,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
            value: "IT Solution",
            children: "IT Solution "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 166,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
            value: "Architect",
            children: "Architect "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 167,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
            value: "Gardner",
            children: "Gardner "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 168,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
            value: "Transport",
            children: "Transport "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 169,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
            value: "Cleaning",
            children: "Cleaning "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 170,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
            value: "other",
            children: "Other ... "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 171,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: contactInputClasses,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("label", {
          htmlFor: "contperson",
          children: " Contact Person "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 189,
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
          lineNumber: 190,
          columnNumber: 11
        }, this), inValidcontactperson && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
          className: "error-text",
          children: "Please enter a valid Contact Person"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 199,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: teleInputClasses,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("label", {
          htmlFor: "tel",
          children: " Telephone "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 203,
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
          lineNumber: 204,
          columnNumber: 11
        }, this), inValidtele && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
          className: "error-text",
          children: "Please enter a valid Phone number"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 213,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_ui_button_Button__WEBPACK_IMPORTED_MODULE_1__.default, {
        className: "button",
        children: " Add Company"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 217,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 128,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvVXBsb2FkaW5nQ29tcGFuaWVzVG9EYi43MGY2M2MzMzY4NjI0ZTU5M2U2MS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxTQUFTRSxnQkFBVCxDQUEwQkMsS0FBMUIsRUFBaUM7QUFDL0IsbUJBT0lILDJEQUFTLENBQUMsVUFBQ0ksS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBTixPQUFpQixFQUE1QjtBQUFBLEdBQUQsQ0FQYjtBQUFBLE1BQ1NDLFdBRFQsY0FDRUYsS0FERjtBQUFBLE1BRVdHLGFBRlgsY0FFRUMsT0FGRjtBQUFBLE1BR1lDLGVBSFosY0FHRUMsUUFIRjtBQUFBLE1BSXNCQyxxQkFKdEIsY0FJRUMsa0JBSkY7QUFBQSxNQUtrQkMsWUFMbEIsY0FLRUMsY0FMRjtBQUFBLE1BTVNDLGdCQU5ULGNBTUVDLEtBTkY7O0FBU0Esb0JBT0loQiwyREFBUyxDQUFDLFVBQUNJLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLElBQU4sT0FBaUIsRUFBNUI7QUFBQSxHQUFELENBUGI7QUFBQSxNQUNTWSxjQURULGVBQ0ViLEtBREY7QUFBQSxNQUVXYyxtQkFGWCxlQUVFVixPQUZGO0FBQUEsTUFHWVcscUJBSFosZUFHRVQsUUFIRjtBQUFBLE1BSXNCVSwyQkFKdEIsZUFJRVIsa0JBSkY7QUFBQSxNQUtrQlMsa0JBTGxCLGVBS0VQLGNBTEY7QUFBQSxNQU1TUSxtQkFOVCxlQU1FTixLQU5GOztBQVNBLG9CQU9JaEIsMkRBQVMsQ0FBQyxVQUFDSSxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFOLE9BQWlCLEVBQTVCO0FBQUEsR0FBRCxDQVBiO0FBQUEsTUFDU2tCLGFBRFQsZUFDRW5CLEtBREY7QUFBQSxNQUVXb0Isa0JBRlgsZUFFRWhCLE9BRkY7QUFBQSxNQUdZaUIsb0JBSFosZUFHRWYsUUFIRjtBQUFBLE1BSXNC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QVhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTNERixlQXlFRTtBQUFLLGlCQUFTLEVBQUUwQixnQkFBaEI7QUFBQSxnQ0FDRTtBQUFPLGlCQUFPLEVBQUMsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFO0FBQ0UsY0FBSSxFQUFDLEtBRFA7QUFFRSxZQUFFLEVBQUMsS0FGTCxDQUdFO0FBSEY7QUFJRSxlQUFLLEVBQUV0QixJQUpUO0FBS0UsZ0JBQU0sRUFBRUksUUFMVjtBQU1FLGtCQUFRLEVBQUVEO0FBTlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRixFQVVHRCxXQUFXLGlCQUNWO0FBQUcsbUJBQVMsRUFBQyxZQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXpFRixlQXdGRSw4REFBQyxzREFBRDtBQUFRLGlCQUFTLEVBQUMsUUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F4RkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBOEZEOztLQXROUTdCO0FBd05ULCtEQUFlQSxnQkFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2RhdGFGbG93L2NvbXBhbnlyZWdpc3RyYXRpb24vQWRkQ29tcGFuaWVzRm9ybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgIHt1c2VSZWZ9IGZyb20gJ3JlYWN0J1xyXG4vLyBpbXBvcnQgICcuL0FkZENvbXBhbmllcy5jc3MnO1xyXG4vLyBpbXBvcnQgeyBJbnQzMiB9IGZyb20gXCJic29uXCI7XHJcbmltcG9ydCBVc2VySW5wdXQgZnJvbSBcIi4uLy4uL2hvb2tzL3VzZXItaW5wdXRzXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uLy4uL3VpL2J1dHRvbi9CdXR0b25cIjtcclxuXHJcbmZ1bmN0aW9uIEFkZENvbXBhbmllc0Zvcm0ocHJvcHMpIHtcclxuICBjb25zdCB7XHJcbiAgICB2YWx1ZTogY29tcGFueW5hbWUsXHJcbiAgICBpc1ZhbGlkOiB2YWxpZGNvbXBuYW1lLFxyXG4gICAgaGFzRXJyb3I6IGluVmFsaWRjb21wbmFtZSxcclxuICAgIHZhbHVlQ2hhbmdlSGFuZGxlcjogY29tcG5hbWVDaGFuZ2VIYW5kbGVyLFxyXG4gICAgb25mb2N1c0hhbmRsZXI6IGJsdXJjb21wbmFtZSxcclxuICAgIHJlc2V0OiByZXNldGNvbXBhbnluYW1lLFxyXG4gIH0gPSBVc2VySW5wdXQoKHZhbHVlKSA9PiB2YWx1ZS50cmltKCkgIT09IFwiXCIpO1xyXG5cclxuICBjb25zdCB7XHJcbiAgICB2YWx1ZTogbGluZU9mQnVzaW5lc3MsXHJcbiAgICBpc1ZhbGlkOiBWYWxpZGxpbmVPZkJ1c2luZXNzLFxyXG4gICAgaGFzRXJyb3I6IGluVmFsaWRsaW5lT2ZCdXNpbmVzcyxcclxuICAgIHZhbHVlQ2hhbmdlSGFuZGxlcjogbGluZU9mQnVzaW5lc3NDaGFuZ2VIYW5kbGVyLFxyXG4gICAgb25mb2N1c0hhbmRsZXI6IGJsdXJsaW5lT2ZCdXNpbmVzcyxcclxuICAgIHJlc2V0OiByZXNldGxpbmVPZkJ1c2luZXNzLFxyXG4gIH0gPSBVc2VySW5wdXQoKHZhbHVlKSA9PiB2YWx1ZS50cmltKCkgIT09IFwiXCIpO1xyXG5cclxuICBjb25zdCB7XHJcbiAgICB2YWx1ZTogY29udGFjdHBlcnNvbixcclxuICAgIGlzVmFsaWQ6IHZhbGlkY29udGFjdHBlcnNvbixcclxuICAgIGhhc0Vycm9yOiBpblZhbGlkY29udGFjdHBlcnNvbixcclxuICAgIHZhbHVlQ2hhbmdlSGFuZGxlcjogY29udGFjdHBlcnNvbkNoYW5nZUhhbmRsZXIsXHJcbiAgICBvbmZvY3VzSGFuZGxlcjogYmx1cmNvbnRhY3RwZXJzb24sXHJcbiAgICByZXNldDogcmVzZXRjb250YWN0cGVyc29uLFxyXG4gIH0gPSBVc2VySW5wdXQoKHZhbHVlKSA9PiB2YWx1ZS50cmltKCkgIT09IFwiXCIpO1xyXG5cclxuICBjb25zdCB7XHJcbiAgICB2YWx1ZTogdGVsZSxcclxuICAgIGlzVmFsaWQ6IHZhbGlkdGVsZSxcclxuICAgIGhhc0Vycm9yOiBpblZhbGlkdGVsZSxcclxuICAgIHZhbHVlQ2hhbmdlSGFuZGxlcjogdGVsZUNoYW5nZUhhbmRsZXIsXHJcbiAgICBvbmZvY3VzSGFuZGxlcjogYmx1cnRlbGUsXHJcbiAgICByZXNldDogcmVzZXR0ZWxlLFxyXG4gIH0gPSBVc2VySW5wdXQoKHZhbHVlKSA9PiB2YWx1ZS50cmltKCkgIT09IFwiXCIpO1xyXG5cclxuICBjb25zdCB7XHJcbiAgICB2YWx1ZTogVElOLFxyXG4gICAgaXNWYWxpZDogdmFsaWR0aW4sXHJcbiAgICBoYXNFcnJvcjogaW5WYWxpZHRpbixcclxuICAgIHZhbHVlQ2hhbmdlSGFuZGxlcjogdGluQ2hhbmdlSGFuZGxlcixcclxuICAgIG9uZm9jdXNIYW5kbGVyOiBibHVydGluLFxyXG4gICAgcmVzZXQ6IHJlc2V0dGluLFxyXG4gIH0gPSBVc2VySW5wdXQoKHZhbHVlKSA9PiB2YWx1ZS50cmltKCkgIT09IFwiXCIpO1xyXG5cclxuICBsZXQgZm9ybVZhbGlkYXRpb24gPSBmYWxzZTtcclxuICBpZiAoXHJcbiAgICB2YWxpZGNvbXBuYW1lICYmXHJcbiAgICB2YWxpZGNvbnRhY3RwZXJzb24gJiZcclxuICAgIHZhbGlkdGVsZSAmJlxyXG4gICAgdmFsaWR0aW5cclxuICAgIC8vIGxpbmVPZkJ1c2luZXNzXHJcbiAgKSB7XHJcbiAgICBmb3JtVmFsaWRhdGlvbiA9IHRydWU7XHJcbiAgfVxyXG5cclxuICAvLyBjb25zdCBjb21wYW55bmFtZSA9IHVzZVJlZigpO1xyXG4gIC8vIGNvbnN0IGNvbnRhY3RwZXJzb24gPSB1c2VSZWYoKTtcclxuICAvLyBjb25zdCB0ZWxlcGhvbmUgPSB1c2VSZWYoKTtcclxuICAvLyBjblxyXG5cclxuICBjb25zdCBzdWJtaXRIYW5kbGVyID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGlmICghZm9ybVZhbGlkYXRpb24pIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKGNvbXBhbnluYW1lLGNvbnRhY3RwZXJzb24sdGVsZSk7XHJcblxyXG4gICAgY29uc3QgY29tcGFueURhdGFPYmplY3QgPSB7XHJcbiAgICAgIGNvbXBhbnluYW1lLFxyXG4gICAgICBjb250YWN0cGVyc29uLFxyXG4gICAgICB0ZWxlLFxyXG4gICAgICBUSU4sXHJcbiAgICAgIGxpbmVPZkJ1c2luZXNzLFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcImhlcmUgaXMgdGhlIHRleHQgXCIgKyBsaW5lT2ZCdXNpbmVzcyk7XHJcblxyXG4gICAgcHJvcHMub25BZGRjb21wYW5pZXNmb3JtKGNvbXBhbnlEYXRhT2JqZWN0KTtcclxuXHJcbiAgICByZXNldGNvbXBhbnluYW1lKFwiXCIpO1xyXG4gICAgcmVzZXRjb250YWN0cGVyc29uKFwiXCIpO1xyXG4gICAgcmVzZXR0ZWxlKFwiXCIpO1xyXG4gICAgcmVzZXR0aW4oXCJcIik7XHJcbiAgICByZXNldGxpbmVPZkJ1c2luZXNzKFwiXCIpO1xyXG5cclxuICAgIC8vIGNvbnN0IGl0ZW1zID0ge1xyXG4gICAgLy8gICBuYW1lOiBjb21wYW55bmFtZS5jdXJyZW50LnZhbHVlLFxyXG4gICAgLy8gICBjcGVyc29uOiBjb250YWN0cGVyc29uLmN1cnJlbnQudmFsdWUsXHJcbiAgICAvLyAgIHNuYW1lOiB0ZWxlcGhvbmUuY3VycmVudC52YWx1ZX1cclxuICB9O1xyXG5cclxuICAvLyBjb25zdCBpdGVtcyA9IHtcclxuICAvLyAgIG5hbWUgOmNvbXBhbnluYW1lLmN1cnJlbnQudmFsdWUsXHJcbiAgLy8gICBjcGVyc29uOiBjb250YWN0cGVyc29uLmN1cnJlbnQudmFsdWUsXHJcbiAgLy8gICBzbmFtZSA6dGVsZXBob25lLmN1cnJlbnQudmFsdWVcclxuXHJcbiAgLy8gfVxyXG5cclxuICBjb25zdCBuYW1lSW5wdXRDbGFzc2VzID0gaW5WYWxpZGNvbXBuYW1lXHJcbiAgICA/IFwiZm9ybS1jb250cm9sIGludmFsaWRcIlxyXG4gICAgOiBcImZvcm0tY29udHJvbCBcIjtcclxuXHJcbiAgY29uc3QgY29udGFjdElucHV0Q2xhc3NlcyA9IGluVmFsaWRjb250YWN0cGVyc29uXHJcbiAgICA/IFwiZm9ybS1jb250cm9sIGludmFsaWRcIlxyXG4gICAgOiBcImZvcm0tY29udHJvbCBcIjtcclxuXHJcbiAgY29uc3QgdGVsZUlucHV0Q2xhc3NlcyA9IGluVmFsaWR0ZWxlXHJcbiAgICA/IFwiZm9ybS1jb250cm9sIGludmFsaWRcIlxyXG4gICAgOiBcImZvcm0tY29udHJvbCBcIjtcclxuXHJcbiAgY29uc3QgdGluSW5wdXRDbGFzc2VzID0gaW5WYWxpZHRpbiA/IFwiZm9ybS1jb250cm9sIGludmFsaWRcIiA6IFwiZm9ybS1jb250cm9sIFwiO1xyXG5cclxuICBjb25zdCBsaW5lT2ZCdXNpbmVzc0NsYXNzZXMgPSBpblZhbGlkbGluZU9mQnVzaW5lc3NcclxuICAgID8gXCJmb3JtLWNvbnRyb2wgaW52YWxpZFwiXHJcbiAgICA6IFwiZm9ybS1jb250cm9sXCI7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9ybSBvblN1Ym1pdD17c3VibWl0SGFuZGxlcn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RpbklucHV0Q2xhc3Nlc30+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRpblwiPiBUSU4gSUQgPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgaWQ9XCJUSU5cIlxyXG4gICAgICAgICAgICAvLyByZWY9e3RlbGVwaG9uZX1cclxuICAgICAgICAgICAgdmFsdWU9e1RJTn1cclxuICAgICAgICAgICAgb25CbHVyPXtibHVydGlufVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17dGluQ2hhbmdlSGFuZGxlcn1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICB7aW5WYWxpZHRpbiAmJiAoXHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImVycm9yLXRleHRcIj5QbGVhc2UgZW50ZXIgYSB2YWxpZCBUSU4gSUQ8L3A+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtuYW1lSW5wdXRDbGFzc2VzfT5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY29tcG5hbWVcIj4gQ29tcGFueSBOYW1lIDwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBpZD1cImNvbXBuYW1lXCJcclxuICAgICAgICAgICAgLy8gcmVmPXtjb21wYW55bmFtZX1cclxuICAgICAgICAgICAgb25CbHVyPXtibHVyY29tcG5hbWV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtjb21wbmFtZUNoYW5nZUhhbmRsZXJ9XHJcbiAgICAgICAgICAgIHZhbHVlPXtjb21wYW55bmFtZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICB7aW5WYWxpZGNvbXBuYW1lICYmIChcclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZXJyb3ItdGV4dFwiPlBsZWFzZSBmaWxsIGluIGEgdmFsaWQgbmFtZTwvcD5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtsaW5lT2ZCdXNpbmVzc0NsYXNzZXN9PlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJsaW5lT2ZCdXNpbmVzc1wiPiBMaW5lIG9mIEJ1c2luZXNzIDwvbGFiZWw+XHJcbiAgICAgICAgICA8c2VsZWN0IGlkPVwibGluZU9mQnVzaW5lc3NcIj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPjwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTWVjaGFuaWNcIj5NZWNoYW5pYyA8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkhhbmR5TWFuXCI+SGFuZHlNYW4gPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJIb3VzZSBIZWxcIj5Ib3VzZSBIZWxwIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiSVQgU29sdXRpb25cIj5JVCBTb2x1dGlvbiA8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkFyY2hpdGVjdFwiPkFyY2hpdGVjdCA8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkdhcmRuZXJcIj5HYXJkbmVyIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiVHJhbnNwb3J0XCI+VHJhbnNwb3J0IDwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQ2xlYW5pbmdcIj5DbGVhbmluZyA8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm90aGVyXCI+T3RoZXIgLi4uIDwvb3B0aW9uPlxyXG4gICAgICAgICAgPC9zZWxlY3Q+XHJcblxyXG4gICAgICAgICAgey8qIC8vICkgfHwgKFxyXG4gICAgICAgICAgICAvLyAgIDxpbnB1dFxyXG4gICAgICAgICAgICAvLyAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAvLyAgICAgaWQ9XCJsaW5lT2ZCdXNpbmVzc1wiXHJcbiAgICAgICAgICAgIC8vICAgICAvLyByZWY9e3RlbGVwaG9uZX1cclxuICAgICAgICAgICAgLy8gICAgIHZhbHVlPXtsaW5lT2ZCdXNpbmVzc31cclxuICAgICAgICAgICAgLy8gICAgIG9uQmx1cj17Ymx1cmxpbmVPZkJ1c2luZXNzfVxyXG4gICAgICAgICAgICAvLyAgICAgb25DaGFuZ2U9e2xpbmVPZkJ1c2luZXNzQ2hhbmdlSGFuZGxlcn1cclxuICAgICAgICAgICAgLy8gICAvPiBcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLy8ge2luVmFsaWRsaW5lT2ZCdXNpbmVzcyAmJiAoXHJcbiAgICAgICAgICAvLyAgIDxwIGNsYXNzTmFtZT1cImVycm9yLXRleHRcIj5TcGVjaWZ5IExpbmUgb2YgQnVzaW5lc3MgPC9wPlxyXG4gICAgICAgICAgLy8gKX0qL31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y29udGFjdElucHV0Q2xhc3Nlc30+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImNvbnRwZXJzb25cIj4gQ29udGFjdCBQZXJzb24gPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIGlkPVwiY29udHBlcnNvblwiXHJcbiAgICAgICAgICAgIC8vIHJlZj17Y29udGFjdHBlcnNvbn1cclxuICAgICAgICAgICAgdmFsdWU9e2NvbnRhY3RwZXJzb259XHJcbiAgICAgICAgICAgIG9uQmx1cj17Ymx1cmNvbnRhY3RwZXJzb259XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtjb250YWN0cGVyc29uQ2hhbmdlSGFuZGxlcn1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICB7aW5WYWxpZGNvbnRhY3RwZXJzb24gJiYgKFxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJlcnJvci10ZXh0XCI+UGxlYXNlIGVudGVyIGEgdmFsaWQgQ29udGFjdCBQZXJzb248L3A+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0ZWxlSW5wdXRDbGFzc2VzfT5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidGVsXCI+IFRlbGVwaG9uZSA8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZWxcIlxyXG4gICAgICAgICAgICBpZD1cInRlbFwiXHJcbiAgICAgICAgICAgIC8vIHJlZj17dGVsZXBob25lfVxyXG4gICAgICAgICAgICB2YWx1ZT17dGVsZX1cclxuICAgICAgICAgICAgb25CbHVyPXtibHVydGVsZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e3RlbGVDaGFuZ2VIYW5kbGVyfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIHtpblZhbGlkdGVsZSAmJiAoXHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImVycm9yLXRleHRcIj5QbGVhc2UgZW50ZXIgYSB2YWxpZCBQaG9uZSBudW1iZXI8L3A+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvblwiPiBBZGQgQ29tcGFueTwvQnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZm9ybT5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZGRDb21wYW5pZXNGb3JtO1xyXG4iXSwibmFtZXMiOlsiVXNlcklucHV0IiwiQnV0dG9uIiwiQWRkQ29tcGFuaWVzRm9ybSIsInByb3BzIiwidmFsdWUiLCJ0cmltIiwiY29tcGFueW5hbWUiLCJ2YWxpZGNvbXBuYW1lIiwiaXNWYWxpZCIsImluVmFsaWRjb21wbmFtZSIsImhhc0Vycm9yIiwiY29tcG5hbWVDaGFuZ2VIYW5kbGVyIiwidmFsdWVDaGFuZ2VIYW5kbGVyIiwiYmx1cmNvbXBuYW1lIiwib25mb2N1c0hhbmRsZXIiLCJyZXNldGNvbXBhbnluYW1lIiwicmVzZXQiLCJsaW5lT2ZCdXNpbmVzcyIsIlZhbGlkbGluZU9mQnVzaW5lc3MiLCJpblZhbGlkbGluZU9mQnVzaW5lc3MiLCJsaW5lT2ZCdXNpbmVzc0NoYW5nZUhhbmRsZXIiLCJibHVybGluZU9mQnVzaW5lc3MiLCJyZXNldGxpbmVPZkJ1c2luZXNzIiwiY29udGFjdHBlcnNvbiIsInZhbGlkY29udGFjdHBlcnNvbiIsImluVmFsaWRjb250YWN0cGVyc29uIiwiY29udGFjdHBlcnNvbkNoYW5nZUhhbmRsZXIiLCJibHVyY29udGFjdHBlcnNvbiIsInJlc2V0Y29udGFjdHBlcnNvbiIsInRlbGUiLCJ2YWxpZHRlbGUiLCJpblZhbGlkdGVsZSIsInRlbGVDaGFuZ2VIYW5kbGVyIiwiYmx1cnRlbGUiLCJyZXNldHRlbGUiLCJUSU4iLCJ2YWxpZHRpbiIsImluVmFsaWR0aW4iLCJ0aW5DaGFuZ2VIYW5kbGVyIiwiYmx1cnRpbiIsInJlc2V0dGluIiwiZm9ybVZhbGlkYXRpb24iLCJzdWJtaXRIYW5kbGVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNvbXBhbnlEYXRhT2JqZWN0IiwiY29uc29sZSIsImxvZyIsIm9uQWRkY29tcGFuaWVzZm9ybSIsIm5hbWVJbnB1dENsYXNzZXMiLCJjb250YWN0SW5wdXRDbGFzc2VzIiwidGVsZUlucHV0Q2xhc3NlcyIsInRpbklucHV0Q2xhc3NlcyIsImxpbmVPZkJ1c2luZXNzQ2xhc3NlcyJdLCJzb3VyY2VSb290IjoiIn0=