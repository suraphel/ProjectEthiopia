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
          lineNumber: 122,
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
          lineNumber: 123,
          columnNumber: 11
        }, this), inValidtin && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
          className: "error-text",
          children: "Please enter a valid TIN ID"
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
        className: nameInputClasses,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("label", {
          htmlFor: "compname",
          children: " Company Name "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 136,
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
          lineNumber: 137,
          columnNumber: 11
        }, this), inValidcompname && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
          className: "error-text",
          children: "Please fill in a valid name"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: lineOfBusinessInputClasses,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("label", {
          htmlFor: "tin",
          children: " Line of Business "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 151,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("select", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
            value: "",
            children: "-- "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 153,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
            value: "Mechanic",
            children: "Mechanic "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 154,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
            value: "HandyMan",
            children: "HandyMan "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 155,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
            value: "House Hel",
            children: "House Help "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 156,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
            value: "IT Solution",
            children: "IT Solution "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 157,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
            value: "Architect",
            children: "Architect "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 158,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
            value: "Gardner",
            children: "Gardner "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 159,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
            value: "Transport",
            children: "Transport "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 160,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
            value: "Cleaning",
            children: "Cleaning "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 161,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
            value: "other",
            children: "Other ... "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 162,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 152,
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
          lineNumber: 165,
          columnNumber: 13
        }, this), inValidlineOfBusiness && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
          className: "error-text",
          children: "Specify Line of Business "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: contactInputClasses,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("label", {
          htmlFor: "contperson",
          children: " Contact Person "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 179,
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
          lineNumber: 180,
          columnNumber: 11
        }, this), inValidcontactperson && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
          className: "error-text",
          children: "Please enter a valid Contact Person"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 189,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: teleInputClasses,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("label", {
          htmlFor: "tel",
          children: " Telephone "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 193,
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
          lineNumber: 194,
          columnNumber: 11
        }, this), inValidtele && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
          className: "error-text",
          children: "Please enter a valid Phone number"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 203,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_ui_button_Button__WEBPACK_IMPORTED_MODULE_1__.default, {
        className: "button",
        children: " Add Company"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 119,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvVXBsb2FkaW5nQ29tcGFuaWVzVG9EYi45ZTcxYTA3NzY3NGU5ZWMxMDUzYS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxTQUFTRSxnQkFBVCxDQUEwQkMsS0FBMUIsRUFBaUM7QUFDL0IsbUJBT0lILDJEQUFTLENBQUMsVUFBQ0ksS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBTixPQUFpQixFQUE1QjtBQUFBLEdBQUQsQ0FQYjtBQUFBLE1BQ1NDLFdBRFQsY0FDRUYsS0FERjtBQUFBLE1BRVdHLGFBRlgsY0FFRUMsT0FGRjtBQUFBLE1BR1lDLGVBSFosY0FHRUMsUUFIRjtBQUFBLE1BSXNCQyxxQkFKdEIsY0FJRUMsa0JBSkY7QUFBQSxNQUtrQkMsWUFMbEIsY0FLRUMsY0FMRjtBQUFBLE1BTVNDLGdCQU5ULGNBTUVDLEtBTkY7O0FBU0Esb0JBT0loQiwyREFBUyxDQUFDLFVBQUNJLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLElBQU4sT0FBaUIsRUFBNUI7QUFBQSxHQUFELENBUGI7QUFBQSxNQUNTWSxjQURULGVBQ0ViLEtBREY7QUFBQSxNQUVXYyxtQkFGWCxlQUVFVixPQUZGO0FBQUEsTUFHWVcscUJBSFosZUFHRVQsUUFIRjtBQUFBLE1BSXNCVSwyQkFKdEIsZUFJRVIsa0JBSkY7QUFBQSxNQUtrQlMsa0JBTGxCLGVBS0VQLGNBTEY7QUFBQSxNQU1TUSxtQkFOVCxlQU1FTixLQU5GOztBQVNBLG9CQU9JaEIsMkRBQVMsQ0FBQyxVQUFDSSxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFOLE9BQWlCLEVBQTVCO0FBQUEsR0FBRCxDQVBiO0FBQUEsTUFDU2tCLGFBRFQsZUFDRW5CLEtBREY7QUFBQSxNQUVXb0Isa0JBRlgsZUFFRWhCLE9BRkY7QUFBQSxNQUdZaUIsb0JBSFosZUFHRWYsUUFIRjtBQUFBLE1BSXNC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RUFBRUksaUJBTFY7QUFNRSxrQkFBUSxFQUFFRDtBQU5aO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkYsRUFVR0Qsb0JBQW9CLGlCQUNuQjtBQUFHLG1CQUFTLEVBQUMsWUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFYSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0ExREYsZUF3RUU7QUFBSyxpQkFBUyxFQUFFd0IsZ0JBQWhCO0FBQUEsZ0NBQ0U7QUFBTyxpQkFBTyxFQUFDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRTtBQUNFLGNBQUksRUFBQyxLQURQO0FBRUUsWUFBRSxFQUFDLEtBRkwsQ0FHRTtBQUhGO0FBSUUsZUFBSyxFQUFFcEIsSUFKVDtBQUtFLGdCQUFNLEVBQUVJLFFBTFY7QUFNRSxrQkFBUSxFQUFFRDtBQU5aO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkYsRUFVR0QsV0FBVyxpQkFDVjtBQUFHLG1CQUFTLEVBQUMsWUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFYSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F4RUYsZUF1RkUsOERBQUMsc0RBQUQ7QUFBUSxpQkFBUyxFQUFDLFFBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBdkZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTZGRDs7S0E1TVE3QjtBQThNVCwrREFBZUEsZ0JBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kYXRhRmxvdy9jb21wYW55cmVnaXN0cmF0aW9uL0FkZENvbXBhbmllc0Zvcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0ICB7dXNlUmVmfSBmcm9tICdyZWFjdCdcclxuLy8gaW1wb3J0ICAnLi9BZGRDb21wYW5pZXMuY3NzJztcclxuLy8gaW1wb3J0IHsgSW50MzIgfSBmcm9tIFwiYnNvblwiO1xyXG5pbXBvcnQgVXNlcklucHV0IGZyb20gXCIuLi8uLi9ob29rcy91c2VyLWlucHV0c1wiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi8uLi91aS9idXR0b24vQnV0dG9uXCI7XHJcblxyXG5mdW5jdGlvbiBBZGRDb21wYW5pZXNGb3JtKHByb3BzKSB7XHJcbiAgY29uc3Qge1xyXG4gICAgdmFsdWU6IGNvbXBhbnluYW1lLFxyXG4gICAgaXNWYWxpZDogdmFsaWRjb21wbmFtZSxcclxuICAgIGhhc0Vycm9yOiBpblZhbGlkY29tcG5hbWUsXHJcbiAgICB2YWx1ZUNoYW5nZUhhbmRsZXI6IGNvbXBuYW1lQ2hhbmdlSGFuZGxlcixcclxuICAgIG9uZm9jdXNIYW5kbGVyOiBibHVyY29tcG5hbWUsXHJcbiAgICByZXNldDogcmVzZXRjb21wYW55bmFtZSxcclxuICB9ID0gVXNlcklucHV0KCh2YWx1ZSkgPT4gdmFsdWUudHJpbSgpICE9PSBcIlwiKTtcclxuXHJcbiAgY29uc3Qge1xyXG4gICAgdmFsdWU6IGxpbmVPZkJ1c2luZXNzLFxyXG4gICAgaXNWYWxpZDogVmFsaWRsaW5lT2ZCdXNpbmVzcyxcclxuICAgIGhhc0Vycm9yOiBpblZhbGlkbGluZU9mQnVzaW5lc3MsXHJcbiAgICB2YWx1ZUNoYW5nZUhhbmRsZXI6IGxpbmVPZkJ1c2luZXNzQ2hhbmdlSGFuZGxlcixcclxuICAgIG9uZm9jdXNIYW5kbGVyOiBibHVybGluZU9mQnVzaW5lc3MsXHJcbiAgICByZXNldDogcmVzZXRsaW5lT2ZCdXNpbmVzcyxcclxuICB9ID0gVXNlcklucHV0KCh2YWx1ZSkgPT4gdmFsdWUudHJpbSgpICE9PSBcIlwiKTtcclxuXHJcbiAgY29uc3Qge1xyXG4gICAgdmFsdWU6IGNvbnRhY3RwZXJzb24sXHJcbiAgICBpc1ZhbGlkOiB2YWxpZGNvbnRhY3RwZXJzb24sXHJcbiAgICBoYXNFcnJvcjogaW5WYWxpZGNvbnRhY3RwZXJzb24sXHJcbiAgICB2YWx1ZUNoYW5nZUhhbmRsZXI6IGNvbnRhY3RwZXJzb25DaGFuZ2VIYW5kbGVyLFxyXG4gICAgb25mb2N1c0hhbmRsZXI6IGJsdXJjb250YWN0cGVyc29uLFxyXG4gICAgcmVzZXQ6IHJlc2V0Y29udGFjdHBlcnNvbixcclxuICB9ID0gVXNlcklucHV0KCh2YWx1ZSkgPT4gdmFsdWUudHJpbSgpICE9PSBcIlwiKTtcclxuXHJcbiAgY29uc3Qge1xyXG4gICAgdmFsdWU6IHRlbGUsXHJcbiAgICBpc1ZhbGlkOiB2YWxpZHRlbGUsXHJcbiAgICBoYXNFcnJvcjogaW5WYWxpZHRlbGUsXHJcbiAgICB2YWx1ZUNoYW5nZUhhbmRsZXI6IHRlbGVDaGFuZ2VIYW5kbGVyLFxyXG4gICAgb25mb2N1c0hhbmRsZXI6IGJsdXJ0ZWxlLFxyXG4gICAgcmVzZXQ6IHJlc2V0dGVsZSxcclxuICB9ID0gVXNlcklucHV0KCh2YWx1ZSkgPT4gdmFsdWUudHJpbSgpICE9PSBcIlwiKTtcclxuXHJcbiAgY29uc3Qge1xyXG4gICAgdmFsdWU6IFRJTixcclxuICAgIGlzVmFsaWQ6IHZhbGlkdGluLFxyXG4gICAgaGFzRXJyb3I6IGluVmFsaWR0aW4sXHJcbiAgICB2YWx1ZUNoYW5nZUhhbmRsZXI6IHRpbkNoYW5nZUhhbmRsZXIsXHJcbiAgICBvbmZvY3VzSGFuZGxlcjogYmx1cnRpbixcclxuICAgIHJlc2V0OiByZXNldHRpbixcclxuICB9ID0gVXNlcklucHV0KCh2YWx1ZSkgPT4gdmFsdWUudHJpbSgpICE9PSBcIlwiKTtcclxuXHJcbiAgbGV0IGZvcm1WYWxpZGF0aW9uID0gZmFsc2U7XHJcbiAgaWYgKHZhbGlkY29tcG5hbWUgJiYgdmFsaWRjb250YWN0cGVyc29uICYmIHZhbGlkdGVsZSAmJiB2YWxpZHRpbikge1xyXG4gICAgZm9ybVZhbGlkYXRpb24gPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgLy8gY29uc3QgY29tcGFueW5hbWUgPSB1c2VSZWYoKTtcclxuICAvLyBjb25zdCBjb250YWN0cGVyc29uID0gdXNlUmVmKCk7XHJcbiAgLy8gY29uc3QgdGVsZXBob25lID0gdXNlUmVmKCk7XHJcbiAgLy8gY25cclxuXHJcbiAgY29uc3Qgc3VibWl0SGFuZGxlciA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBpZiAoIWZvcm1WYWxpZGF0aW9uKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZyhjb21wYW55bmFtZSxjb250YWN0cGVyc29uLHRlbGUpO1xyXG5cclxuICAgIGNvbnN0IGNvbXBhbnlEYXRhT2JqZWN0ID0ge1xyXG4gICAgICBjb21wYW55bmFtZSxcclxuICAgICAgY29udGFjdHBlcnNvbixcclxuICAgICAgdGVsZSxcclxuICAgICAgVElOLFxyXG4gICAgfTtcclxuXHJcbiAgICBwcm9wcy5vbkFkZGNvbXBhbmllc2Zvcm0oY29tcGFueURhdGFPYmplY3QpO1xyXG5cclxuICAgIHJlc2V0Y29tcGFueW5hbWUoXCJcIik7XHJcbiAgICByZXNldGNvbnRhY3RwZXJzb24oXCJcIik7XHJcbiAgICByZXNldHRlbGUoXCJcIik7XHJcbiAgICByZXNldHRpbihcIlwiKTtcclxuICAgIHJlc2V0bGluZU9mQnVzaW5lc3MoXCJcIik7XHJcblxyXG4gICAgLy8gY29uc3QgaXRlbXMgPSB7XHJcbiAgICAvLyAgIG5hbWU6IGNvbXBhbnluYW1lLmN1cnJlbnQudmFsdWUsXHJcbiAgICAvLyAgIGNwZXJzb246IGNvbnRhY3RwZXJzb24uY3VycmVudC52YWx1ZSxcclxuICAgIC8vICAgc25hbWU6IHRlbGVwaG9uZS5jdXJyZW50LnZhbHVlfVxyXG4gIH07XHJcblxyXG4gIC8vIGNvbnN0IGl0ZW1zID0ge1xyXG4gIC8vICAgbmFtZSA6Y29tcGFueW5hbWUuY3VycmVudC52YWx1ZSxcclxuICAvLyAgIGNwZXJzb246IGNvbnRhY3RwZXJzb24uY3VycmVudC52YWx1ZSxcclxuICAvLyAgIHNuYW1lIDp0ZWxlcGhvbmUuY3VycmVudC52YWx1ZVxyXG5cclxuICAvLyB9XHJcblxyXG4gIGNvbnN0IG5hbWVJbnB1dENsYXNzZXMgPSBpblZhbGlkY29tcG5hbWVcclxuICAgID8gXCJmb3JtLWNvbnRyb2wgaW52YWxpZFwiXHJcbiAgICA6IFwiZm9ybS1jb250cm9sIFwiO1xyXG5cclxuICBjb25zdCBjb250YWN0SW5wdXRDbGFzc2VzID0gaW5WYWxpZGNvbnRhY3RwZXJzb25cclxuICAgID8gXCJmb3JtLWNvbnRyb2wgaW52YWxpZFwiXHJcbiAgICA6IFwiZm9ybS1jb250cm9sIFwiO1xyXG5cclxuICBjb25zdCB0ZWxlSW5wdXRDbGFzc2VzID0gaW5WYWxpZHRlbGVcclxuICAgID8gXCJmb3JtLWNvbnRyb2wgaW52YWxpZFwiXHJcbiAgICA6IFwiZm9ybS1jb250cm9sIFwiO1xyXG5cclxuICBjb25zdCB0aW5JbnB1dENsYXNzZXMgPSBpblZhbGlkdGluID8gXCJmb3JtLWNvbnRyb2wgaW52YWxpZFwiIDogXCJmb3JtLWNvbnRyb2wgXCI7XHJcblxyXG4gIGNvbnN0IGxpbmVPZkJ1c2luZXNzQ2xhc3NlcyA9IGluVmFsaWRsaW5lT2ZCdXNpbmVzc1xyXG4gICAgPyBcImZvcm0tY29udHJvbCBpbnZhbGlkXCJcclxuICAgIDogXCJmb3JtLWNvbnRyb2xcIjtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxmb3JtIG9uU3VibWl0PXtzdWJtaXRIYW5kbGVyfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcHBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGluSW5wdXRDbGFzc2VzfT5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidGluXCI+IFRJTiBJRCA8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICBpZD1cIlRJTlwiXHJcbiAgICAgICAgICAgIC8vIHJlZj17dGVsZXBob25lfVxyXG4gICAgICAgICAgICB2YWx1ZT17VElOfVxyXG4gICAgICAgICAgICBvbkJsdXI9e2JsdXJ0aW59XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aW5DaGFuZ2VIYW5kbGVyfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIHtpblZhbGlkdGluICYmIChcclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZXJyb3ItdGV4dFwiPlBsZWFzZSBlbnRlciBhIHZhbGlkIFRJTiBJRDwvcD5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e25hbWVJbnB1dENsYXNzZXN9PlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjb21wbmFtZVwiPiBDb21wYW55IE5hbWUgPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIGlkPVwiY29tcG5hbWVcIlxyXG4gICAgICAgICAgICAvLyByZWY9e2NvbXBhbnluYW1lfVxyXG4gICAgICAgICAgICBvbkJsdXI9e2JsdXJjb21wbmFtZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2NvbXBuYW1lQ2hhbmdlSGFuZGxlcn1cclxuICAgICAgICAgICAgdmFsdWU9e2NvbXBhbnluYW1lfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIHtpblZhbGlkY29tcG5hbWUgJiYgKFxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJlcnJvci10ZXh0XCI+UGxlYXNlIGZpbGwgaW4gYSB2YWxpZCBuYW1lPC9wPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2xpbmVPZkJ1c2luZXNzSW5wdXRDbGFzc2VzfT5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidGluXCI+IExpbmUgb2YgQnVzaW5lc3MgPC9sYWJlbD5cclxuICAgICAgICAgIDxzZWxlY3Q+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj4tLSA8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk1lY2hhbmljXCI+TWVjaGFuaWMgPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJIYW5keU1hblwiPkhhbmR5TWFuIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiSG91c2UgSGVsXCI+SG91c2UgSGVscCA8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIklUIFNvbHV0aW9uXCI+SVQgU29sdXRpb24gPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJBcmNoaXRlY3RcIj5BcmNoaXRlY3QgPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJHYXJkbmVyXCI+R2FyZG5lciA8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlRyYW5zcG9ydFwiPlRyYW5zcG9ydCA8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkNsZWFuaW5nXCI+Q2xlYW5pbmcgPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJvdGhlclwiPk90aGVyIC4uLiA8L29wdGlvbj5cclxuICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJsaW5lT2ZCdXNpbmVzc1wiXHJcbiAgICAgICAgICAgICAgLy8gcmVmPXt0ZWxlcGhvbmV9XHJcbiAgICAgICAgICAgICAgdmFsdWU9e2xpbmVPZkJ1c2luZXNzfVxyXG4gICAgICAgICAgICAgIG9uQmx1cj17Ymx1cmxpbmVPZkJ1c2luZXNzfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtsaW5lT2ZCdXNpbmVzc0NoYW5nZUhhbmRsZXJ9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB7aW5WYWxpZGxpbmVPZkJ1c2luZXNzICYmIChcclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZXJyb3ItdGV4dFwiPlNwZWNpZnkgTGluZSBvZiBCdXNpbmVzcyA8L3A+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb250YWN0SW5wdXRDbGFzc2VzfT5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY29udHBlcnNvblwiPiBDb250YWN0IFBlcnNvbiA8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgaWQ9XCJjb250cGVyc29uXCJcclxuICAgICAgICAgICAgLy8gcmVmPXtjb250YWN0cGVyc29ufVxyXG4gICAgICAgICAgICB2YWx1ZT17Y29udGFjdHBlcnNvbn1cclxuICAgICAgICAgICAgb25CbHVyPXtibHVyY29udGFjdHBlcnNvbn1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2NvbnRhY3RwZXJzb25DaGFuZ2VIYW5kbGVyfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIHtpblZhbGlkY29udGFjdHBlcnNvbiAmJiAoXHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImVycm9yLXRleHRcIj5QbGVhc2UgZW50ZXIgYSB2YWxpZCBDb250YWN0IFBlcnNvbjwvcD5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RlbGVJbnB1dENsYXNzZXN9PlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0ZWxcIj4gVGVsZXBob25lIDwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRlbFwiXHJcbiAgICAgICAgICAgIGlkPVwidGVsXCJcclxuICAgICAgICAgICAgLy8gcmVmPXt0ZWxlcGhvbmV9XHJcbiAgICAgICAgICAgIHZhbHVlPXt0ZWxlfVxyXG4gICAgICAgICAgICBvbkJsdXI9e2JsdXJ0ZWxlfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17dGVsZUNoYW5nZUhhbmRsZXJ9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAge2luVmFsaWR0ZWxlICYmIChcclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZXJyb3ItdGV4dFwiPlBsZWFzZSBlbnRlciBhIHZhbGlkIFBob25lIG51bWJlcjwvcD5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uXCI+IEFkZCBDb21wYW55PC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9mb3JtPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkZENvbXBhbmllc0Zvcm07XHJcbiJdLCJuYW1lcyI6WyJVc2VySW5wdXQiLCJCdXR0b24iLCJBZGRDb21wYW5pZXNGb3JtIiwicHJvcHMiLCJ2YWx1ZSIsInRyaW0iLCJjb21wYW55bmFtZSIsInZhbGlkY29tcG5hbWUiLCJpc1ZhbGlkIiwiaW5WYWxpZGNvbXBuYW1lIiwiaGFzRXJyb3IiLCJjb21wbmFtZUNoYW5nZUhhbmRsZXIiLCJ2YWx1ZUNoYW5nZUhhbmRsZXIiLCJibHVyY29tcG5hbWUiLCJvbmZvY3VzSGFuZGxlciIsInJlc2V0Y29tcGFueW5hbWUiLCJyZXNldCIsImxpbmVPZkJ1c2luZXNzIiwiVmFsaWRsaW5lT2ZCdXNpbmVzcyIsImluVmFsaWRsaW5lT2ZCdXNpbmVzcyIsImxpbmVPZkJ1c2luZXNzQ2hhbmdlSGFuZGxlciIsImJsdXJsaW5lT2ZCdXNpbmVzcyIsInJlc2V0bGluZU9mQnVzaW5lc3MiLCJjb250YWN0cGVyc29uIiwidmFsaWRjb250YWN0cGVyc29uIiwiaW5WYWxpZGNvbnRhY3RwZXJzb24iLCJjb250YWN0cGVyc29uQ2hhbmdlSGFuZGxlciIsImJsdXJjb250YWN0cGVyc29uIiwicmVzZXRjb250YWN0cGVyc29uIiwidGVsZSIsInZhbGlkdGVsZSIsImluVmFsaWR0ZWxlIiwidGVsZUNoYW5nZUhhbmRsZXIiLCJibHVydGVsZSIsInJlc2V0dGVsZSIsIlRJTiIsInZhbGlkdGluIiwiaW5WYWxpZHRpbiIsInRpbkNoYW5nZUhhbmRsZXIiLCJibHVydGluIiwicmVzZXR0aW4iLCJmb3JtVmFsaWRhdGlvbiIsInN1Ym1pdEhhbmRsZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY29tcGFueURhdGFPYmplY3QiLCJvbkFkZGNvbXBhbmllc2Zvcm0iLCJuYW1lSW5wdXRDbGFzc2VzIiwiY29udGFjdElucHV0Q2xhc3NlcyIsInRlbGVJbnB1dENsYXNzZXMiLCJ0aW5JbnB1dENsYXNzZXMiLCJsaW5lT2ZCdXNpbmVzc0NsYXNzZXMiLCJsaW5lT2ZCdXNpbmVzc0lucHV0Q2xhc3NlcyJdLCJzb3VyY2VSb290IjoiIn0=