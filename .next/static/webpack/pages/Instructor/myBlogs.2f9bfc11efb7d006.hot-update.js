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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/esm/index.js\");\n/* harmony import */ var _mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/icons-material/Edit */ \"./node_modules/@mui/icons-material/Edit.js\");\n/* harmony import */ var _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/icons-material/Delete */ \"./node_modules/@mui/icons-material/Delete.js\");\n/* harmony import */ var _hooks_AuthProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/AuthProvider */ \"./hooks/AuthProvider.js\");\n/* harmony import */ var _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Firebase/Firebase */ \"./Firebase/Firebase.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var _component_Instructors_InstSidebarr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../component/Instructors/InstSidebarr */ \"./component/Instructors/InstSidebarr.js\");\n/* harmony import */ var _component_Instructors_InstNav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../component/Instructors/InstNav */ \"./component/Instructors/InstNav.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nfunction MyBlogs() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [blogs, setBlogs] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_5__.getAuth)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_4__.app);\n    const userId = auth.currentUser.uid;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!userId) return;\n        const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.getFirestore)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_4__.app);\n        const blogsRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.collection)(db, \"Blog\");\n        const q = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.query)(blogsRef, (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.where)(\"AuthorId\", \"==\", userId));\n        const unsubscribe = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.onSnapshot)(q, (querySnapshot)=>{\n            const blogsData = [];\n            querySnapshot.forEach((doc)=>{\n                blogsData.push({\n                    id: doc.id,\n                    ...doc.data()\n                });\n            });\n            setBlogs(blogsData);\n            setLoading(false);\n        });\n        return ()=>{\n            unsubscribe();\n        };\n    }, [\n        userId\n    ]);\n    const defaultImage = \"https://via.placeholder.com/300\"; // Add the default image URL here\n    const handleCreateBlog = ()=>{\n        router.push(\"/Instructor/createBlog\");\n    };\n    const handleUpdateBlog = (id)=>{\n    // Logic for updating the blog\n    };\n    const handleDeleteBlog = async (id)=>{\n        try {\n            const blogRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.doc)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_4__.db, \"Blog\", id);\n            await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.deleteDoc)(blogRef);\n            console.log(\"Blog deleted:\", id);\n        } catch (error) {\n            console.error(\"Error deleting blog:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Box, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_Instructors_InstNav__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\moham\\\\Documents\\\\GitHub\\\\eduShare\\\\pages\\\\Instructor\\\\myBlogs.js\",\n                    lineNumber: 75,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Stack, {\n                    direction: \"row\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_Instructors_InstSidebarr__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\moham\\\\Documents\\\\GitHub\\\\eduShare\\\\pages\\\\Instructor\\\\myBlogs.js\",\n                            lineNumber: 78,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Box, {\n                            flexGrow: 1,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Box, {\n                                    display: \"flex\",\n                                    justifyContent: \"center\",\n                                    mb: 3,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Button, {\n                                        variant: \"contained\",\n                                        sx: {\n                                            backgroundColor: \"#1abc9c\",\n                                            marginRight: \"16px\"\n                                        },\n                                        onClick: handleCreateBlog,\n                                        children: \"Add New Blog\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\moham\\\\Documents\\\\GitHub\\\\eduShare\\\\pages\\\\Instructor\\\\myBlogs.js\",\n                                        lineNumber: 82,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\moham\\\\Documents\\\\GitHub\\\\eduShare\\\\pages\\\\Instructor\\\\myBlogs.js\",\n                                    lineNumber: 81,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Grid, {\n                                    container: true,\n                                    spacing: 3,\n                                    children: blogs.map((blog)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Grid, {\n                                            item: true,\n                                            xs: 12,\n                                            sm: 6,\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Card, {\n                                                sx: {\n                                                    width: \"60%\",\n                                                    margin: \"0 auto\"\n                                                },\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.CardMedia, {\n                                                        component: \"img\",\n                                                        height: \"140\",\n                                                        image: blog.img ? blog.img : defaultImage,\n                                                        alt: blog.Title\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\moham\\\\Documents\\\\GitHub\\\\eduShare\\\\pages\\\\Instructor\\\\myBlogs.js\",\n                                                        lineNumber: 94,\n                                                        columnNumber: 21\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.CardContent, {\n                                                        children: [\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Typography, {\n                                                                variant: \"h5\",\n                                                                component: \"div\",\n                                                                children: blog.Title\n                                                            }, void 0, false, {\n                                                                fileName: \"C:\\\\Users\\\\moham\\\\Documents\\\\GitHub\\\\eduShare\\\\pages\\\\Instructor\\\\myBlogs.js\",\n                                                                lineNumber: 101,\n                                                                columnNumber: 23\n                                                            }, this),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Typography, {\n                                                                variant: \"body2\",\n                                                                color: \"text.secondary\",\n                                                                children: [\n                                                                    blog.Body.slice(0, 100),\n                                                                    \"...\"\n                                                                ]\n                                                            }, void 0, true, {\n                                                                fileName: \"C:\\\\Users\\\\moham\\\\Documents\\\\GitHub\\\\eduShare\\\\pages\\\\Instructor\\\\myBlogs.js\",\n                                                                lineNumber: 104,\n                                                                columnNumber: 19\n                                                            }, this)\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"C:\\\\Users\\\\moham\\\\Documents\\\\GitHub\\\\eduShare\\\\pages\\\\Instructor\\\\myBlogs.js\",\n                                                        lineNumber: 100,\n                                                        columnNumber: 21\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.CardActions, {\n                                                        children: [\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.IconButton, {\n                                                                \"aria-label\": \"update\",\n                                                                onClick: ()=>handleUpdateBlog(blog.id),\n                                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, {\n                                                                    fileName: \"C:\\\\Users\\\\moham\\\\Documents\\\\GitHub\\\\eduShare\\\\pages\\\\Instructor\\\\myBlogs.js\",\n                                                                    lineNumber: 113,\n                                                                    columnNumber: 21\n                                                                }, this)\n                                                            }, void 0, false, {\n                                                                fileName: \"C:\\\\Users\\\\moham\\\\Documents\\\\GitHub\\\\eduShare\\\\pages\\\\Instructor\\\\myBlogs.js\",\n                                                                lineNumber: 109,\n                                                                columnNumber: 19\n                                                            }, this),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.IconButton, {\n                                                                \"aria-label\": \"delete\",\n                                                                onClick: ()=>handleDeleteBlog(blog.id),\n                                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {}, void 0, false, {\n                                                                    fileName: \"C:\\\\Users\\\\moham\\\\Documents\\\\GitHub\\\\eduShare\\\\pages\\\\Instructor\\\\myBlogs.js\",\n                                                                    lineNumber: 119,\n                                                                    columnNumber: 21\n                                                                }, this)\n                                                            }, void 0, false, {\n                                                                fileName: \"C:\\\\Users\\\\moham\\\\Documents\\\\GitHub\\\\eduShare\\\\pages\\\\Instructor\\\\myBlogs.js\",\n                                                                lineNumber: 115,\n                                                                columnNumber: 19\n                                                            }, this)\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"C:\\\\Users\\\\moham\\\\Documents\\\\GitHub\\\\eduShare\\\\pages\\\\Instructor\\\\myBlogs.js\",\n                                                        lineNumber: 108,\n                                                        columnNumber: 17\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\moham\\\\Documents\\\\GitHub\\\\eduShare\\\\pages\\\\Instructor\\\\myBlogs.js\",\n                                                lineNumber: 93,\n                                                columnNumber: 20\n                                            }, this)\n                                        }, blog.id, false, {\n                                            fileName: \"C:\\\\Users\\\\moham\\\\Documents\\\\GitHub\\\\eduShare\\\\pages\\\\Instructor\\\\myBlogs.js\",\n                                            lineNumber: 92,\n                                            columnNumber: 17\n                                        }, this))\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\moham\\\\Documents\\\\GitHub\\\\eduShare\\\\pages\\\\Instructor\\\\myBlogs.js\",\n                                    lineNumber: 90,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\moham\\\\Documents\\\\GitHub\\\\eduShare\\\\pages\\\\Instructor\\\\myBlogs.js\",\n                            lineNumber: 80,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\moham\\\\Documents\\\\GitHub\\\\eduShare\\\\pages\\\\Instructor\\\\myBlogs.js\",\n                    lineNumber: 77,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\moham\\\\Documents\\\\GitHub\\\\eduShare\\\\pages\\\\Instructor\\\\myBlogs.js\",\n            lineNumber: 74,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\moham\\\\Documents\\\\GitHub\\\\eduShare\\\\pages\\\\Instructor\\\\myBlogs.js\",\n        lineNumber: 73,\n        columnNumber: 5\n    }, this);\n}\n_s(MyBlogs, \"pLUf30ul3g2rHVV9kLNV+/Mn+wQ=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = MyBlogs;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyBlogs);\nvar _c;\n$RefreshReg$(_c, \"MyBlogs\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLUyxHQUFHLEdBQUcvQixZQUFZO3dEQUN6Q2dDLEtBQUtWLEtBQUtXLEtBQUs7Ozs7OztrRUFFakIsOERBQUN6RSxzREFBV0E7OzBFQUNWLDhEQUFDRSxxREFBVUE7Z0VBQUNvRCxTQUFRO2dFQUFLYyxXQUFVOzBFQUNoQ04sS0FBS1csS0FBSzs7Ozs7OzBFQUVqQiw4REFBQ3ZFLHFEQUFVQTtnRUFBQ29ELFNBQVE7Z0VBQVFvQixPQUFNOztvRUFDL0JaLEtBQUthLElBQUksQ0FBQ0MsS0FBSyxDQUFDLEdBQUc7b0VBQUs7Ozs7Ozs7Ozs7Ozs7a0VBRzdCLDhEQUFDekUsc0RBQVdBOzswRUFDViw4REFBQ0MscURBQVVBO2dFQUNUeUUsY0FBVztnRUFDWG5CLFNBQVMsSUFBTWhCLGlCQUFpQm9CLEtBQUt4QixFQUFFOzBFQUV2Qyw0RUFBQ2hDLGlFQUFRQTs7Ozs7Ozs7OzswRUFFWCw4REFBQ0YscURBQVVBO2dFQUNUeUUsY0FBVztnRUFDWG5CLFNBQVMsSUFBTWYsaUJBQWlCbUIsS0FBS3hCLEVBQUU7MEVBRXZDLDRFQUFDL0IsbUVBQVVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJDQTNCZ0J1RCxLQUFLeEIsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUN0RDtHQTNHU2pCOztRQUNVMUIsa0RBQVNBOzs7S0FEbkIwQjtBQTRHVCwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9JbnN0cnVjdG9yL215QmxvZ3MuanM/YzU3MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQge1xyXG4gIEJveCxcclxuICBHcmlkLFxyXG4gIEJ1dHRvbixcclxuICBDYXJkLFxyXG4gIENhcmRDb250ZW50LFxyXG4gIENhcmRNZWRpYSxcclxuICBUeXBvZ3JhcGh5LFxyXG4gIENhcmRBY3Rpb25zLFxyXG4gIEljb25CdXR0b24sXHJcbiAgU3RhY2ssXHJcbn0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XHJcbmltcG9ydCBFZGl0SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0VkaXQnO1xyXG5pbXBvcnQgRGVsZXRlSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0RlbGV0ZSc7XHJcbmltcG9ydCB7IEF1dGhDb250ZXh0IH0gZnJvbSAnLi4vLi4vaG9va3MvQXV0aFByb3ZpZGVyJztcclxuaW1wb3J0IHsgZGIgLCBhcHAgLH0gZnJvbSAnLi4vLi4vRmlyZWJhc2UvRmlyZWJhc2UnO1xyXG5pbXBvcnQgeyBnZXRBdXRoIH0gZnJvbSAnZmlyZWJhc2UvYXV0aCc7XHJcbmltcG9ydCB7IGdldEZpcmVzdG9yZSwgY29sbGVjdGlvbiwgcXVlcnksIHdoZXJlLCBvblNuYXBzaG90LCBkb2MsIGRlbGV0ZURvYyB9IGZyb20gJ2ZpcmViYXNlL2ZpcmVzdG9yZSc7XHJcbmltcG9ydCBJbnN0U2lkZWJhciBmcm9tICcuLi8uLi9jb21wb25lbnQvSW5zdHJ1Y3RvcnMvSW5zdFNpZGViYXJyJztcclxuaW1wb3J0IEluc3ROYXYgZnJvbSAnLi4vLi4vY29tcG9uZW50L0luc3RydWN0b3JzL0luc3ROYXYnO1xyXG5cclxuZnVuY3Rpb24gTXlCbG9ncygpIHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgW2Jsb2dzLCBzZXRCbG9nc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAgIGNvbnN0IGF1dGggPSBnZXRBdXRoKGFwcCk7XHJcbiAgICBjb25zdCB1c2VySWQgPSBhdXRoLmN1cnJlbnRVc2VyLnVpZDtcclxuICAgIFxyXG4gIFxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgaWYgKCF1c2VySWQpIHJldHVybjtcclxuICBcclxuICAgICAgY29uc3QgZGIgPSBnZXRGaXJlc3RvcmUoYXBwKTtcclxuICAgICAgY29uc3QgYmxvZ3NSZWYgPSBjb2xsZWN0aW9uKGRiLCAnQmxvZycpO1xyXG4gICAgICBjb25zdCBxID0gcXVlcnkoYmxvZ3NSZWYsIHdoZXJlKCdBdXRob3JJZCcsICc9PScsIHVzZXJJZCkpO1xyXG4gICAgICBjb25zdCB1bnN1YnNjcmliZSA9IG9uU25hcHNob3QocSwgKHF1ZXJ5U25hcHNob3QpID0+IHtcclxuICAgICAgICBjb25zdCBibG9nc0RhdGEgPSBbXTtcclxuICAgICAgICBxdWVyeVNuYXBzaG90LmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgICAgICAgYmxvZ3NEYXRhLnB1c2goeyBpZDogZG9jLmlkLCAuLi5kb2MuZGF0YSgpIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNldEJsb2dzKGJsb2dzRGF0YSk7XHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIH0pO1xyXG4gIFxyXG4gICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgIHVuc3Vic2NyaWJlKCk7XHJcbiAgICAgIH07XHJcbiAgICB9LCBbdXNlcklkXSk7XHJcblxyXG4gIGNvbnN0IGRlZmF1bHRJbWFnZSA9ICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMzAwJzsgLy8gQWRkIHRoZSBkZWZhdWx0IGltYWdlIFVSTCBoZXJlXHJcblxyXG4gIGNvbnN0IGhhbmRsZUNyZWF0ZUJsb2cgPSAoKSA9PiB7XHJcbiAgICByb3V0ZXIucHVzaCgnL0luc3RydWN0b3IvY3JlYXRlQmxvZycpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVVwZGF0ZUJsb2cgPSAoaWQpID0+IHtcclxuICAgIC8vIExvZ2ljIGZvciB1cGRhdGluZyB0aGUgYmxvZ1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZURlbGV0ZUJsb2cgPSBhc3luYyAoaWQpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGJsb2dSZWYgPSBkb2MoZGIsICdCbG9nJywgaWQpO1xyXG4gICAgICBhd2FpdCBkZWxldGVEb2MoYmxvZ1JlZik7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdCbG9nIGRlbGV0ZWQ6JywgaWQpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZGVsZXRpbmcgYmxvZzonLCBlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxCb3g+XHJcbiAgICAgICAgPEluc3ROYXYgLz5cclxuXHJcbiAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj1cInJvd1wiPlxyXG4gICAgICAgICAgPEluc3RTaWRlYmFyIC8+XHJcblxyXG4gICAgICAgICAgPEJveCBmbGV4R3Jvdz17MX0+XHJcbiAgICAgICAgICAgIDxCb3ggZGlzcGxheT1cImZsZXhcIiBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiIG1iPXszfT5cclxuICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgIHN4PXt7IGJhY2tncm91bmRDb2xvcjogJyMxYWJjOWMnLCBtYXJnaW5SaWdodDogJzE2cHgnIH19XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDcmVhdGVCbG9nfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIEFkZCBOZXcgQmxvZ1xyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezN9PlxyXG4gICAgICAgICAgICAgIHtibG9ncy5tYXAoKGJsb2cpID0+IChcclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0ga2V5PXtibG9nLmlkfT5cclxuICAgICAgICAgICAgICAgICAgIDxDYXJkIHN4PXt7IHdpZHRoOiAnNjAlJywgbWFyZ2luOiAnMCBhdXRvJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZE1lZGlhXHJcbiAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJpbWdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTQwXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGltYWdlPXtibG9nLmltZyA/IGJsb2cuaW1nIDogZGVmYXVsdEltYWdlfSAvLyBVc2UgdGhlIHByb3ZpZGVkIGltYWdlLCBvciB1c2UgdGhlIGRlZmF1bHQgaW1hZ2UgaWYgbm90IHByb3ZpZGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2Jsb2cuVGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIiBjb21wb25lbnQ9XCJkaXZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2Jsb2cuVGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtibG9nLkJvZHkuc2xpY2UoMCwgMTAwKX0uLi5cclxuICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICAgIDxDYXJkQWN0aW9ucz5cclxuICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwidXBkYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVVcGRhdGVCbG9nKGJsb2cuaWQpfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEVkaXRJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiZGVsZXRlXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVEZWxldGVCbG9nKGJsb2cuaWQpfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPERlbGV0ZUljb24gLz5cclxuICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkQWN0aW9ucz5cclxuICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L1N0YWNrPlxyXG4gIDwvQm94PlxyXG48L2Rpdj5cclxuICAgICk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTXlCbG9ncztcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VDb250ZXh0IiwidXNlUm91dGVyIiwiQm94IiwiR3JpZCIsIkJ1dHRvbiIsIkNhcmQiLCJDYXJkQ29udGVudCIsIkNhcmRNZWRpYSIsIlR5cG9ncmFwaHkiLCJDYXJkQWN0aW9ucyIsIkljb25CdXR0b24iLCJTdGFjayIsIkVkaXRJY29uIiwiRGVsZXRlSWNvbiIsIkF1dGhDb250ZXh0IiwiZGIiLCJhcHAiLCJnZXRBdXRoIiwiZ2V0RmlyZXN0b3JlIiwiY29sbGVjdGlvbiIsInF1ZXJ5Iiwid2hlcmUiLCJvblNuYXBzaG90IiwiZG9jIiwiZGVsZXRlRG9jIiwiSW5zdFNpZGViYXIiLCJJbnN0TmF2IiwiTXlCbG9ncyIsInJvdXRlciIsImJsb2dzIiwic2V0QmxvZ3MiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImF1dGgiLCJ1c2VySWQiLCJjdXJyZW50VXNlciIsInVpZCIsImJsb2dzUmVmIiwicSIsInVuc3Vic2NyaWJlIiwicXVlcnlTbmFwc2hvdCIsImJsb2dzRGF0YSIsImZvckVhY2giLCJwdXNoIiwiaWQiLCJkYXRhIiwiZGVmYXVsdEltYWdlIiwiaGFuZGxlQ3JlYXRlQmxvZyIsImhhbmRsZVVwZGF0ZUJsb2ciLCJoYW5kbGVEZWxldGVCbG9nIiwiYmxvZ1JlZiIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImRpdiIsImRpcmVjdGlvbiIsImZsZXhHcm93IiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwibWIiLCJ2YXJpYW50Iiwic3giLCJiYWNrZ3JvdW5kQ29sb3IiLCJtYXJnaW5SaWdodCIsIm9uQ2xpY2siLCJjb250YWluZXIiLCJzcGFjaW5nIiwibWFwIiwiYmxvZyIsIml0ZW0iLCJ4cyIsInNtIiwid2lkdGgiLCJtYXJnaW4iLCJjb21wb25lbnQiLCJoZWlnaHQiLCJpbWFnZSIsImltZyIsImFsdCIsIlRpdGxlIiwiY29sb3IiLCJCb2R5Iiwic2xpY2UiLCJhcmlhLWxhYmVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/Instructor/myBlogs.js\n"));

/***/ })

});