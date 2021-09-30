"use strict";
self["webpackHotUpdate_N_E"]("pages/UploadingChoresToDb",{

/***/ "./pages/UploadingChoresToDb.js":
/*!**************************************!*\
  !*** ./pages/UploadingChoresToDb.js ***!
  \**************************************/
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

var _jsxFileName = "A:\\Projects\\NextJs\\Balemoja_Next\\Balemoja\\pages\\UploadingChoresToDb.js";


 //  import choreList from '../choreregistreation/choreList';



function UploadingChoresToDb() {
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
              return fetch(FIREBASE_API_CHORE, // "https://balmoja-49d90-default-rtdb.europe-west1.firebasedatabase.app/Chores.json",
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
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_dataFlow_choreregistreation_AddChoresForm__WEBPACK_IMPORTED_MODULE_3__.default, {
        onAddchoresform: toDbHandler
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, this);
}

_c = UploadingChoresToDb;
/* harmony default export */ __webpack_exports__["default"] = (UploadingChoresToDb);

var _c;

$RefreshReg$(_c, "UploadingChoresToDb");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvVXBsb2FkaW5nQ2hvcmVzVG9EYi5kZWI1ZDBlNjcwMGQ2N2RkNjhjMC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUVBOzs7O0FBRUEsU0FBU0UsbUJBQVQsR0FBK0I7QUFBQSxXQUNkQyxXQURjO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHVTQUM3QixpQkFBMkJDLGVBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ3lCQyxLQUFLLENBQzFCQyxrQkFEMEIsRUFFMUI7QUFDQTtBQUNFQyxnQkFBQUEsTUFBTSxFQUFFLE1BRFY7QUFFRUMsZ0JBQUFBLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVOLGVBQWYsQ0FGUjtBQUdFTyxnQkFBQUEsT0FBTyxFQUFFO0FBQ1Asa0NBQWdCO0FBRFQ7QUFIWCxlQUgwQixDQUQ5Qjs7QUFBQTtBQUNRQyxjQUFBQSxRQURSOztBQUFBLGtCQVlPQSxRQUFRLENBQUNDLEVBWmhCO0FBQUE7QUFBQTtBQUFBOztBQUFBLG9CQWFVLElBQUlDLEtBQUosQ0FBVSxPQUFWLENBYlY7O0FBQUE7QUFBQTtBQUFBLHFCQWVxQkYsUUFBUSxDQUFDRyxJQUFULEVBZnJCOztBQUFBO0FBZVFDLGNBQUFBLElBZlI7QUFnQkVDLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaOztBQWhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUQ2QjtBQUFBO0FBQUE7O0FBbUI3QixzQkFDRSw4REFBQyx1REFBRDtBQUFBLDJCQUNFO0FBQUEsNkJBQ0UsOERBQUMsMEZBQUQ7QUFBZSx1QkFBZSxFQUFFYjtBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQU9EOztLQTFCUUQ7QUE0QlQsK0RBQWVBLG1CQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL1VwbG9hZGluZ0Nob3Jlc1RvRGIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQWRkQ2hvcmVzRm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9kYXRhRmxvdy9jaG9yZXJlZ2lzdHJlYXRpb24vQWRkQ2hvcmVzRm9ybVwiO1xyXG4vLyAgaW1wb3J0IGNob3JlTGlzdCBmcm9tICcuLi9jaG9yZXJlZ2lzdHJlYXRpb24vY2hvcmVMaXN0JztcclxuXHJcbmZ1bmN0aW9uIFVwbG9hZGluZ0Nob3Jlc1RvRGIoKSB7XHJcbiAgYXN5bmMgZnVuY3Rpb24gdG9EYkhhbmRsZXIoY2hvcmVEYXRhT2JqZWN0KSB7XHJcbiAgICBjb25zdCByZXNwb25jZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICBGSVJFQkFTRV9BUElfQ0hPUkUsXHJcbiAgICAgIC8vIFwiaHR0cHM6Ly9iYWxtb2phLTQ5ZDkwLWRlZmF1bHQtcnRkYi5ldXJvcGUtd2VzdDEuZmlyZWJhc2VkYXRhYmFzZS5hcHAvQ2hvcmVzLmpzb25cIixcclxuICAgICAge1xyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoY2hvcmVEYXRhT2JqZWN0KSxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICB9LFxyXG4gICAgICB9XHJcbiAgICApO1xyXG4gICAgaWYgKCFyZXNwb25jZS5vaykge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFcnJvclwiKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25jZS5qc29uKCk7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgPEFkZENob3Jlc0Zvcm0gb25BZGRjaG9yZXNmb3JtPXt0b0RiSGFuZGxlcn0gLz5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVcGxvYWRpbmdDaG9yZXNUb0RiO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJBZGRDaG9yZXNGb3JtIiwiVXBsb2FkaW5nQ2hvcmVzVG9EYiIsInRvRGJIYW5kbGVyIiwiY2hvcmVEYXRhT2JqZWN0IiwiZmV0Y2giLCJGSVJFQkFTRV9BUElfQ0hPUkUiLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJyZXNwb25jZSIsIm9rIiwiRXJyb3IiLCJqc29uIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9