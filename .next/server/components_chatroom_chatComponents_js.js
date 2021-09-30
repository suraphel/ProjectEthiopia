exports.id = "components_chatroom_chatComponents_js";
exports.ids = ["components_chatroom_chatComponents_js"];
exports.modules = {

/***/ "./components/chatroom/AblyReactEffect.js":
/*!************************************************!*\
  !*** ./components/chatroom/AblyReactEffect.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useChannel": () => (/* binding */ useChannel)
/* harmony export */ });
/* harmony import */ var ably_promises__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ably/promises */ "ably/promises");
/* harmony import */ var ably_promises__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ably_promises__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
//offer company name and logo
// textarea for his offer
// hidden and appear
// states for rendering the page
//WebSocket connections
//Ably
//add and Id
//add message storage and retrival
//


const ably = new (ably_promises__WEBPACK_IMPORTED_MODULE_0___default().Realtime.Promise)({
  authUrl: "/api/createTokenRequest"
}); // console.log(ably);

function useChannel(channelName, callbackOnMessage) {
  const channel = ably.channels.get(channelName);

  const onMount = () => {
    channel.subscribe(msg => {
      callbackOnMessage(msg);
    });
  };

  const onUnMount = () => {
    channel.unsubscribe();
  };

  const useEffectHook = () => {
    onMount();
    return () => {
      onUnMount();
    };
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(useEffectHook);
  return [channel, ably];
}

/***/ }),

/***/ "./components/chatroom/chatComponents.js":
/*!***********************************************!*\
  !*** ./components/chatroom/chatComponents.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AblyReactEffect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AblyReactEffect */ "./components/chatroom/AblyReactEffect.js");
/* harmony import */ var _chatroom_chatComponents_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../chatroom/chatComponents.module.css */ "./components/chatroom/chatComponents.module.css");
/* harmony import */ var _chatroom_chatComponents_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_chatroom_chatComponents_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "A:\\Projects\\NextJs\\Balemoja_Next\\Balemoja\\components\\chatroom\\chatComponents.js";





const ChatComponent = () => {
  let inputBox = null;
  let messageEnd = null;
  const {
    0: messageText,
    1: setMessageText
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const {
    0: receivedMessages,
    1: setMessages
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const messageTextIsEmpty = messageText.trim().length === 0;
  const [channel, ably] = (0,_AblyReactEffect__WEBPACK_IMPORTED_MODULE_1__.useChannel)("chat-demo", message => {
    const history = receivedMessages.slice(-199);
    setMessages([...history, message]);
  });

  const sendChatMessage = messageText => {
    channel.publish({
      name: "chat-message",
      data: messageText
    });
    setMessageText("");
    inputBox.focus();
  };

  const handleFormSubmission = event => {
    event.preventDefault();
    sendChatMessage(messageText);
  };

  const handleKeyPress = event => {
    if (event.charCode !== 13 || messageTextIsEmpty) {
      return;
    }

    sendChatMessage(messageText);
    event.preventDefault();
  };

  const messages = receivedMessages.map((message, index) => {
    const author = message.connectionId === ably.connection.id ? "me" : "other";
    const milliseconds = new Date();
    const timeStamp = milliseconds.toDateString(); // function parseMillisecondsIntoReadableTime(milliseconds) {
    //   //Get hours from milliseconds
    //   var hours = milliseconds / (1000 * 60 * 60);
    //   var absoluteHours = Math.floor(hours);
    //   var h = absoluteHours > 9 ? absoluteHours : "0" + absoluteHours;
    //   //Get remainder from hours and convert to minutes
    //   var minutes = (hours - absoluteHours) * 60;
    //   var absoluteMinutes = Math.floor(minutes);
    //   var m = absoluteMinutes > 9 ? absoluteMinutes : "0" + absoluteMinutes;
    //   //Get remainder from minutes and convert to seconds
    //   var seconds = (minutes - absoluteMinutes) * 60;
    //   var absoluteSeconds = Math.floor(seconds);
    //   var s = absoluteSeconds > 9 ? absoluteSeconds : "0" + absoluteSeconds;
    //   return h + ":" + m + ":" + s;
    // }
    // var time = parseMillisecondsIntoReadableTime(milliseconds);
    // alert(time);
    // console.log(time);

    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
      className: (_chatroom_chatComponents_module_css__WEBPACK_IMPORTED_MODULE_3___default().message) // time={new Date().toString()}
      ,
      "data-author": author,
      children: message.data
    }, index, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }, undefined);
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    messageEnd.scrollIntoView({
      behaviour: "smooth"
    });
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: (_chatroom_chatComponents_module_css__WEBPACK_IMPORTED_MODULE_3___default().chatHolder),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: (_chatroom_chatComponents_module_css__WEBPACK_IMPORTED_MODULE_3___default().chatText),
      children: [messages, new Date().toDateString(), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        ref: element => {
          messageEnd = element;
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("form", {
      onSubmit: handleFormSubmission,
      className: (_chatroom_chatComponents_module_css__WEBPACK_IMPORTED_MODULE_3___default().form),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("textarea", {
        ref: element => {
          inputBox = element;
        },
        value: messageText,
        placeholder: "Type a message..." // time={new Date().toString()}
        ,
        onChange: e => setMessageText(e.target.value),
        onKeyPress: handleKeyPress,
        className: (_chatroom_chatComponents_module_css__WEBPACK_IMPORTED_MODULE_3___default().textarea)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
        type: "submit",
        className: (_chatroom_chatComponents_module_css__WEBPACK_IMPORTED_MODULE_3___default().button),
        disabled: messageTextIsEmpty,
        children: "Send"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 84,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChatComponent);

/***/ }),

/***/ "./components/chatroom/chatComponents.module.css":
/*!*******************************************************!*\
  !*** ./components/chatroom/chatComponents.module.css ***!
  \*******************************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"chatHolder": "chatComponents_chatHolder__2E1AX",
	"chatText": "chatComponents_chatText__3MREs",
	"form": "chatComponents_form__3rFIK",
	"textarea": "chatComponents_textarea__2UuLy",
	"button": "chatComponents_button__3eZyM",
	"message": "chatComponents_message__1dnoB"
};


/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50c19jaGF0cm9vbV9jaGF0Q29tcG9uZW50c19qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBLE1BQU1FLElBQUksR0FBRyxJQUFJRix1RUFBSixDQUEwQjtBQUFFSyxFQUFBQSxPQUFPLEVBQUU7QUFBWCxDQUExQixDQUFiLEVBRUE7O0FBRU8sU0FBU0MsVUFBVCxDQUFvQkMsV0FBcEIsRUFBaUNDLGlCQUFqQyxFQUFvRDtBQUN6RCxRQUFNQyxPQUFPLEdBQUdQLElBQUksQ0FBQ1EsUUFBTCxDQUFjQyxHQUFkLENBQWtCSixXQUFsQixDQUFoQjs7QUFFQSxRQUFNSyxPQUFPLEdBQUcsTUFBTTtBQUNwQkgsSUFBQUEsT0FBTyxDQUFDSSxTQUFSLENBQW1CQyxHQUFELElBQVM7QUFDekJOLE1BQUFBLGlCQUFpQixDQUFDTSxHQUFELENBQWpCO0FBQ0QsS0FGRDtBQUdELEdBSkQ7O0FBS0EsUUFBTUMsU0FBUyxHQUFHLE1BQU07QUFDdEJOLElBQUFBLE9BQU8sQ0FBQ08sV0FBUjtBQUNELEdBRkQ7O0FBSUEsUUFBTUMsYUFBYSxHQUFHLE1BQU07QUFDMUJMLElBQUFBLE9BQU87QUFDUCxXQUFPLE1BQU07QUFDWEcsTUFBQUEsU0FBUztBQUNWLEtBRkQ7QUFHRCxHQUxEOztBQU9BZCxFQUFBQSxnREFBUyxDQUFDZ0IsYUFBRCxDQUFUO0FBRUEsU0FBTyxDQUFDUixPQUFELEVBQVVQLElBQVYsQ0FBUDtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDRDtBQUNBO0FBQ0E7OztBQUVBLE1BQU1tQixhQUFhLEdBQUcsTUFBTTtBQUMxQixNQUFJQyxRQUFRLEdBQUcsSUFBZjtBQUNBLE1BQUlDLFVBQVUsR0FBRyxJQUFqQjtBQUVBLFFBQU07QUFBQSxPQUFDQyxXQUFEO0FBQUEsT0FBY0M7QUFBZCxNQUFnQ04sK0NBQVEsQ0FB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QUFHdUMsT0FBRCxJQUFhO0FBQ2hCckMsVUFBQUEsUUFBUSxHQUFHcUMsT0FBWDtBQUNELFNBSEg7QUFJRSxhQUFLLEVBQUVuQyxXQUpUO0FBS0UsbUJBQVcsRUFBQyxtQkFMZCxDQU1FO0FBTkY7QUFPRSxnQkFBUSxFQUFHcUMsQ0FBRCxJQUFPcEMsY0FBYyxDQUFDb0MsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FQakM7QUFRRSxrQkFBVSxFQUFFckIsY0FSZDtBQVNFLGlCQUFTLEVBQUV0QixxRkFBZTRDO0FBVDVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFZRTtBQUNFLFlBQUksRUFBQyxRQURQO0FBRUUsaUJBQVMsRUFBRTVDLG1GQUZiO0FBR0UsZ0JBQVEsRUFBRVEsa0JBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBaUNELENBL0dEOztBQWlIQSxpRUFBZVAsYUFBZjs7Ozs7Ozs7OztBQ3JIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYWxlbW9qYS8uL2NvbXBvbmVudHMvY2hhdHJvb20vQWJseVJlYWN0RWZmZWN0LmpzIiwid2VicGFjazovL2JhbGVtb2phLy4vY29tcG9uZW50cy9jaGF0cm9vbS9jaGF0Q29tcG9uZW50cy5qcyIsIndlYnBhY2s6Ly9iYWxlbW9qYS8uL2NvbXBvbmVudHMvY2hhdHJvb20vY2hhdENvbXBvbmVudHMubW9kdWxlLmNzcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvL29mZmVyIGNvbXBhbnkgbmFtZSBhbmQgbG9nb1xyXG4vLyB0ZXh0YXJlYSBmb3IgaGlzIG9mZmVyXHJcbi8vIGhpZGRlbiBhbmQgYXBwZWFyXHJcbi8vIHN0YXRlcyBmb3IgcmVuZGVyaW5nIHRoZSBwYWdlXHJcbi8vV2ViU29ja2V0IGNvbm5lY3Rpb25zXHJcbi8vQWJseVxyXG4vL2FkZCBhbmQgSWRcclxuLy9hZGQgbWVzc2FnZSBzdG9yYWdlIGFuZCByZXRyaXZhbFxyXG4vL1xyXG5cclxuaW1wb3J0IEFibHkgZnJvbSBcImFibHkvcHJvbWlzZXNcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBhYmx5ID0gbmV3IEFibHkuUmVhbHRpbWUuUHJvbWlzZSh7IGF1dGhVcmw6IFwiL2FwaS9jcmVhdGVUb2tlblJlcXVlc3RcIiB9KTtcclxuXHJcbi8vIGNvbnNvbGUubG9nKGFibHkpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUNoYW5uZWwoY2hhbm5lbE5hbWUsIGNhbGxiYWNrT25NZXNzYWdlKSB7XHJcbiAgY29uc3QgY2hhbm5lbCA9IGFibHkuY2hhbm5lbHMuZ2V0KGNoYW5uZWxOYW1lKTtcclxuXHJcbiAgY29uc3Qgb25Nb3VudCA9ICgpID0+IHtcclxuICAgIGNoYW5uZWwuc3Vic2NyaWJlKChtc2cpID0+IHtcclxuICAgICAgY2FsbGJhY2tPbk1lc3NhZ2UobXNnKTtcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgY29uc3Qgb25Vbk1vdW50ID0gKCkgPT4ge1xyXG4gICAgY2hhbm5lbC51bnN1YnNjcmliZSgpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHVzZUVmZmVjdEhvb2sgPSAoKSA9PiB7XHJcbiAgICBvbk1vdW50KCk7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBvblVuTW91bnQoKTtcclxuICAgIH07XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KHVzZUVmZmVjdEhvb2spO1xyXG5cclxuICByZXR1cm4gW2NoYW5uZWwsIGFibHldO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZUNoYW5uZWwgfSBmcm9tIFwiLi9BYmx5UmVhY3RFZmZlY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vY2hhdHJvb20vY2hhdENvbXBvbmVudHMubW9kdWxlLmNzc1wiO1xyXG5cclxuY29uc3QgQ2hhdENvbXBvbmVudCA9ICgpID0+IHtcclxuICBsZXQgaW5wdXRCb3ggPSBudWxsO1xyXG4gIGxldCBtZXNzYWdlRW5kID0gbnVsbDtcclxuXHJcbiAgY29uc3QgW21lc3NhZ2VUZXh0LCBzZXRNZXNzYWdlVGV4dF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcmVjZWl2ZWRNZXNzYWdlcywgc2V0TWVzc2FnZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IG1lc3NhZ2VUZXh0SXNFbXB0eSA9IG1lc3NhZ2VUZXh0LnRyaW0oKS5sZW5ndGggPT09IDA7XHJcblxyXG4gIGNvbnN0IFtjaGFubmVsLCBhYmx5XSA9IHVzZUNoYW5uZWwoXCJjaGF0LWRlbW9cIiwgKG1lc3NhZ2UpID0+IHtcclxuICAgIGNvbnN0IGhpc3RvcnkgPSByZWNlaXZlZE1lc3NhZ2VzLnNsaWNlKC0xOTkpO1xyXG4gICAgc2V0TWVzc2FnZXMoWy4uLmhpc3RvcnksIG1lc3NhZ2VdKTtcclxuICB9KTtcclxuXHJcbiAgY29uc3Qgc2VuZENoYXRNZXNzYWdlID0gKG1lc3NhZ2VUZXh0KSA9PiB7XHJcbiAgICBjaGFubmVsLnB1Ymxpc2goeyBuYW1lOiBcImNoYXQtbWVzc2FnZVwiLCBkYXRhOiBtZXNzYWdlVGV4dCB9KTtcclxuICAgIHNldE1lc3NhZ2VUZXh0KFwiXCIpO1xyXG4gICAgaW5wdXRCb3guZm9jdXMoKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVGb3JtU3VibWlzc2lvbiA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNlbmRDaGF0TWVzc2FnZShtZXNzYWdlVGV4dCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlS2V5UHJlc3MgPSAoZXZlbnQpID0+IHtcclxuICAgIGlmIChldmVudC5jaGFyQ29kZSAhPT0gMTMgfHwgbWVzc2FnZVRleHRJc0VtcHR5KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHNlbmRDaGF0TWVzc2FnZShtZXNzYWdlVGV4dCk7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG1lc3NhZ2VzID0gcmVjZWl2ZWRNZXNzYWdlcy5tYXAoKG1lc3NhZ2UsIGluZGV4KSA9PiB7XHJcbiAgICBjb25zdCBhdXRob3IgPSBtZXNzYWdlLmNvbm5lY3Rpb25JZCA9PT0gYWJseS5jb25uZWN0aW9uLmlkID8gXCJtZVwiIDogXCJvdGhlclwiO1xyXG5cclxuICAgIGNvbnN0IG1pbGxpc2Vjb25kcyA9IG5ldyBEYXRlKCk7XHJcbiAgICBjb25zdCB0aW1lU3RhbXAgPSBtaWxsaXNlY29uZHMudG9EYXRlU3RyaW5nKCk7XHJcblxyXG4gICAgLy8gZnVuY3Rpb24gcGFyc2VNaWxsaXNlY29uZHNJbnRvUmVhZGFibGVUaW1lKG1pbGxpc2Vjb25kcykge1xyXG4gICAgLy8gICAvL0dldCBob3VycyBmcm9tIG1pbGxpc2Vjb25kc1xyXG4gICAgLy8gICB2YXIgaG91cnMgPSBtaWxsaXNlY29uZHMgLyAoMTAwMCAqIDYwICogNjApO1xyXG4gICAgLy8gICB2YXIgYWJzb2x1dGVIb3VycyA9IE1hdGguZmxvb3IoaG91cnMpO1xyXG4gICAgLy8gICB2YXIgaCA9IGFic29sdXRlSG91cnMgPiA5ID8gYWJzb2x1dGVIb3VycyA6IFwiMFwiICsgYWJzb2x1dGVIb3VycztcclxuXHJcbiAgICAvLyAgIC8vR2V0IHJlbWFpbmRlciBmcm9tIGhvdXJzIGFuZCBjb252ZXJ0IHRvIG1pbnV0ZXNcclxuICAgIC8vICAgdmFyIG1pbnV0ZXMgPSAoaG91cnMgLSBhYnNvbHV0ZUhvdXJzKSAqIDYwO1xyXG4gICAgLy8gICB2YXIgYWJzb2x1dGVNaW51dGVzID0gTWF0aC5mbG9vcihtaW51dGVzKTtcclxuICAgIC8vICAgdmFyIG0gPSBhYnNvbHV0ZU1pbnV0ZXMgPiA5ID8gYWJzb2x1dGVNaW51dGVzIDogXCIwXCIgKyBhYnNvbHV0ZU1pbnV0ZXM7XHJcblxyXG4gICAgLy8gICAvL0dldCByZW1haW5kZXIgZnJvbSBtaW51dGVzIGFuZCBjb252ZXJ0IHRvIHNlY29uZHNcclxuICAgIC8vICAgdmFyIHNlY29uZHMgPSAobWludXRlcyAtIGFic29sdXRlTWludXRlcykgKiA2MDtcclxuICAgIC8vICAgdmFyIGFic29sdXRlU2Vjb25kcyA9IE1hdGguZmxvb3Ioc2Vjb25kcyk7XHJcbiAgICAvLyAgIHZhciBzID0gYWJzb2x1dGVTZWNvbmRzID4gOSA/IGFic29sdXRlU2Vjb25kcyA6IFwiMFwiICsgYWJzb2x1dGVTZWNvbmRzO1xyXG5cclxuICAgIC8vICAgcmV0dXJuIGggKyBcIjpcIiArIG0gKyBcIjpcIiArIHM7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gdmFyIHRpbWUgPSBwYXJzZU1pbGxpc2Vjb25kc0ludG9SZWFkYWJsZVRpbWUobWlsbGlzZWNvbmRzKTtcclxuXHJcbiAgICAvLyBhbGVydCh0aW1lKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHRpbWUpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxzcGFuXHJcbiAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5tZXNzYWdlfVxyXG4gICAgICAgIC8vIHRpbWU9e25ldyBEYXRlKCkudG9TdHJpbmcoKX1cclxuICAgICAgICBkYXRhLWF1dGhvcj17YXV0aG9yfVxyXG4gICAgICA+XHJcbiAgICAgICAge21lc3NhZ2UuZGF0YX1cclxuICAgICAgPC9zcGFuPlxyXG4gICAgKTtcclxuICB9KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIG1lc3NhZ2VFbmQuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvdXI6IFwic21vb3RoXCIgfSk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNoYXRIb2xkZXJ9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNoYXRUZXh0fT5cclxuICAgICAgICB7bWVzc2FnZXN9XHJcbiAgICAgICAge25ldyBEYXRlKCkudG9EYXRlU3RyaW5nKCl9XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgcmVmPXsoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICBtZXNzYWdlRW5kID0gZWxlbWVudDtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZUZvcm1TdWJtaXNzaW9ufSBjbGFzc05hbWU9e3N0eWxlcy5mb3JtfT5cclxuICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgIHJlZj17KGVsZW1lbnQpID0+IHtcclxuICAgICAgICAgICAgaW5wdXRCb3ggPSBlbGVtZW50O1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIHZhbHVlPXttZXNzYWdlVGV4dH1cclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSBhIG1lc3NhZ2UuLi5cIlxyXG4gICAgICAgICAgLy8gdGltZT17bmV3IERhdGUoKS50b1N0cmluZygpfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRNZXNzYWdlVGV4dChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICBvbktleVByZXNzPXtoYW5kbGVLZXlQcmVzc31cclxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnRleHRhcmVhfVxyXG4gICAgICAgID48L3RleHRhcmVhPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufVxyXG4gICAgICAgICAgZGlzYWJsZWQ9e21lc3NhZ2VUZXh0SXNFbXB0eX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBTZW5kXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGF0Q29tcG9uZW50O1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjaGF0SG9sZGVyXCI6IFwiY2hhdENvbXBvbmVudHNfY2hhdEhvbGRlcl9fMkUxQVhcIixcblx0XCJjaGF0VGV4dFwiOiBcImNoYXRDb21wb25lbnRzX2NoYXRUZXh0X18zTVJFc1wiLFxuXHRcImZvcm1cIjogXCJjaGF0Q29tcG9uZW50c19mb3JtX18zckZJS1wiLFxuXHRcInRleHRhcmVhXCI6IFwiY2hhdENvbXBvbmVudHNfdGV4dGFyZWFfXzJVdUx5XCIsXG5cdFwiYnV0dG9uXCI6IFwiY2hhdENvbXBvbmVudHNfYnV0dG9uX18zZVp5TVwiLFxuXHRcIm1lc3NhZ2VcIjogXCJjaGF0Q29tcG9uZW50c19tZXNzYWdlX18xZG5vQlwiXG59O1xuIl0sIm5hbWVzIjpbIkFibHkiLCJ1c2VFZmZlY3QiLCJhYmx5IiwiUmVhbHRpbWUiLCJQcm9taXNlIiwiYXV0aFVybCIsInVzZUNoYW5uZWwiLCJjaGFubmVsTmFtZSIsImNhbGxiYWNrT25NZXNzYWdlIiwiY2hhbm5lbCIsImNoYW5uZWxzIiwiZ2V0Iiwib25Nb3VudCIsInN1YnNjcmliZSIsIm1zZyIsIm9uVW5Nb3VudCIsInVuc3Vic2NyaWJlIiwidXNlRWZmZWN0SG9vayIsIlJlYWN0IiwidXNlU3RhdGUiLCJzdHlsZXMiLCJDaGF0Q29tcG9uZW50IiwiaW5wdXRCb3giLCJtZXNzYWdlRW5kIiwibWVzc2FnZVRleHQiLCJzZXRNZXNzYWdlVGV4dCIsInJlY2VpdmVkTWVzc2FnZXMiLCJzZXRNZXNzYWdlcyIsIm1lc3NhZ2VUZXh0SXNFbXB0eSIsInRyaW0iLCJsZW5ndGgiLCJtZXNzYWdlIiwiaGlzdG9yeSIsInNsaWNlIiwic2VuZENoYXRNZXNzYWdlIiwicHVibGlzaCIsIm5hbWUiLCJkYXRhIiwiZm9jdXMiLCJoYW5kbGVGb3JtU3VibWlzc2lvbiIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJoYW5kbGVLZXlQcmVzcyIsImNoYXJDb2RlIiwibWVzc2FnZXMiLCJtYXAiLCJpbmRleCIsImF1dGhvciIsImNvbm5lY3Rpb25JZCIsImNvbm5lY3Rpb24iLCJpZCIsIm1pbGxpc2Vjb25kcyIsIkRhdGUiLCJ0aW1lU3RhbXAiLCJ0b0RhdGVTdHJpbmciLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW91ciIsImNoYXRIb2xkZXIiLCJjaGF0VGV4dCIsImVsZW1lbnQiLCJmb3JtIiwiZSIsInRhcmdldCIsInZhbHVlIiwidGV4dGFyZWEiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9