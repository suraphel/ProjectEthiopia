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
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("label", {
            htmlFor: "label",
            children: "Paint job "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
            type: "checkbox"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_ui_button_Button__WEBPACK_IMPORTED_MODULE_2__.default, {
            className: (_choreregistreation_AddChore_module_css__WEBPACK_IMPORTED_MODULE_5___default().button),
            children: "Add Chores"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvTWVjaGFuaWMuMjVmZTI3ZTRiYjFhNjQ0MjNlNGMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsU0FBU0ssYUFBVCxDQUF1QkMsS0FBdkIsRUFBOEI7QUFBQTs7QUFDNUIsbUJBT0lMLDJEQUFTLENBQUMsVUFBQ00sS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBTixPQUFpQixFQUE1QjtBQUFBLEdBQUQsQ0FQYjtBQUFBLE1BQ1NDLFNBRFQsY0FDRUYsS0FERjtBQUFBLE1BRVdHLFVBRlgsY0FFRUMsT0FGRjtBQUFBLE1BR1lDLFlBSFosY0FHRUMsUUFIRjtBQUFBLE1BSXNCQyxrQkFKdEIsY0FJRUMsa0JBSkY7QUFBQSxNQUtrQkMsU0FMbEIsY0FLRUMsY0FMRjtBQUFBLE1BTVNDLFVBTlQsY0FNRUMsS0FORjs7QUFTQSxvQkFPSWxCLDJEQUFTLENBQUMsVUFBQ00sS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBTixPQUFpQixFQUE1QjtBQUFBLEdBQUQsQ0FQYjtBQUFBLE1BQ1NZLGVBRFQsZUFDRWIsS0FERjtBQUFBLE1BRVdjLFdBRlgsZUFFRVYsT0FGRjtBQUFBLE1BR1lXLGFBSFosZUFHRVQsUUFIRjtBQUFBLE1BSXNCVSxtQkFKdEIsZUFJRVIsa0JBSkY7QUFBQSxNQUtrQlMsVUFMbEIsZUFLRVAsY0FMRjtBQUFBLE1BTVNRLFdBTlQsZUFNRU4sS0FORjs7QUFTQSxNQUFNTyxXQUFXLEdBQUd0Qiw2Q0FBTSxDQUFDLEVBQUQsQ0FBMUI7QUFDQSxNQUFNdUIsS0FBSyxHQUFHdkIsNkNBQU0sQ0FBQyxFQUFELENBQXBCO0FBRUEsTUFBSXdCLGNBQWMsR0FBRyxLQUFyQjs7QUFDQSxNQUFJbEIsVUFBVSxJQUFJVyxXQUFsQixFQUErQjtBQUM3Qk8sSUFBQUEsY0FBYyxHQUFHLElBQWpCO0FBQ0Q7O0FBRUQsV0FBU0MsYUFBVCxDQUF1QkMsS0FBdkIsRUFBOEI7QUFDNUJBLElBQUFBLEtBQUssQ0FBQ0MsY0FBTjs7QUFFQSxRQUFJLENBQUNILGNBQUwsRUFBcUI7QUFDbkI7QUFDRCxLQUwyQixDQU81QjtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsUUFBTUksZUFBZSxHQUFHO0FBQ3RCWixNQUFBQSxlQUFlLEVBQUVNLFdBQVcsQ0FBQ08sT0FBWixDQUFvQjFCLEtBRGY7QUFFdEJFLE1BQUFBLFNBQVMsRUFBRWtCLEtBQUssQ0FBQ00sT0FBTixDQUFjMUI7QUFGSCxLQUF4QixDQVo0QixDQWdCNUI7O0FBQ0FELElBQUFBLEtBQUssQ0FBQzRCLGVBQU4sQ0FBc0JGLGVBQXRCO0FBRUFkLElBQUFBLFVBQVUsQ0FBQyxFQUFELENBQVY7QUFDQU8sSUFBQUEsV0FBVyxDQUFDLEVBQUQsQ0FBWDtBQUNEOztBQUVELE1BQU1VLGlCQUFpQixHQUFHdkIsWUFBWSxHQUNsQyxzQkFEa0MsR0FFbEMsZUFGSjtBQUlBLE1BQU13QixrQkFBa0IsR0FBR2QsYUFBYSxHQUNwQyxzQkFEb0MsR0FFcEMsZUFGSjtBQUlBLHNCQUNFLDhEQUFDLDZDQUFEO0FBQUEsMkJBQ0U7QUFBTSxjQUFRLEVBQUVPLGFBQWhCO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFDLEtBQWY7QUFBQSxnQ0FDRTtBQUFLLG1CQUFTLEVBQUU3Qix3RkFBaEI7QUFBQSxrQ0FDRTtBQUFPLG1CQUFPLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUVFO0FBQ0UsZ0JBQUksRUFBQyxHQURQO0FBRUUsY0FBRSxFQUFDLFlBRkw7QUFHRSx1QkFBVyxFQUFDLGdDQUhkO0FBSUUsZUFBRyxFQUFFMkIsS0FKUDtBQUtFLGtCQUFNLEVBQUVYLFNBTFY7QUFNRSxvQkFBUSxFQUFFRixrQkFOWjtBQU9FLGlCQUFLLEVBQUVMO0FBUFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRixFQVdHRyxZQUFZLGlCQUNYO0FBQUcscUJBQVMsRUFBQyxZQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQWlCRTtBQUFLLG1CQUFTLEVBQUVaLHdGQUFoQjtBQUFBLGtDQUNFO0FBQU8sbUJBQU8sRUFBQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBRUU7QUFDRSxnQkFBSSxFQUFDLEdBRFA7QUFFRSxjQUFFLEVBQUMsU0FGTDtBQUdFLGVBQUcsRUFBRTBCLFdBSFA7QUFJRSxrQkFBTSxFQUFFRixVQUpWO0FBS0Usb0JBQVEsRUFBRUQsbUJBTFo7QUFNRSxpQkFBSyxFQUFFSDtBQU5UO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkYsRUFVR0UsYUFBYSxpQkFDWjtBQUFHLHFCQUFTLEVBQUMsWUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFYSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBakJGLGVBK0JFO0FBQUssbUJBQVMsRUFBRXRCLHVGQUFoQjtBQUFBLGtDQUdFO0FBQU8sbUJBQU8sRUFBQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhGLGVBSUU7QUFBTyxnQkFBSSxFQUFDO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFKRixlQU1FLDhEQUFDLHNEQUFEO0FBQVEscUJBQVMsRUFBRUEsdUZBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkEvQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQThDRDs7R0F4R1FLOztLQUFBQTtBQXlHVCwrREFBZUEsYUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2RhdGFGbG93L2Nob3JlcmVnaXN0cmVhdGlvbi9BZGRDaG9yZXNGb3JtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vICBpbXBvcnQgICAgJy4uL2NvbXBhbnlyZWdpc3RyYXRpb24vQWRkQ29tcGFuaWVzLmNzcydcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4uL2Nob3JlcmVnaXN0cmVhdGlvbi9BZGRDaG9yZS5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBVc2VySW5wdXQgZnJvbSBcIi4uLy4uL2hvb2tzL3VzZXItaW5wdXRzXCI7XHJcbmltcG9ydCBDYXJkIGZyb20gXCIuLi8uLi91aS9DYXJkXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uLy4uL3VpL2J1dHRvbi9CdXR0b25cIjtcclxuaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5mdW5jdGlvbiBBZGRjaG9yZXNmb3JtKHByb3BzKSB7XHJcbiAgY29uc3Qge1xyXG4gICAgdmFsdWU6IGludHJvRGF0YSxcclxuICAgIGlzVmFsaWQ6IHZhbGlkSW50cm8sXHJcbiAgICBoYXNFcnJvcjogaW5WYWxpZEludHJvLFxyXG4gICAgdmFsdWVDaGFuZ2VIYW5kbGVyOiBJbnRyb0NoYW5nZUhhbmRsZXIsXHJcbiAgICBvbmZvY3VzSGFuZGxlcjogYmx1ckludHJvLFxyXG4gICAgcmVzZXQ6IHJlc2V0SW50cm8sXHJcbiAgfSA9IFVzZXJJbnB1dCgodmFsdWUpID0+IHZhbHVlLnRyaW0oKSAhPT0gXCJcIik7XHJcblxyXG4gIGNvbnN0IHtcclxuICAgIHZhbHVlOiBkZXNjcmlwdGlvbkRhdGEsXHJcbiAgICBpc1ZhbGlkOiB2YWxpZGRldGFpbCxcclxuICAgIGhhc0Vycm9yOiBpblZhbGlkZGV0YWlsLFxyXG4gICAgdmFsdWVDaGFuZ2VIYW5kbGVyOiBkZXRhaWxDaGFuZ2VIYW5kbGVyLFxyXG4gICAgb25mb2N1c0hhbmRsZXI6IGJsdXJkZXRhaWwsXHJcbiAgICByZXNldDogcmVzZXRkZXRhaWwsXHJcbiAgfSA9IFVzZXJJbnB1dCgodmFsdWUpID0+IHZhbHVlLnRyaW0oKSAhPT0gXCJcIik7XHJcblxyXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gdXNlUmVmKFwiXCIpO1xyXG4gIGNvbnN0IGludHJvID0gdXNlUmVmKFwiXCIpO1xyXG5cclxuICBsZXQgZm9ybVZhbGlkYXRpb24gPSBmYWxzZTtcclxuICBpZiAodmFsaWRJbnRybyAmJiB2YWxpZGRldGFpbCkge1xyXG4gICAgZm9ybVZhbGlkYXRpb24gPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc3VibWl0SGFuZGxlcihldmVudCkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBpZiAoIWZvcm1WYWxpZGF0aW9uKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBjb25zdCBjaG9yZURhdGFPYmplY3QgPSB7XHJcbiAgICAvLyAgIGRlc2NyaXB0aW9uRGF0YSxcclxuICAgIC8vICAgaW50cm9EYXRhLFxyXG4gICAgLy8gfTtcclxuXHJcbiAgICBjb25zdCBjaG9yZURhdGFPYmplY3QgPSB7XHJcbiAgICAgIGRlc2NyaXB0aW9uRGF0YTogZGVzY3JpcHRpb24uY3VycmVudC52YWx1ZSxcclxuICAgICAgaW50cm9EYXRhOiBpbnRyby5jdXJyZW50LnZhbHVlLFxyXG4gICAgfTtcclxuICAgIC8vIGNvbnNvbGUubG9nKGNob3JlRGF0YU9iamVjdCk7XHJcbiAgICBwcm9wcy5vbkFkZGNob3Jlc2Zvcm0oY2hvcmVEYXRhT2JqZWN0KTtcclxuXHJcbiAgICByZXNldEludHJvKFwiXCIpO1xyXG4gICAgcmVzZXRkZXRhaWwoXCJcIik7XHJcbiAgfVxyXG5cclxuICBjb25zdCBpbnRyb0lucHV0Q2xhc3NlcyA9IGluVmFsaWRJbnRyb1xyXG4gICAgPyBcImZvcm0tY29udHJvbCBpbnZhbGlkXCJcclxuICAgIDogXCJmb3JtLWNvbnRyb2wgXCI7XHJcblxyXG4gIGNvbnN0IGRldGFpbElucHV0Q2xhc3NlcyA9IGluVmFsaWRkZXRhaWxcclxuICAgID8gXCJmb3JtLWNvbnRyb2wgaW52YWxpZFwiXHJcbiAgICA6IFwiZm9ybS1jb250cm9sIFwiO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENhcmQ+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtzdWJtaXRIYW5kbGVyfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udHJvbH0+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY2hvcmVpbnRyb1wiPkludHJvZHVjdGlvbjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgIHJvd3M9XCIyXCJcclxuICAgICAgICAgICAgICBpZD1cImNob3JlaW50cm9cIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2hvcnQgZXhwbGFuYXRpb24gb2YgdGhlIGNob3JlXCJcclxuICAgICAgICAgICAgICByZWY9e2ludHJvfVxyXG4gICAgICAgICAgICAgIG9uQmx1cj17Ymx1ckludHJvfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtJbnRyb0NoYW5nZUhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgdmFsdWU9e2ludHJvRGF0YX1cclxuICAgICAgICAgICAgPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgIHtpblZhbGlkSW50cm8gJiYgKFxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImVycm9yLXRleHRcIj4gUGxlYXNlIGVudGVyIGFuIEludHJvZHVjdGlvbiA8L3A+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250cm9sfT5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkZXNjcmlwXCI+RGVzY3JpcHRpb248L2xhYmVsPlxyXG4gICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICByb3dzPVwiNVwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJkZXNjcmlwXCJcclxuICAgICAgICAgICAgICByZWY9e2Rlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgIG9uQmx1cj17Ymx1cmRldGFpbH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZGV0YWlsQ2hhbmdlSGFuZGxlcn1cclxuICAgICAgICAgICAgICB2YWx1ZT17ZGVzY3JpcHRpb25EYXRhfVxyXG4gICAgICAgICAgICA+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAge2luVmFsaWRkZXRhaWwgJiYgKFxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImVycm9yLXRleHRcIj4gUGxlYXNlIGVudGVyIHRoZSBkZXRhaWxzPC9wPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5hY3Rpb259PlxyXG4gICAgICAgICAgICB7LyogPGJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufT5BZGQgQ2hvcmVzPC9idXR0b24+ICovfVxyXG5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJsYWJlbFwiPlBhaW50IGpvYiA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgLz5cclxuXHJcbiAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn0+QWRkIENob3JlczwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvQ2FyZD5cclxuICApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEFkZGNob3Jlc2Zvcm07XHJcbiJdLCJuYW1lcyI6WyJjbGFzc2VzIiwiVXNlcklucHV0IiwiQ2FyZCIsIkJ1dHRvbiIsInVzZVJlZiIsIkFkZGNob3Jlc2Zvcm0iLCJwcm9wcyIsInZhbHVlIiwidHJpbSIsImludHJvRGF0YSIsInZhbGlkSW50cm8iLCJpc1ZhbGlkIiwiaW5WYWxpZEludHJvIiwiaGFzRXJyb3IiLCJJbnRyb0NoYW5nZUhhbmRsZXIiLCJ2YWx1ZUNoYW5nZUhhbmRsZXIiLCJibHVySW50cm8iLCJvbmZvY3VzSGFuZGxlciIsInJlc2V0SW50cm8iLCJyZXNldCIsImRlc2NyaXB0aW9uRGF0YSIsInZhbGlkZGV0YWlsIiwiaW5WYWxpZGRldGFpbCIsImRldGFpbENoYW5nZUhhbmRsZXIiLCJibHVyZGV0YWlsIiwicmVzZXRkZXRhaWwiLCJkZXNjcmlwdGlvbiIsImludHJvIiwiZm9ybVZhbGlkYXRpb24iLCJzdWJtaXRIYW5kbGVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNob3JlRGF0YU9iamVjdCIsImN1cnJlbnQiLCJvbkFkZGNob3Jlc2Zvcm0iLCJpbnRyb0lucHV0Q2xhc3NlcyIsImRldGFpbElucHV0Q2xhc3NlcyIsImNvbnRyb2wiLCJhY3Rpb24iLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9