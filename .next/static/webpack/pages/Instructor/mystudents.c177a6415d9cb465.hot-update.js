/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/Instructor/mystudents",{

/***/ "./component/Instructors/MyStudents.js":
/*!*********************************************!*\
  !*** ./component/Instructors/MyStudents.js ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
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
                // @ts-ignore importMeta is replaced in the loader
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
    })();


/***/ }),

/***/ "./pages/Instructor/mystudents.js":
/*!****************************************!*\
  !*** ./pages/Instructor/mystudents.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _component_Instructors_InstSidebarr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../component/Instructors/InstSidebarr */ \"./component/Instructors/InstSidebarr.js\");\n/* harmony import */ var _component_Instructors_InstNav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../component/Instructors/InstNav */ \"./component/Instructors/InstNav.js\");\n/* harmony import */ var _component_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../component/Card */ \"./component/Card.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/esm/index.js\");\n/* harmony import */ var _component_Instructors_MyStudents__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../component/Instructors/MyStudents */ \"./component/Instructors/MyStudents.js\");\n/* harmony import */ var _component_Instructors_MyStudents__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_component_Instructors_MyStudents__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _component_Loading___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../component/Loading  */ \"./component/Loading .js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction mystudents() {\n    _s();\n    const [search, setSearch] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"\");\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setTimeout(()=>{\n            setLoading(false);\n        }, 2000); // Set timeout to 5 seconds\n    }, []);\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_Loading___WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\moham\\\\Documents\\\\GitHub\\\\eduShare\\\\pages\\\\Instructor\\\\mystudents.js\",\n            lineNumber: 19,\n            columnNumber: 14\n        }, this); // Render Loading component\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Box, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_Instructors_InstNav__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    setCourseSearch: setSearch\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\moham\\\\Documents\\\\GitHub\\\\eduShare\\\\pages\\\\Instructor\\\\mystudents.js\",\n                    lineNumber: 27,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Stack, {\n                    direction: \"row\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_Instructors_InstSidebarr__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\moham\\\\Documents\\\\GitHub\\\\eduShare\\\\pages\\\\Instructor\\\\mystudents.js\",\n                            lineNumber: 31,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: {\n                                display: \"flex\",\n                                alignItems: \"center\",\n                                margin: \"px 0 0 0\"\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Box, {\n                                flexGrow: 1,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_component_Instructors_MyStudents__WEBPACK_IMPORTED_MODULE_5___default()), {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\moham\\\\Documents\\\\GitHub\\\\eduShare\\\\pages\\\\Instructor\\\\mystudents.js\",\n                                    lineNumber: 35,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\moham\\\\Documents\\\\GitHub\\\\eduShare\\\\pages\\\\Instructor\\\\mystudents.js\",\n                                lineNumber: 34,\n                                columnNumber: 21\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\moham\\\\Documents\\\\GitHub\\\\eduShare\\\\pages\\\\Instructor\\\\mystudents.js\",\n                            lineNumber: 33,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\moham\\\\Documents\\\\GitHub\\\\eduShare\\\\pages\\\\Instructor\\\\mystudents.js\",\n                    lineNumber: 29,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\moham\\\\Documents\\\\GitHub\\\\eduShare\\\\pages\\\\Instructor\\\\mystudents.js\",\n            lineNumber: 25,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\moham\\\\Documents\\\\GitHub\\\\eduShare\\\\pages\\\\Instructor\\\\mystudents.js\",\n        lineNumber: 24,\n        columnNumber: 9\n    }, this);\n}\n_s(mystudents, \"zY7wdW5FtRUtstPZPeGaOsgGYjQ=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (mystudents);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9JbnN0cnVjdG9yL215c3R1ZGVudHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQStDO0FBQ21CO0FBQ1Q7QUFDbEI7QUFDRztBQUNxQjtBQUNqQjtBQUM5QyxTQUFTVSxhQUFhOztJQUNsQixNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR1oscURBQWMsQ0FBQztJQUMzQyxNQUFNLENBQUNhLFNBQVNDLFdBQVcsR0FBR1osK0NBQVFBLENBQUMsSUFBSTtJQUUzQ0QsZ0RBQVNBLENBQUMsSUFBTTtRQUNkYyxXQUFXLElBQU07WUFDZkQsV0FBVyxLQUFLO1FBQ2xCLEdBQUcsT0FBTywyQkFBMkI7SUFDdkMsR0FBRyxFQUFFO0lBRUwsSUFBSUQsU0FBUztRQUNYLHFCQUFPLDhEQUFDSiwyREFBT0E7Ozs7a0JBQUssMkJBQTJCO0lBQ2pELENBQUM7SUFFRCxxQkFFSSw4REFBQ087a0JBQ0csNEVBQUNWLDhDQUFHQTs7OEJBRUEsOERBQUNGLHNFQUFPQTtvQkFBQ2EsaUJBQWlCTDs7Ozs7OzhCQUUxQiw4REFBQ0wsZ0RBQUtBO29CQUFDVyxXQUFVOztzQ0FFYiw4REFBQ2YsMkVBQVdBOzs7OztzQ0FFWiw4REFBQ2E7NEJBQUlHLE9BQU87Z0NBQUVDLFNBQVM7Z0NBQVFDLFlBQVk7Z0NBQVVDLFFBQVE7NEJBQVc7c0NBQ3hFLDRFQUFDaEIsOENBQUdBO2dDQUFDaUIsVUFBVTswQ0FDWCw0RUFBQ2YsMEVBQVVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFuQztHQW5DU0U7QUFxQ1QsK0RBQWVBLFVBQVVBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvSW5zdHJ1Y3Rvci9teXN0dWRlbnRzLmpzPzY5MTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0ICx7dXNlRWZmZWN0LHVzZVN0YXRlIH1mcm9tICdyZWFjdCdcclxuaW1wb3J0IEluc3RTaWRlYmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudC9JbnN0cnVjdG9ycy9JbnN0U2lkZWJhcnInXHJcbmltcG9ydCBJbnN0TmF2IGZyb20gJy4uLy4uL2NvbXBvbmVudC9JbnN0cnVjdG9ycy9JbnN0TmF2J1xyXG5pbXBvcnQgQ2FyZCBmcm9tICcuLi8uLi9jb21wb25lbnQvQ2FyZCdcclxuaW1wb3J0IHsgQm94LCBTdGFjayB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCJcclxuaW1wb3J0IE15U3R1ZGVudHMgZnJvbSAnLi4vLi4vY29tcG9uZW50L0luc3RydWN0b3JzL015U3R1ZGVudHMnXHJcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4uLy4uL2NvbXBvbmVudC9Mb2FkaW5nICdcclxuZnVuY3Rpb24gbXlzdHVkZW50cygpIHtcclxuICAgIGNvbnN0IFtzZWFyY2gsIHNldFNlYXJjaF0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKVxyXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIH0sIDIwMDApOyAvLyBTZXQgdGltZW91dCB0byA1IHNlY29uZHNcclxuICAgIH0sIFtdKTtcclxuICBcclxuICAgIGlmIChsb2FkaW5nKSB7XHJcbiAgICAgIHJldHVybiA8TG9hZGluZyAvPjsgLy8gUmVuZGVyIExvYWRpbmcgY29tcG9uZW50XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuXHJcbiAgICAgICAgPGRpdiA+XHJcbiAgICAgICAgICAgIDxCb3g+XHJcblxyXG4gICAgICAgICAgICAgICAgPEluc3ROYXYgc2V0Q291cnNlU2VhcmNoPXtzZXRTZWFyY2h9IC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj1cInJvd1wiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8SW5zdFNpZGViYXIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiwgbWFyZ2luOiBcInB4IDAgMCAwXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJveCBmbGV4R3Jvdz17MX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNeVN0dWRlbnRzIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L1N0YWNrPlxyXG5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG15c3R1ZGVudHMiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkluc3RTaWRlYmFyIiwiSW5zdE5hdiIsIkNhcmQiLCJCb3giLCJTdGFjayIsIk15U3R1ZGVudHMiLCJMb2FkaW5nIiwibXlzdHVkZW50cyIsInNlYXJjaCIsInNldFNlYXJjaCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwic2V0VGltZW91dCIsImRpdiIsInNldENvdXJzZVNlYXJjaCIsImRpcmVjdGlvbiIsInN0eWxlIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJtYXJnaW4iLCJmbGV4R3JvdyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/Instructor/mystudents.js\n"));

/***/ })

});