"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/Student/mycourses",{

/***/ "./component/Student/MycoursesCard.js":
/*!********************************************!*\
  !*** ./component/Student/MycoursesCard.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MycoursesCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Card */ \"./node_modules/@mui/material/esm/Card/index.js\");\n/* harmony import */ var _mui_material_CardActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/CardActions */ \"./node_modules/@mui/material/esm/CardActions/index.js\");\n/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/CardContent */ \"./node_modules/@mui/material/esm/CardContent/index.js\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Button */ \"./node_modules/@mui/material/esm/Button/index.js\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Typography */ \"./node_modules/@mui/material/esm/Typography/index.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Firebase/Firebase */ \"./Firebase/Firebase.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/storage */ \"./node_modules/firebase/storage/dist/esm/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nfunction MycoursesCard(param) {\n    let { courseTitle , InstName , id , userid  } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    const [students, setStudents] = react__WEBPACK_IMPORTED_MODULE_1__.useState([]);\n    const [loading, setLoading] = react__WEBPACK_IMPORTED_MODULE_1__.useState(true);\n    //const [userId, setUserId] = React.useState(null);\n    const [currentCourses, setCurrentCourses] = react__WEBPACK_IMPORTED_MODULE_1__.useState();\n    const [isCoursePage, setIsCoursePage] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);\n    const [fileList, setFileList] = react__WEBPACK_IMPORTED_MODULE_1__.useState([]);\n    const [trimedCourse, setTrimedCourse] = react__WEBPACK_IMPORTED_MODULE_1__.useState([]);\n    //const currentStudent = students.find(s => s.id === userId)?.attributes.registerdcourses\n    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>{\n        const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_3__.app);\n        const fetchStudents = async ()=>{\n            const studentCollection = (0,_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_3__.collection)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_3__.db, \"Student\");\n            const studentSnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.getDocs)(studentCollection);\n            const studentList = studentSnapshot.docs.map((doc)=>({\n                    id: doc.id,\n                    attributes: doc.data()\n                }));\n            setStudents(studentList);\n            setLoading(false);\n        };\n        // const unsubscribe = auth.onAuthStateChanged(user => {\n        //     if (user) {\n        //         setUserId(user.uid);\n        //     } else {\n        //         setUserId(null);\n        //     }\n        // });\n        fetchStudents();\n    // return () => unsubscribe();\n    }, [\n        userid\n    ]);\n    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>{\n        if (students.length > 0 && userid) {\n            var _students_find;\n            const currentStudent = (_students_find = students.find((s)=>s.id === userid)) === null || _students_find === void 0 ? void 0 : _students_find.attributes.registerdcourses;\n            if (currentStudent) {\n                setCurrentCourses(currentStudent);\n            }\n        }\n    }, [\n        students,\n        userid\n    ]);\n    console.log(userid);\n    async function handelDrop(id) {\n        try {\n            // Find the index of the course with the given id in the currentCourses array\n            const index = currentCourses.findIndex((course)=>course === id);\n            if (index !== -1) {\n                // If the course is found, remove it from the currentCourses array\n                const updatedCourses = [\n                    ...currentCourses\n                ];\n                updatedCourses.splice(index, 1);\n                setCurrentCourses(updatedCourses);\n                // Update the current student's registered courses in the database\n                // const studentDocRef = collection(db, 'Student', userId);\n                // await studentDocRef.update({\n                //     registerdcourses: updatedCourses\n                // });\n                try {\n                    if (userid) {\n                        const studentRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_3__.db, \"Student\", userid);\n                        await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.updateDoc)(studentRef, {\n                            registerdcourses: updatedCourses\n                        });\n                    }\n                } catch (err) {\n                    console.log(err);\n                }\n                if (!userid) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"Loading...\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior-firebase-update\\\\eduShare\\\\component\\\\Student\\\\MycoursesCard.js\",\n                        lineNumber: 96,\n                        columnNumber: 28\n                    }, this);\n                }\n                console.log(\"Course dropped successfully\");\n                router.reload();\n            }\n        } catch (error) {\n            console.error(\"Failed to drop course:\", error);\n        }\n    }\n    async function handelCourseFiles(id, courseName) {\n        setIsCoursePage((p)=>!p);\n        console.log(courseName);\n        const CourseNameTrimed = courseName.replace(/\\s+/g, \"\");\n        setTrimedCourse(CourseNameTrimed);\n        console.log(CourseNameTrimed);\n        const fileListRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_6__.ref)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_3__.storage, \"\".concat(CourseNameTrimed, \"/\")); // Declare and initialize fileListRef\n        (0,firebase_storage__WEBPACK_IMPORTED_MODULE_6__.listAll)(fileListRef).then((res)=>{\n            setFileList([]); // Clear fileList state\n            res.items.forEach((item)=>{\n                (0,firebase_storage__WEBPACK_IMPORTED_MODULE_6__.getDownloadURL)(item).then((url)=>{\n                    setFileList((pre)=>[\n                            ...pre,\n                            url\n                        ]);\n                });\n            });\n        });\n    }\n    console.log(fileList);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: isCoursePage ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                \"Course Page\",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    onClick: ()=>setIsCoursePage((p)=>!p),\n                    children: \"back to my courses\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior-firebase-update\\\\eduShare\\\\component\\\\Student\\\\MycoursesCard.js\",\n                    lineNumber: 133,\n                    columnNumber: 21\n                }, this),\n                fileList.map((url, index)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Card__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                            sx: {\n                                width: \"100%\",\n                                backgroundColor: \"\",\n                                color: \"\"\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: url,\n                                    target: \"_blank\",\n                                    rel: \"noopener noreferrer\",\n                                    style: {\n                                        color: \"black\"\n                                    },\n                                    children: trimedCourse + \"/\" + (index + 1)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior-firebase-update\\\\eduShare\\\\component\\\\Student\\\\MycoursesCard.js\",\n                                    lineNumber: 139,\n                                    columnNumber: 41\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior-firebase-update\\\\eduShare\\\\component\\\\Student\\\\MycoursesCard.js\",\n                                lineNumber: 138,\n                                columnNumber: 37\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior-firebase-update\\\\eduShare\\\\component\\\\Student\\\\MycoursesCard.js\",\n                            lineNumber: 137,\n                            columnNumber: 33\n                        }, this)\n                    }, index, false, {\n                        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior-firebase-update\\\\eduShare\\\\component\\\\Student\\\\MycoursesCard.js\",\n                        lineNumber: 136,\n                        columnNumber: 29\n                    }, this);\n                })\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior-firebase-update\\\\eduShare\\\\component\\\\Student\\\\MycoursesCard.js\",\n            lineNumber: 130,\n            columnNumber: 32\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Card__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n            sx: {\n                width: \"100%\",\n                backgroundColor: \"#1ABC9C\",\n                color: \"#454545\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                            gutterBottom: true,\n                            variant: \"h7\",\n                            component: \"div\",\n                            sx: {\n                                fontWeight: \"1000\"\n                            },\n                            children: [\n                                \"Course Name : \",\n                                courseTitle\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior-firebase-update\\\\eduShare\\\\component\\\\Student\\\\MycoursesCard.js\",\n                            lineNumber: 156,\n                            columnNumber: 29\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                            gutterBottom: true,\n                            variant: \"h7\",\n                            component: \"div\",\n                            sx: {\n                                fontWeight: \"700\"\n                            },\n                            children: [\n                                \"Instructor Name : \",\n                                InstName\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior-firebase-update\\\\eduShare\\\\component\\\\Student\\\\MycoursesCard.js\",\n                            lineNumber: 159,\n                            columnNumber: 29\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior-firebase-update\\\\eduShare\\\\component\\\\Student\\\\MycoursesCard.js\",\n                    lineNumber: 155,\n                    columnNumber: 25\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_CardActions__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            size: \"small\",\n                            sx: {\n                                backgroundColor: \"#1ABC9C\",\n                                color: \"white\",\n                                margin: \"0 0 10px 0\",\n                                border: \"1px solid\"\n                            },\n                            onClick: ()=>handelDrop(id),\n                            children: \"Drop course\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior-firebase-update\\\\eduShare\\\\component\\\\Student\\\\MycoursesCard.js\",\n                            lineNumber: 164,\n                            columnNumber: 29\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            size: \"small\",\n                            sx: {\n                                backgroundColor: \"#1ABC9C\",\n                                color: \"white\",\n                                margin: \"0 0 10px 0\",\n                                border: \"1px solid\"\n                            },\n                            onClick: ()=>handelCourseFiles(id, courseTitle),\n                            children: \"Course Page\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior-firebase-update\\\\eduShare\\\\component\\\\Student\\\\MycoursesCard.js\",\n                            lineNumber: 165,\n                            columnNumber: 29\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior-firebase-update\\\\eduShare\\\\component\\\\Student\\\\MycoursesCard.js\",\n                    lineNumber: 163,\n                    columnNumber: 25\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior-firebase-update\\\\eduShare\\\\component\\\\Student\\\\MycoursesCard.js\",\n            lineNumber: 154,\n            columnNumber: 21\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior-firebase-update\\\\eduShare\\\\component\\\\Student\\\\MycoursesCard.js\",\n        lineNumber: 128,\n        columnNumber: 9\n    }, this);\n}\n_s(MycoursesCard, \"kHW4iM83VNJPXz1qGFWV0AZtvXs=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = MycoursesCard;\nvar _c;\n$RefreshReg$(_c, \"MycoursesCard\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnQvU3R1ZGVudC9NeWNvdXJzZXNDYXJkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBK0I7QUFDTztBQUNjO0FBQ0E7QUFDVjtBQUNRO0FBQ1Y7QUFDK0I7QUFDVjtBQUNyQjtBQUN3QjtBQUVqRCxTQUFTa0IsY0FBYyxLQUFxQyxFQUFFO1FBQXZDLEVBQUVDLFlBQVcsRUFBRUMsU0FBUSxFQUFFQyxHQUFFLEVBQUVDLE9BQU0sRUFBRSxHQUFyQzs7SUFDbEMsTUFBTUMsU0FBU1Qsc0RBQVNBO0lBRXhCLE1BQU0sQ0FBQ1UsVUFBVUMsWUFBWSxHQUFHekIsMkNBQWMsQ0FBQyxFQUFFO0lBQ2pELE1BQU0sQ0FBQzJCLFNBQVNDLFdBQVcsR0FBRzVCLDJDQUFjLENBQUMsSUFBSTtJQUNqRCxtREFBbUQ7SUFDbkQsTUFBTSxDQUFDNkIsZ0JBQWdCQyxrQkFBa0IsR0FBRzlCLDJDQUFjO0lBQzFELE1BQU0sQ0FBQytCLGNBQWNDLGdCQUFnQixHQUFHaEMsMkNBQWMsQ0FBQyxLQUFLO0lBQzVELE1BQU0sQ0FBQ2lDLFVBQVVDLFlBQVksR0FBR2xDLDJDQUFjLENBQUMsRUFBRTtJQUNqRCxNQUFNLENBQUNtQyxjQUFjQyxnQkFBZ0IsR0FBR3BDLDJDQUFjLENBQUMsRUFBRTtJQUl6RCx5RkFBeUY7SUFDekZBLDRDQUFlLENBQUMsSUFBTTtRQUNsQixNQUFNc0MsT0FBT2hDLHNEQUFPQSxDQUFDQyxtREFBR0E7UUFFeEIsTUFBTWdDLGdCQUFnQixVQUFZO1lBQzlCLE1BQU1DLG9CQUFvQmhDLDhEQUFVQSxDQUFDQyxrREFBRUEsRUFBRTtZQUN6QyxNQUFNZ0Msa0JBQWtCLE1BQU03QiwyREFBT0EsQ0FBQzRCO1lBQ3RDLE1BQU1FLGNBQWNELGdCQUFnQkUsSUFBSSxDQUFDQyxHQUFHLENBQUMsQ0FBQ2pDLE1BQVM7b0JBQ25EVSxJQUFJVixJQUFJVSxFQUFFO29CQUNWd0IsWUFBWWxDLElBQUltQyxJQUFJO2dCQUN4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QUFjQyxRQUFROzRCQUFZOzRCQUFHaEIsU0FBUyxJQUFNYixrQkFBa0I1QyxJQUFJRjtzQ0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBRXhLOzs7Ozs7QUFLM0IsQ0FBQztHQS9KdUJEOztRQUNMSixrREFBU0E7OztLQURKSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnQvU3R1ZGVudC9NeWNvdXJzZXNDYXJkLmpzPzY1NDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ2FyZCBmcm9tICdAbXVpL21hdGVyaWFsL0NhcmQnO1xyXG5pbXBvcnQgQ2FyZEFjdGlvbnMgZnJvbSAnQG11aS9tYXRlcmlhbC9DYXJkQWN0aW9ucyc7XHJcbmltcG9ydCBDYXJkQ29udGVudCBmcm9tICdAbXVpL21hdGVyaWFsL0NhcmRDb250ZW50JztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbXVpL21hdGVyaWFsL0J1dHRvbic7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCB7IGdldEF1dGggfSBmcm9tICdmaXJlYmFzZS9hdXRoJztcclxuaW1wb3J0IHsgYXBwLCBjb2xsZWN0aW9uLCBkYiwgc3RvcmFnZSB9IGZyb20gJy4uLy4uL0ZpcmViYXNlL0ZpcmViYXNlJztcclxuaW1wb3J0IHsgZG9jLCBnZXREb2NzLCB1cGRhdGVEb2MgfSBmcm9tICdmaXJlYmFzZS9maXJlc3RvcmUnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IGdldERvd25sb2FkVVJMLCBsaXN0QWxsLCByZWYgfSBmcm9tICdmaXJlYmFzZS9zdG9yYWdlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15Y291cnNlc0NhcmQoeyBjb3Vyc2VUaXRsZSwgSW5zdE5hbWUsIGlkLCB1c2VyaWQgfSkge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgY29uc3QgW3N0dWRlbnRzLCBzZXRTdHVkZW50c10gPSBSZWFjdC51c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKTtcclxuICAgIC8vY29uc3QgW3VzZXJJZCwgc2V0VXNlcklkXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW2N1cnJlbnRDb3Vyc2VzLCBzZXRDdXJyZW50Q291cnNlc10gPSBSZWFjdC51c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW2lzQ291cnNlUGFnZSwgc2V0SXNDb3Vyc2VQYWdlXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtmaWxlTGlzdCwgc2V0RmlsZUxpc3RdID0gUmVhY3QudXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3RyaW1lZENvdXJzZSwgc2V0VHJpbWVkQ291cnNlXSA9IFJlYWN0LnVzZVN0YXRlKFtdKTtcclxuXHJcblxyXG5cclxuICAgIC8vY29uc3QgY3VycmVudFN0dWRlbnQgPSBzdHVkZW50cy5maW5kKHMgPT4gcy5pZCA9PT0gdXNlcklkKT8uYXR0cmlidXRlcy5yZWdpc3RlcmRjb3Vyc2VzXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGF1dGggPSBnZXRBdXRoKGFwcCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGZldGNoU3R1ZGVudHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0dWRlbnRDb2xsZWN0aW9uID0gY29sbGVjdGlvbihkYiwgJ1N0dWRlbnQnKTtcclxuICAgICAgICAgICAgY29uc3Qgc3R1ZGVudFNuYXBzaG90ID0gYXdhaXQgZ2V0RG9jcyhzdHVkZW50Q29sbGVjdGlvbik7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0dWRlbnRMaXN0ID0gc3R1ZGVudFNuYXBzaG90LmRvY3MubWFwKChkb2MpID0+ICh7XHJcbiAgICAgICAgICAgICAgICBpZDogZG9jLmlkLFxyXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlczogZG9jLmRhdGEoKSxcclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICBzZXRTdHVkZW50cyhzdHVkZW50TGlzdCk7XHJcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIGNvbnN0IHVuc3Vic2NyaWJlID0gYXV0aC5vbkF1dGhTdGF0ZUNoYW5nZWQodXNlciA9PiB7XHJcbiAgICAgICAgLy8gICAgIGlmICh1c2VyKSB7XHJcbiAgICAgICAgLy8gICAgICAgICBzZXRVc2VySWQodXNlci51aWQpO1xyXG4gICAgICAgIC8vICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgICAgICAgc2V0VXNlcklkKG51bGwpO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSk7XHJcblxyXG4gICAgICAgIGZldGNoU3R1ZGVudHMoKTtcclxuXHJcbiAgICAgICAgLy8gcmV0dXJuICgpID0+IHVuc3Vic2NyaWJlKCk7XHJcbiAgICB9LCBbdXNlcmlkXSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoc3R1ZGVudHMubGVuZ3RoID4gMCAmJiB1c2VyaWQpIHtcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudFN0dWRlbnQgPSBzdHVkZW50cy5maW5kKHMgPT4gcy5pZCA9PT0gdXNlcmlkKT8uYXR0cmlidXRlcy5yZWdpc3RlcmRjb3Vyc2VzO1xyXG4gICAgICAgICAgICBpZiAoY3VycmVudFN0dWRlbnQpIHtcclxuICAgICAgICAgICAgICAgIHNldEN1cnJlbnRDb3Vyc2VzKGN1cnJlbnRTdHVkZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtzdHVkZW50cywgdXNlcmlkXSk7XHJcblxyXG5cclxuICAgIGNvbnNvbGUubG9nKHVzZXJpZClcclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBoYW5kZWxEcm9wKGlkKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgLy8gRmluZCB0aGUgaW5kZXggb2YgdGhlIGNvdXJzZSB3aXRoIHRoZSBnaXZlbiBpZCBpbiB0aGUgY3VycmVudENvdXJzZXMgYXJyYXlcclxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBjdXJyZW50Q291cnNlcy5maW5kSW5kZXgoY291cnNlID0+IGNvdXJzZSA9PT0gaWQpO1xyXG4gICAgICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGUgY291cnNlIGlzIGZvdW5kLCByZW1vdmUgaXQgZnJvbSB0aGUgY3VycmVudENvdXJzZXMgYXJyYXlcclxuICAgICAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRDb3Vyc2VzID0gWy4uLmN1cnJlbnRDb3Vyc2VzXTtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZWRDb3Vyc2VzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgICAgICBzZXRDdXJyZW50Q291cnNlcyh1cGRhdGVkQ291cnNlcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gVXBkYXRlIHRoZSBjdXJyZW50IHN0dWRlbnQncyByZWdpc3RlcmVkIGNvdXJzZXMgaW4gdGhlIGRhdGFiYXNlXHJcbiAgICAgICAgICAgICAgICAvLyBjb25zdCBzdHVkZW50RG9jUmVmID0gY29sbGVjdGlvbihkYiwgJ1N0dWRlbnQnLCB1c2VySWQpO1xyXG4gICAgICAgICAgICAgICAgLy8gYXdhaXQgc3R1ZGVudERvY1JlZi51cGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIHJlZ2lzdGVyZGNvdXJzZXM6IHVwZGF0ZWRDb3Vyc2VzXHJcbiAgICAgICAgICAgICAgICAvLyB9KTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHVzZXJpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdHVkZW50UmVmID0gZG9jKGRiLCAnU3R1ZGVudCcsIHVzZXJpZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHVwZGF0ZURvYyhzdHVkZW50UmVmLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWdpc3RlcmRjb3Vyc2VzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB1cGRhdGVkQ291cnNlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCF1c2VyaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0NvdXJzZSBkcm9wcGVkIHN1Y2Nlc3NmdWxseScpO1xyXG4gICAgICAgICAgICAgICAgcm91dGVyLnJlbG9hZCgpXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGRyb3AgY291cnNlOicsIGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBoYW5kZWxDb3Vyc2VGaWxlcyhpZCwgY291cnNlTmFtZSkge1xyXG4gICAgICAgIHNldElzQ291cnNlUGFnZShwID0+ICFwKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGNvdXJzZU5hbWUpXHJcbiAgICAgICAgY29uc3QgQ291cnNlTmFtZVRyaW1lZCA9IGNvdXJzZU5hbWUucmVwbGFjZSgvXFxzKy9nLCAnJylcclxuICAgICAgICBzZXRUcmltZWRDb3Vyc2UoQ291cnNlTmFtZVRyaW1lZClcclxuICAgICAgICBjb25zb2xlLmxvZyhDb3Vyc2VOYW1lVHJpbWVkKVxyXG4gICAgICAgIGNvbnN0IGZpbGVMaXN0UmVmID0gcmVmKHN0b3JhZ2UsIGAke0NvdXJzZU5hbWVUcmltZWR9L2ApOyAvLyBEZWNsYXJlIGFuZCBpbml0aWFsaXplIGZpbGVMaXN0UmVmXHJcblxyXG4gICAgICAgIGxpc3RBbGwoZmlsZUxpc3RSZWYpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICBzZXRGaWxlTGlzdChbXSk7IC8vIENsZWFyIGZpbGVMaXN0IHN0YXRlXHJcbiAgICAgICAgICAgIHJlcy5pdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBnZXREb3dubG9hZFVSTChpdGVtKS50aGVuKCh1cmwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRGaWxlTGlzdChwcmUgPT4gWy4uLnByZSwgdXJsXSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhmaWxlTGlzdClcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaXNDb3Vyc2VQYWdlID8gPGRpdj5Db3Vyc2UgUGFnZVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRJc0NvdXJzZVBhZ2UocCA9PiAhcCl9PmJhY2sgdG8gbXkgY291cnNlczwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIHtmaWxlTGlzdC5tYXAoKHVybCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnJywgY29sb3I6ICcnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXt1cmx9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiBzdHlsZT17e2NvbG9yOlwiYmxhY2tcIn19Pnt0cmltZWRDb3Vyc2UgKyBcIi9cIiArIChpbmRleCArIDEpfTwvYT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+IDpcclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZCBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjMUFCQzlDJywgY29sb3I6ICcjNDU0NTQ1JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgZ3V0dGVyQm90dG9tIHZhcmlhbnQ9XCJoN1wiIGNvbXBvbmVudD1cImRpdlwiIHN4PXt7IGZvbnRXZWlnaHQ6ICcxMDAwJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb3Vyc2UgTmFtZSA6IHtjb3Vyc2VUaXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGd1dHRlckJvdHRvbSB2YXJpYW50PVwiaDdcIiBjb21wb25lbnQ9XCJkaXZcIiBzeD17eyBmb250V2VpZ2h0OiAnNzAwJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnN0cnVjdG9yIE5hbWUgOiB7SW5zdE5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkQWN0aW9ucz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gc2l6ZT1cInNtYWxsXCIgc3g9e3sgYmFja2dyb3VuZENvbG9yOiAnIzFBQkM5QycsIGNvbG9yOiAnd2hpdGUnLCBtYXJnaW46ICcwIDAgMTBweCAwJywgYm9yZGVyOiAnMXB4IHNvbGlkJyB9fSBvbkNsaWNrPXsoKSA9PiBoYW5kZWxEcm9wKGlkKX0+RHJvcCBjb3Vyc2U8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gc2l6ZT1cInNtYWxsXCIgc3g9e3sgYmFja2dyb3VuZENvbG9yOiAnIzFBQkM5QycsIGNvbG9yOiAnd2hpdGUnLCBtYXJnaW46ICcwIDAgMTBweCAwJywgYm9yZGVyOiAnMXB4IHNvbGlkJyB9fSBvbkNsaWNrPXsoKSA9PiBoYW5kZWxDb3Vyc2VGaWxlcyhpZCwgY291cnNlVGl0bGUpfT5Db3Vyc2UgUGFnZTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRBY3Rpb25zPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2ID5cclxuXHJcbiAgICApO1xyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwiQ2FyZCIsIkNhcmRBY3Rpb25zIiwiQ2FyZENvbnRlbnQiLCJCdXR0b24iLCJUeXBvZ3JhcGh5IiwiZ2V0QXV0aCIsImFwcCIsImNvbGxlY3Rpb24iLCJkYiIsInN0b3JhZ2UiLCJkb2MiLCJnZXREb2NzIiwidXBkYXRlRG9jIiwidXNlUm91dGVyIiwiZ2V0RG93bmxvYWRVUkwiLCJsaXN0QWxsIiwicmVmIiwiTXljb3Vyc2VzQ2FyZCIsImNvdXJzZVRpdGxlIiwiSW5zdE5hbWUiLCJpZCIsInVzZXJpZCIsInJvdXRlciIsInN0dWRlbnRzIiwic2V0U3R1ZGVudHMiLCJ1c2VTdGF0ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiY3VycmVudENvdXJzZXMiLCJzZXRDdXJyZW50Q291cnNlcyIsImlzQ291cnNlUGFnZSIsInNldElzQ291cnNlUGFnZSIsImZpbGVMaXN0Iiwic2V0RmlsZUxpc3QiLCJ0cmltZWRDb3Vyc2UiLCJzZXRUcmltZWRDb3Vyc2UiLCJ1c2VFZmZlY3QiLCJhdXRoIiwiZmV0Y2hTdHVkZW50cyIsInN0dWRlbnRDb2xsZWN0aW9uIiwic3R1ZGVudFNuYXBzaG90Iiwic3R1ZGVudExpc3QiLCJkb2NzIiwibWFwIiwiYXR0cmlidXRlcyIsImRhdGEiLCJsZW5ndGgiLCJjdXJyZW50U3R1ZGVudCIsImZpbmQiLCJzIiwicmVnaXN0ZXJkY291cnNlcyIsImNvbnNvbGUiLCJsb2ciLCJoYW5kZWxEcm9wIiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJjb3Vyc2UiLCJ1cGRhdGVkQ291cnNlcyIsInNwbGljZSIsInN0dWRlbnRSZWYiLCJlcnIiLCJkaXYiLCJyZWxvYWQiLCJlcnJvciIsImhhbmRlbENvdXJzZUZpbGVzIiwiY291cnNlTmFtZSIsInAiLCJDb3Vyc2VOYW1lVHJpbWVkIiwicmVwbGFjZSIsImZpbGVMaXN0UmVmIiwidGhlbiIsInJlcyIsIml0ZW1zIiwiZm9yRWFjaCIsIml0ZW0iLCJ1cmwiLCJwcmUiLCJvbkNsaWNrIiwic3giLCJ3aWR0aCIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiYSIsImhyZWYiLCJ0YXJnZXQiLCJyZWwiLCJzdHlsZSIsImd1dHRlckJvdHRvbSIsInZhcmlhbnQiLCJjb21wb25lbnQiLCJmb250V2VpZ2h0Iiwic2l6ZSIsIm1hcmdpbiIsImJvcmRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./component/Student/MycoursesCard.js\n"));

/***/ })

});