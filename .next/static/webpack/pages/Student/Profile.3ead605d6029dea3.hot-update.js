"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/Student/Profile",{

/***/ "./pages/Student/Profile.js":
/*!**********************************!*\
  !*** ./pages/Student/Profile.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/system */ \"./node_modules/@mui/system/esm/index.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/esm/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Firebase/Firebase */ \"./Firebase/Firebase.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var _hooks_AuthProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/AuthProvider */ \"./hooks/AuthProvider.js\");\n/* harmony import */ var _hooks_getRole__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/getRole */ \"./hooks/getRole.js\");\n/* harmony import */ var _component_Student_StuNav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../component/Student/StuNav */ \"./component/Student/StuNav.js\");\n/* harmony import */ var _component_Student_StuSideBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../component/Student/StuSideBar */ \"./component/Student/StuSideBar.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst Profile = ()=>{\n    _s();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { userId , userRole  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_hooks_AuthProvider__WEBPACK_IMPORTED_MODULE_5__.AuthContext);\n    //console.log(getUserRole(userId, app))\n    const [useRole, setUseRole] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    console.log(user, userId, userRole);\n    const userid = _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_3__.auth.currentUser.uid;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        //getUserRole(userId, app).then(res => setUseRole(res))\n        const fetchUserData = async ()=>{\n            const role = await (0,_hooks_getRole__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(userid, _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_3__.app); // Wait for the promise to resolve\n            console.log(\"User role:\", role);\n            setUseRole(role);\n            if (!userid || !role) {\n                router.push(\"/\");\n                return;\n            }\n            const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.getFirestore)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_3__.app);\n            const userDocRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(db, role, userid);\n            const userDoc = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.getDoc)(userDocRef);\n            if (userDoc.exists()) {\n                let data = userDoc.data();\n                console.log(data);\n                setUser(data);\n            }\n        };\n        fetchUserData();\n    }, [\n        router,\n        userid,\n        useRole\n    ]);\n    if (!user) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\sdp-firebase-final\\\\eduShare\\\\pages\\\\Student\\\\Profile.js\",\n            lineNumber: 51,\n            columnNumber: 12\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_system__WEBPACK_IMPORTED_MODULE_9__.Box, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_Student_StuNav__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\sdp-firebase-final\\\\eduShare\\\\pages\\\\Student\\\\Profile.js\",\n                    lineNumber: 58,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Grid, {\n                    container: true,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Grid, {\n                            item: true,\n                            xs: 2,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_Student_StuSideBar__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\sdp-firebase-final\\\\eduShare\\\\pages\\\\Student\\\\Profile.js\",\n                                lineNumber: 61,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\sdp-firebase-final\\\\eduShare\\\\pages\\\\Student\\\\Profile.js\",\n                            lineNumber: 60,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Grid, {\n                            item: true,\n                            xs: 10,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_system__WEBPACK_IMPORTED_MODULE_9__.Box, {\n                                sx: {\n                                    display: \"flex\",\n                                    justifyContent: \"center\",\n                                    alignItems: \"center\",\n                                    minHeight: \"100vh\",\n                                    backgroundColor: \"#f5f5f5\"\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Card, {\n                                    sx: {\n                                        width: \"90%\",\n                                        maxWidth: 700,\n                                        boxShadow: \"0 8px 16px rgba(0, 0, 0, 0.2)\",\n                                        borderRadius: 2\n                                    },\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_10__.CardMedia, {\n                                            component: \"img\",\n                                            height: \"200\",\n                                            image: user.coverPicture || \"/path/to/default/cover/picture\",\n                                            alt: \"Cover Image\",\n                                            sx: {\n                                                borderTopLeftRadius: 2,\n                                                borderTopRightRadius: 2\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\sdp-firebase-final\\\\eduShare\\\\pages\\\\Student\\\\Profile.js\",\n                                            lineNumber: 81,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_10__.CardContent, {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_system__WEBPACK_IMPORTED_MODULE_9__.Box, {\n                                                    sx: {\n                                                        display: \"flex\",\n                                                        flexDirection: \"column\",\n                                                        justifyContent: \"center\",\n                                                        alignItems: \"center\"\n                                                    },\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Avatar, {\n                                                            src: user.profilePicture || \"/path/to/default/profile/picture\",\n                                                            alt: \"Profile Picture\",\n                                                            sx: {\n                                                                width: 140,\n                                                                height: 140,\n                                                                marginBottom: 2,\n                                                                boxShadow: \"0 4px 8px rgba(0, 0, 0, 0.2)\",\n                                                                border: \"4px solid #ffffff\",\n                                                                position: \"relative\",\n                                                                top: \"-70px\"\n                                                            }\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\sdp-firebase-final\\\\eduShare\\\\pages\\\\Student\\\\Profile.js\",\n                                                            lineNumber: 97,\n                                                            columnNumber: 21\n                                                        }, undefined),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Typography, {\n                                                            variant: \"h4\",\n                                                            component: \"div\",\n                                                            sx: {\n                                                                mt: -3\n                                                            },\n                                                            children: user.displayName\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\sdp-firebase-final\\\\eduShare\\\\pages\\\\Student\\\\Profile.js\",\n                                                            lineNumber: 110,\n                                                            columnNumber: 21\n                                                        }, undefined),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Typography, {\n                                                            variant: \"subtitle1\",\n                                                            component: \"div\",\n                                                            sx: {\n                                                                mb: 2\n                                                            },\n                                                            children: user.title\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\sdp-firebase-final\\\\eduShare\\\\pages\\\\Student\\\\Profile.js\",\n                                                            lineNumber: 113,\n                                                            columnNumber: 21\n                                                        }, undefined)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\sdp-firebase-final\\\\eduShare\\\\pages\\\\Student\\\\Profile.js\",\n                                                    lineNumber: 89,\n                                                    columnNumber: 19\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Typography, {\n                                                    variant: \"body1\",\n                                                    color: \"text.secondary\",\n                                                    sx: {\n                                                        textAlign: \"center\"\n                                                    },\n                                                    children: user.bio\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\sdp-firebase-final\\\\eduShare\\\\pages\\\\Student\\\\Profile.js\",\n                                                    lineNumber: 117,\n                                                    columnNumber: 19\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\sdp-firebase-final\\\\eduShare\\\\pages\\\\Student\\\\Profile.js\",\n                                            lineNumber: 88,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\sdp-firebase-final\\\\eduShare\\\\pages\\\\Student\\\\Profile.js\",\n                                    lineNumber: 73,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\sdp-firebase-final\\\\eduShare\\\\pages\\\\Student\\\\Profile.js\",\n                                lineNumber: 64,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\sdp-firebase-final\\\\eduShare\\\\pages\\\\Student\\\\Profile.js\",\n                            lineNumber: 63,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\sdp-firebase-final\\\\eduShare\\\\pages\\\\Student\\\\Profile.js\",\n                    lineNumber: 59,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\sdp-firebase-final\\\\eduShare\\\\pages\\\\Student\\\\Profile.js\",\n            lineNumber: 57,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\sdp-firebase-final\\\\eduShare\\\\pages\\\\Student\\\\Profile.js\",\n        lineNumber: 56,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Profile, \"iWXQ71HDYJc70PF3eYQuqOLv1gg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Profile;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Profile);\nvar _c;\n$RefreshReg$(_c, \"Profile\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O2dFQUNYYSxRQUFRO2dFQUNSQyxVQUFVO2dFQUNWQyxLQUFLOzREQUNQOzs7Ozs7c0VBRUYsOERBQUM3RCxzREFBVUE7NERBQUM4RCxTQUFROzREQUFLZCxXQUFVOzREQUFNVixJQUFJO2dFQUFFeUIsSUFBSSxDQUFDOzREQUFFO3NFQUNuRGpELEtBQUtrRCxXQUFXOzs7Ozs7c0VBRW5CLDhEQUFDaEUsc0RBQVVBOzREQUFDOEQsU0FBUTs0REFBWWQsV0FBVTs0REFBTVYsSUFBSTtnRUFBRTJCLElBQUk7NERBQUU7c0VBQ3pEbkQsS0FBS29ELEtBQUs7Ozs7Ozs7Ozs7Ozs4REFHZiw4REFBQ2xFLHNEQUFVQTtvREFDVDhELFNBQVE7b0RBQ1JLLE9BQU07b0RBQ043QixJQUFJO3dEQUFFOEIsV0FBVztvREFBUzs4REFFekJ0RCxLQUFLdUQsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVTdCO0dBekhNeEQ7O1FBRVdWLGtEQUFTQTs7O0tBRnBCVTtBQTJITiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9TdHVkZW50L1Byb2ZpbGUuanM/ODlmYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBCb3ggfSBmcm9tIFwiQG11aS9zeXN0ZW1cIjtcclxuaW1wb3J0IHsgQ2FyZCwgQ2FyZENvbnRlbnQsIENhcmRNZWRpYSwgVHlwb2dyYXBoeSwgQXZhdGFyLCBHcmlkIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IGFwcCwgYXV0aCB9IGZyb20gXCIuLi8uLi9GaXJlYmFzZS9GaXJlYmFzZVwiO1xyXG5pbXBvcnQgeyBnZXRGaXJlc3RvcmUsIGRvYywgZ2V0RG9jIH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xyXG5pbXBvcnQgeyBBdXRoQ29udGV4dCB9IGZyb20gXCIuLi8uLi9ob29rcy9BdXRoUHJvdmlkZXJcIjtcclxuaW1wb3J0IGdldFVzZXJSb2xlIGZyb20gXCIuLi8uLi9ob29rcy9nZXRSb2xlXCI7XHJcbmltcG9ydCBTdHVOYXYgZnJvbSBcIi4uLy4uL2NvbXBvbmVudC9TdHVkZW50L1N0dU5hdlwiO1xyXG5pbXBvcnQgU3R1U2lkZUJhciBmcm9tIFwiLi4vLi4vY29tcG9uZW50L1N0dWRlbnQvU3R1U2lkZUJhclwiO1xyXG5jb25zdCBQcm9maWxlID0gKCkgPT4ge1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgdXNlcklkLCB1c2VyUm9sZSB9ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XHJcblxyXG4gIC8vY29uc29sZS5sb2coZ2V0VXNlclJvbGUodXNlcklkLCBhcHApKVxyXG4gIGNvbnN0IFt1c2VSb2xlLCBzZXRVc2VSb2xlXSA9IHVzZVN0YXRlKFwiXCIpXHJcblxyXG5cclxuXHJcbiAgY29uc29sZS5sb2codXNlciwgdXNlcklkLCB1c2VyUm9sZSlcclxuICBjb25zdCB1c2VyaWQgPSBhdXRoLmN1cnJlbnRVc2VyLnVpZFxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy9nZXRVc2VyUm9sZSh1c2VySWQsIGFwcCkudGhlbihyZXMgPT4gc2V0VXNlUm9sZShyZXMpKVxyXG4gICAgY29uc3QgZmV0Y2hVc2VyRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3Qgcm9sZSA9IGF3YWl0IGdldFVzZXJSb2xlKHVzZXJpZCwgYXBwKTsgLy8gV2FpdCBmb3IgdGhlIHByb21pc2UgdG8gcmVzb2x2ZVxyXG4gICAgICBjb25zb2xlLmxvZygnVXNlciByb2xlOicsIHJvbGUpO1xyXG4gICAgICBzZXRVc2VSb2xlKHJvbGUpXHJcblxyXG4gICAgICBpZiAoIXVzZXJpZCB8fCAhcm9sZSkge1xyXG4gICAgICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgZGIgPSBnZXRGaXJlc3RvcmUoYXBwKTtcclxuICAgICAgY29uc3QgdXNlckRvY1JlZiA9IGRvYyhkYiwgcm9sZSwgdXNlcmlkKTtcclxuICAgICAgY29uc3QgdXNlckRvYyA9IGF3YWl0IGdldERvYyh1c2VyRG9jUmVmKTtcclxuXHJcbiAgICAgIGlmICh1c2VyRG9jLmV4aXN0cygpKSB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSB1c2VyRG9jLmRhdGEoKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgIHNldFVzZXIoZGF0YSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZmV0Y2hVc2VyRGF0YSgpO1xyXG4gIH0sIFtyb3V0ZXIsIHVzZXJpZCwgdXNlUm9sZV0pO1xyXG5cclxuXHJcbiAgaWYgKCF1c2VyKSB7XHJcbiAgICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xyXG4gIH1cclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8Qm94PlxyXG4gICAgICAgIDxTdHVOYXYgLz5cclxuICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsyfT5cclxuICAgICAgICAgICAgPFN0dVNpZGVCYXIgLz5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEwfT5cclxuICAgICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgIG1pbkhlaWdodDogXCIxMDB2aFwiLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNmNWY1ZjVcIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjkwJVwiLFxyXG4gICAgICAgICAgICAgICAgICBtYXhXaWR0aDogNzAwLFxyXG4gICAgICAgICAgICAgICAgICBib3hTaGFkb3c6IFwiMCA4cHggMTZweCByZ2JhKDAsIDAsIDAsIDAuMilcIixcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAyLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZE1lZGlhXHJcbiAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImltZ1wiXHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjIwMFwiXHJcbiAgICAgICAgICAgICAgICAgIGltYWdlPXt1c2VyLmNvdmVyUGljdHVyZSB8fCBcIi9wYXRoL3RvL2RlZmF1bHQvY292ZXIvcGljdHVyZVwifVxyXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJDb3ZlciBJbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgIHN4PXt7IGJvcmRlclRvcExlZnRSYWRpdXM6IDIsIGJvcmRlclRvcFJpZ2h0UmFkaXVzOiAyIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPENhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEF2YXRhclxyXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXt1c2VyLnByb2ZpbGVQaWN0dXJlIHx8IFwiL3BhdGgvdG8vZGVmYXVsdC9wcm9maWxlL3BpY3R1cmVcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlByb2ZpbGUgUGljdHVyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTQwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE0MCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3hTaGFkb3c6IFwiMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4yKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IFwiNHB4IHNvbGlkICNmZmZmZmZcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiBcIi03MHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCIgY29tcG9uZW50PVwiZGl2XCIgc3g9e3sgbXQ6IC0zIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAge3VzZXIuZGlzcGxheU5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIiBjb21wb25lbnQ9XCJkaXZcIiBzeD17eyBtYjogMiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIHt1c2VyLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImJvZHkxXCJcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICBzeD17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHt1c2VyLmJpb31cclxuICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZUNvbnRleHQiLCJCb3giLCJDYXJkIiwiQ2FyZENvbnRlbnQiLCJDYXJkTWVkaWEiLCJUeXBvZ3JhcGh5IiwiQXZhdGFyIiwiR3JpZCIsInVzZVJvdXRlciIsImFwcCIsImF1dGgiLCJnZXRGaXJlc3RvcmUiLCJkb2MiLCJnZXREb2MiLCJBdXRoQ29udGV4dCIsImdldFVzZXJSb2xlIiwiU3R1TmF2IiwiU3R1U2lkZUJhciIsIlByb2ZpbGUiLCJ1c2VyIiwic2V0VXNlciIsInJvdXRlciIsInVzZXJJZCIsInVzZXJSb2xlIiwidXNlUm9sZSIsInNldFVzZVJvbGUiLCJjb25zb2xlIiwibG9nIiwidXNlcmlkIiwiY3VycmVudFVzZXIiLCJ1aWQiLCJmZXRjaFVzZXJEYXRhIiwicm9sZSIsInB1c2giLCJkYiIsInVzZXJEb2NSZWYiLCJ1c2VyRG9jIiwiZXhpc3RzIiwiZGF0YSIsImRpdiIsImNvbnRhaW5lciIsIml0ZW0iLCJ4cyIsInN4IiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsIm1pbkhlaWdodCIsImJhY2tncm91bmRDb2xvciIsIndpZHRoIiwibWF4V2lkdGgiLCJib3hTaGFkb3ciLCJib3JkZXJSYWRpdXMiLCJjb21wb25lbnQiLCJoZWlnaHQiLCJpbWFnZSIsImNvdmVyUGljdHVyZSIsImFsdCIsImJvcmRlclRvcExlZnRSYWRpdXMiLCJib3JkZXJUb3BSaWdodFJhZGl1cyIsImZsZXhEaXJlY3Rpb24iLCJzcmMiLCJwcm9maWxlUGljdHVyZSIsIm1hcmdpbkJvdHRvbSIsImJvcmRlciIsInBvc2l0aW9uIiwidG9wIiwidmFyaWFudCIsIm10IiwiZGlzcGxheU5hbWUiLCJtYiIsInRpdGxlIiwiY29sb3IiLCJ0ZXh0QWxpZ24iLCJiaW8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Student/Profile.js\n"));

/***/ })

});