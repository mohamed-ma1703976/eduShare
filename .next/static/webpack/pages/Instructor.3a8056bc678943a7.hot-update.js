"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/Instructor",{

/***/ "./pages/Instructor/index.js":
/*!***********************************!*\
  !*** ./pages/Instructor/index.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ instructorDashboard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useFetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useFetch */ \"./hooks/useFetch.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Firebase/Firebase */ \"./Firebase/Firebase.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction instructorDashboard() {\n    _s();\n    const [statusCheck, setstatusCheck] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [statusValue, setStatusValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [instructors, setInstructors] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);\n    const [loading, setLoading] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(true);\n    console.log(instructors);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchInstructors = async ()=>{\n            const instructorCollection = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_4__.db, \"Instructor\");\n            const instructorSnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDocs)(instructorCollection);\n            const instructorsList = instructorSnapshot.docs.map((doc)=>({\n                    id: doc.id,\n                    attributes: doc.data()\n                }));\n            setInstructors(instructorsList);\n            setLoading(false);\n            instructorsList.map((s)=>{\n                if (s.attributes.status === \"Active\") {\n                    setstatusCheck(false);\n                    setStatusValue(s.attributes.status);\n                }\n            });\n        };\n        fetchInstructors();\n    }, []);\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior-firebase-update\\\\eduShare\\\\pages\\\\Instructor\\\\index.js\",\n        lineNumber: 44,\n        columnNumber: 25\n    }, this);\n    console.log(instructors);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: statusCheck ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Your request is pending\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior-firebase-update\\\\eduShare\\\\pages\\\\Instructor\\\\index.js\",\n                lineNumber: 56,\n                columnNumber: 21\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Instructor Dashboard\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior-firebase-update\\\\eduShare\\\\pages\\\\Instructor\\\\index.js\",\n                lineNumber: 58,\n                columnNumber: 21\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior-firebase-update\\\\eduShare\\\\pages\\\\Instructor\\\\index.js\",\n            lineNumber: 54,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior-firebase-update\\\\eduShare\\\\pages\\\\Instructor\\\\index.js\",\n        lineNumber: 52,\n        columnNumber: 9\n    }, this);\n}\n_s(instructorDashboard, \"s3usa3iXyNZMp0gHoXbxArMyF4Q=\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9JbnN0cnVjdG9yL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQXdEO0FBQ1o7QUFRaEI7QUFDZ0I7QUFDN0IsU0FBU1ksc0JBQXNCOztJQUUxQyxNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR1gsK0NBQVFBLENBQUMsSUFBSTtJQUNuRCxNQUFNLENBQUNZLGFBQWFDLGVBQWUsR0FBR2IsK0NBQVFBLENBQUM7SUFHL0MsTUFBTSxDQUFDYyxhQUFhQyxlQUFlLEdBQUdsQixxREFBYyxDQUFDLEVBQUU7SUFDdkQsTUFBTSxDQUFDbUIsU0FBU0MsV0FBVyxHQUFHcEIscURBQWMsQ0FBQyxJQUFJO0lBRWpEcUIsUUFBUUMsR0FBRyxDQUFDTDtJQUNaZixnREFBU0EsQ0FBQyxJQUFNO1FBQ1osTUFBTXFCLG1CQUFtQixVQUFZO1lBQ2pDLE1BQU1DLHVCQUF1Qm5CLDhEQUFVQSxDQUFDTSxrREFBRUEsRUFBRTtZQUM1QyxNQUFNYyxxQkFBcUIsTUFBTW5CLDJEQUFPQSxDQUFDa0I7WUFDekMsTUFBTUUsa0JBQWtCRCxtQkFBbUJFLElBQUksQ0FBQ0MsR0FBRyxDQUFDLENBQUNyQixNQUFTO29CQUMxRHNCLElBQUl0QixJQUFJc0IsRUFBRTtvQkFDVkMsWUFBWXZCLElBQUl3QixJQUFJO2dCQUN4QjtZQUNBYixlQUFlUTtZQUNmTixXQUFXLEtBQUs7WUFFaEJNLGdCQUFnQkUsR0FBRyxDQUFDSSxDQUFBQSxJQUFLO2dCQUNyQixJQUFJQSxFQUFFRixVQUFVLENBQUNHLE1BQU0sS0FBSyxVQUFVO29CQUNsQ25CLGVBQWUsS0FBSztvQkFDcEJFLGVBQWVnQixFQUFFRixVQUFVLENBQUNHLE1BQU07Z0JBQ3RDLENBQUM7WUFDTDtRQUNKO1FBRUFWO0lBQ0osR0FBRyxFQUFFO0lBRUwsSUFBSUosU0FBUyxxQkFBTyw4REFBQ2U7a0JBQUk7Ozs7OztJQUt6QmIsUUFBUUMsR0FBRyxDQUFDTDtJQUVaLHFCQUNJLDhEQUFDaUI7a0JBRUcsNEVBQUNBO3NCQUNJckIsNEJBQ0csOERBQUNzQjswQkFBRTs7Ozs7cUNBRUgsOERBQUNBOzBCQUFFOzs7OztvQkFDTjs7Ozs7Ozs7Ozs7QUFLakIsQ0FBQztHQXBEdUJ2QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9JbnN0cnVjdG9yL2luZGV4LmpzPzFmMmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZSwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgdXNlRmV0Y2ggZnJvbSBcIi4uLy4uL2hvb2tzL3VzZUZldGNoXCI7XHJcbmltcG9ydCB7XHJcbiAgICBjb2xsZWN0aW9uLFxyXG4gICAgZ2V0RG9jcyxcclxuICAgIGRvYyxcclxuICAgIGRlbGV0ZURvYyxcclxuICAgIHVwZGF0ZURvYyxcclxuICAgIHNldERvYyxcclxufSBmcm9tICdmaXJlYmFzZS9maXJlc3RvcmUnO1xyXG5pbXBvcnQgeyBkYiB9IGZyb20gJy4uLy4uL0ZpcmViYXNlL0ZpcmViYXNlJ1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbnN0cnVjdG9yRGFzaGJvYXJkKCkge1xyXG5cclxuICAgIGNvbnN0IFtzdGF0dXNDaGVjaywgc2V0c3RhdHVzQ2hlY2tdID0gdXNlU3RhdGUodHJ1ZSlcclxuICAgIGNvbnN0IFtzdGF0dXNWYWx1ZSwgc2V0U3RhdHVzVmFsdWVdID0gdXNlU3RhdGUoJycpXHJcblxyXG5cclxuICAgIGNvbnN0IFtpbnN0cnVjdG9ycywgc2V0SW5zdHJ1Y3RvcnNdID0gUmVhY3QudXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gICAgY29uc29sZS5sb2coaW5zdHJ1Y3RvcnMpXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZldGNoSW5zdHJ1Y3RvcnMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGluc3RydWN0b3JDb2xsZWN0aW9uID0gY29sbGVjdGlvbihkYiwgJ0luc3RydWN0b3InKTtcclxuICAgICAgICAgICAgY29uc3QgaW5zdHJ1Y3RvclNuYXBzaG90ID0gYXdhaXQgZ2V0RG9jcyhpbnN0cnVjdG9yQ29sbGVjdGlvbik7XHJcbiAgICAgICAgICAgIGNvbnN0IGluc3RydWN0b3JzTGlzdCA9IGluc3RydWN0b3JTbmFwc2hvdC5kb2NzLm1hcCgoZG9jKSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgaWQ6IGRvYy5pZCxcclxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IGRvYy5kYXRhKCksXHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgc2V0SW5zdHJ1Y3RvcnMoaW5zdHJ1Y3RvcnNMaXN0KTtcclxuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcblxyXG4gICAgICAgICAgICBpbnN0cnVjdG9yc0xpc3QubWFwKHMgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHMuYXR0cmlidXRlcy5zdGF0dXMgPT09ICdBY3RpdmUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0c3RhdHVzQ2hlY2soZmFsc2UpXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U3RhdHVzVmFsdWUocy5hdHRyaWJ1dGVzLnN0YXR1cylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBmZXRjaEluc3RydWN0b3JzKCk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgaWYgKGxvYWRpbmcpIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XHJcblxyXG5cclxuXHJcblxyXG4gICAgY29uc29sZS5sb2coaW5zdHJ1Y3RvcnMpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7c3RhdHVzQ2hlY2sgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHA+WW91ciByZXF1ZXN0IGlzIHBlbmRpbmc8L3A+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxwPkluc3RydWN0b3IgRGFzaGJvYXJkPC9wPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2UiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZUZldGNoIiwiY29sbGVjdGlvbiIsImdldERvY3MiLCJkb2MiLCJkZWxldGVEb2MiLCJ1cGRhdGVEb2MiLCJzZXREb2MiLCJkYiIsImluc3RydWN0b3JEYXNoYm9hcmQiLCJzdGF0dXNDaGVjayIsInNldHN0YXR1c0NoZWNrIiwic3RhdHVzVmFsdWUiLCJzZXRTdGF0dXNWYWx1ZSIsImluc3RydWN0b3JzIiwic2V0SW5zdHJ1Y3RvcnMiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaEluc3RydWN0b3JzIiwiaW5zdHJ1Y3RvckNvbGxlY3Rpb24iLCJpbnN0cnVjdG9yU25hcHNob3QiLCJpbnN0cnVjdG9yc0xpc3QiLCJkb2NzIiwibWFwIiwiaWQiLCJhdHRyaWJ1dGVzIiwiZGF0YSIsInMiLCJzdGF0dXMiLCJkaXYiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/Instructor/index.js\n"));

/***/ })

});