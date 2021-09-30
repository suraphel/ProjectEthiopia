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
          lineNumber: 118,
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
          lineNumber: 119,
          columnNumber: 11
        }, this), inValidtin && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
          className: "error-text",
          children: "Please enter a valid TIN ID"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: nameInputClasses,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("label", {
          htmlFor: "compname",
          children: " Company Name "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 132,
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
          lineNumber: 133,
          columnNumber: 11
        }, this), inValidcompname && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
          className: "error-text",
          children: "Please fill in a valid name"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: tinInputClasses,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("label", {
          htmlFor: "tin",
          children: " Line of Business "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("select", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
            value: "",
            children: "-- "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 149,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
            value: "Mechanic",
            children: "Mechanic "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 150,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
            value: "HandyMan",
            children: "HandyMan "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 151,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
            value: "House Hel",
            children: "House Help "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 152,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
            value: "IT Solution",
            children: "IT Solution "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 153,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
            value: "Architect",
            children: "Architect "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 154,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
            value: "Gardner",
            children: "Gardner "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 155,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
            value: "Transport",
            children: "Transport "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 156,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
            value: "Cleaning",
            children: "Cleaning "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 157,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
          type: "text",
          id: "lineOfBusiness" // ref={telephone}
          ,
          value: lineOfBusiness,
          onBlur: blurlineOfBusiness,
          onChange: lineOfBusinessChangeHandler
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 13
        }, this), inValidlineOfBusiness && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
          className: "error-text",
          children: "Please enter a valid TIN ID"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: contactInputClasses,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("label", {
          htmlFor: "contperson",
          children: " Contact Person "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 174,
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
          lineNumber: 175,
          columnNumber: 11
        }, this), inValidcontactperson && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
          className: "error-text",
          children: "Please enter a valid Contact Person"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: teleInputClasses,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("label", {
          htmlFor: "tel",
          children: " Telephone "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 188,
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
          lineNumber: 189,
          columnNumber: 11
        }, this), inValidtele && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
          className: "error-text",
          children: "Please enter a valid Phone number"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 198,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_ui_button_Button__WEBPACK_IMPORTED_MODULE_1__.default, {
        className: "button",
        children: " Add Company"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 115,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvVXBsb2FkaW5nQ29tcGFuaWVzVG9EYi41OGZjYTc3ODgxMTlmNGUxODkxZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxTQUFTRSxnQkFBVCxDQUEwQkMsS0FBMUIsRUFBaUM7QUFDL0IsbUJBT0lILDJEQUFTLENBQUMsVUFBQ0ksS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBTixPQUFpQixFQUE1QjtBQUFBLEdBQUQsQ0FQYjtBQUFBLE1BQ1NDLFdBRFQsY0FDRUYsS0FERjtBQUFBLE1BRVdHLGFBRlgsY0FFRUMsT0FGRjtBQUFBLE1BR1lDLGVBSFosY0FHRUMsUUFIRjtBQUFBLE1BSXNCQyxxQkFKdEIsY0FJRUMsa0JBSkY7QUFBQSxNQUtrQkMsWUFMbEIsY0FLRUMsY0FMRjtBQUFBLE1BTVNDLGdCQU5ULGNBTUVDLEtBTkY7O0FBU0Esb0JBT0loQiwyREFBUyxDQUFDLFVBQUNJLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLElBQU4sT0FBaUIsRUFBNUI7QUFBQSxHQUFELENBUGI7QUFBQSxNQUNTWSxjQURULGVBQ0ViLEtBREY7QUFBQSxNQUVXYyxtQkFGWCxlQUVFVixPQUZGO0FBQUEsTUFHWVcscUJBSFosZUFHRVQsUUFIRjtBQUFBLE1BSXNCVSwyQkFKdEIsZUFJRVIsa0JBSkY7QUFBQSxNQUtrQlMsa0JBTGxCLGVBS0VQLGNBTEY7QUFBQSxNQU1TUSxtQkFOVCxlQU1FTixLQU5GOztBQVNBLG9CQU9JaEIsMkRBQVMsQ0FBQyxVQUFDSSxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFOLE9BQWlCLEVBQTVCO0FBQUEsR0FBRCxDQVBiO0FBQUEsTUFDU2tCLGFBRFQsZUFDRW5CLEtBREY7QUFBQSxNQUVXb0Isa0JBRlgsZUFFRWhCLE9BRkY7QUFBQSxNQUdZaUIsb0JBSFosZUFHRWYsUUFIRjtBQUFBLE1BSXNC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O0FBQUE7QUFBQSxnQkFYSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F6REYsZUF1RUU7QUFBSyxpQkFBUyxFQUFFd0IsZ0JBQWhCO0FBQUEsZ0NBQ0U7QUFBTyxpQkFBTyxFQUFDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRTtBQUNFLGNBQUksRUFBQyxLQURQO0FBRUUsWUFBRSxFQUFDLEtBRkwsQ0FHRTtBQUhGO0FBSUUsZUFBSyxFQUFFcEIsSUFKVDtBQUtFLGdCQUFNLEVBQUVJLFFBTFY7QUFNRSxrQkFBUSxFQUFFRDtBQU5aO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkYsRUFVR0QsV0FBVyxpQkFDVjtBQUFHLG1CQUFTLEVBQUMsWUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFYSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F2RUYsZUFzRkUsOERBQUMsc0RBQUQ7QUFBUSxpQkFBUyxFQUFDLFFBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBdEZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTRGRDs7S0F2TVE3QjtBQXlNVCwrREFBZUEsZ0JBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kYXRhRmxvdy9jb21wYW55cmVnaXN0cmF0aW9uL0FkZENvbXBhbmllc0Zvcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0ICB7dXNlUmVmfSBmcm9tICdyZWFjdCdcclxuLy8gaW1wb3J0ICAnLi9BZGRDb21wYW5pZXMuY3NzJztcclxuLy8gaW1wb3J0IHsgSW50MzIgfSBmcm9tIFwiYnNvblwiO1xyXG5pbXBvcnQgVXNlcklucHV0IGZyb20gXCIuLi8uLi9ob29rcy91c2VyLWlucHV0c1wiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi8uLi91aS9idXR0b24vQnV0dG9uXCI7XHJcblxyXG5mdW5jdGlvbiBBZGRDb21wYW5pZXNGb3JtKHByb3BzKSB7XHJcbiAgY29uc3Qge1xyXG4gICAgdmFsdWU6IGNvbXBhbnluYW1lLFxyXG4gICAgaXNWYWxpZDogdmFsaWRjb21wbmFtZSxcclxuICAgIGhhc0Vycm9yOiBpblZhbGlkY29tcG5hbWUsXHJcbiAgICB2YWx1ZUNoYW5nZUhhbmRsZXI6IGNvbXBuYW1lQ2hhbmdlSGFuZGxlcixcclxuICAgIG9uZm9jdXNIYW5kbGVyOiBibHVyY29tcG5hbWUsXHJcbiAgICByZXNldDogcmVzZXRjb21wYW55bmFtZSxcclxuICB9ID0gVXNlcklucHV0KCh2YWx1ZSkgPT4gdmFsdWUudHJpbSgpICE9PSBcIlwiKTtcclxuXHJcbiAgY29uc3Qge1xyXG4gICAgdmFsdWU6IGxpbmVPZkJ1c2luZXNzLFxyXG4gICAgaXNWYWxpZDogVmFsaWRsaW5lT2ZCdXNpbmVzcyxcclxuICAgIGhhc0Vycm9yOiBpblZhbGlkbGluZU9mQnVzaW5lc3MsXHJcbiAgICB2YWx1ZUNoYW5nZUhhbmRsZXI6IGxpbmVPZkJ1c2luZXNzQ2hhbmdlSGFuZGxlcixcclxuICAgIG9uZm9jdXNIYW5kbGVyOiBibHVybGluZU9mQnVzaW5lc3MsXHJcbiAgICByZXNldDogcmVzZXRsaW5lT2ZCdXNpbmVzcyxcclxuICB9ID0gVXNlcklucHV0KCh2YWx1ZSkgPT4gdmFsdWUudHJpbSgpICE9PSBcIlwiKTtcclxuXHJcbiAgY29uc3Qge1xyXG4gICAgdmFsdWU6IGNvbnRhY3RwZXJzb24sXHJcbiAgICBpc1ZhbGlkOiB2YWxpZGNvbnRhY3RwZXJzb24sXHJcbiAgICBoYXNFcnJvcjogaW5WYWxpZGNvbnRhY3RwZXJzb24sXHJcbiAgICB2YWx1ZUNoYW5nZUhhbmRsZXI6IGNvbnRhY3RwZXJzb25DaGFuZ2VIYW5kbGVyLFxyXG4gICAgb25mb2N1c0hhbmRsZXI6IGJsdXJjb250YWN0cGVyc29uLFxyXG4gICAgcmVzZXQ6IHJlc2V0Y29udGFjdHBlcnNvbixcclxuICB9ID0gVXNlcklucHV0KCh2YWx1ZSkgPT4gdmFsdWUudHJpbSgpICE9PSBcIlwiKTtcclxuXHJcbiAgY29uc3Qge1xyXG4gICAgdmFsdWU6IHRlbGUsXHJcbiAgICBpc1ZhbGlkOiB2YWxpZHRlbGUsXHJcbiAgICBoYXNFcnJvcjogaW5WYWxpZHRlbGUsXHJcbiAgICB2YWx1ZUNoYW5nZUhhbmRsZXI6IHRlbGVDaGFuZ2VIYW5kbGVyLFxyXG4gICAgb25mb2N1c0hhbmRsZXI6IGJsdXJ0ZWxlLFxyXG4gICAgcmVzZXQ6IHJlc2V0dGVsZSxcclxuICB9ID0gVXNlcklucHV0KCh2YWx1ZSkgPT4gdmFsdWUudHJpbSgpICE9PSBcIlwiKTtcclxuXHJcbiAgY29uc3Qge1xyXG4gICAgdmFsdWU6IFRJTixcclxuICAgIGlzVmFsaWQ6IHZhbGlkdGluLFxyXG4gICAgaGFzRXJyb3I6IGluVmFsaWR0aW4sXHJcbiAgICB2YWx1ZUNoYW5nZUhhbmRsZXI6IHRpbkNoYW5nZUhhbmRsZXIsXHJcbiAgICBvbmZvY3VzSGFuZGxlcjogYmx1cnRpbixcclxuICAgIHJlc2V0OiByZXNldHRpbixcclxuICB9ID0gVXNlcklucHV0KCh2YWx1ZSkgPT4gdmFsdWUudHJpbSgpICE9PSBcIlwiKTtcclxuXHJcbiAgbGV0IGZvcm1WYWxpZGF0aW9uID0gZmFsc2U7XHJcbiAgaWYgKHZhbGlkY29tcG5hbWUgJiYgdmFsaWRjb250YWN0cGVyc29uICYmIHZhbGlkdGVsZSAmJiB2YWxpZHRpbikge1xyXG4gICAgZm9ybVZhbGlkYXRpb24gPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgLy8gY29uc3QgY29tcGFueW5hbWUgPSB1c2VSZWYoKTtcclxuICAvLyBjb25zdCBjb250YWN0cGVyc29uID0gdXNlUmVmKCk7XHJcbiAgLy8gY29uc3QgdGVsZXBob25lID0gdXNlUmVmKCk7XHJcbiAgLy8gY25cclxuXHJcbiAgY29uc3Qgc3VibWl0SGFuZGxlciA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBpZiAoIWZvcm1WYWxpZGF0aW9uKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZyhjb21wYW55bmFtZSxjb250YWN0cGVyc29uLHRlbGUpO1xyXG5cclxuICAgIGNvbnN0IGNvbXBhbnlEYXRhT2JqZWN0ID0ge1xyXG4gICAgICBjb21wYW55bmFtZSxcclxuICAgICAgY29udGFjdHBlcnNvbixcclxuICAgICAgdGVsZSxcclxuICAgICAgVElOLFxyXG4gICAgfTtcclxuXHJcbiAgICBwcm9wcy5vbkFkZGNvbXBhbmllc2Zvcm0oY29tcGFueURhdGFPYmplY3QpO1xyXG5cclxuICAgIHJlc2V0Y29tcGFueW5hbWUoXCJcIik7XHJcbiAgICByZXNldGNvbnRhY3RwZXJzb24oXCJcIik7XHJcbiAgICByZXNldHRlbGUoXCJcIik7XHJcbiAgICByZXNldHRpbihcIlwiKTtcclxuICAgIHJlc2V0bGluZU9mQnVzaW5lc3MoXCJcIik7XHJcblxyXG4gICAgLy8gY29uc3QgaXRlbXMgPSB7XHJcbiAgICAvLyAgIG5hbWU6IGNvbXBhbnluYW1lLmN1cnJlbnQudmFsdWUsXHJcbiAgICAvLyAgIGNwZXJzb246IGNvbnRhY3RwZXJzb24uY3VycmVudC52YWx1ZSxcclxuICAgIC8vICAgc25hbWU6IHRlbGVwaG9uZS5jdXJyZW50LnZhbHVlfVxyXG4gIH07XHJcblxyXG4gIC8vIGNvbnN0IGl0ZW1zID0ge1xyXG4gIC8vICAgbmFtZSA6Y29tcGFueW5hbWUuY3VycmVudC52YWx1ZSxcclxuICAvLyAgIGNwZXJzb246IGNvbnRhY3RwZXJzb24uY3VycmVudC52YWx1ZSxcclxuICAvLyAgIHNuYW1lIDp0ZWxlcGhvbmUuY3VycmVudC52YWx1ZVxyXG5cclxuICAvLyB9XHJcblxyXG4gIGNvbnN0IG5hbWVJbnB1dENsYXNzZXMgPSBpblZhbGlkY29tcG5hbWVcclxuICAgID8gXCJmb3JtLWNvbnRyb2wgaW52YWxpZFwiXHJcbiAgICA6IFwiZm9ybS1jb250cm9sIFwiO1xyXG5cclxuICBjb25zdCBjb250YWN0SW5wdXRDbGFzc2VzID0gaW5WYWxpZGNvbnRhY3RwZXJzb25cclxuICAgID8gXCJmb3JtLWNvbnRyb2wgaW52YWxpZFwiXHJcbiAgICA6IFwiZm9ybS1jb250cm9sIFwiO1xyXG5cclxuICBjb25zdCB0ZWxlSW5wdXRDbGFzc2VzID0gaW5WYWxpZHRlbGVcclxuICAgID8gXCJmb3JtLWNvbnRyb2wgaW52YWxpZFwiXHJcbiAgICA6IFwiZm9ybS1jb250cm9sIFwiO1xyXG5cclxuICBjb25zdCB0aW5JbnB1dENsYXNzZXMgPSBpblZhbGlkdGluID8gXCJmb3JtLWNvbnRyb2wgaW52YWxpZFwiIDogXCJmb3JtLWNvbnRyb2wgXCI7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9ybSBvblN1Ym1pdD17c3VibWl0SGFuZGxlcn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RpbklucHV0Q2xhc3Nlc30+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRpblwiPiBUSU4gSUQgPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgaWQ9XCJUSU5cIlxyXG4gICAgICAgICAgICAvLyByZWY9e3RlbGVwaG9uZX1cclxuICAgICAgICAgICAgdmFsdWU9e1RJTn1cclxuICAgICAgICAgICAgb25CbHVyPXtibHVydGlufVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17dGluQ2hhbmdlSGFuZGxlcn1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICB7aW5WYWxpZHRpbiAmJiAoXHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImVycm9yLXRleHRcIj5QbGVhc2UgZW50ZXIgYSB2YWxpZCBUSU4gSUQ8L3A+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtuYW1lSW5wdXRDbGFzc2VzfT5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY29tcG5hbWVcIj4gQ29tcGFueSBOYW1lIDwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBpZD1cImNvbXBuYW1lXCJcclxuICAgICAgICAgICAgLy8gcmVmPXtjb21wYW55bmFtZX1cclxuICAgICAgICAgICAgb25CbHVyPXtibHVyY29tcG5hbWV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtjb21wbmFtZUNoYW5nZUhhbmRsZXJ9XHJcbiAgICAgICAgICAgIHZhbHVlPXtjb21wYW55bmFtZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICB7aW5WYWxpZGNvbXBuYW1lICYmIChcclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZXJyb3ItdGV4dFwiPlBsZWFzZSBmaWxsIGluIGEgdmFsaWQgbmFtZTwvcD5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aW5JbnB1dENsYXNzZXN9PlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0aW5cIj4gTGluZSBvZiBCdXNpbmVzcyA8L2xhYmVsPlxyXG4gICAgICAgICAgPHNlbGVjdD5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPi0tIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTWVjaGFuaWNcIj5NZWNoYW5pYyA8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkhhbmR5TWFuXCI+SGFuZHlNYW4gPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJIb3VzZSBIZWxcIj5Ib3VzZSBIZWxwIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiSVQgU29sdXRpb25cIj5JVCBTb2x1dGlvbiA8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkFyY2hpdGVjdFwiPkFyY2hpdGVjdCA8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkdhcmRuZXJcIj5HYXJkbmVyIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiVHJhbnNwb3J0XCI+VHJhbnNwb3J0IDwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQ2xlYW5pbmdcIj5DbGVhbmluZyA8L29wdGlvbj5cclxuICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJsaW5lT2ZCdXNpbmVzc1wiXHJcbiAgICAgICAgICAgICAgLy8gcmVmPXt0ZWxlcGhvbmV9XHJcbiAgICAgICAgICAgICAgdmFsdWU9e2xpbmVPZkJ1c2luZXNzfVxyXG4gICAgICAgICAgICAgIG9uQmx1cj17Ymx1cmxpbmVPZkJ1c2luZXNzfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtsaW5lT2ZCdXNpbmVzc0NoYW5nZUhhbmRsZXJ9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB7aW5WYWxpZGxpbmVPZkJ1c2luZXNzICYmIChcclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZXJyb3ItdGV4dFwiPlBsZWFzZSBlbnRlciBhIHZhbGlkIFRJTiBJRDwvcD5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NvbnRhY3RJbnB1dENsYXNzZXN9PlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjb250cGVyc29uXCI+IENvbnRhY3QgUGVyc29uIDwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBpZD1cImNvbnRwZXJzb25cIlxyXG4gICAgICAgICAgICAvLyByZWY9e2NvbnRhY3RwZXJzb259XHJcbiAgICAgICAgICAgIHZhbHVlPXtjb250YWN0cGVyc29ufVxyXG4gICAgICAgICAgICBvbkJsdXI9e2JsdXJjb250YWN0cGVyc29ufVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17Y29udGFjdHBlcnNvbkNoYW5nZUhhbmRsZXJ9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAge2luVmFsaWRjb250YWN0cGVyc29uICYmIChcclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZXJyb3ItdGV4dFwiPlBsZWFzZSBlbnRlciBhIHZhbGlkIENvbnRhY3QgUGVyc29uPC9wPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGVsZUlucHV0Q2xhc3Nlc30+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRlbFwiPiBUZWxlcGhvbmUgPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGVsXCJcclxuICAgICAgICAgICAgaWQ9XCJ0ZWxcIlxyXG4gICAgICAgICAgICAvLyByZWY9e3RlbGVwaG9uZX1cclxuICAgICAgICAgICAgdmFsdWU9e3RlbGV9XHJcbiAgICAgICAgICAgIG9uQmx1cj17Ymx1cnRlbGV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0ZWxlQ2hhbmdlSGFuZGxlcn1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICB7aW5WYWxpZHRlbGUgJiYgKFxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJlcnJvci10ZXh0XCI+UGxlYXNlIGVudGVyIGEgdmFsaWQgUGhvbmUgbnVtYmVyPC9wPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b25cIj4gQWRkIENvbXBhbnk8L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Zvcm0+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRkQ29tcGFuaWVzRm9ybTtcclxuIl0sIm5hbWVzIjpbIlVzZXJJbnB1dCIsIkJ1dHRvbiIsIkFkZENvbXBhbmllc0Zvcm0iLCJwcm9wcyIsInZhbHVlIiwidHJpbSIsImNvbXBhbnluYW1lIiwidmFsaWRjb21wbmFtZSIsImlzVmFsaWQiLCJpblZhbGlkY29tcG5hbWUiLCJoYXNFcnJvciIsImNvbXBuYW1lQ2hhbmdlSGFuZGxlciIsInZhbHVlQ2hhbmdlSGFuZGxlciIsImJsdXJjb21wbmFtZSIsIm9uZm9jdXNIYW5kbGVyIiwicmVzZXRjb21wYW55bmFtZSIsInJlc2V0IiwibGluZU9mQnVzaW5lc3MiLCJWYWxpZGxpbmVPZkJ1c2luZXNzIiwiaW5WYWxpZGxpbmVPZkJ1c2luZXNzIiwibGluZU9mQnVzaW5lc3NDaGFuZ2VIYW5kbGVyIiwiYmx1cmxpbmVPZkJ1c2luZXNzIiwicmVzZXRsaW5lT2ZCdXNpbmVzcyIsImNvbnRhY3RwZXJzb24iLCJ2YWxpZGNvbnRhY3RwZXJzb24iLCJpblZhbGlkY29udGFjdHBlcnNvbiIsImNvbnRhY3RwZXJzb25DaGFuZ2VIYW5kbGVyIiwiYmx1cmNvbnRhY3RwZXJzb24iLCJyZXNldGNvbnRhY3RwZXJzb24iLCJ0ZWxlIiwidmFsaWR0ZWxlIiwiaW5WYWxpZHRlbGUiLCJ0ZWxlQ2hhbmdlSGFuZGxlciIsImJsdXJ0ZWxlIiwicmVzZXR0ZWxlIiwiVElOIiwidmFsaWR0aW4iLCJpblZhbGlkdGluIiwidGluQ2hhbmdlSGFuZGxlciIsImJsdXJ0aW4iLCJyZXNldHRpbiIsImZvcm1WYWxpZGF0aW9uIiwic3VibWl0SGFuZGxlciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjb21wYW55RGF0YU9iamVjdCIsIm9uQWRkY29tcGFuaWVzZm9ybSIsIm5hbWVJbnB1dENsYXNzZXMiLCJjb250YWN0SW5wdXRDbGFzc2VzIiwidGVsZUlucHV0Q2xhc3NlcyIsInRpbklucHV0Q2xhc3NlcyJdLCJzb3VyY2VSb290IjoiIn0=