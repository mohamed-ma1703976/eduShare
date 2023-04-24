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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/system */ \"./node_modules/@mui/system/esm/index.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/esm/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Firebase/Firebase */ \"./Firebase/Firebase.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var _hooks_AuthProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/AuthProvider */ \"./hooks/AuthProvider.js\");\n/* harmony import */ var _hooks_getRole__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/getRole */ \"./hooks/getRole.js\");\n/* harmony import */ var _component_Student_StuNav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../component/Student/StuNav */ \"./component/Student/StuNav.js\");\n/* harmony import */ var _component_Student_StuSideBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../component/Student/StuSideBar */ \"./component/Student/StuSideBar.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst Profile = ()=>{\n    _s();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { userId , userRole  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_hooks_AuthProvider__WEBPACK_IMPORTED_MODULE_5__.AuthContext);\n    //console.log(getUserRole(userId, app))\n    const [useRole, setUseRole] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    console.log(user, userId, userRole);\n    const userid = _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_3__.auth.currentUser.uid;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        //getUserRole(userId, app).then(res => setUseRole(res))\n        const fetchUserData = async ()=>{\n            const role = await (0,_hooks_getRole__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(userid, _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_3__.app); // Wait for the promise to resolve\n            console.log(\"User role:\", role);\n            setUseRole(role);\n            if (!userid || !role) {\n                router.push(\"/\");\n                return;\n            }\n            const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.getFirestore)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_3__.app);\n            const userDocRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(db, role, userid);\n            const userDoc = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.getDoc)(userDocRef);\n            if (userDoc.exists()) {\n                let data = userDoc.data();\n                console.log(data);\n                setUser(data);\n            }\n        };\n        fetchUserData();\n    }, [\n        router,\n        userid,\n        useRole\n    ]);\n    if (!user) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.CircularProgress, {\n                size: 100,\n                color: \"success\",\n                sx: {\n                    margin: \"200px 550px 0 0 \"\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\sdp-firebase-final\\\\eduShare\\\\pages\\\\Student\\\\Profile.js\",\n                lineNumber: 51,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\sdp-firebase-final\\\\eduShare\\\\pages\\\\Student\\\\Profile.js\",\n            lineNumber: 51,\n            columnNumber: 12\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_system__WEBPACK_IMPORTED_MODULE_10__.Box, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_Student_StuNav__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\sdp-firebase-final\\\\eduShare\\\\pages\\\\Student\\\\Profile.js\",\n                    lineNumber: 59,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Grid, {\n                    container: true,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Grid, {\n                            item: true,\n                            xs: 2,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_Student_StuSideBar__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\sdp-firebase-final\\\\eduShare\\\\pages\\\\Student\\\\Profile.js\",\n                                lineNumber: 62,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\sdp-firebase-final\\\\eduShare\\\\pages\\\\Student\\\\Profile.js\",\n                            lineNumber: 61,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Grid, {\n                            item: true,\n                            xs: 10,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_system__WEBPACK_IMPORTED_MODULE_10__.Box, {\n                                sx: {\n                                    display: \"flex\",\n                                    justifyContent: \"center\",\n                                    alignItems: \"center\",\n                                    minHeight: \"100vh\",\n                                    backgroundColor: \"#f5f5f5\"\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Card, {\n                                    sx: {\n                                        width: \"90%\",\n                                        maxWidth: 700,\n                                        boxShadow: \"0 8px 16px rgba(0, 0, 0, 0.2)\",\n                                        borderRadius: 2\n                                    },\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.CardMedia, {\n                                            component: \"img\",\n                                            height: \"200\",\n                                            image: user.coverPicture || \"/path/to/default/cover/picture\",\n                                            alt: \"Cover Image\",\n                                            sx: {\n                                                borderTopLeftRadius: 2,\n                                                borderTopRightRadius: 2\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\sdp-firebase-final\\\\eduShare\\\\pages\\\\Student\\\\Profile.js\",\n                                            lineNumber: 82,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.CardContent, {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_system__WEBPACK_IMPORTED_MODULE_10__.Box, {\n                                                    sx: {\n                                                        display: \"flex\",\n                                                        flexDirection: \"column\",\n                                                        justifyContent: \"center\",\n                                                        alignItems: \"center\"\n                                                    },\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Avatar, {\n                                                            src: user.profilePicture || \"/path/to/default/profile/picture\",\n                                                            alt: \"Profile Picture\",\n                                                            sx: {\n                                                                width: 140,\n                                                                height: 140,\n                                                                marginBottom: 2,\n                                                                boxShadow: \"0 4px 8px rgba(0, 0, 0, 0.2)\",\n                                                                border: \"4px solid #ffffff\",\n                                                                position: \"relative\",\n                                                                top: \"-70px\"\n                                                            }\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\sdp-firebase-final\\\\eduShare\\\\pages\\\\Student\\\\Profile.js\",\n                                                            lineNumber: 98,\n                                                            columnNumber: 21\n                                                        }, undefined),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Typography, {\n                                                            variant: \"h4\",\n                                                            component: \"div\",\n                                                            sx: {\n                                                                mt: -3\n                                                            },\n                                                            children: user.displayName\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\sdp-firebase-final\\\\eduShare\\\\pages\\\\Student\\\\Profile.js\",\n                                                            lineNumber: 111,\n                                                            columnNumber: 21\n                                                        }, undefined),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Typography, {\n                                                            variant: \"subtitle1\",\n                                                            component: \"div\",\n                                                            sx: {\n                                                                mb: 2\n                                                            },\n                                                            children: user.title\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\sdp-firebase-final\\\\eduShare\\\\pages\\\\Student\\\\Profile.js\",\n                                                            lineNumber: 114,\n                                                            columnNumber: 21\n                                                        }, undefined)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\sdp-firebase-final\\\\eduShare\\\\pages\\\\Student\\\\Profile.js\",\n                                                    lineNumber: 90,\n                                                    columnNumber: 19\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Typography, {\n                                                    variant: \"body1\",\n                                                    color: \"text.secondary\",\n                                                    sx: {\n                                                        textAlign: \"center\"\n                                                    },\n                                                    children: user.bio\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\sdp-firebase-final\\\\eduShare\\\\pages\\\\Student\\\\Profile.js\",\n                                                    lineNumber: 118,\n                                                    columnNumber: 19\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\sdp-firebase-final\\\\eduShare\\\\pages\\\\Student\\\\Profile.js\",\n                                            lineNumber: 89,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\sdp-firebase-final\\\\eduShare\\\\pages\\\\Student\\\\Profile.js\",\n                                    lineNumber: 74,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\sdp-firebase-final\\\\eduShare\\\\pages\\\\Student\\\\Profile.js\",\n                                lineNumber: 65,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\sdp-firebase-final\\\\eduShare\\\\pages\\\\Student\\\\Profile.js\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\sdp-firebase-final\\\\eduShare\\\\pages\\\\Student\\\\Profile.js\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\sdp-firebase-final\\\\eduShare\\\\pages\\\\Student\\\\Profile.js\",\n            lineNumber: 58,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\sdp-firebase-final\\\\eduShare\\\\pages\\\\Student\\\\Profile.js\",\n        lineNumber: 57,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Profile, \"iWXQ71HDYJc70PF3eYQuqOLv1gg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Profile;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Profile);\nvar _c;\n$RefreshReg$(_c, \"Profile\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFjLElBQUk7NERBQzVCTCxLQUFJOzREQUNKbEIsSUFBSTtnRUFDRlUsT0FBTztnRUFDUEssUUFBUTtnRUFDUlMsY0FBYztnRUFDZFosV0FBVztnRUFDWGEsUUFBUTtnRUFDUkMsVUFBVTtnRUFDVkMsS0FBSzs0REFDUDs7Ozs7O3NFQUVGLDhEQUFDakUscURBQVVBOzREQUFDa0UsU0FBUTs0REFBS2QsV0FBVTs0REFBTWQsSUFBSTtnRUFBRTZCLElBQUksQ0FBQzs0REFBRTtzRUFDbkRwRCxLQUFLcUQsV0FBVzs7Ozs7O3NFQUVuQiw4REFBQ3BFLHFEQUFVQTs0REFBQ2tFLFNBQVE7NERBQVlkLFdBQVU7NERBQU1kLElBQUk7Z0VBQUUrQixJQUFJOzREQUFFO3NFQUN6RHRELEtBQUt1RCxLQUFLOzs7Ozs7Ozs7Ozs7OERBR2YsOERBQUN0RSxxREFBVUE7b0RBQ1RrRSxTQUFRO29EQUNSN0IsT0FBTTtvREFDTkMsSUFBSTt3REFBRWlDLFdBQVc7b0RBQVM7OERBRXpCeEQsS0FBS3lELEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVU3QjtHQTFITTFEOztRQUVXVixrREFBU0E7OztLQUZwQlU7QUE0SE4sK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvU3R1ZGVudC9Qcm9maWxlLmpzPzg5ZmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQm94IH0gZnJvbSBcIkBtdWkvc3lzdGVtXCI7XHJcbmltcG9ydCB7IENhcmQsIENhcmRDb250ZW50LCBDYXJkTWVkaWEsIFR5cG9ncmFwaHksIEF2YXRhciwgR3JpZCwgQ2lyY3VsYXJQcm9ncmVzcyB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBhcHAsIGF1dGggfSBmcm9tIFwiLi4vLi4vRmlyZWJhc2UvRmlyZWJhc2VcIjtcclxuaW1wb3J0IHsgZ2V0RmlyZXN0b3JlLCBkb2MsIGdldERvYyB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcclxuaW1wb3J0IHsgQXV0aENvbnRleHQgfSBmcm9tIFwiLi4vLi4vaG9va3MvQXV0aFByb3ZpZGVyXCI7XHJcbmltcG9ydCBnZXRVc2VyUm9sZSBmcm9tIFwiLi4vLi4vaG9va3MvZ2V0Um9sZVwiO1xyXG5pbXBvcnQgU3R1TmF2IGZyb20gXCIuLi8uLi9jb21wb25lbnQvU3R1ZGVudC9TdHVOYXZcIjtcclxuaW1wb3J0IFN0dVNpZGVCYXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudC9TdHVkZW50L1N0dVNpZGVCYXJcIjtcclxuY29uc3QgUHJvZmlsZSA9ICgpID0+IHtcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IHVzZXJJZCwgdXNlclJvbGUgfSA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xyXG5cclxuICAvL2NvbnNvbGUubG9nKGdldFVzZXJSb2xlKHVzZXJJZCwgYXBwKSlcclxuICBjb25zdCBbdXNlUm9sZSwgc2V0VXNlUm9sZV0gPSB1c2VTdGF0ZShcIlwiKVxyXG5cclxuXHJcblxyXG4gIGNvbnNvbGUubG9nKHVzZXIsIHVzZXJJZCwgdXNlclJvbGUpXHJcbiAgY29uc3QgdXNlcmlkID0gYXV0aC5jdXJyZW50VXNlci51aWRcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vZ2V0VXNlclJvbGUodXNlcklkLCBhcHApLnRoZW4ocmVzID0+IHNldFVzZVJvbGUocmVzKSlcclxuICAgIGNvbnN0IGZldGNoVXNlckRhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJvbGUgPSBhd2FpdCBnZXRVc2VyUm9sZSh1c2VyaWQsIGFwcCk7IC8vIFdhaXQgZm9yIHRoZSBwcm9taXNlIHRvIHJlc29sdmVcclxuICAgICAgY29uc29sZS5sb2coJ1VzZXIgcm9sZTonLCByb2xlKTtcclxuICAgICAgc2V0VXNlUm9sZShyb2xlKVxyXG5cclxuICAgICAgaWYgKCF1c2VyaWQgfHwgIXJvbGUpIHtcclxuICAgICAgICByb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGRiID0gZ2V0RmlyZXN0b3JlKGFwcCk7XHJcbiAgICAgIGNvbnN0IHVzZXJEb2NSZWYgPSBkb2MoZGIsIHJvbGUsIHVzZXJpZCk7XHJcbiAgICAgIGNvbnN0IHVzZXJEb2MgPSBhd2FpdCBnZXREb2ModXNlckRvY1JlZik7XHJcblxyXG4gICAgICBpZiAodXNlckRvYy5leGlzdHMoKSkge1xyXG4gICAgICAgIGxldCBkYXRhID0gdXNlckRvYy5kYXRhKClcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICBzZXRVc2VyKGRhdGEpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGZldGNoVXNlckRhdGEoKTtcclxuICB9LCBbcm91dGVyLCB1c2VyaWQsIHVzZVJvbGVdKTtcclxuXHJcblxyXG4gIGlmICghdXNlcikge1xyXG4gICAgcmV0dXJuIDxkaXY+PENpcmN1bGFyUHJvZ3Jlc3Mgc2l6ZT17MTAwfSBjb2xvcj1cInN1Y2Nlc3NcIiBzeD17eyBtYXJnaW46IFwiMjAwcHggNTUwcHggMCAwIFwiIH19IC8+PC9kaXY+O1xyXG5cclxuICB9XHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEJveD5cclxuICAgICAgICA8U3R1TmF2IC8+XHJcbiAgICAgICAgPEdyaWQgY29udGFpbmVyPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17Mn0+XHJcbiAgICAgICAgICAgIDxTdHVTaWRlQmFyIC8+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMH0+XHJcbiAgICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6IFwiMTAwdmhcIixcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZjVmNWY1XCIsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxDYXJkXHJcbiAgICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogXCI5MCVcIixcclxuICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6IDcwMCxcclxuICAgICAgICAgICAgICAgICAgYm94U2hhZG93OiBcIjAgOHB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjIpXCIsXHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogMixcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPENhcmRNZWRpYVxyXG4gICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJpbWdcIlxyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyMDBcIlxyXG4gICAgICAgICAgICAgICAgICBpbWFnZT17dXNlci5jb3ZlclBpY3R1cmUgfHwgXCIvcGF0aC90by9kZWZhdWx0L2NvdmVyL3BpY3R1cmVcIn1cclxuICAgICAgICAgICAgICAgICAgYWx0PVwiQ292ZXIgSW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICBzeD17eyBib3JkZXJUb3BMZWZ0UmFkaXVzOiAyLCBib3JkZXJUb3BSaWdodFJhZGl1czogMiB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBdmF0YXJcclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz17dXNlci5wcm9maWxlUGljdHVyZSB8fCBcIi9wYXRoL3RvL2RlZmF1bHQvcHJvZmlsZS9waWN0dXJlXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJQcm9maWxlIFBpY3R1cmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE0MCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94U2hhZG93OiBcIjAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMilcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBcIjRweCBzb2xpZCAjZmZmZmZmXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogXCItNzBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiIGNvbXBvbmVudD1cImRpdlwiIHN4PXt7IG10OiAtMyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIHt1c2VyLmRpc3BsYXlOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUxXCIgY29tcG9uZW50PVwiZGl2XCIgc3g9e3sgbWI6IDIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7dXNlci50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJib2R5MVwiXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3g9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7dXNlci5iaW99XHJcbiAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGU7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VDb250ZXh0IiwiQm94IiwiQ2FyZCIsIkNhcmRDb250ZW50IiwiQ2FyZE1lZGlhIiwiVHlwb2dyYXBoeSIsIkF2YXRhciIsIkdyaWQiLCJDaXJjdWxhclByb2dyZXNzIiwidXNlUm91dGVyIiwiYXBwIiwiYXV0aCIsImdldEZpcmVzdG9yZSIsImRvYyIsImdldERvYyIsIkF1dGhDb250ZXh0IiwiZ2V0VXNlclJvbGUiLCJTdHVOYXYiLCJTdHVTaWRlQmFyIiwiUHJvZmlsZSIsInVzZXIiLCJzZXRVc2VyIiwicm91dGVyIiwidXNlcklkIiwidXNlclJvbGUiLCJ1c2VSb2xlIiwic2V0VXNlUm9sZSIsImNvbnNvbGUiLCJsb2ciLCJ1c2VyaWQiLCJjdXJyZW50VXNlciIsInVpZCIsImZldGNoVXNlckRhdGEiLCJyb2xlIiwicHVzaCIsImRiIiwidXNlckRvY1JlZiIsInVzZXJEb2MiLCJleGlzdHMiLCJkYXRhIiwiZGl2Iiwic2l6ZSIsImNvbG9yIiwic3giLCJtYXJnaW4iLCJjb250YWluZXIiLCJpdGVtIiwieHMiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwibWluSGVpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwid2lkdGgiLCJtYXhXaWR0aCIsImJveFNoYWRvdyIsImJvcmRlclJhZGl1cyIsImNvbXBvbmVudCIsImhlaWdodCIsImltYWdlIiwiY292ZXJQaWN0dXJlIiwiYWx0IiwiYm9yZGVyVG9wTGVmdFJhZGl1cyIsImJvcmRlclRvcFJpZ2h0UmFkaXVzIiwiZmxleERpcmVjdGlvbiIsInNyYyIsInByb2ZpbGVQaWN0dXJlIiwibWFyZ2luQm90dG9tIiwiYm9yZGVyIiwicG9zaXRpb24iLCJ0b3AiLCJ2YXJpYW50IiwibXQiLCJkaXNwbGF5TmFtZSIsIm1iIiwidGl0bGUiLCJ0ZXh0QWxpZ24iLCJiaW8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Student/Profile.js\n"));

/***/ })

});