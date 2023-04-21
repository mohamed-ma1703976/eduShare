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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MycoursesCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Card */ \"./node_modules/@mui/material/esm/Card/index.js\");\n/* harmony import */ var _mui_material_CardActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/CardActions */ \"./node_modules/@mui/material/esm/CardActions/index.js\");\n/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/CardContent */ \"./node_modules/@mui/material/esm/CardContent/index.js\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Button */ \"./node_modules/@mui/material/esm/Button/index.js\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Typography */ \"./node_modules/@mui/material/esm/Typography/index.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Firebase/Firebase */ \"./Firebase/Firebase.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/storage */ \"./node_modules/firebase/storage/dist/esm/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nfunction MycoursesCard(param) {\n    let { courseTitle , InstName , id , userid , setIsCoursePage , isCoursePage  } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    console.log(isCoursePage);\n    const [students, setStudents] = react__WEBPACK_IMPORTED_MODULE_1__.useState([]);\n    const [loading, setLoading] = react__WEBPACK_IMPORTED_MODULE_1__.useState(true);\n    //const [userId, setUserId] = React.useState(null);\n    const [currentCourses, setCurrentCourses] = react__WEBPACK_IMPORTED_MODULE_1__.useState();\n    //const [isCoursePage, setIsCoursePage] = React.useState(false);\n    const [fileList, setFileList] = react__WEBPACK_IMPORTED_MODULE_1__.useState([]);\n    const [trimedCourse, setTrimedCourse] = react__WEBPACK_IMPORTED_MODULE_1__.useState([]);\n    //const currentStudent = students.find(s => s.id === userId)?.attributes.registerdcourses\n    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>{\n        const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_3__.app);\n        const fetchStudents = async ()=>{\n            const studentCollection = (0,_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_3__.collection)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_3__.db, \"Student\");\n            const studentSnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.getDocs)(studentCollection);\n            const studentList = studentSnapshot.docs.map((doc)=>({\n                    id: doc.id,\n                    attributes: doc.data()\n                }));\n            setStudents(studentList);\n            setLoading(false);\n        };\n        // const unsubscribe = auth.onAuthStateChanged(user => {\n        //     if (user) {\n        //         setUserId(user.uid);\n        //     } else {\n        //         setUserId(null);\n        //     }\n        // });\n        fetchStudents();\n    // return () => unsubscribe();\n    }, [\n        userid\n    ]);\n    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>{\n        if (students.length > 0 && userid) {\n            var _students_find;\n            const currentStudent = (_students_find = students.find((s)=>s.id === userid)) === null || _students_find === void 0 ? void 0 : _students_find.attributes.registerdcourses;\n            if (currentStudent) {\n                setCurrentCourses(currentStudent);\n            }\n        }\n    }, [\n        students,\n        userid\n    ]);\n    console.log(userid);\n    async function handelDrop(id) {\n        try {\n            // Find the index of the course with the given id in the currentCourses array\n            const index = currentCourses.findIndex((course)=>course === id);\n            if (index !== -1) {\n                // If the course is found, remove it from the currentCourses array\n                const updatedCourses = [\n                    ...currentCourses\n                ];\n                updatedCourses.splice(index, 1);\n                setCurrentCourses(updatedCourses);\n                // Update the current student's registered courses in the database\n                // const studentDocRef = collection(db, 'Student', userId);\n                // await studentDocRef.update({\n                //     registerdcourses: updatedCourses\n                // });\n                try {\n                    if (userid) {\n                        const studentRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_3__.db, \"Student\", userid);\n                        await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.updateDoc)(studentRef, {\n                            registerdcourses: updatedCourses\n                        });\n                    }\n                } catch (err) {\n                    console.log(err);\n                }\n                if (!userid) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"Loading...\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior-firebase-update\\\\eduShare\\\\component\\\\Student\\\\MycoursesCard.js\",\n                        lineNumber: 98,\n                        columnNumber: 28\n                    }, this);\n                }\n                console.log(\"Course dropped successfully\");\n                router.reload();\n            }\n        } catch (error) {\n            console.error(\"Failed to drop course:\", error);\n        }\n    }\n    async function handelCourseFiles(id, courseName) {\n        setIsCoursePage((p)=>!p);\n        console.log(courseName);\n        const CourseNameTrimed = courseName.replace(/\\s+/g, \"\");\n        setTrimedCourse(CourseNameTrimed);\n        console.log(CourseNameTrimed);\n        const fileListRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_6__.ref)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_3__.storage, \"\".concat(CourseNameTrimed, \"/\")); // Declare and initialize fileListRef\n        (0,firebase_storage__WEBPACK_IMPORTED_MODULE_6__.listAll)(fileListRef).then((res)=>{\n            setFileList([]); // Clear fileList state\n            res.items.forEach((item)=>{\n                (0,firebase_storage__WEBPACK_IMPORTED_MODULE_6__.getDownloadURL)(item).then((url)=>{\n                    setFileList((pre)=>[\n                            ...pre,\n                            url\n                        ]);\n                });\n            });\n        });\n    }\n    console.log(fileList);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: isCoursePage ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    gutterBottom: true,\n                    variant: \"h7\",\n                    component: \"div\",\n                    sx: {\n                        fontWeight: \"1000\"\n                    },\n                    children: \"Course Content\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior-firebase-update\\\\eduShare\\\\component\\\\Student\\\\MycoursesCard.js\",\n                    lineNumber: 132,\n                    columnNumber: 37\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                    onClick: ()=>setIsCoursePage((p)=>!p),\n                    children: \"back to my courses\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior-firebase-update\\\\eduShare\\\\component\\\\Student\\\\MycoursesCard.js\",\n                    lineNumber: 137,\n                    columnNumber: 21\n                }, this),\n                fileList.map((url, index)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Card__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                            sx: {\n                                width: \"100%\",\n                                backgroundColor: \"\",\n                                color: \"\"\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: url,\n                                    target: \"_blank\",\n                                    rel: \"noopener noreferrer\",\n                                    style: {\n                                        color: \"black\",\n                                        textDecoration: \"none\"\n                                    },\n                                    children: trimedCourse + \"/\" + (index + 1)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior-firebase-update\\\\eduShare\\\\component\\\\Student\\\\MycoursesCard.js\",\n                                    lineNumber: 145,\n                                    columnNumber: 41\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior-firebase-update\\\\eduShare\\\\component\\\\Student\\\\MycoursesCard.js\",\n                                lineNumber: 142,\n                                columnNumber: 37\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior-firebase-update\\\\eduShare\\\\component\\\\Student\\\\MycoursesCard.js\",\n                            lineNumber: 141,\n                            columnNumber: 33\n                        }, this)\n                    }, index, false, {\n                        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior-firebase-update\\\\eduShare\\\\component\\\\Student\\\\MycoursesCard.js\",\n                        lineNumber: 140,\n                        columnNumber: 29\n                    }, this);\n                })\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior-firebase-update\\\\eduShare\\\\component\\\\Student\\\\MycoursesCard.js\",\n            lineNumber: 132,\n            columnNumber: 32\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Card__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n            sx: {\n                width: \"100%\",\n                backgroundColor: \"#1ABC9C\",\n                color: \"#454545\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            gutterBottom: true,\n                            variant: \"h7\",\n                            component: \"div\",\n                            sx: {\n                                fontWeight: \"1000\"\n                            },\n                            children: [\n                                \"Course Name : \",\n                                courseTitle\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior-firebase-update\\\\eduShare\\\\component\\\\Student\\\\MycoursesCard.js\",\n                            lineNumber: 162,\n                            columnNumber: 29\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            gutterBottom: true,\n                            variant: \"h7\",\n                            component: \"div\",\n                            sx: {\n                                fontWeight: \"700\"\n                            },\n                            children: [\n                                \"Instructor Name : \",\n                                InstName\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior-firebase-update\\\\eduShare\\\\component\\\\Student\\\\MycoursesCard.js\",\n                            lineNumber: 165,\n                            columnNumber: 29\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior-firebase-update\\\\eduShare\\\\component\\\\Student\\\\MycoursesCard.js\",\n                    lineNumber: 161,\n                    columnNumber: 25\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_CardActions__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                            size: \"small\",\n                            sx: {\n                                backgroundColor: \"#1ABC9C\",\n                                color: \"white\",\n                                margin: \"0 0 10px 0\",\n                                border: \"1px solid\"\n                            },\n                            onClick: ()=>handelDrop(id),\n                            children: \"Drop course\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior-firebase-update\\\\eduShare\\\\component\\\\Student\\\\MycoursesCard.js\",\n                            lineNumber: 170,\n                            columnNumber: 29\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                            size: \"small\",\n                            sx: {\n                                backgroundColor: \"#1ABC9C\",\n                                color: \"white\",\n                                margin: \"0 0 10px 0\",\n                                border: \"1px solid\"\n                            },\n                            onClick: ()=>handelCourseFiles(id, courseTitle),\n                            children: \"Course Page\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior-firebase-update\\\\eduShare\\\\component\\\\Student\\\\MycoursesCard.js\",\n                            lineNumber: 171,\n                            columnNumber: 29\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior-firebase-update\\\\eduShare\\\\component\\\\Student\\\\MycoursesCard.js\",\n                    lineNumber: 169,\n                    columnNumber: 25\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior-firebase-update\\\\eduShare\\\\component\\\\Student\\\\MycoursesCard.js\",\n            lineNumber: 160,\n            columnNumber: 21\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior-firebase-update\\\\eduShare\\\\component\\\\Student\\\\MycoursesCard.js\",\n        lineNumber: 130,\n        columnNumber: 9\n    }, this);\n}\n_s(MycoursesCard, \"vawgc8WATqlINaEMz0reXvnqSis=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = MycoursesCard;\nvar _c;\n$RefreshReg$(_c, \"MycoursesCard\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVMsSUFBTTdCLFdBQVdqQztzQ0FBSzs7Ozs7O3NDQUNuSiw4REFBQ2pCLDREQUFNQTs0QkFBQ3lGLE1BQUs7NEJBQVFaLElBQUk7Z0NBQUVJLGlCQUFpQjtnQ0FBV0MsT0FBTztnQ0FBU1EsUUFBUTtnQ0FBY0MsUUFBUTs0QkFBWTs0QkFBR1osU0FBUyxJQUFNbEIsa0JBQWtCNUMsSUFBSUY7c0NBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7O2dCQUV4Szs7Ozs7O0FBSzNCLENBQUM7R0FyS3VCRDs7UUFDTEosa0RBQVNBOzs7S0FESkkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L1N0dWRlbnQvTXljb3Vyc2VzQ2FyZC5qcz82NTQ3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IENhcmQgZnJvbSAnQG11aS9tYXRlcmlhbC9DYXJkJztcclxuaW1wb3J0IENhcmRBY3Rpb25zIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ2FyZEFjdGlvbnMnO1xyXG5pbXBvcnQgQ2FyZENvbnRlbnQgZnJvbSAnQG11aS9tYXRlcmlhbC9DYXJkQ29udGVudCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG11aS9tYXRlcmlhbC9CdXR0b24nO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgeyBnZXRBdXRoIH0gZnJvbSAnZmlyZWJhc2UvYXV0aCc7XHJcbmltcG9ydCB7IGFwcCwgY29sbGVjdGlvbiwgZGIsIHN0b3JhZ2UgfSBmcm9tICcuLi8uLi9GaXJlYmFzZS9GaXJlYmFzZSc7XHJcbmltcG9ydCB7IGRvYywgZ2V0RG9jcywgdXBkYXRlRG9jIH0gZnJvbSAnZmlyZWJhc2UvZmlyZXN0b3JlJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBnZXREb3dubG9hZFVSTCwgbGlzdEFsbCwgcmVmIH0gZnJvbSAnZmlyZWJhc2Uvc3RvcmFnZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeWNvdXJzZXNDYXJkKHsgY291cnNlVGl0bGUsIEluc3ROYW1lLCBpZCwgdXNlcmlkICxzZXRJc0NvdXJzZVBhZ2UsaXNDb3Vyc2VQYWdlfSkge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgY29uc29sZS5sb2coaXNDb3Vyc2VQYWdlKVxyXG5cclxuICAgIGNvbnN0IFtzdHVkZW50cywgc2V0U3R1ZGVudHNdID0gUmVhY3QudXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XHJcbiAgICAvL2NvbnN0IFt1c2VySWQsIHNldFVzZXJJZF0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtjdXJyZW50Q291cnNlcywgc2V0Q3VycmVudENvdXJzZXNdID0gUmVhY3QudXNlU3RhdGUoKTtcclxuICAgIC8vY29uc3QgW2lzQ291cnNlUGFnZSwgc2V0SXNDb3Vyc2VQYWdlXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtmaWxlTGlzdCwgc2V0RmlsZUxpc3RdID0gUmVhY3QudXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3RyaW1lZENvdXJzZSwgc2V0VHJpbWVkQ291cnNlXSA9IFJlYWN0LnVzZVN0YXRlKFtdKTtcclxuXHJcblxyXG5cclxuICAgIC8vY29uc3QgY3VycmVudFN0dWRlbnQgPSBzdHVkZW50cy5maW5kKHMgPT4gcy5pZCA9PT0gdXNlcklkKT8uYXR0cmlidXRlcy5yZWdpc3RlcmRjb3Vyc2VzXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGF1dGggPSBnZXRBdXRoKGFwcCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGZldGNoU3R1ZGVudHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0dWRlbnRDb2xsZWN0aW9uID0gY29sbGVjdGlvbihkYiwgJ1N0dWRlbnQnKTtcclxuICAgICAgICAgICAgY29uc3Qgc3R1ZGVudFNuYXBzaG90ID0gYXdhaXQgZ2V0RG9jcyhzdHVkZW50Q29sbGVjdGlvbik7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0dWRlbnRMaXN0ID0gc3R1ZGVudFNuYXBzaG90LmRvY3MubWFwKChkb2MpID0+ICh7XHJcbiAgICAgICAgICAgICAgICBpZDogZG9jLmlkLFxyXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlczogZG9jLmRhdGEoKSxcclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICBzZXRTdHVkZW50cyhzdHVkZW50TGlzdCk7XHJcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIGNvbnN0IHVuc3Vic2NyaWJlID0gYXV0aC5vbkF1dGhTdGF0ZUNoYW5nZWQodXNlciA9PiB7XHJcbiAgICAgICAgLy8gICAgIGlmICh1c2VyKSB7XHJcbiAgICAgICAgLy8gICAgICAgICBzZXRVc2VySWQodXNlci51aWQpO1xyXG4gICAgICAgIC8vICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgICAgICAgc2V0VXNlcklkKG51bGwpO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSk7XHJcblxyXG4gICAgICAgIGZldGNoU3R1ZGVudHMoKTtcclxuXHJcbiAgICAgICAgLy8gcmV0dXJuICgpID0+IHVuc3Vic2NyaWJlKCk7XHJcbiAgICB9LCBbdXNlcmlkXSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoc3R1ZGVudHMubGVuZ3RoID4gMCAmJiB1c2VyaWQpIHtcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudFN0dWRlbnQgPSBzdHVkZW50cy5maW5kKHMgPT4gcy5pZCA9PT0gdXNlcmlkKT8uYXR0cmlidXRlcy5yZWdpc3RlcmRjb3Vyc2VzO1xyXG4gICAgICAgICAgICBpZiAoY3VycmVudFN0dWRlbnQpIHtcclxuICAgICAgICAgICAgICAgIHNldEN1cnJlbnRDb3Vyc2VzKGN1cnJlbnRTdHVkZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtzdHVkZW50cywgdXNlcmlkXSk7XHJcblxyXG5cclxuICAgIGNvbnNvbGUubG9nKHVzZXJpZClcclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBoYW5kZWxEcm9wKGlkKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgLy8gRmluZCB0aGUgaW5kZXggb2YgdGhlIGNvdXJzZSB3aXRoIHRoZSBnaXZlbiBpZCBpbiB0aGUgY3VycmVudENvdXJzZXMgYXJyYXlcclxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBjdXJyZW50Q291cnNlcy5maW5kSW5kZXgoY291cnNlID0+IGNvdXJzZSA9PT0gaWQpO1xyXG4gICAgICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGUgY291cnNlIGlzIGZvdW5kLCByZW1vdmUgaXQgZnJvbSB0aGUgY3VycmVudENvdXJzZXMgYXJyYXlcclxuICAgICAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRDb3Vyc2VzID0gWy4uLmN1cnJlbnRDb3Vyc2VzXTtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZWRDb3Vyc2VzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgICAgICBzZXRDdXJyZW50Q291cnNlcyh1cGRhdGVkQ291cnNlcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gVXBkYXRlIHRoZSBjdXJyZW50IHN0dWRlbnQncyByZWdpc3RlcmVkIGNvdXJzZXMgaW4gdGhlIGRhdGFiYXNlXHJcbiAgICAgICAgICAgICAgICAvLyBjb25zdCBzdHVkZW50RG9jUmVmID0gY29sbGVjdGlvbihkYiwgJ1N0dWRlbnQnLCB1c2VySWQpO1xyXG4gICAgICAgICAgICAgICAgLy8gYXdhaXQgc3R1ZGVudERvY1JlZi51cGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIHJlZ2lzdGVyZGNvdXJzZXM6IHVwZGF0ZWRDb3Vyc2VzXHJcbiAgICAgICAgICAgICAgICAvLyB9KTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHVzZXJpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdHVkZW50UmVmID0gZG9jKGRiLCAnU3R1ZGVudCcsIHVzZXJpZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHVwZGF0ZURvYyhzdHVkZW50UmVmLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWdpc3RlcmRjb3Vyc2VzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB1cGRhdGVkQ291cnNlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCF1c2VyaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0NvdXJzZSBkcm9wcGVkIHN1Y2Nlc3NmdWxseScpO1xyXG4gICAgICAgICAgICAgICAgcm91dGVyLnJlbG9hZCgpXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGRyb3AgY291cnNlOicsIGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBoYW5kZWxDb3Vyc2VGaWxlcyhpZCwgY291cnNlTmFtZSkge1xyXG4gICAgICAgIHNldElzQ291cnNlUGFnZShwID0+ICFwKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGNvdXJzZU5hbWUpXHJcbiAgICAgICAgY29uc3QgQ291cnNlTmFtZVRyaW1lZCA9IGNvdXJzZU5hbWUucmVwbGFjZSgvXFxzKy9nLCAnJylcclxuICAgICAgICBzZXRUcmltZWRDb3Vyc2UoQ291cnNlTmFtZVRyaW1lZClcclxuICAgICAgICBjb25zb2xlLmxvZyhDb3Vyc2VOYW1lVHJpbWVkKVxyXG4gICAgICAgIGNvbnN0IGZpbGVMaXN0UmVmID0gcmVmKHN0b3JhZ2UsIGAke0NvdXJzZU5hbWVUcmltZWR9L2ApOyAvLyBEZWNsYXJlIGFuZCBpbml0aWFsaXplIGZpbGVMaXN0UmVmXHJcblxyXG4gICAgICAgIGxpc3RBbGwoZmlsZUxpc3RSZWYpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICBzZXRGaWxlTGlzdChbXSk7IC8vIENsZWFyIGZpbGVMaXN0IHN0YXRlXHJcbiAgICAgICAgICAgIHJlcy5pdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBnZXREb3dubG9hZFVSTChpdGVtKS50aGVuKCh1cmwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRGaWxlTGlzdChwcmUgPT4gWy4uLnByZSwgdXJsXSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhmaWxlTGlzdClcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaXNDb3Vyc2VQYWdlID8gPGRpdj48VHlwb2dyYXBoeSBndXR0ZXJCb3R0b20gdmFyaWFudD1cImg3XCIgY29tcG9uZW50PVwiZGl2XCIgc3g9e3sgZm9udFdlaWdodDogJzEwMDAnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIENvdXJzZSBDb250ZW50XHJcbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldElzQ291cnNlUGFnZShwID0+ICFwKX0+YmFjayB0byBteSBjb3Vyc2VzPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAge2ZpbGVMaXN0Lm1hcCgodXJsLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICcnLCBjb2xvcjogJycgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudD5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17dXJsfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgc3R5bGU9e3sgY29sb3I6IFwiYmxhY2tcIiwgdGV4dERlY29yYXRpb246IFwibm9uZVwiIH19Pnt0cmltZWRDb3Vyc2UgKyBcIi9cIiArIChpbmRleCArIDEpfTwvYT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+IDpcclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZCBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjMUFCQzlDJywgY29sb3I6ICcjNDU0NTQ1JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgZ3V0dGVyQm90dG9tIHZhcmlhbnQ9XCJoN1wiIGNvbXBvbmVudD1cImRpdlwiIHN4PXt7IGZvbnRXZWlnaHQ6ICcxMDAwJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb3Vyc2UgTmFtZSA6IHtjb3Vyc2VUaXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGd1dHRlckJvdHRvbSB2YXJpYW50PVwiaDdcIiBjb21wb25lbnQ9XCJkaXZcIiBzeD17eyBmb250V2VpZ2h0OiAnNzAwJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnN0cnVjdG9yIE5hbWUgOiB7SW5zdE5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkQWN0aW9ucz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gc2l6ZT1cInNtYWxsXCIgc3g9e3sgYmFja2dyb3VuZENvbG9yOiAnIzFBQkM5QycsIGNvbG9yOiAnd2hpdGUnLCBtYXJnaW46ICcwIDAgMTBweCAwJywgYm9yZGVyOiAnMXB4IHNvbGlkJyB9fSBvbkNsaWNrPXsoKSA9PiBoYW5kZWxEcm9wKGlkKX0+RHJvcCBjb3Vyc2U8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gc2l6ZT1cInNtYWxsXCIgc3g9e3sgYmFja2dyb3VuZENvbG9yOiAnIzFBQkM5QycsIGNvbG9yOiAnd2hpdGUnLCBtYXJnaW46ICcwIDAgMTBweCAwJywgYm9yZGVyOiAnMXB4IHNvbGlkJyB9fSBvbkNsaWNrPXsoKSA9PiBoYW5kZWxDb3Vyc2VGaWxlcyhpZCwgY291cnNlVGl0bGUpfT5Db3Vyc2UgUGFnZTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRBY3Rpb25zPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2ID5cclxuXHJcbiAgICApO1xyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwiQ2FyZCIsIkNhcmRBY3Rpb25zIiwiQ2FyZENvbnRlbnQiLCJCdXR0b24iLCJUeXBvZ3JhcGh5IiwiZ2V0QXV0aCIsImFwcCIsImNvbGxlY3Rpb24iLCJkYiIsInN0b3JhZ2UiLCJkb2MiLCJnZXREb2NzIiwidXBkYXRlRG9jIiwidXNlUm91dGVyIiwiZ2V0RG93bmxvYWRVUkwiLCJsaXN0QWxsIiwicmVmIiwiTXljb3Vyc2VzQ2FyZCIsImNvdXJzZVRpdGxlIiwiSW5zdE5hbWUiLCJpZCIsInVzZXJpZCIsInNldElzQ291cnNlUGFnZSIsImlzQ291cnNlUGFnZSIsInJvdXRlciIsImNvbnNvbGUiLCJsb2ciLCJzdHVkZW50cyIsInNldFN0dWRlbnRzIiwidXNlU3RhdGUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImN1cnJlbnRDb3Vyc2VzIiwic2V0Q3VycmVudENvdXJzZXMiLCJmaWxlTGlzdCIsInNldEZpbGVMaXN0IiwidHJpbWVkQ291cnNlIiwic2V0VHJpbWVkQ291cnNlIiwidXNlRWZmZWN0IiwiYXV0aCIsImZldGNoU3R1ZGVudHMiLCJzdHVkZW50Q29sbGVjdGlvbiIsInN0dWRlbnRTbmFwc2hvdCIsInN0dWRlbnRMaXN0IiwiZG9jcyIsIm1hcCIsImF0dHJpYnV0ZXMiLCJkYXRhIiwibGVuZ3RoIiwiY3VycmVudFN0dWRlbnQiLCJmaW5kIiwicyIsInJlZ2lzdGVyZGNvdXJzZXMiLCJoYW5kZWxEcm9wIiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJjb3Vyc2UiLCJ1cGRhdGVkQ291cnNlcyIsInNwbGljZSIsInN0dWRlbnRSZWYiLCJlcnIiLCJkaXYiLCJyZWxvYWQiLCJlcnJvciIsImhhbmRlbENvdXJzZUZpbGVzIiwiY291cnNlTmFtZSIsInAiLCJDb3Vyc2VOYW1lVHJpbWVkIiwicmVwbGFjZSIsImZpbGVMaXN0UmVmIiwidGhlbiIsInJlcyIsIml0ZW1zIiwiZm9yRWFjaCIsIml0ZW0iLCJ1cmwiLCJwcmUiLCJndXR0ZXJCb3R0b20iLCJ2YXJpYW50IiwiY29tcG9uZW50Iiwic3giLCJmb250V2VpZ2h0Iiwib25DbGljayIsIndpZHRoIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJhIiwiaHJlZiIsInRhcmdldCIsInJlbCIsInN0eWxlIiwidGV4dERlY29yYXRpb24iLCJzaXplIiwibWFyZ2luIiwiYm9yZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./component/Student/MycoursesCard.js\n"));

/***/ })

});