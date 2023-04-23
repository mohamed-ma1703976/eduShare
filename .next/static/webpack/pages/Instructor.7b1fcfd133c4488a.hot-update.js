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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ instructorDashboard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useFetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useFetch */ \"./hooks/useFetch.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Firebase/Firebase */ \"./Firebase/Firebase.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var _component_Instructors_InstNav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../component/Instructors/InstNav */ \"./component/Instructors/InstNav.js\");\n/* harmony import */ var _component_Instructors_InstSidebarr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../component/Instructors/InstSidebarr */ \"./component/Instructors/InstSidebarr.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction instructorDashboard() {\n    _s();\n    const [statusCheck, setstatusCheck] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [statusValue, setStatusValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [instructors, setInstructors] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);\n    const [loading, setLoading] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(true);\n    console.log(instructors);\n    const [userId, setUserId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Listen for changes in the authentication state\n        const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_5__.getAuth)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_4__.app);\n        const unsubscribe = auth.onAuthStateChanged((user)=>{\n            if (user) {\n                // User is signed in, get the user ID\n                setUserId(user.uid);\n            } else {\n                // User is signed out, set user ID to null\n                setUserId(null);\n            }\n        });\n        // Clean up the listener when the component unmounts\n        return ()=>unsubscribe();\n    }, []);\n    console.log(userId);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchInstructors = async ()=>{\n            const instructorCollection = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_4__.db, \"Instructor\");\n            const instructorSnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDocs)(instructorCollection);\n            const instructorsList = instructorSnapshot.docs.map((doc)=>({\n                    id: doc.id,\n                    attributes: doc.data()\n                }));\n            setInstructors(instructorsList);\n            setLoading(false);\n            instructorsList.forEach((s)=>{\n                if (s.id === userId) {\n                    if (s.attributes.status === \"Active\") {\n                        console.log(s.attributes.status);\n                        setstatusCheck(false);\n                        setStatusValue(s.attributes.status);\n                    } else {\n                        setstatusCheck(true);\n                    }\n                } else {\n                    setstatusCheck(true);\n                }\n            });\n        };\n        fetchInstructors();\n    }, [\n        userId\n    ]);\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.CircularProgress, {\n            size: 100,\n            color: \"success\",\n            sx: {\n                margin: \"auto\"\n            }\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\pages\\\\Instructor\\\\index.js\",\n            lineNumber: 83,\n            columnNumber: 30\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\pages\\\\Instructor\\\\index.js\",\n        lineNumber: 83,\n        columnNumber: 25\n    }, this);\n    console.log(instructors);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: statusCheck ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Your request is pending\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\pages\\\\Instructor\\\\index.js\",\n                lineNumber: 95,\n                columnNumber: 21\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Box, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_Instructors_InstNav__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\pages\\\\Instructor\\\\index.js\",\n                        lineNumber: 99,\n                        columnNumber: 25\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Stack, {\n                        direction: \"row\",\n                        spacing: 2,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_Instructors_InstSidebarr__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\pages\\\\Instructor\\\\index.js\",\n                            lineNumber: 103,\n                            columnNumber: 29\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\pages\\\\Instructor\\\\index.js\",\n                        lineNumber: 101,\n                        columnNumber: 25\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\pages\\\\Instructor\\\\index.js\",\n                lineNumber: 97,\n                columnNumber: 21\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\pages\\\\Instructor\\\\index.js\",\n            lineNumber: 93,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\pages\\\\Instructor\\\\index.js\",\n        lineNumber: 91,\n        columnNumber: 9\n    }, this);\n}\n_s(instructorDashboard, \"pbjljeQh6sJ5fCFCkJE/4C0vWI0=\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9JbnN0cnVjdG9yL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUF3RDtBQUNaO0FBUWhCO0FBQ2dCO0FBQ0o7QUFDSztBQUNhO0FBQ1M7QUFDTjtBQUM5QyxTQUFTbUIsc0JBQXNCOztJQUUxQyxNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR2xCLCtDQUFRQSxDQUFDLElBQUk7SUFDbkQsTUFBTSxDQUFDbUIsYUFBYUMsZUFBZSxHQUFHcEIsK0NBQVFBLENBQUM7SUFHL0MsTUFBTSxDQUFDcUIsYUFBYUMsZUFBZSxHQUFHekIscURBQWMsQ0FBQyxFQUFFO0lBQ3ZELE1BQU0sQ0FBQzBCLFNBQVNDLFdBQVcsR0FBRzNCLHFEQUFjLENBQUMsSUFBSTtJQUVqRDRCLFFBQVFDLEdBQUcsQ0FBQ0w7SUFFWixNQUFNLENBQUNNLFFBQVFDLFVBQVUsR0FBRzVCLCtDQUFRQSxDQUFDLElBQUk7SUFFekNELGdEQUFTQSxDQUFDLElBQU07UUFDWixpREFBaUQ7UUFDakQsTUFBTThCLE9BQU9wQixzREFBT0EsQ0FBQ0MsbURBQUdBO1FBRXhCLE1BQU1vQixjQUFjRCxLQUFLRSxrQkFBa0IsQ0FBQ0MsQ0FBQUEsT0FBUTtZQUNoRCxJQUFJQSxNQUFNO2dCQUNOLHFDQUFxQztnQkFDckNKLFVBQVVJLEtBQUtDLEdBQUc7WUFDdEIsT0FBTztnQkFDSCwwQ0FBMEM7Z0JBQzFDTCxVQUFVLElBQUk7WUFDbEIsQ0FBQztRQUNMO1FBRUEsb0RBQW9EO1FBQ3BELE9BQU8sSUFBTUU7SUFDakIsR0FBRyxFQUFFO0lBQ0xMLFFBQVFDLEdBQUcsQ0FBQ0M7SUFJWjVCLGdEQUFTQSxDQUFDLElBQU07UUFDWixNQUFNbUMsbUJBQW1CLFVBQVk7WUFDakMsTUFBTUMsdUJBQXVCakMsOERBQVVBLENBQUNNLGtEQUFFQSxFQUFFO1lBQzVDLE1BQU00QixxQkFBcUIsTUFBTWpDLDJEQUFPQSxDQUFDZ0M7WUFDekMsTUFBTUUsa0JBQWtCRCxtQkFBbUJFLElBQUksQ0FBQ0MsR0FBRyxDQUFDLENBQUNuQyxNQUFTO29CQUMxRG9DLElBQUlwQyxJQUFJb0MsRUFBRTtvQkFDVkMsWUFBWXJDLElBQUlzQyxJQUFJO2dCQUN4QjtZQUNBcEIsZUFBZWU7WUFDZmIsV0FBVyxLQUFLO1lBRWhCYSxnQkFBZ0JNLE9BQU8sQ0FBQ0MsQ0FBQUEsSUFBSztnQkFFekIsSUFBSUEsRUFBRUosRUFBRSxLQUFLYixRQUFRO29CQUNqQixJQUFJaUIsRUFBRUgsVUFBVSxDQUFDSSxNQUFNLEtBQUssVUFBVTt3QkFDbENwQixRQUFRQyxHQUFHLENBQUNrQixFQUFFSCxVQUFVLENBQUNJLE1BQU07d0JBRS9CM0IsZUFBZSxLQUFLO3dCQUNwQkUsZUFBZXdCLEVBQUVILFVBQVUsQ0FBQ0ksTUFBTTtvQkFDdEMsT0FBTzt3QkFDSDNCLGVBQWUsSUFBSTtvQkFDdkIsQ0FBQztnQkFDTCxPQUFPO29CQUNIQSxlQUFlLElBQUk7Z0JBQ3ZCLENBQUM7WUFDTDtRQUVKO1FBRUFnQjtJQUNKLEdBQUc7UUFBQ1A7S0FBTztJQUVYLElBQUlKLFNBQVMscUJBQU8sOERBQUN1QjtrQkFBSSw0RUFBQ2hDLDJEQUFnQkE7WUFBQ2lDLE1BQU07WUFBS0MsT0FBTTtZQUFVQyxJQUFJO2dCQUFFQyxRQUFRO1lBQU87Ozs7Ozs7Ozs7O0lBSzNGekIsUUFBUUMsR0FBRyxDQUFDTDtJQUVaLHFCQUNJLDhEQUFDeUI7a0JBRUcsNEVBQUNBO3NCQUNJN0IsNEJBQ0csOERBQUNrQzswQkFBRTs7Ozs7cUNBRUgsOERBQUN0Qyw4Q0FBR0E7O2tDQUVBLDhEQUFDRixzRUFBT0E7Ozs7O2tDQUVSLDhEQUFDSSxnREFBS0E7d0JBQUNxQyxXQUFVO3dCQUFNQyxTQUFTO2tDQUU1Qiw0RUFBQ3pDLDJFQUFXQTs7Ozs7Ozs7Ozs7Ozs7O29CQU92Qjs7Ozs7Ozs7Ozs7QUFPakIsQ0FBQztHQXBHdUJJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL0luc3RydWN0b3IvaW5kZXguanM/MWYyYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB1c2VGZXRjaCBmcm9tIFwiLi4vLi4vaG9va3MvdXNlRmV0Y2hcIjtcclxuaW1wb3J0IHtcclxuICAgIGNvbGxlY3Rpb24sXHJcbiAgICBnZXREb2NzLFxyXG4gICAgZG9jLFxyXG4gICAgZGVsZXRlRG9jLFxyXG4gICAgdXBkYXRlRG9jLFxyXG4gICAgc2V0RG9jLFxyXG59IGZyb20gJ2ZpcmViYXNlL2ZpcmVzdG9yZSc7XHJcbmltcG9ydCB7IGRiIH0gZnJvbSAnLi4vLi4vRmlyZWJhc2UvRmlyZWJhc2UnXHJcbmltcG9ydCB7IGdldEF1dGggfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xyXG5pbXBvcnQgeyBhcHAgfSBmcm9tIFwiLi4vLi4vRmlyZWJhc2UvRmlyZWJhc2VcIlxyXG5pbXBvcnQgSW5zdE5hdiBmcm9tIFwiLi4vLi4vY29tcG9uZW50L0luc3RydWN0b3JzL0luc3ROYXZcIjtcclxuaW1wb3J0IEluc3RTaWRlYmFyIGZyb20gXCIuLi8uLi9jb21wb25lbnQvSW5zdHJ1Y3RvcnMvSW5zdFNpZGViYXJyXCI7XHJcbmltcG9ydCB7IEJveCwgQ2lyY3VsYXJQcm9ncmVzcywgU3RhY2sgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbnN0cnVjdG9yRGFzaGJvYXJkKCkge1xyXG5cclxuICAgIGNvbnN0IFtzdGF0dXNDaGVjaywgc2V0c3RhdHVzQ2hlY2tdID0gdXNlU3RhdGUodHJ1ZSlcclxuICAgIGNvbnN0IFtzdGF0dXNWYWx1ZSwgc2V0U3RhdHVzVmFsdWVdID0gdXNlU3RhdGUoJycpXHJcblxyXG5cclxuICAgIGNvbnN0IFtpbnN0cnVjdG9ycywgc2V0SW5zdHJ1Y3RvcnNdID0gUmVhY3QudXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gICAgY29uc29sZS5sb2coaW5zdHJ1Y3RvcnMpXHJcblxyXG4gICAgY29uc3QgW3VzZXJJZCwgc2V0VXNlcklkXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgLy8gTGlzdGVuIGZvciBjaGFuZ2VzIGluIHRoZSBhdXRoZW50aWNhdGlvbiBzdGF0ZVxyXG4gICAgICAgIGNvbnN0IGF1dGggPSBnZXRBdXRoKGFwcCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHVuc3Vic2NyaWJlID0gYXV0aC5vbkF1dGhTdGF0ZUNoYW5nZWQodXNlciA9PiB7XHJcbiAgICAgICAgICAgIGlmICh1c2VyKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBVc2VyIGlzIHNpZ25lZCBpbiwgZ2V0IHRoZSB1c2VyIElEXHJcbiAgICAgICAgICAgICAgICBzZXRVc2VySWQodXNlci51aWQpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gVXNlciBpcyBzaWduZWQgb3V0LCBzZXQgdXNlciBJRCB0byBudWxsXHJcbiAgICAgICAgICAgICAgICBzZXRVc2VySWQobnVsbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gQ2xlYW4gdXAgdGhlIGxpc3RlbmVyIHdoZW4gdGhlIGNvbXBvbmVudCB1bm1vdW50c1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB1bnN1YnNjcmliZSgpO1xyXG4gICAgfSwgW10pO1xyXG4gICAgY29uc29sZS5sb2codXNlcklkKVxyXG5cclxuXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBmZXRjaEluc3RydWN0b3JzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpbnN0cnVjdG9yQ29sbGVjdGlvbiA9IGNvbGxlY3Rpb24oZGIsICdJbnN0cnVjdG9yJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGluc3RydWN0b3JTbmFwc2hvdCA9IGF3YWl0IGdldERvY3MoaW5zdHJ1Y3RvckNvbGxlY3Rpb24pO1xyXG4gICAgICAgICAgICBjb25zdCBpbnN0cnVjdG9yc0xpc3QgPSBpbnN0cnVjdG9yU25hcHNob3QuZG9jcy5tYXAoKGRvYykgPT4gKHtcclxuICAgICAgICAgICAgICAgIGlkOiBkb2MuaWQsXHJcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiBkb2MuZGF0YSgpLFxyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgIHNldEluc3RydWN0b3JzKGluc3RydWN0b3JzTGlzdCk7XHJcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG5cclxuICAgICAgICAgICAgaW5zdHJ1Y3RvcnNMaXN0LmZvckVhY2gocyA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHMuaWQgPT09IHVzZXJJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzLmF0dHJpYnV0ZXMuc3RhdHVzID09PSAnQWN0aXZlJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzLmF0dHJpYnV0ZXMuc3RhdHVzKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0c3RhdHVzQ2hlY2soZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRTdGF0dXNWYWx1ZShzLmF0dHJpYnV0ZXMuc3RhdHVzKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRzdGF0dXNDaGVjayh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldHN0YXR1c0NoZWNrKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgZmV0Y2hJbnN0cnVjdG9ycygpO1xyXG4gICAgfSwgW3VzZXJJZF0pO1xyXG5cclxuICAgIGlmIChsb2FkaW5nKSByZXR1cm4gPGRpdj48Q2lyY3VsYXJQcm9ncmVzcyBzaXplPXsxMDB9IGNvbG9yPVwic3VjY2Vzc1wiIHN4PXt7IG1hcmdpbjogXCJhdXRvXCIgfX0gLz48L2Rpdj47XHJcblxyXG5cclxuXHJcblxyXG4gICAgY29uc29sZS5sb2coaW5zdHJ1Y3RvcnMpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7c3RhdHVzQ2hlY2sgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHA+WW91ciByZXF1ZXN0IGlzIHBlbmRpbmc8L3A+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxCb3g+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5zdE5hdiAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj1cInJvd1wiIHNwYWNpbmc9ezJ9ID5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5zdFNpZGViYXIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPENhcmQgLz4gKi99XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICB7LyogPFVwbG9hZEZpbGUgLz4gKi99XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlRmV0Y2giLCJjb2xsZWN0aW9uIiwiZ2V0RG9jcyIsImRvYyIsImRlbGV0ZURvYyIsInVwZGF0ZURvYyIsInNldERvYyIsImRiIiwiZ2V0QXV0aCIsImFwcCIsIkluc3ROYXYiLCJJbnN0U2lkZWJhciIsIkJveCIsIkNpcmN1bGFyUHJvZ3Jlc3MiLCJTdGFjayIsImluc3RydWN0b3JEYXNoYm9hcmQiLCJzdGF0dXNDaGVjayIsInNldHN0YXR1c0NoZWNrIiwic3RhdHVzVmFsdWUiLCJzZXRTdGF0dXNWYWx1ZSIsImluc3RydWN0b3JzIiwic2V0SW5zdHJ1Y3RvcnMiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImNvbnNvbGUiLCJsb2ciLCJ1c2VySWQiLCJzZXRVc2VySWQiLCJhdXRoIiwidW5zdWJzY3JpYmUiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJ1c2VyIiwidWlkIiwiZmV0Y2hJbnN0cnVjdG9ycyIsImluc3RydWN0b3JDb2xsZWN0aW9uIiwiaW5zdHJ1Y3RvclNuYXBzaG90IiwiaW5zdHJ1Y3RvcnNMaXN0IiwiZG9jcyIsIm1hcCIsImlkIiwiYXR0cmlidXRlcyIsImRhdGEiLCJmb3JFYWNoIiwicyIsInN0YXR1cyIsImRpdiIsInNpemUiLCJjb2xvciIsInN4IiwibWFyZ2luIiwicCIsImRpcmVjdGlvbiIsInNwYWNpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Instructor/index.js\n"));

/***/ })

});