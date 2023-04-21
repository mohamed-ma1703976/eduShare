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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Card */ \"./node_modules/@mui/material/esm/Card/index.js\");\n/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/CardContent */ \"./node_modules/@mui/material/esm/CardContent/index.js\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Typography */ \"./node_modules/@mui/material/esm/Typography/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/storage */ \"./node_modules/firebase/storage/dist/esm/index.esm.js\");\n/* harmony import */ var _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Firebase/Firebase */ \"./Firebase/Firebase.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst CoursePage = (param)=>{\n    let { courseName  } = param;\n    _s();\n    const [fileList, setFileList] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);\n    const CourseNameTrimed = courseName === null || courseName === void 0 ? void 0 : courseName.replace(/\\s+/g, \"\");\n    const fileListRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.ref)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_4__.storage, \"\".concat(CourseNameTrimed, \"/\")); // Declare and initialize fileListRef\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    console.log(courseName);\n    console.log(fileListRef);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.listAll)(fileListRef).then((res)=>{\n            // setFileList([]); // Clear fileList state\n            res.items.forEach((item)=>{\n                (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.getDownloadURL)(item).then((url)=>{\n                    setFileList((pre)=>[\n                            ...pre,\n                            url\n                        ]);\n                });\n            });\n        });\n    }, []); // Add fileListRef as a dependency\n    const uniqueArr = [\n        ...new Set(fileList)\n    ];\n    console.log(fileList);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    gutterBottom: true,\n                    variant: \"h7\",\n                    component: \"div\",\n                    sx: {\n                        fontWeight: \"1000\",\n                        margin: \"0 800px 0 0\"\n                    },\n                    children: \"Course Content\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior-firebase-update\\\\eduShare\\\\component\\\\Student\\\\CoursePage.js\",\n                    lineNumber: 42,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior-firebase-update\\\\eduShare\\\\component\\\\Student\\\\CoursePage.js\",\n                lineNumber: 41,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                    onClick: ()=>router.push(\"/Student/mycourses\"),\n                    children: \"back to my courses\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior-firebase-update\\\\eduShare\\\\component\\\\Student\\\\CoursePage.js\",\n                    lineNumber: 47,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior-firebase-update\\\\eduShare\\\\component\\\\Student\\\\CoursePage.js\",\n                lineNumber: 46,\n                columnNumber: 13\n            }, undefined),\n            uniqueArr.map((url, index)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Card__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        sx: {\n                            width: \"40%\",\n                            backgroundColor: \"\",\n                            color: \"\",\n                            margin: \"0 0 1000px 0\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: url,\n                                target: \"_blank\",\n                                rel: \"noopener noreferrer\",\n                                style: {\n                                    color: \"black\",\n                                    textDecoration: \"none\"\n                                },\n                                children: CourseNameTrimed + \"/\" + (index + 1)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior-firebase-update\\\\eduShare\\\\component\\\\Student\\\\CoursePage.js\",\n                                lineNumber: 57,\n                                columnNumber: 33\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior-firebase-update\\\\eduShare\\\\component\\\\Student\\\\CoursePage.js\",\n                            lineNumber: 54,\n                            columnNumber: 29\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior-firebase-update\\\\eduShare\\\\component\\\\Student\\\\CoursePage.js\",\n                        lineNumber: 53,\n                        columnNumber: 25\n                    }, undefined)\n                }, index, false, {\n                    fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior-firebase-update\\\\eduShare\\\\component\\\\Student\\\\CoursePage.js\",\n                    lineNumber: 52,\n                    columnNumber: 21\n                }, undefined);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior-firebase-update\\\\eduShare\\\\component\\\\Student\\\\CoursePage.js\",\n        lineNumber: 39,\n        columnNumber: 9\n    }, undefined);\n};\n_s(CoursePage, \"Q0Dk/F3mS9TnGSFby8Y2i7AybM0=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = CoursePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CoursePage);\nvar _c;\n$RefreshReg$(_c, \"CoursePage\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnQvU3R1ZGVudC9Db3Vyc2VQYWdlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBeUM7QUFDSDtBQUNjO0FBQ0Y7QUFDaEI7QUFDZ0I7QUFDVjtBQUN3QjtBQUNkO0FBQ1g7QUFHdkMsTUFBTWEsYUFBYSxTQUFvQjtRQUFuQixFQUFFQyxXQUFVLEVBQUU7O0lBQzlCLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHaEIscURBQWMsQ0FBQyxFQUFFO0lBRWpELE1BQU1rQixtQkFBbUJKLHVCQUFBQSx3QkFBQUEsS0FBQUEsSUFBQUEsV0FBWUssT0FBTyxDQUFDLFFBQVE7SUFDckQsTUFBTUMsY0FBY1YscURBQUdBLENBQUNDLHVEQUFPQSxFQUFFLEdBQW9CLE9BQWpCTyxrQkFBaUIsT0FBSyxxQ0FBcUM7SUFDL0YsTUFBTUcsU0FBU2Qsc0RBQVNBO0lBR3hCZSxRQUFRQyxHQUFHLENBQUNUO0lBQ1pRLFFBQVFDLEdBQUcsQ0FBQ0g7SUFFWm5CLGdEQUFTQSxDQUFDLElBQU07UUFDWlEseURBQU9BLENBQUNXLGFBQWFJLElBQUksQ0FBQyxDQUFDQyxNQUFRO1lBQy9CLDJDQUEyQztZQUMzQ0EsSUFBSUMsS0FBSyxDQUFDQyxPQUFPLENBQUMsQ0FBQ0MsT0FBUztnQkFDeEJwQixnRUFBY0EsQ0FBQ29CLE1BQU1KLElBQUksQ0FBQyxDQUFDSyxNQUFRO29CQUMvQmIsWUFBWWMsQ0FBQUEsTUFBTzsrQkFBSUE7NEJBQUtEO3lCQUFJO2dCQUNwQztZQUNKO1FBQ0o7SUFDSixHQUFHLEVBQUUsR0FBRyxrQ0FBa0M7SUFFMUMsTUFBTUUsWUFBWTtXQUFJLElBQUlDLElBQUlqQjtLQUFVO0lBRXhDTyxRQUFRQyxHQUFHLENBQUNSO0lBQ1oscUJBQ0ksOERBQUNrQjs7MEJBRUcsOERBQUNBOzBCQUNHLDRFQUFDN0IsZ0VBQVVBO29CQUFDOEIsWUFBWTtvQkFBQ0MsU0FBUTtvQkFBS0MsV0FBVTtvQkFBTUMsSUFBSTt3QkFBRUMsWUFBWTt3QkFBUUMsUUFBUTtvQkFBYzs4QkFBRzs7Ozs7Ozs7Ozs7MEJBSTdHLDhEQUFDTjswQkFDTyw0RUFBQ3JCLGlEQUFNQTtvQkFBQzRCLFNBQVMsSUFBTW5CLE9BQU9vQixJQUFJLENBQUM7OEJBQXVCOzs7Ozs7Ozs7OztZQUdqRVYsVUFBVVcsR0FBRyxDQUFDLENBQUNiLEtBQUtjLFFBQVU7Z0JBQzNCLHFCQUNJLDhEQUFDVjs4QkFDRyw0RUFBQy9CLDBEQUFJQTt3QkFBQ21DLElBQUk7NEJBQUVPLE9BQU87NEJBQU9DLGlCQUFpQjs0QkFBSUMsT0FBTzs0QkFBSVAsUUFBTzt3QkFBYztrQ0FDM0UsNEVBQUNwQyxpRUFBV0E7c0NBR1IsNEVBQUM0QztnQ0FBRUMsTUFBTW5CO2dDQUFLb0IsUUFBTztnQ0FBU0MsS0FBSTtnQ0FBc0JDLE9BQU87b0NBQUVMLE9BQU87b0NBQVNNLGdCQUFnQjtnQ0FBTzswQ0FBSWxDLG1CQUFtQixNQUFPeUIsQ0FBQUEsUUFBUTs7Ozs7Ozs7Ozs7Ozs7OzttQkFMaEpBOzs7OztZQWlCbEI7Ozs7Ozs7QUFJWjtHQTVETTlCOztRQUthTixrREFBU0E7OztLQUx0Qk07QUE4RE4sK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L1N0dWRlbnQvQ291cnNlUGFnZS5qcz8xOTJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDYXJkIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ2FyZCc7XHJcbmltcG9ydCBDYXJkQ29udGVudCBmcm9tICdAbXVpL21hdGVyaWFsL0NhcmRDb250ZW50JztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG11aS9tYXRlcmlhbC9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IHsgQm94IH0gZnJvbSAnQG11aS9zeXN0ZW0nO1xyXG5pbXBvcnQgQnV0dG9uQmFzZSBmcm9tICdAbXVpL21hdGVyaWFsL0J1dHRvbkJhc2UnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IGdldERvd25sb2FkVVJMLCBsaXN0QWxsLCByZWYgfSBmcm9tICdmaXJlYmFzZS9zdG9yYWdlJztcclxuaW1wb3J0IHsgc3RvcmFnZSB9IGZyb20gJy4uLy4uL0ZpcmViYXNlL0ZpcmViYXNlJztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XHJcblxyXG5cclxuY29uc3QgQ291cnNlUGFnZSA9ICh7IGNvdXJzZU5hbWUgfSkgPT4ge1xyXG4gICAgY29uc3QgW2ZpbGVMaXN0LCBzZXRGaWxlTGlzdF0gPSBSZWFjdC51c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgY29uc3QgQ291cnNlTmFtZVRyaW1lZCA9IGNvdXJzZU5hbWU/LnJlcGxhY2UoL1xccysvZywgJycpXHJcbiAgICBjb25zdCBmaWxlTGlzdFJlZiA9IHJlZihzdG9yYWdlLCBgJHtDb3Vyc2VOYW1lVHJpbWVkfS9gKTsgLy8gRGVjbGFyZSBhbmQgaW5pdGlhbGl6ZSBmaWxlTGlzdFJlZlxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG5cclxuICAgIGNvbnNvbGUubG9nKGNvdXJzZU5hbWUpXHJcbiAgICBjb25zb2xlLmxvZyhmaWxlTGlzdFJlZilcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxpc3RBbGwoZmlsZUxpc3RSZWYpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAvLyBzZXRGaWxlTGlzdChbXSk7IC8vIENsZWFyIGZpbGVMaXN0IHN0YXRlXHJcbiAgICAgICAgICAgIHJlcy5pdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBnZXREb3dubG9hZFVSTChpdGVtKS50aGVuKCh1cmwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRGaWxlTGlzdChwcmUgPT4gWy4uLnByZSwgdXJsXSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LCBbXSk7IC8vIEFkZCBmaWxlTGlzdFJlZiBhcyBhIGRlcGVuZGVuY3lcclxuXHJcbiAgICBjb25zdCB1bmlxdWVBcnIgPSBbLi4ubmV3IFNldChmaWxlTGlzdCldO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGZpbGVMaXN0KVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGd1dHRlckJvdHRvbSB2YXJpYW50PVwiaDdcIiBjb21wb25lbnQ9XCJkaXZcIiBzeD17eyBmb250V2VpZ2h0OiAnMTAwMCcsIG1hcmdpbjogXCIwIDgwMHB4IDAgMFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIENvdXJzZSBDb250ZW50XHJcbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCgnL1N0dWRlbnQvbXljb3Vyc2VzJyl9PmJhY2sgdG8gbXkgY291cnNlczwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHt1bmlxdWVBcnIubWFwKCh1cmwsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIHN4PXt7IHdpZHRoOiAnNDAlJywgYmFja2dyb3VuZENvbG9yOiAnJywgY29sb3I6ICcnICxtYXJnaW46XCIwIDAgMTAwMHB4IDBcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRDb250ZW50PlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17dXJsfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgc3R5bGU9e3sgY29sb3I6IFwiYmxhY2tcIiwgdGV4dERlY29yYXRpb246IFwibm9uZVwiIH19PntDb3Vyc2VOYW1lVHJpbWVkICsgXCIvXCIgKyAoaW5kZXggKyAxKX08L2E+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvdXJzZVBhZ2U7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsIkNhcmQiLCJDYXJkQ29udGVudCIsIlR5cG9ncmFwaHkiLCJCb3giLCJCdXR0b25CYXNlIiwidXNlUm91dGVyIiwiZ2V0RG93bmxvYWRVUkwiLCJsaXN0QWxsIiwicmVmIiwic3RvcmFnZSIsIkJ1dHRvbiIsIkNvdXJzZVBhZ2UiLCJjb3Vyc2VOYW1lIiwiZmlsZUxpc3QiLCJzZXRGaWxlTGlzdCIsInVzZVN0YXRlIiwiQ291cnNlTmFtZVRyaW1lZCIsInJlcGxhY2UiLCJmaWxlTGlzdFJlZiIsInJvdXRlciIsImNvbnNvbGUiLCJsb2ciLCJ0aGVuIiwicmVzIiwiaXRlbXMiLCJmb3JFYWNoIiwiaXRlbSIsInVybCIsInByZSIsInVuaXF1ZUFyciIsIlNldCIsImRpdiIsImd1dHRlckJvdHRvbSIsInZhcmlhbnQiLCJjb21wb25lbnQiLCJzeCIsImZvbnRXZWlnaHQiLCJtYXJnaW4iLCJvbkNsaWNrIiwicHVzaCIsIm1hcCIsImluZGV4Iiwid2lkdGgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsImEiLCJocmVmIiwidGFyZ2V0IiwicmVsIiwic3R5bGUiLCJ0ZXh0RGVjb3JhdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./component/Student/CoursePage.js\n"));

/***/ })

});