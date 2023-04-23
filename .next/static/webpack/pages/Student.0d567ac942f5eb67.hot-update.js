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

/***/ "./pages/Student/index.js":
/*!********************************!*\
  !*** ./pages/Student/index.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ studentDashboard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/esm/index.js\");\n/* harmony import */ var _component_Student_StuNav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../component/Student/StuNav */ \"./component/Student/StuNav.js\");\n/* harmony import */ var _component_Student_StuSideBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../component/Student/StuSideBar */ \"./component/Student/StuSideBar.js\");\n/* harmony import */ var _component_Student_CourseCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../component/Student/CourseCard */ \"./component/Student/CourseCard.js\");\n/* harmony import */ var _hooks_AuthProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/AuthProvider */ \"./hooks/AuthProvider.js\");\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-slick */ \"./node_modules/react-slick/lib/index.js\");\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ \"./node_modules/slick-carousel/slick/slick.css\");\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ \"./node_modules/slick-carousel/slick/slick-theme.css\");\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _component_Student_ImageCarousel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../component/Student/ImageCarousel */ \"./component/Student/ImageCarousel.js\");\n/* harmony import */ var _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../Firebase/Firebase */ \"./Firebase/Firebase.js\");\n/* harmony import */ var react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-firebase-hooks/firestore */ \"./node_modules/react-firebase-hooks/firestore/dist/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nfunction studentDashboard() {\n    _s();\n    const { userId  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_hooks_AuthProvider__WEBPACK_IMPORTED_MODULE_5__.AuthContext);\n    const [coursesSnapshot, loading, error] = (0,react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_11__.useCollection)((0,_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_10__.collection)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_10__.db, \"Course\"));\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_12__.CircularProgress, {\n            size: 100,\n            color: \"success\",\n            sx: {\n                margin: \"200px 550px 0 0 \"\n            }\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\pages\\\\Student\\\\index.js\",\n            lineNumber: 21,\n            columnNumber: 28\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\pages\\\\Student\\\\index.js\",\n        lineNumber: 21,\n        columnNumber: 23\n    }, this);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            \"Error: \",\n            error.message\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\pages\\\\Student\\\\index.js\",\n        lineNumber: 22,\n        columnNumber: 21\n    }, this);\n    const courses = coursesSnapshot.docs.map((doc)=>({\n            id: doc.id,\n            ...doc.data()\n        }));\n    const sortedCourses = courses.sort((a, b)=>b.id - a.id);\n    const trendingCourses = courses.sort((a, b)=>b.enrolledStudents - a.enrolledStudents);\n    const settings = {\n        dots: true,\n        infinite: false,\n        speed: 500,\n        slidesToShow: 5,\n        slidesToScroll: 1,\n        initialSlide: 0,\n        responsive: [\n            {\n                breakpoint: 1024,\n                settings: {\n                    slidesToShow: 3,\n                    slidesToScroll: 1\n                }\n            },\n            {\n                breakpoint: 600,\n                settings: {\n                    slidesToShow: 2,\n                    slidesToScroll: 1\n                }\n            },\n            {\n                breakpoint: 480,\n                settings: {\n                    slidesToShow: 1,\n                    slidesToScroll: 1\n                }\n            }\n        ]\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_12__.Box, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_Student_StuNav__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\pages\\\\Student\\\\index.js\",\n                    lineNumber: 70,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_12__.Grid, {\n                    container: true,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_12__.Grid, {\n                            item: true,\n                            xs: 2,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_Student_StuSideBar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\pages\\\\Student\\\\index.js\",\n                                lineNumber: 73,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\pages\\\\Student\\\\index.js\",\n                            lineNumber: 72,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_12__.Grid, {\n                            item: true,\n                            xs: 10,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_12__.Box, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_Student_ImageCarousel__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\pages\\\\Student\\\\index.js\",\n                                        lineNumber: 77,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_12__.Card, {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\pages\\\\Student\\\\index.js\",\n                                        lineNumber: 78,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_12__.Typography, {\n                                        variant: \"h5\",\n                                        gutterBottom: true,\n                                        style: {\n                                            fontSize: \"30px\",\n                                            fontWeight: \"1000\",\n                                            margin: \"0 400px 0 0\",\n                                            color: \"#454545\"\n                                        },\n                                        children: \"Latest Courses\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\pages\\\\Student\\\\index.js\",\n                                        lineNumber: 79,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_slick__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                        ...settings,\n                                        children: sortedCourses.map((course)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_12__.Box, {\n                                                sx: {\n                                                    padding: 1\n                                                },\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_Student_CourseCard__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                                    course: course\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\pages\\\\Student\\\\index.js\",\n                                                    lineNumber: 85,\n                                                    columnNumber: 21\n                                                }, this)\n                                            }, course.id, false, {\n                                                fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\pages\\\\Student\\\\index.js\",\n                                                lineNumber: 84,\n                                                columnNumber: 19\n                                            }, this))\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\pages\\\\Student\\\\index.js\",\n                                        lineNumber: 82,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_12__.Typography, {\n                                        variant: \"h5\",\n                                        gutterBottom: true,\n                                        mt: 4,\n                                        children: \"Trending Courses\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\pages\\\\Student\\\\index.js\",\n                                        lineNumber: 89,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_slick__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                        ...settings,\n                                        children: trendingCourses.map((course)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_12__.Box, {\n                                                sx: {\n                                                    padding: 1\n                                                },\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_Student_CourseCard__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                                    course: course\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\pages\\\\Student\\\\index.js\",\n                                                    lineNumber: 95,\n                                                    columnNumber: 21\n                                                }, this)\n                                            }, course.id, false, {\n                                                fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\pages\\\\Student\\\\index.js\",\n                                                lineNumber: 94,\n                                                columnNumber: 19\n                                            }, this))\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\pages\\\\Student\\\\index.js\",\n                                        lineNumber: 92,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\pages\\\\Student\\\\index.js\",\n                                lineNumber: 76,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\pages\\\\Student\\\\index.js\",\n                            lineNumber: 75,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\pages\\\\Student\\\\index.js\",\n                    lineNumber: 71,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\pages\\\\Student\\\\index.js\",\n            lineNumber: 69,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\pages\\\\Student\\\\index.js\",\n        lineNumber: 68,\n        columnNumber: 5\n    }, this);\n}\n_s(studentDashboard, \"PrFIACTp9W4le3Bwe1adETYhVFA=\", false, function() {\n    return [\n        react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_11__.useCollection\n    ];\n});\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFDakJGLGdCQUFnQlIsR0FBRyxDQUFDLENBQUMyQix1QkFDcEIsOERBQUN2RCwrQ0FBR0E7Z0RBQWlCdUIsSUFBSTtvREFBRWlDLFNBQVM7Z0RBQUU7MERBQ3BDLDRFQUFDaEQscUVBQVVBO29EQUFDK0MsUUFBUUE7Ozs7OzsrQ0FEWkEsT0FBT3pCLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBV3JDLENBQUM7R0ExRnVCZjs7UUFFb0JELDBFQUFhQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9TdHVkZW50L2luZGV4LmpzPzg2ZTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQm94LCBDYXJkLCBTdGFjaywgVHlwb2dyYXBoeSwgR3JpZCwgQ2lyY3VsYXJQcm9ncmVzcyB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XHJcbmltcG9ydCBTdHVOYXYgZnJvbSBcIi4uLy4uL2NvbXBvbmVudC9TdHVkZW50L1N0dU5hdlwiO1xyXG5pbXBvcnQgU3R1U2lkZUJhciBmcm9tIFwiLi4vLi4vY29tcG9uZW50L1N0dWRlbnQvU3R1U2lkZUJhclwiO1xyXG5pbXBvcnQgQ291cnNlQ2FyZCBmcm9tIFwiLi4vLi4vY29tcG9uZW50L1N0dWRlbnQvQ291cnNlQ2FyZFwiO1xyXG5pbXBvcnQgeyBBdXRoQ29udGV4dCB9IGZyb20gXCIuLi8uLi9ob29rcy9BdXRoUHJvdmlkZXJcIjtcclxuaW1wb3J0IFNsaWRlciBmcm9tIFwicmVhY3Qtc2xpY2tcIjtcclxuaW1wb3J0IFwic2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2suY3NzXCI7XHJcbmltcG9ydCBcInNsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLXRoZW1lLmNzc1wiO1xyXG5pbXBvcnQgSW1hZ2VDYXJvdXNlbCBmcm9tIFwiLi4vLi4vY29tcG9uZW50L1N0dWRlbnQvSW1hZ2VDYXJvdXNlbFwiO1xyXG5cclxuaW1wb3J0IHsgZGIsIGNvbGxlY3Rpb24gfSBmcm9tIFwiLi4vLi4vRmlyZWJhc2UvRmlyZWJhc2VcIjtcclxuaW1wb3J0IHsgdXNlQ29sbGVjdGlvbiB9IGZyb20gXCJyZWFjdC1maXJlYmFzZS1ob29rcy9maXJlc3RvcmVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0dWRlbnREYXNoYm9hcmQoKSB7XHJcbiAgY29uc3QgeyB1c2VySWQgfSA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xyXG4gIGNvbnN0IFtjb3Vyc2VzU25hcHNob3QsIGxvYWRpbmcsIGVycm9yXSA9IHVzZUNvbGxlY3Rpb24oXHJcbiAgICBjb2xsZWN0aW9uKGRiLCBcIkNvdXJzZVwiKVxyXG4gICk7XHJcblxyXG4gIGlmIChsb2FkaW5nKSByZXR1cm4gPGRpdj48Q2lyY3VsYXJQcm9ncmVzcyBzaXplPXsxMDB9IGNvbG9yPVwic3VjY2Vzc1wiIHN4PXt7IG1hcmdpbjogXCIyMDBweCA1NTBweCAwIDAgXCIgfX0gLz48L2Rpdj47XHJcbiAgaWYgKGVycm9yKSByZXR1cm4gPGRpdj5FcnJvcjoge2Vycm9yLm1lc3NhZ2V9PC9kaXY+O1xyXG5cclxuICBjb25zdCBjb3Vyc2VzID0gY291cnNlc1NuYXBzaG90LmRvY3MubWFwKChkb2MpID0+ICh7XHJcbiAgICBpZDogZG9jLmlkLFxyXG4gICAgLi4uZG9jLmRhdGEoKSxcclxuICB9KSk7XHJcblxyXG4gIGNvbnN0IHNvcnRlZENvdXJzZXMgPSBjb3Vyc2VzLnNvcnQoKGEsIGIpID0+IGIuaWQgLSBhLmlkKTtcclxuXHJcbiAgY29uc3QgdHJlbmRpbmdDb3Vyc2VzID0gY291cnNlcy5zb3J0KFxyXG4gICAgKGEsIGIpID0+IGIuZW5yb2xsZWRTdHVkZW50cyAtIGEuZW5yb2xsZWRTdHVkZW50c1xyXG4gICk7XHJcblxyXG4gIGNvbnN0IHNldHRpbmdzID0ge1xyXG4gICAgZG90czogdHJ1ZSxcclxuICAgIGluZmluaXRlOiBmYWxzZSxcclxuICAgIHNwZWVkOiA1MDAsXHJcbiAgICBzbGlkZXNUb1Nob3c6IDUsXHJcbiAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgIGluaXRpYWxTbGlkZTogMCxcclxuICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAge1xyXG4gICAgICAgIGJyZWFrcG9pbnQ6IDEwMjQsXHJcbiAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBicmVha3BvaW50OiA2MDAsXHJcbiAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBicmVha3BvaW50OiA0ODAsXHJcbiAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8Qm94PlxyXG4gICAgICAgIDxTdHVOYXYgLz5cclxuICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsyfT5cclxuICAgICAgICAgICAgPFN0dVNpZGVCYXIgLz5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEwfT5cclxuICAgICAgICAgICAgPEJveD5cclxuICAgICAgICAgICAgICA8SW1hZ2VDYXJvdXNlbCAvPlxyXG4gICAgICAgICAgICAgIDxDYXJkIC8+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCIgZ3V0dGVyQm90dG9tIHN0eWxlPXt7IGZvbnRTaXplOiAnMzBweCcsIGZvbnRXZWlnaHQ6IFwiMTAwMFwiLCBtYXJnaW46IFwiMCA0MDBweCAwIDBcIixjb2xvcjpcIiM0NTQ1NDVcIiB9fT5cclxuICAgICAgICAgICAgICAgIExhdGVzdCBDb3Vyc2VzXHJcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgIDxTbGlkZXIgey4uLnNldHRpbmdzfT5cclxuICAgICAgICAgICAgICAgIHtzb3J0ZWRDb3Vyc2VzLm1hcCgoY291cnNlKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxCb3gga2V5PXtjb3Vyc2UuaWR9IHN4PXt7IHBhZGRpbmc6IDEgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvdXJzZUNhcmQgY291cnNlPXtjb3Vyc2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC9TbGlkZXI+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCIgZ3V0dGVyQm90dG9tIG10PXs0fT5cclxuICAgICAgICAgICAgICAgIFRyZW5kaW5nIENvdXJzZXNcclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPFNsaWRlciB7Li4uc2V0dGluZ3N9PlxyXG4gICAgICAgICAgICAgICAge3RyZW5kaW5nQ291cnNlcy5tYXAoKGNvdXJzZSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8Qm94IGtleT17Y291cnNlLmlkfSBzeD17eyBwYWRkaW5nOiAxIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb3Vyc2VDYXJkIGNvdXJzZT17Y291cnNlfSAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvU2xpZGVyPlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDb250ZXh0IiwiQm94IiwiQ2FyZCIsIlN0YWNrIiwiVHlwb2dyYXBoeSIsIkdyaWQiLCJDaXJjdWxhclByb2dyZXNzIiwiU3R1TmF2IiwiU3R1U2lkZUJhciIsIkNvdXJzZUNhcmQiLCJBdXRoQ29udGV4dCIsIlNsaWRlciIsIkltYWdlQ2Fyb3VzZWwiLCJkYiIsImNvbGxlY3Rpb24iLCJ1c2VDb2xsZWN0aW9uIiwic3R1ZGVudERhc2hib2FyZCIsInVzZXJJZCIsImNvdXJzZXNTbmFwc2hvdCIsImxvYWRpbmciLCJlcnJvciIsImRpdiIsInNpemUiLCJjb2xvciIsInN4IiwibWFyZ2luIiwibWVzc2FnZSIsImNvdXJzZXMiLCJkb2NzIiwibWFwIiwiZG9jIiwiaWQiLCJkYXRhIiwic29ydGVkQ291cnNlcyIsInNvcnQiLCJhIiwiYiIsInRyZW5kaW5nQ291cnNlcyIsImVucm9sbGVkU3R1ZGVudHMiLCJzZXR0aW5ncyIsImRvdHMiLCJpbmZpbml0ZSIsInNwZWVkIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJpbml0aWFsU2xpZGUiLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsImNvbnRhaW5lciIsIml0ZW0iLCJ4cyIsInZhcmlhbnQiLCJndXR0ZXJCb3R0b20iLCJzdHlsZSIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImNvdXJzZSIsInBhZGRpbmciLCJtdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/Student/index.js\n"));

/***/ })

});