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
            children: "Line of maintainance"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("select", {
            id: "paintJob",
            required: true,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
              value: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
              value: "PaintJob",
              children: "PaintJob"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
              value: "Body Work",
              children: "Body Work"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
              value: "Motor Overhole",
              children: "Motor Overhole"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
              value: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
              value: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
              value: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
              value: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
              value: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
              value: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
              value: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
              value: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 13
          }, this), inValidIntro && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
            className: "error-text",
            children: " Please enter an Introduction "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: (_choreregistreation_AddChore_module_css__WEBPACK_IMPORTED_MODULE_5___default().control),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("label", {
            htmlFor: "choreintro",
            children: "Introduction"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 106,
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
            lineNumber: 107,
            columnNumber: 13
          }, this), inValidIntro && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
            className: "error-text",
            children: " Please enter an Introduction "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: (_choreregistreation_AddChore_module_css__WEBPACK_IMPORTED_MODULE_5___default().control),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("label", {
            htmlFor: "descrip",
            children: "Description"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 122,
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
            lineNumber: 123,
            columnNumber: 13
          }, this), inValiddetail && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
            className: "error-text",
            children: " Please enter the details"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: (_choreregistreation_AddChore_module_css__WEBPACK_IMPORTED_MODULE_5___default().action),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_ui_button_Button__WEBPACK_IMPORTED_MODULE_2__.default, {
            className: (_choreregistreation_AddChore_module_css__WEBPACK_IMPORTED_MODULE_5___default().button),
            children: "Add Chores"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 145,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 135,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvTWVjaGFuaWMuYjdmNjc2NmE1YjMyOWJkNTZiMTUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsU0FBU0ssYUFBVCxDQUF1QkMsS0FBdkIsRUFBOEI7QUFBQTs7QUFDNUIsbUJBT0lMLDJEQUFTLENBQUMsVUFBQ00sS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBTixPQUFpQixFQUE1QjtBQUFBLEdBQUQsQ0FQYjtBQUFBLE1BQ1NDLFNBRFQsY0FDRUYsS0FERjtBQUFBLE1BRVdHLFVBRlgsY0FFRUMsT0FGRjtBQUFBLE1BR1lDLFlBSFosY0FHRUMsUUFIRjtBQUFBLE1BSXNCQyxrQkFKdEIsY0FJRUMsa0JBSkY7QUFBQSxNQUtrQkMsU0FMbEIsY0FLRUMsY0FMRjtBQUFBLE1BTVNDLFVBTlQsY0FNRUMsS0FORjs7QUFTQSxvQkFPSWxCLDJEQUFTLENBQUMsVUFBQ00sS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBTixPQUFpQixFQUE1QjtBQUFBLEdBQUQsQ0FQYjtBQUFBLE1BQ1NZLGVBRFQsZUFDRWIsS0FERjtBQUFBLE1BRVdjLFdBRlgsZUFFRVYsT0FGRjtBQUFBLE1BR1lXLGFBSFosZUFHRVQsUUFIRjtBQUFBLE1BSXNCVSxtQkFKdEIsZUFJRVIsa0JBSkY7QUFBQSxNQUtrQlMsVUFMbEIsZUFLRVAsY0FMRjtBQUFBLE1BTVNRLFdBTlQsZUFNRU4sS0FORjs7QUFTQSxNQUFNTyxXQUFXLEdBQUd0Qiw2Q0FBTSxDQUFDLEVBQUQsQ0FBMUI7QUFDQSxNQUFNdUIsS0FBSyxHQUFHdkIsNkNBQU0sQ0FBQyxFQUFELENBQXBCO0FBRUEsTUFBSXdCLGNBQWMsR0FBRyxLQUFyQjs7QUFDQSxNQUFJbEIsVUFBVSxJQUFJVyxXQUFsQixFQUErQjtBQUM3Qk8sSUFBQUEsY0FBYyxHQUFHLElBQWpCO0FBQ0Q7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ZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2RhdGFGbG93L2Nob3JlcmVnaXN0cmVhdGlvbi9BZGRDaG9yZXNGb3JtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vICBpbXBvcnQgICAgJy4uL2NvbXBhbnlyZWdpc3RyYXRpb24vQWRkQ29tcGFuaWVzLmNzcydcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4uL2Nob3JlcmVnaXN0cmVhdGlvbi9BZGRDaG9yZS5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBVc2VySW5wdXQgZnJvbSBcIi4uLy4uL2hvb2tzL3VzZXItaW5wdXRzXCI7XHJcbmltcG9ydCBDYXJkIGZyb20gXCIuLi8uLi91aS9DYXJkXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uLy4uL3VpL2J1dHRvbi9CdXR0b25cIjtcclxuaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5mdW5jdGlvbiBBZGRjaG9yZXNmb3JtKHByb3BzKSB7XHJcbiAgY29uc3Qge1xyXG4gICAgdmFsdWU6IGludHJvRGF0YSxcclxuICAgIGlzVmFsaWQ6IHZhbGlkSW50cm8sXHJcbiAgICBoYXNFcnJvcjogaW5WYWxpZEludHJvLFxyXG4gICAgdmFsdWVDaGFuZ2VIYW5kbGVyOiBJbnRyb0NoYW5nZUhhbmRsZXIsXHJcbiAgICBvbmZvY3VzSGFuZGxlcjogYmx1ckludHJvLFxyXG4gICAgcmVzZXQ6IHJlc2V0SW50cm8sXHJcbiAgfSA9IFVzZXJJbnB1dCgodmFsdWUpID0+IHZhbHVlLnRyaW0oKSAhPT0gXCJcIik7XHJcblxyXG4gIGNvbnN0IHtcclxuICAgIHZhbHVlOiBkZXNjcmlwdGlvbkRhdGEsXHJcbiAgICBpc1ZhbGlkOiB2YWxpZGRldGFpbCxcclxuICAgIGhhc0Vycm9yOiBpblZhbGlkZGV0YWlsLFxyXG4gICAgdmFsdWVDaGFuZ2VIYW5kbGVyOiBkZXRhaWxDaGFuZ2VIYW5kbGVyLFxyXG4gICAgb25mb2N1c0hhbmRsZXI6IGJsdXJkZXRhaWwsXHJcbiAgICByZXNldDogcmVzZXRkZXRhaWwsXHJcbiAgfSA9IFVzZXJJbnB1dCgodmFsdWUpID0+IHZhbHVlLnRyaW0oKSAhPT0gXCJcIik7XHJcblxyXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gdXNlUmVmKFwiXCIpO1xyXG4gIGNvbnN0IGludHJvID0gdXNlUmVmKFwiXCIpO1xyXG5cclxuICBsZXQgZm9ybVZhbGlkYXRpb24gPSBmYWxzZTtcclxuICBpZiAodmFsaWRJbnRybyAmJiB2YWxpZGRldGFpbCkge1xyXG4gICAgZm9ybVZhbGlkYXRpb24gPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc3VibWl0SGFuZGxlcihldmVudCkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBsZXQgZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFpbnRKb2JcIik7XHJcbiAgICBsZXQgcGFpbnRKb2IgPSBlLnZhbHVlO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwidGhpcyBpcyBmcm9tIHRoZSBjaGVja0JveFwiICsgcGFpbnRKb2IpO1xyXG5cclxuICAgIGlmICghZm9ybVZhbGlkYXRpb24pIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNvbnN0IGNob3JlRGF0YU9iamVjdCA9IHtcclxuICAgIC8vICAgZGVzY3JpcHRpb25EYXRhLFxyXG4gICAgLy8gICBpbnRyb0RhdGEsXHJcbiAgICAvLyB9O1xyXG5cclxuICAgIGNvbnN0IGNob3JlRGF0YU9iamVjdCA9IHtcclxuICAgICAgZGVzY3JpcHRpb25EYXRhOiBkZXNjcmlwdGlvbi5jdXJyZW50LnZhbHVlLFxyXG4gICAgICBpbnRyb0RhdGE6IGludHJvLmN1cnJlbnQudmFsdWUsXHJcbiAgICB9O1xyXG4gICAgLy8gY29uc29sZS5sb2coY2hvcmVEYXRhT2JqZWN0KTtcclxuICAgIHByb3BzLm9uQWRkY2hvcmVzZm9ybShjaG9yZURhdGFPYmplY3QpO1xyXG5cclxuICAgIHJlc2V0SW50cm8oXCJcIik7XHJcbiAgICByZXNldGRldGFpbChcIlwiKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGludHJvSW5wdXRDbGFzc2VzID0gaW5WYWxpZEludHJvXHJcbiAgICA/IFwiZm9ybS1jb250cm9sIGludmFsaWRcIlxyXG4gICAgOiBcImZvcm0tY29udHJvbCBcIjtcclxuXHJcbiAgY29uc3QgZGV0YWlsSW5wdXRDbGFzc2VzID0gaW5WYWxpZGRldGFpbFxyXG4gICAgPyBcImZvcm0tY29udHJvbCBpbnZhbGlkXCJcclxuICAgIDogXCJmb3JtLWNvbnRyb2wgXCI7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FyZD5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e3N1Ym1pdEhhbmRsZXJ9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250cm9sfT5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjaG9yZWludHJvXCI+TGluZSBvZiBtYWludGFpbmFuY2U8L2xhYmVsPlxyXG4gICAgICAgICAgICA8c2VsZWN0IGlkPVwicGFpbnRKb2JcIiByZXF1aXJlZD5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlBhaW50Sm9iXCI+UGFpbnRKb2I8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQm9keSBXb3JrXCI+Qm9keSBXb3JrPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk1vdG9yIE92ZXJob2xlXCI+TW90b3IgT3ZlcmhvbGU8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj48L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj48L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPjwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgey8qIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgIHJvd3M9XCIyXCJcclxuICAgICAgICAgICAgICBpZD1cImNob3JlaW50cm9cIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2hvcnQgZXhwbGFuYXRpb24gb2YgdGhlIGNob3JlXCJcclxuICAgICAgICAgICAgICByZWY9e2ludHJvfVxyXG4gICAgICAgICAgICAgIG9uQmx1cj17Ymx1ckludHJvfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtJbnRyb0NoYW5nZUhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgdmFsdWU9e2ludHJvRGF0YX1cclxuICAgICAgICAgICAgPjwvdGV4dGFyZWE+ICovfVxyXG4gICAgICAgICAgICB7aW5WYWxpZEludHJvICYmIChcclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJlcnJvci10ZXh0XCI+IFBsZWFzZSBlbnRlciBhbiBJbnRyb2R1Y3Rpb24gPC9wPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udHJvbH0+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY2hvcmVpbnRyb1wiPkludHJvZHVjdGlvbjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgIHJvd3M9XCIyXCJcclxuICAgICAgICAgICAgICBpZD1cImNob3JlaW50cm9cIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2hvcnQgZXhwbGFuYXRpb24gb2YgdGhlIGNob3JlXCJcclxuICAgICAgICAgICAgICByZWY9e2ludHJvfVxyXG4gICAgICAgICAgICAgIG9uQmx1cj17Ymx1ckludHJvfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtJbnRyb0NoYW5nZUhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgdmFsdWU9e2ludHJvRGF0YX1cclxuICAgICAgICAgICAgPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgIHtpblZhbGlkSW50cm8gJiYgKFxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImVycm9yLXRleHRcIj4gUGxlYXNlIGVudGVyIGFuIEludHJvZHVjdGlvbiA8L3A+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250cm9sfT5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkZXNjcmlwXCI+RGVzY3JpcHRpb248L2xhYmVsPlxyXG4gICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICByb3dzPVwiNVwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJkZXNjcmlwXCJcclxuICAgICAgICAgICAgICByZWY9e2Rlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgIG9uQmx1cj17Ymx1cmRldGFpbH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZGV0YWlsQ2hhbmdlSGFuZGxlcn1cclxuICAgICAgICAgICAgICB2YWx1ZT17ZGVzY3JpcHRpb25EYXRhfVxyXG4gICAgICAgICAgICA+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAge2luVmFsaWRkZXRhaWwgJiYgKFxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImVycm9yLXRleHRcIj4gUGxlYXNlIGVudGVyIHRoZSBkZXRhaWxzPC9wPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5hY3Rpb259PlxyXG4gICAgICAgICAgICB7LyogPGJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufT5BZGQgQ2hvcmVzPC9idXR0b24+ICovfVxyXG5cclxuICAgICAgICAgICAgey8qIDx1bCBjbGFzc05hbWU9e2NsYXNzZXMuQ2hlY2tCb3hzfT5cclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImxhYmVsXCI+UGFpbnQgam9iIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJQYWludEpvYlwiIHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJ2ZWhpY2xlXCIgLz5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPiAqL31cclxuXHJcbiAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn0+QWRkIENob3JlczwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvQ2FyZD5cclxuICApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEFkZGNob3Jlc2Zvcm07XHJcbiJdLCJuYW1lcyI6WyJjbGFzc2VzIiwiVXNlcklucHV0IiwiQ2FyZCIsIkJ1dHRvbiIsInVzZVJlZiIsIkFkZGNob3Jlc2Zvcm0iLCJwcm9wcyIsInZhbHVlIiwidHJpbSIsImludHJvRGF0YSIsInZhbGlkSW50cm8iLCJpc1ZhbGlkIiwiaW5WYWxpZEludHJvIiwiaGFzRXJyb3IiLCJJbnRyb0NoYW5nZUhhbmRsZXIiLCJ2YWx1ZUNoYW5nZUhhbmRsZXIiLCJibHVySW50cm8iLCJvbmZvY3VzSGFuZGxlciIsInJlc2V0SW50cm8iLCJyZXNldCIsImRlc2NyaXB0aW9uRGF0YSIsInZhbGlkZGV0YWlsIiwiaW5WYWxpZGRldGFpbCIsImRldGFpbENoYW5nZUhhbmRsZXIiLCJibHVyZGV0YWlsIiwicmVzZXRkZXRhaWwiLCJkZXNjcmlwdGlvbiIsImludHJvIiwiZm9ybVZhbGlkYXRpb24iLCJzdWJtaXRIYW5kbGVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicGFpbnRKb2IiLCJjb25zb2xlIiwibG9nIiwiY2hvcmVEYXRhT2JqZWN0IiwiY3VycmVudCIsIm9uQWRkY2hvcmVzZm9ybSIsImludHJvSW5wdXRDbGFzc2VzIiwiZGV0YWlsSW5wdXRDbGFzc2VzIiwiY29udHJvbCIsImFjdGlvbiIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=