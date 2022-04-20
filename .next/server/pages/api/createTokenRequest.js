"use strict";
(() => {
var exports = {};
exports.id = "pages/api/createTokenRequest";
exports.ids = ["pages/api/createTokenRequest"];
exports.modules = {

/***/ "./pages/api/createTokenRequest.js":
/*!*****************************************!*\
  !*** ./pages/api/createTokenRequest.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var ably_promises__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ably/promises */ "ably/promises");
/* harmony import */ var ably_promises__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ably_promises__WEBPACK_IMPORTED_MODULE_0__);


__webpack_require__(/*! dotenv */ "dotenv").config();

let api = process.env.ABLY_API_KEY; // console.log(api);

async function handler(req, res) {
  const client = new (ably_promises__WEBPACK_IMPORTED_MODULE_0___default().Realtime)(process.env.ABLY_API_KEY);
  const tokenRequestData = await client.auth.createTokenRequest({
    clientId: "ably-nextjs-demo"
  });
  res.status(200).json(tokenRequestData);
}

/***/ }),

/***/ "ably/promises":
/*!********************************!*\
  !*** external "ably/promises" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("ably/promises");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/createTokenRequest.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYXBpL2NyZWF0ZVRva2VuUmVxdWVzdC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUFDLGtEQUFBOztBQUNBLElBQUlFLEdBQUcsR0FBR0MsT0FBTyxDQUFDQyxHQUFSLENBQVlDLFlBQXRCLEVBQ0E7O0FBRWUsZUFBZUMsT0FBZixDQUF1QkMsR0FBdkIsRUFBNEJDLEdBQTVCLEVBQWlDO0FBQzlDLFFBQU1DLE1BQU0sR0FBRyxJQUFJViwrREFBSixDQUFrQkksT0FBTyxDQUFDQyxHQUFSLENBQVlDLFlBQTlCLENBQWY7QUFDQSxRQUFNTSxnQkFBZ0IsR0FBRyxNQUFNRixNQUFNLENBQUNHLElBQVAsQ0FBWUMsa0JBQVosQ0FBK0I7QUFDNURDLElBQUFBLFFBQVEsRUFBRTtBQURrRCxHQUEvQixDQUEvQjtBQUdBTixFQUFBQSxHQUFHLENBQUNPLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQkwsZ0JBQXJCO0FBQ0Q7Ozs7Ozs7Ozs7QUNaRDs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmFsZW1vamEvLi9wYWdlcy9hcGkvY3JlYXRlVG9rZW5SZXF1ZXN0LmpzIiwid2VicGFjazovL2JhbGVtb2phL2V4dGVybmFsIFwiYWJseS9wcm9taXNlc1wiIiwid2VicGFjazovL2JhbGVtb2phL2V4dGVybmFsIFwiZG90ZW52XCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFibHkgZnJvbSBcImFibHkvcHJvbWlzZXNcIjtcclxuXHJcbnJlcXVpcmUoXCJkb3RlbnZcIikuY29uZmlnKCk7XHJcbmxldCBhcGkgPSBwcm9jZXNzLmVudi5BQkxZX0FQSV9LRVk7XHJcbi8vIGNvbnNvbGUubG9nKGFwaSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgY29uc3QgY2xpZW50ID0gbmV3IEFibHkuUmVhbHRpbWUocHJvY2Vzcy5lbnYuQUJMWV9BUElfS0VZKTtcclxuICBjb25zdCB0b2tlblJlcXVlc3REYXRhID0gYXdhaXQgY2xpZW50LmF1dGguY3JlYXRlVG9rZW5SZXF1ZXN0KHtcclxuICAgIGNsaWVudElkOiBcImFibHktbmV4dGpzLWRlbW9cIixcclxuICB9KTtcclxuICByZXMuc3RhdHVzKDIwMCkuanNvbih0b2tlblJlcXVlc3REYXRhKTtcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhYmx5L3Byb21pc2VzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRvdGVudlwiKTsiXSwibmFtZXMiOlsiQWJseSIsInJlcXVpcmUiLCJjb25maWciLCJhcGkiLCJwcm9jZXNzIiwiZW52IiwiQUJMWV9BUElfS0VZIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImNsaWVudCIsIlJlYWx0aW1lIiwidG9rZW5SZXF1ZXN0RGF0YSIsImF1dGgiLCJjcmVhdGVUb2tlblJlcXVlc3QiLCJjbGllbnRJZCIsInN0YXR1cyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9