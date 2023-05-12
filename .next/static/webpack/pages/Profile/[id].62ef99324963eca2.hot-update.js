/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/Profile/[id]",{

/***/ "./pages/Profile/[id].js":
/*!*******************************!*\
  !*** ./pages/Profile/[id].js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/system */ \"./node_modules/@mui/system/esm/index.js\");\n/* harmony import */ var _component_SendMessage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../component/SendMessage */ \"./component/SendMessage.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Firebase/Firebase */ \"./Firebase/Firebase.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var _hooks_getRole__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/getRole */ \"./hooks/getRole.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n// import { MessageOutlined, FavoriteOutlined } from \"@mui/icons-material\";\n\nconst Profile = ()=>{\n    _s();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const { id  } = router.query;\n    const [sendMessageOpen, setSendMessageOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [userRole, setUserRole] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleSendMessageClick = ()=>{\n        setSendMessageOpen(true);\n    };\n    const handleSendMessageClose = ()=>{\n        setSendMessageOpen(false);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!id) {\n            return;\n        }\n        const fetchUserData = async ()=>{\n            const role = await (0,_hooks_getRole__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(id, _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_5__.app);\n            console.log(\"User role:\", role);\n            setUserRole(role);\n            const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.getFirestore)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_5__.app);\n            const userDocRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.doc)(db, role, id);\n            const userDoc = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.getDoc)(userDocRef);\n            if (userDoc.exists()) {\n                let data = userDoc.data();\n                console.log(data);\n                setUser(data);\n            }\n        };\n        fetchUserData();\n    }, [\n        router,\n        id\n    ]);\n    if (!user) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.CircularProgress, {\n                size: 100,\n                color: \"success\",\n                sx: {\n                    margin: \"200px 550px 0 0 \"\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\moham\\\\Documents\\\\GitHub\\\\eduShare\\\\pages\\\\Profile\\\\[id].js\",\n                lineNumber: 63,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\moham\\\\Documents\\\\GitHub\\\\eduShare\\\\pages\\\\Profile\\\\[id].js\",\n            lineNumber: 62,\n            columnNumber: 7\n        }, undefined);\n    }\n    const cardVariants = {\n        hidden: {\n            opacity: 0,\n            scale: 0.8\n        },\n        visible: {\n            opacity: 1,\n            scale: 1\n        }\n    };\n    const defaultCoverImage = \"https://via.placeholder.com/1920x400.png?text=Cover+Image\";\n    const defaultProfileImage = \"https://i.ibb.co/stTJ1P1/computer-icons-teacher-png-favpng-s-JASskmgxhu-ZQK1-Ya-Xj-UMPj-ZG.jpg\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_system__WEBPACK_IMPORTED_MODULE_9__.Box, {\n        sx: {\n            display: \"flex\",\n            flexDirection: \"column\",\n            minHeight: \"100vh\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: user.displayName\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\moham\\\\Documents\\\\GitHub\\\\eduShare\\\\pages\\\\Profile\\\\[id].js\",\n                        lineNumber: 90,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"https://i.ibb.co/RN7HqQT/Edu-Share-Logo.png\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\moham\\\\Documents\\\\GitHub\\\\eduShare\\\\pages\\\\Profile\\\\[id].js\",\n                        lineNumber: 91,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\moham\\\\Documents\\\\GitHub\\\\eduShare\\\\pages\\\\Profile\\\\[id].js\",\n                lineNumber: 89,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.CardMedia, {\n                component: \"img\",\n                image: user.coverPicture || defaultCoverImage,\n                alt: \"Cover Image\",\n                sx: {\n                    borderTopLeftRadius: 0,\n                    borderTopRightRadius: 0,\n                    height: \"40%\",\n                    maxHeight: \"300px\",\n                    objectFit: \"cover\",\n                    width: \"100%\"\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\moham\\\\Documents\\\\GitHub\\\\eduShare\\\\pages\\\\Profile\\\\[id].js\",\n                lineNumber: 93,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_system__WEBPACK_IMPORTED_MODULE_9__.Box, {\n                sx: {\n                    flexGrow: 1,\n                    display: \"flex\",\n                    flexDirection: \"column\",\n                    justifyContent: \"center\",\n                    alignItems: \"center\",\n                    backgroundColor: \"#f5f5f5\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Avatar, {\n                        src: user.profilePicture || defaultProfileImage,\n                        alt: \"Profile Picture\",\n                        sx: {\n                            width: 140,\n                            height: 140,\n                            marginBottom: 2,\n                            boxShadow: \"0 4px 8px rgba(0, 0, 0, 0.2)\",\n                            border: \"4px solid #ffffff\",\n                            position: \"relative\",\n                            top: \"-70px\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\moham\\\\Documents\\\\GitHub\\\\eduShare\\\\pages\\\\Profile\\\\[id].js\",\n                        lineNumber: 116,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Typography, {\n                        variant: \"h4\",\n                        component: \"div\",\n                        sx: {\n                            mt: -3\n                        },\n                        children: user.displayName\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\moham\\\\Documents\\\\GitHub\\\\eduShare\\\\pages\\\\Profile\\\\[id].js\",\n                        lineNumber: 129,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Typography, {\n                        variant: \"subtitle1\",\n                        component: \"div\",\n                        sx: {\n                            mb: 2\n                        },\n                        children: user.title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\moham\\\\Documents\\\\GitHub\\\\eduShare\\\\pages\\\\Profile\\\\[id].js\",\n                        lineNumber: 132,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Typography, {\n                        variant: \"body1\",\n                        color: \"text.secondary\",\n                        sx: {\n                            textAlign: \"center\",\n                            px: 2\n                        },\n                        children: user.bio\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\moham\\\\Documents\\\\GitHub\\\\eduShare\\\\pages\\\\Profile\\\\[id].js\",\n                        lineNumber: 135,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_system__WEBPACK_IMPORTED_MODULE_9__.Box, {\n                        sx: {\n                            display: \"flex\",\n                            justifyContent: \"center\",\n                            alignItems: \"center\",\n                            marginTop: \"24px\"\n                        },\n                        children: id && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_SendMessage__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            open: sendMessageOpen,\n                            handleClose: handleSendMessageClose,\n                            toId: id\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\moham\\\\Documents\\\\GitHub\\\\eduShare\\\\pages\\\\Profile\\\\[id].js\",\n                            lineNumber: 160,\n                            columnNumber: 7\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\moham\\\\Documents\\\\GitHub\\\\eduShare\\\\pages\\\\Profile\\\\[id].js\",\n                        lineNumber: 142,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\moham\\\\Documents\\\\GitHub\\\\eduShare\\\\pages\\\\Profile\\\\[id].js\",\n                lineNumber: 106,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\moham\\\\Documents\\\\GitHub\\\\eduShare\\\\pages\\\\Profile\\\\[id].js\",\n        lineNumber: 82,\n        columnNumber: 3\n    }, undefined);\n};\n_s(Profile, \"uxLpxLGwL9QHeFiNMIvl/Mlfgzk=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Profile;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Profile);\nvar _c;\n$RefreshReg$(_c, \"Profile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU87NEJBQ1BILFFBQVE7NEJBQ1JVLGNBQWM7NEJBQ2RDLFdBQVc7NEJBQ1hDLFFBQVE7NEJBQ1JDLFVBQVU7NEJBQ1ZDLEtBQUs7d0JBQ1A7Ozs7OztrQ0FFRiw4REFBQzFFLHFEQUFVQTt3QkFBQzJFLFNBQVE7d0JBQUtyQixXQUFVO3dCQUFNakIsSUFBSTs0QkFBRXVDLElBQUksQ0FBQzt3QkFBRTtrQ0FDbkQ5RCxLQUFLb0MsV0FBVzs7Ozs7O2tDQUVuQiw4REFBQ2xELHFEQUFVQTt3QkFBQzJFLFNBQVE7d0JBQVlyQixXQUFVO3dCQUFNakIsSUFBSTs0QkFBRXdDLElBQUk7d0JBQUU7a0NBQ3pEL0QsS0FBS21DLEtBQUs7Ozs7OztrQ0FFYiw4REFBQ2pELHFEQUFVQTt3QkFDVDJFLFNBQVE7d0JBQ1J2QyxPQUFNO3dCQUNOQyxJQUFJOzRCQUFFeUMsV0FBVzs0QkFBVUMsSUFBSTt3QkFBRTtrQ0FFaENqRSxLQUFLa0UsR0FBRzs7Ozs7O2tDQUVYLDhEQUFDckYsNENBQUdBO3dCQUNGMEMsSUFBSTs0QkFDRlMsU0FBUzs0QkFDVG1CLGdCQUFnQjs0QkFDaEJDLFlBQVk7NEJBQ1plLFdBQVc7d0JBQ2I7a0NBV0xoRSxvQkFDQyw4REFBQ3JCLDhEQUFXQTs0QkFDVnNGLE1BQU0vRDs0QkFDTmdFLGFBQWEzRDs0QkFDYjRELE1BQU1uRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQmQ7R0EvSk1KOztRQUVXUCxrREFBU0E7OztLQUZwQk87QUFpS04sK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvUHJvZmlsZS9baWRdLmpzP2M4NDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQm94IH0gZnJvbSBcIkBtdWkvc3lzdGVtXCI7XHJcbmltcG9ydCBTZW5kTWVzc2FnZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50L1NlbmRNZXNzYWdlXCI7XHJcbmltcG9ydCB7XHJcbiAgQ2FyZCxcclxuICBDYXJkQ29udGVudCxcclxuICBDYXJkTWVkaWEsXHJcbiAgVHlwb2dyYXBoeSxcclxuICBBdmF0YXIsXHJcbiAgQ2lyY3VsYXJQcm9ncmVzcyxcclxuICBHcmlkLFxyXG4gIEljb25CdXR0b24sXHJcbn0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgYXBwIH0gZnJvbSBcIi4uLy4uL0ZpcmViYXNlL0ZpcmViYXNlXCI7XHJcbmltcG9ydCB7IGdldEZpcmVzdG9yZSwgZG9jLCBnZXREb2MgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XHJcbmltcG9ydCBnZXRVc2VyUm9sZSBmcm9tIFwiLi4vLi4vaG9va3MvZ2V0Um9sZVwiO1xyXG4vLyBpbXBvcnQgeyBNZXNzYWdlT3V0bGluZWQsIEZhdm9yaXRlT3V0bGluZWQgfSBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xyXG5cclxuY29uc3QgUHJvZmlsZSA9ICgpID0+IHtcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgY29uc3QgW3NlbmRNZXNzYWdlT3Blbiwgc2V0U2VuZE1lc3NhZ2VPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbdXNlclJvbGUsIHNldFVzZXJSb2xlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIFxyXG4gIGNvbnN0IGhhbmRsZVNlbmRNZXNzYWdlQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBzZXRTZW5kTWVzc2FnZU9wZW4odHJ1ZSk7XHJcbiAgfTtcclxuICBcclxuICBjb25zdCBoYW5kbGVTZW5kTWVzc2FnZUNsb3NlID0gKCkgPT4ge1xyXG4gICAgc2V0U2VuZE1lc3NhZ2VPcGVuKGZhbHNlKTtcclxuICB9O1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIWlkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBmZXRjaFVzZXJEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zdCByb2xlID0gYXdhaXQgZ2V0VXNlclJvbGUoaWQsIGFwcCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiVXNlciByb2xlOlwiLCByb2xlKTtcclxuICAgICAgc2V0VXNlclJvbGUocm9sZSk7XHJcblxyXG4gICAgICBjb25zdCBkYiA9IGdldEZpcmVzdG9yZShhcHApO1xyXG4gICAgICBjb25zdCB1c2VyRG9jUmVmID0gZG9jKGRiLCByb2xlLCBpZCk7XHJcbiAgICAgIGNvbnN0IHVzZXJEb2MgPSBhd2FpdCBnZXREb2ModXNlckRvY1JlZik7XHJcblxyXG4gICAgICBpZiAodXNlckRvYy5leGlzdHMoKSkge1xyXG4gICAgICAgIGxldCBkYXRhID0gdXNlckRvYy5kYXRhKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgc2V0VXNlcihkYXRhKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBmZXRjaFVzZXJEYXRhKCk7XHJcbiAgfSwgW3JvdXRlciwgaWRdKTtcclxuXHJcbiAgaWYgKCF1c2VyKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxDaXJjdWxhclByb2dyZXNzXHJcbiAgICAgICAgICBzaXplPXsxMDB9XHJcbiAgICAgICAgICBjb2xvcj1cInN1Y2Nlc3NcIlxyXG4gICAgICAgICAgc3g9e3sgbWFyZ2luOiBcIjIwMHB4IDU1MHB4IDAgMCBcIiB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGNhcmRWYXJpYW50cyA9IHtcclxuICAgIGhpZGRlbjogeyBvcGFjaXR5OiAwLCBzY2FsZTogMC44IH0sXHJcbiAgICB2aXNpYmxlOiB7IG9wYWNpdHk6IDEsIHNjYWxlOiAxIH0sXHJcbiAgfTtcclxuICBjb25zdCBkZWZhdWx0Q292ZXJJbWFnZSA9XHJcbiAgXCJodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTkyMHg0MDAucG5nP3RleHQ9Q292ZXIrSW1hZ2VcIjtcclxuY29uc3QgZGVmYXVsdFByb2ZpbGVJbWFnZSA9XHJcbiAgXCJodHRwczovL2kuaWJiLmNvL3N0VEoxUDEvY29tcHV0ZXItaWNvbnMtdGVhY2hlci1wbmctZmF2cG5nLXMtSkFTc2ttZ3hodS1aUUsxLVlhLVhqLVVNUGotWkcuanBnXCI7XHJcblxyXG5yZXR1cm4gKFxyXG4gIDxCb3hcclxuICAgIHN4PXt7XHJcbiAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgICBtaW5IZWlnaHQ6IFwiMTAwdmhcIixcclxuICAgIH19XHJcbiAgPlxyXG4gICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPnt1c2VyLmRpc3BsYXlOYW1lfTwvdGl0bGU+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCJodHRwczovL2kuaWJiLmNvL1JON0hxUVQvRWR1LVNoYXJlLUxvZ28ucG5nXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgPENhcmRNZWRpYVxyXG4gICAgICBjb21wb25lbnQ9XCJpbWdcIlxyXG4gICAgICBpbWFnZT17dXNlci5jb3ZlclBpY3R1cmUgfHwgZGVmYXVsdENvdmVySW1hZ2V9XHJcbiAgICAgIGFsdD1cIkNvdmVyIEltYWdlXCJcclxuICAgICAgc3g9e3tcclxuICAgICAgICBib3JkZXJUb3BMZWZ0UmFkaXVzOiAwLFxyXG4gICAgICAgIGJvcmRlclRvcFJpZ2h0UmFkaXVzOiAwLFxyXG4gICAgICAgIGhlaWdodDogXCI0MCVcIixcclxuICAgICAgICBtYXhIZWlnaHQ6IFwiMzAwcHhcIiwgLy8gU2V0IHRoZSBtYXhIZWlnaHQgaGVyZVxyXG4gICAgICAgIG9iamVjdEZpdDogXCJjb3ZlclwiLFxyXG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgfX1cclxuICAgIC8+XHJcbiAgICAgIDxCb3hcclxuICAgICAgICBzeD17e1xyXG4gICAgICAgICAgZmxleEdyb3c6IDEsXHJcbiAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2Y1ZjVmNVwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8QXZhdGFyXHJcbiAgICAgICAgICBzcmM9e3VzZXIucHJvZmlsZVBpY3R1cmUgfHwgZGVmYXVsdFByb2ZpbGVJbWFnZX1cclxuICAgICAgICAgIGFsdD1cIlByb2ZpbGUgUGljdHVyZVwiXHJcbiAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICB3aWR0aDogMTQwLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDE0MCxcclxuICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAyLFxyXG4gICAgICAgICAgICBib3hTaGFkb3c6IFwiMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4yKVwiLFxyXG4gICAgICAgICAgICBib3JkZXI6IFwiNHB4IHNvbGlkICNmZmZmZmZcIixcclxuICAgICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgICAgICAgICAgdG9wOiBcIi03MHB4XCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCIgY29tcG9uZW50PVwiZGl2XCIgc3g9e3sgbXQ6IC0zIH19PlxyXG4gICAgICAgICAge3VzZXIuZGlzcGxheU5hbWV9XHJcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIiBjb21wb25lbnQ9XCJkaXZcIiBzeD17eyBtYjogMiB9fT5cclxuICAgICAgICAgIHt1c2VyLnRpdGxlfVxyXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgdmFyaWFudD1cImJvZHkxXCJcclxuICAgICAgICAgIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIlxyXG4gICAgICAgICAgc3g9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiLCBweDogMiB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHt1c2VyLmJpb31cclxuICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPEJveFxyXG4gICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICBtYXJnaW5Ub3A6IFwiMjRweFwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7LyogPEljb25CdXR0b24gc3g9e3sgbXI6IDEgfX0gb25DbGljaz17aGFuZGxlU2VuZE1lc3NhZ2VDbGlja30+XHJcbiAgICAgICAgICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCBzY2FsZTogMC44IH19XHJcbiAgICAgICAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCBzY2FsZTogMSB9fVxyXG4gICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNSB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICA8TWVzc2FnZU91dGxpbmVkIGZvbnRTaXplPVwibGFyZ2VcIiAvPlxyXG4gICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICA8L0ljb25CdXR0b24+ICovfVxyXG4gICAge2lkICYmIChcclxuICAgICAgPFNlbmRNZXNzYWdlXHJcbiAgICAgICAgb3Blbj17c2VuZE1lc3NhZ2VPcGVufVxyXG4gICAgICAgIGhhbmRsZUNsb3NlPXtoYW5kbGVTZW5kTWVzc2FnZUNsb3NlfVxyXG4gICAgICAgIHRvSWQ9e2lkfVxyXG4gICAgICAvPlxyXG4gICAgKX1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgey8qIDxJY29uQnV0dG9uPlxyXG4gICAgICAgICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgc2NhbGU6IDAuOCB9fVxyXG4gICAgICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgc2NhbGU6IDEgfX1cclxuICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjUgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxGYXZvcml0ZU91dGxpbmVkIGZvbnRTaXplPVwibGFyZ2VcIiBjb2xvcj1cImVycm9yXCIgLz5cclxuICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICAgICAgPC9JY29uQnV0dG9uPiAqL31cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG4gIFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZTtcclxuXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQm94IiwiU2VuZE1lc3NhZ2UiLCJDYXJkIiwiQ2FyZENvbnRlbnQiLCJDYXJkTWVkaWEiLCJUeXBvZ3JhcGh5IiwiQXZhdGFyIiwiQ2lyY3VsYXJQcm9ncmVzcyIsIkdyaWQiLCJJY29uQnV0dG9uIiwiSGVhZCIsInVzZVJvdXRlciIsImFwcCIsImdldEZpcmVzdG9yZSIsImRvYyIsImdldERvYyIsImdldFVzZXJSb2xlIiwibW90aW9uIiwiUHJvZmlsZSIsInVzZXIiLCJzZXRVc2VyIiwicm91dGVyIiwiaWQiLCJxdWVyeSIsInNlbmRNZXNzYWdlT3BlbiIsInNldFNlbmRNZXNzYWdlT3BlbiIsInVzZXJSb2xlIiwic2V0VXNlclJvbGUiLCJoYW5kbGVTZW5kTWVzc2FnZUNsaWNrIiwiaGFuZGxlU2VuZE1lc3NhZ2VDbG9zZSIsImZldGNoVXNlckRhdGEiLCJyb2xlIiwiY29uc29sZSIsImxvZyIsImRiIiwidXNlckRvY1JlZiIsInVzZXJEb2MiLCJleGlzdHMiLCJkYXRhIiwiZGl2Iiwic2l6ZSIsImNvbG9yIiwic3giLCJtYXJnaW4iLCJjYXJkVmFyaWFudHMiLCJoaWRkZW4iLCJvcGFjaXR5Iiwic2NhbGUiLCJ2aXNpYmxlIiwiZGVmYXVsdENvdmVySW1hZ2UiLCJkZWZhdWx0UHJvZmlsZUltYWdlIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJtaW5IZWlnaHQiLCJ0aXRsZSIsImRpc3BsYXlOYW1lIiwibGluayIsInJlbCIsImhyZWYiLCJjb21wb25lbnQiLCJpbWFnZSIsImNvdmVyUGljdHVyZSIsImFsdCIsImJvcmRlclRvcExlZnRSYWRpdXMiLCJib3JkZXJUb3BSaWdodFJhZGl1cyIsImhlaWdodCIsIm1heEhlaWdodCIsIm9iamVjdEZpdCIsIndpZHRoIiwiZmxleEdyb3ciLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJzcmMiLCJwcm9maWxlUGljdHVyZSIsIm1hcmdpbkJvdHRvbSIsImJveFNoYWRvdyIsImJvcmRlciIsInBvc2l0aW9uIiwidG9wIiwidmFyaWFudCIsIm10IiwibWIiLCJ0ZXh0QWxpZ24iLCJweCIsImJpbyIsIm1hcmdpblRvcCIsIm9wZW4iLCJoYW5kbGVDbG9zZSIsInRvSWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Profile/[id].js\n"));

/***/ }),

/***/ "./node_modules/next/head.js":
/*!***********************************!*\
  !*** ./node_modules/next/head.js ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("module.exports = __webpack_require__(/*! ./dist/shared/lib/head */ \"./node_modules/next/dist/shared/lib/head.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9oZWFkLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBLGlIQUFrRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9oZWFkLmpzPzg4NDkiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3Qvc2hhcmVkL2xpYi9oZWFkJylcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/head.js\n"));

/***/ })

});