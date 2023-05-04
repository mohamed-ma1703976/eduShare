"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/Instructor/Messages",{

/***/ "./pages/Instructor/Messages.js":
/*!**************************************!*\
  !*** ./pages/Instructor/Messages.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Firebase/Firebase */ \"./Firebase/Firebase.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _component_Instructors_InstSidebarr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../component/Instructors/InstSidebarr */ \"./component/Instructors/InstSidebarr.js\");\n/* harmony import */ var _component_Instructors_InstNav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../component/Instructors/InstNav */ \"./component/Instructors/InstNav.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Messages(param) {\n    let { userId  } = param;\n    var _auth_currentUser;\n    _s();\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [inst, setInst] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [message, setMesaage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    userId = _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_3__.auth === null || _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_3__.auth === void 0 ? void 0 : (_auth_currentUser = _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_3__.auth.currentUser) === null || _auth_currentUser === void 0 ? void 0 : _auth_currentUser.uid;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchUserData = async (id, role)=>{\n            if (!id || !role) {\n                console.error(\"Invalid user ID or role\");\n                return {};\n            }\n            const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_3__.app);\n            const userDocRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)(db, role, id);\n            const userDoc = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getDoc)(userDocRef);\n            if (userDoc.exists()) {\n                let data = userDoc.data();\n                return {\n                    name: data.displayName,\n                    role: role\n                };\n            }\n            return {};\n        };\n        const fetchMessages = async ()=>{\n            if (userId) {\n                const messagesCollection = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.collection)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_3__.db, \"Message\");\n                const messagesQuery = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.query)(messagesCollection, (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.where)(\"toId\", \"==\", userId));\n                const querySnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getDocs)(messagesQuery);\n                const messagesList = [];\n                for (const doc of querySnapshot.docs){\n                    const messageData = doc.data();\n                    const userData = await fetchUserData(messageData.fromId, messageData.fromRole);\n                    console.log(messageData);\n                    messagesList.push({\n                        id: doc.id,\n                        data: {\n                            ...messageData,\n                            fromName: userData.name,\n                            fromRole: userData.role\n                        }\n                    });\n                }\n                setMessages(messagesList);\n            }\n        };\n        const fetchInst = async ()=>{\n            const studentCollection = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.collection)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_3__.db, \"Instructor\");\n            const studentSnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getDocs)(studentCollection);\n            const studentList = studentSnapshot.docs.map((doc)=>({\n                    id: doc.id,\n                    attributes: doc.data()\n                }));\n            setInst(studentList);\n        };\n        const fetcMess = async ()=>{\n            const studentCollection = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.collection)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_3__.db, \"Message\");\n            const studentSnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getDocs)(studentCollection);\n            const studentList = studentSnapshot.docs.map((doc)=>({\n                    id: doc.id,\n                    attributes: doc.data()\n                }));\n            setMesaage(studentList);\n        };\n        fetchInst();\n        fetcMess();\n        fetchMessages();\n    }, [\n        userId\n    ]);\n    let myMessages = message.filter((m)=>m.attributes.fromId === userId);\n    console.log(message);\n    console.log(inst);\n    console.log(myMessages);\n    console.log(userId);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_Instructors_InstNav__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\Spring-2023-Qu\\\\senior2-edushare\\\\eduShare\\\\pages\\\\Instructor\\\\Messages.js\",\n                lineNumber: 98,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Grid, {\n                container: true,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Grid, {\n                        item: true,\n                        xs: 2,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_Instructors_InstSidebarr__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\Spring-2023-Qu\\\\senior2-edushare\\\\eduShare\\\\pages\\\\Instructor\\\\Messages.js\",\n                            lineNumber: 101,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\Spring-2023-Qu\\\\senior2-edushare\\\\eduShare\\\\pages\\\\Instructor\\\\Messages.js\",\n                        lineNumber: 100,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Grid, {\n                        item: true,\n                        xs: 10,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Typography, {\n                                variant: \"h5\",\n                                gutterBottom: true,\n                                style: {\n                                    fontSize: \"30px\",\n                                    fontWeight: \"1000\",\n                                    margin: \"30px 0\",\n                                    color: \"#454545\"\n                                },\n                                children: \"Messages\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\Spring-2023-Qu\\\\senior2-edushare\\\\eduShare\\\\pages\\\\Instructor\\\\Messages.js\",\n                                lineNumber: 104,\n                                columnNumber: 11\n                            }, this),\n                            myMessages.length > 0 ? myMessages.map((message)=>{\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Card, {\n                                    sx: {\n                                        mb: 2\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.CardContent, {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                                                sx: {\n                                                    display: \"flex\",\n                                                    justifyContent: \"space-between\",\n                                                    alignItems: \"center\"\n                                                },\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Typography, {\n                                                    variant: \"subtitle1\",\n                                                    children: [\n                                                        \"send to :\",\n                                                        message.attributes.toFirstName,\n                                                        \", \",\n                                                        message.attributes.toLastName\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\Spring-2023-Qu\\\\senior2-edushare\\\\eduShare\\\\pages\\\\Instructor\\\\Messages.js\",\n                                                    lineNumber: 114,\n                                                    columnNumber: 23\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\Spring-2023-Qu\\\\senior2-edushare\\\\eduShare\\\\pages\\\\Instructor\\\\Messages.js\",\n                                                lineNumber: 113,\n                                                columnNumber: 21\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Typography, {\n                                                variant: \"body1\",\n                                                children: message.attributes.message\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\Spring-2023-Qu\\\\senior2-edushare\\\\eduShare\\\\pages\\\\Instructor\\\\Messages.js\",\n                                                lineNumber: 116,\n                                                columnNumber: 21\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Typography, {\n                                                variant: \"body1\",\n                                                children: [\n                                                    \"replay from : \" + message.attributes.toFirstName,\n                                                    \", \",\n                                                    message.attributes.toLastName\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\Spring-2023-Qu\\\\senior2-edushare\\\\eduShare\\\\pages\\\\Instructor\\\\Messages.js\",\n                                                lineNumber: 119,\n                                                columnNumber: 21\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Typography, {\n                                                variant: \"body1\",\n                                                children: message.attributes.replays\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\Spring-2023-Qu\\\\senior2-edushare\\\\eduShare\\\\pages\\\\Instructor\\\\Messages.js\",\n                                                lineNumber: 121,\n                                                columnNumber: 21\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\Spring-2023-Qu\\\\senior2-edushare\\\\eduShare\\\\pages\\\\Instructor\\\\Messages.js\",\n                                        lineNumber: 112,\n                                        columnNumber: 19\n                                    }, this)\n                                }, message.id, false, {\n                                    fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\Spring-2023-Qu\\\\senior2-edushare\\\\eduShare\\\\pages\\\\Instructor\\\\Messages.js\",\n                                    lineNumber: 111,\n                                    columnNumber: 17\n                                }, this);\n                            }) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Typography, {\n                                variant: \"body1\",\n                                children: \"No messages found.\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\Spring-2023-Qu\\\\senior2-edushare\\\\eduShare\\\\pages\\\\Instructor\\\\Messages.js\",\n                                lineNumber: 130,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\Spring-2023-Qu\\\\senior2-edushare\\\\eduShare\\\\pages\\\\Instructor\\\\Messages.js\",\n                        lineNumber: 103,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\Spring-2023-Qu\\\\senior2-edushare\\\\eduShare\\\\pages\\\\Instructor\\\\Messages.js\",\n                lineNumber: 99,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\Spring-2023-Qu\\\\senior2-edushare\\\\eduShare\\\\pages\\\\Instructor\\\\Messages.js\",\n        lineNumber: 97,\n        columnNumber: 5\n    }, this);\n}\n_s(Messages, \"THVRsE6XPjfIsK13kFB0YFhFMCs=\");\n_c = Messages;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Messages);\nvar _c;\n$RefreshReg$(_c, \"Messages\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUE7b0RBQUN3RCxTQUFROzt3REFBWTt3REFBVTFDLFFBQVFpQyxVQUFVLENBQUNzQixXQUFXO3dEQUFDO3dEQUFHdkQsUUFBUWlDLFVBQVUsQ0FBQ3VCLFVBQVU7Ozs7Ozs7Ozs7OzswREFFM0csOERBQUN0RSxxREFBVUE7Z0RBQUN3RCxTQUFROzBEQUFTMUMsUUFBUWlDLFVBQVUsQ0FBQ2pDLE9BQU87Ozs7OzswREFHdkQsOERBQUNkLHFEQUFVQTtnREFBQ3dELFNBQVE7O29EQUFTLG1CQUFrQjFDLFFBQVFpQyxVQUFVLENBQUNzQixXQUFXO29EQUFDO29EQUFHdkQsUUFBUWlDLFVBQVUsQ0FBQ3VCLFVBQVU7Ozs7Ozs7MERBRTlHLDhEQUFDdEUscURBQVVBO2dEQUFDd0QsU0FBUTswREFBUzFDLFFBQVFpQyxVQUFVLENBQUN3QixPQUFPOzs7Ozs7Ozs7Ozs7bUNBVmhEekQsUUFBUUssRUFBRTs7Ozs7NEJBZXpCLG1CQUlBLDhEQUFDbkIscURBQVVBO2dDQUFDd0QsU0FBUTswQ0FBUTs7Ozs7b0NBQzdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS1g7R0E5SFNoRDtLQUFBQTtBQWdJVCwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9JbnN0cnVjdG9yL01lc3NhZ2VzLmpzP2VhMDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY29sbGVjdGlvbiwgcXVlcnksIHdoZXJlLCBvblNuYXBzaG90LCBnZXREb2NzIH0gZnJvbSAnZmlyZWJhc2UvZmlyZXN0b3JlJztcclxuaW1wb3J0IHsgYXV0aCwgZGIgfSBmcm9tICcuLi8uLi9GaXJlYmFzZS9GaXJlYmFzZSc7XHJcbmltcG9ydCB7IENhcmQsIENhcmRDb250ZW50LCBHcmlkLCBUeXBvZ3JhcGh5LCBCb3ggfSBmcm9tICdAbXVpL21hdGVyaWFsJztcclxuaW1wb3J0IEluc3RTaWRlYmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudC9JbnN0cnVjdG9ycy9JbnN0U2lkZWJhcnInO1xyXG5pbXBvcnQgSW5zdE5hdiBmcm9tICcuLi8uLi9jb21wb25lbnQvSW5zdHJ1Y3RvcnMvSW5zdE5hdic7XHJcbmltcG9ydCB7IGdldEZpcmVzdG9yZSwgZG9jLCBnZXREb2MgfSBmcm9tICdmaXJlYmFzZS9maXJlc3RvcmUnO1xyXG5pbXBvcnQgeyBhcHAgfSBmcm9tICcuLi8uLi9GaXJlYmFzZS9GaXJlYmFzZSc7XHJcblxyXG5mdW5jdGlvbiBNZXNzYWdlcyh7IHVzZXJJZCB9KSB7XHJcbiAgY29uc3QgW21lc3NhZ2VzLCBzZXRNZXNzYWdlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2luc3QsIHNldEluc3RdID0gdXNlU3RhdGUoW10pXHJcbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc2FhZ2VdID0gdXNlU3RhdGUoW10pXHJcblxyXG4gIHVzZXJJZCA9IGF1dGg/LmN1cnJlbnRVc2VyPy51aWQ7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaFVzZXJEYXRhID0gYXN5bmMgKGlkLCByb2xlKSA9PiB7XHJcbiAgICAgIGlmICghaWQgfHwgIXJvbGUpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdJbnZhbGlkIHVzZXIgSUQgb3Igcm9sZScpO1xyXG4gICAgICAgIHJldHVybiB7fTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgZGIgPSBnZXRGaXJlc3RvcmUoYXBwKTtcclxuICAgICAgY29uc3QgdXNlckRvY1JlZiA9IGRvYyhkYiwgcm9sZSwgaWQpO1xyXG4gICAgICBjb25zdCB1c2VyRG9jID0gYXdhaXQgZ2V0RG9jKHVzZXJEb2NSZWYpO1xyXG5cclxuICAgICAgaWYgKHVzZXJEb2MuZXhpc3RzKCkpIHtcclxuICAgICAgICBsZXQgZGF0YSA9IHVzZXJEb2MuZGF0YSgpO1xyXG4gICAgICAgIHJldHVybiB7IG5hbWU6IGRhdGEuZGlzcGxheU5hbWUsIHJvbGU6IHJvbGUgfTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4ge307XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGZldGNoTWVzc2FnZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGlmICh1c2VySWQpIHtcclxuICAgICAgICBjb25zdCBtZXNzYWdlc0NvbGxlY3Rpb24gPSBjb2xsZWN0aW9uKGRiLCAnTWVzc2FnZScpO1xyXG4gICAgICAgIGNvbnN0IG1lc3NhZ2VzUXVlcnkgPSBxdWVyeShtZXNzYWdlc0NvbGxlY3Rpb24sIHdoZXJlKCd0b0lkJywgJz09JywgdXNlcklkKSk7XHJcbiAgICAgICAgY29uc3QgcXVlcnlTbmFwc2hvdCA9IGF3YWl0IGdldERvY3MobWVzc2FnZXNRdWVyeSk7XHJcblxyXG4gICAgICAgIGNvbnN0IG1lc3NhZ2VzTGlzdCA9IFtdO1xyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IGRvYyBvZiBxdWVyeVNuYXBzaG90LmRvY3MpIHtcclxuICAgICAgICAgIGNvbnN0IG1lc3NhZ2VEYXRhID0gZG9jLmRhdGEoKTtcclxuICAgICAgICAgIGNvbnN0IHVzZXJEYXRhID0gYXdhaXQgZmV0Y2hVc2VyRGF0YShtZXNzYWdlRGF0YS5mcm9tSWQsIG1lc3NhZ2VEYXRhLmZyb21Sb2xlKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKG1lc3NhZ2VEYXRhKVxyXG4gICAgICAgICAgbWVzc2FnZXNMaXN0LnB1c2goe1xyXG4gICAgICAgICAgICBpZDogZG9jLmlkLFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgLi4ubWVzc2FnZURhdGEsXHJcbiAgICAgICAgICAgICAgZnJvbU5hbWU6IHVzZXJEYXRhLm5hbWUsXHJcbiAgICAgICAgICAgICAgZnJvbVJvbGU6IHVzZXJEYXRhLnJvbGUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldE1lc3NhZ2VzKG1lc3NhZ2VzTGlzdCk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZmV0Y2hJbnN0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zdCBzdHVkZW50Q29sbGVjdGlvbiA9IGNvbGxlY3Rpb24oZGIsICdJbnN0cnVjdG9yJyk7XHJcbiAgICAgIGNvbnN0IHN0dWRlbnRTbmFwc2hvdCA9IGF3YWl0IGdldERvY3Moc3R1ZGVudENvbGxlY3Rpb24pO1xyXG4gICAgICBjb25zdCBzdHVkZW50TGlzdCA9IHN0dWRlbnRTbmFwc2hvdC5kb2NzLm1hcCgoZG9jKSA9PiAoe1xyXG4gICAgICAgIGlkOiBkb2MuaWQsXHJcbiAgICAgICAgYXR0cmlidXRlczogZG9jLmRhdGEoKSxcclxuICAgICAgfSkpO1xyXG4gICAgICBzZXRJbnN0KHN0dWRlbnRMaXN0KTtcclxuICAgIH07XHJcblxyXG5cclxuICAgIGNvbnN0IGZldGNNZXNzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zdCBzdHVkZW50Q29sbGVjdGlvbiA9IGNvbGxlY3Rpb24oZGIsICdNZXNzYWdlJyk7XHJcbiAgICAgIGNvbnN0IHN0dWRlbnRTbmFwc2hvdCA9IGF3YWl0IGdldERvY3Moc3R1ZGVudENvbGxlY3Rpb24pO1xyXG4gICAgICBjb25zdCBzdHVkZW50TGlzdCA9IHN0dWRlbnRTbmFwc2hvdC5kb2NzLm1hcCgoZG9jKSA9PiAoe1xyXG4gICAgICAgIGlkOiBkb2MuaWQsXHJcbiAgICAgICAgYXR0cmlidXRlczogZG9jLmRhdGEoKSxcclxuICAgICAgfSkpO1xyXG4gICAgICBzZXRNZXNhYWdlKHN0dWRlbnRMaXN0KTtcclxuICAgIH07XHJcblxyXG4gICAgZmV0Y2hJbnN0KCk7XHJcbiAgICBmZXRjTWVzcygpXHJcbiAgICBmZXRjaE1lc3NhZ2VzKCk7XHJcbiAgfSwgW3VzZXJJZF0pO1xyXG5cclxuICBsZXQgbXlNZXNzYWdlcyA9IG1lc3NhZ2UuZmlsdGVyKG0gPT4gbS5hdHRyaWJ1dGVzLmZyb21JZCA9PT0gdXNlcklkKVxyXG4gIGNvbnNvbGUubG9nKG1lc3NhZ2UpXHJcbiAgY29uc29sZS5sb2coaW5zdClcclxuICBjb25zb2xlLmxvZyhteU1lc3NhZ2VzKVxyXG4gIGNvbnNvbGUubG9nKHVzZXJJZClcclxuXHJcblxyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxJbnN0TmF2IC8+XHJcbiAgICAgIDxHcmlkIGNvbnRhaW5lcj5cclxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsyfT5cclxuICAgICAgICAgIDxJbnN0U2lkZWJhciAvPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMH0+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIiBndXR0ZXJCb3R0b20gc3R5bGU9e3sgZm9udFNpemU6IFwiMzBweFwiLCBmb250V2VpZ2h0OiBcIjEwMDBcIiwgbWFyZ2luOiBcIjMwcHggMFwiLCBjb2xvcjogXCIjNDU0NTQ1XCIgfX0+XHJcbiAgICAgICAgICAgIE1lc3NhZ2VzXHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICB7bXlNZXNzYWdlcy5sZW5ndGggPiAwID8gKFxyXG4gICAgICAgICAgICBteU1lc3NhZ2VzLm1hcCgobWVzc2FnZSkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPENhcmQga2V5PXttZXNzYWdlLmlkfSBzeD17eyBtYjogMiB9fT5cclxuICAgICAgICAgICAgICAgICAgPENhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCb3ggc3g9e3sgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIj5zZW5kIHRvIDp7bWVzc2FnZS5hdHRyaWJ1dGVzLnRvRmlyc3ROYW1lfSwge21lc3NhZ2UuYXR0cmlidXRlcy50b0xhc3ROYW1lfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIj57bWVzc2FnZS5hdHRyaWJ1dGVzLm1lc3NhZ2V9PC9UeXBvZ3JhcGh5PlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCI+e1wicmVwbGF5IGZyb20gOiBcIiArbWVzc2FnZS5hdHRyaWJ1dGVzLnRvRmlyc3ROYW1lfSwge21lc3NhZ2UuYXR0cmlidXRlcy50b0xhc3ROYW1lfTwvVHlwb2dyYXBoeT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCI+e21lc3NhZ2UuYXR0cmlidXRlcy5yZXBsYXlzfTwvVHlwb2dyYXBoeT5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSlcclxuXHJcblxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCI+Tm8gbWVzc2FnZXMgZm91bmQuPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lc3NhZ2VzO1xyXG5cclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiY29sbGVjdGlvbiIsInF1ZXJ5Iiwid2hlcmUiLCJvblNuYXBzaG90IiwiZ2V0RG9jcyIsImF1dGgiLCJkYiIsIkNhcmQiLCJDYXJkQ29udGVudCIsIkdyaWQiLCJUeXBvZ3JhcGh5IiwiQm94IiwiSW5zdFNpZGViYXIiLCJJbnN0TmF2IiwiZ2V0RmlyZXN0b3JlIiwiZG9jIiwiZ2V0RG9jIiwiYXBwIiwiTWVzc2FnZXMiLCJ1c2VySWQiLCJtZXNzYWdlcyIsInNldE1lc3NhZ2VzIiwiaW5zdCIsInNldEluc3QiLCJtZXNzYWdlIiwic2V0TWVzYWFnZSIsImN1cnJlbnRVc2VyIiwidWlkIiwiZmV0Y2hVc2VyRGF0YSIsImlkIiwicm9sZSIsImNvbnNvbGUiLCJlcnJvciIsInVzZXJEb2NSZWYiLCJ1c2VyRG9jIiwiZXhpc3RzIiwiZGF0YSIsIm5hbWUiLCJkaXNwbGF5TmFtZSIsImZldGNoTWVzc2FnZXMiLCJtZXNzYWdlc0NvbGxlY3Rpb24iLCJtZXNzYWdlc1F1ZXJ5IiwicXVlcnlTbmFwc2hvdCIsIm1lc3NhZ2VzTGlzdCIsImRvY3MiLCJtZXNzYWdlRGF0YSIsInVzZXJEYXRhIiwiZnJvbUlkIiwiZnJvbVJvbGUiLCJsb2ciLCJwdXNoIiwiZnJvbU5hbWUiLCJmZXRjaEluc3QiLCJzdHVkZW50Q29sbGVjdGlvbiIsInN0dWRlbnRTbmFwc2hvdCIsInN0dWRlbnRMaXN0IiwibWFwIiwiYXR0cmlidXRlcyIsImZldGNNZXNzIiwibXlNZXNzYWdlcyIsImZpbHRlciIsIm0iLCJkaXYiLCJjb250YWluZXIiLCJpdGVtIiwieHMiLCJ2YXJpYW50IiwiZ3V0dGVyQm90dG9tIiwic3R5bGUiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJtYXJnaW4iLCJjb2xvciIsImxlbmd0aCIsInN4IiwibWIiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwidG9GaXJzdE5hbWUiLCJ0b0xhc3ROYW1lIiwicmVwbGF5cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/Instructor/Messages.js\n"));

/***/ })

});