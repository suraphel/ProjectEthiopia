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
      contactperson = _UserInput2.value,
      validcontactperson = _UserInput2.isValid,
      inValidcontactperson = _UserInput2.hasError,
      contactpersonChangeHandler = _UserInput2.valueChangeHandler,
      blurcontactperson = _UserInput2.onfocusHandler,
      resetcontactperson = _UserInput2.reset;

  var _UserInput3 = (0,_hooks_user_inputs__WEBPACK_IMPORTED_MODULE_0__.default)(function (value) {
    return value.trim() !== "";
  }),
      tele = _UserInput3.value,
      validtele = _UserInput3.isValid,
      inValidtele = _UserInput3.hasError,
      teleChangeHandler = _UserInput3.valueChangeHandler,
      blurtele = _UserInput3.onfocusHandler,
      resettele = _UserInput3.reset;

  var _UserInput4 = (0,_hooks_user_inputs__WEBPACK_IMPORTED_MODULE_0__.default)(function (value) {
    return value.trim() !== "";
  }),
      TIN = _UserInput4.value,
      validtin = _UserInput4.isValid,
      inValidtin = _UserInput4.hasError,
      tinChangeHandler = _UserInput4.valueChangeHandler,
      blurtin = _UserInput4.onfocusHandler,
      resettin = _UserInput4.reset;

  var formValidation = false;

  if (validcompname && validcontactperson && validtele && validtin) {
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
      TIN: TIN
    };
    props.onAddcompaniesform(companyDataObject);
    resetcompanyname("");
    resetcontactperson("");
    resettele("");
    resettin(""); // const items = {
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
          lineNumber: 108,
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
          lineNumber: 109,
          columnNumber: 11
        }, this), inValidtin && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
          className: "error-text",
          children: "Please enter a valid TIN ID"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: nameInputClasses,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("label", {
          htmlFor: "compname",
          children: " Company Name "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 122,
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
          lineNumber: 123,
          columnNumber: 11
        }, this), inValidcompname && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
          className: "error-text",
          children: "Please fill in a valid name"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: tinInputClasses,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("label", {
          htmlFor: "tin",
          children: " Line of Business "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("select", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
            value: "Transport",
            children: "Transport "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
            value: "Transport",
            children: "HandyMan "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
            value: "Transport",
            children: "Transport "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
            value: "Transport",
            children: "Transport "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 142,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
            value: "Transport",
            children: "HandyMan "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
            value: "Transport",
            children: "Transport "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 144,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
            value: "Transport",
            children: "Transport "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 145,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
            value: "Transport",
            children: "HandyMan "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 146,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
            value: "Transport",
            children: "Transport "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 11
        }, this), inValidtin && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
          className: "error-text",
          children: "Please enter a valid TIN ID"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: contactInputClasses,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("label", {
          htmlFor: "contperson",
          children: " Contact Person "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 162,
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
          lineNumber: 163,
          columnNumber: 11
        }, this), inValidcontactperson && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
          className: "error-text",
          children: "Please enter a valid Contact Person"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: teleInputClasses,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("label", {
          htmlFor: "tel",
          children: " Telephone "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 176,
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
          lineNumber: 177,
          columnNumber: 11
        }, this), inValidtele && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
          className: "error-text",
          children: "Please enter a valid Phone number"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_ui_button_Button__WEBPACK_IMPORTED_MODULE_1__.default, {
        className: "button",
        children: " Add Company"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 105,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvVXBsb2FkaW5nQ29tcGFuaWVzVG9EYi5lODJiZTM3YThhNjM1MjY3MDI2NC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxTQUFTRSxnQkFBVCxDQUEwQkMsS0FBMUIsRUFBaUM7QUFDL0IsbUJBT0lILDJEQUFTLENBQUMsVUFBQ0ksS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBTixPQUFpQixFQUE1QjtBQUFBLEdBQUQsQ0FQYjtBQUFBLE1BQ1NDLFdBRFQsY0FDRUYsS0FERjtBQUFBLE1BRVdHLGFBRlgsY0FFRUMsT0FGRjtBQUFBLE1BR1lDLGVBSFosY0FHRUMsUUFIRjtBQUFBLE1BSXNCQyxxQkFKdEIsY0FJRUMsa0JBSkY7QUFBQSxNQUtrQkMsWUFMbEIsY0FLRUMsY0FMRjtBQUFBLE1BTVNDLGdCQU5ULGNBTUVDLEtBTkY7O0FBU0Esb0JBT0loQiwyREFBUyxDQUFDLFVBQUNJLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLElBQU4sT0FBaUIsRUFBNUI7QUFBQSxHQUFELENBUGI7QUFBQSxNQUNTWSxhQURULGVBQ0ViLEtBREY7QUFBQSxNQUVXYyxrQkFGWCxlQUVFVixPQUZGO0FBQUEsTUFHWVcsb0JBSFosZUFHRVQsUUFIRjtBQUFBLE1BSXNCVSwwQkFKdEIsZUFJRVIsa0JBSkY7QUFBQSxNQUtrQlMsaUJBTGxCLGVBS0VQLGNBTEY7QUFBQSxNQU1TUSxrQkFOVCxlQU1FTixLQU5GOztBQVNBLG9CQU9JaEIsMkRBQVMsQ0FBQyxVQUFDSSxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFOLE9BQWlCLEVBQTVCO0FBQUEsR0FBRCxDQVBiO0FBQUEsTUFDU2tCLElBRFQsZUFDRW5CLEtBREY7QUFBQSxNQUVXb0IsU0FGWCxlQUVFaEIsT0FGRjtBQUFBLE1BR1lpQixXQUhaLGVBR0VmLFFBSEY7QUFBQSxNQUlzQmdC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QUEsY0FwRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBMEZEOztLQTNMUXZCO0FBNkxULCtEQUFlQSxnQkFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2RhdGFGbG93L2NvbXBhbnlyZWdpc3RyYXRpb24vQWRkQ29tcGFuaWVzRm9ybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgIHt1c2VSZWZ9IGZyb20gJ3JlYWN0J1xyXG4vLyBpbXBvcnQgICcuL0FkZENvbXBhbmllcy5jc3MnO1xyXG4vLyBpbXBvcnQgeyBJbnQzMiB9IGZyb20gXCJic29uXCI7XHJcbmltcG9ydCBVc2VySW5wdXQgZnJvbSBcIi4uLy4uL2hvb2tzL3VzZXItaW5wdXRzXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uLy4uL3VpL2J1dHRvbi9CdXR0b25cIjtcclxuXHJcbmZ1bmN0aW9uIEFkZENvbXBhbmllc0Zvcm0ocHJvcHMpIHtcclxuICBjb25zdCB7XHJcbiAgICB2YWx1ZTogY29tcGFueW5hbWUsXHJcbiAgICBpc1ZhbGlkOiB2YWxpZGNvbXBuYW1lLFxyXG4gICAgaGFzRXJyb3I6IGluVmFsaWRjb21wbmFtZSxcclxuICAgIHZhbHVlQ2hhbmdlSGFuZGxlcjogY29tcG5hbWVDaGFuZ2VIYW5kbGVyLFxyXG4gICAgb25mb2N1c0hhbmRsZXI6IGJsdXJjb21wbmFtZSxcclxuICAgIHJlc2V0OiByZXNldGNvbXBhbnluYW1lLFxyXG4gIH0gPSBVc2VySW5wdXQoKHZhbHVlKSA9PiB2YWx1ZS50cmltKCkgIT09IFwiXCIpO1xyXG5cclxuICBjb25zdCB7XHJcbiAgICB2YWx1ZTogY29udGFjdHBlcnNvbixcclxuICAgIGlzVmFsaWQ6IHZhbGlkY29udGFjdHBlcnNvbixcclxuICAgIGhhc0Vycm9yOiBpblZhbGlkY29udGFjdHBlcnNvbixcclxuICAgIHZhbHVlQ2hhbmdlSGFuZGxlcjogY29udGFjdHBlcnNvbkNoYW5nZUhhbmRsZXIsXHJcbiAgICBvbmZvY3VzSGFuZGxlcjogYmx1cmNvbnRhY3RwZXJzb24sXHJcbiAgICByZXNldDogcmVzZXRjb250YWN0cGVyc29uLFxyXG4gIH0gPSBVc2VySW5wdXQoKHZhbHVlKSA9PiB2YWx1ZS50cmltKCkgIT09IFwiXCIpO1xyXG5cclxuICBjb25zdCB7XHJcbiAgICB2YWx1ZTogdGVsZSxcclxuICAgIGlzVmFsaWQ6IHZhbGlkdGVsZSxcclxuICAgIGhhc0Vycm9yOiBpblZhbGlkdGVsZSxcclxuICAgIHZhbHVlQ2hhbmdlSGFuZGxlcjogdGVsZUNoYW5nZUhhbmRsZXIsXHJcbiAgICBvbmZvY3VzSGFuZGxlcjogYmx1cnRlbGUsXHJcbiAgICByZXNldDogcmVzZXR0ZWxlLFxyXG4gIH0gPSBVc2VySW5wdXQoKHZhbHVlKSA9PiB2YWx1ZS50cmltKCkgIT09IFwiXCIpO1xyXG5cclxuICBjb25zdCB7XHJcbiAgICB2YWx1ZTogVElOLFxyXG4gICAgaXNWYWxpZDogdmFsaWR0aW4sXHJcbiAgICBoYXNFcnJvcjogaW5WYWxpZHRpbixcclxuICAgIHZhbHVlQ2hhbmdlSGFuZGxlcjogdGluQ2hhbmdlSGFuZGxlcixcclxuICAgIG9uZm9jdXNIYW5kbGVyOiBibHVydGluLFxyXG4gICAgcmVzZXQ6IHJlc2V0dGluLFxyXG4gIH0gPSBVc2VySW5wdXQoKHZhbHVlKSA9PiB2YWx1ZS50cmltKCkgIT09IFwiXCIpO1xyXG5cclxuICBsZXQgZm9ybVZhbGlkYXRpb24gPSBmYWxzZTtcclxuICBpZiAodmFsaWRjb21wbmFtZSAmJiB2YWxpZGNvbnRhY3RwZXJzb24gJiYgdmFsaWR0ZWxlICYmIHZhbGlkdGluKSB7XHJcbiAgICBmb3JtVmFsaWRhdGlvbiA9IHRydWU7XHJcbiAgfVxyXG5cclxuICAvLyBjb25zdCBjb21wYW55bmFtZSA9IHVzZVJlZigpO1xyXG4gIC8vIGNvbnN0IGNvbnRhY3RwZXJzb24gPSB1c2VSZWYoKTtcclxuICAvLyBjb25zdCB0ZWxlcGhvbmUgPSB1c2VSZWYoKTtcclxuICAvLyBjblxyXG5cclxuICBjb25zdCBzdWJtaXRIYW5kbGVyID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGlmICghZm9ybVZhbGlkYXRpb24pIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKGNvbXBhbnluYW1lLGNvbnRhY3RwZXJzb24sdGVsZSk7XHJcblxyXG4gICAgY29uc3QgY29tcGFueURhdGFPYmplY3QgPSB7XHJcbiAgICAgIGNvbXBhbnluYW1lLFxyXG4gICAgICBjb250YWN0cGVyc29uLFxyXG4gICAgICB0ZWxlLFxyXG4gICAgICBUSU4sXHJcbiAgICB9O1xyXG5cclxuICAgIHByb3BzLm9uQWRkY29tcGFuaWVzZm9ybShjb21wYW55RGF0YU9iamVjdCk7XHJcblxyXG4gICAgcmVzZXRjb21wYW55bmFtZShcIlwiKTtcclxuICAgIHJlc2V0Y29udGFjdHBlcnNvbihcIlwiKTtcclxuICAgIHJlc2V0dGVsZShcIlwiKTtcclxuICAgIHJlc2V0dGluKFwiXCIpO1xyXG5cclxuICAgIC8vIGNvbnN0IGl0ZW1zID0ge1xyXG4gICAgLy8gICBuYW1lOiBjb21wYW55bmFtZS5jdXJyZW50LnZhbHVlLFxyXG4gICAgLy8gICBjcGVyc29uOiBjb250YWN0cGVyc29uLmN1cnJlbnQudmFsdWUsXHJcbiAgICAvLyAgIHNuYW1lOiB0ZWxlcGhvbmUuY3VycmVudC52YWx1ZX1cclxuICB9O1xyXG5cclxuICAvLyBjb25zdCBpdGVtcyA9IHtcclxuICAvLyAgIG5hbWUgOmNvbXBhbnluYW1lLmN1cnJlbnQudmFsdWUsXHJcbiAgLy8gICBjcGVyc29uOiBjb250YWN0cGVyc29uLmN1cnJlbnQudmFsdWUsXHJcbiAgLy8gICBzbmFtZSA6dGVsZXBob25lLmN1cnJlbnQudmFsdWVcclxuXHJcbiAgLy8gfVxyXG5cclxuICBjb25zdCBuYW1lSW5wdXRDbGFzc2VzID0gaW5WYWxpZGNvbXBuYW1lXHJcbiAgICA/IFwiZm9ybS1jb250cm9sIGludmFsaWRcIlxyXG4gICAgOiBcImZvcm0tY29udHJvbCBcIjtcclxuXHJcbiAgY29uc3QgY29udGFjdElucHV0Q2xhc3NlcyA9IGluVmFsaWRjb250YWN0cGVyc29uXHJcbiAgICA/IFwiZm9ybS1jb250cm9sIGludmFsaWRcIlxyXG4gICAgOiBcImZvcm0tY29udHJvbCBcIjtcclxuXHJcbiAgY29uc3QgdGVsZUlucHV0Q2xhc3NlcyA9IGluVmFsaWR0ZWxlXHJcbiAgICA/IFwiZm9ybS1jb250cm9sIGludmFsaWRcIlxyXG4gICAgOiBcImZvcm0tY29udHJvbCBcIjtcclxuXHJcbiAgY29uc3QgdGluSW5wdXRDbGFzc2VzID0gaW5WYWxpZHRpbiA/IFwiZm9ybS1jb250cm9sIGludmFsaWRcIiA6IFwiZm9ybS1jb250cm9sIFwiO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGZvcm0gb25TdWJtaXQ9e3N1Ym1pdEhhbmRsZXJ9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aW5JbnB1dENsYXNzZXN9PlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0aW5cIj4gVElOIElEIDwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgIGlkPVwiVElOXCJcclxuICAgICAgICAgICAgLy8gcmVmPXt0ZWxlcGhvbmV9XHJcbiAgICAgICAgICAgIHZhbHVlPXtUSU59XHJcbiAgICAgICAgICAgIG9uQmx1cj17Ymx1cnRpbn1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e3RpbkNoYW5nZUhhbmRsZXJ9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAge2luVmFsaWR0aW4gJiYgKFxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJlcnJvci10ZXh0XCI+UGxlYXNlIGVudGVyIGEgdmFsaWQgVElOIElEPC9wPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17bmFtZUlucHV0Q2xhc3Nlc30+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImNvbXBuYW1lXCI+IENvbXBhbnkgTmFtZSA8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgaWQ9XCJjb21wbmFtZVwiXHJcbiAgICAgICAgICAgIC8vIHJlZj17Y29tcGFueW5hbWV9XHJcbiAgICAgICAgICAgIG9uQmx1cj17Ymx1cmNvbXBuYW1lfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17Y29tcG5hbWVDaGFuZ2VIYW5kbGVyfVxyXG4gICAgICAgICAgICB2YWx1ZT17Y29tcGFueW5hbWV9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAge2luVmFsaWRjb21wbmFtZSAmJiAoXHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImVycm9yLXRleHRcIj5QbGVhc2UgZmlsbCBpbiBhIHZhbGlkIG5hbWU8L3A+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGluSW5wdXRDbGFzc2VzfT5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidGluXCI+IExpbmUgb2YgQnVzaW5lc3MgPC9sYWJlbD5cclxuICAgICAgICAgIDxzZWxlY3Q+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJUcmFuc3BvcnRcIj5UcmFuc3BvcnQgPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJUcmFuc3BvcnRcIj5IYW5keU1hbiA8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlRyYW5zcG9ydFwiPlRyYW5zcG9ydCA8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlRyYW5zcG9ydFwiPlRyYW5zcG9ydCA8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlRyYW5zcG9ydFwiPkhhbmR5TWFuIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiVHJhbnNwb3J0XCI+VHJhbnNwb3J0IDwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiVHJhbnNwb3J0XCI+VHJhbnNwb3J0IDwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiVHJhbnNwb3J0XCI+SGFuZHlNYW4gPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJUcmFuc3BvcnRcIj5UcmFuc3BvcnQgPC9vcHRpb24+XHJcbiAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgIHsvKiA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgIGlkPVwiVElOXCJcclxuICAgICAgICAgICAgLy8gcmVmPXt0ZWxlcGhvbmV9XHJcbiAgICAgICAgICAgIHZhbHVlPXtUSU59XHJcbiAgICAgICAgICAgIG9uQmx1cj17Ymx1cnRpbn1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e3RpbkNoYW5nZUhhbmRsZXJ9XHJcbiAgICAgICAgICAvPiAqL31cclxuICAgICAgICAgIHtpblZhbGlkdGluICYmIChcclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZXJyb3ItdGV4dFwiPlBsZWFzZSBlbnRlciBhIHZhbGlkIFRJTiBJRDwvcD5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NvbnRhY3RJbnB1dENsYXNzZXN9PlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjb250cGVyc29uXCI+IENvbnRhY3QgUGVyc29uIDwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBpZD1cImNvbnRwZXJzb25cIlxyXG4gICAgICAgICAgICAvLyByZWY9e2NvbnRhY3RwZXJzb259XHJcbiAgICAgICAgICAgIHZhbHVlPXtjb250YWN0cGVyc29ufVxyXG4gICAgICAgICAgICBvbkJsdXI9e2JsdXJjb250YWN0cGVyc29ufVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17Y29udGFjdHBlcnNvbkNoYW5nZUhhbmRsZXJ9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAge2luVmFsaWRjb250YWN0cGVyc29uICYmIChcclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZXJyb3ItdGV4dFwiPlBsZWFzZSBlbnRlciBhIHZhbGlkIENvbnRhY3QgUGVyc29uPC9wPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGVsZUlucHV0Q2xhc3Nlc30+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRlbFwiPiBUZWxlcGhvbmUgPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGVsXCJcclxuICAgICAgICAgICAgaWQ9XCJ0ZWxcIlxyXG4gICAgICAgICAgICAvLyByZWY9e3RlbGVwaG9uZX1cclxuICAgICAgICAgICAgdmFsdWU9e3RlbGV9XHJcbiAgICAgICAgICAgIG9uQmx1cj17Ymx1cnRlbGV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0ZWxlQ2hhbmdlSGFuZGxlcn1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICB7aW5WYWxpZHRlbGUgJiYgKFxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJlcnJvci10ZXh0XCI+UGxlYXNlIGVudGVyIGEgdmFsaWQgUGhvbmUgbnVtYmVyPC9wPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b25cIj4gQWRkIENvbXBhbnk8L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Zvcm0+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRkQ29tcGFuaWVzRm9ybTtcclxuIl0sIm5hbWVzIjpbIlVzZXJJbnB1dCIsIkJ1dHRvbiIsIkFkZENvbXBhbmllc0Zvcm0iLCJwcm9wcyIsInZhbHVlIiwidHJpbSIsImNvbXBhbnluYW1lIiwidmFsaWRjb21wbmFtZSIsImlzVmFsaWQiLCJpblZhbGlkY29tcG5hbWUiLCJoYXNFcnJvciIsImNvbXBuYW1lQ2hhbmdlSGFuZGxlciIsInZhbHVlQ2hhbmdlSGFuZGxlciIsImJsdXJjb21wbmFtZSIsIm9uZm9jdXNIYW5kbGVyIiwicmVzZXRjb21wYW55bmFtZSIsInJlc2V0IiwiY29udGFjdHBlcnNvbiIsInZhbGlkY29udGFjdHBlcnNvbiIsImluVmFsaWRjb250YWN0cGVyc29uIiwiY29udGFjdHBlcnNvbkNoYW5nZUhhbmRsZXIiLCJibHVyY29udGFjdHBlcnNvbiIsInJlc2V0Y29udGFjdHBlcnNvbiIsInRlbGUiLCJ2YWxpZHRlbGUiLCJpblZhbGlkdGVsZSIsInRlbGVDaGFuZ2VIYW5kbGVyIiwiYmx1cnRlbGUiLCJyZXNldHRlbGUiLCJUSU4iLCJ2YWxpZHRpbiIsImluVmFsaWR0aW4iLCJ0aW5DaGFuZ2VIYW5kbGVyIiwiYmx1cnRpbiIsInJlc2V0dGluIiwiZm9ybVZhbGlkYXRpb24iLCJzdWJtaXRIYW5kbGVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNvbXBhbnlEYXRhT2JqZWN0Iiwib25BZGRjb21wYW5pZXNmb3JtIiwibmFtZUlucHV0Q2xhc3NlcyIsImNvbnRhY3RJbnB1dENsYXNzZXMiLCJ0ZWxlSW5wdXRDbGFzc2VzIiwidGluSW5wdXRDbGFzc2VzIl0sInNvdXJjZVJvb3QiOiIifQ==