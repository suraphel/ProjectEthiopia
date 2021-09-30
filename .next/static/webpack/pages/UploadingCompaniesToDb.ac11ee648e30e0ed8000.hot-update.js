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
    console.log("hre is th etext " + companyDataObject.lineOfBusiness);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvVXBsb2FkaW5nQ29tcGFuaWVzVG9EYi5hYzExZWU2NDhlMzBlMGVkODAwMC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxTQUFTRSxnQkFBVCxDQUEwQkMsS0FBMUIsRUFBaUM7QUFDL0IsbUJBT0lILDJEQUFTLENBQUMsVUFBQ0ksS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBTixPQUFpQixFQUE1QjtBQUFBLEdBQUQsQ0FQYjtBQUFBLE1BQ1NDLFdBRFQsY0FDRUYsS0FERjtBQUFBLE1BRVdHLGFBRlgsY0FFRUMsT0FGRjtBQUFBLE1BR1lDLGVBSFosY0FHRUMsUUFIRjtBQUFBLE1BSXNCQyxxQkFKdEIsY0FJRUMsa0JBSkY7QUFBQSxNQUtrQkMsWUFMbEIsY0FLRUMsY0FMRjtBQUFBLE1BTVNDLGdCQU5ULGNBTUVDLEtBTkY7O0FBU0Esb0JBT0loQiwyREFBUyxDQUFDLFVBQUNJLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLElBQU4sT0FBaUIsRUFBNUI7QUFBQSxHQUFELENBUGI7QUFBQSxNQUNTWSxjQURULGVBQ0ViLEtBREY7QUFBQSxNQUVXYyxtQkFGWCxlQUVFVixPQUZGO0FBQUEsTUFHWVcscUJBSFosZUFHRVQsUUFIRjtBQUFBLE1BSXNCVSwyQkFKdEIsZUFJRVIsa0JBSkY7QUFBQSxNQUtrQlMsa0JBTGxCLGVBS0VQLGNBTEY7QUFBQSxNQU1TUSxtQkFOVCxlQU1FTixLQU5GOztBQVNBLG9CQU9JaEIsMkRBQVMsQ0FBQyxVQUFDSSxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFOLE9BQWlCLEVBQTVCO0FBQUEsR0FBRCxDQVBiO0FBQUEsTUFDU2tCLGFBRFQsZUFDRW5CLEtBREY7QUFBQSxNQUVXb0Isa0JBRlgsZUFFRWhCLE9BRkY7QUFBQSxNQUdZaUIsb0JBSFosZUFHRWYsUUFIRjtBQUFBLE1BSXNC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O0FBQUE7QUFBQTtBQUFBO0FBQUEsY0EzREYsZUF5RUU7QUFBSyxpQkFBUyxFQUFFMEIsZ0JBQWhCO0FBQUEsZ0NBQ0U7QUFBTyxpQkFBTyxFQUFDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRTtBQUNFLGNBQUksRUFBQyxLQURQO0FBRUUsWUFBRSxFQUFDLEtBRkwsQ0FHRTtBQUhGO0FBSUUsZUFBSyxFQUFFdEIsSUFKVDtBQUtFLGdCQUFNLEVBQUVJLFFBTFY7QUFNRSxrQkFBUSxFQUFFRDtBQU5aO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkYsRUFVR0QsV0FBVyxpQkFDVjtBQUFHLG1CQUFTLEVBQUMsWUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFYSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F6RUYsZUF3RkUsOERBQUMsc0RBQUQ7QUFBUSxpQkFBUyxFQUFDLFFBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBeEZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQThGRDs7S0F0TlE3QjtBQXdOVCwrREFBZUEsZ0JBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kYXRhRmxvdy9jb21wYW55cmVnaXN0cmF0aW9uL0FkZENvbXBhbmllc0Zvcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0ICB7dXNlUmVmfSBmcm9tICdyZWFjdCdcclxuLy8gaW1wb3J0ICAnLi9BZGRDb21wYW5pZXMuY3NzJztcclxuLy8gaW1wb3J0IHsgSW50MzIgfSBmcm9tIFwiYnNvblwiO1xyXG5pbXBvcnQgVXNlcklucHV0IGZyb20gXCIuLi8uLi9ob29rcy91c2VyLWlucHV0c1wiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi8uLi91aS9idXR0b24vQnV0dG9uXCI7XHJcblxyXG5mdW5jdGlvbiBBZGRDb21wYW5pZXNGb3JtKHByb3BzKSB7XHJcbiAgY29uc3Qge1xyXG4gICAgdmFsdWU6IGNvbXBhbnluYW1lLFxyXG4gICAgaXNWYWxpZDogdmFsaWRjb21wbmFtZSxcclxuICAgIGhhc0Vycm9yOiBpblZhbGlkY29tcG5hbWUsXHJcbiAgICB2YWx1ZUNoYW5nZUhhbmRsZXI6IGNvbXBuYW1lQ2hhbmdlSGFuZGxlcixcclxuICAgIG9uZm9jdXNIYW5kbGVyOiBibHVyY29tcG5hbWUsXHJcbiAgICByZXNldDogcmVzZXRjb21wYW55bmFtZSxcclxuICB9ID0gVXNlcklucHV0KCh2YWx1ZSkgPT4gdmFsdWUudHJpbSgpICE9PSBcIlwiKTtcclxuXHJcbiAgY29uc3Qge1xyXG4gICAgdmFsdWU6IGxpbmVPZkJ1c2luZXNzLFxyXG4gICAgaXNWYWxpZDogVmFsaWRsaW5lT2ZCdXNpbmVzcyxcclxuICAgIGhhc0Vycm9yOiBpblZhbGlkbGluZU9mQnVzaW5lc3MsXHJcbiAgICB2YWx1ZUNoYW5nZUhhbmRsZXI6IGxpbmVPZkJ1c2luZXNzQ2hhbmdlSGFuZGxlcixcclxuICAgIG9uZm9jdXNIYW5kbGVyOiBibHVybGluZU9mQnVzaW5lc3MsXHJcbiAgICByZXNldDogcmVzZXRsaW5lT2ZCdXNpbmVzcyxcclxuICB9ID0gVXNlcklucHV0KCh2YWx1ZSkgPT4gdmFsdWUudHJpbSgpICE9PSBcIlwiKTtcclxuXHJcbiAgY29uc3Qge1xyXG4gICAgdmFsdWU6IGNvbnRhY3RwZXJzb24sXHJcbiAgICBpc1ZhbGlkOiB2YWxpZGNvbnRhY3RwZXJzb24sXHJcbiAgICBoYXNFcnJvcjogaW5WYWxpZGNvbnRhY3RwZXJzb24sXHJcbiAgICB2YWx1ZUNoYW5nZUhhbmRsZXI6IGNvbnRhY3RwZXJzb25DaGFuZ2VIYW5kbGVyLFxyXG4gICAgb25mb2N1c0hhbmRsZXI6IGJsdXJjb250YWN0cGVyc29uLFxyXG4gICAgcmVzZXQ6IHJlc2V0Y29udGFjdHBlcnNvbixcclxuICB9ID0gVXNlcklucHV0KCh2YWx1ZSkgPT4gdmFsdWUudHJpbSgpICE9PSBcIlwiKTtcclxuXHJcbiAgY29uc3Qge1xyXG4gICAgdmFsdWU6IHRlbGUsXHJcbiAgICBpc1ZhbGlkOiB2YWxpZHRlbGUsXHJcbiAgICBoYXNFcnJvcjogaW5WYWxpZHRlbGUsXHJcbiAgICB2YWx1ZUNoYW5nZUhhbmRsZXI6IHRlbGVDaGFuZ2VIYW5kbGVyLFxyXG4gICAgb25mb2N1c0hhbmRsZXI6IGJsdXJ0ZWxlLFxyXG4gICAgcmVzZXQ6IHJlc2V0dGVsZSxcclxuICB9ID0gVXNlcklucHV0KCh2YWx1ZSkgPT4gdmFsdWUudHJpbSgpICE9PSBcIlwiKTtcclxuXHJcbiAgY29uc3Qge1xyXG4gICAgdmFsdWU6IFRJTixcclxuICAgIGlzVmFsaWQ6IHZhbGlkdGluLFxyXG4gICAgaGFzRXJyb3I6IGluVmFsaWR0aW4sXHJcbiAgICB2YWx1ZUNoYW5nZUhhbmRsZXI6IHRpbkNoYW5nZUhhbmRsZXIsXHJcbiAgICBvbmZvY3VzSGFuZGxlcjogYmx1cnRpbixcclxuICAgIHJlc2V0OiByZXNldHRpbixcclxuICB9ID0gVXNlcklucHV0KCh2YWx1ZSkgPT4gdmFsdWUudHJpbSgpICE9PSBcIlwiKTtcclxuXHJcbiAgbGV0IGZvcm1WYWxpZGF0aW9uID0gZmFsc2U7XHJcbiAgaWYgKFxyXG4gICAgdmFsaWRjb21wbmFtZSAmJlxyXG4gICAgdmFsaWRjb250YWN0cGVyc29uICYmXHJcbiAgICB2YWxpZHRlbGUgJiZcclxuICAgIHZhbGlkdGluXHJcbiAgICAvLyBsaW5lT2ZCdXNpbmVzc1xyXG4gICkge1xyXG4gICAgZm9ybVZhbGlkYXRpb24gPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgLy8gY29uc3QgY29tcGFueW5hbWUgPSB1c2VSZWYoKTtcclxuICAvLyBjb25zdCBjb250YWN0cGVyc29uID0gdXNlUmVmKCk7XHJcbiAgLy8gY29uc3QgdGVsZXBob25lID0gdXNlUmVmKCk7XHJcbiAgLy8gY25cclxuXHJcbiAgY29uc3Qgc3VibWl0SGFuZGxlciA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBpZiAoIWZvcm1WYWxpZGF0aW9uKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZyhjb21wYW55bmFtZSxjb250YWN0cGVyc29uLHRlbGUpO1xyXG5cclxuICAgIGNvbnN0IGNvbXBhbnlEYXRhT2JqZWN0ID0ge1xyXG4gICAgICBjb21wYW55bmFtZSxcclxuICAgICAgY29udGFjdHBlcnNvbixcclxuICAgICAgdGVsZSxcclxuICAgICAgVElOLFxyXG4gICAgICBsaW5lT2ZCdXNpbmVzcyxcclxuICAgIH07XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJocmUgaXMgdGggZXRleHQgXCIgKyBjb21wYW55RGF0YU9iamVjdC5saW5lT2ZCdXNpbmVzcyk7XHJcblxyXG4gICAgcHJvcHMub25BZGRjb21wYW5pZXNmb3JtKGNvbXBhbnlEYXRhT2JqZWN0KTtcclxuXHJcbiAgICByZXNldGNvbXBhbnluYW1lKFwiXCIpO1xyXG4gICAgcmVzZXRjb250YWN0cGVyc29uKFwiXCIpO1xyXG4gICAgcmVzZXR0ZWxlKFwiXCIpO1xyXG4gICAgcmVzZXR0aW4oXCJcIik7XHJcbiAgICByZXNldGxpbmVPZkJ1c2luZXNzKFwiXCIpO1xyXG5cclxuICAgIC8vIGNvbnN0IGl0ZW1zID0ge1xyXG4gICAgLy8gICBuYW1lOiBjb21wYW55bmFtZS5jdXJyZW50LnZhbHVlLFxyXG4gICAgLy8gICBjcGVyc29uOiBjb250YWN0cGVyc29uLmN1cnJlbnQudmFsdWUsXHJcbiAgICAvLyAgIHNuYW1lOiB0ZWxlcGhvbmUuY3VycmVudC52YWx1ZX1cclxuICB9O1xyXG5cclxuICAvLyBjb25zdCBpdGVtcyA9IHtcclxuICAvLyAgIG5hbWUgOmNvbXBhbnluYW1lLmN1cnJlbnQudmFsdWUsXHJcbiAgLy8gICBjcGVyc29uOiBjb250YWN0cGVyc29uLmN1cnJlbnQudmFsdWUsXHJcbiAgLy8gICBzbmFtZSA6dGVsZXBob25lLmN1cnJlbnQudmFsdWVcclxuXHJcbiAgLy8gfVxyXG5cclxuICBjb25zdCBuYW1lSW5wdXRDbGFzc2VzID0gaW5WYWxpZGNvbXBuYW1lXHJcbiAgICA/IFwiZm9ybS1jb250cm9sIGludmFsaWRcIlxyXG4gICAgOiBcImZvcm0tY29udHJvbCBcIjtcclxuXHJcbiAgY29uc3QgY29udGFjdElucHV0Q2xhc3NlcyA9IGluVmFsaWRjb250YWN0cGVyc29uXHJcbiAgICA/IFwiZm9ybS1jb250cm9sIGludmFsaWRcIlxyXG4gICAgOiBcImZvcm0tY29udHJvbCBcIjtcclxuXHJcbiAgY29uc3QgdGVsZUlucHV0Q2xhc3NlcyA9IGluVmFsaWR0ZWxlXHJcbiAgICA/IFwiZm9ybS1jb250cm9sIGludmFsaWRcIlxyXG4gICAgOiBcImZvcm0tY29udHJvbCBcIjtcclxuXHJcbiAgY29uc3QgdGluSW5wdXRDbGFzc2VzID0gaW5WYWxpZHRpbiA/IFwiZm9ybS1jb250cm9sIGludmFsaWRcIiA6IFwiZm9ybS1jb250cm9sIFwiO1xyXG5cclxuICBjb25zdCBsaW5lT2ZCdXNpbmVzc0NsYXNzZXMgPSBpblZhbGlkbGluZU9mQnVzaW5lc3NcclxuICAgID8gXCJmb3JtLWNvbnRyb2wgaW52YWxpZFwiXHJcbiAgICA6IFwiZm9ybS1jb250cm9sXCI7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9ybSBvblN1Ym1pdD17c3VibWl0SGFuZGxlcn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RpbklucHV0Q2xhc3Nlc30+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRpblwiPiBUSU4gSUQgPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgaWQ9XCJUSU5cIlxyXG4gICAgICAgICAgICAvLyByZWY9e3RlbGVwaG9uZX1cclxuICAgICAgICAgICAgdmFsdWU9e1RJTn1cclxuICAgICAgICAgICAgb25CbHVyPXtibHVydGlufVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17dGluQ2hhbmdlSGFuZGxlcn1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICB7aW5WYWxpZHRpbiAmJiAoXHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImVycm9yLXRleHRcIj5QbGVhc2UgZW50ZXIgYSB2YWxpZCBUSU4gSUQ8L3A+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtuYW1lSW5wdXRDbGFzc2VzfT5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY29tcG5hbWVcIj4gQ29tcGFueSBOYW1lIDwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBpZD1cImNvbXBuYW1lXCJcclxuICAgICAgICAgICAgLy8gcmVmPXtjb21wYW55bmFtZX1cclxuICAgICAgICAgICAgb25CbHVyPXtibHVyY29tcG5hbWV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtjb21wbmFtZUNoYW5nZUhhbmRsZXJ9XHJcbiAgICAgICAgICAgIHZhbHVlPXtjb21wYW55bmFtZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICB7aW5WYWxpZGNvbXBuYW1lICYmIChcclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZXJyb3ItdGV4dFwiPlBsZWFzZSBmaWxsIGluIGEgdmFsaWQgbmFtZTwvcD5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtsaW5lT2ZCdXNpbmVzc0NsYXNzZXN9PlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJsaW5lT2ZCdXNpbmVzc1wiPiBMaW5lIG9mIEJ1c2luZXNzIDwvbGFiZWw+XHJcbiAgICAgICAgICA8c2VsZWN0PlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+PC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJNZWNoYW5pY1wiPk1lY2hhbmljIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiSGFuZHlNYW5cIj5IYW5keU1hbiA8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkhvdXNlIEhlbFwiPkhvdXNlIEhlbHAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJJVCBTb2x1dGlvblwiPklUIFNvbHV0aW9uIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQXJjaGl0ZWN0XCI+QXJjaGl0ZWN0IDwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiR2FyZG5lclwiPkdhcmRuZXIgPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJUcmFuc3BvcnRcIj5UcmFuc3BvcnQgPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJDbGVhbmluZ1wiPkNsZWFuaW5nIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwib3RoZXJcIj5PdGhlciAuLi4gPC9vcHRpb24+XHJcbiAgICAgICAgICA8L3NlbGVjdD5cclxuXHJcbiAgICAgICAgICB7LyogLy8gKSB8fCAoXHJcbiAgICAgICAgICAgIC8vICAgPGlucHV0XHJcbiAgICAgICAgICAgIC8vICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIC8vICAgICBpZD1cImxpbmVPZkJ1c2luZXNzXCJcclxuICAgICAgICAgICAgLy8gICAgIC8vIHJlZj17dGVsZXBob25lfVxyXG4gICAgICAgICAgICAvLyAgICAgdmFsdWU9e2xpbmVPZkJ1c2luZXNzfVxyXG4gICAgICAgICAgICAvLyAgICAgb25CbHVyPXtibHVybGluZU9mQnVzaW5lc3N9XHJcbiAgICAgICAgICAgIC8vICAgICBvbkNoYW5nZT17bGluZU9mQnVzaW5lc3NDaGFuZ2VIYW5kbGVyfVxyXG4gICAgICAgICAgICAvLyAgIC8+IFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAvLyB7aW5WYWxpZGxpbmVPZkJ1c2luZXNzICYmIChcclxuICAgICAgICAgIC8vICAgPHAgY2xhc3NOYW1lPVwiZXJyb3ItdGV4dFwiPlNwZWNpZnkgTGluZSBvZiBCdXNpbmVzcyA8L3A+XHJcbiAgICAgICAgICAvLyApfSovfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb250YWN0SW5wdXRDbGFzc2VzfT5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY29udHBlcnNvblwiPiBDb250YWN0IFBlcnNvbiA8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgaWQ9XCJjb250cGVyc29uXCJcclxuICAgICAgICAgICAgLy8gcmVmPXtjb250YWN0cGVyc29ufVxyXG4gICAgICAgICAgICB2YWx1ZT17Y29udGFjdHBlcnNvbn1cclxuICAgICAgICAgICAgb25CbHVyPXtibHVyY29udGFjdHBlcnNvbn1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2NvbnRhY3RwZXJzb25DaGFuZ2VIYW5kbGVyfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIHtpblZhbGlkY29udGFjdHBlcnNvbiAmJiAoXHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImVycm9yLXRleHRcIj5QbGVhc2UgZW50ZXIgYSB2YWxpZCBDb250YWN0IFBlcnNvbjwvcD5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RlbGVJbnB1dENsYXNzZXN9PlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0ZWxcIj4gVGVsZXBob25lIDwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRlbFwiXHJcbiAgICAgICAgICAgIGlkPVwidGVsXCJcclxuICAgICAgICAgICAgLy8gcmVmPXt0ZWxlcGhvbmV9XHJcbiAgICAgICAgICAgIHZhbHVlPXt0ZWxlfVxyXG4gICAgICAgICAgICBvbkJsdXI9e2JsdXJ0ZWxlfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17dGVsZUNoYW5nZUhhbmRsZXJ9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAge2luVmFsaWR0ZWxlICYmIChcclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZXJyb3ItdGV4dFwiPlBsZWFzZSBlbnRlciBhIHZhbGlkIFBob25lIG51bWJlcjwvcD5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uXCI+IEFkZCBDb21wYW55PC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9mb3JtPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkZENvbXBhbmllc0Zvcm07XHJcbiJdLCJuYW1lcyI6WyJVc2VySW5wdXQiLCJCdXR0b24iLCJBZGRDb21wYW5pZXNGb3JtIiwicHJvcHMiLCJ2YWx1ZSIsInRyaW0iLCJjb21wYW55bmFtZSIsInZhbGlkY29tcG5hbWUiLCJpc1ZhbGlkIiwiaW5WYWxpZGNvbXBuYW1lIiwiaGFzRXJyb3IiLCJjb21wbmFtZUNoYW5nZUhhbmRsZXIiLCJ2YWx1ZUNoYW5nZUhhbmRsZXIiLCJibHVyY29tcG5hbWUiLCJvbmZvY3VzSGFuZGxlciIsInJlc2V0Y29tcGFueW5hbWUiLCJyZXNldCIsImxpbmVPZkJ1c2luZXNzIiwiVmFsaWRsaW5lT2ZCdXNpbmVzcyIsImluVmFsaWRsaW5lT2ZCdXNpbmVzcyIsImxpbmVPZkJ1c2luZXNzQ2hhbmdlSGFuZGxlciIsImJsdXJsaW5lT2ZCdXNpbmVzcyIsInJlc2V0bGluZU9mQnVzaW5lc3MiLCJjb250YWN0cGVyc29uIiwidmFsaWRjb250YWN0cGVyc29uIiwiaW5WYWxpZGNvbnRhY3RwZXJzb24iLCJjb250YWN0cGVyc29uQ2hhbmdlSGFuZGxlciIsImJsdXJjb250YWN0cGVyc29uIiwicmVzZXRjb250YWN0cGVyc29uIiwidGVsZSIsInZhbGlkdGVsZSIsImluVmFsaWR0ZWxlIiwidGVsZUNoYW5nZUhhbmRsZXIiLCJibHVydGVsZSIsInJlc2V0dGVsZSIsIlRJTiIsInZhbGlkdGluIiwiaW5WYWxpZHRpbiIsInRpbkNoYW5nZUhhbmRsZXIiLCJibHVydGluIiwicmVzZXR0aW4iLCJmb3JtVmFsaWRhdGlvbiIsInN1Ym1pdEhhbmRsZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY29tcGFueURhdGFPYmplY3QiLCJjb25zb2xlIiwibG9nIiwib25BZGRjb21wYW5pZXNmb3JtIiwibmFtZUlucHV0Q2xhc3NlcyIsImNvbnRhY3RJbnB1dENsYXNzZXMiLCJ0ZWxlSW5wdXRDbGFzc2VzIiwidGluSW5wdXRDbGFzc2VzIiwibGluZU9mQnVzaW5lc3NDbGFzc2VzIl0sInNvdXJjZVJvb3QiOiIifQ==