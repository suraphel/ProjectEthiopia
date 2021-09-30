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
/* harmony import */ var _UploadingChoresToDb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UploadingChoresToDb */ "./pages/UploadingChoresToDb.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_dataFlow_choreregistreation_AddChoresForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/dataFlow/choreregistreation/AddChoresForm */ "./components/dataFlow/choreregistreation/AddChoresForm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "A:\\Projects\\NextJs\\Balemoja_Next\\Balemoja\\pages\\Mechanic.js",
    _this = undefined;







var Mechanic = function Mechanic(props) {
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
              return fetch("https://balemoja-9c5e6-default-rtdb.europe-west1.firebasedatabase.app/Chores.json", // "https://balmoja-49d90-default-rtdb.europe-west1.firebasedatabase.app/Chores.json",
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

  var clonedElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().cloneElement(_components_dataFlow_choreregistreation_AddChoresForm__WEBPACK_IMPORTED_MODULE_4__.default, {
    additionaldata: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("form", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("label", {
        htmlFor: "input",
        children: "additional inputs"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", {
        type: "checkbox"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("label", {
        htmlFor: "input",
        children: "additional inputs"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", {
        type: "checkbox"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("label", {
        htmlFor: "input",
        children: "additional inputs"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", {
        type: "checkbox"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("label", {
        htmlFor: "input",
        children: "additional inputs"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", {
        type: "checkbox"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("label", {
        htmlFor: "input",
        children: "additional inputs"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", {
        type: "checkbox"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, _this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("label", {
        htmlFor: "input",
        children: "additional inputs"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", {
        type: "checkbox"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, _this)
  });
  console.log("testings" + clonedElement);
  var out = "suri";
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("section", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("out", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_dataFlow_choreregistreation_AddChoresForm__WEBPACK_IMPORTED_MODULE_4__.default, {
          onAddchoresform: toDbHandler
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 49,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvTWVjaGFuaWMuOTRmZDJmMzNhNTJmZjM1NWMwZjQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTs7O0FBRUEsSUFBTUcsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsS0FBRCxFQUFXO0FBQUEsV0FDWEMsV0FEVztBQUFBO0FBQUE7O0FBQUE7QUFBQSx1U0FDMUIsaUJBQTJCQyxlQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUN5QkMsS0FBSyxDQUMxQixtRkFEMEIsRUFFMUI7QUFDQTtBQUNFQyxnQkFBQUEsTUFBTSxFQUFFLE1BRFY7QUFFRUMsZ0JBQUFBLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVMLGVBQWYsQ0FGUjtBQUdFTSxnQkFBQUEsT0FBTyxFQUFFO0FBQ1Asa0NBQWdCO0FBRFQ7QUFIWCxlQUgwQixDQUQ5Qjs7QUFBQTtBQUNRQyxjQUFBQSxRQURSOztBQUFBLGtCQVlPQSxRQUFRLENBQUNDLEVBWmhCO0FBQUE7QUFBQTtBQUFBOztBQUFBLG9CQWFVLElBQUlDLEtBQUosQ0FBVSxPQUFWLENBYlY7O0FBQUE7QUFBQTtBQUFBLHFCQWVxQkYsUUFBUSxDQUFDRyxJQUFULEVBZnJCOztBQUFBO0FBZVFDLGNBQUFBLElBZlI7QUFnQkVDLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaOztBQWhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUQwQjtBQUFBO0FBQUE7O0FBb0IxQixNQUFJRyxhQUFhLGdCQUFHbkIseURBQUEsQ0FBbUJDLDBGQUFuQixFQUFrQztBQUNwRG9CLElBQUFBLGNBQWMsZUFDWjtBQUFBLDhCQUNFO0FBQU8sZUFBTyxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFO0FBQU8sWUFBSSxFQUFDO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGLGVBR0U7QUFBTyxlQUFPLEVBQUMsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhGLGVBSUU7QUFBTyxZQUFJLEVBQUM7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkYsZUFLRTtBQUFPLGVBQU8sRUFBQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTEYsZUFNRTtBQUFPLFlBQUksRUFBQztBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFORixlQU9FO0FBQU8sZUFBTyxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFQRixlQVFFO0FBQU8sWUFBSSxFQUFDO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVJGLGVBU0U7QUFBTyxlQUFPLEVBQUMsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVRGLGVBVUU7QUFBTyxZQUFJLEVBQUM7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVkYsRUFVNEIsR0FWNUIsZUFXRTtBQUFPLGVBQU8sRUFBQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBWEYsZUFZRTtBQUFPLFlBQUksRUFBQztBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFaRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGa0QsR0FBbEMsQ0FBcEI7QUFrQkFKLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQWFDLGFBQXpCO0FBRUEsTUFBSUcsR0FBRyxHQUFHLE1BQVY7QUFFQSxzQkFDRTtBQUFBLDJCQUNFLDhEQUFDLHVEQUFEO0FBQUEsNkJBQ0U7QUFBQSxnQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUUsOERBQUMsMEZBQUQ7QUFBZSx5QkFBZSxFQUFFbEI7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBVUQsQ0FwREQ7O0tBQU1GO0FBc0ROLCtEQUFlQSxRQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL01lY2hhbmljLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVcGxvYWRpbmdDaG9yZXNUb0RiIGZyb20gXCIuL1VwbG9hZGluZ0Nob3Jlc1RvRGJcIjtcclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEFkZENob3Jlc0Zvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZGF0YUZsb3cvY2hvcmVyZWdpc3RyZWF0aW9uL0FkZENob3Jlc0Zvcm1cIjtcclxuXHJcbmNvbnN0IE1lY2hhbmljID0gKHByb3BzKSA9PiB7XHJcbiAgYXN5bmMgZnVuY3Rpb24gdG9EYkhhbmRsZXIoY2hvcmVEYXRhT2JqZWN0KSB7XHJcbiAgICBjb25zdCByZXNwb25jZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICBcImh0dHBzOi8vYmFsZW1vamEtOWM1ZTYtZGVmYXVsdC1ydGRiLmV1cm9wZS13ZXN0MS5maXJlYmFzZWRhdGFiYXNlLmFwcC9DaG9yZXMuanNvblwiLFxyXG4gICAgICAvLyBcImh0dHBzOi8vYmFsbW9qYS00OWQ5MC1kZWZhdWx0LXJ0ZGIuZXVyb3BlLXdlc3QxLmZpcmViYXNlZGF0YWJhc2UuYXBwL0Nob3Jlcy5qc29uXCIsXHJcbiAgICAgIHtcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGNob3JlRGF0YU9iamVjdCksXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfVxyXG4gICAgKTtcclxuICAgIGlmICghcmVzcG9uY2Uub2spIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRXJyb3JcIik7XHJcbiAgICB9XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uY2UuanNvbigpO1xyXG4gICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgfVxyXG5cclxuICBsZXQgY2xvbmVkRWxlbWVudCA9IFJlYWN0LmNsb25lRWxlbWVudChBZGRDaG9yZXNGb3JtLCB7XHJcbiAgICBhZGRpdGlvbmFsZGF0YTogKFxyXG4gICAgICA8Zm9ybT5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImlucHV0XCI+YWRkaXRpb25hbCBpbnB1dHM8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAvPlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaW5wdXRcIj5hZGRpdGlvbmFsIGlucHV0czwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIC8+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJpbnB1dFwiPmFkZGl0aW9uYWwgaW5wdXRzPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgLz5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImlucHV0XCI+YWRkaXRpb25hbCBpbnB1dHM8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAvPlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaW5wdXRcIj5hZGRpdGlvbmFsIGlucHV0czwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIC8+e1wiIFwifVxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaW5wdXRcIj5hZGRpdGlvbmFsIGlucHV0czwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIC8+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgICksXHJcbiAgfSk7XHJcbiAgY29uc29sZS5sb2coXCJ0ZXN0aW5nc1wiICsgY2xvbmVkRWxlbWVudCk7XHJcblxyXG4gIGxldCBvdXQgPSBcInN1cmlcIjtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICA8c2VjdGlvbj5cclxuICAgICAgICAgIDxvdXQgLz5cclxuICAgICAgICAgIDxBZGRDaG9yZXNGb3JtIG9uQWRkY2hvcmVzZm9ybT17dG9EYkhhbmRsZXJ9IC8+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lY2hhbmljO1xyXG4iXSwibmFtZXMiOlsiVXBsb2FkaW5nQ2hvcmVzVG9EYiIsIlJlYWN0IiwiQWRkQ2hvcmVzRm9ybSIsIk1lY2hhbmljIiwicHJvcHMiLCJ0b0RiSGFuZGxlciIsImNob3JlRGF0YU9iamVjdCIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwicmVzcG9uY2UiLCJvayIsIkVycm9yIiwianNvbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiY2xvbmVkRWxlbWVudCIsImNsb25lRWxlbWVudCIsImFkZGl0aW9uYWxkYXRhIiwib3V0Il0sInNvdXJjZVJvb3QiOiIifQ==