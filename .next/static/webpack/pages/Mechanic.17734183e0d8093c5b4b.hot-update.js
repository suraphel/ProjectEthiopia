"use strict";
self["webpackHotUpdate_N_E"]("pages/Mechanic",{

/***/ "./components/dataFlow/choreregistreation/AddChoresForm.js":
/*!*****************************************************************!*\
  !*** ./components/dataFlow/choreregistreation/AddChoresForm.js ***!
  \*****************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _choreregistreation_AddChore_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../choreregistreation/AddChore.module.css */ "./components/dataFlow/choreregistreation/AddChore.module.css");
/* harmony import */ var _choreregistreation_AddChore_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_choreregistreation_AddChore_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _hooks_user_inputs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../hooks/user-inputs */ "./components/hooks/user-inputs.js");
/* harmony import */ var _ui_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/Card */ "./components/ui/Card.js");
/* harmony import */ var _ui_button_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/button/Button */ "./components/ui/button/Button.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "A:\\Projects\\NextJs\\Balemoja_Next\\Balemoja\\components\\dataFlow\\choreregistreation\\AddChoresForm.js",
    _s = $RefreshSig$();

//  import    '../companyregistration/AddCompanies.css'







function Addchoresform(props) {
  _s();

  var _UserInput = (0,_hooks_user_inputs__WEBPACK_IMPORTED_MODULE_0__.default)(function (value) {
    return value.trim() !== "";
  }),
      introData = _UserInput.value,
      validIntro = _UserInput.isValid,
      inValidIntro = _UserInput.hasError,
      IntroChangeHandler = _UserInput.valueChangeHandler,
      blurIntro = _UserInput.onfocusHandler,
      resetIntro = _UserInput.reset;

  var _UserInput2 = (0,_hooks_user_inputs__WEBPACK_IMPORTED_MODULE_0__.default)(function (value) {
    return value.trim() !== "";
  }),
      descriptionData = _UserInput2.value,
      validdetail = _UserInput2.isValid,
      inValiddetail = _UserInput2.hasError,
      detailChangeHandler = _UserInput2.valueChangeHandler,
      blurdetail = _UserInput2.onfocusHandler,
      resetdetail = _UserInput2.reset;

  var description = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)("");
  var intro = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)("");
  var formValidation = false;

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


    var choreDataObject = {
      descriptionData: description.current.value,
      introData: intro.current.value
    }; // console.log(choreDataObject);

    props.onAddchoresform(choreDataObject);
    resetIntro("");
    resetdetail("");
  }

  var introInputClasses = inValidIntro ? "form-control invalid" : "form-control ";
  var detailInputClasses = inValiddetail ? "form-control invalid" : "form-control ";
  var e = document.getElementById("paintJob");
  var paintJob = e.value;
  console.log("this is from the checkBox" + paintJob);
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
            lineNumber: 76,
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
            lineNumber: 77,
            columnNumber: 13
          }, this), inValidIntro && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
            className: "error-text",
            children: " Please enter an Introduction "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: (_choreregistreation_AddChore_module_css__WEBPACK_IMPORTED_MODULE_5___default().control),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("label", {
            htmlFor: "descrip",
            children: "Description"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
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
            lineNumber: 93,
            columnNumber: 13
          }, this), inValiddetail && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
            className: "error-text",
            children: " Please enter the details"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: (_choreregistreation_AddChore_module_css__WEBPACK_IMPORTED_MODULE_5___default().action),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("label", {
            htmlFor: "label",
            children: "Paint job "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
            id: "PaintJob",
            type: "checkbox",
            name: "vehicle",
            vlaue: "Paint job"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_ui_button_Button__WEBPACK_IMPORTED_MODULE_2__.default, {
            className: (_choreregistreation_AddChore_module_css__WEBPACK_IMPORTED_MODULE_5___default().button),
            children: "Add Chores"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 72,
    columnNumber: 5
  }, this);
}

_s(Addchoresform, "jPb0/76Ezdoq3SQ9dDA5Ci/vZY4=");

_c = Addchoresform;
/* harmony default export */ __webpack_exports__["default"] = (Addchoresform);

var _c;

$RefreshReg$(_c, "Addchoresform");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvTWVjaGFuaWMuMTc3MzQxODNlMGQ4MDkzYzViNGIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsU0FBU0ssYUFBVCxDQUF1QkMsS0FBdkIsRUFBOEI7QUFBQTs7QUFDNUIsbUJBT0lMLDJEQUFTLENBQUMsVUFBQ00sS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBTixPQUFpQixFQUE1QjtBQUFBLEdBQUQsQ0FQYjtBQUFBLE1BQ1NDLFNBRFQsY0FDRUYsS0FERjtBQUFBLE1BRVdHLFVBRlgsY0FFRUMsT0FGRjtBQUFBLE1BR1lDLFlBSFosY0FHRUMsUUFIRjtBQUFBLE1BSXNCQyxrQkFKdEIsY0FJRUMsa0JBSkY7QUFBQSxNQUtrQkMsU0FMbEIsY0FLRUMsY0FMRjtBQUFBLE1BTVNDLFVBTlQsY0FNRUMsS0FORjs7QUFTQSxvQkFPSWxCLDJEQUFTLENBQUMsVUFBQ00sS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBTixPQUFpQixFQUE1QjtBQUFBLEdBQUQsQ0FQYjtBQUFBLE1BQ1NZLGVBRFQsZUFDRWIsS0FERjtBQUFBLE1BRVdjLFdBRlgsZUFFRVYsT0FGRjtBQUFBLE1BR1lXLGFBSFosZUFHRVQsUUFIRjtBQUFBLE1BSXNCVSxtQkFKdEIsZUFJRVIsa0JBSkY7QUFBQSxNQUtrQlMsVUFMbEIsZUFLRVAsY0FMRjtBQUFBLE1BTVNRLFdBTlQsZUFNRU4sS0FORjs7QUFTQSxNQUFNTyxXQUFXLEdBQUd0Qiw2Q0FBTSxDQUFDLEVBQUQsQ0FBMUI7QUFDQSxNQUFNdUIsS0FBSyxHQUFHdkIsNkNBQU0sQ0FBQyxFQUFELENBQXBCO0FBRUEsTUFBSXdCLGNBQWMsR0FBRyxLQUFyQjs7QUFDQSxNQUFJbEIsVUFBVSxJQUFJVyxXQUFsQixFQUErQjtBQUM3Qk8sSUFBQUEsY0FBYyxHQUFHLElBQWpCO0FBQ0Q7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QUEsZ0JBL0JGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFtREQ7O0dBbEhRSzs7S0FBQUE7QUFtSFQsK0RBQWVBLGFBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kYXRhRmxvdy9jaG9yZXJlZ2lzdHJlYXRpb24vQWRkQ2hvcmVzRm9ybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyAgaW1wb3J0ICAgICcuLi9jb21wYW55cmVnaXN0cmF0aW9uL0FkZENvbXBhbmllcy5jc3MnXHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuLi9jaG9yZXJlZ2lzdHJlYXRpb24vQWRkQ2hvcmUubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgVXNlcklucHV0IGZyb20gXCIuLi8uLi9ob29rcy91c2VyLWlucHV0c1wiO1xyXG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi4vLi4vdWkvQ2FyZFwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi8uLi91aS9idXR0b24vQnV0dG9uXCI7XHJcbmltcG9ydCB7IHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gQWRkY2hvcmVzZm9ybShwcm9wcykge1xyXG4gIGNvbnN0IHtcclxuICAgIHZhbHVlOiBpbnRyb0RhdGEsXHJcbiAgICBpc1ZhbGlkOiB2YWxpZEludHJvLFxyXG4gICAgaGFzRXJyb3I6IGluVmFsaWRJbnRybyxcclxuICAgIHZhbHVlQ2hhbmdlSGFuZGxlcjogSW50cm9DaGFuZ2VIYW5kbGVyLFxyXG4gICAgb25mb2N1c0hhbmRsZXI6IGJsdXJJbnRybyxcclxuICAgIHJlc2V0OiByZXNldEludHJvLFxyXG4gIH0gPSBVc2VySW5wdXQoKHZhbHVlKSA9PiB2YWx1ZS50cmltKCkgIT09IFwiXCIpO1xyXG5cclxuICBjb25zdCB7XHJcbiAgICB2YWx1ZTogZGVzY3JpcHRpb25EYXRhLFxyXG4gICAgaXNWYWxpZDogdmFsaWRkZXRhaWwsXHJcbiAgICBoYXNFcnJvcjogaW5WYWxpZGRldGFpbCxcclxuICAgIHZhbHVlQ2hhbmdlSGFuZGxlcjogZGV0YWlsQ2hhbmdlSGFuZGxlcixcclxuICAgIG9uZm9jdXNIYW5kbGVyOiBibHVyZGV0YWlsLFxyXG4gICAgcmVzZXQ6IHJlc2V0ZGV0YWlsLFxyXG4gIH0gPSBVc2VySW5wdXQoKHZhbHVlKSA9PiB2YWx1ZS50cmltKCkgIT09IFwiXCIpO1xyXG5cclxuICBjb25zdCBkZXNjcmlwdGlvbiA9IHVzZVJlZihcIlwiKTtcclxuICBjb25zdCBpbnRybyA9IHVzZVJlZihcIlwiKTtcclxuXHJcbiAgbGV0IGZvcm1WYWxpZGF0aW9uID0gZmFsc2U7XHJcbiAgaWYgKHZhbGlkSW50cm8gJiYgdmFsaWRkZXRhaWwpIHtcclxuICAgIGZvcm1WYWxpZGF0aW9uID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHN1Ym1pdEhhbmRsZXIoZXZlbnQpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgaWYgKCFmb3JtVmFsaWRhdGlvbikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY29uc3QgY2hvcmVEYXRhT2JqZWN0ID0ge1xyXG4gICAgLy8gICBkZXNjcmlwdGlvbkRhdGEsXHJcbiAgICAvLyAgIGludHJvRGF0YSxcclxuICAgIC8vIH07XHJcblxyXG4gICAgY29uc3QgY2hvcmVEYXRhT2JqZWN0ID0ge1xyXG4gICAgICBkZXNjcmlwdGlvbkRhdGE6IGRlc2NyaXB0aW9uLmN1cnJlbnQudmFsdWUsXHJcbiAgICAgIGludHJvRGF0YTogaW50cm8uY3VycmVudC52YWx1ZSxcclxuICAgIH07XHJcbiAgICAvLyBjb25zb2xlLmxvZyhjaG9yZURhdGFPYmplY3QpO1xyXG4gICAgcHJvcHMub25BZGRjaG9yZXNmb3JtKGNob3JlRGF0YU9iamVjdCk7XHJcblxyXG4gICAgcmVzZXRJbnRybyhcIlwiKTtcclxuICAgIHJlc2V0ZGV0YWlsKFwiXCIpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaW50cm9JbnB1dENsYXNzZXMgPSBpblZhbGlkSW50cm9cclxuICAgID8gXCJmb3JtLWNvbnRyb2wgaW52YWxpZFwiXHJcbiAgICA6IFwiZm9ybS1jb250cm9sIFwiO1xyXG5cclxuICBjb25zdCBkZXRhaWxJbnB1dENsYXNzZXMgPSBpblZhbGlkZGV0YWlsXHJcbiAgICA/IFwiZm9ybS1jb250cm9sIGludmFsaWRcIlxyXG4gICAgOiBcImZvcm0tY29udHJvbCBcIjtcclxuXHJcbiAgbGV0IGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhaW50Sm9iXCIpO1xyXG4gIGxldCBwYWludEpvYiA9IGUudmFsdWU7XHJcblxyXG4gIGNvbnNvbGUubG9nKFwidGhpcyBpcyBmcm9tIHRoZSBjaGVja0JveFwiICsgcGFpbnRKb2IpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENhcmQ+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtzdWJtaXRIYW5kbGVyfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udHJvbH0+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY2hvcmVpbnRyb1wiPkludHJvZHVjdGlvbjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgIHJvd3M9XCIyXCJcclxuICAgICAgICAgICAgICBpZD1cImNob3JlaW50cm9cIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2hvcnQgZXhwbGFuYXRpb24gb2YgdGhlIGNob3JlXCJcclxuICAgICAgICAgICAgICByZWY9e2ludHJvfVxyXG4gICAgICAgICAgICAgIG9uQmx1cj17Ymx1ckludHJvfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtJbnRyb0NoYW5nZUhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgdmFsdWU9e2ludHJvRGF0YX1cclxuICAgICAgICAgICAgPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgIHtpblZhbGlkSW50cm8gJiYgKFxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImVycm9yLXRleHRcIj4gUGxlYXNlIGVudGVyIGFuIEludHJvZHVjdGlvbiA8L3A+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250cm9sfT5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkZXNjcmlwXCI+RGVzY3JpcHRpb248L2xhYmVsPlxyXG4gICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICByb3dzPVwiNVwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJkZXNjcmlwXCJcclxuICAgICAgICAgICAgICByZWY9e2Rlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgIG9uQmx1cj17Ymx1cmRldGFpbH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZGV0YWlsQ2hhbmdlSGFuZGxlcn1cclxuICAgICAgICAgICAgICB2YWx1ZT17ZGVzY3JpcHRpb25EYXRhfVxyXG4gICAgICAgICAgICA+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAge2luVmFsaWRkZXRhaWwgJiYgKFxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImVycm9yLXRleHRcIj4gUGxlYXNlIGVudGVyIHRoZSBkZXRhaWxzPC9wPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5hY3Rpb259PlxyXG4gICAgICAgICAgICB7LyogPGJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufT5BZGQgQ2hvcmVzPC9idXR0b24+ICovfVxyXG5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJsYWJlbFwiPlBhaW50IGpvYiA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICBpZD1cIlBhaW50Sm9iXCJcclxuICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJ2ZWhpY2xlXCJcclxuICAgICAgICAgICAgICB2bGF1ZT1cIlBhaW50IGpvYlwiXHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259PkFkZCBDaG9yZXM8L0J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L0NhcmQ+XHJcbiAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBBZGRjaG9yZXNmb3JtO1xyXG4iXSwibmFtZXMiOlsiY2xhc3NlcyIsIlVzZXJJbnB1dCIsIkNhcmQiLCJCdXR0b24iLCJ1c2VSZWYiLCJBZGRjaG9yZXNmb3JtIiwicHJvcHMiLCJ2YWx1ZSIsInRyaW0iLCJpbnRyb0RhdGEiLCJ2YWxpZEludHJvIiwiaXNWYWxpZCIsImluVmFsaWRJbnRybyIsImhhc0Vycm9yIiwiSW50cm9DaGFuZ2VIYW5kbGVyIiwidmFsdWVDaGFuZ2VIYW5kbGVyIiwiYmx1ckludHJvIiwib25mb2N1c0hhbmRsZXIiLCJyZXNldEludHJvIiwicmVzZXQiLCJkZXNjcmlwdGlvbkRhdGEiLCJ2YWxpZGRldGFpbCIsImluVmFsaWRkZXRhaWwiLCJkZXRhaWxDaGFuZ2VIYW5kbGVyIiwiYmx1cmRldGFpbCIsInJlc2V0ZGV0YWlsIiwiZGVzY3JpcHRpb24iLCJpbnRybyIsImZvcm1WYWxpZGF0aW9uIiwic3VibWl0SGFuZGxlciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjaG9yZURhdGFPYmplY3QiLCJjdXJyZW50Iiwib25BZGRjaG9yZXNmb3JtIiwiaW50cm9JbnB1dENsYXNzZXMiLCJkZXRhaWxJbnB1dENsYXNzZXMiLCJlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInBhaW50Sm9iIiwiY29uc29sZSIsImxvZyIsImNvbnRyb2wiLCJhY3Rpb24iLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9