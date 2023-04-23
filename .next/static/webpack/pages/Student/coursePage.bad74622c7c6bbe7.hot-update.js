"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/Student/coursePage",{

/***/ "./component/Student/CoursePage.js":
/*!*****************************************!*\
  !*** ./component/Student/CoursePage.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Typography */ \"./node_modules/@mui/material/esm/Typography/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/storage */ \"./node_modules/firebase/storage/dist/esm/index.esm.js\");\n/* harmony import */ var _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Firebase/Firebase */ \"./Firebase/Firebase.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nconst CoursePage = (param)=>{\n    let { courseName  } = param;\n    _s();\n    const [fileList, setFileList] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);\n    const CourseNameTrimed = courseName === null || courseName === void 0 ? void 0 : courseName.replace(/\\s+/g, \"\");\n    const fileListRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.ref)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_4__.storage, \"\".concat(CourseNameTrimed, \"/\")); // Declare and initialize fileListRef\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    console.log(courseName);\n    console.log(fileListRef);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.listAll)(fileListRef).then((res)=>{\n            // setFileList([]); // Clear fileList state\n            res.items.forEach((item)=>{\n                (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.getDownloadURL)(item).then((url)=>{\n                    setFileList((pre)=>[\n                            ...pre,\n                            url\n                        ]);\n                });\n            });\n        });\n    }, []); // Add fileListRef as a dependency\n    const uniqueArr = [\n        ...new Set(fileList)\n    ];\n    console.log(fileList);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Toolbar, {\n                sx: {\n                    display: \"flex\",\n                    justifyContent: \"space-between\",\n                    alignItems: \"center\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        gutterBottom: true,\n                        variant: \"h7\",\n                        component: \"div\",\n                        sx: {\n                            fontWeight: \"1000\",\n                            fontSize: \"30px\",\n                            color: \"454545\"\n                        },\n                        children: \"Course Content\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\component\\\\Student\\\\CoursePage.js\",\n                        lineNumber: 43,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                        sx: {\n                            margin: \"-10px 50px 0 0 \",\n                            backgroundColor: \"#1ABC9C\",\n                            color: \"white\"\n                        },\n                        onClick: ()=>router.push(\"/Student/mycourses\"),\n                        children: \"back to my courses\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\component\\\\Student\\\\CoursePage.js\",\n                        lineNumber: 46,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\component\\\\Student\\\\CoursePage.js\",\n                lineNumber: 42,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableContainer, {\n                component: _mui_material__WEBPACK_IMPORTED_MODULE_5__.Paper,\n                sx: {\n                    margin: \"-15px 0 0 0 \"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Table, {\n                    sx: {\n                        minWidth: 1000,\n                        margin: \"5px 0 0 0px \"\n                    },\n                    \"aria-label\": \"simple table\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableHead, {\n                            sx: {\n                                backgroundColor: \"#1ABC9C\"\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableRow, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableCell, {\n                                        sx: {\n                                            color: \"white\"\n                                        },\n                                        children: \"    Course Name\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\component\\\\Student\\\\CoursePage.js\",\n                                        lineNumber: 60,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableCell, {\n                                        align: \"center\",\n                                        sx: {\n                                            color: \"white\"\n                                        },\n                                        children: \" File Number\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\component\\\\Student\\\\CoursePage.js\",\n                                        lineNumber: 61,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableCell, {\n                                        align: \"center\",\n                                        sx: {\n                                            color: \"white\"\n                                        },\n                                        children: \"Content\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\component\\\\Student\\\\CoursePage.js\",\n                                        lineNumber: 62,\n                                        columnNumber: 29\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\component\\\\Student\\\\CoursePage.js\",\n                                lineNumber: 59,\n                                columnNumber: 25\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\component\\\\Student\\\\CoursePage.js\",\n                            lineNumber: 58,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableBody, {\n                            children: uniqueArr.map((url, index)=>{\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableRow, {\n                                    sx: {\n                                        \"&:last-child td, &:last-child th\": {\n                                            border: 0\n                                        }\n                                    },\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableCell, {\n                                            component: \"th\",\n                                            scope: \"row\",\n                                            children: courseName\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\component\\\\Student\\\\CoursePage.js\",\n                                            lineNumber: 73,\n                                            columnNumber: 33\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableCell, {\n                                            align: \"center\",\n                                            children: index + 1\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\component\\\\Student\\\\CoursePage.js\",\n                                            lineNumber: 74,\n                                            columnNumber: 33\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableCell, {\n                                            align: \"center\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                href: url,\n                                                target: \"_blank\",\n                                                rel: \"noopener noreferrer\",\n                                                style: {\n                                                    color: \"black\",\n                                                    textDecoration: \"none\"\n                                                },\n                                                children: CourseNameTrimed + \"/\" + (index + 1)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\component\\\\Student\\\\CoursePage.js\",\n                                                lineNumber: 77,\n                                                columnNumber: 37\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\component\\\\Student\\\\CoursePage.js\",\n                                            lineNumber: 75,\n                                            columnNumber: 33\n                                        }, undefined)\n                                    ]\n                                }, index, true, {\n                                    fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\component\\\\Student\\\\CoursePage.js\",\n                                    lineNumber: 69,\n                                    columnNumber: 36\n                                }, undefined);\n                            })\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\component\\\\Student\\\\CoursePage.js\",\n                            lineNumber: 66,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\component\\\\Student\\\\CoursePage.js\",\n                    lineNumber: 57,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\component\\\\Student\\\\CoursePage.js\",\n                lineNumber: 56,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\component\\\\Student\\\\CoursePage.js\",\n        lineNumber: 40,\n        columnNumber: 9\n    }, undefined);\n};\n_s(CoursePage, \"Q0Dk/F3mS9TnGSFby8Y2i7AybM0=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = CoursePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CoursePage);\nvar _c;\n$RefreshReg$(_c, \"CoursePage\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnQvU3R1ZGVudC9Db3Vyc2VQYWdlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQXlDO0FBQ0g7QUFDYztBQUNGO0FBQ2hCO0FBQ2dCO0FBQ1Y7QUFDd0I7QUFDZDtBQUNGO0FBQzBFO0FBRzFILE1BQU1zQixhQUFhLFNBQW9CO1FBQW5CLEVBQUVDLFdBQVUsRUFBRTs7SUFDOUIsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUd6QixxREFBYyxDQUFDLEVBQUU7SUFFakQsTUFBTTJCLG1CQUFtQkosdUJBQUFBLHdCQUFBQSxLQUFBQSxJQUFBQSxXQUFZSyxPQUFPLENBQUMsUUFBUTtJQUNyRCxNQUFNQyxjQUFjbkIscURBQUdBLENBQUNDLHVEQUFPQSxFQUFFLEdBQW9CLE9BQWpCZ0Isa0JBQWlCLE9BQUsscUNBQXFDO0lBQy9GLE1BQU1HLFNBQVN2QixzREFBU0E7SUFHeEJ3QixRQUFRQyxHQUFHLENBQUNUO0lBQ1pRLFFBQVFDLEdBQUcsQ0FBQ0g7SUFFWjVCLGdEQUFTQSxDQUFDLElBQU07UUFDWlEseURBQU9BLENBQUNvQixhQUFhSSxJQUFJLENBQUMsQ0FBQ0MsTUFBUTtZQUMvQiwyQ0FBMkM7WUFDM0NBLElBQUlDLEtBQUssQ0FBQ0MsT0FBTyxDQUFDLENBQUNDLE9BQVM7Z0JBQ3hCN0IsZ0VBQWNBLENBQUM2QixNQUFNSixJQUFJLENBQUMsQ0FBQ0ssTUFBUTtvQkFDL0JiLFlBQVljLENBQUFBLE1BQU87K0JBQUlBOzRCQUFLRDt5QkFBSTtnQkFDcEM7WUFDSjtRQUNKO0lBQ0osR0FBRyxFQUFFLEdBQUcsa0NBQWtDO0lBRTFDLE1BQU1FLFlBQVk7V0FBSSxJQUFJQyxJQUFJakI7S0FBVTtJQUV4Q08sUUFBUUMsR0FBRyxDQUFDUjtJQUNaLHFCQUNJLDhEQUFDa0I7OzBCQUVHLDhEQUFDN0Isa0RBQU9BO2dCQUFDOEIsSUFBSTtvQkFBRUMsU0FBUztvQkFBUUMsZ0JBQWdCO29CQUFpQkMsWUFBWTtnQkFBUzs7a0NBQ2xGLDhEQUFDMUMsZ0VBQVVBO3dCQUFDMkMsWUFBWTt3QkFBQ0MsU0FBUTt3QkFBS0MsV0FBVTt3QkFBTU4sSUFBSTs0QkFBRU8sWUFBWTs0QkFBUUMsVUFBUzs0QkFBUUMsT0FBTTt3QkFBUTtrQ0FBRzs7Ozs7O2tDQUdsSCw4REFBQ3hDLGlEQUFNQTt3QkFBQytCLElBQUk7NEJBQ1JVLFFBQVE7NEJBQ1JDLGlCQUFpQjs0QkFDakJGLE9BQU87d0JBSVg7d0JBQUdHLFNBQVMsSUFBTXpCLE9BQU8wQixJQUFJLENBQUM7a0NBQXVCOzs7Ozs7Ozs7Ozs7MEJBR3pELDhEQUFDckMseURBQWNBO2dCQUFDOEIsV0FBV2xDLGdEQUFLQTtnQkFBRTRCLElBQUk7b0JBQUNVLFFBQU87Z0JBQWM7MEJBQ3hELDRFQUFDckMsZ0RBQUtBO29CQUFDMkIsSUFBSTt3QkFBRWMsVUFBVTt3QkFBTUosUUFBUTtvQkFBZTtvQkFBR0ssY0FBVzs7c0NBQzlELDhEQUFDdEMsb0RBQVNBOzRCQUFDdUIsSUFBSTtnQ0FBRVcsaUJBQWlCOzRCQUFVO3NDQUN4Qyw0RUFBQ2pDLG1EQUFRQTs7a0RBQ0wsOERBQUNILG9EQUFTQTt3Q0FBQ3lCLElBQUk7NENBQUVTLE9BQU87d0NBQVE7a0RBQUc7Ozs7OztrREFDbkMsOERBQUNsQyxvREFBU0E7d0NBQUN5QyxPQUFNO3dDQUFTaEIsSUFBSTs0Q0FBRVMsT0FBTzt3Q0FBUTtrREFBRzs7Ozs7O2tEQUNsRCw4REFBQ2xDLG9EQUFTQTt3Q0FBQ3lDLE9BQU07d0NBQVNoQixJQUFJOzRDQUFFUyxPQUFPO3dDQUFRO2tEQUFHOzs7Ozs7Ozs7Ozs7Ozs7OztzQ0FJMUQsOERBQUNuQyxvREFBU0E7c0NBRUx1QixVQUFVb0IsR0FBRyxDQUFDLENBQUN0QixLQUFLdUIsUUFBVTtnQ0FDM0IscUJBQU8sOERBQUN4QyxtREFBUUE7b0NBQ1pzQixJQUFJO3dDQUFFLG9DQUFvQzs0Q0FBRW1CLFFBQVE7d0NBQUU7b0NBQUU7O3NEQUd4RCw4REFBQzVDLG9EQUFTQTs0Q0FBQytCLFdBQVU7NENBQUtjLE9BQU07c0RBQU94Qzs7Ozs7O3NEQUN2Qyw4REFBQ0wsb0RBQVNBOzRDQUFDeUMsT0FBTTtzREFBV0UsUUFBUTs7Ozs7O3NEQUNwQyw4REFBQzNDLG9EQUFTQTs0Q0FBQ3lDLE9BQU07c0RBRWIsNEVBQUNLO2dEQUFFQyxNQUFNM0I7Z0RBQUs0QixRQUFPO2dEQUFTQyxLQUFJO2dEQUFzQkMsT0FBTztvREFBRWhCLE9BQU87b0RBQVNpQixnQkFBZ0I7Z0RBQU87MERBQUkxQyxtQkFBbUIsTUFBT2tDLENBQUFBLFFBQVE7Ozs7Ozs7Ozs7OzttQ0FON0lBOzs7Ozs0QkFnQmI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXhCO0dBL0VNdkM7O1FBS2FmLGtEQUFTQTs7O0tBTHRCZTtBQWlGTiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnQvU3R1ZGVudC9Db3Vyc2VQYWdlLmpzPzE5MmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IENhcmQgZnJvbSAnQG11aS9tYXRlcmlhbC9DYXJkJztcclxuaW1wb3J0IENhcmRDb250ZW50IGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ2FyZENvbnRlbnQnO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgeyBCb3ggfSBmcm9tICdAbXVpL3N5c3RlbSc7XHJcbmltcG9ydCBCdXR0b25CYXNlIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQnV0dG9uQmFzZSc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgZ2V0RG93bmxvYWRVUkwsIGxpc3RBbGwsIHJlZiB9IGZyb20gJ2ZpcmViYXNlL3N0b3JhZ2UnO1xyXG5pbXBvcnQgeyBzdG9yYWdlIH0gZnJvbSAnLi4vLi4vRmlyZWJhc2UvRmlyZWJhc2UnO1xyXG5pbXBvcnQgeyBCdXR0b24sIFRvb2xiYXIgfSBmcm9tICdAbXVpL21hdGVyaWFsJztcclxuaW1wb3J0IHsgQ2lyY3VsYXJQcm9ncmVzcywgUGFwZXIsIFRhYmxlLCBUYWJsZUJvZHksIFRhYmxlQ2VsbCwgVGFibGVDb250YWluZXIsIFRhYmxlSGVhZCwgVGFibGVSb3cgfSBmcm9tICdAbXVpL21hdGVyaWFsJztcclxuXHJcblxyXG5jb25zdCBDb3Vyc2VQYWdlID0gKHsgY291cnNlTmFtZSB9KSA9PiB7XHJcbiAgICBjb25zdCBbZmlsZUxpc3QsIHNldEZpbGVMaXN0XSA9IFJlYWN0LnVzZVN0YXRlKFtdKTtcclxuXHJcbiAgICBjb25zdCBDb3Vyc2VOYW1lVHJpbWVkID0gY291cnNlTmFtZT8ucmVwbGFjZSgvXFxzKy9nLCAnJylcclxuICAgIGNvbnN0IGZpbGVMaXN0UmVmID0gcmVmKHN0b3JhZ2UsIGAke0NvdXJzZU5hbWVUcmltZWR9L2ApOyAvLyBEZWNsYXJlIGFuZCBpbml0aWFsaXplIGZpbGVMaXN0UmVmXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcblxyXG4gICAgY29uc29sZS5sb2coY291cnNlTmFtZSlcclxuICAgIGNvbnNvbGUubG9nKGZpbGVMaXN0UmVmKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbGlzdEFsbChmaWxlTGlzdFJlZikudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIHNldEZpbGVMaXN0KFtdKTsgLy8gQ2xlYXIgZmlsZUxpc3Qgc3RhdGVcclxuICAgICAgICAgICAgcmVzLml0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIGdldERvd25sb2FkVVJMKGl0ZW0pLnRoZW4oKHVybCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEZpbGVMaXN0KHByZSA9PiBbLi4ucHJlLCB1cmxdKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH0sIFtdKTsgLy8gQWRkIGZpbGVMaXN0UmVmIGFzIGEgZGVwZW5kZW5jeVxyXG5cclxuICAgIGNvbnN0IHVuaXF1ZUFyciA9IFsuLi5uZXcgU2V0KGZpbGVMaXN0KV07XHJcblxyXG4gICAgY29uc29sZS5sb2coZmlsZUxpc3QpXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcblxyXG4gICAgICAgICAgICA8VG9vbGJhciBzeD17eyBkaXNwbGF5OiBcImZsZXhcIiwganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiIH19PlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgZ3V0dGVyQm90dG9tIHZhcmlhbnQ9XCJoN1wiIGNvbXBvbmVudD1cImRpdlwiIHN4PXt7IGZvbnRXZWlnaHQ6ICcxMDAwJyAsZm9udFNpemU6XCIzMHB4XCIgLGNvbG9yOlwiNDU0NTQ1XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICBDb3Vyc2UgQ29udGVudFxyXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBzeD17e1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogXCItMTBweCA1MHB4IDAgMCBcIixcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzFBQkM5Q1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCJcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIH19IG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvU3R1ZGVudC9teWNvdXJzZXMnKX0+YmFjayB0byBteSBjb3Vyc2VzPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvVG9vbGJhcj5cclxuXHJcbiAgICAgICAgICAgIDxUYWJsZUNvbnRhaW5lciBjb21wb25lbnQ9e1BhcGVyfSBzeD17e21hcmdpbjpcIi0xNXB4IDAgMCAwIFwifX0+XHJcbiAgICAgICAgICAgICAgICA8VGFibGUgc3g9e3sgbWluV2lkdGg6IDEwMDAsIG1hcmdpbjogXCI1cHggMCAwIDBweCBcIiB9fSBhcmlhLWxhYmVsPVwic2ltcGxlIHRhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlSGVhZCBzeD17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiIzFBQkM5Q1wiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIHN4PXt7IGNvbG9yOiBcIndoaXRlXCIgfX0+ICAgIENvdXJzZSBOYW1lPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwiY2VudGVyXCIgc3g9e3sgY29sb3I6IFwid2hpdGVcIiB9fT4gRmlsZSBOdW1iZXI8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJjZW50ZXJcIiBzeD17eyBjb2xvcjogXCJ3aGl0ZVwiIH19PkNvbnRlbnQ8L1RhYmxlQ2VsbD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlQm9keT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt1bmlxdWVBcnIubWFwKCh1cmwsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPFRhYmxlUm93XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgJyY6bGFzdC1jaGlsZCB0ZCwgJjpsYXN0LWNoaWxkIHRoJzogeyBib3JkZXI6IDAgfSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBjb21wb25lbnQ9XCJ0aFwiIHNjb3BlPVwicm93XCI+e2NvdXJzZU5hbWV9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cImNlbnRlclwiPnsoaW5kZXggKyAxKX08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwiY2VudGVyXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXt1cmx9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiBzdHlsZT17eyBjb2xvcjogXCJibGFja1wiLCB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIgfX0+e0NvdXJzZU5hbWVUcmltZWQgKyBcIi9cIiArIChpbmRleCArIDEpfTwvYT5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQm9keT5cclxuICAgICAgICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgICAgIDwvVGFibGVDb250YWluZXIgPlxyXG4gICAgICAgIDwvZGl2ID5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb3Vyc2VQYWdlO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJDYXJkIiwiQ2FyZENvbnRlbnQiLCJUeXBvZ3JhcGh5IiwiQm94IiwiQnV0dG9uQmFzZSIsInVzZVJvdXRlciIsImdldERvd25sb2FkVVJMIiwibGlzdEFsbCIsInJlZiIsInN0b3JhZ2UiLCJCdXR0b24iLCJUb29sYmFyIiwiQ2lyY3VsYXJQcm9ncmVzcyIsIlBhcGVyIiwiVGFibGUiLCJUYWJsZUJvZHkiLCJUYWJsZUNlbGwiLCJUYWJsZUNvbnRhaW5lciIsIlRhYmxlSGVhZCIsIlRhYmxlUm93IiwiQ291cnNlUGFnZSIsImNvdXJzZU5hbWUiLCJmaWxlTGlzdCIsInNldEZpbGVMaXN0IiwidXNlU3RhdGUiLCJDb3Vyc2VOYW1lVHJpbWVkIiwicmVwbGFjZSIsImZpbGVMaXN0UmVmIiwicm91dGVyIiwiY29uc29sZSIsImxvZyIsInRoZW4iLCJyZXMiLCJpdGVtcyIsImZvckVhY2giLCJpdGVtIiwidXJsIiwicHJlIiwidW5pcXVlQXJyIiwiU2V0IiwiZGl2Iiwic3giLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiZ3V0dGVyQm90dG9tIiwidmFyaWFudCIsImNvbXBvbmVudCIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsImNvbG9yIiwibWFyZ2luIiwiYmFja2dyb3VuZENvbG9yIiwib25DbGljayIsInB1c2giLCJtaW5XaWR0aCIsImFyaWEtbGFiZWwiLCJhbGlnbiIsIm1hcCIsImluZGV4IiwiYm9yZGVyIiwic2NvcGUiLCJhIiwiaHJlZiIsInRhcmdldCIsInJlbCIsInN0eWxlIiwidGV4dERlY29yYXRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./component/Student/CoursePage.js\n"));

/***/ })

});