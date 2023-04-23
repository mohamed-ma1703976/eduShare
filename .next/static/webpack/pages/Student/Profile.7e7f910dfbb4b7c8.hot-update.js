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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/system */ \"./node_modules/@mui/system/esm/index.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/esm/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Firebase/Firebase */ \"./Firebase/Firebase.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var _hooks_AuthProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/AuthProvider */ \"./hooks/AuthProvider.js\");\n/* harmony import */ var _hooks_getRole__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/getRole */ \"./hooks/getRole.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst Profile = ()=>{\n    _s();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { userId , userRole  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_hooks_AuthProvider__WEBPACK_IMPORTED_MODULE_5__.AuthContext);\n    let currentUserId = _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_3__.auth.currentUser.uid;\n    //console.log(getUserRole(userId, app))\n    const [useRole, setUseRole] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    console.log(user, userId, userRole, currentUserId);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        //getUserRole(userId, app).then(res => setUseRole(res))\n        const fetchUserData1 = async ()=>{\n            const role = await (0,_hooks_getRole__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(userId, _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_3__.app); // Wait for the promise to resolve\n            console.log(\"User role:\", role);\n            setUseRole(role);\n            if (!userId || !role) {\n                router.push(\"/\");\n                return;\n            }\n            const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.getFirestore)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_3__.app);\n            const userDocRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(db, role, userId);\n            const userDoc = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.getDoc)(userDocRef);\n            if (userDoc.exists()) {\n                const data = userDoc.docs ? userDoc.docs.map((doc)=>({\n                        id: doc.id,\n                        attributes: doc.data()\n                    })) : null;\n                console.log(data);\n                setUser(data);\n            }\n        };\n        fetchUserData1();\n    }, [\n        router,\n        userId\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Call fetchUserData again when useRole changes\n        fetchUserData();\n    }, [\n        useRole\n    ]);\n    if (!user) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\pages\\\\Student\\\\Profile.js\",\n            lineNumber: 57,\n            columnNumber: 12\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_system__WEBPACK_IMPORTED_MODULE_7__.Box, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Card, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.CardMedia, {\n                    component: \"img\",\n                    height: \"200\",\n                    image: user.coverPicture || \"/path/to/default/cover/picture\",\n                    alt: \"Cover Image\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\pages\\\\Student\\\\Profile.js\",\n                    lineNumber: 63,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.CardContent, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Typography, {\n                            variant: \"h5\",\n                            component: \"div\",\n                            children: user.displayName\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\pages\\\\Student\\\\Profile.js\",\n                            lineNumber: 70,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Typography, {\n                            variant: \"subtitle1\",\n                            component: \"div\",\n                            children: user.title\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\pages\\\\Student\\\\Profile.js\",\n                            lineNumber: 73,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Typography, {\n                            variant: \"body2\",\n                            color: \"text.secondary\",\n                            children: user.bio\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\pages\\\\Student\\\\Profile.js\",\n                            lineNumber: 76,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\pages\\\\Student\\\\Profile.js\",\n                    lineNumber: 69,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\pages\\\\Student\\\\Profile.js\",\n            lineNumber: 62,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\pages\\\\Student\\\\Profile.js\",\n        lineNumber: 61,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Profile, \"ec/cAtbMf3D7LPtH/Jm8gPTD6/E=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Profile;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Profile);\nvar _c;\n$RefreshReg$(_c, \"Profile\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9TdHVkZW50L1Byb2ZpbGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOztBQUErRDtBQUM3QjtBQUN1QztBQUNqQztBQUNZO0FBQ1c7QUFDUjtBQUNWO0FBQzdDLE1BQU1pQixVQUFVLElBQU07O0lBQ3BCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHbEIsK0NBQVFBLENBQUMsSUFBSTtJQUNyQyxNQUFNbUIsU0FBU1gsc0RBQVNBO0lBQ3hCLE1BQU0sRUFBRVksT0FBTSxFQUFFQyxTQUFRLEVBQUUsR0FBR25CLGlEQUFVQSxDQUFDWSw0REFBV0E7SUFDbkQsSUFBSVEsZ0JBQWdCWixvRUFBb0I7SUFFeEMsdUNBQXVDO0lBQ3ZDLE1BQU0sQ0FBQ2UsU0FBU0MsV0FBVyxHQUFHMUIsK0NBQVFBLENBQUM7SUFJdkMyQixRQUFRQyxHQUFHLENBQUNYLE1BQU1HLFFBQVFDLFVBQVVDO0lBRXBDckIsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLHVEQUF1RDtRQUV2RCxNQUFNNEIsaUJBQWdCLFVBQVk7WUFDaEMsTUFBTUMsT0FBTyxNQUFNZiwwREFBV0EsQ0FBQ0ssUUFBUVgsbURBQUdBLEdBQUcsa0NBQWtDO1lBQy9Fa0IsUUFBUUMsR0FBRyxDQUFDLGNBQWNFO1lBQzFCSixXQUFXSTtZQUVYLElBQUksQ0FBQ1YsVUFBVSxDQUFDVSxNQUFNO2dCQUNwQlgsT0FBT1ksSUFBSSxDQUFDO2dCQUNaO1lBQ0YsQ0FBQztZQUNELE1BQU1DLEtBQUtyQixnRUFBWUEsQ0FBQ0YsbURBQUdBO1lBQzNCLE1BQU13QixhQUFhckIsdURBQUdBLENBQUNvQixJQUFJRixNQUFNVjtZQUNqQyxNQUFNYyxVQUFVLE1BQU1yQiwwREFBTUEsQ0FBQ29CO1lBRTdCLElBQUlDLFFBQVFDLE1BQU0sSUFBSTtnQkFDcEIsTUFBTUMsT0FBT0YsUUFBUUcsSUFBSSxHQUFHSCxRQUFRRyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxDQUFDMUIsTUFBUzt3QkFDckQyQixJQUFJM0IsSUFBSTJCLEVBQUU7d0JBQ1ZDLFlBQVk1QixJQUFJd0IsSUFBSTtvQkFDdEIsTUFBTSxJQUFJO2dCQUNWVCxRQUFRQyxHQUFHLENBQUNRO2dCQUNabEIsUUFBUWtCO1lBQ1YsQ0FBQztRQUNIO1FBRUFQO0lBQ0YsR0FBRztRQUFDVjtRQUFRQztLQUFPO0lBRW5CbkIsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLGdEQUFnRDtRQUNoRDRCO0lBQ0YsR0FBRztRQUFDSjtLQUFRO0lBRVosSUFBSSxDQUFDUixNQUFNO1FBQ1QscUJBQU8sOERBQUN3QjtzQkFBSTs7Ozs7O0lBQ2QsQ0FBQztJQUVELHFCQUNFLDhEQUFDdEMsNENBQUdBO2tCQUNGLDRFQUFDQywrQ0FBSUE7OzhCQUNILDhEQUFDRSxvREFBU0E7b0JBQ1JvQyxXQUFVO29CQUNWQyxRQUFPO29CQUNQQyxPQUFPM0IsS0FBSzRCLFlBQVksSUFBSTtvQkFDNUJDLEtBQUk7Ozs7Ozs4QkFFTiw4REFBQ3pDLHNEQUFXQTs7c0NBQ1YsOERBQUNFLHFEQUFVQTs0QkFBQ3dDLFNBQVE7NEJBQUtMLFdBQVU7c0NBQ2hDekIsS0FBSytCLFdBQVc7Ozs7OztzQ0FFbkIsOERBQUN6QyxxREFBVUE7NEJBQUN3QyxTQUFROzRCQUFZTCxXQUFVO3NDQUN2Q3pCLEtBQUtnQyxLQUFLOzs7Ozs7c0NBRWIsOERBQUMxQyxxREFBVUE7NEJBQUN3QyxTQUFROzRCQUFRRyxPQUFNO3NDQUMvQmpDLEtBQUtrQyxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1yQjtHQTFFTW5DOztRQUVXUixrREFBU0E7OztLQUZwQlE7QUE0RU4sK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvU3R1ZGVudC9Qcm9maWxlLmpzPzg5ZmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQm94IH0gZnJvbSBcIkBtdWkvc3lzdGVtXCI7XHJcbmltcG9ydCB7IENhcmQsIENhcmRDb250ZW50LCBDYXJkTWVkaWEsIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgYXBwLCBhdXRoIH0gZnJvbSBcIi4uLy4uL0ZpcmViYXNlL0ZpcmViYXNlXCI7XHJcbmltcG9ydCB7IGdldEZpcmVzdG9yZSwgZG9jLCBnZXREb2MgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XHJcbmltcG9ydCB7IEF1dGhDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2hvb2tzL0F1dGhQcm92aWRlclwiO1xyXG5pbXBvcnQgZ2V0VXNlclJvbGUgZnJvbSBcIi4uLy4uL2hvb2tzL2dldFJvbGVcIlxyXG5jb25zdCBQcm9maWxlID0gKCkgPT4ge1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgdXNlcklkLCB1c2VyUm9sZSB9ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XHJcbiAgbGV0IGN1cnJlbnRVc2VySWQgPSBhdXRoLmN1cnJlbnRVc2VyLnVpZDtcclxuXHJcbiAgLy9jb25zb2xlLmxvZyhnZXRVc2VyUm9sZSh1c2VySWQsIGFwcCkpXHJcbiAgY29uc3QgW3VzZVJvbGUsIHNldFVzZVJvbGVdID0gdXNlU3RhdGUoXCJcIilcclxuXHJcblxyXG5cclxuICBjb25zb2xlLmxvZyh1c2VyLCB1c2VySWQsIHVzZXJSb2xlLCBjdXJyZW50VXNlcklkKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy9nZXRVc2VyUm9sZSh1c2VySWQsIGFwcCkudGhlbihyZXMgPT4gc2V0VXNlUm9sZShyZXMpKVxyXG5cclxuICAgIGNvbnN0IGZldGNoVXNlckRhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJvbGUgPSBhd2FpdCBnZXRVc2VyUm9sZSh1c2VySWQsIGFwcCk7IC8vIFdhaXQgZm9yIHRoZSBwcm9taXNlIHRvIHJlc29sdmVcclxuICAgICAgY29uc29sZS5sb2coJ1VzZXIgcm9sZTonLCByb2xlKTtcclxuICAgICAgc2V0VXNlUm9sZShyb2xlKVxyXG5cclxuICAgICAgaWYgKCF1c2VySWQgfHwgIXJvbGUpIHtcclxuICAgICAgICByb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGRiID0gZ2V0RmlyZXN0b3JlKGFwcCk7XHJcbiAgICAgIGNvbnN0IHVzZXJEb2NSZWYgPSBkb2MoZGIsIHJvbGUsIHVzZXJJZCk7XHJcbiAgICAgIGNvbnN0IHVzZXJEb2MgPSBhd2FpdCBnZXREb2ModXNlckRvY1JlZik7XHJcblxyXG4gICAgICBpZiAodXNlckRvYy5leGlzdHMoKSkge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB1c2VyRG9jLmRvY3MgPyB1c2VyRG9jLmRvY3MubWFwKChkb2MpID0+ICh7XHJcbiAgICAgICAgICBpZDogZG9jLmlkLFxyXG4gICAgICAgICAgYXR0cmlidXRlczogZG9jLmRhdGEoKSxcclxuICAgICAgICB9KSkgOiBudWxsO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgIHNldFVzZXIoZGF0YSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZmV0Y2hVc2VyRGF0YSgpO1xyXG4gIH0sIFtyb3V0ZXIsIHVzZXJJZF0pO1xyXG4gIFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBDYWxsIGZldGNoVXNlckRhdGEgYWdhaW4gd2hlbiB1c2VSb2xlIGNoYW5nZXNcclxuICAgIGZldGNoVXNlckRhdGEoKTtcclxuICB9LCBbdXNlUm9sZV0pO1xyXG5cclxuICBpZiAoIXVzZXIpIHtcclxuICAgIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJveD5cclxuICAgICAgPENhcmQ+XHJcbiAgICAgICAgPENhcmRNZWRpYVxyXG4gICAgICAgICAgY29tcG9uZW50PVwiaW1nXCJcclxuICAgICAgICAgIGhlaWdodD1cIjIwMFwiXHJcbiAgICAgICAgICBpbWFnZT17dXNlci5jb3ZlclBpY3R1cmUgfHwgXCIvcGF0aC90by9kZWZhdWx0L2NvdmVyL3BpY3R1cmVcIn1cclxuICAgICAgICAgIGFsdD1cIkNvdmVyIEltYWdlXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxDYXJkQ29udGVudD5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiIGNvbXBvbmVudD1cImRpdlwiPlxyXG4gICAgICAgICAgICB7dXNlci5kaXNwbGF5TmFtZX1cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIiBjb21wb25lbnQ9XCJkaXZcIj5cclxuICAgICAgICAgICAge3VzZXIudGl0bGV9XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgIHt1c2VyLmJpb31cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICA8L0NhcmQ+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VDb250ZXh0IiwiQm94IiwiQ2FyZCIsIkNhcmRDb250ZW50IiwiQ2FyZE1lZGlhIiwiVHlwb2dyYXBoeSIsInVzZVJvdXRlciIsImFwcCIsImF1dGgiLCJnZXRGaXJlc3RvcmUiLCJkb2MiLCJnZXREb2MiLCJBdXRoQ29udGV4dCIsImdldFVzZXJSb2xlIiwiUHJvZmlsZSIsInVzZXIiLCJzZXRVc2VyIiwicm91dGVyIiwidXNlcklkIiwidXNlclJvbGUiLCJjdXJyZW50VXNlcklkIiwiY3VycmVudFVzZXIiLCJ1aWQiLCJ1c2VSb2xlIiwic2V0VXNlUm9sZSIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaFVzZXJEYXRhIiwicm9sZSIsInB1c2giLCJkYiIsInVzZXJEb2NSZWYiLCJ1c2VyRG9jIiwiZXhpc3RzIiwiZGF0YSIsImRvY3MiLCJtYXAiLCJpZCIsImF0dHJpYnV0ZXMiLCJkaXYiLCJjb21wb25lbnQiLCJoZWlnaHQiLCJpbWFnZSIsImNvdmVyUGljdHVyZSIsImFsdCIsInZhcmlhbnQiLCJkaXNwbGF5TmFtZSIsInRpdGxlIiwiY29sb3IiLCJiaW8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Student/Profile.js\n"));

/***/ })

});