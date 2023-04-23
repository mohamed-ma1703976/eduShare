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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Card */ \"./node_modules/@mui/material/esm/Card/index.js\");\n/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/CardContent */ \"./node_modules/@mui/material/esm/CardContent/index.js\");\n/* harmony import */ var _mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/CardMedia */ \"./node_modules/@mui/material/esm/CardMedia/index.js\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Typography */ \"./node_modules/@mui/material/esm/Typography/index.js\");\n/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/system */ \"./node_modules/@mui/system/esm/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_ButtonBase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/ButtonBase */ \"./node_modules/@mui/material/esm/ButtonBase/index.js\");\n/* harmony import */ var _hooks_useFetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useFetch */ \"./hooks/useFetch.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst CourseCard = (param)=>{\n    let { course  } = param;\n    _s();\n    const { CourseTitle , InstructorName , CourseDescription , img  } = course;\n    const { data: imageUrl  } = (0,_hooks_useFetch__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"https://firebasestorage.googleapis.com/v0/b/edushare-e9242.appspot.com/o/images%2F\".concat(img, \"?alt=media\"));\n    if (!course) {\n        return null;\n    }\n    const url = \"https://cdn.pixabay.com/photo/2014/04/05/11/39/people-316506__480.jpg\";\n    console.log(imageUrl);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        href: \"Student/course/\".concat(course.id),\n        passHref: true,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ButtonBase__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            component: \"div\",\n            sx: {\n                textDecoration: \"none\",\n                color: \"inherit\"\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Card__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                sx: {\n                    display: \"flex\",\n                    flexDirection: \"column\",\n                    height: \"100%\",\n                    cursor: \"pointer\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        component: \"img\",\n                        height: \"100\",\n                        image: url,\n                        alt: CourseTitle\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\component\\\\Student\\\\CourseCard.js\",\n                        lineNumber: 27,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        sx: {\n                            flex: 1\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                gutterBottom: true,\n                                variant: \"h5\",\n                                component: \"div\",\n                                children: CourseTitle\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\component\\\\Student\\\\CourseCard.js\",\n                                lineNumber: 34,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                variant: \"subtitle2\",\n                                color: \"text.secondary\",\n                                children: [\n                                    \"By: \",\n                                    InstructorName\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\component\\\\Student\\\\CourseCard.js\",\n                                lineNumber: 37,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_system__WEBPACK_IMPORTED_MODULE_9__.Box, {\n                                mt: 1,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                    variant: \"body2\",\n                                    color: \"text.secondary\",\n                                    children: CourseDescription\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\component\\\\Student\\\\CourseCard.js\",\n                                    lineNumber: 41,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\component\\\\Student\\\\CourseCard.js\",\n                                lineNumber: 40,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\component\\\\Student\\\\CourseCard.js\",\n                        lineNumber: 33,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\component\\\\Student\\\\CourseCard.js\",\n                lineNumber: 26,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\component\\\\Student\\\\CourseCard.js\",\n            lineNumber: 25,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\component\\\\Student\\\\CourseCard.js\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CourseCard, \"zc57vKjldnCOWVAj3Y7gJ59+wnw=\", false, function() {\n    return [\n        _hooks_useFetch__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = CourseCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CourseCard);\nvar _c;\n$RefreshReg$(_c, \"CourseCard\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnQvU3R1ZGVudC9Db3Vyc2VDYXJkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQTBCO0FBQ1k7QUFDYztBQUNKO0FBQ0U7QUFDaEI7QUFDTDtBQUNxQjtBQUNOO0FBRTVDLE1BQU1TLGFBQWEsU0FBZ0I7UUFBZixFQUFFQyxPQUFNLEVBQUU7O0lBQzVCLE1BQU0sRUFBRUMsWUFBVyxFQUFFQyxlQUFjLEVBQUVDLGtCQUFpQixFQUFFQyxJQUFHLEVBQUUsR0FBR0o7SUFFaEUsTUFBTSxFQUFFSyxNQUFNQyxTQUFRLEVBQUUsR0FBR1IsMkRBQVFBLENBQ2pDLHFGQUF5RixPQUFKTSxLQUFJO0lBRzNGLElBQUksQ0FBQ0osUUFBUTtRQUNYLE9BQU8sSUFBSTtJQUNiLENBQUM7SUFDRCxNQUFNTyxNQUFNO0lBQ2RDLFFBQVFDLEdBQUcsQ0FBQ0g7SUFDVixxQkFDRSw4REFBQ1Ysa0RBQUlBO1FBQUNjLE1BQU0sa0JBQTRCLE9BQVZWLE9BQU9XLEVBQUU7UUFBSUMsUUFBUTtrQkFDakQsNEVBQUNmLGdFQUFVQTtZQUFDZ0IsV0FBVTtZQUFNQyxJQUFJO2dCQUFFQyxnQkFBZ0I7Z0JBQVFDLE9BQU87WUFBVTtzQkFDekUsNEVBQUN6QiwwREFBSUE7Z0JBQUN1QixJQUFJO29CQUFFRyxTQUFTO29CQUFRQyxlQUFlO29CQUFVQyxRQUFRO29CQUFRQyxRQUFRO2dCQUFVOztrQ0FDdEYsOERBQUMzQiwrREFBU0E7d0JBQ1JvQixXQUFVO3dCQUNWTSxRQUFPO3dCQUNQRSxPQUFPZDt3QkFDUGUsS0FBS3JCOzs7Ozs7a0NBRVAsOERBQUNULGlFQUFXQTt3QkFBQ3NCLElBQUk7NEJBQUVTLE1BQU07d0JBQUU7OzBDQUN6Qiw4REFBQzdCLGdFQUFVQTtnQ0FBQzhCLFlBQVk7Z0NBQUNDLFNBQVE7Z0NBQUtaLFdBQVU7MENBQzdDWjs7Ozs7OzBDQUVILDhEQUFDUCxnRUFBVUE7Z0NBQUMrQixTQUFRO2dDQUFZVCxPQUFNOztvQ0FBaUI7b0NBQ2hEZDs7Ozs7OzswQ0FFUCw4REFBQ1AsNENBQUdBO2dDQUFDK0IsSUFBSTswQ0FDUCw0RUFBQ2hDLGdFQUFVQTtvQ0FBQytCLFNBQVE7b0NBQVFULE9BQU07OENBQy9CYjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUWpCO0dBdkNNSjs7UUFHdUJELHVEQUFRQTs7O0tBSC9CQztBQXlDTiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnQvU3R1ZGVudC9Db3Vyc2VDYXJkLmpzP2QwOTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IENhcmQgZnJvbSAnQG11aS9tYXRlcmlhbC9DYXJkJztcclxuaW1wb3J0IENhcmRDb250ZW50IGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ2FyZENvbnRlbnQnO1xyXG5pbXBvcnQgQ2FyZE1lZGlhIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ2FyZE1lZGlhJztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG11aS9tYXRlcmlhbC9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IHsgQm94IH0gZnJvbSAnQG11aS9zeXN0ZW0nO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgQnV0dG9uQmFzZSBmcm9tICdAbXVpL21hdGVyaWFsL0J1dHRvbkJhc2UnO1xyXG5pbXBvcnQgdXNlRmV0Y2ggZnJvbSAnLi4vLi4vaG9va3MvdXNlRmV0Y2gnO1xyXG5cclxuY29uc3QgQ291cnNlQ2FyZCA9ICh7IGNvdXJzZSB9KSA9PiB7XHJcbiAgY29uc3QgeyBDb3Vyc2VUaXRsZSwgSW5zdHJ1Y3Rvck5hbWUsIENvdXJzZURlc2NyaXB0aW9uLCBpbWcgfSA9IGNvdXJzZTtcclxuXHJcbiAgY29uc3QgeyBkYXRhOiBpbWFnZVVybCB9ID0gdXNlRmV0Y2goXHJcbiAgICBgaHR0cHM6Ly9maXJlYmFzZXN0b3JhZ2UuZ29vZ2xlYXBpcy5jb20vdjAvYi9lZHVzaGFyZS1lOTI0Mi5hcHBzcG90LmNvbS9vL2ltYWdlcyUyRiR7aW1nfT9hbHQ9bWVkaWFgXHJcbiAgKTtcclxuXHJcbiAgaWYgKCFjb3Vyc2UpIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuICBjb25zdCB1cmwgPSAnaHR0cHM6Ly9jZG4ucGl4YWJheS5jb20vcGhvdG8vMjAxNC8wNC8wNS8xMS8zOS9wZW9wbGUtMzE2NTA2X180ODAuanBnJ1xyXG5jb25zb2xlLmxvZyhpbWFnZVVybClcclxuICByZXR1cm4gKFxyXG4gICAgPExpbmsgaHJlZj17YFN0dWRlbnQvY291cnNlLyR7Y291cnNlLmlkfWB9IHBhc3NIcmVmPlxyXG4gICAgICA8QnV0dG9uQmFzZSBjb21wb25lbnQ9XCJkaXZcIiBzeD17eyB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLCBjb2xvcjogJ2luaGVyaXQnIH19PlxyXG4gICAgICAgIDxDYXJkIHN4PXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIGhlaWdodDogJzEwMCUnLCBjdXJzb3I6ICdwb2ludGVyJyB9fT5cclxuICAgICAgICAgIDxDYXJkTWVkaWFcclxuICAgICAgICAgICAgY29tcG9uZW50PVwiaW1nXCJcclxuICAgICAgICAgICAgaGVpZ2h0PVwiMTAwXCJcclxuICAgICAgICAgICAgaW1hZ2U9e3VybH1cclxuICAgICAgICAgICAgYWx0PXtDb3Vyc2VUaXRsZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8Q2FyZENvbnRlbnQgc3g9e3sgZmxleDogMSB9fT5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgZ3V0dGVyQm90dG9tIHZhcmlhbnQ9XCJoNVwiIGNvbXBvbmVudD1cImRpdlwiPlxyXG4gICAgICAgICAgICAgIHtDb3Vyc2VUaXRsZX1cclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUyXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgIEJ5OiB7SW5zdHJ1Y3Rvck5hbWV9XHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPEJveCBtdD17MX0+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAge0NvdXJzZURlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICAgIDwvQ2FyZD5cclxuICAgICAgPC9CdXR0b25CYXNlPlxyXG4gICAgPC9MaW5rPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb3Vyc2VDYXJkO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJDYXJkIiwiQ2FyZENvbnRlbnQiLCJDYXJkTWVkaWEiLCJUeXBvZ3JhcGh5IiwiQm94IiwiTGluayIsIkJ1dHRvbkJhc2UiLCJ1c2VGZXRjaCIsIkNvdXJzZUNhcmQiLCJjb3Vyc2UiLCJDb3Vyc2VUaXRsZSIsIkluc3RydWN0b3JOYW1lIiwiQ291cnNlRGVzY3JpcHRpb24iLCJpbWciLCJkYXRhIiwiaW1hZ2VVcmwiLCJ1cmwiLCJjb25zb2xlIiwibG9nIiwiaHJlZiIsImlkIiwicGFzc0hyZWYiLCJjb21wb25lbnQiLCJzeCIsInRleHREZWNvcmF0aW9uIiwiY29sb3IiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImhlaWdodCIsImN1cnNvciIsImltYWdlIiwiYWx0IiwiZmxleCIsImd1dHRlckJvdHRvbSIsInZhcmlhbnQiLCJtdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./component/Student/CourseCard.js\n"));

/***/ })

});