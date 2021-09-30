"use strict";
self["webpackHotUpdate_N_E"]("pages/FetchingFromDB",{

/***/ "./pages/FetchingFromDB.js":
/*!*********************************!*\
  !*** ./pages/FetchingFromDB.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var A_Projects_NextJs_Balemoja_Next_Balemoja_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var A_Projects_NextJs_Balemoja_Next_Balemoja_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var A_Projects_NextJs_Balemoja_Next_Balemoja_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(A_Projects_NextJs_Balemoja_Next_Balemoja_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_dataFlow_choreregistreation_choreList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/dataFlow/choreregistreation/choreList */ "./components/dataFlow/choreregistreation/choreList.js");
/* harmony import */ var _components_Token_LogInAuthentication___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Token/LogInAuthentication  */ "./components/Token/LogInAuthentication .js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "A:\\Projects\\NextJs\\Balemoja_Next\\Balemoja\\pages\\FetchingFromDB.js",
    _s = $RefreshSig$();





 // import Addchoresform from '../choreregistreation/AddChoresForm';
// import '../../App.css';



function FetchingFromDB() {
  _s();

  //   const authCtx = useContext(AuthenticationContext);
  //   const IsloggedIn = authCtx.loggedIn;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
      chores = _useState[0],
      setchores = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      isLoading = _useState2[0],
      setIsLoading = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),
      error = _useState3[0],
      setError = _useState3[1];

  var fetchchoresHandler = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)( /*#__PURE__*/(0,A_Projects_NextJs_Balemoja_Next_Balemoja_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/A_Projects_NextJs_Balemoja_Next_Balemoja_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
    var response, data, loadedChores, key;
    return A_Projects_NextJs_Balemoja_Next_Balemoja_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            setIsLoading(true);
            setError(null);
            _context.prev = 2;
            _context.next = 5;
            return fetch("https://balemoja-9c5e6-default-rtdb.europe-west1.firebasedatabase.app/Chores.json");

          case 5:
            response = _context.sent;

            if (response.ok) {
              _context.next = 8;
              break;
            }

            throw new Error("Something new has gone wrong!");

          case 8:
            _context.next = 10;
            return response.json();

          case 10:
            data = _context.sent;
            // console.log(data); //  data is here an object, Id = keys and
            loadedChores = [];

            for (key in data) {
              loadedChores.push({
                id: key,
                descriptionData: data[key].descriptionData,
                introData: data[key].introData,
                lineOfBusiness: data[key].lineOfBusiness // introData: data[key].introData

              }); // console.log(data);
            }

            setchores(loadedChores);
            _context.next = 19;
            break;

          case 16:
            _context.prev = 16;
            _context.t0 = _context["catch"](2);
            setError(_context.t0.message);

          case 19:
            setIsLoading(false);

          case 20:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 16]]);
  })), []);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    fetchchoresHandler();
  }, [fetchchoresHandler]);

  var content = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
    children: "Found no chores."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 17
  }, this);

  if (chores.length > 0) {
    content = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_dataFlow_choreregistreation_choreList__WEBPACK_IMPORTED_MODULE_3__.default, {
      chores: chores
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 15
    }, this);
  }

  if (error) {
    content = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
      children: error
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 15
    }, this);
  }

  if (isLoading) {
    content = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
      children: "Loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 15
    }, this);
  }

  console.log(content);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("section", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("section", {
      children: content
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 70,
    columnNumber: 5
  }, this);
}

_s(FetchingFromDB, "GlpsZZ9OyY91OJJUPGuJlcHUJ/g=");

_c = FetchingFromDB;
/* harmony default export */ __webpack_exports__["default"] = (FetchingFromDB);
/*


  // time to upload to the fire base db
  // async function AddchoreHandler(choreDataObject) {
  // 	const responce = await fetch('https://balmoja-49d90-default-rtdb.europe-west1.firebasedatabase.app/names.json',
  // 	{
  // 		method:'POST',
  // 		body:JSON.stringify(choreDataObject),
  // 		headers:{
  // 			'Content-Type' : 'application/json'}
  // 		}
  // 	);
  // 	const data = await responce.json();
  // 	console.log(data);
  // }
import React, { useState, useEffect, useCallback } from 'react';

import ChoresList from '../companyregistration/CompanyList';


function FetchingFromDB() {
	 const [chores, setChore ] = useState([]);
	 const [isLoading, setIsLoading] = useState(false);
	 const [error, setError] = useState(null);

	const fetchChoreHandler = useCallback(async () => {
		setIsLoading(true);
		setError(null);
		try {
			const response = await fetch('https://balmoja-49d90-default-rtdb.europe-west1.firebasedatabase.app/names.json');
			if (!response.ok) {
			  throw new Error('Something went wrong!');
			}
			const data = await response.json();

			const disectedData = [];

			for(const key in data){
				disectedData.push({
					id:key,
					descriptionData:data[key].descriptionData, 
					introData:data[key].introData,
				})
			}	

			setChore(disectedData);
		} 
		catch (error) {
			setError(error.message);
		}
		setIsLoading(false);
	}, []);

	// useEffect(
	// 	() => {
	// 		fetchChoreHandler();
	// 	},
	// 	[ fetchChoreHandler ]
	// );


	let content = <p>Found no chores.</p>;

	if (chores.length > 0) {
		content = <ChoresList chores={chores} />;
	}

	if (error) {
		content = <p>{error}</p>;
	}

	if (isLoading) {
		content = <p>Loading...</p>;
	}

	return (
		<React.Fragment>
		
			<section>
				<button onClick={fetchChoreHandler}>Fetch Chores</button>
			</section>
			<section>{content}</section>
		</React.Fragment>
	);
}

export default FetchingFromDB();




//import React, { useState, useEffect, useCallback } from 'react';

import ChoresList from './components/ChoresList'
import Addchore from './components/Addchore';
import './App.css';

function App() {
	 const [ chores, setchores ] = useState([]);
	 const [isLoading, setIsLoading] = useState(false);
	 const [error, setError] = useState(null);

	const fetchchoresHandler = useCallback(async () => {
		setIsLoading(true);
		setError(null);
		try {		
			const response = await fetch('https://balmoja-49d90-default-rtdb.europe-west1.firebasedatabase.app/names.json');
			if (!response.ok) {
			  throw new Error('Something new has gone wrong!');
			}

			const data = await response.json();
			// console.log(data); //  data is here an object, Id = keys and  

			const loadedChores = []; 

			for(const key in data){
				loadedChores.push({
					id:key,
					title: data[key].title, 
					openingText: data[key].openingText, 
					releaseDate: data[key].releaseDate
				})
			}

			
			setchores(loadedChores);
		} catch (error) {
			setError(error.message);
		}
		setIsLoading(false);
	}, []);

	useEffect(
		() => {
			fetchchoresHandler();
		},
		[ fetchchoresHandler ]
	);

	// time to upload to the fire base db 
	// async function AddchoreHandler(choreData) {
	// 	const responce = await fetch('https://balmoja-49d90-default-rtdb.europe-west1.firebasedatabase.app/names.json', 
	// 	{
	// 		method:'POST',
	// 		body:JSON.stringify(choreData),
	// 		headers:{
	// 			'Content-Type' : 'application/json'}		
	// 		}
	// 	);
	// 	const data = await responce.json();
	// 	console.log(data); 
	// }

	let content = <p>Found no chores.</p>;

	if (chores.length > 0) {
		content = <ChoresList chores={chores} />;
	}

	if (error) {
		content = <p>{error}</p>;
	}

	if (isLoading) {
		content = <p>Loading...</p>;
	}

	return (
		<React.Fragment>
			<section>
				 <Addchore onAddchore={AddchoreHandler} /> 
			</section>
			<section>
			
				<button onClick={fetchchoresHandler}>Fetch chores</button>
			</section>
			<section>{content}</section>
		</React.Fragment>
	);
}
export default App;

*/

/*
import React, { useState, useEffect, useCallback } from 'react';

import choresList from './components/choresList';
import Addchore from './components/Addchore';
import './App.css';

function App() {
	const [ chores, setchores ] = useState([]);
	 const [isLoading, setIsLoading] = useState(false);
	 const [error, setError] = useState(null);

	const fetchchoresHandler = useCallback(async () => {
		setIsLoading(true);
		setError(null);
		try {
			const response = await fetch('https://swapi.dev/api/films');
			if (!response.ok) {
			  throw new Error('Something went wrong!');
			}

			const data = await response.json();

			const transformedchores = data.results.map((choreData) => {
				return {
					id: choreData.episode_id,
					title: choreData.director,
					openingText: choreData.opening_crawl,
					releaseDate: choreData.release_date
				};
			});
			setchores(transformedchores);
		} catch (error) {
			setError(error.message);
		}
		setIsLoading(false);
	}, []);

	useEffect(
		() => {
			fetchchoresHandler();
		},
		[ fetchchoresHandler ]
	);

	function AddchoreHandler(chore) {
		console.log(chore);
	}

	let content = <p>Found no chores.</p>;

	if (chores.length > 0) {
		content = <choresList chores={chores} />;
	}

	if (error) {
		content = <p>{error}</p>;
	}

	if (isLoading) {
		content = <p>Loading...</p>;
	}

	return (
		<React.Fragment>
			<section>
				<Addchore onAddchore={AddchoreHandler} />
			</section>
			<section>
				<button onClick={fetchchoresHandler}>Fetch chores</button>
			</section>
			<section>{content}</section>
		</React.Fragment>
	);
}

export default App;



*/

var _c;

$RefreshReg$(_c, "FetchingFromDB");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvRmV0Y2hpbmdGcm9tREIuMmZkZDNhMDBlYzU4YmI5ZDE0YmYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtDQUVBO0FBQ0E7Ozs7QUFFQSxTQUFTTyxjQUFULEdBQTBCO0FBQUE7O0FBQ3hCO0FBQ0E7QUFFQSxrQkFBNEJOLCtDQUFRLENBQUMsRUFBRCxDQUFwQztBQUFBLE1BQU9PLE1BQVA7QUFBQSxNQUFlQyxTQUFmOztBQUNBLG1CQUFrQ1IsK0NBQVEsQ0FBQyxLQUFELENBQTFDO0FBQUEsTUFBT1MsU0FBUDtBQUFBLE1BQWtCQyxZQUFsQjs7QUFDQSxtQkFBMEJWLCtDQUFRLENBQUMsSUFBRCxDQUFsQztBQUFBLE1BQU9XLEtBQVA7QUFBQSxNQUFjQyxRQUFkOztBQUVBLE1BQU1DLGtCQUFrQixHQUFHWCxrREFBVyxtU0FBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDckNRLFlBQUFBLFlBQVksQ0FBQyxJQUFELENBQVo7QUFDQUUsWUFBQUEsUUFBUSxDQUFDLElBQUQsQ0FBUjtBQUZxQztBQUFBO0FBQUEsbUJBSVpFLEtBQUssQ0FDMUIsbUZBRDBCLENBSk87O0FBQUE7QUFJN0JDLFlBQUFBLFFBSjZCOztBQUFBLGdCQU85QkEsUUFBUSxDQUFDQyxFQVBxQjtBQUFBO0FBQUE7QUFBQTs7QUFBQSxrQkFRM0IsSUFBSUMsS0FBSixDQUFVLCtCQUFWLENBUjJCOztBQUFBO0FBQUE7QUFBQSxtQkFXaEJGLFFBQVEsQ0FBQ0csSUFBVCxFQVhnQjs7QUFBQTtBQVc3QkMsWUFBQUEsSUFYNkI7QUFZbkM7QUFFTUMsWUFBQUEsWUFkNkIsR0FjZCxFQWRjOztBQWdCbkMsaUJBQVdDLEdBQVgsSUFBa0JGLElBQWxCLEVBQXdCO0FBQ3RCQyxjQUFBQSxZQUFZLENBQUNFLElBQWIsQ0FBa0I7QUFDaEJDLGdCQUFBQSxFQUFFLEVBQUVGLEdBRFk7QUFFaEJHLGdCQUFBQSxlQUFlLEVBQUVMLElBQUksQ0FBQ0UsR0FBRCxDQUFKLENBQVVHLGVBRlg7QUFHaEJDLGdCQUFBQSxTQUFTLEVBQUVOLElBQUksQ0FBQ0UsR0FBRCxDQUFKLENBQVVJLFNBSEw7QUFJaEJDLGdCQUFBQSxjQUFjLEVBQUVQLElBQUksQ0FBQ0UsR0FBRCxDQUFKLENBQVVLLGNBSlYsQ0FLaEI7O0FBTGdCLGVBQWxCLEVBRHNCLENBUXRCO0FBQ0Q7O0FBRURsQixZQUFBQSxTQUFTLENBQUNZLFlBQUQsQ0FBVDtBQTNCbUM7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUE2Qm5DUixZQUFBQSxRQUFRLENBQUMsWUFBTWUsT0FBUCxDQUFSOztBQTdCbUM7QUErQnJDakIsWUFBQUEsWUFBWSxDQUFDLEtBQUQsQ0FBWjs7QUEvQnFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUQsSUFnQ25DLEVBaENtQyxDQUF0QztBQWtDQVQsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2RZLElBQUFBLGtCQUFrQjtBQUNuQixHQUZRLEVBRU4sQ0FBQ0Esa0JBQUQsQ0FGTSxDQUFUOztBQUlBLE1BQUllLE9BQU8sZ0JBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBZDs7QUFFQSxNQUFJckIsTUFBTSxDQUFDc0IsTUFBUCxHQUFnQixDQUFwQixFQUF1QjtBQUNyQkQsSUFBQUEsT0FBTyxnQkFBRyw4REFBQyxzRkFBRDtBQUFZLFlBQU0sRUFBRXJCO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBVjtBQUNEOztBQUVELE1BQUlJLEtBQUosRUFBVztBQUNUaUIsSUFBQUEsT0FBTyxnQkFBRztBQUFBLGdCQUFJakI7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVY7QUFDRDs7QUFFRCxNQUFJRixTQUFKLEVBQWU7QUFDYm1CLElBQUFBLE9BQU8sZ0JBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBVjtBQUNEOztBQUNERSxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUgsT0FBWjtBQUNBLHNCQUNFLDhEQUFDLHVEQUFEO0FBQUEsNEJBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGLGVBU0U7QUFBQSxnQkFBVUE7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFhRDs7R0F6RVF0Qjs7S0FBQUE7QUEyRVQsK0RBQWVBLGNBQWY7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9GZXRjaGluZ0Zyb21EQi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IENob3Jlc0xpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvZGF0YUZsb3cvY2hvcmVyZWdpc3RyZWF0aW9uL2Nob3JlTGlzdFwiO1xyXG5pbXBvcnQgQXV0aGVudGljYXRpb25Db250ZXh0IGZyb20gXCIuLi9jb21wb25lbnRzL1Rva2VuL0xvZ0luQXV0aGVudGljYXRpb24gXCI7XHJcbi8vIGltcG9ydCBBZGRjaG9yZXNmb3JtIGZyb20gJy4uL2Nob3JlcmVnaXN0cmVhdGlvbi9BZGRDaG9yZXNGb3JtJztcclxuLy8gaW1wb3J0ICcuLi8uLi9BcHAuY3NzJztcclxuXHJcbmZ1bmN0aW9uIEZldGNoaW5nRnJvbURCKCkge1xyXG4gIC8vICAgY29uc3QgYXV0aEN0eCA9IHVzZUNvbnRleHQoQXV0aGVudGljYXRpb25Db250ZXh0KTtcclxuICAvLyAgIGNvbnN0IElzbG9nZ2VkSW4gPSBhdXRoQ3R4LmxvZ2dlZEluO1xyXG5cclxuICBjb25zdCBbY2hvcmVzLCBzZXRjaG9yZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgY29uc3QgZmV0Y2hjaG9yZXNIYW5kbGVyID0gdXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xyXG4gICAgc2V0SXNMb2FkaW5nKHRydWUpO1xyXG4gICAgc2V0RXJyb3IobnVsbCk7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICAgIFwiaHR0cHM6Ly9iYWxlbW9qYS05YzVlNi1kZWZhdWx0LXJ0ZGIuZXVyb3BlLXdlc3QxLmZpcmViYXNlZGF0YWJhc2UuYXBwL0Nob3Jlcy5qc29uXCJcclxuICAgICAgKTtcclxuICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlNvbWV0aGluZyBuZXcgaGFzIGdvbmUgd3JvbmchXCIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTsgLy8gIGRhdGEgaXMgaGVyZSBhbiBvYmplY3QsIElkID0ga2V5cyBhbmRcclxuXHJcbiAgICAgIGNvbnN0IGxvYWRlZENob3JlcyA9IFtdO1xyXG5cclxuICAgICAgZm9yIChjb25zdCBrZXkgaW4gZGF0YSkge1xyXG4gICAgICAgIGxvYWRlZENob3Jlcy5wdXNoKHtcclxuICAgICAgICAgIGlkOiBrZXksXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbkRhdGE6IGRhdGFba2V5XS5kZXNjcmlwdGlvbkRhdGEsXHJcbiAgICAgICAgICBpbnRyb0RhdGE6IGRhdGFba2V5XS5pbnRyb0RhdGEsXHJcbiAgICAgICAgICBsaW5lT2ZCdXNpbmVzczogZGF0YVtrZXldLmxpbmVPZkJ1c2luZXNzLFxyXG4gICAgICAgICAgLy8gaW50cm9EYXRhOiBkYXRhW2tleV0uaW50cm9EYXRhXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNldGNob3Jlcyhsb2FkZWRDaG9yZXMpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgc2V0RXJyb3IoZXJyb3IubWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoY2hvcmVzSGFuZGxlcigpO1xyXG4gIH0sIFtmZXRjaGNob3Jlc0hhbmRsZXJdKTtcclxuXHJcbiAgbGV0IGNvbnRlbnQgPSA8cD5Gb3VuZCBubyBjaG9yZXMuPC9wPjtcclxuXHJcbiAgaWYgKGNob3Jlcy5sZW5ndGggPiAwKSB7XHJcbiAgICBjb250ZW50ID0gPENob3Jlc0xpc3QgY2hvcmVzPXtjaG9yZXN9IC8+O1xyXG4gIH1cclxuXHJcbiAgaWYgKGVycm9yKSB7XHJcbiAgICBjb250ZW50ID0gPHA+e2Vycm9yfTwvcD47XHJcbiAgfVxyXG5cclxuICBpZiAoaXNMb2FkaW5nKSB7XHJcbiAgICBjb250ZW50ID0gPHA+TG9hZGluZy4uLjwvcD47XHJcbiAgfVxyXG4gIGNvbnNvbGUubG9nKGNvbnRlbnQpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgIHsvKiA8c2VjdGlvbj5cclxuXHRcdFx0XHQ8QWRkY2hvcmVzZm9ybSBvbkFkZGNob3Jlc2Zvcm09e0FkZGNob3JlSGFuZGxlcn0gLz5cclxuXHRcdFx0PC9zZWN0aW9uPiAqL31cclxuICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgey8qIFJlZnJlc2hzIHRoZSBwYWdlICovfVxyXG4gICAgICAgIHsvKiA8YnV0dG9uIG9uQ2xpY2s9e2ZldGNoY2hvcmVzSGFuZGxlcn0+RmV0Y2ggQ2hvcmVzPC9idXR0b24+ICovfVxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIHsvKiB7YXV0aEN0eC5Jc2xvZ2dlZEluICYmICAqL31cclxuICAgICAgPHNlY3Rpb24+e2NvbnRlbnR9PC9zZWN0aW9uPlxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGZXRjaGluZ0Zyb21EQjtcclxuXHJcbi8qXHJcblxyXG5cclxuICAvLyB0aW1lIHRvIHVwbG9hZCB0byB0aGUgZmlyZSBiYXNlIGRiXHJcbiAgLy8gYXN5bmMgZnVuY3Rpb24gQWRkY2hvcmVIYW5kbGVyKGNob3JlRGF0YU9iamVjdCkge1xyXG4gIC8vIFx0Y29uc3QgcmVzcG9uY2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9iYWxtb2phLTQ5ZDkwLWRlZmF1bHQtcnRkYi5ldXJvcGUtd2VzdDEuZmlyZWJhc2VkYXRhYmFzZS5hcHAvbmFtZXMuanNvbicsXHJcbiAgLy8gXHR7XHJcbiAgLy8gXHRcdG1ldGhvZDonUE9TVCcsXHJcbiAgLy8gXHRcdGJvZHk6SlNPTi5zdHJpbmdpZnkoY2hvcmVEYXRhT2JqZWN0KSxcclxuICAvLyBcdFx0aGVhZGVyczp7XHJcbiAgLy8gXHRcdFx0J0NvbnRlbnQtVHlwZScgOiAnYXBwbGljYXRpb24vanNvbid9XHJcbiAgLy8gXHRcdH1cclxuICAvLyBcdCk7XHJcbiAgLy8gXHRjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uY2UuanNvbigpO1xyXG4gIC8vIFx0Y29uc29sZS5sb2coZGF0YSk7XHJcbiAgLy8gfVxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgQ2hvcmVzTGlzdCBmcm9tICcuLi9jb21wYW55cmVnaXN0cmF0aW9uL0NvbXBhbnlMaXN0JztcclxuXHJcblxyXG5mdW5jdGlvbiBGZXRjaGluZ0Zyb21EQigpIHtcclxuXHQgY29uc3QgW2Nob3Jlcywgc2V0Q2hvcmUgXSA9IHVzZVN0YXRlKFtdKTtcclxuXHQgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHQgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcblx0Y29uc3QgZmV0Y2hDaG9yZUhhbmRsZXIgPSB1c2VDYWxsYmFjayhhc3luYyAoKSA9PiB7XHJcblx0XHRzZXRJc0xvYWRpbmcodHJ1ZSk7XHJcblx0XHRzZXRFcnJvcihudWxsKTtcclxuXHRcdHRyeSB7XHJcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYmFsbW9qYS00OWQ5MC1kZWZhdWx0LXJ0ZGIuZXVyb3BlLXdlc3QxLmZpcmViYXNlZGF0YWJhc2UuYXBwL25hbWVzLmpzb24nKTtcclxuXHRcdFx0aWYgKCFyZXNwb25zZS5vaykge1xyXG5cdFx0XHQgIHRocm93IG5ldyBFcnJvcignU29tZXRoaW5nIHdlbnQgd3JvbmchJyk7XHJcblx0XHRcdH1cclxuXHRcdFx0Y29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcblx0XHRcdGNvbnN0IGRpc2VjdGVkRGF0YSA9IFtdO1xyXG5cclxuXHRcdFx0Zm9yKGNvbnN0IGtleSBpbiBkYXRhKXtcclxuXHRcdFx0XHRkaXNlY3RlZERhdGEucHVzaCh7XHJcblx0XHRcdFx0XHRpZDprZXksXHJcblx0XHRcdFx0XHRkZXNjcmlwdGlvbkRhdGE6ZGF0YVtrZXldLmRlc2NyaXB0aW9uRGF0YSwgXHJcblx0XHRcdFx0XHRpbnRyb0RhdGE6ZGF0YVtrZXldLmludHJvRGF0YSxcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9XHRcclxuXHJcblx0XHRcdHNldENob3JlKGRpc2VjdGVkRGF0YSk7XHJcblx0XHR9IFxyXG5cdFx0Y2F0Y2ggKGVycm9yKSB7XHJcblx0XHRcdHNldEVycm9yKGVycm9yLm1lc3NhZ2UpO1xyXG5cdFx0fVxyXG5cdFx0c2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuXHR9LCBbXSk7XHJcblxyXG5cdC8vIHVzZUVmZmVjdChcclxuXHQvLyBcdCgpID0+IHtcclxuXHQvLyBcdFx0ZmV0Y2hDaG9yZUhhbmRsZXIoKTtcclxuXHQvLyBcdH0sXHJcblx0Ly8gXHRbIGZldGNoQ2hvcmVIYW5kbGVyIF1cclxuXHQvLyApO1xyXG5cclxuXHJcblx0bGV0IGNvbnRlbnQgPSA8cD5Gb3VuZCBubyBjaG9yZXMuPC9wPjtcclxuXHJcblx0aWYgKGNob3Jlcy5sZW5ndGggPiAwKSB7XHJcblx0XHRjb250ZW50ID0gPENob3Jlc0xpc3QgY2hvcmVzPXtjaG9yZXN9IC8+O1xyXG5cdH1cclxuXHJcblx0aWYgKGVycm9yKSB7XHJcblx0XHRjb250ZW50ID0gPHA+e2Vycm9yfTwvcD47XHJcblx0fVxyXG5cclxuXHRpZiAoaXNMb2FkaW5nKSB7XHJcblx0XHRjb250ZW50ID0gPHA+TG9hZGluZy4uLjwvcD47XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PFJlYWN0LkZyYWdtZW50PlxyXG5cdFx0XHJcblx0XHRcdDxzZWN0aW9uPlxyXG5cdFx0XHRcdDxidXR0b24gb25DbGljaz17ZmV0Y2hDaG9yZUhhbmRsZXJ9PkZldGNoIENob3JlczwvYnV0dG9uPlxyXG5cdFx0XHQ8L3NlY3Rpb24+XHJcblx0XHRcdDxzZWN0aW9uPntjb250ZW50fTwvc2VjdGlvbj5cclxuXHRcdDwvUmVhY3QuRnJhZ21lbnQ+XHJcblx0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmV0Y2hpbmdGcm9tREIoKTtcclxuXHJcblxyXG5cclxuXHJcbi8vaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IENob3Jlc0xpc3QgZnJvbSAnLi9jb21wb25lbnRzL0Nob3Jlc0xpc3QnXHJcbmltcG9ydCBBZGRjaG9yZSBmcm9tICcuL2NvbXBvbmVudHMvQWRkY2hvcmUnO1xyXG5pbXBvcnQgJy4vQXBwLmNzcyc7XHJcblxyXG5mdW5jdGlvbiBBcHAoKSB7XHJcblx0IGNvbnN0IFsgY2hvcmVzLCBzZXRjaG9yZXMgXSA9IHVzZVN0YXRlKFtdKTtcclxuXHQgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHQgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcblx0Y29uc3QgZmV0Y2hjaG9yZXNIYW5kbGVyID0gdXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xyXG5cdFx0c2V0SXNMb2FkaW5nKHRydWUpO1xyXG5cdFx0c2V0RXJyb3IobnVsbCk7XHJcblx0XHR0cnkge1x0XHRcclxuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9iYWxtb2phLTQ5ZDkwLWRlZmF1bHQtcnRkYi5ldXJvcGUtd2VzdDEuZmlyZWJhc2VkYXRhYmFzZS5hcHAvbmFtZXMuanNvbicpO1xyXG5cdFx0XHRpZiAoIXJlc3BvbnNlLm9rKSB7XHJcblx0XHRcdCAgdGhyb3cgbmV3IEVycm9yKCdTb21ldGhpbmcgbmV3IGhhcyBnb25lIHdyb25nIScpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cdFx0XHQvLyBjb25zb2xlLmxvZyhkYXRhKTsgLy8gIGRhdGEgaXMgaGVyZSBhbiBvYmplY3QsIElkID0ga2V5cyBhbmQgIFxyXG5cclxuXHRcdFx0Y29uc3QgbG9hZGVkQ2hvcmVzID0gW107IFxyXG5cclxuXHRcdFx0Zm9yKGNvbnN0IGtleSBpbiBkYXRhKXtcclxuXHRcdFx0XHRsb2FkZWRDaG9yZXMucHVzaCh7XHJcblx0XHRcdFx0XHRpZDprZXksXHJcblx0XHRcdFx0XHR0aXRsZTogZGF0YVtrZXldLnRpdGxlLCBcclxuXHRcdFx0XHRcdG9wZW5pbmdUZXh0OiBkYXRhW2tleV0ub3BlbmluZ1RleHQsIFxyXG5cdFx0XHRcdFx0cmVsZWFzZURhdGU6IGRhdGFba2V5XS5yZWxlYXNlRGF0ZVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdFxyXG5cdFx0XHRzZXRjaG9yZXMobG9hZGVkQ2hvcmVzKTtcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRcdHNldEVycm9yKGVycm9yLm1lc3NhZ2UpO1xyXG5cdFx0fVxyXG5cdFx0c2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuXHR9LCBbXSk7XHJcblxyXG5cdHVzZUVmZmVjdChcclxuXHRcdCgpID0+IHtcclxuXHRcdFx0ZmV0Y2hjaG9yZXNIYW5kbGVyKCk7XHJcblx0XHR9LFxyXG5cdFx0WyBmZXRjaGNob3Jlc0hhbmRsZXIgXVxyXG5cdCk7XHJcblxyXG5cdC8vIHRpbWUgdG8gdXBsb2FkIHRvIHRoZSBmaXJlIGJhc2UgZGIgXHJcblx0Ly8gYXN5bmMgZnVuY3Rpb24gQWRkY2hvcmVIYW5kbGVyKGNob3JlRGF0YSkge1xyXG5cdC8vIFx0Y29uc3QgcmVzcG9uY2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9iYWxtb2phLTQ5ZDkwLWRlZmF1bHQtcnRkYi5ldXJvcGUtd2VzdDEuZmlyZWJhc2VkYXRhYmFzZS5hcHAvbmFtZXMuanNvbicsIFxyXG5cdC8vIFx0e1xyXG5cdC8vIFx0XHRtZXRob2Q6J1BPU1QnLFxyXG5cdC8vIFx0XHRib2R5OkpTT04uc3RyaW5naWZ5KGNob3JlRGF0YSksXHJcblx0Ly8gXHRcdGhlYWRlcnM6e1xyXG5cdC8vIFx0XHRcdCdDb250ZW50LVR5cGUnIDogJ2FwcGxpY2F0aW9uL2pzb24nfVx0XHRcclxuXHQvLyBcdFx0fVxyXG5cdC8vIFx0KTtcclxuXHQvLyBcdGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25jZS5qc29uKCk7XHJcblx0Ly8gXHRjb25zb2xlLmxvZyhkYXRhKTsgXHJcblx0Ly8gfVxyXG5cclxuXHRsZXQgY29udGVudCA9IDxwPkZvdW5kIG5vIGNob3Jlcy48L3A+O1xyXG5cclxuXHRpZiAoY2hvcmVzLmxlbmd0aCA+IDApIHtcclxuXHRcdGNvbnRlbnQgPSA8Q2hvcmVzTGlzdCBjaG9yZXM9e2Nob3Jlc30gLz47XHJcblx0fVxyXG5cclxuXHRpZiAoZXJyb3IpIHtcclxuXHRcdGNvbnRlbnQgPSA8cD57ZXJyb3J9PC9wPjtcclxuXHR9XHJcblxyXG5cdGlmIChpc0xvYWRpbmcpIHtcclxuXHRcdGNvbnRlbnQgPSA8cD5Mb2FkaW5nLi4uPC9wPjtcclxuXHR9XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8UmVhY3QuRnJhZ21lbnQ+XHJcblx0XHRcdDxzZWN0aW9uPlxyXG5cdFx0XHRcdCA8QWRkY2hvcmUgb25BZGRjaG9yZT17QWRkY2hvcmVIYW5kbGVyfSAvPiBcclxuXHRcdFx0PC9zZWN0aW9uPlxyXG5cdFx0XHQ8c2VjdGlvbj5cclxuXHRcdFx0XHJcblx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXtmZXRjaGNob3Jlc0hhbmRsZXJ9PkZldGNoIGNob3JlczwvYnV0dG9uPlxyXG5cdFx0XHQ8L3NlY3Rpb24+XHJcblx0XHRcdDxzZWN0aW9uPntjb250ZW50fTwvc2VjdGlvbj5cclxuXHRcdDwvUmVhY3QuRnJhZ21lbnQ+XHJcblx0KTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcblxyXG4qL1xyXG5cclxuLypcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IGNob3Jlc0xpc3QgZnJvbSAnLi9jb21wb25lbnRzL2Nob3Jlc0xpc3QnO1xyXG5pbXBvcnQgQWRkY2hvcmUgZnJvbSAnLi9jb21wb25lbnRzL0FkZGNob3JlJztcclxuaW1wb3J0ICcuL0FwcC5jc3MnO1xyXG5cclxuZnVuY3Rpb24gQXBwKCkge1xyXG5cdGNvbnN0IFsgY2hvcmVzLCBzZXRjaG9yZXMgXSA9IHVzZVN0YXRlKFtdKTtcclxuXHQgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHQgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcblx0Y29uc3QgZmV0Y2hjaG9yZXNIYW5kbGVyID0gdXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xyXG5cdFx0c2V0SXNMb2FkaW5nKHRydWUpO1xyXG5cdFx0c2V0RXJyb3IobnVsbCk7XHJcblx0XHR0cnkge1xyXG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL3N3YXBpLmRldi9hcGkvZmlsbXMnKTtcclxuXHRcdFx0aWYgKCFyZXNwb25zZS5vaykge1xyXG5cdFx0XHQgIHRocm93IG5ldyBFcnJvcignU29tZXRoaW5nIHdlbnQgd3JvbmchJyk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG5cdFx0XHRjb25zdCB0cmFuc2Zvcm1lZGNob3JlcyA9IGRhdGEucmVzdWx0cy5tYXAoKGNob3JlRGF0YSkgPT4ge1xyXG5cdFx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0XHRpZDogY2hvcmVEYXRhLmVwaXNvZGVfaWQsXHJcblx0XHRcdFx0XHR0aXRsZTogY2hvcmVEYXRhLmRpcmVjdG9yLFxyXG5cdFx0XHRcdFx0b3BlbmluZ1RleHQ6IGNob3JlRGF0YS5vcGVuaW5nX2NyYXdsLFxyXG5cdFx0XHRcdFx0cmVsZWFzZURhdGU6IGNob3JlRGF0YS5yZWxlYXNlX2RhdGVcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0c2V0Y2hvcmVzKHRyYW5zZm9ybWVkY2hvcmVzKTtcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRcdHNldEVycm9yKGVycm9yLm1lc3NhZ2UpO1xyXG5cdFx0fVxyXG5cdFx0c2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuXHR9LCBbXSk7XHJcblxyXG5cdHVzZUVmZmVjdChcclxuXHRcdCgpID0+IHtcclxuXHRcdFx0ZmV0Y2hjaG9yZXNIYW5kbGVyKCk7XHJcblx0XHR9LFxyXG5cdFx0WyBmZXRjaGNob3Jlc0hhbmRsZXIgXVxyXG5cdCk7XHJcblxyXG5cdGZ1bmN0aW9uIEFkZGNob3JlSGFuZGxlcihjaG9yZSkge1xyXG5cdFx0Y29uc29sZS5sb2coY2hvcmUpO1xyXG5cdH1cclxuXHJcblx0bGV0IGNvbnRlbnQgPSA8cD5Gb3VuZCBubyBjaG9yZXMuPC9wPjtcclxuXHJcblx0aWYgKGNob3Jlcy5sZW5ndGggPiAwKSB7XHJcblx0XHRjb250ZW50ID0gPGNob3Jlc0xpc3QgY2hvcmVzPXtjaG9yZXN9IC8+O1xyXG5cdH1cclxuXHJcblx0aWYgKGVycm9yKSB7XHJcblx0XHRjb250ZW50ID0gPHA+e2Vycm9yfTwvcD47XHJcblx0fVxyXG5cclxuXHRpZiAoaXNMb2FkaW5nKSB7XHJcblx0XHRjb250ZW50ID0gPHA+TG9hZGluZy4uLjwvcD47XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PFJlYWN0LkZyYWdtZW50PlxyXG5cdFx0XHQ8c2VjdGlvbj5cclxuXHRcdFx0XHQ8QWRkY2hvcmUgb25BZGRjaG9yZT17QWRkY2hvcmVIYW5kbGVyfSAvPlxyXG5cdFx0XHQ8L3NlY3Rpb24+XHJcblx0XHRcdDxzZWN0aW9uPlxyXG5cdFx0XHRcdDxidXR0b24gb25DbGljaz17ZmV0Y2hjaG9yZXNIYW5kbGVyfT5GZXRjaCBjaG9yZXM8L2J1dHRvbj5cclxuXHRcdFx0PC9zZWN0aW9uPlxyXG5cdFx0XHQ8c2VjdGlvbj57Y29udGVudH08L3NlY3Rpb24+XHJcblx0XHQ8L1JlYWN0LkZyYWdtZW50PlxyXG5cdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuXHJcblxyXG5cclxuKi9cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VDYWxsYmFjayIsInVzZUNvbnRleHQiLCJDaG9yZXNMaXN0IiwiQXV0aGVudGljYXRpb25Db250ZXh0IiwiRmV0Y2hpbmdGcm9tREIiLCJjaG9yZXMiLCJzZXRjaG9yZXMiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJlcnJvciIsInNldEVycm9yIiwiZmV0Y2hjaG9yZXNIYW5kbGVyIiwiZmV0Y2giLCJyZXNwb25zZSIsIm9rIiwiRXJyb3IiLCJqc29uIiwiZGF0YSIsImxvYWRlZENob3JlcyIsImtleSIsInB1c2giLCJpZCIsImRlc2NyaXB0aW9uRGF0YSIsImludHJvRGF0YSIsImxpbmVPZkJ1c2luZXNzIiwibWVzc2FnZSIsImNvbnRlbnQiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==