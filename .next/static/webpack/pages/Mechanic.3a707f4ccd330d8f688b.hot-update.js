"use strict";
self["webpackHotUpdate_N_E"]("pages/Mechanic",{

/***/ "./pages/Mechanic.js":
/*!***************************!*\
  !*** ./pages/Mechanic.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var A_Projects_NextJs_Balemoja_Next_Balemoja_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var A_Projects_NextJs_Balemoja_Next_Balemoja_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var A_Projects_NextJs_Balemoja_Next_Balemoja_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(A_Projects_NextJs_Balemoja_Next_Balemoja_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_dataFlow_choreregistreation_AddChoresForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/dataFlow/choreregistreation/AddChoresForm */ "./components/dataFlow/choreregistreation/AddChoresForm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "A:\\Projects\\NextJs\\Balemoja_Next\\Balemoja\\pages\\Mechanic.js",
    _this = undefined;






var Mechanic = function Mechanic() {
  function toDbHandler(_x) {
    return _toDbHandler.apply(this, arguments);
  }

  function _toDbHandler() {
    _toDbHandler = (0,A_Projects_NextJs_Balemoja_Next_Balemoja_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/A_Projects_NextJs_Balemoja_Next_Balemoja_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(choreDataObject) {
      var responce, data;
      return A_Projects_NextJs_Balemoja_Next_Balemoja_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch("https://balemoja-9c5e6-default-rtdb.europe-west1.firebasedatabase.app/Mechanic.json", // "https://balmoja-49d90-default-rtdb.europe-west1.firebasedatabase.app/Chores.json",
              {
                method: "POST",
                body: JSON.stringify(choreDataObject),
                headers: {
                  "Content-Type": "application/json"
                }
              });

            case 2:
              responce = _context.sent;

              if (responce.ok) {
                _context.next = 5;
                break;
              }

              throw new Error("Error");

            case 5:
              _context.next = 7;
              return responce.json();

            case 7:
              data = _context.sent;
              console.log(data);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _toDbHandler.apply(this, arguments);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("section", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_dataFlow_choreregistreation_AddChoresForm__WEBPACK_IMPORTED_MODULE_3__.default, {
        onAddchoresform: toDbHandler
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("label", {
        htmlFor: "label",
        children: "Paint job "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
        type: "checkbox"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }, _this);
};

_c = Mechanic;
/* harmony default export */ __webpack_exports__["default"] = (Mechanic);

var _c;

$RefreshReg$(_c, "Mechanic");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvTWVjaGFuaWMuM2E3MDdmNGNjZDMzMGQ4ZjY4OGIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBRUEsSUFBTUUsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBLFdBQ05DLFdBRE07QUFBQTtBQUFBOztBQUFBO0FBQUEsdVNBQ3JCLGlCQUEyQkMsZUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDeUJDLEtBQUssQ0FDMUIscUZBRDBCLEVBRTFCO0FBQ0E7QUFDRUMsZ0JBQUFBLE1BQU0sRUFBRSxNQURWO0FBRUVDLGdCQUFBQSxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlTCxlQUFmLENBRlI7QUFHRU0sZ0JBQUFBLE9BQU8sRUFBRTtBQUNQLGtDQUFnQjtBQURUO0FBSFgsZUFIMEIsQ0FEOUI7O0FBQUE7QUFDUUMsY0FBQUEsUUFEUjs7QUFBQSxrQkFZT0EsUUFBUSxDQUFDQyxFQVpoQjtBQUFBO0FBQUE7QUFBQTs7QUFBQSxvQkFhVSxJQUFJQyxLQUFKLENBQVUsT0FBVixDQWJWOztBQUFBO0FBQUE7QUFBQSxxQkFlcUJGLFFBQVEsQ0FBQ0csSUFBVCxFQWZyQjs7QUFBQTtBQWVRQyxjQUFBQSxJQWZSO0FBZ0JFQyxjQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWjs7QUFoQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FEcUI7QUFBQTtBQUFBOztBQW1CckIsc0JBQ0UsOERBQUMsdURBQUQ7QUFBQSwyQkFDRTtBQUFBLDhCQUNFLDhEQUFDLDBGQUFEO0FBQWUsdUJBQWUsRUFBRVo7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUU7QUFBTyxlQUFPLEVBQUMsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGLGVBR0U7QUFBTyxZQUFJLEVBQUM7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBU0QsQ0E1QkQ7O0tBQU1EO0FBOEJOLCtEQUFlQSxRQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL01lY2hhbmljLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEFkZENob3Jlc0Zvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZGF0YUZsb3cvY2hvcmVyZWdpc3RyZWF0aW9uL0FkZENob3Jlc0Zvcm1cIjtcclxuXHJcbmNvbnN0IE1lY2hhbmljID0gKCkgPT4ge1xyXG4gIGFzeW5jIGZ1bmN0aW9uIHRvRGJIYW5kbGVyKGNob3JlRGF0YU9iamVjdCkge1xyXG4gICAgY29uc3QgcmVzcG9uY2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgXCJodHRwczovL2JhbGVtb2phLTljNWU2LWRlZmF1bHQtcnRkYi5ldXJvcGUtd2VzdDEuZmlyZWJhc2VkYXRhYmFzZS5hcHAvTWVjaGFuaWMuanNvblwiLFxyXG4gICAgICAvLyBcImh0dHBzOi8vYmFsbW9qYS00OWQ5MC1kZWZhdWx0LXJ0ZGIuZXVyb3BlLXdlc3QxLmZpcmViYXNlZGF0YWJhc2UuYXBwL0Nob3Jlcy5qc29uXCIsXHJcbiAgICAgIHtcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGNob3JlRGF0YU9iamVjdCksXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfVxyXG4gICAgKTtcclxuICAgIGlmICghcmVzcG9uY2Uub2spIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRXJyb3JcIik7XHJcbiAgICB9XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uY2UuanNvbigpO1xyXG4gICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgIDxBZGRDaG9yZXNGb3JtIG9uQWRkY2hvcmVzZm9ybT17dG9EYkhhbmRsZXJ9IC8+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJsYWJlbFwiPlBhaW50IGpvYiA8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAvPlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZWNoYW5pYztcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQWRkQ2hvcmVzRm9ybSIsIk1lY2hhbmljIiwidG9EYkhhbmRsZXIiLCJjaG9yZURhdGFPYmplY3QiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsInJlc3BvbmNlIiwib2siLCJFcnJvciIsImpzb24iLCJkYXRhIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=