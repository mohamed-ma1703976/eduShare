"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/Instructor",{

/***/ "./component/Instructors/UploadFile.js":
/*!*********************************************!*\
  !*** ./component/Instructors/UploadFile.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Firebase/Firebase */ \"./Firebase/Firebase.js\");\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/storage */ \"./node_modules/firebase/storage/dist/esm/index.esm.js\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst UploadFile = ()=>{\n    _s();\n    const [file, setFile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [fileList, setFileList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [instructors, setInstructors] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    console.log(instructors);\n    const currentUser = _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_2__.auth.currentUser.uid;\n    // let currentInstructor = instructors.find(ins => ins.id === currentUser).attributes.myCourse[0].coursname[0].replace(/\\s+/g, '')\n    //console.log(currentInstructor)\n    console.log(instructors);\n    //const fileListRef = ref(storage, `${currentInstructor}/`); // Declare and initialize fileListRef\n    // useEffect(() => {\n    //     listAll(fileListRef).then((res) => {\n    //         setFileList([]); // Clear fileList state\n    //         res.items.forEach((item) => {\n    //             getDownloadURL(item).then((url) => {\n    //                 setFileList(pre => [...pre, url]);\n    //             });\n    //         });\n    //     });\n    // }, []); // Add fileListRef as a dependency\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchInstructors = async ()=>{\n            const instructorCollection = (0,_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_2__.collection)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_2__.db, \"Instructor\");\n            const instructorSnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.getDocs)(instructorCollection);\n            const instructorsList = instructorSnapshot.docs.map((doc)=>({\n                    id: doc.id,\n                    attributes: doc.data()\n                }));\n            setInstructors(instructorsList);\n            setLoading(false);\n        };\n        fetchInstructors();\n    }, []);\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior-firebase-update\\\\eduShare\\\\component\\\\Instructors\\\\UploadFile.js\",\n        lineNumber: 49,\n        columnNumber: 25\n    }, undefined);\n    const handleFileChange = (e)=>{\n        setFile(e.target.files[0]);\n    };\n    console.log(currentUser);\n    const handleUpload = ()=>{\n        if (file === null) return;\n        const fileRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.ref)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_2__.storage, \"\".concat(currentInstructor, \"/\").concat(file.name + (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)()));\n        (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.uploadBytes)(fileRef, file);\n    // .then((snapshot) => {\n    //     getDownloadURL(snapshot.ref).then((url) => {\n    //         setFileList((pre) => [...pre, url])\n    //     });\n    // });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Instructor Component\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior-firebase-update\\\\eduShare\\\\component\\\\Instructors\\\\UploadFile.js\",\n                lineNumber: 71,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"file\",\n                onChange: handleFileChange\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior-firebase-update\\\\eduShare\\\\component\\\\Instructors\\\\UploadFile.js\",\n                lineNumber: 72,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleUpload,\n                children: \"Upload File\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior-firebase-update\\\\eduShare\\\\component\\\\Instructors\\\\UploadFile.js\",\n                lineNumber: 73,\n                columnNumber: 13\n            }, undefined),\n            fileList.map((url, index)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: url,\n                        target: \"_blank\",\n                        rel: \"noopener noreferrer\",\n                        children: url\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior-firebase-update\\\\eduShare\\\\component\\\\Instructors\\\\UploadFile.js\",\n                        lineNumber: 77,\n                        columnNumber: 25\n                    }, undefined)\n                }, index, false, {\n                    fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior-firebase-update\\\\eduShare\\\\component\\\\Instructors\\\\UploadFile.js\",\n                    lineNumber: 76,\n                    columnNumber: 21\n                }, undefined);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior-firebase-update\\\\eduShare\\\\component\\\\Instructors\\\\UploadFile.js\",\n        lineNumber: 70,\n        columnNumber: 9\n    }, undefined);\n};\n_s(UploadFile, \"3Z5dU68W/dOJ3v/+bbvatGeo/Nw=\");\n_c = UploadFile;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UploadFile);\nvar _c;\n$RefreshReg$(_c, \"UploadFile\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnQvSW5zdHJ1Y3RvcnMvVXBsb2FkRmlsZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFBbUQ7QUFDcUI7QUFDSztBQUNuRDtBQUNtQjtBQUU3QyxNQUFNYSxhQUFhLElBQU07O0lBQ3JCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHYiwrQ0FBUUEsQ0FBQyxJQUFJO0lBQ3JDLE1BQU0sQ0FBQ2MsVUFBVUMsWUFBWSxHQUFHZiwrQ0FBUUEsQ0FBQyxFQUFFO0lBRTNDLE1BQU0sQ0FBQ2dCLGFBQWFDLGVBQWUsR0FBR2pCLCtDQUFRQSxDQUFDLEVBQUU7SUFDakQsTUFBTSxDQUFDa0IsU0FBU0MsV0FBVyxHQUFHbkIsK0NBQVFBLENBQUMsSUFBSTtJQUUzQ29CLFFBQVFDLEdBQUcsQ0FBQ0w7SUFDWixNQUFNTSxjQUFjckIsb0VBQW9CO0lBRXpDLGtJQUFrSTtJQUNqSSxnQ0FBZ0M7SUFFaENtQixRQUFRQyxHQUFHLENBQUNMO0lBQ1osa0dBQWtHO0lBRWxHLG9CQUFvQjtJQUNwQiwyQ0FBMkM7SUFDM0MsbURBQW1EO0lBQ25ELHdDQUF3QztJQUN4QyxtREFBbUQ7SUFDbkQscURBQXFEO0lBQ3JELGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsVUFBVTtJQUNWLDZDQUE2QztJQUU3Q2pCLGdEQUFTQSxDQUFDLElBQU07UUFDWixNQUFNeUIsbUJBQW1CLFVBQVk7WUFDakMsTUFBTUMsdUJBQXVCdkIsOERBQVVBLENBQUNDLGtEQUFFQSxFQUFFO1lBQzVDLE1BQU11QixxQkFBcUIsTUFBTWhCLDJEQUFPQSxDQUFDZTtZQUN6QyxNQUFNRSxrQkFBa0JELG1CQUFtQkUsSUFBSSxDQUFDQyxHQUFHLENBQUMsQ0FBQ0MsTUFBUztvQkFDMURDLElBQUlELElBQUlDLEVBQUU7b0JBQ1ZDLFlBQVlGLElBQUlHLElBQUk7Z0JBQ3hCO1lBQ0FoQixlQUFlVTtZQUNmUixXQUFXLEtBQUs7UUFDcEI7UUFFQUs7SUFDSixHQUFHLEVBQUU7SUFFTCxJQUFJTixTQUFTLHFCQUFPLDhEQUFDZ0I7a0JBQUk7Ozs7OztJQUl6QixNQUFNQyxtQkFBbUIsQ0FBQ0MsSUFBTTtRQUM1QnZCLFFBQVF1QixFQUFFQyxNQUFNLENBQUNDLEtBQUssQ0FBQyxFQUFFO0lBQzdCO0lBQ0FsQixRQUFRQyxHQUFHLENBQUNDO0lBQ1osTUFBTWlCLGVBQWUsSUFBTTtRQUN2QixJQUFJM0IsU0FBUyxJQUFJLEVBQUU7UUFDbkIsTUFBTTRCLFVBQVVqQyxxREFBR0EsQ0FBQ0gsdURBQU9BLEVBQUUsR0FBd0JRLE9BQXJCNkIsbUJBQWtCLEtBQW9CLE9BQWpCN0IsS0FBSzhCLElBQUksR0FBR2pDLHdDQUFFQTtRQUNuRUQsNkRBQVdBLENBQUNnQyxTQUFTNUI7SUFFckIsd0JBQXdCO0lBQ3hCLG1EQUFtRDtJQUNuRCw4Q0FBOEM7SUFDOUMsVUFBVTtJQUNWLE1BQU07SUFDVjtJQUVBLHFCQUNJLDhEQUFDc0I7OzBCQUNHLDhEQUFDUzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDQztnQkFBTUMsTUFBSztnQkFBT0MsVUFBVVg7Ozs7OzswQkFDN0IsOERBQUNZO2dCQUFPQyxTQUFTVDswQkFBYzs7Ozs7O1lBQzlCekIsU0FBU2UsR0FBRyxDQUFDLENBQUNvQixLQUFLQyxRQUFVO2dCQUMxQixxQkFDSSw4REFBQ2hCOzhCQUNHLDRFQUFDaUI7d0JBQUVDLE1BQU1IO3dCQUFLWixRQUFPO3dCQUFTZ0IsS0FBSTtrQ0FBdUJKOzs7Ozs7bUJBRG5EQzs7Ozs7WUFJbEI7Ozs7Ozs7QUFHWjtHQTVFTXZDO0tBQUFBO0FBOEVOLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudC9JbnN0cnVjdG9ycy9VcGxvYWRGaWxlLmpzP2YyM2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGF1dGgsIGNvbGxlY3Rpb24sIGRiLCBzdG9yYWdlIH0gZnJvbSAnLi4vLi4vRmlyZWJhc2UvRmlyZWJhc2UnO1xyXG5pbXBvcnQgeyBnZXREb3dubG9hZFVSTCwgbGlzdEFsbCwgcmVmLCB1cGxvYWRCeXRlcyB9IGZyb20gXCJmaXJlYmFzZS9zdG9yYWdlXCI7XHJcbmltcG9ydCB7IHY0IH0gZnJvbSBcInV1aWRcIjtcclxuaW1wb3J0IHsgZ2V0RG9jcyB9IGZyb20gJ2ZpcmViYXNlL2ZpcmVzdG9yZSc7XHJcblxyXG5jb25zdCBVcGxvYWRGaWxlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2ZpbGUsIHNldEZpbGVdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbZmlsZUxpc3QsIHNldEZpbGVMaXN0XSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgICBjb25zdCBbaW5zdHJ1Y3RvcnMsIHNldEluc3RydWN0b3JzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGluc3RydWN0b3JzKVxyXG4gICAgY29uc3QgY3VycmVudFVzZXIgPSBhdXRoLmN1cnJlbnRVc2VyLnVpZDtcclxuXHJcbiAgIC8vIGxldCBjdXJyZW50SW5zdHJ1Y3RvciA9IGluc3RydWN0b3JzLmZpbmQoaW5zID0+IGlucy5pZCA9PT0gY3VycmVudFVzZXIpLmF0dHJpYnV0ZXMubXlDb3Vyc2VbMF0uY291cnNuYW1lWzBdLnJlcGxhY2UoL1xccysvZywgJycpXHJcbiAgICAvL2NvbnNvbGUubG9nKGN1cnJlbnRJbnN0cnVjdG9yKVxyXG5cclxuICAgIGNvbnNvbGUubG9nKGluc3RydWN0b3JzKVxyXG4gICAgLy9jb25zdCBmaWxlTGlzdFJlZiA9IHJlZihzdG9yYWdlLCBgJHtjdXJyZW50SW5zdHJ1Y3Rvcn0vYCk7IC8vIERlY2xhcmUgYW5kIGluaXRpYWxpemUgZmlsZUxpc3RSZWZcclxuXHJcbiAgICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gICAgIGxpc3RBbGwoZmlsZUxpc3RSZWYpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgLy8gICAgICAgICBzZXRGaWxlTGlzdChbXSk7IC8vIENsZWFyIGZpbGVMaXN0IHN0YXRlXHJcbiAgICAvLyAgICAgICAgIHJlcy5pdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICBnZXREb3dubG9hZFVSTChpdGVtKS50aGVuKCh1cmwpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgICAgICBzZXRGaWxlTGlzdChwcmUgPT4gWy4uLnByZSwgdXJsXSk7XHJcbiAgICAvLyAgICAgICAgICAgICB9KTtcclxuICAgIC8vICAgICAgICAgfSk7XHJcbiAgICAvLyAgICAgfSk7XHJcbiAgICAvLyB9LCBbXSk7IC8vIEFkZCBmaWxlTGlzdFJlZiBhcyBhIGRlcGVuZGVuY3lcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZldGNoSW5zdHJ1Y3RvcnMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGluc3RydWN0b3JDb2xsZWN0aW9uID0gY29sbGVjdGlvbihkYiwgJ0luc3RydWN0b3InKTtcclxuICAgICAgICAgICAgY29uc3QgaW5zdHJ1Y3RvclNuYXBzaG90ID0gYXdhaXQgZ2V0RG9jcyhpbnN0cnVjdG9yQ29sbGVjdGlvbik7XHJcbiAgICAgICAgICAgIGNvbnN0IGluc3RydWN0b3JzTGlzdCA9IGluc3RydWN0b3JTbmFwc2hvdC5kb2NzLm1hcCgoZG9jKSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgaWQ6IGRvYy5pZCxcclxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IGRvYy5kYXRhKCksXHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgc2V0SW5zdHJ1Y3RvcnMoaW5zdHJ1Y3RvcnNMaXN0KTtcclxuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgZmV0Y2hJbnN0cnVjdG9ycygpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGlmIChsb2FkaW5nKSByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xyXG5cclxuXHJcblxyXG4gICAgY29uc3QgaGFuZGxlRmlsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICAgICAgc2V0RmlsZShlLnRhcmdldC5maWxlc1swXSk7XHJcbiAgICB9O1xyXG4gICAgY29uc29sZS5sb2coY3VycmVudFVzZXIpXHJcbiAgICBjb25zdCBoYW5kbGVVcGxvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGZpbGUgPT09IG51bGwpIHJldHVybjtcclxuICAgICAgICBjb25zdCBmaWxlUmVmID0gcmVmKHN0b3JhZ2UsIGAke2N1cnJlbnRJbnN0cnVjdG9yfS8ke2ZpbGUubmFtZSArIHY0KCl9YCk7XHJcbiAgICAgICAgdXBsb2FkQnl0ZXMoZmlsZVJlZiwgZmlsZSlcclxuICAgICAgICBcclxuICAgICAgICAvLyAudGhlbigoc25hcHNob3QpID0+IHtcclxuICAgICAgICAvLyAgICAgZ2V0RG93bmxvYWRVUkwoc25hcHNob3QucmVmKS50aGVuKCh1cmwpID0+IHtcclxuICAgICAgICAvLyAgICAgICAgIHNldEZpbGVMaXN0KChwcmUpID0+IFsuLi5wcmUsIHVybF0pXHJcbiAgICAgICAgLy8gICAgIH0pO1xyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMT5JbnN0cnVjdG9yIENvbXBvbmVudDwvaDE+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG9uQ2hhbmdlPXtoYW5kbGVGaWxlQ2hhbmdlfSAvPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVVwbG9hZH0+VXBsb2FkIEZpbGU8L2J1dHRvbj5cclxuICAgICAgICAgICAge2ZpbGVMaXN0Lm1hcCgodXJsLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXt1cmx9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj57dXJsfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVwbG9hZEZpbGU7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXV0aCIsImNvbGxlY3Rpb24iLCJkYiIsInN0b3JhZ2UiLCJnZXREb3dubG9hZFVSTCIsImxpc3RBbGwiLCJyZWYiLCJ1cGxvYWRCeXRlcyIsInY0IiwiZ2V0RG9jcyIsIlVwbG9hZEZpbGUiLCJmaWxlIiwic2V0RmlsZSIsImZpbGVMaXN0Iiwic2V0RmlsZUxpc3QiLCJpbnN0cnVjdG9ycyIsInNldEluc3RydWN0b3JzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJjb25zb2xlIiwibG9nIiwiY3VycmVudFVzZXIiLCJ1aWQiLCJmZXRjaEluc3RydWN0b3JzIiwiaW5zdHJ1Y3RvckNvbGxlY3Rpb24iLCJpbnN0cnVjdG9yU25hcHNob3QiLCJpbnN0cnVjdG9yc0xpc3QiLCJkb2NzIiwibWFwIiwiZG9jIiwiaWQiLCJhdHRyaWJ1dGVzIiwiZGF0YSIsImRpdiIsImhhbmRsZUZpbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwiZmlsZXMiLCJoYW5kbGVVcGxvYWQiLCJmaWxlUmVmIiwiY3VycmVudEluc3RydWN0b3IiLCJuYW1lIiwiaDEiLCJpbnB1dCIsInR5cGUiLCJvbkNoYW5nZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJ1cmwiLCJpbmRleCIsImEiLCJocmVmIiwicmVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./component/Instructors/UploadFile.js\n"));

/***/ })

});