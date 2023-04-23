"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/Student",{

/***/ "./component/Student/CourseCard.js":
/*!*****************************************!*\
  !*** ./component/Student/CourseCard.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Card */ \"./node_modules/@mui/material/esm/Card/index.js\");\n/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/CardContent */ \"./node_modules/@mui/material/esm/CardContent/index.js\");\n/* harmony import */ var _mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/CardMedia */ \"./node_modules/@mui/material/esm/CardMedia/index.js\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Typography */ \"./node_modules/@mui/material/esm/Typography/index.js\");\n/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/system */ \"./node_modules/@mui/system/esm/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_ButtonBase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/ButtonBase */ \"./node_modules/@mui/material/esm/ButtonBase/index.js\");\n/* harmony import */ var _hooks_useFetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useFetch */ \"./hooks/useFetch.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst CourseCard = (param)=>{\n    let { course  } = param;\n    _s();\n    const { CourseTitle , InstructorName , CourseDescription , img  } = course;\n    const { data: imageUrl  } = (0,_hooks_useFetch__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"https://firebasestorage.googleapis.com/v0/b/edushare-e9242.appspot.com/o/images%2F\".concat(img, \"?alt=media\"));\n    if (!course) {\n        return null;\n    }\n    console.log(imageUrl);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        href: \"Student/course/\".concat(course.id),\n        passHref: true,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ButtonBase__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            component: \"div\",\n            sx: {\n                textDecoration: \"none\",\n                color: \"inherit\"\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Card__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                sx: {\n                    display: \"flex\",\n                    flexDirection: \"column\",\n                    height: \"100%\",\n                    cursor: \"pointer\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        component: \"img\",\n                        height: \"100\",\n                        image: imageUrl,\n                        alt: CourseTitle\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\component\\\\Student\\\\CourseCard.js\",\n                        lineNumber: 26,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        sx: {\n                            flex: 1\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                gutterBottom: true,\n                                variant: \"h6\",\n                                component: \"div\",\n                                children: CourseTitle\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\component\\\\Student\\\\CourseCard.js\",\n                                lineNumber: 33,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                variant: \"subtitle2\",\n                                color: \"text.secondary\",\n                                children: [\n                                    \"By: \",\n                                    InstructorName\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\component\\\\Student\\\\CourseCard.js\",\n                                lineNumber: 36,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_system__WEBPACK_IMPORTED_MODULE_9__.Box, {\n                                mt: 1,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                    variant: \"body2\",\n                                    color: \"text.secondary\",\n                                    children: CourseDescription\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\component\\\\Student\\\\CourseCard.js\",\n                                    lineNumber: 40,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\component\\\\Student\\\\CourseCard.js\",\n                                lineNumber: 39,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\component\\\\Student\\\\CourseCard.js\",\n                        lineNumber: 32,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\component\\\\Student\\\\CourseCard.js\",\n                lineNumber: 25,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\component\\\\Student\\\\CourseCard.js\",\n            lineNumber: 24,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\component\\\\Student\\\\CourseCard.js\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CourseCard, \"zc57vKjldnCOWVAj3Y7gJ59+wnw=\", false, function() {\n    return [\n        _hooks_useFetch__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = CourseCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CourseCard);\nvar _c;\n$RefreshReg$(_c, \"CourseCard\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnQvU3R1ZGVudC9Db3Vyc2VDYXJkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQTBCO0FBQ1k7QUFDYztBQUNKO0FBQ0U7QUFDaEI7QUFDTDtBQUNxQjtBQUNOO0FBRTVDLE1BQU1TLGFBQWEsU0FBZ0I7UUFBZixFQUFFQyxPQUFNLEVBQUU7O0lBQzVCLE1BQU0sRUFBRUMsWUFBVyxFQUFFQyxlQUFjLEVBQUVDLGtCQUFpQixFQUFFQyxJQUFHLEVBQUUsR0FBR0o7SUFFaEUsTUFBTSxFQUFFSyxNQUFNQyxTQUFRLEVBQUUsR0FBR1IsMkRBQVFBLENBQ2pDLHFGQUF5RixPQUFKTSxLQUFJO0lBRzNGLElBQUksQ0FBQ0osUUFBUTtRQUNYLE9BQU8sSUFBSTtJQUNiLENBQUM7SUFDSE8sUUFBUUMsR0FBRyxDQUFDRjtJQUNWLHFCQUNFLDhEQUFDVixrREFBSUE7UUFBQ2EsTUFBTSxrQkFBNEIsT0FBVlQsT0FBT1UsRUFBRTtRQUFJQyxRQUFRO2tCQUNqRCw0RUFBQ2QsZ0VBQVVBO1lBQUNlLFdBQVU7WUFBTUMsSUFBSTtnQkFBRUMsZ0JBQWdCO2dCQUFRQyxPQUFPO1lBQVU7c0JBQ3pFLDRFQUFDeEIsMERBQUlBO2dCQUFDc0IsSUFBSTtvQkFBRUcsU0FBUztvQkFBUUMsZUFBZTtvQkFBVUMsUUFBUTtvQkFBUUMsUUFBUTtnQkFBVTs7a0NBQ3RGLDhEQUFDMUIsK0RBQVNBO3dCQUNSbUIsV0FBVTt3QkFDVk0sUUFBTzt3QkFDUEUsT0FBT2Q7d0JBQ1BlLEtBQUtwQjs7Ozs7O2tDQUVQLDhEQUFDVCxpRUFBV0E7d0JBQUNxQixJQUFJOzRCQUFFUyxNQUFNO3dCQUFFOzswQ0FDekIsOERBQUM1QixnRUFBVUE7Z0NBQUM2QixZQUFZO2dDQUFDQyxTQUFRO2dDQUFLWixXQUFVOzBDQUM3Q1g7Ozs7OzswQ0FFSCw4REFBQ1AsZ0VBQVVBO2dDQUFDOEIsU0FBUTtnQ0FBWVQsT0FBTTs7b0NBQWlCO29DQUNoRGI7Ozs7Ozs7MENBRVAsOERBQUNQLDRDQUFHQTtnQ0FBQzhCLElBQUk7MENBQ1AsNEVBQUMvQixnRUFBVUE7b0NBQUM4QixTQUFRO29DQUFRVCxPQUFNOzhDQUMvQlo7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFqQjtHQXRDTUo7O1FBR3VCRCx1REFBUUE7OztLQUgvQkM7QUF3Q04sK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L1N0dWRlbnQvQ291cnNlQ2FyZC5qcz9kMDk3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDYXJkIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ2FyZCc7XHJcbmltcG9ydCBDYXJkQ29udGVudCBmcm9tICdAbXVpL21hdGVyaWFsL0NhcmRDb250ZW50JztcclxuaW1wb3J0IENhcmRNZWRpYSBmcm9tICdAbXVpL21hdGVyaWFsL0NhcmRNZWRpYSc7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCB7IEJveCB9IGZyb20gJ0BtdWkvc3lzdGVtJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IEJ1dHRvbkJhc2UgZnJvbSAnQG11aS9tYXRlcmlhbC9CdXR0b25CYXNlJztcclxuaW1wb3J0IHVzZUZldGNoIGZyb20gJy4uLy4uL2hvb2tzL3VzZUZldGNoJztcclxuXHJcbmNvbnN0IENvdXJzZUNhcmQgPSAoeyBjb3Vyc2UgfSkgPT4ge1xyXG4gIGNvbnN0IHsgQ291cnNlVGl0bGUsIEluc3RydWN0b3JOYW1lLCBDb3Vyc2VEZXNjcmlwdGlvbiwgaW1nIH0gPSBjb3Vyc2U7XHJcblxyXG4gIGNvbnN0IHsgZGF0YTogaW1hZ2VVcmwgfSA9IHVzZUZldGNoKFxyXG4gICAgYGh0dHBzOi8vZmlyZWJhc2VzdG9yYWdlLmdvb2dsZWFwaXMuY29tL3YwL2IvZWR1c2hhcmUtZTkyNDIuYXBwc3BvdC5jb20vby9pbWFnZXMlMkYke2ltZ30/YWx0PW1lZGlhYFxyXG4gICk7XHJcblxyXG4gIGlmICghY291cnNlKSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbmNvbnNvbGUubG9nKGltYWdlVXJsKVxyXG4gIHJldHVybiAoXHJcbiAgICA8TGluayBocmVmPXtgU3R1ZGVudC9jb3Vyc2UvJHtjb3Vyc2UuaWR9YH0gcGFzc0hyZWY+XHJcbiAgICAgIDxCdXR0b25CYXNlIGNvbXBvbmVudD1cImRpdlwiIHN4PXt7IHRleHREZWNvcmF0aW9uOiAnbm9uZScsIGNvbG9yOiAnaW5oZXJpdCcgfX0+XHJcbiAgICAgICAgPENhcmQgc3g9e3sgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgaGVpZ2h0OiAnMTAwJScsIGN1cnNvcjogJ3BvaW50ZXInIH19PlxyXG4gICAgICAgICAgPENhcmRNZWRpYVxyXG4gICAgICAgICAgICBjb21wb25lbnQ9XCJpbWdcIlxyXG4gICAgICAgICAgICBoZWlnaHQ9XCIxMDBcIlxyXG4gICAgICAgICAgICBpbWFnZT17aW1hZ2VVcmx9XHJcbiAgICAgICAgICAgIGFsdD17Q291cnNlVGl0bGV9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPENhcmRDb250ZW50IHN4PXt7IGZsZXg6IDEgfX0+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGd1dHRlckJvdHRvbSB2YXJpYW50PVwiaDZcIiBjb21wb25lbnQ9XCJkaXZcIj5cclxuICAgICAgICAgICAgICB7Q291cnNlVGl0bGV9XHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMlwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgICBCeToge0luc3RydWN0b3JOYW1lfVxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDxCb3ggbXQ9ezF9PlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgICAgIHtDb3Vyc2VEZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgICA8L0NhcmQ+XHJcbiAgICAgIDwvQnV0dG9uQmFzZT5cclxuICAgIDwvTGluaz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ291cnNlQ2FyZDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ2FyZCIsIkNhcmRDb250ZW50IiwiQ2FyZE1lZGlhIiwiVHlwb2dyYXBoeSIsIkJveCIsIkxpbmsiLCJCdXR0b25CYXNlIiwidXNlRmV0Y2giLCJDb3Vyc2VDYXJkIiwiY291cnNlIiwiQ291cnNlVGl0bGUiLCJJbnN0cnVjdG9yTmFtZSIsIkNvdXJzZURlc2NyaXB0aW9uIiwiaW1nIiwiZGF0YSIsImltYWdlVXJsIiwiY29uc29sZSIsImxvZyIsImhyZWYiLCJpZCIsInBhc3NIcmVmIiwiY29tcG9uZW50Iiwic3giLCJ0ZXh0RGVjb3JhdGlvbiIsImNvbG9yIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJoZWlnaHQiLCJjdXJzb3IiLCJpbWFnZSIsImFsdCIsImZsZXgiLCJndXR0ZXJCb3R0b20iLCJ2YXJpYW50IiwibXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./component/Student/CourseCard.js\n"));

/***/ })

});