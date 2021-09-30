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
                introData: data[key].introData //   lineOfBusiness: data[key].lineOfBusiness,
                // introData: data[key].introData

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvRmV0Y2hpbmdGcm9tREIuM2E0YmUzY2RhYWZhYzdhYTgxY2IuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtDQUVBO0FBQ0E7Ozs7QUFFQSxTQUFTTyxjQUFULEdBQTBCO0FBQUE7O0FBQ3hCO0FBQ0E7QUFFQSxrQkFBNEJOLCtDQUFRLENBQUMsRUFBRCxDQUFwQztBQUFBLE1BQU9PLE1BQVA7QUFBQSxNQUFlQyxTQUFmOztBQUNBLG1CQUFrQ1IsK0NBQVEsQ0FBQyxLQUFELENBQTFDO0FBQUEsTUFBT1MsU0FBUDtBQUFBLE1BQWtCQyxZQUFsQjs7QUFDQSxtQkFBMEJWLCtDQUFRLENBQUMsSUFBRCxDQUFsQztBQUFBLE1BQU9XLEtBQVA7QUFBQSxNQUFjQyxRQUFkOztBQUVBLE1BQU1DLGtCQUFrQixHQUFHWCxrREFBVyxtU0FBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDckNRLFlBQUFBLFlBQVksQ0FBQyxJQUFELENBQVo7QUFDQUUsWUFBQUEsUUFBUSxDQUFDLElBQUQsQ0FBUjtBQUZxQztBQUFBO0FBQUEsbUJBSVpFLEtBQUssQ0FDMUIsbUZBRDBCLENBSk87O0FBQUE7QUFJN0JDLFlBQUFBLFFBSjZCOztBQUFBLGdCQU85QkEsUUFBUSxDQUFDQyxFQVBxQjtBQUFBO0FBQUE7QUFBQTs7QUFBQSxrQkFRM0IsSUFBSUMsS0FBSixDQUFVLCtCQUFWLENBUjJCOztBQUFBO0FBQUE7QUFBQSxtQkFXaEJGLFFBQVEsQ0FBQ0csSUFBVCxFQVhnQjs7QUFBQTtBQVc3QkMsWUFBQUEsSUFYNkI7QUFZbkM7QUFFTUMsWUFBQUEsWUFkNkIsR0FjZCxFQWRjOztBQWdCbkMsaUJBQVdDLEdBQVgsSUFBa0JGLElBQWxCLEVBQXdCO0FBQ3RCQyxjQUFBQSxZQUFZLENBQUNFLElBQWIsQ0FBa0I7QUFDaEJDLGdCQUFBQSxFQUFFLEVBQUVGLEdBRFk7QUFFaEJHLGdCQUFBQSxlQUFlLEVBQUVMLElBQUksQ0FBQ0UsR0FBRCxDQUFKLENBQVVHLGVBRlg7QUFHaEJDLGdCQUFBQSxTQUFTLEVBQUVOLElBQUksQ0FBQ0UsR0FBRCxDQUFKLENBQVVJLFNBSEwsQ0FJaEI7QUFDQTs7QUFMZ0IsZUFBbEIsRUFEc0IsQ0FRdEI7QUFDRDs7QUFFRGpCLFlBQUFBLFNBQVMsQ0FBQ1ksWUFBRCxDQUFUO0FBM0JtQztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQTZCbkNSLFlBQUFBLFFBQVEsQ0FBQyxZQUFNYyxPQUFQLENBQVI7O0FBN0JtQztBQStCckNoQixZQUFBQSxZQUFZLENBQUMsS0FBRCxDQUFaOztBQS9CcUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBRCxJQWdDbkMsRUFoQ21DLENBQXRDO0FBa0NBVCxFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFDZFksSUFBQUEsa0JBQWtCO0FBQ25CLEdBRlEsRUFFTixDQUFDQSxrQkFBRCxDQUZNLENBQVQ7O0FBSUEsTUFBSWMsT0FBTyxnQkFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFkOztBQUVBLE1BQUlwQixNQUFNLENBQUNxQixNQUFQLEdBQWdCLENBQXBCLEVBQXVCO0FBQ3JCRCxJQUFBQSxPQUFPLGdCQUFHLDhEQUFDLHNGQUFEO0FBQVksWUFBTSxFQUFFcEI7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFWO0FBQ0Q7O0FBRUQsTUFBSUksS0FBSixFQUFXO0FBQ1RnQixJQUFBQSxPQUFPLGdCQUFHO0FBQUEsZ0JBQUloQjtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBVjtBQUNEOztBQUVELE1BQUlGLFNBQUosRUFBZTtBQUNia0IsSUFBQUEsT0FBTyxnQkFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFWO0FBQ0Q7O0FBQ0RFLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSCxPQUFaO0FBQ0Esc0JBQ0UsOERBQUMsdURBQUQ7QUFBQSw0QkFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkYsZUFTRTtBQUFBLGdCQUFVQTtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWFEOztHQXpFUXJCOztLQUFBQTtBQTJFVCwrREFBZUEsY0FBZjtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL0ZldGNoaW5nRnJvbURCLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgQ2hvcmVzTGlzdCBmcm9tIFwiLi4vY29tcG9uZW50cy9kYXRhRmxvdy9jaG9yZXJlZ2lzdHJlYXRpb24vY2hvcmVMaXN0XCI7XHJcbmltcG9ydCBBdXRoZW50aWNhdGlvbkNvbnRleHQgZnJvbSBcIi4uL2NvbXBvbmVudHMvVG9rZW4vTG9nSW5BdXRoZW50aWNhdGlvbiBcIjtcclxuLy8gaW1wb3J0IEFkZGNob3Jlc2Zvcm0gZnJvbSAnLi4vY2hvcmVyZWdpc3RyZWF0aW9uL0FkZENob3Jlc0Zvcm0nO1xyXG4vLyBpbXBvcnQgJy4uLy4uL0FwcC5jc3MnO1xyXG5cclxuZnVuY3Rpb24gRmV0Y2hpbmdGcm9tREIoKSB7XHJcbiAgLy8gICBjb25zdCBhdXRoQ3R4ID0gdXNlQ29udGV4dChBdXRoZW50aWNhdGlvbkNvbnRleHQpO1xyXG4gIC8vICAgY29uc3QgSXNsb2dnZWRJbiA9IGF1dGhDdHgubG9nZ2VkSW47XHJcblxyXG4gIGNvbnN0IFtjaG9yZXMsIHNldGNob3Jlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICBjb25zdCBmZXRjaGNob3Jlc0hhbmRsZXIgPSB1c2VDYWxsYmFjayhhc3luYyAoKSA9PiB7XHJcbiAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XHJcbiAgICBzZXRFcnJvcihudWxsKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgICAgXCJodHRwczovL2JhbGVtb2phLTljNWU2LWRlZmF1bHQtcnRkYi5ldXJvcGUtd2VzdDEuZmlyZWJhc2VkYXRhYmFzZS5hcHAvQ2hvcmVzLmpzb25cIlxyXG4gICAgICApO1xyXG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU29tZXRoaW5nIG5ldyBoYXMgZ29uZSB3cm9uZyFcIik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpOyAvLyAgZGF0YSBpcyBoZXJlIGFuIG9iamVjdCwgSWQgPSBrZXlzIGFuZFxyXG5cclxuICAgICAgY29uc3QgbG9hZGVkQ2hvcmVzID0gW107XHJcblxyXG4gICAgICBmb3IgKGNvbnN0IGtleSBpbiBkYXRhKSB7XHJcbiAgICAgICAgbG9hZGVkQ2hvcmVzLnB1c2goe1xyXG4gICAgICAgICAgaWQ6IGtleSxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uRGF0YTogZGF0YVtrZXldLmRlc2NyaXB0aW9uRGF0YSxcclxuICAgICAgICAgIGludHJvRGF0YTogZGF0YVtrZXldLmludHJvRGF0YSxcclxuICAgICAgICAgIC8vICAgbGluZU9mQnVzaW5lc3M6IGRhdGFba2V5XS5saW5lT2ZCdXNpbmVzcyxcclxuICAgICAgICAgIC8vIGludHJvRGF0YTogZGF0YVtrZXldLmludHJvRGF0YVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzZXRjaG9yZXMobG9hZGVkQ2hvcmVzKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHNldEVycm9yKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmZXRjaGNob3Jlc0hhbmRsZXIoKTtcclxuICB9LCBbZmV0Y2hjaG9yZXNIYW5kbGVyXSk7XHJcblxyXG4gIGxldCBjb250ZW50ID0gPHA+Rm91bmQgbm8gY2hvcmVzLjwvcD47XHJcblxyXG4gIGlmIChjaG9yZXMubGVuZ3RoID4gMCkge1xyXG4gICAgY29udGVudCA9IDxDaG9yZXNMaXN0IGNob3Jlcz17Y2hvcmVzfSAvPjtcclxuICB9XHJcblxyXG4gIGlmIChlcnJvcikge1xyXG4gICAgY29udGVudCA9IDxwPntlcnJvcn08L3A+O1xyXG4gIH1cclxuXHJcbiAgaWYgKGlzTG9hZGluZykge1xyXG4gICAgY29udGVudCA9IDxwPkxvYWRpbmcuLi48L3A+O1xyXG4gIH1cclxuICBjb25zb2xlLmxvZyhjb250ZW50KTtcclxuICByZXR1cm4gKFxyXG4gICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICB7LyogPHNlY3Rpb24+XHJcblx0XHRcdFx0PEFkZGNob3Jlc2Zvcm0gb25BZGRjaG9yZXNmb3JtPXtBZGRjaG9yZUhhbmRsZXJ9IC8+XHJcblx0XHRcdDwvc2VjdGlvbj4gKi99XHJcbiAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgIHsvKiBSZWZyZXNocyB0aGUgcGFnZSAqL31cclxuICAgICAgICB7LyogPGJ1dHRvbiBvbkNsaWNrPXtmZXRjaGNob3Jlc0hhbmRsZXJ9PkZldGNoIENob3JlczwvYnV0dG9uPiAqL31cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICB7Lyoge2F1dGhDdHguSXNsb2dnZWRJbiAmJiAgKi99XHJcbiAgICAgIDxzZWN0aW9uPntjb250ZW50fTwvc2VjdGlvbj5cclxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmV0Y2hpbmdGcm9tREI7XHJcblxyXG4vKlxyXG5cclxuXHJcbiAgLy8gdGltZSB0byB1cGxvYWQgdG8gdGhlIGZpcmUgYmFzZSBkYlxyXG4gIC8vIGFzeW5jIGZ1bmN0aW9uIEFkZGNob3JlSGFuZGxlcihjaG9yZURhdGFPYmplY3QpIHtcclxuICAvLyBcdGNvbnN0IHJlc3BvbmNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYmFsbW9qYS00OWQ5MC1kZWZhdWx0LXJ0ZGIuZXVyb3BlLXdlc3QxLmZpcmViYXNlZGF0YWJhc2UuYXBwL25hbWVzLmpzb24nLFxyXG4gIC8vIFx0e1xyXG4gIC8vIFx0XHRtZXRob2Q6J1BPU1QnLFxyXG4gIC8vIFx0XHRib2R5OkpTT04uc3RyaW5naWZ5KGNob3JlRGF0YU9iamVjdCksXHJcbiAgLy8gXHRcdGhlYWRlcnM6e1xyXG4gIC8vIFx0XHRcdCdDb250ZW50LVR5cGUnIDogJ2FwcGxpY2F0aW9uL2pzb24nfVxyXG4gIC8vIFx0XHR9XHJcbiAgLy8gXHQpO1xyXG4gIC8vIFx0Y29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbmNlLmpzb24oKTtcclxuICAvLyBcdGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gIC8vIH1cclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IENob3Jlc0xpc3QgZnJvbSAnLi4vY29tcGFueXJlZ2lzdHJhdGlvbi9Db21wYW55TGlzdCc7XHJcblxyXG5cclxuZnVuY3Rpb24gRmV0Y2hpbmdGcm9tREIoKSB7XHJcblx0IGNvbnN0IFtjaG9yZXMsIHNldENob3JlIF0gPSB1c2VTdGF0ZShbXSk7XHJcblx0IGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0IGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG5cdGNvbnN0IGZldGNoQ2hvcmVIYW5kbGVyID0gdXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xyXG5cdFx0c2V0SXNMb2FkaW5nKHRydWUpO1xyXG5cdFx0c2V0RXJyb3IobnVsbCk7XHJcblx0XHR0cnkge1xyXG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL2JhbG1vamEtNDlkOTAtZGVmYXVsdC1ydGRiLmV1cm9wZS13ZXN0MS5maXJlYmFzZWRhdGFiYXNlLmFwcC9uYW1lcy5qc29uJyk7XHJcblx0XHRcdGlmICghcmVzcG9uc2Uub2spIHtcclxuXHRcdFx0ICB0aHJvdyBuZXcgRXJyb3IoJ1NvbWV0aGluZyB3ZW50IHdyb25nIScpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG5cdFx0XHRjb25zdCBkaXNlY3RlZERhdGEgPSBbXTtcclxuXHJcblx0XHRcdGZvcihjb25zdCBrZXkgaW4gZGF0YSl7XHJcblx0XHRcdFx0ZGlzZWN0ZWREYXRhLnB1c2goe1xyXG5cdFx0XHRcdFx0aWQ6a2V5LFxyXG5cdFx0XHRcdFx0ZGVzY3JpcHRpb25EYXRhOmRhdGFba2V5XS5kZXNjcmlwdGlvbkRhdGEsIFxyXG5cdFx0XHRcdFx0aW50cm9EYXRhOmRhdGFba2V5XS5pbnRyb0RhdGEsXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fVx0XHJcblxyXG5cdFx0XHRzZXRDaG9yZShkaXNlY3RlZERhdGEpO1xyXG5cdFx0fSBcclxuXHRcdGNhdGNoIChlcnJvcikge1xyXG5cdFx0XHRzZXRFcnJvcihlcnJvci5tZXNzYWdlKTtcclxuXHRcdH1cclxuXHRcdHNldElzTG9hZGluZyhmYWxzZSk7XHJcblx0fSwgW10pO1xyXG5cclxuXHQvLyB1c2VFZmZlY3QoXHJcblx0Ly8gXHQoKSA9PiB7XHJcblx0Ly8gXHRcdGZldGNoQ2hvcmVIYW5kbGVyKCk7XHJcblx0Ly8gXHR9LFxyXG5cdC8vIFx0WyBmZXRjaENob3JlSGFuZGxlciBdXHJcblx0Ly8gKTtcclxuXHJcblxyXG5cdGxldCBjb250ZW50ID0gPHA+Rm91bmQgbm8gY2hvcmVzLjwvcD47XHJcblxyXG5cdGlmIChjaG9yZXMubGVuZ3RoID4gMCkge1xyXG5cdFx0Y29udGVudCA9IDxDaG9yZXNMaXN0IGNob3Jlcz17Y2hvcmVzfSAvPjtcclxuXHR9XHJcblxyXG5cdGlmIChlcnJvcikge1xyXG5cdFx0Y29udGVudCA9IDxwPntlcnJvcn08L3A+O1xyXG5cdH1cclxuXHJcblx0aWYgKGlzTG9hZGluZykge1xyXG5cdFx0Y29udGVudCA9IDxwPkxvYWRpbmcuLi48L3A+O1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxSZWFjdC5GcmFnbWVudD5cclxuXHRcdFxyXG5cdFx0XHQ8c2VjdGlvbj5cclxuXHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9e2ZldGNoQ2hvcmVIYW5kbGVyfT5GZXRjaCBDaG9yZXM8L2J1dHRvbj5cclxuXHRcdFx0PC9zZWN0aW9uPlxyXG5cdFx0XHQ8c2VjdGlvbj57Y29udGVudH08L3NlY3Rpb24+XHJcblx0XHQ8L1JlYWN0LkZyYWdtZW50PlxyXG5cdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZldGNoaW5nRnJvbURCKCk7XHJcblxyXG5cclxuXHJcblxyXG4vL2ltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBDaG9yZXNMaXN0IGZyb20gJy4vY29tcG9uZW50cy9DaG9yZXNMaXN0J1xyXG5pbXBvcnQgQWRkY2hvcmUgZnJvbSAnLi9jb21wb25lbnRzL0FkZGNob3JlJztcclxuaW1wb3J0ICcuL0FwcC5jc3MnO1xyXG5cclxuZnVuY3Rpb24gQXBwKCkge1xyXG5cdCBjb25zdCBbIGNob3Jlcywgc2V0Y2hvcmVzIF0gPSB1c2VTdGF0ZShbXSk7XHJcblx0IGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0IGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG5cdGNvbnN0IGZldGNoY2hvcmVzSGFuZGxlciA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcclxuXHRcdHNldElzTG9hZGluZyh0cnVlKTtcclxuXHRcdHNldEVycm9yKG51bGwpO1xyXG5cdFx0dHJ5IHtcdFx0XHJcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYmFsbW9qYS00OWQ5MC1kZWZhdWx0LXJ0ZGIuZXVyb3BlLXdlc3QxLmZpcmViYXNlZGF0YWJhc2UuYXBwL25hbWVzLmpzb24nKTtcclxuXHRcdFx0aWYgKCFyZXNwb25zZS5vaykge1xyXG5cdFx0XHQgIHRocm93IG5ldyBFcnJvcignU29tZXRoaW5nIG5ldyBoYXMgZ29uZSB3cm9uZyEnKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Y29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHRcdFx0Ly8gY29uc29sZS5sb2coZGF0YSk7IC8vICBkYXRhIGlzIGhlcmUgYW4gb2JqZWN0LCBJZCA9IGtleXMgYW5kICBcclxuXHJcblx0XHRcdGNvbnN0IGxvYWRlZENob3JlcyA9IFtdOyBcclxuXHJcblx0XHRcdGZvcihjb25zdCBrZXkgaW4gZGF0YSl7XHJcblx0XHRcdFx0bG9hZGVkQ2hvcmVzLnB1c2goe1xyXG5cdFx0XHRcdFx0aWQ6a2V5LFxyXG5cdFx0XHRcdFx0dGl0bGU6IGRhdGFba2V5XS50aXRsZSwgXHJcblx0XHRcdFx0XHRvcGVuaW5nVGV4dDogZGF0YVtrZXldLm9wZW5pbmdUZXh0LCBcclxuXHRcdFx0XHRcdHJlbGVhc2VEYXRlOiBkYXRhW2tleV0ucmVsZWFzZURhdGVcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRcclxuXHRcdFx0c2V0Y2hvcmVzKGxvYWRlZENob3Jlcyk7XHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0XHRzZXRFcnJvcihlcnJvci5tZXNzYWdlKTtcclxuXHRcdH1cclxuXHRcdHNldElzTG9hZGluZyhmYWxzZSk7XHJcblx0fSwgW10pO1xyXG5cclxuXHR1c2VFZmZlY3QoXHJcblx0XHQoKSA9PiB7XHJcblx0XHRcdGZldGNoY2hvcmVzSGFuZGxlcigpO1xyXG5cdFx0fSxcclxuXHRcdFsgZmV0Y2hjaG9yZXNIYW5kbGVyIF1cclxuXHQpO1xyXG5cclxuXHQvLyB0aW1lIHRvIHVwbG9hZCB0byB0aGUgZmlyZSBiYXNlIGRiIFxyXG5cdC8vIGFzeW5jIGZ1bmN0aW9uIEFkZGNob3JlSGFuZGxlcihjaG9yZURhdGEpIHtcclxuXHQvLyBcdGNvbnN0IHJlc3BvbmNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYmFsbW9qYS00OWQ5MC1kZWZhdWx0LXJ0ZGIuZXVyb3BlLXdlc3QxLmZpcmViYXNlZGF0YWJhc2UuYXBwL25hbWVzLmpzb24nLCBcclxuXHQvLyBcdHtcclxuXHQvLyBcdFx0bWV0aG9kOidQT1NUJyxcclxuXHQvLyBcdFx0Ym9keTpKU09OLnN0cmluZ2lmeShjaG9yZURhdGEpLFxyXG5cdC8vIFx0XHRoZWFkZXJzOntcclxuXHQvLyBcdFx0XHQnQ29udGVudC1UeXBlJyA6ICdhcHBsaWNhdGlvbi9qc29uJ31cdFx0XHJcblx0Ly8gXHRcdH1cclxuXHQvLyBcdCk7XHJcblx0Ly8gXHRjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uY2UuanNvbigpO1xyXG5cdC8vIFx0Y29uc29sZS5sb2coZGF0YSk7IFxyXG5cdC8vIH1cclxuXHJcblx0bGV0IGNvbnRlbnQgPSA8cD5Gb3VuZCBubyBjaG9yZXMuPC9wPjtcclxuXHJcblx0aWYgKGNob3Jlcy5sZW5ndGggPiAwKSB7XHJcblx0XHRjb250ZW50ID0gPENob3Jlc0xpc3QgY2hvcmVzPXtjaG9yZXN9IC8+O1xyXG5cdH1cclxuXHJcblx0aWYgKGVycm9yKSB7XHJcblx0XHRjb250ZW50ID0gPHA+e2Vycm9yfTwvcD47XHJcblx0fVxyXG5cclxuXHRpZiAoaXNMb2FkaW5nKSB7XHJcblx0XHRjb250ZW50ID0gPHA+TG9hZGluZy4uLjwvcD47XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PFJlYWN0LkZyYWdtZW50PlxyXG5cdFx0XHQ8c2VjdGlvbj5cclxuXHRcdFx0XHQgPEFkZGNob3JlIG9uQWRkY2hvcmU9e0FkZGNob3JlSGFuZGxlcn0gLz4gXHJcblx0XHRcdDwvc2VjdGlvbj5cclxuXHRcdFx0PHNlY3Rpb24+XHJcblx0XHRcdFxyXG5cdFx0XHRcdDxidXR0b24gb25DbGljaz17ZmV0Y2hjaG9yZXNIYW5kbGVyfT5GZXRjaCBjaG9yZXM8L2J1dHRvbj5cclxuXHRcdFx0PC9zZWN0aW9uPlxyXG5cdFx0XHQ8c2VjdGlvbj57Y29udGVudH08L3NlY3Rpb24+XHJcblx0XHQ8L1JlYWN0LkZyYWdtZW50PlxyXG5cdCk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG5cclxuKi9cclxuXHJcbi8qXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBjaG9yZXNMaXN0IGZyb20gJy4vY29tcG9uZW50cy9jaG9yZXNMaXN0JztcclxuaW1wb3J0IEFkZGNob3JlIGZyb20gJy4vY29tcG9uZW50cy9BZGRjaG9yZSc7XHJcbmltcG9ydCAnLi9BcHAuY3NzJztcclxuXHJcbmZ1bmN0aW9uIEFwcCgpIHtcclxuXHRjb25zdCBbIGNob3Jlcywgc2V0Y2hvcmVzIF0gPSB1c2VTdGF0ZShbXSk7XHJcblx0IGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0IGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG5cdGNvbnN0IGZldGNoY2hvcmVzSGFuZGxlciA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcclxuXHRcdHNldElzTG9hZGluZyh0cnVlKTtcclxuXHRcdHNldEVycm9yKG51bGwpO1xyXG5cdFx0dHJ5IHtcclxuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9zd2FwaS5kZXYvYXBpL2ZpbG1zJyk7XHJcblx0XHRcdGlmICghcmVzcG9uc2Uub2spIHtcclxuXHRcdFx0ICB0aHJvdyBuZXcgRXJyb3IoJ1NvbWV0aGluZyB3ZW50IHdyb25nIScpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuXHRcdFx0Y29uc3QgdHJhbnNmb3JtZWRjaG9yZXMgPSBkYXRhLnJlc3VsdHMubWFwKChjaG9yZURhdGEpID0+IHtcclxuXHRcdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdFx0aWQ6IGNob3JlRGF0YS5lcGlzb2RlX2lkLFxyXG5cdFx0XHRcdFx0dGl0bGU6IGNob3JlRGF0YS5kaXJlY3RvcixcclxuXHRcdFx0XHRcdG9wZW5pbmdUZXh0OiBjaG9yZURhdGEub3BlbmluZ19jcmF3bCxcclxuXHRcdFx0XHRcdHJlbGVhc2VEYXRlOiBjaG9yZURhdGEucmVsZWFzZV9kYXRlXHJcblx0XHRcdFx0fTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdHNldGNob3Jlcyh0cmFuc2Zvcm1lZGNob3Jlcyk7XHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0XHRzZXRFcnJvcihlcnJvci5tZXNzYWdlKTtcclxuXHRcdH1cclxuXHRcdHNldElzTG9hZGluZyhmYWxzZSk7XHJcblx0fSwgW10pO1xyXG5cclxuXHR1c2VFZmZlY3QoXHJcblx0XHQoKSA9PiB7XHJcblx0XHRcdGZldGNoY2hvcmVzSGFuZGxlcigpO1xyXG5cdFx0fSxcclxuXHRcdFsgZmV0Y2hjaG9yZXNIYW5kbGVyIF1cclxuXHQpO1xyXG5cclxuXHRmdW5jdGlvbiBBZGRjaG9yZUhhbmRsZXIoY2hvcmUpIHtcclxuXHRcdGNvbnNvbGUubG9nKGNob3JlKTtcclxuXHR9XHJcblxyXG5cdGxldCBjb250ZW50ID0gPHA+Rm91bmQgbm8gY2hvcmVzLjwvcD47XHJcblxyXG5cdGlmIChjaG9yZXMubGVuZ3RoID4gMCkge1xyXG5cdFx0Y29udGVudCA9IDxjaG9yZXNMaXN0IGNob3Jlcz17Y2hvcmVzfSAvPjtcclxuXHR9XHJcblxyXG5cdGlmIChlcnJvcikge1xyXG5cdFx0Y29udGVudCA9IDxwPntlcnJvcn08L3A+O1xyXG5cdH1cclxuXHJcblx0aWYgKGlzTG9hZGluZykge1xyXG5cdFx0Y29udGVudCA9IDxwPkxvYWRpbmcuLi48L3A+O1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxSZWFjdC5GcmFnbWVudD5cclxuXHRcdFx0PHNlY3Rpb24+XHJcblx0XHRcdFx0PEFkZGNob3JlIG9uQWRkY2hvcmU9e0FkZGNob3JlSGFuZGxlcn0gLz5cclxuXHRcdFx0PC9zZWN0aW9uPlxyXG5cdFx0XHQ8c2VjdGlvbj5cclxuXHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9e2ZldGNoY2hvcmVzSGFuZGxlcn0+RmV0Y2ggY2hvcmVzPC9idXR0b24+XHJcblx0XHRcdDwvc2VjdGlvbj5cclxuXHRcdFx0PHNlY3Rpb24+e2NvbnRlbnR9PC9zZWN0aW9uPlxyXG5cdFx0PC9SZWFjdC5GcmFnbWVudD5cclxuXHQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcblxyXG5cclxuXHJcbiovXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlQ2FsbGJhY2siLCJ1c2VDb250ZXh0IiwiQ2hvcmVzTGlzdCIsIkF1dGhlbnRpY2F0aW9uQ29udGV4dCIsIkZldGNoaW5nRnJvbURCIiwiY2hvcmVzIiwic2V0Y2hvcmVzIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiZXJyb3IiLCJzZXRFcnJvciIsImZldGNoY2hvcmVzSGFuZGxlciIsImZldGNoIiwicmVzcG9uc2UiLCJvayIsIkVycm9yIiwianNvbiIsImRhdGEiLCJsb2FkZWRDaG9yZXMiLCJrZXkiLCJwdXNoIiwiaWQiLCJkZXNjcmlwdGlvbkRhdGEiLCJpbnRyb0RhdGEiLCJtZXNzYWdlIiwiY29udGVudCIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9