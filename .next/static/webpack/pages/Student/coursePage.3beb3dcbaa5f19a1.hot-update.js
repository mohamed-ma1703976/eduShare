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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Typography */ \"./node_modules/@mui/material/esm/Typography/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/storage */ \"./node_modules/firebase/storage/dist/esm/index.esm.js\");\n/* harmony import */ var _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Firebase/Firebase */ \"./Firebase/Firebase.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nconst CoursePage = (param)=>{\n    let { courseName  } = param;\n    _s();\n    const [fileList, setFileList] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);\n    const CourseNameTrimed = courseName === null || courseName === void 0 ? void 0 : courseName.replace(/\\s+/g, \"\");\n    const fileListRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.ref)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_4__.storage, \"\".concat(CourseNameTrimed, \"/\")); // Declare and initialize fileListRef\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    console.log(courseName);\n    console.log(fileListRef);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.listAll)(fileListRef).then((res)=>{\n            // setFileList([]); // Clear fileList state\n            res.items.forEach((item)=>{\n                (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.getDownloadURL)(item).then((url)=>{\n                    setFileList((pre)=>[\n                            ...pre,\n                            url\n                        ]);\n                });\n            });\n        });\n    }, []); // Add fileListRef as a dependency\n    const uniqueArr = [\n        ...new Set(fileList)\n    ];\n    console.log(fileList);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                gutterBottom: true,\n                variant: \"h7\",\n                component: \"div\",\n                sx: {\n                    fontWeight: \"1000\",\n                    margin: \"0 400px 0 0\"\n                },\n                children: \"Course Content\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\component\\\\Student\\\\CoursePage.js\",\n                lineNumber: 43,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                onClick: ()=>router.push(\"/Student/mycourses\"),\n                children: \"back to my courses\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\component\\\\Student\\\\CoursePage.js\",\n                lineNumber: 46,\n                columnNumber: 13\n            }, undefined),\n            uniqueArr.map((url, index)=>{\n                return(// <div key={index}>\n                //     <Card sx={{ width: '40%' }}>\n                //         <CardContent>\n                //             <a href={url} target=\"_blank\" rel=\"noopener noreferrer\" style={{ color: \"black\", textDecoration: \"none\" }}>{CourseNameTrimed + \"/\" + (index + 1)}</a>\n                //         </CardContent>\n                //     </Card>\n                // </div>\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.TableContainer, {\n                    component: _mui_material__WEBPACK_IMPORTED_MODULE_6__.Paper,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Table, {\n                        sx: {\n                            minWidth: 1000,\n                            margin: \"5px 0 0 0px \"\n                        },\n                        \"aria-label\": \"simple table\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.TableHead, {\n                                sx: {\n                                    backgroundColor: \"#1ABC9C\"\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.TableRow, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.TableCell, {\n                                            sx: {\n                                                color: \"white\"\n                                            },\n                                            children: \"    Course Name\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\component\\\\Student\\\\CoursePage.js\",\n                                            lineNumber: 75,\n                                            columnNumber: 37\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.TableCell, {\n                                            align: \"right\",\n                                            sx: {\n                                                color: \"white\"\n                                            },\n                                            children: \" File Number\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\component\\\\Student\\\\CoursePage.js\",\n                                            lineNumber: 76,\n                                            columnNumber: 37\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.TableCell, {\n                                            align: \"right\",\n                                            sx: {\n                                                color: \"white\"\n                                            },\n                                            children: \"Content\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\component\\\\Student\\\\CoursePage.js\",\n                                            lineNumber: 77,\n                                            columnNumber: 37\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\component\\\\Student\\\\CoursePage.js\",\n                                    lineNumber: 74,\n                                    columnNumber: 33\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\component\\\\Student\\\\CoursePage.js\",\n                                lineNumber: 73,\n                                columnNumber: 29\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.TableBody, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.TableRow, {\n                                    sx: {\n                                        \"&:last-child td, &:last-child th\": {\n                                            border: 0\n                                        }\n                                    },\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.TableCell, {\n                                            component: \"th\",\n                                            scope: \"row\",\n                                            children: courseName\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\component\\\\Student\\\\CoursePage.js\",\n                                            lineNumber: 87,\n                                            columnNumber: 37\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.TableCell, {\n                                            align: \"right\",\n                                            children: index + 1\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\component\\\\Student\\\\CoursePage.js\",\n                                            lineNumber: 88,\n                                            columnNumber: 37\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.TableCell, {\n                                            align: \"right\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                href: url,\n                                                target: \"_blank\",\n                                                rel: \"noopener noreferrer\",\n                                                style: {\n                                                    color: \"black\",\n                                                    textDecoration: \"none\"\n                                                },\n                                                children: CourseNameTrimed + \"/\" + (index + 1)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\component\\\\Student\\\\CoursePage.js\",\n                                                lineNumber: 91,\n                                                columnNumber: 41\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\component\\\\Student\\\\CoursePage.js\",\n                                            lineNumber: 89,\n                                            columnNumber: 37\n                                        }, undefined)\n                                    ]\n                                }, index, true, {\n                                    fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\component\\\\Student\\\\CoursePage.js\",\n                                    lineNumber: 83,\n                                    columnNumber: 33\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\component\\\\Student\\\\CoursePage.js\",\n                                lineNumber: 81,\n                                columnNumber: 29\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\component\\\\Student\\\\CoursePage.js\",\n                        lineNumber: 72,\n                        columnNumber: 25\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\component\\\\Student\\\\CoursePage.js\",\n                    lineNumber: 71,\n                    columnNumber: 21\n                }, undefined));\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\component\\\\Student\\\\CoursePage.js\",\n        lineNumber: 40,\n        columnNumber: 9\n    }, undefined);\n};\n_s(CoursePage, \"Q0Dk/F3mS9TnGSFby8Y2i7AybM0=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = CoursePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CoursePage);\nvar _c;\n$RefreshReg$(_c, \"CoursePage\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUViLDRFQUFDRztnREFBRUMsTUFBTXZCO2dEQUFLd0IsUUFBTztnREFBU0MsS0FBSTtnREFBc0JDLE9BQU87b0RBQUVSLE9BQU87b0RBQVNTLGdCQUFnQjtnREFBTzswREFBSXRDLG1CQUFtQixNQUFPeUIsQ0FBQUEsUUFBUTs7Ozs7Ozs7Ozs7O21DQU43SUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQTZDN0I7Ozs7Ozs7QUFJWjtHQXhITTlCOztRQUthZCxrREFBU0E7OztLQUx0QmM7QUEwSE4sK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L1N0dWRlbnQvQ291cnNlUGFnZS5qcz8xOTJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDYXJkIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ2FyZCc7XHJcbmltcG9ydCBDYXJkQ29udGVudCBmcm9tICdAbXVpL21hdGVyaWFsL0NhcmRDb250ZW50JztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG11aS9tYXRlcmlhbC9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IHsgQm94IH0gZnJvbSAnQG11aS9zeXN0ZW0nO1xyXG5pbXBvcnQgQnV0dG9uQmFzZSBmcm9tICdAbXVpL21hdGVyaWFsL0J1dHRvbkJhc2UnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IGdldERvd25sb2FkVVJMLCBsaXN0QWxsLCByZWYgfSBmcm9tICdmaXJlYmFzZS9zdG9yYWdlJztcclxuaW1wb3J0IHsgc3RvcmFnZSB9IGZyb20gJy4uLy4uL0ZpcmViYXNlL0ZpcmViYXNlJztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XHJcbmltcG9ydCB7IENpcmN1bGFyUHJvZ3Jlc3MsIFBhcGVyLCBUYWJsZSwgVGFibGVCb2R5LCBUYWJsZUNlbGwsIFRhYmxlQ29udGFpbmVyLCBUYWJsZUhlYWQsIFRhYmxlUm93IH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XHJcblxyXG5cclxuY29uc3QgQ291cnNlUGFnZSA9ICh7IGNvdXJzZU5hbWUgfSkgPT4ge1xyXG4gICAgY29uc3QgW2ZpbGVMaXN0LCBzZXRGaWxlTGlzdF0gPSBSZWFjdC51c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgY29uc3QgQ291cnNlTmFtZVRyaW1lZCA9IGNvdXJzZU5hbWU/LnJlcGxhY2UoL1xccysvZywgJycpXHJcbiAgICBjb25zdCBmaWxlTGlzdFJlZiA9IHJlZihzdG9yYWdlLCBgJHtDb3Vyc2VOYW1lVHJpbWVkfS9gKTsgLy8gRGVjbGFyZSBhbmQgaW5pdGlhbGl6ZSBmaWxlTGlzdFJlZlxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG5cclxuICAgIGNvbnNvbGUubG9nKGNvdXJzZU5hbWUpXHJcbiAgICBjb25zb2xlLmxvZyhmaWxlTGlzdFJlZilcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxpc3RBbGwoZmlsZUxpc3RSZWYpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAvLyBzZXRGaWxlTGlzdChbXSk7IC8vIENsZWFyIGZpbGVMaXN0IHN0YXRlXHJcbiAgICAgICAgICAgIHJlcy5pdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBnZXREb3dubG9hZFVSTChpdGVtKS50aGVuKCh1cmwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRGaWxlTGlzdChwcmUgPT4gWy4uLnByZSwgdXJsXSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LCBbXSk7IC8vIEFkZCBmaWxlTGlzdFJlZiBhcyBhIGRlcGVuZGVuY3lcclxuXHJcbiAgICBjb25zdCB1bmlxdWVBcnIgPSBbLi4ubmV3IFNldChmaWxlTGlzdCldO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGZpbGVMaXN0KVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGd1dHRlckJvdHRvbSB2YXJpYW50PVwiaDdcIiBjb21wb25lbnQ9XCJkaXZcIiBzeD17eyBmb250V2VpZ2h0OiAnMTAwMCcsIG1hcmdpbjogXCIwIDQwMHB4IDAgMFwiIH19PlxyXG4gICAgICAgICAgICAgICAgQ291cnNlIENvbnRlbnRcclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvU3R1ZGVudC9teWNvdXJzZXMnKX0+YmFjayB0byBteSBjb3Vyc2VzPC9CdXR0b24+XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAge3VuaXF1ZUFyci5tYXAoKHVybCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gPGRpdiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgPENhcmQgc3g9e3sgd2lkdGg6ICc0MCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgPENhcmRDb250ZW50PlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgPGEgaHJlZj17dXJsfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgc3R5bGU9e3sgY29sb3I6IFwiYmxhY2tcIiwgdGV4dERlY29yYXRpb246IFwibm9uZVwiIH19PntDb3Vyc2VOYW1lVHJpbWVkICsgXCIvXCIgKyAoaW5kZXggKyAxKX08L2E+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgPC9DYXJkQ29udGVudD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAvLyA8L2Rpdj5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8VGFibGVDb250YWluZXIgY29tcG9uZW50PXtQYXBlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZSBzeD17eyBtaW5XaWR0aDogMTAwMCwgbWFyZ2luOiBcIjVweCAwIDAgMHB4IFwiIH19IGFyaWEtbGFiZWw9XCJzaW1wbGUgdGFibGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUhlYWQgc3g9e3sgYmFja2dyb3VuZENvbG9yOiBcIiMxQUJDOUNcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgc3g9e3sgY29sb3I6IFwid2hpdGVcIiB9fT4gICAgQ291cnNlIE5hbWU8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCIgc3g9e3sgY29sb3I6IFwid2hpdGVcIiB9fT4gRmlsZSBOdW1iZXI8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCIgc3g9e3sgY29sb3I6IFwid2hpdGVcIiB9fT5Db250ZW50PC9UYWJsZUNlbGw+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlSGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUJvZHk+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvd1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyAnJjpsYXN0LWNoaWxkIHRkLCAmOmxhc3QtY2hpbGQgdGgnOiB7IGJvcmRlcjogMCB9IH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGNvbXBvbmVudD1cInRoXCIgc2NvcGU9XCJyb3dcIj57Y291cnNlTmFtZX08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+eyhpbmRleCArIDEpfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXt1cmx9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiBzdHlsZT17eyBjb2xvcjogXCJibGFja1wiLCB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIgfX0+e0NvdXJzZU5hbWVUcmltZWQgKyBcIi9cIiArIChpbmRleCArIDEpfTwvYT5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNvbnRhaW5lcj5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pfVxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb3Vyc2VQYWdlO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJDYXJkIiwiQ2FyZENvbnRlbnQiLCJUeXBvZ3JhcGh5IiwiQm94IiwiQnV0dG9uQmFzZSIsInVzZVJvdXRlciIsImdldERvd25sb2FkVVJMIiwibGlzdEFsbCIsInJlZiIsInN0b3JhZ2UiLCJCdXR0b24iLCJDaXJjdWxhclByb2dyZXNzIiwiUGFwZXIiLCJUYWJsZSIsIlRhYmxlQm9keSIsIlRhYmxlQ2VsbCIsIlRhYmxlQ29udGFpbmVyIiwiVGFibGVIZWFkIiwiVGFibGVSb3ciLCJDb3Vyc2VQYWdlIiwiY291cnNlTmFtZSIsImZpbGVMaXN0Iiwic2V0RmlsZUxpc3QiLCJ1c2VTdGF0ZSIsIkNvdXJzZU5hbWVUcmltZWQiLCJyZXBsYWNlIiwiZmlsZUxpc3RSZWYiLCJyb3V0ZXIiLCJjb25zb2xlIiwibG9nIiwidGhlbiIsInJlcyIsIml0ZW1zIiwiZm9yRWFjaCIsIml0ZW0iLCJ1cmwiLCJwcmUiLCJ1bmlxdWVBcnIiLCJTZXQiLCJkaXYiLCJndXR0ZXJCb3R0b20iLCJ2YXJpYW50IiwiY29tcG9uZW50Iiwic3giLCJmb250V2VpZ2h0IiwibWFyZ2luIiwib25DbGljayIsInB1c2giLCJtYXAiLCJpbmRleCIsIm1pbldpZHRoIiwiYXJpYS1sYWJlbCIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiYWxpZ24iLCJib3JkZXIiLCJzY29wZSIsImEiLCJocmVmIiwidGFyZ2V0IiwicmVsIiwic3R5bGUiLCJ0ZXh0RGVjb3JhdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./component/Student/CoursePage.js\n"));

/***/ })

});