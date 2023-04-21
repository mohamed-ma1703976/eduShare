"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/Student/coursePage",{

/***/ "./component/Student/MycoursesCard.js":
/*!********************************************!*\
  !*** ./component/Student/MycoursesCard.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MycoursesCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Card */ \"./node_modules/@mui/material/esm/Card/index.js\");\n/* harmony import */ var _mui_material_CardActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/CardActions */ \"./node_modules/@mui/material/esm/CardActions/index.js\");\n/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/CardContent */ \"./node_modules/@mui/material/esm/CardContent/index.js\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Button */ \"./node_modules/@mui/material/esm/Button/index.js\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Typography */ \"./node_modules/@mui/material/esm/Typography/index.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Firebase/Firebase */ \"./Firebase/Firebase.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction MycoursesCard(param) {\n    let { courseTitle , InstName , id , userid  } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    const [students, setStudents] = react__WEBPACK_IMPORTED_MODULE_1__.useState([]);\n    const [loading, setLoading] = react__WEBPACK_IMPORTED_MODULE_1__.useState(true);\n    //const [userId, setUserId] = React.useState(null);\n    const [currentCourses, setCurrentCourses] = react__WEBPACK_IMPORTED_MODULE_1__.useState();\n    //const currentStudent = students.find(s => s.id === userId)?.attributes.registerdcourses\n    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>{\n        const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_3__.app);\n        const fetchStudents = async ()=>{\n            const studentCollection = (0,_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_3__.collection)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_3__.db, \"Student\");\n            const studentSnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.getDocs)(studentCollection);\n            const studentList = studentSnapshot.docs.map((doc)=>({\n                    id: doc.id,\n                    attributes: doc.data()\n                }));\n            setStudents(studentList);\n            setLoading(false);\n        };\n        // const unsubscribe = auth.onAuthStateChanged(user => {\n        //     if (user) {\n        //         setUserId(user.uid);\n        //     } else {\n        //         setUserId(null);\n        //     }\n        // });\n        fetchStudents();\n    // return () => unsubscribe();\n    }, [\n        userid\n    ]);\n    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>{\n        if (students.length > 0 && userid) {\n            var _students_find;\n            const currentStudent = (_students_find = students.find((s)=>s.id === userid)) === null || _students_find === void 0 ? void 0 : _students_find.attributes.registerdcourses;\n            if (currentStudent) {\n                setCurrentCourses(currentStudent);\n            }\n        }\n    }, [\n        students,\n        userid\n    ]);\n    console.log(userid);\n    async function handelDrop(id) {\n        try {\n            // Find the index of the course with the given id in the currentCourses array\n            const index = currentCourses.findIndex((course)=>course === id);\n            if (index !== -1) {\n                // If the course is found, remove it from the currentCourses array\n                const updatedCourses = [\n                    ...currentCourses\n                ];\n                updatedCourses.splice(index, 1);\n                setCurrentCourses(updatedCourses);\n                // Update the current student's registered courses in the database\n                // const studentDocRef = collection(db, 'Student', userId);\n                // await studentDocRef.update({\n                //     registerdcourses: updatedCourses\n                // });\n                try {\n                    if (userid) {\n                        const studentRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_3__.db, \"Student\", userid);\n                        await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.updateDoc)(studentRef, {\n                            registerdcourses: updatedCourses\n                        });\n                    }\n                } catch (err) {\n                    console.log(err);\n                }\n                if (!userid) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"Loading...\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior-firebase-update\\\\eduShare\\\\component\\\\Student\\\\MycoursesCard.js\",\n                        lineNumber: 93,\n                        columnNumber: 28\n                    }, this);\n                }\n                console.log(\"Course dropped successfully\");\n                router.reload();\n            }\n        } catch (error) {\n            console.error(\"Failed to drop course:\", error);\n        }\n    }\n    function handelRoute(id, name) {\n        router.push({\n            pathname: \"/Student/coursePage\",\n            query: {\n                myParam: name\n            }\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Card__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n            sx: {\n                width: \"50%\",\n                backgroundColor: \"#1ABC9C\",\n                color: \"#454545\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                            gutterBottom: true,\n                            variant: \"h7\",\n                            component: \"div\",\n                            sx: {\n                                fontWeight: \"1000\"\n                            },\n                            children: [\n                                \"Course Name : \",\n                                courseTitle\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior-firebase-update\\\\eduShare\\\\component\\\\Student\\\\MycoursesCard.js\",\n                            lineNumber: 120,\n                            columnNumber: 29\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                            gutterBottom: true,\n                            variant: \"h7\",\n                            component: \"div\",\n                            sx: {\n                                fontWeight: \"700\"\n                            },\n                            children: [\n                                \"Instructor Name : \",\n                                InstName\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior-firebase-update\\\\eduShare\\\\component\\\\Student\\\\MycoursesCard.js\",\n                            lineNumber: 123,\n                            columnNumber: 29\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior-firebase-update\\\\eduShare\\\\component\\\\Student\\\\MycoursesCard.js\",\n                    lineNumber: 119,\n                    columnNumber: 25\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_CardActions__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                            size: \"small\",\n                            sx: {\n                                backgroundColor: \"#1ABC9C\",\n                                color: \"white\",\n                                margin: \"0 0 10px 0\",\n                                border: \"1px solid\"\n                            },\n                            onClick: ()=>handelDrop(id),\n                            children: \"Drop course\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior-firebase-update\\\\eduShare\\\\component\\\\Student\\\\MycoursesCard.js\",\n                            lineNumber: 128,\n                            columnNumber: 29\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                            size: \"small\",\n                            sx: {\n                                backgroundColor: \"#1ABC9C\",\n                                color: \"white\",\n                                margin: \"0 0 10px 0\",\n                                border: \"1px solid\"\n                            },\n                            onClick: ()=>handelRoute(id, courseTitle),\n                            children: \"Course Page\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior-firebase-update\\\\eduShare\\\\component\\\\Student\\\\MycoursesCard.js\",\n                            lineNumber: 129,\n                            columnNumber: 29\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior-firebase-update\\\\eduShare\\\\component\\\\Student\\\\MycoursesCard.js\",\n                    lineNumber: 127,\n                    columnNumber: 25\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior-firebase-update\\\\eduShare\\\\component\\\\Student\\\\MycoursesCard.js\",\n            lineNumber: 118,\n            columnNumber: 21\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior-firebase-update\\\\eduShare\\\\component\\\\Student\\\\MycoursesCard.js\",\n        lineNumber: 115,\n        columnNumber: 9\n    }, this);\n}\n_s(MycoursesCard, \"RKEPWSPlYsPepGOPoLTGYlrpInU=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = MycoursesCard;\nvar _c;\n$RefreshReg$(_c, \"MycoursesCard\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnQvU3R1ZGVudC9NeWNvdXJzZXNDYXJkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUErQjtBQUNPO0FBQ2M7QUFDQTtBQUNWO0FBQ1E7QUFDVjtBQUMrQjtBQUNWO0FBQ3JCO0FBRXpCLFNBQVNlLGNBQWMsS0FBcUMsRUFBRTtRQUF2QyxFQUFFQyxZQUFXLEVBQUVDLFNBQVEsRUFBRUMsR0FBRSxFQUFFQyxPQUFNLEVBQUUsR0FBckM7O0lBQ2xDLE1BQU1DLFNBQVNOLHNEQUFTQTtJQUd4QixNQUFNLENBQUNPLFVBQVVDLFlBQVksR0FBR3RCLDJDQUFjLENBQUMsRUFBRTtJQUNqRCxNQUFNLENBQUN3QixTQUFTQyxXQUFXLEdBQUd6QiwyQ0FBYyxDQUFDLElBQUk7SUFDakQsbURBQW1EO0lBQ25ELE1BQU0sQ0FBQzBCLGdCQUFnQkMsa0JBQWtCLEdBQUczQiwyQ0FBYztJQUkxRCx5RkFBeUY7SUFDekZBLDRDQUFlLENBQUMsSUFBTTtRQUNsQixNQUFNNkIsT0FBT3ZCLHNEQUFPQSxDQUFDQyxtREFBR0E7UUFFeEIsTUFBTXVCLGdCQUFnQixVQUFZO1lBQzlCLE1BQU1DLG9CQUFvQnZCLDhEQUFVQSxDQUFDQyxrREFBRUEsRUFBRTtZQUN6QyxNQUFNdUIsa0JBQWtCLE1BQU1wQiwyREFBT0EsQ0FBQ21CO1lBQ3RDLE1BQU1FLGNBQWNELGdCQUFnQkUsSUFBSSxDQUFDQyxHQUFHLENBQUMsQ0FBQ3hCLE1BQVM7b0JBQ25ETyxJQUFJUCxJQUFJTyxFQUFFO29CQUNWa0IsWUFBWXpCLElBQUkwQixJQUFJO2dCQUN4QjtZQUNBZixZQUFZVztZQUNaUixXQUFXLEtBQUs7UUFDcEI7UUFFQSx3REFBd0Q7UUFDeEQsa0JBQWtCO1FBQ2xCLCtCQUErQjtRQUMvQixlQUFlO1FBQ2YsMkJBQTJCO1FBQzNCLFFBQVE7UUFDUixNQUFNO1FBRU5LO0lBRUEsOEJBQThCO0lBQ2xDLEdBQUc7UUFBQ1g7S0FBTztJQUVYbkIsNENB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REpDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudC9TdHVkZW50L015Y291cnNlc0NhcmQuanM/NjU0NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDYXJkIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ2FyZCc7XHJcbmltcG9ydCBDYXJkQWN0aW9ucyBmcm9tICdAbXVpL21hdGVyaWFsL0NhcmRBY3Rpb25zJztcclxuaW1wb3J0IENhcmRDb250ZW50IGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ2FyZENvbnRlbnQnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQnV0dG9uJztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG11aS9tYXRlcmlhbC9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IHsgZ2V0QXV0aCB9IGZyb20gJ2ZpcmViYXNlL2F1dGgnO1xyXG5pbXBvcnQgeyBhcHAsIGNvbGxlY3Rpb24sIGRiLCBzdG9yYWdlIH0gZnJvbSAnLi4vLi4vRmlyZWJhc2UvRmlyZWJhc2UnO1xyXG5pbXBvcnQgeyBkb2MsIGdldERvY3MsIHVwZGF0ZURvYyB9IGZyb20gJ2ZpcmViYXNlL2ZpcmVzdG9yZSc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15Y291cnNlc0NhcmQoeyBjb3Vyc2VUaXRsZSwgSW5zdE5hbWUsIGlkLCB1c2VyaWQgfSkge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG5cclxuICAgIGNvbnN0IFtzdHVkZW50cywgc2V0U3R1ZGVudHNdID0gUmVhY3QudXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XHJcbiAgICAvL2NvbnN0IFt1c2VySWQsIHNldFVzZXJJZF0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtjdXJyZW50Q291cnNlcywgc2V0Q3VycmVudENvdXJzZXNdID0gUmVhY3QudXNlU3RhdGUoKTtcclxuICAgXHJcblxyXG5cclxuICAgIC8vY29uc3QgY3VycmVudFN0dWRlbnQgPSBzdHVkZW50cy5maW5kKHMgPT4gcy5pZCA9PT0gdXNlcklkKT8uYXR0cmlidXRlcy5yZWdpc3RlcmRjb3Vyc2VzXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGF1dGggPSBnZXRBdXRoKGFwcCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGZldGNoU3R1ZGVudHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0dWRlbnRDb2xsZWN0aW9uID0gY29sbGVjdGlvbihkYiwgJ1N0dWRlbnQnKTtcclxuICAgICAgICAgICAgY29uc3Qgc3R1ZGVudFNuYXBzaG90ID0gYXdhaXQgZ2V0RG9jcyhzdHVkZW50Q29sbGVjdGlvbik7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0dWRlbnRMaXN0ID0gc3R1ZGVudFNuYXBzaG90LmRvY3MubWFwKChkb2MpID0+ICh7XHJcbiAgICAgICAgICAgICAgICBpZDogZG9jLmlkLFxyXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlczogZG9jLmRhdGEoKSxcclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICBzZXRTdHVkZW50cyhzdHVkZW50TGlzdCk7XHJcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIGNvbnN0IHVuc3Vic2NyaWJlID0gYXV0aC5vbkF1dGhTdGF0ZUNoYW5nZWQodXNlciA9PiB7XHJcbiAgICAgICAgLy8gICAgIGlmICh1c2VyKSB7XHJcbiAgICAgICAgLy8gICAgICAgICBzZXRVc2VySWQodXNlci51aWQpO1xyXG4gICAgICAgIC8vICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgICAgICAgc2V0VXNlcklkKG51bGwpO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSk7XHJcblxyXG4gICAgICAgIGZldGNoU3R1ZGVudHMoKTtcclxuXHJcbiAgICAgICAgLy8gcmV0dXJuICgpID0+IHVuc3Vic2NyaWJlKCk7XHJcbiAgICB9LCBbdXNlcmlkXSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoc3R1ZGVudHMubGVuZ3RoID4gMCAmJiB1c2VyaWQpIHtcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudFN0dWRlbnQgPSBzdHVkZW50cy5maW5kKHMgPT4gcy5pZCA9PT0gdXNlcmlkKT8uYXR0cmlidXRlcy5yZWdpc3RlcmRjb3Vyc2VzO1xyXG4gICAgICAgICAgICBpZiAoY3VycmVudFN0dWRlbnQpIHtcclxuICAgICAgICAgICAgICAgIHNldEN1cnJlbnRDb3Vyc2VzKGN1cnJlbnRTdHVkZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtzdHVkZW50cywgdXNlcmlkXSk7XHJcblxyXG5cclxuICAgIGNvbnNvbGUubG9nKHVzZXJpZClcclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBoYW5kZWxEcm9wKGlkKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgLy8gRmluZCB0aGUgaW5kZXggb2YgdGhlIGNvdXJzZSB3aXRoIHRoZSBnaXZlbiBpZCBpbiB0aGUgY3VycmVudENvdXJzZXMgYXJyYXlcclxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBjdXJyZW50Q291cnNlcy5maW5kSW5kZXgoY291cnNlID0+IGNvdXJzZSA9PT0gaWQpO1xyXG4gICAgICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGUgY291cnNlIGlzIGZvdW5kLCByZW1vdmUgaXQgZnJvbSB0aGUgY3VycmVudENvdXJzZXMgYXJyYXlcclxuICAgICAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRDb3Vyc2VzID0gWy4uLmN1cnJlbnRDb3Vyc2VzXTtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZWRDb3Vyc2VzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgICAgICBzZXRDdXJyZW50Q291cnNlcyh1cGRhdGVkQ291cnNlcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gVXBkYXRlIHRoZSBjdXJyZW50IHN0dWRlbnQncyByZWdpc3RlcmVkIGNvdXJzZXMgaW4gdGhlIGRhdGFiYXNlXHJcbiAgICAgICAgICAgICAgICAvLyBjb25zdCBzdHVkZW50RG9jUmVmID0gY29sbGVjdGlvbihkYiwgJ1N0dWRlbnQnLCB1c2VySWQpO1xyXG4gICAgICAgICAgICAgICAgLy8gYXdhaXQgc3R1ZGVudERvY1JlZi51cGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIHJlZ2lzdGVyZGNvdXJzZXM6IHVwZGF0ZWRDb3Vyc2VzXHJcbiAgICAgICAgICAgICAgICAvLyB9KTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHVzZXJpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdHVkZW50UmVmID0gZG9jKGRiLCAnU3R1ZGVudCcsIHVzZXJpZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHVwZGF0ZURvYyhzdHVkZW50UmVmLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWdpc3RlcmRjb3Vyc2VzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB1cGRhdGVkQ291cnNlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCF1c2VyaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0NvdXJzZSBkcm9wcGVkIHN1Y2Nlc3NmdWxseScpO1xyXG4gICAgICAgICAgICAgICAgcm91dGVyLnJlbG9hZCgpXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGRyb3AgY291cnNlOicsIGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGVsUm91dGUoaWQsbmFtZSl7XHJcbiAgICAgICAgcm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgICBwYXRobmFtZTonL1N0dWRlbnQvY291cnNlUGFnZScsXHJcbiAgICAgICAgICAgIHF1ZXJ5OntteVBhcmFtOm5hbWV9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkIHN4PXt7IHdpZHRoOiAnNTAlJywgYmFja2dyb3VuZENvbG9yOiAnIzFBQkM5QycsIGNvbG9yOiAnIzQ1NDU0NScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGd1dHRlckJvdHRvbSB2YXJpYW50PVwiaDdcIiBjb21wb25lbnQ9XCJkaXZcIiBzeD17eyBmb250V2VpZ2h0OiAnMTAwMCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ291cnNlIE5hbWUgOiB7Y291cnNlVGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBndXR0ZXJCb3R0b20gdmFyaWFudD1cImg3XCIgY29tcG9uZW50PVwiZGl2XCIgc3g9e3sgZm9udFdlaWdodDogJzcwMCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5zdHJ1Y3RvciBOYW1lIDoge0luc3ROYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZEFjdGlvbnM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHNpemU9XCJzbWFsbFwiIHN4PXt7IGJhY2tncm91bmRDb2xvcjogJyMxQUJDOUMnLCBjb2xvcjogJ3doaXRlJywgbWFyZ2luOiAnMCAwIDEwcHggMCcsIGJvcmRlcjogJzFweCBzb2xpZCcgfX0gb25DbGljaz17KCkgPT4gaGFuZGVsRHJvcChpZCl9PkRyb3AgY291cnNlPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHNpemU9XCJzbWFsbFwiIHN4PXt7IGJhY2tncm91bmRDb2xvcjogJyMxQUJDOUMnLCBjb2xvcjogJ3doaXRlJywgbWFyZ2luOiAnMCAwIDEwcHggMCcsIGJvcmRlcjogJzFweCBzb2xpZCcgfX0gb25DbGljaz17KCkgPT4gaGFuZGVsUm91dGUoaWQsIGNvdXJzZVRpdGxlKX0+Q291cnNlIFBhZ2U8L0J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZEFjdGlvbnM+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L2RpdiA+XHJcblxyXG4gICAgKTtcclxufSJdLCJuYW1lcyI6WyJSZWFjdCIsIkNhcmQiLCJDYXJkQWN0aW9ucyIsIkNhcmRDb250ZW50IiwiQnV0dG9uIiwiVHlwb2dyYXBoeSIsImdldEF1dGgiLCJhcHAiLCJjb2xsZWN0aW9uIiwiZGIiLCJzdG9yYWdlIiwiZG9jIiwiZ2V0RG9jcyIsInVwZGF0ZURvYyIsInVzZVJvdXRlciIsIk15Y291cnNlc0NhcmQiLCJjb3Vyc2VUaXRsZSIsIkluc3ROYW1lIiwiaWQiLCJ1c2VyaWQiLCJyb3V0ZXIiLCJzdHVkZW50cyIsInNldFN0dWRlbnRzIiwidXNlU3RhdGUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImN1cnJlbnRDb3Vyc2VzIiwic2V0Q3VycmVudENvdXJzZXMiLCJ1c2VFZmZlY3QiLCJhdXRoIiwiZmV0Y2hTdHVkZW50cyIsInN0dWRlbnRDb2xsZWN0aW9uIiwic3R1ZGVudFNuYXBzaG90Iiwic3R1ZGVudExpc3QiLCJkb2NzIiwibWFwIiwiYXR0cmlidXRlcyIsImRhdGEiLCJsZW5ndGgiLCJjdXJyZW50U3R1ZGVudCIsImZpbmQiLCJzIiwicmVnaXN0ZXJkY291cnNlcyIsImNvbnNvbGUiLCJsb2ciLCJoYW5kZWxEcm9wIiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJjb3Vyc2UiLCJ1cGRhdGVkQ291cnNlcyIsInNwbGljZSIsInN0dWRlbnRSZWYiLCJlcnIiLCJkaXYiLCJyZWxvYWQiLCJlcnJvciIsImhhbmRlbFJvdXRlIiwibmFtZSIsInB1c2giLCJwYXRobmFtZSIsInF1ZXJ5IiwibXlQYXJhbSIsInN4Iiwid2lkdGgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsImd1dHRlckJvdHRvbSIsInZhcmlhbnQiLCJjb21wb25lbnQiLCJmb250V2VpZ2h0Iiwic2l6ZSIsIm1hcmdpbiIsImJvcmRlciIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./component/Student/MycoursesCard.js\n"));

/***/ })

});