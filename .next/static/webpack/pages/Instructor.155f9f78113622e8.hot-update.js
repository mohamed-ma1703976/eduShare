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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ instructorDashboard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useFetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useFetch */ \"./hooks/useFetch.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Firebase/Firebase */ \"./Firebase/Firebase.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var _component_Instructors_InstNav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../component/Instructors/InstNav */ \"./component/Instructors/InstNav.js\");\n/* harmony import */ var _component_Instructors_InstSidebarr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../component/Instructors/InstSidebarr */ \"./component/Instructors/InstSidebarr.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction instructorDashboard() {\n    _s();\n    const [statusCheck, setstatusCheck] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [statusValue, setStatusValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [instructors, setInstructors] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);\n    const [loading, setLoading] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(true);\n    console.log(instructors);\n    const [userId, setUserId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Listen for changes in the authentication state\n        const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_5__.getAuth)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_4__.app);\n        const unsubscribe = auth.onAuthStateChanged((user)=>{\n            if (user) {\n                // User is signed in, get the user ID\n                setUserId(user.uid);\n            } else {\n                // User is signed out, set user ID to null\n                setUserId(null);\n            }\n        });\n        // Clean up the listener when the component unmounts\n        return ()=>unsubscribe();\n    }, []);\n    console.log(userId);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchInstructors = async ()=>{\n            const instructorCollection = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_4__.db, \"Instructor\");\n            const instructorSnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDocs)(instructorCollection);\n            const instructorsList = instructorSnapshot.docs.map((doc)=>({\n                    id: doc.id,\n                    attributes: doc.data()\n                }));\n            setInstructors(instructorsList);\n            setLoading(false);\n            instructorsList.forEach((s)=>{\n                if (s.id === userId) {\n                    if (s.attributes.status === \"Active\") {\n                        console.log(s.attributes.status);\n                        setstatusCheck(false);\n                        setStatusValue(s.attributes.status);\n                    } else {\n                        setstatusCheck(true);\n                    }\n                } else {\n                    setstatusCheck(true);\n                }\n            });\n        };\n        fetchInstructors();\n    }, [\n        userId\n    ]);\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.CircularProgress, {\n            size: 100,\n            color: \"success\",\n            sx: {\n                margin: \"200px 0px 550px 0 \"\n            }\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\pages\\\\Instructor\\\\index.js\",\n            lineNumber: 83,\n            columnNumber: 30\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\pages\\\\Instructor\\\\index.js\",\n        lineNumber: 83,\n        columnNumber: 25\n    }, this);\n    console.log(instructors);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: statusCheck ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Your request is pending\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\pages\\\\Instructor\\\\index.js\",\n                lineNumber: 95,\n                columnNumber: 21\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Box, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_Instructors_InstNav__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\pages\\\\Instructor\\\\index.js\",\n                        lineNumber: 99,\n                        columnNumber: 25\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Stack, {\n                        direction: \"row\",\n                        spacing: 2,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_Instructors_InstSidebarr__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\pages\\\\Instructor\\\\index.js\",\n                            lineNumber: 103,\n                            columnNumber: 29\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\pages\\\\Instructor\\\\index.js\",\n                        lineNumber: 101,\n                        columnNumber: 25\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\pages\\\\Instructor\\\\index.js\",\n                lineNumber: 97,\n                columnNumber: 21\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\pages\\\\Instructor\\\\index.js\",\n            lineNumber: 93,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\pages\\\\Instructor\\\\index.js\",\n        lineNumber: 91,\n        columnNumber: 9\n    }, this);\n}\n_s(instructorDashboard, \"pbjljeQh6sJ5fCFCkJE/4C0vWI0=\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9JbnN0cnVjdG9yL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUF3RDtBQUNaO0FBUWhCO0FBQ2dCO0FBQ0o7QUFDSztBQUNhO0FBQ1M7QUFDTjtBQUM5QyxTQUFTbUIsc0JBQXNCOztJQUUxQyxNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR2xCLCtDQUFRQSxDQUFDLElBQUk7SUFDbkQsTUFBTSxDQUFDbUIsYUFBYUMsZUFBZSxHQUFHcEIsK0NBQVFBLENBQUM7SUFHL0MsTUFBTSxDQUFDcUIsYUFBYUMsZUFBZSxHQUFHekIscURBQWMsQ0FBQyxFQUFFO0lBQ3ZELE1BQU0sQ0FBQzBCLFNBQVNDLFdBQVcsR0FBRzNCLHFEQUFjLENBQUMsSUFBSTtJQUVqRDRCLFFBQVFDLEdBQUcsQ0FBQ0w7SUFFWixNQUFNLENBQUNNLFFBQVFDLFVBQVUsR0FBRzVCLCtDQUFRQSxDQUFDLElBQUk7SUFFekNELGdEQUFTQSxDQUFDLElBQU07UUFDWixpREFBaUQ7UUFDakQsTUFBTThCLE9BQU9wQixzREFBT0EsQ0FBQ0MsbURBQUdBO1FBRXhCLE1BQU1vQixjQUFjRCxLQUFLRSxrQkFBa0IsQ0FBQ0MsQ0FBQUEsT0FBUTtZQUNoRCxJQUFJQSxNQUFNO2dCQUNOLHFDQUFxQztnQkFDckNKLFVBQVVJLEtBQUtDLEdBQUc7WUFDdEIsT0FBTztnQkFDSCwwQ0FBMEM7Z0JBQzFDTCxVQUFVLElBQUk7WUFDbEIsQ0FBQztRQUNMO1FBRUEsb0RBQW9EO1FBQ3BELE9BQU8sSUFBTUU7SUFDakIsR0FBRyxFQUFFO0lBQ0xMLFFBQVFDLEdBQUcsQ0FBQ0M7SUFJWjVCLGdEQUFTQSxDQUFDLElBQU07UUFDWixNQUFNbUMsbUJBQW1CLFVBQVk7WUFDakMsTUFBTUMsdUJBQXVCakMsOERBQVVBLENBQUNNLGtEQUFFQSxFQUFFO1lBQzVDLE1BQU00QixxQkFBcUIsTUFBTWpDLDJEQUFPQSxDQUFDZ0M7WUFDekMsTUFBTUUsa0JBQWtCRCxtQkFBbUJFLElBQUksQ0FBQ0MsR0FBRyxDQUFDLENBQUNuQyxNQUFTO29CQUMxRG9DLElBQUlwQyxJQUFJb0MsRUFBRTtvQkFDVkMsWUFBWXJDLElBQUlzQyxJQUFJO2dCQUN4QjtZQUNBcEIsZUFBZWU7WUFDZmIsV0FBVyxLQUFLO1lBRWhCYSxnQkFBZ0JNLE9BQU8sQ0FBQ0MsQ0FBQUEsSUFBSztnQkFFekIsSUFBSUEsRUFBRUosRUFBRSxLQUFLYixRQUFRO29CQUNqQixJQUFJaUIsRUFBRUgsVUFBVSxDQUFDSSxNQUFNLEtBQUssVUFBVTt3QkFDbENwQixRQUFRQyxHQUFHLENBQUNrQixFQUFFSCxVQUFVLENBQUNJLE1BQU07d0JBRS9CM0IsZUFBZSxLQUFLO3dCQUNwQkUsZUFBZXdCLEVBQUVILFVBQVUsQ0FBQ0ksTUFBTTtvQkFDdEMsT0FBTzt3QkFDSDNCLGVBQWUsSUFBSTtvQkFDdkIsQ0FBQztnQkFDTCxPQUFPO29CQUNIQSxlQUFlLElBQUk7Z0JBQ3ZCLENBQUM7WUFDTDtRQUVKO1FBRUFnQjtJQUNKLEdBQUc7UUFBQ1A7S0FBTztJQUVYLElBQUlKLFNBQVMscUJBQU8sOERBQUN1QjtrQkFBSSw0RUFBQ2hDLDJEQUFnQkE7WUFBQ2lDLE1BQU07WUFBS0MsT0FBTTtZQUFVQyxJQUFJO2dCQUFFQyxRQUFRO1lBQXFCOzs7Ozs7Ozs7OztJQUt6R3pCLFFBQVFDLEdBQUcsQ0FBQ0w7SUFFWixxQkFDSSw4REFBQ3lCO2tCQUVHLDRFQUFDQTtzQkFDSTdCLDRCQUNHLDhEQUFDa0M7MEJBQUU7Ozs7O3FDQUVILDhEQUFDdEMsOENBQUdBOztrQ0FFQSw4REFBQ0Ysc0VBQU9BOzs7OztrQ0FFUiw4REFBQ0ksZ0RBQUtBO3dCQUFDcUMsV0FBVTt3QkFBTUMsU0FBUztrQ0FFNUIsNEVBQUN6QywyRUFBV0E7Ozs7Ozs7Ozs7Ozs7OztvQkFPdkI7Ozs7Ozs7Ozs7O0FBT2pCLENBQUM7R0FwR3VCSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9JbnN0cnVjdG9yL2luZGV4LmpzPzFmMmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZSwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgdXNlRmV0Y2ggZnJvbSBcIi4uLy4uL2hvb2tzL3VzZUZldGNoXCI7XHJcbmltcG9ydCB7XHJcbiAgICBjb2xsZWN0aW9uLFxyXG4gICAgZ2V0RG9jcyxcclxuICAgIGRvYyxcclxuICAgIGRlbGV0ZURvYyxcclxuICAgIHVwZGF0ZURvYyxcclxuICAgIHNldERvYyxcclxufSBmcm9tICdmaXJlYmFzZS9maXJlc3RvcmUnO1xyXG5pbXBvcnQgeyBkYiB9IGZyb20gJy4uLy4uL0ZpcmViYXNlL0ZpcmViYXNlJ1xyXG5pbXBvcnQgeyBnZXRBdXRoIH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcclxuaW1wb3J0IHsgYXBwIH0gZnJvbSBcIi4uLy4uL0ZpcmViYXNlL0ZpcmViYXNlXCJcclxuaW1wb3J0IEluc3ROYXYgZnJvbSBcIi4uLy4uL2NvbXBvbmVudC9JbnN0cnVjdG9ycy9JbnN0TmF2XCI7XHJcbmltcG9ydCBJbnN0U2lkZWJhciBmcm9tIFwiLi4vLi4vY29tcG9uZW50L0luc3RydWN0b3JzL0luc3RTaWRlYmFyclwiO1xyXG5pbXBvcnQgeyBCb3gsIENpcmN1bGFyUHJvZ3Jlc3MsIFN0YWNrIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5zdHJ1Y3RvckRhc2hib2FyZCgpIHtcclxuXHJcbiAgICBjb25zdCBbc3RhdHVzQ2hlY2ssIHNldHN0YXR1c0NoZWNrXSA9IHVzZVN0YXRlKHRydWUpXHJcbiAgICBjb25zdCBbc3RhdHVzVmFsdWUsIHNldFN0YXR1c1ZhbHVlXSA9IHVzZVN0YXRlKCcnKVxyXG5cclxuXHJcbiAgICBjb25zdCBbaW5zdHJ1Y3RvcnMsIHNldEluc3RydWN0b3JzXSA9IFJlYWN0LnVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGluc3RydWN0b3JzKVxyXG5cclxuICAgIGNvbnN0IFt1c2VySWQsIHNldFVzZXJJZF0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIC8vIExpc3RlbiBmb3IgY2hhbmdlcyBpbiB0aGUgYXV0aGVudGljYXRpb24gc3RhdGVcclxuICAgICAgICBjb25zdCBhdXRoID0gZ2V0QXV0aChhcHApO1xyXG5cclxuICAgICAgICBjb25zdCB1bnN1YnNjcmliZSA9IGF1dGgub25BdXRoU3RhdGVDaGFuZ2VkKHVzZXIgPT4ge1xyXG4gICAgICAgICAgICBpZiAodXNlcikge1xyXG4gICAgICAgICAgICAgICAgLy8gVXNlciBpcyBzaWduZWQgaW4sIGdldCB0aGUgdXNlciBJRFxyXG4gICAgICAgICAgICAgICAgc2V0VXNlcklkKHVzZXIudWlkKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIFVzZXIgaXMgc2lnbmVkIG91dCwgc2V0IHVzZXIgSUQgdG8gbnVsbFxyXG4gICAgICAgICAgICAgICAgc2V0VXNlcklkKG51bGwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIENsZWFuIHVwIHRoZSBsaXN0ZW5lciB3aGVuIHRoZSBjb21wb25lbnQgdW5tb3VudHNcclxuICAgICAgICByZXR1cm4gKCkgPT4gdW5zdWJzY3JpYmUoKTtcclxuICAgIH0sIFtdKTtcclxuICAgIGNvbnNvbGUubG9nKHVzZXJJZClcclxuXHJcblxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZmV0Y2hJbnN0cnVjdG9ycyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaW5zdHJ1Y3RvckNvbGxlY3Rpb24gPSBjb2xsZWN0aW9uKGRiLCAnSW5zdHJ1Y3RvcicpO1xyXG4gICAgICAgICAgICBjb25zdCBpbnN0cnVjdG9yU25hcHNob3QgPSBhd2FpdCBnZXREb2NzKGluc3RydWN0b3JDb2xsZWN0aW9uKTtcclxuICAgICAgICAgICAgY29uc3QgaW5zdHJ1Y3RvcnNMaXN0ID0gaW5zdHJ1Y3RvclNuYXBzaG90LmRvY3MubWFwKChkb2MpID0+ICh7XHJcbiAgICAgICAgICAgICAgICBpZDogZG9jLmlkLFxyXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlczogZG9jLmRhdGEoKSxcclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICBzZXRJbnN0cnVjdG9ycyhpbnN0cnVjdG9yc0xpc3QpO1xyXG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuXHJcbiAgICAgICAgICAgIGluc3RydWN0b3JzTGlzdC5mb3JFYWNoKHMgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChzLmlkID09PSB1c2VySWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocy5hdHRyaWJ1dGVzLnN0YXR1cyA9PT0gJ0FjdGl2ZScpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocy5hdHRyaWJ1dGVzLnN0YXR1cylcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHN0YXR1c0NoZWNrKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3RhdHVzVmFsdWUocy5hdHRyaWJ1dGVzLnN0YXR1cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0c3RhdHVzQ2hlY2sodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRzdGF0dXNDaGVjayh0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGZldGNoSW5zdHJ1Y3RvcnMoKTtcclxuICAgIH0sIFt1c2VySWRdKTtcclxuXHJcbiAgICBpZiAobG9hZGluZykgcmV0dXJuIDxkaXY+PENpcmN1bGFyUHJvZ3Jlc3Mgc2l6ZT17MTAwfSBjb2xvcj1cInN1Y2Nlc3NcIiBzeD17eyBtYXJnaW46IFwiMjAwcHggMHB4IDU1MHB4IDAgXCIgfX0gLz48L2Rpdj47XHJcblxyXG5cclxuXHJcblxyXG4gICAgY29uc29sZS5sb2coaW5zdHJ1Y3RvcnMpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7c3RhdHVzQ2hlY2sgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHA+WW91ciByZXF1ZXN0IGlzIHBlbmRpbmc8L3A+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxCb3g+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5zdE5hdiAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj1cInJvd1wiIHNwYWNpbmc9ezJ9ID5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5zdFNpZGViYXIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPENhcmQgLz4gKi99XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICB7LyogPFVwbG9hZEZpbGUgLz4gKi99XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlRmV0Y2giLCJjb2xsZWN0aW9uIiwiZ2V0RG9jcyIsImRvYyIsImRlbGV0ZURvYyIsInVwZGF0ZURvYyIsInNldERvYyIsImRiIiwiZ2V0QXV0aCIsImFwcCIsIkluc3ROYXYiLCJJbnN0U2lkZWJhciIsIkJveCIsIkNpcmN1bGFyUHJvZ3Jlc3MiLCJTdGFjayIsImluc3RydWN0b3JEYXNoYm9hcmQiLCJzdGF0dXNDaGVjayIsInNldHN0YXR1c0NoZWNrIiwic3RhdHVzVmFsdWUiLCJzZXRTdGF0dXNWYWx1ZSIsImluc3RydWN0b3JzIiwic2V0SW5zdHJ1Y3RvcnMiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImNvbnNvbGUiLCJsb2ciLCJ1c2VySWQiLCJzZXRVc2VySWQiLCJhdXRoIiwidW5zdWJzY3JpYmUiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJ1c2VyIiwidWlkIiwiZmV0Y2hJbnN0cnVjdG9ycyIsImluc3RydWN0b3JDb2xsZWN0aW9uIiwiaW5zdHJ1Y3RvclNuYXBzaG90IiwiaW5zdHJ1Y3RvcnNMaXN0IiwiZG9jcyIsIm1hcCIsImlkIiwiYXR0cmlidXRlcyIsImRhdGEiLCJmb3JFYWNoIiwicyIsInN0YXR1cyIsImRpdiIsInNpemUiLCJjb2xvciIsInN4IiwibWFyZ2luIiwicCIsImRpcmVjdGlvbiIsInNwYWNpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Instructor/index.js\n"));

/***/ })

});