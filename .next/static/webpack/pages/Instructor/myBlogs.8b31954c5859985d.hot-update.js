"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/Instructor/myBlogs",{

/***/ "./pages/Instructor/myBlogs.js":
/*!*************************************!*\
  !*** ./pages/Instructor/myBlogs.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/esm/index.js\");\n/* harmony import */ var _mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/icons-material/Edit */ \"./node_modules/@mui/icons-material/Edit.js\");\n/* harmony import */ var _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/icons-material/Delete */ \"./node_modules/@mui/icons-material/Delete.js\");\n/* harmony import */ var _hooks_AuthProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/AuthProvider */ \"./hooks/AuthProvider.js\");\n/* harmony import */ var _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Firebase/Firebase */ \"./Firebase/Firebase.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var _component_Instructors_InstSidebarr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../component/Instructors/InstSidebarr */ \"./component/Instructors/InstSidebarr.js\");\n/* harmony import */ var _component_Instructors_InstNav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../component/Instructors/InstNav */ \"./component/Instructors/InstNav.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n // Add this import\n\n\n\nfunction MyBlogs() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [blogs, setBlogs] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_5__.getAuth)(app);\n    const userId = auth.currentUser.uid;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!userId) return;\n        const db = getFirestore(app);\n        const blogsRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.collection)(db, \"Blog\");\n        const q = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.query)(blogsRef, (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.where)(\"AuthorId\", \"==\", userId));\n        const unsubscribe = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.onSnapshot)(q, (querySnapshot)=>{\n            const blogsData = [];\n            querySnapshot.forEach((doc)=>{\n                blogsData.push({\n                    id: doc.id,\n                    ...doc.data()\n                });\n            });\n            setBlogs(blogsData);\n            setLoading(false);\n        });\n        return ()=>{\n            unsubscribe();\n        };\n    }, [\n        userId\n    ]);\n    const handleCreateBlog = ()=>{\n        router.push(\"/Instructor/createBlog\");\n    };\n    const handleUpdateBlog = (id)=>{\n    // Logic for updating the blog\n    };\n    const handleDeleteBlog = async (id)=>{\n        try {\n            const blogRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.doc)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_4__.db, \"Blog\", id);\n            await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.deleteDoc)(blogRef);\n            console.log(\"Blog deleted:\", id);\n        } catch (error) {\n            console.error(\"Error deleting blog:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Box, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_Instructors_InstNav__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\moham\\\\Documents\\\\GitHub\\\\eduShare\\\\pages\\\\Instructor\\\\myBlogs.js\",\n                    lineNumber: 74,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Stack, {\n                    direction: \"row\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_Instructors_InstSidebarr__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\moham\\\\Documents\\\\GitHub\\\\eduShare\\\\pages\\\\Instructor\\\\myBlogs.js\",\n                            lineNumber: 77,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Box, {\n                            flexGrow: 1,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Box, {\n                                    display: \"flex\",\n                                    justifyContent: \"center\",\n                                    mb: 3,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Button, {\n                                        variant: \"contained\",\n                                        sx: {\n                                            backgroundColor: \"#1abc9c\",\n                                            marginRight: \"16px\"\n                                        },\n                                        onClick: handleCreateBlog,\n                                        children: \"Add New Blog\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\moham\\\\Documents\\\\GitHub\\\\eduShare\\\\pages\\\\Instructor\\\\myBlogs.js\",\n                                        lineNumber: 81,\n                                        columnNumber: 13\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\moham\\\\Documents\\\\GitHub\\\\eduShare\\\\pages\\\\Instructor\\\\myBlogs.js\",\n                                    lineNumber: 80,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Grid, {\n                                    container: true,\n                                    spacing: 3,\n                                    children: blogs.map((blog)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Grid, {\n                                            item: true,\n                                            xs: 12,\n                                            sm: 6,\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Card, {\n                                                sx: {\n                                                    width: \"80%\",\n                                                    margin: \"0 auto\"\n                                                },\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.CardMedia, {\n                                                        component: \"img\",\n                                                        height: \"140\",\n                                                        image: blog.img,\n                                                        alt: blog.Title\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\moham\\\\Documents\\\\GitHub\\\\eduShare\\\\pages\\\\Instructor\\\\myBlogs.js\",\n                                                        lineNumber: 93,\n                                                        columnNumber: 21\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.CardContent, {\n                                                        children: [\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Typography, {\n                                                                variant: \"h5\",\n                                                                component: \"div\",\n                                                                children: blog.Title\n                                                            }, void 0, false, {\n                                                                fileName: \"C:\\\\Users\\\\moham\\\\Documents\\\\GitHub\\\\eduShare\\\\pages\\\\Instructor\\\\myBlogs.js\",\n                                                                lineNumber: 100,\n                                                                columnNumber: 23\n                                                            }, this),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Typography, {\n                                                                variant: \"body2\",\n                                                                color: \"text.secondary\",\n                                                                children: [\n                                                                    blog.Body.slice(0, 100),\n                                                                    \"...\"\n                                                                ]\n                                                            }, void 0, true, {\n                                                                fileName: \"C:\\\\Users\\\\moham\\\\Documents\\\\GitHub\\\\eduShare\\\\pages\\\\Instructor\\\\myBlogs.js\",\n                                                                lineNumber: 103,\n                                                                columnNumber: 23\n                                                            }, this)\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"C:\\\\Users\\\\moham\\\\Documents\\\\GitHub\\\\eduShare\\\\pages\\\\Instructor\\\\myBlogs.js\",\n                                                        lineNumber: 99,\n                                                        columnNumber: 21\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.CardActions, {\n                                                        children: [\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.IconButton, {\n                                                                \"aria-label\": \"update\",\n                                                                onClick: ()=>handleUpdateBlog(blog.id),\n                                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, {\n                                                                    fileName: \"C:\\\\Users\\\\moham\\\\Documents\\\\GitHub\\\\eduShare\\\\pages\\\\Instructor\\\\myBlogs.js\",\n                                                                    lineNumber: 112,\n                                                                    columnNumber: 25\n                                                                }, this)\n                                                            }, void 0, false, {\n                                                                fileName: \"C:\\\\Users\\\\moham\\\\Documents\\\\GitHub\\\\eduShare\\\\pages\\\\Instructor\\\\myBlogs.js\",\n                                                                lineNumber: 108,\n                                                                columnNumber: 23\n                                                            }, this),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.IconButton, {\n                                                                \"aria-label\": \"delete\",\n                                                                onClick: ()=>handleDeleteBlog(blog.id),\n                                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {}, void 0, false, {\n                                                                    fileName: \"C:\\\\Users\\\\moham\\\\Documents\\\\GitHub\\\\eduShare\\\\pages\\\\Instructor\\\\myBlogs.js\",\n                                                                    lineNumber: 118,\n                                                                    columnNumber: 25\n                                                                }, this)\n                                                            }, void 0, false, {\n                                                                fileName: \"C:\\\\Users\\\\moham\\\\Documents\\\\GitHub\\\\eduShare\\\\pages\\\\Instructor\\\\myBlogs.js\",\n                                                                lineNumber: 114,\n                                                                columnNumber: 23\n                                                            }, this)\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"C:\\\\Users\\\\moham\\\\Documents\\\\GitHub\\\\eduShare\\\\pages\\\\Instructor\\\\myBlogs.js\",\n                                                        lineNumber: 107,\n                                                        columnNumber: 21\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\moham\\\\Documents\\\\GitHub\\\\eduShare\\\\pages\\\\Instructor\\\\myBlogs.js\",\n                                                lineNumber: 92,\n                                                columnNumber: 20\n                                            }, this)\n                                        }, blog.id, false, {\n                                            fileName: \"C:\\\\Users\\\\moham\\\\Documents\\\\GitHub\\\\eduShare\\\\pages\\\\Instructor\\\\myBlogs.js\",\n                                            lineNumber: 91,\n                                            columnNumber: 17\n                                        }, this))\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\moham\\\\Documents\\\\GitHub\\\\eduShare\\\\pages\\\\Instructor\\\\myBlogs.js\",\n                                    lineNumber: 89,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\moham\\\\Documents\\\\GitHub\\\\eduShare\\\\pages\\\\Instructor\\\\myBlogs.js\",\n                            lineNumber: 79,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\moham\\\\Documents\\\\GitHub\\\\eduShare\\\\pages\\\\Instructor\\\\myBlogs.js\",\n                    lineNumber: 76,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\moham\\\\Documents\\\\GitHub\\\\eduShare\\\\pages\\\\Instructor\\\\myBlogs.js\",\n            lineNumber: 73,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\moham\\\\Documents\\\\GitHub\\\\eduShare\\\\pages\\\\Instructor\\\\myBlogs.js\",\n        lineNumber: 72,\n        columnNumber: 5\n    }, this);\n}\n_s(MyBlogs, \"pLUf30ul3g2rHVV9kLNV+/Mn+wQ=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = MyBlogs;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyBlogs);\nvar _c;\n$RefreshReg$(_c, \"MyBlogs\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFXQTs7MEVBQ1YsOERBQUNFLHFEQUFVQTtnRUFBQ21ELFNBQVE7Z0VBQUtjLFdBQVU7MEVBQ2hDTixLQUFLVyxLQUFLOzs7Ozs7MEVBRWIsOERBQUN0RSxxREFBVUE7Z0VBQUNtRCxTQUFRO2dFQUFRb0IsT0FBTTs7b0VBQy9CWixLQUFLYSxJQUFJLENBQUNDLEtBQUssQ0FBQyxHQUFHO29FQUFLOzs7Ozs7Ozs7Ozs7O2tFQUc3Qiw4REFBQ3hFLHNEQUFXQTs7MEVBQ1YsOERBQUNDLHFEQUFVQTtnRUFDVHdFLGNBQVc7Z0VBQ1huQixTQUFTLElBQU1oQixpQkFBaUJvQixLQUFLdkIsRUFBRTswRUFFdkMsNEVBQUNoQyxpRUFBUUE7Ozs7Ozs7Ozs7MEVBRVgsOERBQUNGLHFEQUFVQTtnRUFDVHdFLGNBQVc7Z0VBQ1huQixTQUFTLElBQU1mLGlCQUFpQm1CLEtBQUt2QixFQUFFOzBFQUV2Qyw0RUFBQy9CLG1FQUFVQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsyQ0EzQllzRCxLQUFLdkIsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUN0RDtHQTFHU25COztRQUNVeEIsa0RBQVNBOzs7S0FEbkJ3QjtBQTRHVCwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9JbnN0cnVjdG9yL215QmxvZ3MuanM/YzU3MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQge1xyXG4gIEJveCxcclxuICBHcmlkLFxyXG4gIEJ1dHRvbixcclxuICBDYXJkLFxyXG4gIENhcmRDb250ZW50LFxyXG4gIENhcmRNZWRpYSxcclxuICBUeXBvZ3JhcGh5LFxyXG4gIENhcmRBY3Rpb25zLFxyXG4gIEljb25CdXR0b24sXHJcbiAgU3RhY2ssXHJcbn0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XHJcbmltcG9ydCBFZGl0SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0VkaXQnO1xyXG5pbXBvcnQgRGVsZXRlSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0RlbGV0ZSc7XHJcbmltcG9ydCB7IEF1dGhDb250ZXh0IH0gZnJvbSAnLi4vLi4vaG9va3MvQXV0aFByb3ZpZGVyJztcclxuaW1wb3J0IHsgZGIgfSBmcm9tICcuLi8uLi9GaXJlYmFzZS9GaXJlYmFzZSc7XHJcbmltcG9ydCB7IGdldEF1dGggfSBmcm9tICdmaXJlYmFzZS9hdXRoJzsgLy8gQWRkIHRoaXMgaW1wb3J0XHJcbmltcG9ydCB7IGNvbGxlY3Rpb24sIHF1ZXJ5LCB3aGVyZSwgb25TbmFwc2hvdCwgZG9jLCBkZWxldGVEb2MgfSBmcm9tICdmaXJlYmFzZS9maXJlc3RvcmUnO1xyXG5pbXBvcnQgSW5zdFNpZGViYXIgZnJvbSAnLi4vLi4vY29tcG9uZW50L0luc3RydWN0b3JzL0luc3RTaWRlYmFycic7XHJcbmltcG9ydCBJbnN0TmF2IGZyb20gJy4uLy4uL2NvbXBvbmVudC9JbnN0cnVjdG9ycy9JbnN0TmF2JztcclxuXHJcbmZ1bmN0aW9uIE15QmxvZ3MoKSB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IFtibG9ncywgc2V0QmxvZ3NdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCBhdXRoID0gZ2V0QXV0aChhcHApO1xyXG4gICAgY29uc3QgdXNlcklkID0gYXV0aC5jdXJyZW50VXNlci51aWQ7XHJcbiAgICBcclxuICBcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGlmICghdXNlcklkKSByZXR1cm47XHJcbiAgXHJcbiAgICAgIGNvbnN0IGRiID0gZ2V0RmlyZXN0b3JlKGFwcCk7XHJcbiAgICAgIGNvbnN0IGJsb2dzUmVmID0gY29sbGVjdGlvbihkYiwgJ0Jsb2cnKTtcclxuICAgICAgY29uc3QgcSA9IHF1ZXJ5KGJsb2dzUmVmLCB3aGVyZSgnQXV0aG9ySWQnLCAnPT0nLCB1c2VySWQpKTtcclxuICAgICAgY29uc3QgdW5zdWJzY3JpYmUgPSBvblNuYXBzaG90KHEsIChxdWVyeVNuYXBzaG90KSA9PiB7XHJcbiAgICAgICAgY29uc3QgYmxvZ3NEYXRhID0gW107XHJcbiAgICAgICAgcXVlcnlTbmFwc2hvdC5mb3JFYWNoKChkb2MpID0+IHtcclxuICAgICAgICAgIGJsb2dzRGF0YS5wdXNoKHsgaWQ6IGRvYy5pZCwgLi4uZG9jLmRhdGEoKSB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBzZXRCbG9ncyhibG9nc0RhdGEpO1xyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICB9KTtcclxuICBcclxuICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICB1bnN1YnNjcmliZSgpO1xyXG4gICAgICB9O1xyXG4gICAgfSwgW3VzZXJJZF0pO1xyXG4gIFxyXG5cclxuICBjb25zdCBoYW5kbGVDcmVhdGVCbG9nID0gKCkgPT4ge1xyXG4gICAgcm91dGVyLnB1c2goJy9JbnN0cnVjdG9yL2NyZWF0ZUJsb2cnKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVVcGRhdGVCbG9nID0gKGlkKSA9PiB7XHJcbiAgICAvLyBMb2dpYyBmb3IgdXBkYXRpbmcgdGhlIGJsb2dcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVEZWxldGVCbG9nID0gYXN5bmMgKGlkKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBibG9nUmVmID0gZG9jKGRiLCAnQmxvZycsIGlkKTtcclxuICAgICAgYXdhaXQgZGVsZXRlRG9jKGJsb2dSZWYpO1xyXG4gICAgICBjb25zb2xlLmxvZygnQmxvZyBkZWxldGVkOicsIGlkKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIGJsb2c6JywgZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8Qm94PlxyXG4gICAgICAgIDxJbnN0TmF2IC8+XHJcblxyXG4gICAgICAgIDxTdGFjayBkaXJlY3Rpb249XCJyb3dcIj5cclxuICAgICAgICAgIDxJbnN0U2lkZWJhciAvPlxyXG5cclxuICAgICAgICAgIDxCb3ggZmxleEdyb3c9ezF9PlxyXG4gICAgICAgICAgICA8Qm94IGRpc3BsYXk9XCJmbGV4XCIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIiBtYj17M30+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgc3g9e3sgYmFja2dyb3VuZENvbG9yOiAnIzFhYmM5YycsIG1hcmdpblJpZ2h0OiAnMTZweCcgfX1cclxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNyZWF0ZUJsb2d9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgQWRkIE5ldyBCbG9nXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17M30+XHJcbiAgICAgICAgICAgICAge2Jsb2dzLm1hcCgoYmxvZykgPT4gKFxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fSBrZXk9e2Jsb2cuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgPENhcmQgc3g9e3sgd2lkdGg6ICc4MCUnLCBtYXJnaW46ICcwIGF1dG8nIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkTWVkaWFcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImltZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxNDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgaW1hZ2U9e2Jsb2cuaW1nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PXtibG9nLlRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCIgY29tcG9uZW50PVwiZGl2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtibG9nLlRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7YmxvZy5Cb2R5LnNsaWNlKDAsIDEwMCl9Li4uXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZEFjdGlvbnM+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwidXBkYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlVXBkYXRlQmxvZyhibG9nLmlkKX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEVkaXRJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiZGVsZXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlRGVsZXRlQmxvZyhibG9nLmlkKX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPERlbGV0ZUljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0NhcmRBY3Rpb25zPlxyXG4gICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvU3RhY2s+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlCbG9ncztcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VDb250ZXh0IiwidXNlUm91dGVyIiwiQm94IiwiR3JpZCIsIkJ1dHRvbiIsIkNhcmQiLCJDYXJkQ29udGVudCIsIkNhcmRNZWRpYSIsIlR5cG9ncmFwaHkiLCJDYXJkQWN0aW9ucyIsIkljb25CdXR0b24iLCJTdGFjayIsIkVkaXRJY29uIiwiRGVsZXRlSWNvbiIsIkF1dGhDb250ZXh0IiwiZGIiLCJnZXRBdXRoIiwiY29sbGVjdGlvbiIsInF1ZXJ5Iiwid2hlcmUiLCJvblNuYXBzaG90IiwiZG9jIiwiZGVsZXRlRG9jIiwiSW5zdFNpZGViYXIiLCJJbnN0TmF2IiwiTXlCbG9ncyIsInJvdXRlciIsImJsb2dzIiwic2V0QmxvZ3MiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImF1dGgiLCJhcHAiLCJ1c2VySWQiLCJjdXJyZW50VXNlciIsInVpZCIsImdldEZpcmVzdG9yZSIsImJsb2dzUmVmIiwicSIsInVuc3Vic2NyaWJlIiwicXVlcnlTbmFwc2hvdCIsImJsb2dzRGF0YSIsImZvckVhY2giLCJwdXNoIiwiaWQiLCJkYXRhIiwiaGFuZGxlQ3JlYXRlQmxvZyIsImhhbmRsZVVwZGF0ZUJsb2ciLCJoYW5kbGVEZWxldGVCbG9nIiwiYmxvZ1JlZiIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImRpdiIsImRpcmVjdGlvbiIsImZsZXhHcm93IiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwibWIiLCJ2YXJpYW50Iiwic3giLCJiYWNrZ3JvdW5kQ29sb3IiLCJtYXJnaW5SaWdodCIsIm9uQ2xpY2siLCJjb250YWluZXIiLCJzcGFjaW5nIiwibWFwIiwiYmxvZyIsIml0ZW0iLCJ4cyIsInNtIiwid2lkdGgiLCJtYXJnaW4iLCJjb21wb25lbnQiLCJoZWlnaHQiLCJpbWFnZSIsImltZyIsImFsdCIsIlRpdGxlIiwiY29sb3IiLCJCb2R5Iiwic2xpY2UiLCJhcmlhLWxhYmVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/Instructor/myBlogs.js\n"));

/***/ })

});