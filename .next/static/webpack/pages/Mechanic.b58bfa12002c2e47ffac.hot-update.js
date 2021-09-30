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
    var e = document.getElementById("paintJob");
    var paintJob = e.value;
    console.log("this is from the checkBox" + paintJob);

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
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("ul", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("label", {
                htmlFor: "label",
                children: "Paint job "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 110,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
                id: "PaintJob",
                type: "checkbox",
                name: "vehicle"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 111,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_ui_button_Button__WEBPACK_IMPORTED_MODULE_2__.default, {
            className: (_choreregistreation_AddChore_module_css__WEBPACK_IMPORTED_MODULE_5___default().button),
            children: "Add Chores"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 115,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvTWVjaGFuaWMuYjU4YmZhMTIwMDJjMmU0N2ZmYWMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsU0FBU0ssYUFBVCxDQUF1QkMsS0FBdkIsRUFBOEI7QUFBQTs7QUFDNUIsbUJBT0lMLDJEQUFTLENBQUMsVUFBQ00sS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBTixPQUFpQixFQUE1QjtBQUFBLEdBQUQsQ0FQYjtBQUFBLE1BQ1NDLFNBRFQsY0FDRUYsS0FERjtBQUFBLE1BRVdHLFVBRlgsY0FFRUMsT0FGRjtBQUFBLE1BR1lDLFlBSFosY0FHRUMsUUFIRjtBQUFBLE1BSXNCQyxrQkFKdEIsY0FJRUMsa0JBSkY7QUFBQSxNQUtrQkMsU0FMbEIsY0FLRUMsY0FMRjtBQUFBLE1BTVNDLFVBTlQsY0FNRUMsS0FORjs7QUFTQSxvQkFPSWxCLDJEQUFTLENBQUMsVUFBQ00sS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBTixPQUFpQixFQUE1QjtBQUFBLEdBQUQsQ0FQYjtBQUFBLE1BQ1NZLGVBRFQsZUFDRWIsS0FERjtBQUFBLE1BRVdjLFdBRlgsZUFFRVYsT0FGRjtBQUFBLE1BR1lXLGFBSFosZUFHRVQsUUFIRjtBQUFBLE1BSXNCVSxtQkFKdEIsZUFJRVIsa0JBSkY7QUFBQSxNQUtrQlMsVUFMbEIsZUFLRVAsY0FMRjtBQUFBLE1BTVNRLFdBTlQsZUFNRU4sS0FORjs7QUFTQSxNQUFNTyxXQUFXLEdBQUd0Qiw2Q0FBTSxDQUFDLEVBQUQsQ0FBMUI7QUFDQSxNQUFNdUIsS0FBSyxHQUFHdkIsNkNBQU0sQ0FBQyxFQUFELENBQXBCO0FBRUEsTUFBSXdCLGNBQWMsR0FBRyxLQUFyQjs7QUFDQSxNQUFJbEIsVUFBVSxJQUFJVyxXQUFsQixFQUErQjtBQUM3Qk8sSUFBQUEsY0FBYyxHQUFHLElBQWpCO0FBQ0Q7O0FBRUQsV0FBU0MsYUFBVCxDQUF1QkMsS0FBdkIsRUFBOEI7QUFDNUJBLElBQUFBLEtBQUssQ0FBQ0MsY0FBTjtBQUVBLFFBQUlDLENBQUMsR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLFVBQXhCLENBQVI7QUFDQSxRQUFJQyxRQUFRLEdBQUdILENBQUMsQ0FBQ3pCLEtBQWpCO0FBRUE2QixJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSw4QkFBOEJGLFFBQTFDOztBQUVBLFFBQUksQ0FBQ1AsY0FBTCxFQUFxQjtBQUNuQjtBQUNELEtBVjJCLENBWTVCO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxRQUFNVSxlQUFlLEdBQUc7QUFDdEJsQixNQUFBQSxlQUFlLEVBQUVNLFdBQVcsQ0FBQ2EsT0FBWixDQUFvQmhDLEtBRGY7QUFFdEJFLE1BQUFBLFNBQVMsRUFBRWtCLEtBQUssQ0FBQ1ksT0FBTixDQUFjaEM7QUFGSCxLQUF4QixDQWpCNEIsQ0FxQjVCOztBQUNBRCxJQUFBQSxLQUFLLENBQUNrQyxlQUFOLENBQXNCRixlQUF0QjtBQUVBcEIsSUFBQUEsVUFBVSxDQUFDLEVBQUQsQ0FBVjtBQUNBTyxJQUFBQSxXQUFXLENBQUMsRUFBRCxDQUFYO0FBQ0Q7O0FBRUQsTUFBTWdCLGlCQUFpQixHQUFHN0IsWUFBWSxHQUNsQyxzQkFEa0MsR0FFbEMsZUFGSjtBQUlBLE1BQU04QixrQkFBa0IsR0FBR3BCLGFBQWEsR0FDcEMsc0JBRG9DLEdBRXBDLGVBRko7QUFJQSxzQkFDRSw4REFBQyw2Q0FBRDtBQUFBLDJCQUNFO0FBQU0sY0FBUSxFQUFFTyxhQUFoQjtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBQyxLQUFmO0FBQUEsZ0NBQ0U7QUFBSyxtQkFBUyxFQUFFN0Isd0ZBQWhCO0FBQUEsa0NBQ0U7QUFBTyxtQkFBTyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFFRTtBQUNFLGdCQUFJLEVBQUMsR0FEUDtBQUVFLGNBQUUsRUFBQyxZQUZMO0FBR0UsdUJBQVcsRUFBQyxnQ0FIZDtBQUlFLGVBQUcsRUFBRTJCLEtBSlA7QUFLRSxrQkFBTSxFQUFFWCxTQUxWO0FBTUUsb0JBQVEsRUFBRUYsa0JBTlo7QUFPRSxpQkFBSyxFQUFFTDtBQVBUO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkYsRUFXR0csWUFBWSxpQkFDWDtBQUFHLHFCQUFTLEVBQUMsWUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFaSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFpQkU7QUFBSyxtQkFBUyxFQUFFWix3RkFBaEI7QUFBQSxrQ0FDRTtBQUFPLG1CQUFPLEVBQUMsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUVFO0FBQ0UsZ0JBQUksRUFBQyxHQURQO0FBRUUsY0FBRSxFQUFDLFNBRkw7QUFHRSxlQUFHLEVBQUUwQixXQUhQO0FBSUUsa0JBQU0sRUFBRUYsVUFKVjtBQUtFLG9CQUFRLEVBQUVELG1CQUxaO0FBTUUsaUJBQUssRUFBRUg7QUFOVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGLEVBVUdFLGFBQWEsaUJBQ1o7QUFBRyxxQkFBUyxFQUFDLFlBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBWEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWpCRixlQStCRTtBQUFLLG1CQUFTLEVBQUV0Qix1RkFBaEI7QUFBQSxrQ0FHRTtBQUFBLG1DQUNFO0FBQUEsc0NBQ0U7QUFBTyx1QkFBTyxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsZUFFRTtBQUFPLGtCQUFFLEVBQUMsVUFBVjtBQUFxQixvQkFBSSxFQUFDLFVBQTFCO0FBQXFDLG9CQUFJLEVBQUM7QUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhGLGVBVUUsOERBQUMsc0RBQUQ7QUFBUSxxQkFBUyxFQUFFQSx1RkFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQS9CRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBa0REOztHQWpIUUs7O0tBQUFBO0FBa0hULCtEQUFlQSxhQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZGF0YUZsb3cvY2hvcmVyZWdpc3RyZWF0aW9uL0FkZENob3Jlc0Zvcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gIGltcG9ydCAgICAnLi4vY29tcGFueXJlZ2lzdHJhdGlvbi9BZGRDb21wYW5pZXMuY3NzJ1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi4vY2hvcmVyZWdpc3RyZWF0aW9uL0FkZENob3JlLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IFVzZXJJbnB1dCBmcm9tIFwiLi4vLi4vaG9va3MvdXNlci1pbnB1dHNcIjtcclxuaW1wb3J0IENhcmQgZnJvbSBcIi4uLy4uL3VpL0NhcmRcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vLi4vdWkvYnV0dG9uL0J1dHRvblwiO1xyXG5pbXBvcnQgeyB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIEFkZGNob3Jlc2Zvcm0ocHJvcHMpIHtcclxuICBjb25zdCB7XHJcbiAgICB2YWx1ZTogaW50cm9EYXRhLFxyXG4gICAgaXNWYWxpZDogdmFsaWRJbnRybyxcclxuICAgIGhhc0Vycm9yOiBpblZhbGlkSW50cm8sXHJcbiAgICB2YWx1ZUNoYW5nZUhhbmRsZXI6IEludHJvQ2hhbmdlSGFuZGxlcixcclxuICAgIG9uZm9jdXNIYW5kbGVyOiBibHVySW50cm8sXHJcbiAgICByZXNldDogcmVzZXRJbnRybyxcclxuICB9ID0gVXNlcklucHV0KCh2YWx1ZSkgPT4gdmFsdWUudHJpbSgpICE9PSBcIlwiKTtcclxuXHJcbiAgY29uc3Qge1xyXG4gICAgdmFsdWU6IGRlc2NyaXB0aW9uRGF0YSxcclxuICAgIGlzVmFsaWQ6IHZhbGlkZGV0YWlsLFxyXG4gICAgaGFzRXJyb3I6IGluVmFsaWRkZXRhaWwsXHJcbiAgICB2YWx1ZUNoYW5nZUhhbmRsZXI6IGRldGFpbENoYW5nZUhhbmRsZXIsXHJcbiAgICBvbmZvY3VzSGFuZGxlcjogYmx1cmRldGFpbCxcclxuICAgIHJlc2V0OiByZXNldGRldGFpbCxcclxuICB9ID0gVXNlcklucHV0KCh2YWx1ZSkgPT4gdmFsdWUudHJpbSgpICE9PSBcIlwiKTtcclxuXHJcbiAgY29uc3QgZGVzY3JpcHRpb24gPSB1c2VSZWYoXCJcIik7XHJcbiAgY29uc3QgaW50cm8gPSB1c2VSZWYoXCJcIik7XHJcblxyXG4gIGxldCBmb3JtVmFsaWRhdGlvbiA9IGZhbHNlO1xyXG4gIGlmICh2YWxpZEludHJvICYmIHZhbGlkZGV0YWlsKSB7XHJcbiAgICBmb3JtVmFsaWRhdGlvbiA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzdWJtaXRIYW5kbGVyKGV2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGxldCBlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYWludEpvYlwiKTtcclxuICAgIGxldCBwYWludEpvYiA9IGUudmFsdWU7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJ0aGlzIGlzIGZyb20gdGhlIGNoZWNrQm94XCIgKyBwYWludEpvYik7XHJcblxyXG4gICAgaWYgKCFmb3JtVmFsaWRhdGlvbikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY29uc3QgY2hvcmVEYXRhT2JqZWN0ID0ge1xyXG4gICAgLy8gICBkZXNjcmlwdGlvbkRhdGEsXHJcbiAgICAvLyAgIGludHJvRGF0YSxcclxuICAgIC8vIH07XHJcblxyXG4gICAgY29uc3QgY2hvcmVEYXRhT2JqZWN0ID0ge1xyXG4gICAgICBkZXNjcmlwdGlvbkRhdGE6IGRlc2NyaXB0aW9uLmN1cnJlbnQudmFsdWUsXHJcbiAgICAgIGludHJvRGF0YTogaW50cm8uY3VycmVudC52YWx1ZSxcclxuICAgIH07XHJcbiAgICAvLyBjb25zb2xlLmxvZyhjaG9yZURhdGFPYmplY3QpO1xyXG4gICAgcHJvcHMub25BZGRjaG9yZXNmb3JtKGNob3JlRGF0YU9iamVjdCk7XHJcblxyXG4gICAgcmVzZXRJbnRybyhcIlwiKTtcclxuICAgIHJlc2V0ZGV0YWlsKFwiXCIpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaW50cm9JbnB1dENsYXNzZXMgPSBpblZhbGlkSW50cm9cclxuICAgID8gXCJmb3JtLWNvbnRyb2wgaW52YWxpZFwiXHJcbiAgICA6IFwiZm9ybS1jb250cm9sIFwiO1xyXG5cclxuICBjb25zdCBkZXRhaWxJbnB1dENsYXNzZXMgPSBpblZhbGlkZGV0YWlsXHJcbiAgICA/IFwiZm9ybS1jb250cm9sIGludmFsaWRcIlxyXG4gICAgOiBcImZvcm0tY29udHJvbCBcIjtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJkPlxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17c3VibWl0SGFuZGxlcn0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcHBcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRyb2x9PlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImNob3JlaW50cm9cIj5JbnRyb2R1Y3Rpb248L2xhYmVsPlxyXG4gICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICByb3dzPVwiMlwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJjaG9yZWludHJvXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNob3J0IGV4cGxhbmF0aW9uIG9mIHRoZSBjaG9yZVwiXHJcbiAgICAgICAgICAgICAgcmVmPXtpbnRyb31cclxuICAgICAgICAgICAgICBvbkJsdXI9e2JsdXJJbnRyb31cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17SW50cm9DaGFuZ2VIYW5kbGVyfVxyXG4gICAgICAgICAgICAgIHZhbHVlPXtpbnRyb0RhdGF9XHJcbiAgICAgICAgICAgID48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICB7aW5WYWxpZEludHJvICYmIChcclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJlcnJvci10ZXh0XCI+IFBsZWFzZSBlbnRlciBhbiBJbnRyb2R1Y3Rpb24gPC9wPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udHJvbH0+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZGVzY3JpcFwiPkRlc2NyaXB0aW9uPC9sYWJlbD5cclxuICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgcm93cz1cIjVcIlxyXG4gICAgICAgICAgICAgIGlkPVwiZGVzY3JpcFwiXHJcbiAgICAgICAgICAgICAgcmVmPXtkZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICBvbkJsdXI9e2JsdXJkZXRhaWx9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2RldGFpbENoYW5nZUhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgdmFsdWU9e2Rlc2NyaXB0aW9uRGF0YX1cclxuICAgICAgICAgICAgPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgIHtpblZhbGlkZGV0YWlsICYmIChcclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJlcnJvci10ZXh0XCI+IFBsZWFzZSBlbnRlciB0aGUgZGV0YWlsczwvcD5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYWN0aW9ufT5cclxuICAgICAgICAgICAgey8qIDxidXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn0+QWRkIENob3JlczwvYnV0dG9uPiAqL31cclxuXHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImxhYmVsXCI+UGFpbnQgam9iIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJQYWludEpvYlwiIHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJ2ZWhpY2xlXCIgLz5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG5cclxuICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufT5BZGQgQ2hvcmVzPC9CdXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9DYXJkPlxyXG4gICk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQWRkY2hvcmVzZm9ybTtcclxuIl0sIm5hbWVzIjpbImNsYXNzZXMiLCJVc2VySW5wdXQiLCJDYXJkIiwiQnV0dG9uIiwidXNlUmVmIiwiQWRkY2hvcmVzZm9ybSIsInByb3BzIiwidmFsdWUiLCJ0cmltIiwiaW50cm9EYXRhIiwidmFsaWRJbnRybyIsImlzVmFsaWQiLCJpblZhbGlkSW50cm8iLCJoYXNFcnJvciIsIkludHJvQ2hhbmdlSGFuZGxlciIsInZhbHVlQ2hhbmdlSGFuZGxlciIsImJsdXJJbnRybyIsIm9uZm9jdXNIYW5kbGVyIiwicmVzZXRJbnRybyIsInJlc2V0IiwiZGVzY3JpcHRpb25EYXRhIiwidmFsaWRkZXRhaWwiLCJpblZhbGlkZGV0YWlsIiwiZGV0YWlsQ2hhbmdlSGFuZGxlciIsImJsdXJkZXRhaWwiLCJyZXNldGRldGFpbCIsImRlc2NyaXB0aW9uIiwiaW50cm8iLCJmb3JtVmFsaWRhdGlvbiIsInN1Ym1pdEhhbmRsZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJwYWludEpvYiIsImNvbnNvbGUiLCJsb2ciLCJjaG9yZURhdGFPYmplY3QiLCJjdXJyZW50Iiwib25BZGRjaG9yZXNmb3JtIiwiaW50cm9JbnB1dENsYXNzZXMiLCJkZXRhaWxJbnB1dENsYXNzZXMiLCJjb250cm9sIiwiYWN0aW9uIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==