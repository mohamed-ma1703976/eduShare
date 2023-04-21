"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./component/Login.js":
/*!****************************!*\
  !*** ./component/Login.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/esm/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _hooks_AuthProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/AuthProvider */ \"./hooks/AuthProvider.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Firebase/Firebase */ \"./Firebase/Firebase.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n // Add this import\nfunction App() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { login  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_hooks_AuthProvider__WEBPACK_IMPORTED_MODULE_3__.AuthContext);\n    const [loginData, setLoginData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        email: \"\",\n        password: \"\"\n    });\n    const [loginError, setLoginError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    function handelChange(event) {\n        setLoginData((pre)=>{\n            return {\n                ...pre,\n                [event.target.name]: event.target.value\n            };\n        });\n    }\n    async function handelLogin(e) {\n        e.preventDefault();\n        const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.getAuth)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_5__.app);\n        try {\n            const userCredential = await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.signInWithEmailAndPassword)(auth, loginData.email, loginData.password);\n            const userId = userCredential.user.uid;\n            login(userId);\n            const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.getFirestore)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_5__.app);\n            const studentDocRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.doc)(db, \"Student\", userId);\n            const studentDoc = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.getDoc)(studentDocRef);\n            const instructorDocRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.doc)(db, \"Instructor\", userId);\n            const instructorDoc = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.getDoc)(instructorDocRef);\n            const adminDocRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.doc)(db, \"Admin\", userId);\n            const adminDoc = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.getDoc)(adminDocRef);\n            let userDoc;\n            let role;\n            if (studentDoc.exists()) {\n                userDoc = studentDoc;\n                role = \"student\";\n            } else if (instructorDoc.exists()) {\n                userDoc = instructorDoc;\n                role = \"instructor\";\n            } else if (adminDoc.exists()) {\n                userDoc = adminDoc;\n                role = \"admin\";\n            } else {\n                throw new Error(\"User not found in any role collection.\");\n            }\n            const userData = userDoc.data();\n            const profileComplete = userData.displayName && userData.bio && userData.title;\n            if (!profileComplete) {\n                router.push(\"/createProfile\");\n            } else {\n                if (role === \"student\") {\n                    router.push(\"/Student\");\n                } else if (role === \"instructor\") {\n                    router.push(\"/Instructor\");\n                } else {\n                    router.push(\"/Admin\");\n                }\n            }\n            setLoginError(false);\n        } catch (error) {\n            setLoginError(true);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Grid, {\n        container: true,\n        justifyContent: {\n            sm: \"center\"\n        },\n        alignItems: {\n            sm: \"center\"\n        },\n        height: \"100vh\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Paper, {\n            sx: {\n                width: 500,\n                height: 300,\n                backgroundColor: \"white\",\n                padding: 5,\n                pb: 10,\n                boxShadow: {\n                    xs: \"none\",\n                    md: \"0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)\"\n                }\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Stack, {\n                    direction: \"column\",\n                    gap: 2,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {\n                            variant: \"h3\",\n                            sx: {\n                                color: \"#454545\",\n                                fontWeight: \"800\",\n                                margin: \"0 0 0 -23px\",\n                                textAlign: \"center\"\n                            },\n                            children: [\n                                \"Edu\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    style: {\n                                        color: \"#1ABC9C\"\n                                    },\n                                    children: \"Share\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mohamedhossam/Documents/GitHub/eduShare/component/Login.js\",\n                                    lineNumber: 125,\n                                    columnNumber: 128\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/mohamedhossam/Documents/GitHub/eduShare/component/Login.js\",\n                            lineNumber: 125,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            style: {\n                                display: \"flex\",\n                                flexDirection: \"column\",\n                                margin: \"10px 10px 10px 10px\"\n                            },\n                            onSubmit: handelLogin,\n                            children: [\n                                loginError && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Alert, {\n                                    severity: \"error\",\n                                    sx: {\n                                        width: \"85%\",\n                                        margin: \"0 0 0 16px\"\n                                    },\n                                    children: \"Email or Password is Wrong !\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mohamedhossam/Documents/GitHub/eduShare/component/Login.js\",\n                                    lineNumber: 130,\n                                    columnNumber: 28\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.TextField, {\n                                    id: \"outlined-basic\",\n                                    label: \"Enter Email\",\n                                    variant: \"outlined\",\n                                    name: \"email\",\n                                    onChange: handelChange,\n                                    sx: {\n                                        margin: \"10px 10px 10px 10px\"\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/Users/mohamedhossam/Documents/GitHub/eduShare/component/Login.js\",\n                                    lineNumber: 131,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.TextField, {\n                                    id: \"outlined-basic\",\n                                    label: \"Enter Password\",\n                                    variant: \"outlined\",\n                                    name: \"password\",\n                                    onChange: handelChange,\n                                    sx: {\n                                        margin: \"10px 10px 10px 10px\"\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/Users/mohamedhossam/Documents/GitHub/eduShare/component/Login.js\",\n                                    lineNumber: 141,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                                    sx: {\n                                        backgroundColor: \"#00adb5\",\n                                        height: 45,\n                                        fontSize: 22,\n                                        fontWeight: \"bold\"\n                                    },\n                                    variant: \"contained\",\n                                    type: \"submit\",\n                                    onClick: handelLogin,\n                                    children: \"Login\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mohamedhossam/Documents/GitHub/eduShare/component/Login.js\",\n                                    lineNumber: 150,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/mohamedhossam/Documents/GitHub/eduShare/component/Login.js\",\n                            lineNumber: 126,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mohamedhossam/Documents/GitHub/eduShare/component/Login.js\",\n                    lineNumber: 124,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Link, {\n                    href: \"/signup/register\",\n                    variant: \"body2\",\n                    color: \"inherit\",\n                    children: \" Don't have an account? Register\"\n                }, void 0, false, {\n                    fileName: \"/Users/mohamedhossam/Documents/GitHub/eduShare/component/Login.js\",\n                    lineNumber: 165,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/mohamedhossam/Documents/GitHub/eduShare/component/Login.js\",\n            lineNumber: 110,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/mohamedhossam/Documents/GitHub/eduShare/component/Login.js\",\n        lineNumber: 104,\n        columnNumber: 5\n    }, this);\n}\n_s(App, \"/vq8W58zZBI2ADP+oogVFKZPdNg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7Ozs7OEJBS0wsOERBQUM1QiwrQ0FBSUE7b0JBQUN3RixNQUFLO29CQUFtQmxCLFNBQVE7b0JBQVFDLE9BQU07OEJBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXRFLENBQUM7R0FySnVCMUQ7O1FBQ1BULGtEQUFTQTs7O0tBREZTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudC9Mb2dpbi5qcz8xMzMwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgQnV0dG9uLFxuICBHcmlkLFxuICBQYXBlcixcbiAgU3RhY2ssXG4gIFRleHRGaWVsZCxcbiAgVHlwb2dyYXBoeSxcbiAgTGluayxcbiAgQWxlcnQsXG59IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyBCb3ggfSBmcm9tIFwiQG11aS9zeXN0ZW1cIjtcbmltcG9ydCBSb3V0ZXIsIHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBBdXRoQ29udGV4dCB9IGZyb20gXCIuLi9ob29rcy9BdXRoUHJvdmlkZXJcIjtcbmltcG9ydCB7IGdldEF1dGgsIHNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcbmltcG9ydCB7IGFwcCB9IGZyb20gXCIuLi9GaXJlYmFzZS9GaXJlYmFzZVwiO1xuaW1wb3J0IHsgZ2V0RmlyZXN0b3JlLCBkb2MsIGdldERvYyB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjsgLy8gQWRkIHRoaXMgaW1wb3J0XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgbG9naW4gfSA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xuXG4gIGNvbnN0IFtsb2dpbkRhdGEsIHNldExvZ2luRGF0YV0gPSB1c2VTdGF0ZSh7XG4gICAgZW1haWw6IFwiXCIsXG4gICAgcGFzc3dvcmQ6IFwiXCIsXG4gIH0pO1xuXG4gIGNvbnN0IFtsb2dpbkVycm9yLCBzZXRMb2dpbkVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBmdW5jdGlvbiBoYW5kZWxDaGFuZ2UoZXZlbnQpIHtcbiAgICBzZXRMb2dpbkRhdGEoKHByZSkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4ucHJlLFxuICAgICAgICBbZXZlbnQudGFyZ2V0Lm5hbWVdOiBldmVudC50YXJnZXQudmFsdWUsXG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGVsTG9naW4oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBhdXRoID0gZ2V0QXV0aChhcHApO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB1c2VyQ3JlZGVudGlhbCA9IGF3YWl0IHNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKFxuICAgICAgICBhdXRoLFxuICAgICAgICBsb2dpbkRhdGEuZW1haWwsXG4gICAgICAgIGxvZ2luRGF0YS5wYXNzd29yZFxuICAgICAgKTtcbiAgICAgIGNvbnN0IHVzZXJJZCA9IHVzZXJDcmVkZW50aWFsLnVzZXIudWlkO1xuICAgICAgbG9naW4odXNlcklkKTtcbiAgXG4gICAgICBjb25zdCBkYiA9IGdldEZpcmVzdG9yZShhcHApO1xuICAgICAgXG4gICAgICBjb25zdCBzdHVkZW50RG9jUmVmID0gZG9jKGRiLCBcIlN0dWRlbnRcIiwgdXNlcklkKTtcbiAgICAgIGNvbnN0IHN0dWRlbnREb2MgPSBhd2FpdCBnZXREb2Moc3R1ZGVudERvY1JlZik7XG4gIFxuICAgICAgY29uc3QgaW5zdHJ1Y3RvckRvY1JlZiA9IGRvYyhkYiwgXCJJbnN0cnVjdG9yXCIsIHVzZXJJZCk7XG4gICAgICBjb25zdCBpbnN0cnVjdG9yRG9jID0gYXdhaXQgZ2V0RG9jKGluc3RydWN0b3JEb2NSZWYpO1xuICBcbiAgICAgIGNvbnN0IGFkbWluRG9jUmVmID0gZG9jKGRiLCBcIkFkbWluXCIsIHVzZXJJZCk7XG4gICAgICBjb25zdCBhZG1pbkRvYyA9IGF3YWl0IGdldERvYyhhZG1pbkRvY1JlZik7XG4gIFxuICAgICAgbGV0IHVzZXJEb2M7XG4gICAgICBsZXQgcm9sZTtcbiAgXG4gICAgICBpZiAoc3R1ZGVudERvYy5leGlzdHMoKSkge1xuICAgICAgICB1c2VyRG9jID0gc3R1ZGVudERvYztcbiAgICAgICAgcm9sZSA9IFwic3R1ZGVudFwiO1xuICAgICAgfSBlbHNlIGlmIChpbnN0cnVjdG9yRG9jLmV4aXN0cygpKSB7XG4gICAgICAgIHVzZXJEb2MgPSBpbnN0cnVjdG9yRG9jO1xuICAgICAgICByb2xlID0gXCJpbnN0cnVjdG9yXCI7XG4gICAgICB9IGVsc2UgaWYgKGFkbWluRG9jLmV4aXN0cygpKSB7XG4gICAgICAgIHVzZXJEb2MgPSBhZG1pbkRvYztcbiAgICAgICAgcm9sZSA9IFwiYWRtaW5cIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVzZXIgbm90IGZvdW5kIGluIGFueSByb2xlIGNvbGxlY3Rpb24uXCIpO1xuICAgICAgfVxuICBcbiAgICAgIGNvbnN0IHVzZXJEYXRhID0gdXNlckRvYy5kYXRhKCk7XG4gICAgICBjb25zdCBwcm9maWxlQ29tcGxldGUgPSAoXG4gICAgICAgIHVzZXJEYXRhLmRpc3BsYXlOYW1lICYmXG4gICAgICAgIHVzZXJEYXRhLmJpbyAmJlxuICAgICAgICB1c2VyRGF0YS50aXRsZVxuICAgICAgKTtcbiAgXG4gICAgICBpZiAoIXByb2ZpbGVDb21wbGV0ZSkge1xuICAgICAgICByb3V0ZXIucHVzaChcIi9jcmVhdGVQcm9maWxlXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHJvbGUgPT09IFwic3R1ZGVudFwiKSB7XG4gICAgICAgICAgcm91dGVyLnB1c2goXCIvU3R1ZGVudFwiKTtcbiAgICAgICAgfSBlbHNlIGlmIChyb2xlID09PSBcImluc3RydWN0b3JcIikge1xuICAgICAgICAgIHJvdXRlci5wdXNoKFwiL0luc3RydWN0b3JcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcm91dGVyLnB1c2goXCIvQWRtaW5cIik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgXG4gICAgICBzZXRMb2dpbkVycm9yKGZhbHNlKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgc2V0TG9naW5FcnJvcih0cnVlKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8R3JpZFxuICAgICAgY29udGFpbmVyXG4gICAgICBqdXN0aWZ5Q29udGVudD17eyBzbTogXCJjZW50ZXJcIiB9fVxuICAgICAgYWxpZ25JdGVtcz17eyBzbTogXCJjZW50ZXJcIiB9fVxuICAgICAgaGVpZ2h0PXtcIjEwMHZoXCJ9XG4gICAgPlxuICAgICAgPFBhcGVyXG4gICAgICAgIHN4PXt7XG4gICAgICAgICAgd2lkdGg6IDUwMCxcbiAgICAgICAgICBoZWlnaHQ6IDMwMCxcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICBwYWRkaW5nOiA1LFxuICAgICAgICAgIHBiOiAxMCxcbiAgICAgICAgICBib3hTaGFkb3c6IHtcbiAgICAgICAgICAgIHhzOiBcIm5vbmVcIixcbiAgICAgICAgICAgIG1kOlxuICAgICAgICAgICAgICBcIjBweCA0cHggNXB4IC0ycHggcmdiYSgwLDAsMCwwLjIpLDBweCA3cHggMTBweCAxcHggcmdiYSgwLDAsMCwwLjE0KSwwcHggMnB4IDE2cHggMXB4IHJnYmEoMCwwLDAsMC4xMilcIlxuICAgICAgICAgIH1cbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj17XCJjb2x1bW5cIn0gZ2FwPXsyfT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoMycgc3g9e3sgY29sb3I6IFwiIzQ1NDU0NVwiLCBmb250V2VpZ2h0OiBcIjgwMFwiLCBtYXJnaW46IFwiMCAwIDAgLTIzcHhcIiwgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PkVkdTxzcGFuIHN0eWxlPXt7IGNvbG9yOiBcIiMxQUJDOUNcIiB9fT5TaGFyZTwvc3Bhbj48L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPGZvcm0gc3R5bGU9e3tcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLCBtYXJnaW46IFwiMTBweCAxMHB4IDEwcHggMTBweFwiXG4gICAgICAgICAgfX0gb25TdWJtaXQ9e2hhbmRlbExvZ2lufT5cblxuICAgICAgICAgICAge2xvZ2luRXJyb3IgJiYgPEFsZXJ0IHNldmVyaXR5PVwiZXJyb3JcIiBzeD17eyB3aWR0aDogXCI4NSVcIiwgbWFyZ2luOiBcIjAgMCAwIDE2cHhcIiB9fT5FbWFpbCBvciBQYXNzd29yZCBpcyBXcm9uZyAhPC9BbGVydD59XG4gICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgIGlkPVwib3V0bGluZWQtYmFzaWNcIlxuICAgICAgICAgICAgICBsYWJlbD1cIkVudGVyIEVtYWlsXCJcbiAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRlbENoYW5nZX1cbiAgICAgICAgICAgICAgc3g9e3sgbWFyZ2luOiBcIjEwcHggMTBweCAxMHB4IDEwcHhcIiB9fVxuXG5cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgIGlkPVwib3V0bGluZWQtYmFzaWNcIlxuICAgICAgICAgICAgICBsYWJlbD1cIkVudGVyIFBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRlbENoYW5nZX1cbiAgICAgICAgICAgICAgc3g9e3sgbWFyZ2luOiBcIjEwcHggMTBweCAxMHB4IDEwcHhcIiB9fVxuXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMDBhZGI1XCIsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0NSxcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogMjIsXG4gICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCJib2xkXCJcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kZWxMb2dpbn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgTG9naW5cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9zaWdudXAvcmVnaXN0ZXJcIiB2YXJpYW50PVwiYm9keTJcIiBjb2xvcj1cImluaGVyaXRcIj4gRG9uJ3QgaGF2ZSBhbiBhY2NvdW50PyBSZWdpc3RlcjwvTGluaz5cbiAgICAgIDwvUGFwZXI+XG4gICAgPC9HcmlkID5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQnV0dG9uIiwiR3JpZCIsIlBhcGVyIiwiU3RhY2siLCJUZXh0RmllbGQiLCJUeXBvZ3JhcGh5IiwiTGluayIsIkFsZXJ0IiwiQm94IiwiUm91dGVyIiwidXNlUm91dGVyIiwidXNlQ29udGV4dCIsIkF1dGhDb250ZXh0IiwiZ2V0QXV0aCIsInNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIiwiYXBwIiwiZ2V0RmlyZXN0b3JlIiwiZG9jIiwiZ2V0RG9jIiwiQXBwIiwicm91dGVyIiwibG9naW4iLCJsb2dpbkRhdGEiLCJzZXRMb2dpbkRhdGEiLCJlbWFpbCIsInBhc3N3b3JkIiwibG9naW5FcnJvciIsInNldExvZ2luRXJyb3IiLCJoYW5kZWxDaGFuZ2UiLCJldmVudCIsInByZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsImhhbmRlbExvZ2luIiwiZSIsInByZXZlbnREZWZhdWx0IiwiYXV0aCIsInVzZXJDcmVkZW50aWFsIiwidXNlcklkIiwidXNlciIsInVpZCIsImRiIiwic3R1ZGVudERvY1JlZiIsInN0dWRlbnREb2MiLCJpbnN0cnVjdG9yRG9jUmVmIiwiaW5zdHJ1Y3RvckRvYyIsImFkbWluRG9jUmVmIiwiYWRtaW5Eb2MiLCJ1c2VyRG9jIiwicm9sZSIsImV4aXN0cyIsIkVycm9yIiwidXNlckRhdGEiLCJkYXRhIiwicHJvZmlsZUNvbXBsZXRlIiwiZGlzcGxheU5hbWUiLCJiaW8iLCJ0aXRsZSIsInB1c2giLCJlcnJvciIsImNvbnRhaW5lciIsImp1c3RpZnlDb250ZW50Iiwic20iLCJhbGlnbkl0ZW1zIiwiaGVpZ2h0Iiwic3giLCJ3aWR0aCIsImJhY2tncm91bmRDb2xvciIsInBhZGRpbmciLCJwYiIsImJveFNoYWRvdyIsInhzIiwibWQiLCJkaXJlY3Rpb24iLCJnYXAiLCJ2YXJpYW50IiwiY29sb3IiLCJmb250V2VpZ2h0IiwibWFyZ2luIiwidGV4dEFsaWduIiwic3BhbiIsInN0eWxlIiwiZm9ybSIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwib25TdWJtaXQiLCJzZXZlcml0eSIsImlkIiwibGFiZWwiLCJvbkNoYW5nZSIsImZvbnRTaXplIiwidHlwZSIsIm9uQ2xpY2siLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./component/Login.js\n"));

/***/ })

});