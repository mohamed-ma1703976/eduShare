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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Firebase/Firebase */ \"./Firebase/Firebase.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/esm/index.js\");\n/* harmony import */ var _component_Instructors_InstSidebarr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../component/Instructors/InstSidebarr */ \"./component/Instructors/InstSidebarr.js\");\n/* harmony import */ var _component_Instructors_InstNav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../component/Instructors/InstNav */ \"./component/Instructors/InstNav.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Messages(param) {\n    let { userId  } = param;\n    _s();\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    userId = _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_3__.auth.currentUser.uid;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchUserData = async (id, role)=>{\n            if (!id || !role) {\n                console.error(\"Invalid user ID or role\");\n                return {};\n            }\n            const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_3__.app);\n            const userDocRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)(db, role, id);\n            const userDoc = await getDoc(userDocRef);\n            if (userDoc.exists()) {\n                let data = userDoc.data();\n                return {\n                    name: data.displayName,\n                    role: role\n                };\n            }\n            return {};\n        };\n        if (userId) {\n            const messagesCollection = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.collection)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_3__.db, \"Message\");\n            const messagesQuery = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.query)(messagesCollection, (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.where)(\"toId\", \"==\", userId));\n            const unsubscribe = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.onSnapshot)(messagesQuery, async (querySnapshot)=>{\n                const messagesList = await Promise.all(querySnapshot.docs.map(async (doc)=>{\n                    const messageData = doc.data();\n                    const userData = await fetchUserData(messageData.fromId, messageData.fromRole);\n                    return {\n                        id: doc.id,\n                        data: {\n                            ...messageData,\n                            fromName: userData.name,\n                            fromRole: userData.role\n                        }\n                    };\n                }));\n                setMessages(messagesList);\n            });\n            return ()=>unsubscribe();\n        }\n    }, [\n        userId\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_Instructors_InstNav__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/mohamedhossam/Documents/GitHub/eduShare/pages/Instructor/Messages.js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Grid, {\n                container: true,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Grid, {\n                        item: true,\n                        xs: 2,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_Instructors_InstSidebarr__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/mohamedhossam/Documents/GitHub/eduShare/pages/Instructor/Messages.js\",\n                            lineNumber: 59,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/mohamedhossam/Documents/GitHub/eduShare/pages/Instructor/Messages.js\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Grid, {\n                        item: true,\n                        xs: 10,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Typography, {\n                                variant: \"h5\",\n                                gutterBottom: true,\n                                style: {\n                                    fontSize: \"30px\",\n                                    fontWeight: \"1000\",\n                                    margin: \"30px 0\",\n                                    color: \"#454545\"\n                                },\n                                children: \"Messages\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mohamedhossam/Documents/GitHub/eduShare/pages/Instructor/Messages.js\",\n                                lineNumber: 62,\n                                columnNumber: 11\n                            }, this),\n                            messages.length > 0 ? messages.map((message)=>{\n                                const senderName = message.data.fromName;\n                                const senderRole = message.data.fromRole;\n                                const messageText = message.data.message;\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Card, {\n                                    sx: {\n                                        mb: 2\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.CardContent, {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                                                sx: {\n                                                    display: \"flex\",\n                                                    justifyContent: \"space-between\",\n                                                    alignItems: \"center\"\n                                                },\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Typography, {\n                                                        variant: \"subtitle1\",\n                                                        children: senderName\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/mohamedhossam/Documents/GitHub/eduShare/pages/Instructor/Messages.js\",\n                                                        lineNumber: 75,\n                                                        columnNumber: 23\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Typography, {\n                                                        variant: \"subtitle2\",\n                                                        children: senderRole\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/mohamedhossam/Documents/GitHub/eduShare/pages/Instructor/Messages.js\",\n                                                        lineNumber: 76,\n                                                        columnNumber: 23\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/mohamedhossam/Documents/GitHub/eduShare/pages/Instructor/Messages.js\",\n                                                lineNumber: 74,\n                                                columnNumber: 21\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Typography, {\n                                                variant: \"body1\",\n                                                children: messageText\n                                            }, void 0, false, {\n                                                fileName: \"/Users/mohamedhossam/Documents/GitHub/eduShare/pages/Instructor/Messages.js\",\n                                                lineNumber: 78,\n                                                columnNumber: 21\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/mohamedhossam/Documents/GitHub/eduShare/pages/Instructor/Messages.js\",\n                                        lineNumber: 73,\n                                        columnNumber: 19\n                                    }, this)\n                                }, message.id, false, {\n                                    fileName: \"/Users/mohamedhossam/Documents/GitHub/eduShare/pages/Instructor/Messages.js\",\n                                    lineNumber: 72,\n                                    columnNumber: 17\n                                }, this);\n                            }) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Typography, {\n                                variant: \"body1\",\n                                children: \"No messages found.\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mohamedhossam/Documents/GitHub/eduShare/pages/Instructor/Messages.js\",\n                                lineNumber: 84,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mohamedhossam/Documents/GitHub/eduShare/pages/Instructor/Messages.js\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mohamedhossam/Documents/GitHub/eduShare/pages/Instructor/Messages.js\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mohamedhossam/Documents/GitHub/eduShare/pages/Instructor/Messages.js\",\n        lineNumber: 55,\n        columnNumber: 5\n    }, this);\n}\n_s(Messages, \"RyA59LRbn9goj/9N7rELX+NWNVI=\");\n_c = Messages;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Messages);\nvar _c;\n$RefreshReg$(_c, \"Messages\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVdBOzswREFDViw4REFBQ0csOENBQUdBO2dEQUFDbUQsSUFBSTtvREFBRUUsU0FBUztvREFBUUMsZ0JBQWdCO29EQUFpQkMsWUFBWTtnREFBUzs7a0VBQ2hGLDhEQUFDeEQscURBQVVBO3dEQUFDd0MsU0FBUTtrRUFBYVM7Ozs7OztrRUFDakMsOERBQUNqRCxxREFBVUE7d0RBQUN3QyxTQUFRO2tFQUFhVTs7Ozs7Ozs7Ozs7OzBEQUVuQyw4REFBQ2xELHFEQUFVQTtnREFBQ3dDLFNBQVE7MERBQVNXOzs7Ozs7Ozs7Ozs7bUNBTnRCSCxRQUFRckMsRUFBRTs7Ozs7NEJBVXpCLG1CQUVBLDhEQUFDWCxxREFBVUE7Z0NBQUN3QyxTQUFROzBDQUFROzs7OztvQ0FDN0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLWDtHQW5GU3BDO0tBQUFBO0FBcUZULCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL0luc3RydWN0b3IvTWVzc2FnZXMuanM/ZWEwNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29sbGVjdGlvbiwgcXVlcnksIHdoZXJlLCBvblNuYXBzaG90ICwgZ2V0RG9jcyAsZ2V0RmlyZXN0b3JlICwgZG9jfSBmcm9tICdmaXJlYmFzZS9maXJlc3RvcmUnO1xuaW1wb3J0IHsgYXV0aCwgZGIgLCBhcHB9IGZyb20gJy4uLy4uL0ZpcmViYXNlL0ZpcmViYXNlJztcbmltcG9ydCB7IENhcmQsIENhcmRDb250ZW50LCBHcmlkLCBUeXBvZ3JhcGh5LCBCb3ggfSBmcm9tICdAbXVpL21hdGVyaWFsJztcbmltcG9ydCBJbnN0U2lkZWJhciBmcm9tICcuLi8uLi9jb21wb25lbnQvSW5zdHJ1Y3RvcnMvSW5zdFNpZGViYXJyJztcbmltcG9ydCBJbnN0TmF2IGZyb20gJy4uLy4uL2NvbXBvbmVudC9JbnN0cnVjdG9ycy9JbnN0TmF2JztcbmZ1bmN0aW9uIE1lc3NhZ2VzKHsgdXNlcklkIH0pIHtcbiAgY29uc3QgW21lc3NhZ2VzLCBzZXRNZXNzYWdlc10gPSB1c2VTdGF0ZShbXSk7XG4gIHVzZXJJZCA9IGF1dGguY3VycmVudFVzZXIudWlkO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hVc2VyRGF0YSA9IGFzeW5jIChpZCwgcm9sZSkgPT4ge1xuICAgICAgICBpZiAoIWlkIHx8ICFyb2xlKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignSW52YWxpZCB1c2VyIElEIG9yIHJvbGUnKTtcbiAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgIH1cbiAgICAgIFxuICAgICAgICBjb25zdCBkYiA9IGdldEZpcmVzdG9yZShhcHApO1xuICAgICAgICBjb25zdCB1c2VyRG9jUmVmID0gZG9jKGRiLCByb2xlLCBpZCk7XG4gICAgICAgIGNvbnN0IHVzZXJEb2MgPSBhd2FpdCBnZXREb2ModXNlckRvY1JlZik7XG4gICAgICBcbiAgICAgICAgaWYgKHVzZXJEb2MuZXhpc3RzKCkpIHtcbiAgICAgICAgICBsZXQgZGF0YSA9IHVzZXJEb2MuZGF0YSgpO1xuICAgICAgICAgIHJldHVybiB7IG5hbWU6IGRhdGEuZGlzcGxheU5hbWUsIHJvbGU6IHJvbGUgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge307XG4gICAgICB9O1xuICAgICAgXG4gIFxuICAgIGlmICh1c2VySWQpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2VzQ29sbGVjdGlvbiA9IGNvbGxlY3Rpb24oZGIsICdNZXNzYWdlJyk7XG4gICAgICBjb25zdCBtZXNzYWdlc1F1ZXJ5ID0gcXVlcnkobWVzc2FnZXNDb2xsZWN0aW9uLCB3aGVyZSgndG9JZCcsICc9PScsIHVzZXJJZCkpO1xuICAgICAgY29uc3QgdW5zdWJzY3JpYmUgPSBvblNuYXBzaG90KG1lc3NhZ2VzUXVlcnksIGFzeW5jIChxdWVyeVNuYXBzaG90KSA9PiB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2VzTGlzdCA9IGF3YWl0IFByb21pc2UuYWxsKHF1ZXJ5U25hcHNob3QuZG9jcy5tYXAoYXN5bmMgKGRvYykgPT4ge1xuICAgICAgICAgIGNvbnN0IG1lc3NhZ2VEYXRhID0gZG9jLmRhdGEoKTtcbiAgICAgICAgICBjb25zdCB1c2VyRGF0YSA9IGF3YWl0IGZldGNoVXNlckRhdGEobWVzc2FnZURhdGEuZnJvbUlkLCBtZXNzYWdlRGF0YS5mcm9tUm9sZSk7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlkOiBkb2MuaWQsXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgIC4uLm1lc3NhZ2VEYXRhLFxuICAgICAgICAgICAgICBmcm9tTmFtZTogdXNlckRhdGEubmFtZSxcbiAgICAgICAgICAgICAgZnJvbVJvbGU6IHVzZXJEYXRhLnJvbGUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH07XG4gICAgICAgIH0pKTtcbiAgICAgICAgc2V0TWVzc2FnZXMobWVzc2FnZXNMaXN0KTtcbiAgICAgIH0pO1xuICBcbiAgICAgIHJldHVybiAoKSA9PiB1bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfSwgW3VzZXJJZF0pO1xuICBcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SW5zdE5hdiAvPlxuICAgICAgPEdyaWQgY29udGFpbmVyPlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsyfT5cbiAgICAgICAgICA8SW5zdFNpZGViYXIgLz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMH0+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCIgZ3V0dGVyQm90dG9tIHN0eWxlPXt7IGZvbnRTaXplOiBcIjMwcHhcIiwgZm9udFdlaWdodDogXCIxMDAwXCIsIG1hcmdpbjogXCIzMHB4IDBcIiwgY29sb3I6IFwiIzQ1NDU0NVwiIH19PlxuICAgICAgICAgICAgTWVzc2FnZXNcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAge21lc3NhZ2VzLmxlbmd0aCA+IDAgPyAoXG4gICAgICAgICAgICBtZXNzYWdlcy5tYXAoKG1lc3NhZ2UpID0+IHtcbiAgICAgICAgICAgICAgY29uc3Qgc2VuZGVyTmFtZSA9IG1lc3NhZ2UuZGF0YS5mcm9tTmFtZTtcbiAgICAgICAgICAgICAgY29uc3Qgc2VuZGVyUm9sZSA9IG1lc3NhZ2UuZGF0YS5mcm9tUm9sZTtcbiAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZVRleHQgPSBtZXNzYWdlLmRhdGEubWVzc2FnZTtcblxuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxDYXJkIGtleT17bWVzc2FnZS5pZH0gc3g9e3sgbWI6IDIgfX0+XG4gICAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgIDxCb3ggc3g9e3sgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUxXCI+e3NlbmRlck5hbWV9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTJcIj57c2VuZGVyUm9sZX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIj57bWVzc2FnZVRleHR9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIj5ObyBtZXNzYWdlcyBmb3VuZC48L1R5cG9ncmFwaHk+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9HcmlkPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNZXNzYWdlcztcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImNvbGxlY3Rpb24iLCJxdWVyeSIsIndoZXJlIiwib25TbmFwc2hvdCIsImdldERvY3MiLCJnZXRGaXJlc3RvcmUiLCJkb2MiLCJhdXRoIiwiZGIiLCJhcHAiLCJDYXJkIiwiQ2FyZENvbnRlbnQiLCJHcmlkIiwiVHlwb2dyYXBoeSIsIkJveCIsIkluc3RTaWRlYmFyIiwiSW5zdE5hdiIsIk1lc3NhZ2VzIiwidXNlcklkIiwibWVzc2FnZXMiLCJzZXRNZXNzYWdlcyIsImN1cnJlbnRVc2VyIiwidWlkIiwiZmV0Y2hVc2VyRGF0YSIsImlkIiwicm9sZSIsImNvbnNvbGUiLCJlcnJvciIsInVzZXJEb2NSZWYiLCJ1c2VyRG9jIiwiZ2V0RG9jIiwiZXhpc3RzIiwiZGF0YSIsIm5hbWUiLCJkaXNwbGF5TmFtZSIsIm1lc3NhZ2VzQ29sbGVjdGlvbiIsIm1lc3NhZ2VzUXVlcnkiLCJ1bnN1YnNjcmliZSIsInF1ZXJ5U25hcHNob3QiLCJtZXNzYWdlc0xpc3QiLCJQcm9taXNlIiwiYWxsIiwiZG9jcyIsIm1hcCIsIm1lc3NhZ2VEYXRhIiwidXNlckRhdGEiLCJmcm9tSWQiLCJmcm9tUm9sZSIsImZyb21OYW1lIiwiZGl2IiwiY29udGFpbmVyIiwiaXRlbSIsInhzIiwidmFyaWFudCIsImd1dHRlckJvdHRvbSIsInN0eWxlIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwibWFyZ2luIiwiY29sb3IiLCJsZW5ndGgiLCJtZXNzYWdlIiwic2VuZGVyTmFtZSIsInNlbmRlclJvbGUiLCJtZXNzYWdlVGV4dCIsInN4IiwibWIiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/Instructor/Messages.js\n"));

/***/ })

});