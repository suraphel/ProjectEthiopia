"use strict";
self["webpackHotUpdate_N_E"]("pages/UploadingCompaniesToDb",{

/***/ "./pages/UploadingCompaniesToDb.js":
/*!*****************************************!*\
  !*** ./pages/UploadingCompaniesToDb.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var A_Projects_NextJs_Balemoja_Next_Balemoja_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var A_Projects_NextJs_Balemoja_Next_Balemoja_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var A_Projects_NextJs_Balemoja_Next_Balemoja_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(A_Projects_NextJs_Balemoja_Next_Balemoja_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_dataFlow_companyregistration_AddCompaniesForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/dataFlow/companyregistration/AddCompaniesForm */ "./components/dataFlow/companyregistration/AddCompaniesForm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "A:\\Projects\\NextJs\\Balemoja_Next\\Balemoja\\pages\\UploadingCompaniesToDb.js";





function UploadingCompaniesToDb() {
  function toDbHandler(_x) {
    return _toDbHandler.apply(this, arguments);
  }

  function _toDbHandler() {
    _toDbHandler = (0,A_Projects_NextJs_Balemoja_Next_Balemoja_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/A_Projects_NextJs_Balemoja_Next_Balemoja_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(companyDataObject) {
      var responce, data;
      return A_Projects_NextJs_Balemoja_Next_Balemoja_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch("https://balemoja-9c5e6-default-rtdb.europe-west1.firebasedatabase.app/Companies.json", {
                method: "POST",
                body: JSON.stringify(companyDataObject),
                headers: {
                  "Content-Type": "application/json"
                }
              });

            case 2:
              responce = _context.sent;
              _context.next = 5;
              return responce.json();

            case 5:
              data = _context.sent;
              console.log(data);

            case 7:
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
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_dataFlow_companyregistration_AddCompaniesForm__WEBPACK_IMPORTED_MODULE_3__.default, {
        onAddcompaniesform: toDbHandler
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 5
  }, this);
}

_c = UploadingCompaniesToDb;
/* harmony default export */ __webpack_exports__["default"] = (UploadingCompaniesToDb);

var _c;

$RefreshReg$(_c, "UploadingCompaniesToDb");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvVXBsb2FkaW5nQ29tcGFuaWVzVG9EYi41MzNiMjViNDNkN2VmNzRmMDk1ZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFFQSxTQUFTRSxzQkFBVCxHQUFrQztBQUFBLFdBQ2pCQyxXQURpQjtBQUFBO0FBQUE7O0FBQUE7QUFBQSx1U0FDaEMsaUJBQTJCQyxpQkFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDeUJDLEtBQUssQ0FDMUIsc0ZBRDBCLEVBRTFCO0FBQ0VDLGdCQUFBQSxNQUFNLEVBQUUsTUFEVjtBQUVFQyxnQkFBQUEsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZUwsaUJBQWYsQ0FGUjtBQUdFTSxnQkFBQUEsT0FBTyxFQUFFO0FBQ1Asa0NBQWdCO0FBRFQ7QUFIWCxlQUYwQixDQUQ5Qjs7QUFBQTtBQUNRQyxjQUFBQSxRQURSO0FBQUE7QUFBQSxxQkFjcUJBLFFBQVEsQ0FBQ0MsSUFBVCxFQWRyQjs7QUFBQTtBQWNRQyxjQUFBQSxJQWRSO0FBZUVDLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaOztBQWZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRGdDO0FBQUE7QUFBQTs7QUFrQmhDLHNCQUNFLDhEQUFDLHVEQUFEO0FBQUEsMkJBQ0U7QUFBQSw2QkFDRSw4REFBQyw4RkFBRDtBQUFrQiwwQkFBa0IsRUFBRVY7QUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFPRDs7S0F6QlFEO0FBMkJULCtEQUFlQSxzQkFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9VcGxvYWRpbmdDb21wYW5pZXNUb0RiLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEFkZENvbXBhbmllc0Zvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZGF0YUZsb3cvY29tcGFueXJlZ2lzdHJhdGlvbi9BZGRDb21wYW5pZXNGb3JtXCI7XHJcblxyXG5mdW5jdGlvbiBVcGxvYWRpbmdDb21wYW5pZXNUb0RiKCkge1xyXG4gIGFzeW5jIGZ1bmN0aW9uIHRvRGJIYW5kbGVyKGNvbXBhbnlEYXRhT2JqZWN0KSB7XHJcbiAgICBjb25zdCByZXNwb25jZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICBcImh0dHBzOi8vYmFsZW1vamEtOWM1ZTYtZGVmYXVsdC1ydGRiLmV1cm9wZS13ZXN0MS5maXJlYmFzZWRhdGFiYXNlLmFwcC9Db21wYW5pZXMuanNvblwiLFxyXG4gICAgICB7XHJcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShjb21wYW55RGF0YU9iamVjdCksXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfVxyXG4gICAgKTtcclxuICAgIC8vIGlmKCFyZXNwb25jZS5vayl7XHJcbiAgICAvLyAgIHRocm93IG5ldyBFcnJvcignRXJyb3InKTtcclxuICAgIC8vIH1cclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25jZS5qc29uKCk7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgPEFkZENvbXBhbmllc0Zvcm0gb25BZGRjb21wYW5pZXNmb3JtPXt0b0RiSGFuZGxlcn0gLz5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVcGxvYWRpbmdDb21wYW5pZXNUb0RiO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJBZGRDb21wYW5pZXNGb3JtIiwiVXBsb2FkaW5nQ29tcGFuaWVzVG9EYiIsInRvRGJIYW5kbGVyIiwiY29tcGFueURhdGFPYmplY3QiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsInJlc3BvbmNlIiwianNvbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==