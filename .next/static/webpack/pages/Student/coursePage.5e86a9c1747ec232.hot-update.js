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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Typography */ \"./node_modules/@mui/material/esm/Typography/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/storage */ \"./node_modules/firebase/storage/dist/esm/index.esm.js\");\n/* harmony import */ var _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Firebase/Firebase */ \"./Firebase/Firebase.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nconst CoursePage = (param)=>{\n    let { courseName  } = param;\n    _s();\n    const [fileList, setFileList] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);\n    const CourseNameTrimed = courseName === null || courseName === void 0 ? void 0 : courseName.replace(/\\s+/g, \"\");\n    const fileListRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.ref)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_4__.storage, \"\".concat(CourseNameTrimed, \"/\")); // Declare and initialize fileListRef\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    console.log(courseName);\n    console.log(fileListRef);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.listAll)(fileListRef).then((res)=>{\n            // setFileList([]); // Clear fileList state\n            res.items.forEach((item)=>{\n                (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.getDownloadURL)(item).then((url)=>{\n                    setFileList((pre)=>[\n                            ...pre,\n                            url\n                        ]);\n                });\n            });\n        });\n    }, []); // Add fileListRef as a dependency\n    const uniqueArr = [\n        ...new Set(fileList)\n    ];\n    console.log(fileList);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Toolbar, {\n                sx: {\n                    display: \"flex\",\n                    justifyContent: \"space-between\",\n                    alignItems: \"center\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        gutterBottom: true,\n                        variant: \"h7\",\n                        component: \"div\",\n                        sx: {\n                            fontWeight: \"1000\",\n                            fontSize: \"30px\",\n                            color: \"#454545\",\n                            backgroundColor: \"#1ABC9C\"\n                        },\n                        children: \"Course Content\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\component\\\\Student\\\\CoursePage.js\",\n                        lineNumber: 43,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                        sx: {\n                            margin: \"-10px 50px 0 0 \",\n                            backgroundColor: \"#1ABC9C\",\n                            color: \"white\"\n                        },\n                        onClick: ()=>router.push(\"/Student/mycourses\"),\n                        children: \"back to my courses\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\component\\\\Student\\\\CoursePage.js\",\n                        lineNumber: 46,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\component\\\\Student\\\\CoursePage.js\",\n                lineNumber: 42,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableContainer, {\n                component: _mui_material__WEBPACK_IMPORTED_MODULE_5__.Paper,\n                sx: {\n                    margin: \"-15px 0 0 0 \"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Table, {\n                    sx: {\n                        minWidth: 1000,\n                        margin: \"5px 0 0 0px \"\n                    },\n                    \"aria-label\": \"simple table\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableHead, {\n                            sx: {\n                                backgroundColor: \"#1ABC9C\"\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableRow, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableCell, {\n                                        sx: {\n                                            color: \"white\"\n                                        },\n                                        children: \"    Course Name\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\component\\\\Student\\\\CoursePage.js\",\n                                        lineNumber: 60,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableCell, {\n                                        align: \"center\",\n                                        sx: {\n                                            color: \"white\"\n                                        },\n                                        children: \" File Number\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\component\\\\Student\\\\CoursePage.js\",\n                                        lineNumber: 61,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableCell, {\n                                        align: \"center\",\n                                        sx: {\n                                            color: \"white\"\n                                        },\n                                        children: \"Content\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\component\\\\Student\\\\CoursePage.js\",\n                                        lineNumber: 62,\n                                        columnNumber: 29\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\component\\\\Student\\\\CoursePage.js\",\n                                lineNumber: 59,\n                                columnNumber: 25\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\component\\\\Student\\\\CoursePage.js\",\n                            lineNumber: 58,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableBody, {\n                            children: uniqueArr.map((url, index)=>{\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableRow, {\n                                    sx: {\n                                        \"&:last-child td, &:last-child th\": {\n                                            border: 0\n                                        }\n                                    },\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableCell, {\n                                            component: \"th\",\n                                            scope: \"row\",\n                                            children: courseName\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\component\\\\Student\\\\CoursePage.js\",\n                                            lineNumber: 73,\n                                            columnNumber: 33\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableCell, {\n                                            align: \"center\",\n                                            children: index + 1\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\component\\\\Student\\\\CoursePage.js\",\n                                            lineNumber: 74,\n                                            columnNumber: 33\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableCell, {\n                                            align: \"center\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                href: url,\n                                                target: \"_blank\",\n                                                rel: \"noopener noreferrer\",\n                                                style: {\n                                                    color: \"black\",\n                                                    textDecoration: \"none\"\n                                                },\n                                                children: CourseNameTrimed + \"/\" + (index + 1)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\component\\\\Student\\\\CoursePage.js\",\n                                                lineNumber: 77,\n                                                columnNumber: 37\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\component\\\\Student\\\\CoursePage.js\",\n                                            lineNumber: 75,\n                                            columnNumber: 33\n                                        }, undefined)\n                                    ]\n                                }, index, true, {\n                                    fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\component\\\\Student\\\\CoursePage.js\",\n                                    lineNumber: 69,\n                                    columnNumber: 36\n                                }, undefined);\n                            })\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\component\\\\Student\\\\CoursePage.js\",\n                            lineNumber: 66,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\component\\\\Student\\\\CoursePage.js\",\n                    lineNumber: 57,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\component\\\\Student\\\\CoursePage.js\",\n                lineNumber: 56,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\component\\\\Student\\\\CoursePage.js\",\n        lineNumber: 40,\n        columnNumber: 9\n    }, undefined);\n};\n_s(CoursePage, \"Q0Dk/F3mS9TnGSFby8Y2i7AybM0=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = CoursePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CoursePage);\nvar _c;\n$RefreshReg$(_c, \"CoursePage\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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K0IsV0FBVTs0Q0FBS2MsT0FBTTtzREFBT3hDOzs7Ozs7c0RBQ3ZDLDhEQUFDTCxvREFBU0E7NENBQUN5QyxPQUFNO3NEQUFXRSxRQUFROzs7Ozs7c0RBQ3BDLDhEQUFDM0Msb0RBQVNBOzRDQUFDeUMsT0FBTTtzREFFYiw0RUFBQ0s7Z0RBQUVDLE1BQU0zQjtnREFBSzRCLFFBQU87Z0RBQVNDLEtBQUk7Z0RBQXNCQyxPQUFPO29EQUFFaEIsT0FBTztvREFBU2lCLGdCQUFnQjtnREFBTzswREFBSTFDLG1CQUFtQixNQUFPa0MsQ0FBQUEsUUFBUTs7Ozs7Ozs7Ozs7O21DQU43SUE7Ozs7OzRCQWdCYjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNeEI7R0EvRU12Qzs7UUFLYWYsa0RBQVNBOzs7S0FMdEJlO0FBaUZOLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudC9TdHVkZW50L0NvdXJzZVBhZ2UuanM/MTkyZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ2FyZCBmcm9tICdAbXVpL21hdGVyaWFsL0NhcmQnO1xyXG5pbXBvcnQgQ2FyZENvbnRlbnQgZnJvbSAnQG11aS9tYXRlcmlhbC9DYXJkQ29udGVudCc7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCB7IEJveCB9IGZyb20gJ0BtdWkvc3lzdGVtJztcclxuaW1wb3J0IEJ1dHRvbkJhc2UgZnJvbSAnQG11aS9tYXRlcmlhbC9CdXR0b25CYXNlJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBnZXREb3dubG9hZFVSTCwgbGlzdEFsbCwgcmVmIH0gZnJvbSAnZmlyZWJhc2Uvc3RvcmFnZSc7XHJcbmltcG9ydCB7IHN0b3JhZ2UgfSBmcm9tICcuLi8uLi9GaXJlYmFzZS9GaXJlYmFzZSc7XHJcbmltcG9ydCB7IEJ1dHRvbiwgVG9vbGJhciB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgeyBDaXJjdWxhclByb2dyZXNzLCBQYXBlciwgVGFibGUsIFRhYmxlQm9keSwgVGFibGVDZWxsLCBUYWJsZUNvbnRhaW5lciwgVGFibGVIZWFkLCBUYWJsZVJvdyB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xyXG5cclxuXHJcbmNvbnN0IENvdXJzZVBhZ2UgPSAoeyBjb3Vyc2VOYW1lIH0pID0+IHtcclxuICAgIGNvbnN0IFtmaWxlTGlzdCwgc2V0RmlsZUxpc3RdID0gUmVhY3QudXNlU3RhdGUoW10pO1xyXG5cclxuICAgIGNvbnN0IENvdXJzZU5hbWVUcmltZWQgPSBjb3Vyc2VOYW1lPy5yZXBsYWNlKC9cXHMrL2csICcnKVxyXG4gICAgY29uc3QgZmlsZUxpc3RSZWYgPSByZWYoc3RvcmFnZSwgYCR7Q291cnNlTmFtZVRyaW1lZH0vYCk7IC8vIERlY2xhcmUgYW5kIGluaXRpYWxpemUgZmlsZUxpc3RSZWZcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuXHJcbiAgICBjb25zb2xlLmxvZyhjb3Vyc2VOYW1lKVxyXG4gICAgY29uc29sZS5sb2coZmlsZUxpc3RSZWYpXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBsaXN0QWxsKGZpbGVMaXN0UmVmKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgLy8gc2V0RmlsZUxpc3QoW10pOyAvLyBDbGVhciBmaWxlTGlzdCBzdGF0ZVxyXG4gICAgICAgICAgICByZXMuaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZ2V0RG93bmxvYWRVUkwoaXRlbSkudGhlbigodXJsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RmlsZUxpc3QocHJlID0+IFsuLi5wcmUsIHVybF0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSwgW10pOyAvLyBBZGQgZmlsZUxpc3RSZWYgYXMgYSBkZXBlbmRlbmN5XHJcblxyXG4gICAgY29uc3QgdW5pcXVlQXJyID0gWy4uLm5ldyBTZXQoZmlsZUxpc3QpXTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhmaWxlTGlzdClcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuXHJcbiAgICAgICAgICAgIDxUb29sYmFyIHN4PXt7IGRpc3BsYXk6IFwiZmxleFwiLCBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBndXR0ZXJCb3R0b20gdmFyaWFudD1cImg3XCIgY29tcG9uZW50PVwiZGl2XCIgc3g9e3sgZm9udFdlaWdodDogJzEwMDAnICxmb250U2l6ZTpcIjMwcHhcIiAsY29sb3I6XCIjNDU0NTQ1XCIgLGJhY2tncm91bmRDb2xvcjpcIiMxQUJDOUNcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgIENvdXJzZSBDb250ZW50XHJcbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBcIi0xMHB4IDUwcHggMCAwIFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMUFCQzlDXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIlxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgfX0gb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goJy9TdHVkZW50L215Y291cnNlcycpfT5iYWNrIHRvIG15IGNvdXJzZXM8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9Ub29sYmFyPlxyXG5cclxuICAgICAgICAgICAgPFRhYmxlQ29udGFpbmVyIGNvbXBvbmVudD17UGFwZXJ9IHN4PXt7bWFyZ2luOlwiLTE1cHggMCAwIDAgXCJ9fT5cclxuICAgICAgICAgICAgICAgIDxUYWJsZSBzeD17eyBtaW5XaWR0aDogMTAwMCwgbWFyZ2luOiBcIjVweCAwIDAgMHB4IFwiIH19IGFyaWEtbGFiZWw9XCJzaW1wbGUgdGFibGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8VGFibGVIZWFkIHN4PXt7IGJhY2tncm91bmRDb2xvcjogXCIjMUFCQzlDXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgc3g9e3sgY29sb3I6IFwid2hpdGVcIiB9fT4gICAgQ291cnNlIE5hbWU8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJjZW50ZXJcIiBzeD17eyBjb2xvcjogXCJ3aGl0ZVwiIH19PiBGaWxlIE51bWJlcjwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cImNlbnRlclwiIHN4PXt7IGNvbG9yOiBcIndoaXRlXCIgfX0+Q29udGVudDwvVGFibGVDZWxsPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICA8L1RhYmxlSGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8VGFibGVCb2R5PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3VuaXF1ZUFyci5tYXAoKHVybCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8VGFibGVSb3dcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyAnJjpsYXN0LWNoaWxkIHRkLCAmOmxhc3QtY2hpbGQgdGgnOiB7IGJvcmRlcjogMCB9IH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGNvbXBvbmVudD1cInRoXCIgc2NvcGU9XCJyb3dcIj57Y291cnNlTmFtZX08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwiY2VudGVyXCI+eyhpbmRleCArIDEpfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJjZW50ZXJcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e3VybH0gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIHN0eWxlPXt7IGNvbG9yOiBcImJsYWNrXCIsIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIiB9fT57Q291cnNlTmFtZVRyaW1lZCArIFwiL1wiICsgKGluZGV4ICsgMSl9PC9hPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvVGFibGVCb2R5PlxyXG4gICAgICAgICAgICAgICAgPC9UYWJsZT5cclxuICAgICAgICAgICAgPC9UYWJsZUNvbnRhaW5lciA+XHJcbiAgICAgICAgPC9kaXYgPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvdXJzZVBhZ2U7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsIkNhcmQiLCJDYXJkQ29udGVudCIsIlR5cG9ncmFwaHkiLCJCb3giLCJCdXR0b25CYXNlIiwidXNlUm91dGVyIiwiZ2V0RG93bmxvYWRVUkwiLCJsaXN0QWxsIiwicmVmIiwic3RvcmFnZSIsIkJ1dHRvbiIsIlRvb2xiYXIiLCJDaXJjdWxhclByb2dyZXNzIiwiUGFwZXIiLCJUYWJsZSIsIlRhYmxlQm9keSIsIlRhYmxlQ2VsbCIsIlRhYmxlQ29udGFpbmVyIiwiVGFibGVIZWFkIiwiVGFibGVSb3ciLCJDb3Vyc2VQYWdlIiwiY291cnNlTmFtZSIsImZpbGVMaXN0Iiwic2V0RmlsZUxpc3QiLCJ1c2VTdGF0ZSIsIkNvdXJzZU5hbWVUcmltZWQiLCJyZXBsYWNlIiwiZmlsZUxpc3RSZWYiLCJyb3V0ZXIiLCJjb25zb2xlIiwibG9nIiwidGhlbiIsInJlcyIsIml0ZW1zIiwiZm9yRWFjaCIsIml0ZW0iLCJ1cmwiLCJwcmUiLCJ1bmlxdWVBcnIiLCJTZXQiLCJkaXYiLCJzeCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJndXR0ZXJCb3R0b20iLCJ2YXJpYW50IiwiY29tcG9uZW50IiwiZm9udFdlaWdodCIsImZvbnRTaXplIiwiY29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJtYXJnaW4iLCJvbkNsaWNrIiwicHVzaCIsIm1pbldpZHRoIiwiYXJpYS1sYWJlbCIsImFsaWduIiwibWFwIiwiaW5kZXgiLCJib3JkZXIiLCJzY29wZSIsImEiLCJocmVmIiwidGFyZ2V0IiwicmVsIiwic3R5bGUiLCJ0ZXh0RGVjb3JhdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./component/Student/CoursePage.js\n"));

/***/ })

});