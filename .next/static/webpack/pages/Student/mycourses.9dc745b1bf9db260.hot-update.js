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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MycoursesCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Card */ \"./node_modules/@mui/material/esm/Card/index.js\");\n/* harmony import */ var _mui_material_CardActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/CardActions */ \"./node_modules/@mui/material/esm/CardActions/index.js\");\n/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/CardContent */ \"./node_modules/@mui/material/esm/CardContent/index.js\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Button */ \"./node_modules/@mui/material/esm/Button/index.js\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Typography */ \"./node_modules/@mui/material/esm/Typography/index.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Firebase/Firebase */ \"./Firebase/Firebase.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction MycoursesCard(param) {\n    let { courseTitle , InstName , id , userid  } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    const [students, setStudents] = react__WEBPACK_IMPORTED_MODULE_1__.useState([]);\n    const [loading, setLoading] = react__WEBPACK_IMPORTED_MODULE_1__.useState(true);\n    //const [userId, setUserId] = React.useState(null);\n    const [currentCourses, setCurrentCourses] = react__WEBPACK_IMPORTED_MODULE_1__.useState();\n    //const currentStudent = students.find(s => s.id === userId)?.attributes.registerdcourses\n    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>{\n        const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_3__.app);\n        const fetchStudents = async ()=>{\n            const studentCollection = (0,_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_3__.collection)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_3__.db, \"Student\");\n            const studentSnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.getDocs)(studentCollection);\n            const studentList = studentSnapshot.docs.map((doc)=>({\n                    id: doc.id,\n                    attributes: doc.data()\n                }));\n            setStudents(studentList);\n            setLoading(false);\n        };\n        // const unsubscribe = auth.onAuthStateChanged(user => {\n        //     if (user) {\n        //         setUserId(user.uid);\n        //     } else {\n        //         setUserId(null);\n        //     }\n        // });\n        fetchStudents();\n    // return () => unsubscribe();\n    }, [\n        userid\n    ]);\n    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>{\n        if (students.length > 0 && userid) {\n            var _students_find;\n            const currentStudent = (_students_find = students.find((s)=>s.id === userid)) === null || _students_find === void 0 ? void 0 : _students_find.attributes.registerdcourses;\n            if (currentStudent) {\n                setCurrentCourses(currentStudent);\n            }\n        }\n    }, [\n        students,\n        userid\n    ]);\n    console.log(userid);\n    async function handelDrop(id) {\n        try {\n            // Find the index of the course with the given id in the currentCourses array\n            const index = currentCourses.findIndex((course)=>course === id);\n            if (index !== -1) {\n                // If the course is found, remove it from the currentCourses array\n                const updatedCourses = [\n                    ...currentCourses\n                ];\n                updatedCourses.splice(index, 1);\n                setCurrentCourses(updatedCourses);\n                // Update the current student's registered courses in the database\n                // const studentDocRef = collection(db, 'Student', userId);\n                // await studentDocRef.update({\n                //     registerdcourses: updatedCourses\n                // });\n                try {\n                    if (userId) {\n                        const studentRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_3__.db, \"Student\", userid);\n                        await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.updateDoc)(studentRef, {\n                            registerdcourses: updatedCourses\n                        });\n                    }\n                } catch (err) {\n                    console.log(err);\n                }\n                console.log(\"Course dropped successfully\");\n                router.reload();\n            }\n        } catch (error) {\n            console.error(\"Failed to drop course:\", error);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Card__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        sx: {\n            width: \"100%\",\n            backgroundColor: \"#1ABC9C\",\n            color: \"#454545\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        gutterBottom: true,\n                        variant: \"h7\",\n                        component: \"div\",\n                        sx: {\n                            fontWeight: \"1000\"\n                        },\n                        children: [\n                            \"Course Name : \",\n                            courseTitle\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior-firebase-update\\\\eduShare\\\\component\\\\Student\\\\MycoursesCard.js\",\n                        lineNumber: 101,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        gutterBottom: true,\n                        variant: \"h7\",\n                        component: \"div\",\n                        sx: {\n                            fontWeight: \"700\"\n                        },\n                        children: [\n                            \"Instructor Name :\",\n                            InstName\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior-firebase-update\\\\eduShare\\\\component\\\\Student\\\\MycoursesCard.js\",\n                        lineNumber: 104,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior-firebase-update\\\\eduShare\\\\component\\\\Student\\\\MycoursesCard.js\",\n                lineNumber: 100,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_CardActions__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                    size: \"small\",\n                    sx: {\n                        backgroundColor: \"#1ABC9C\",\n                        color: \"white\",\n                        margin: \"0 0 10px 0\",\n                        border: \"1px solid\"\n                    },\n                    onClick: ()=>handelDrop(id),\n                    children: \"Drop course\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior-firebase-update\\\\eduShare\\\\component\\\\Student\\\\MycoursesCard.js\",\n                    lineNumber: 109,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior-firebase-update\\\\eduShare\\\\component\\\\Student\\\\MycoursesCard.js\",\n                lineNumber: 108,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior-firebase-update\\\\eduShare\\\\component\\\\Student\\\\MycoursesCard.js\",\n        lineNumber: 99,\n        columnNumber: 9\n    }, this);\n}\n_s(MycoursesCard, \"RKEPWSPlYsPepGOPoLTGYlrpInU=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = MycoursesCard;\nvar _c;\n$RefreshReg$(_c, \"MycoursesCard\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnQvU3R1ZGVudC9NeWNvdXJzZXNDYXJkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUErQjtBQUNPO0FBQ2M7QUFDQTtBQUNWO0FBQ1E7QUFDVjtBQUNzQjtBQUNEO0FBQ3JCO0FBRXpCLFNBQVNjLGNBQWMsS0FBb0MsRUFBRTtRQUF0QyxFQUFFQyxZQUFXLEVBQUVDLFNBQVEsRUFBRUMsR0FBRSxFQUFDQyxPQUFNLEVBQUUsR0FBcEM7O0lBQ2xDLE1BQU1DLFNBQVNOLHNEQUFTQTtJQUV4QixNQUFNLENBQUNPLFVBQVVDLFlBQVksR0FBR3JCLDJDQUFjLENBQUMsRUFBRTtJQUNqRCxNQUFNLENBQUN1QixTQUFTQyxXQUFXLEdBQUd4QiwyQ0FBYyxDQUFDLElBQUk7SUFDakQsbURBQW1EO0lBQ25ELE1BQU0sQ0FBQ3lCLGdCQUFnQkMsa0JBQWtCLEdBQUcxQiwyQ0FBYztJQUUxRCx5RkFBeUY7SUFDekZBLDRDQUFlLENBQUMsSUFBTTtRQUNsQixNQUFNNEIsT0FBT3RCLHNEQUFPQSxDQUFDQyxtREFBR0E7UUFFeEIsTUFBTXNCLGdCQUFnQixVQUFZO1lBQzlCLE1BQU1DLG9CQUFvQnRCLDhEQUFVQSxDQUFDQyxrREFBRUEsRUFBRTtZQUN6QyxNQUFNc0Isa0JBQWtCLE1BQU1wQiwyREFBT0EsQ0FBQ21CO1lBQ3RDLE1BQU1FLGNBQWNELGdCQUFnQkUsSUFBSSxDQUFDQyxHQUFHLENBQUMsQ0FBQ3hCLE1BQVM7b0JBQ25ETyxJQUFJUCxJQUFJTyxFQUFFO29CQUNWa0IsWUFBWXpCLElBQUkwQixJQUFJO2dCQUN4QjtZQUNBZixZQUFZVztZQUNaUixXQUFXLEtBQUs7UUFDcEI7UUFFQSx3REFBd0Q7UUFDeEQsa0JBQWtCO1FBQ2xCLCtCQUErQjtRQUMvQixlQUFlO1FBQ2YsMkJBQTJCO1FBQzNCLFFBQVE7UUFDUixNQUFNO1FBRU5LO0lBRUEsOEJBQThCO0lBQ2xDLEdBQUc7UUFBQ1g7S0FBTztJQUVYbEIsNENBQWUsQ0FBQyxJQUFNO1FBQ2xCLElBQUlvQixTQUFTaUIsTUFBTSxHQUFHLEtBQUtuQixRQUFRO2dCQUNSRTtZQUF2QixNQUFNa0IsaUJBQWlCbEIsQ0FBQUEsaUJBQUFBLFNBQVNtQixJQUFJLENBQUNDLENBQUFBLElBQUtBLEVBQUV2QixFQUFFLEtBQUtDLHFCQUE1QkUsNEJBQUFBLEtBQUFBLElBQUFBLGVBQXFDZSxXQUFXTSxnQkFBZ0I7WUFDdkYsSUFBSUgsZ0JBQWdCO2dCQUNoQlosa0JBQWtCWTtZQUN0QixDQUFDO1FBQVEsQ0FBQztJQUNsQixHQUFHO1FBQUNsQjtRQUFVRjtLQUFPO0lBR3JCd0IsUUFBUUMsR0FBRyxDQUFDekI7SUFFWixlQUFlMEIsV0FBVzNCLEVBQUUsRUFBRTtRQUMxQixJQUFJO1lBQ0EsNkVBQTZFO1lBQzdFLE1BQU00QixRQUFRcEIsZUFBZXFCLFNBQVMsQ0FBQ0MsQ0FBQUEsU0FBVUEsV0FBVzlCO1lBQzVELElBQUk0QixVQUFVLENBQUMsR0FBRztnQkFDZCxrRUFBa0U7Z0JBQ2xFLE1BQU1HLGlCQUFpQjt1QkFBSXZCO2lCQUFlO2dCQUMxQ3VCLGVBQWVDLE1BQU0sQ0FBQ0osT0FBTztnQkFDN0JuQixrQkFBa0JzQjtnQkFFbEIsa0VBQWtFO2dCQUNsRSwyREFBMkQ7Z0JBQzNELCtCQUErQjtnQkFDL0IsdUNBQXVDO2dCQUN2QyxNQUFNO2dCQUlOLElBQUk7b0JBQ0EsSUFBSUUsUUFBUTt3QkFDUixNQUFNQyxhQUFhekMsdURBQUdBLENBQUNELGtEQUFFQSxFQUFFLFdBQVdTO3dCQUN0QyxNQUFNTiw2REFBU0EsQ0FBQ3VDLFlBQVk7NEJBQ3hCVixrQkFDTU87d0JBQ1Y7b0JBQ0osQ0FBQztnQkFDTCxFQUFFLE9BQU9JLEtBQUs7b0JBQ1ZWLFFBQVFDLEdBQUcsQ0FBQ1M7Z0JBQ2hCO2dCQUVBVixRQUFRQyxHQUFHLENBQUM7Z0JBQ1p4QixPQUFPa0MsTUFBTTtZQUVqQixDQUFDO1FBQ0wsRUFBRSxPQUFPQyxPQUFPO1lBQ1paLFFBQVFZLEtBQUssQ0FBQywwQkFBMEJBO1FBQzVDO0lBQ0o7SUFFQSxxQkFDSSw4REFBQ3JELDBEQUFJQTtRQUFDc0QsSUFBSTtZQUFFQyxPQUFPO1lBQVFDLGlCQUFpQjtZQUFXQyxPQUFPO1FBQVU7OzBCQUNwRSw4REFBQ3ZELGlFQUFXQTs7a0NBQ1IsOERBQUNFLGdFQUFVQTt3QkFBQ3NELFlBQVk7d0JBQUNDLFNBQVE7d0JBQUtDLFdBQVU7d0JBQU1OLElBQUk7NEJBQUVPLFlBQVk7d0JBQU87OzRCQUFHOzRCQUMvRC9DOzs7Ozs7O2tDQUVuQiw4REFBQ1YsZ0VBQVVBO3dCQUFDc0QsWUFBWTt3QkFBQ0MsU0FBUTt3QkFBS0MsV0FBVTt3QkFBTU4sSUFBSTs0QkFBRU8sWUFBWTt3QkFBTTs7NEJBQUc7NEJBQzNEOUM7Ozs7Ozs7Ozs7Ozs7MEJBRzFCLDhEQUFDZCxpRUFBV0E7MEJBQ1IsNEVBQUNFLDZEQUFNQTtvQkFBQzJELE1BQUs7b0JBQVFSLElBQUk7d0JBQUVFLGlCQUFpQjt3QkFBV0MsT0FBTzt3QkFBU00sUUFBUTt3QkFBY0MsUUFBUTtvQkFBWTtvQkFBR0MsU0FBUyxJQUFNdEIsV0FBVzNCOzhCQUFLOzs7Ozs7Ozs7Ozs7Ozs7OztBQUluSyxDQUFDO0dBckd1Qkg7O1FBQ0xELGtEQUFTQTs7O0tBREpDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudC9TdHVkZW50L015Y291cnNlc0NhcmQuanM/NjU0NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDYXJkIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ2FyZCc7XHJcbmltcG9ydCBDYXJkQWN0aW9ucyBmcm9tICdAbXVpL21hdGVyaWFsL0NhcmRBY3Rpb25zJztcclxuaW1wb3J0IENhcmRDb250ZW50IGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ2FyZENvbnRlbnQnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQnV0dG9uJztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG11aS9tYXRlcmlhbC9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IHsgZ2V0QXV0aCB9IGZyb20gJ2ZpcmViYXNlL2F1dGgnO1xyXG5pbXBvcnQgeyBhcHAsIGNvbGxlY3Rpb24sIGRiIH0gZnJvbSAnLi4vLi4vRmlyZWJhc2UvRmlyZWJhc2UnO1xyXG5pbXBvcnQgeyBkb2MsIGdldERvY3MsIHVwZGF0ZURvYyB9IGZyb20gJ2ZpcmViYXNlL2ZpcmVzdG9yZSc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15Y291cnNlc0NhcmQoeyBjb3Vyc2VUaXRsZSwgSW5zdE5hbWUsIGlkLHVzZXJpZCB9KSB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICBjb25zdCBbc3R1ZGVudHMsIHNldFN0dWRlbnRzXSA9IFJlYWN0LnVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpO1xyXG4gICAgLy9jb25zdCBbdXNlcklkLCBzZXRVc2VySWRdID0gUmVhY3QudXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbY3VycmVudENvdXJzZXMsIHNldEN1cnJlbnRDb3Vyc2VzXSA9IFJlYWN0LnVzZVN0YXRlKCk7XHJcblxyXG4gICAgLy9jb25zdCBjdXJyZW50U3R1ZGVudCA9IHN0dWRlbnRzLmZpbmQocyA9PiBzLmlkID09PSB1c2VySWQpPy5hdHRyaWJ1dGVzLnJlZ2lzdGVyZGNvdXJzZXNcclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYXV0aCA9IGdldEF1dGgoYXBwKTtcclxuXHJcbiAgICAgICAgY29uc3QgZmV0Y2hTdHVkZW50cyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc3R1ZGVudENvbGxlY3Rpb24gPSBjb2xsZWN0aW9uKGRiLCAnU3R1ZGVudCcpO1xyXG4gICAgICAgICAgICBjb25zdCBzdHVkZW50U25hcHNob3QgPSBhd2FpdCBnZXREb2NzKHN0dWRlbnRDb2xsZWN0aW9uKTtcclxuICAgICAgICAgICAgY29uc3Qgc3R1ZGVudExpc3QgPSBzdHVkZW50U25hcHNob3QuZG9jcy5tYXAoKGRvYykgPT4gKHtcclxuICAgICAgICAgICAgICAgIGlkOiBkb2MuaWQsXHJcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiBkb2MuZGF0YSgpLFxyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgIHNldFN0dWRlbnRzKHN0dWRlbnRMaXN0KTtcclxuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gY29uc3QgdW5zdWJzY3JpYmUgPSBhdXRoLm9uQXV0aFN0YXRlQ2hhbmdlZCh1c2VyID0+IHtcclxuICAgICAgICAvLyAgICAgaWYgKHVzZXIpIHtcclxuICAgICAgICAvLyAgICAgICAgIHNldFVzZXJJZCh1c2VyLnVpZCk7XHJcbiAgICAgICAgLy8gICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgICAgICBzZXRVc2VySWQobnVsbCk7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9KTtcclxuXHJcbiAgICAgICAgZmV0Y2hTdHVkZW50cygpO1xyXG5cclxuICAgICAgICAvLyByZXR1cm4gKCkgPT4gdW5zdWJzY3JpYmUoKTtcclxuICAgIH0sIFt1c2VyaWRdKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChzdHVkZW50cy5sZW5ndGggPiAwICYmIHVzZXJpZCkge1xyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50U3R1ZGVudCA9IHN0dWRlbnRzLmZpbmQocyA9PiBzLmlkID09PSB1c2VyaWQpPy5hdHRyaWJ1dGVzLnJlZ2lzdGVyZGNvdXJzZXM7XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50U3R1ZGVudCkge1xyXG4gICAgICAgICAgICAgICAgc2V0Q3VycmVudENvdXJzZXMoY3VycmVudFN0dWRlbnQpO1xyXG4gICAgICAgICAgICB9ICAgICAgICB9XHJcbiAgICB9LCBbc3R1ZGVudHMsIHVzZXJpZF0pO1xyXG5cclxuXHJcbiAgICBjb25zb2xlLmxvZyh1c2VyaWQpXHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gaGFuZGVsRHJvcChpZCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIC8vIEZpbmQgdGhlIGluZGV4IG9mIHRoZSBjb3Vyc2Ugd2l0aCB0aGUgZ2l2ZW4gaWQgaW4gdGhlIGN1cnJlbnRDb3Vyc2VzIGFycmF5XHJcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gY3VycmVudENvdXJzZXMuZmluZEluZGV4KGNvdXJzZSA9PiBjb3Vyc2UgPT09IGlkKTtcclxuICAgICAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlIGNvdXJzZSBpcyBmb3VuZCwgcmVtb3ZlIGl0IGZyb20gdGhlIGN1cnJlbnRDb3Vyc2VzIGFycmF5XHJcbiAgICAgICAgICAgICAgICBjb25zdCB1cGRhdGVkQ291cnNlcyA9IFsuLi5jdXJyZW50Q291cnNlc107XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVkQ291cnNlcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICAgICAgc2V0Q3VycmVudENvdXJzZXModXBkYXRlZENvdXJzZXMpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgY3VycmVudCBzdHVkZW50J3MgcmVnaXN0ZXJlZCBjb3Vyc2VzIGluIHRoZSBkYXRhYmFzZVxyXG4gICAgICAgICAgICAgICAgLy8gY29uc3Qgc3R1ZGVudERvY1JlZiA9IGNvbGxlY3Rpb24oZGIsICdTdHVkZW50JywgdXNlcklkKTtcclxuICAgICAgICAgICAgICAgIC8vIGF3YWl0IHN0dWRlbnREb2NSZWYudXBkYXRlKHtcclxuICAgICAgICAgICAgICAgIC8vICAgICByZWdpc3RlcmRjb3Vyc2VzOiB1cGRhdGVkQ291cnNlc1xyXG4gICAgICAgICAgICAgICAgLy8gfSk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh1c2VySWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3R1ZGVudFJlZiA9IGRvYyhkYiwgJ1N0dWRlbnQnLCB1c2VyaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB1cGRhdGVEb2Moc3R1ZGVudFJlZiwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVnaXN0ZXJkY291cnNlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdXBkYXRlZENvdXJzZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQ291cnNlIGRyb3BwZWQgc3VjY2Vzc2Z1bGx5Jyk7XHJcbiAgICAgICAgICAgICAgICByb3V0ZXIucmVsb2FkKClcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gZHJvcCBjb3Vyc2U6JywgZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDYXJkIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJyMxQUJDOUMnLCBjb2xvcjogJyM0NTQ1NDUnIH19PlxyXG4gICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBndXR0ZXJCb3R0b20gdmFyaWFudD1cImg3XCIgY29tcG9uZW50PVwiZGl2XCIgc3g9e3sgZm9udFdlaWdodDogJzEwMDAnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIENvdXJzZSBOYW1lIDoge2NvdXJzZVRpdGxlfVxyXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgZ3V0dGVyQm90dG9tIHZhcmlhbnQ9XCJoN1wiIGNvbXBvbmVudD1cImRpdlwiIHN4PXt7IGZvbnRXZWlnaHQ6ICc3MDAnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIEluc3RydWN0b3IgTmFtZSA6e0luc3ROYW1lfVxyXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICAgICAgICA8Q2FyZEFjdGlvbnM+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHNpemU9XCJzbWFsbFwiIHN4PXt7IGJhY2tncm91bmRDb2xvcjogJyMxQUJDOUMnLCBjb2xvcjogJ3doaXRlJywgbWFyZ2luOiAnMCAwIDEwcHggMCcsIGJvcmRlcjogJzFweCBzb2xpZCcgfX0gb25DbGljaz17KCkgPT4gaGFuZGVsRHJvcChpZCl9PkRyb3AgY291cnNlPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvQ2FyZEFjdGlvbnM+XHJcbiAgICAgICAgPC9DYXJkPlxyXG4gICAgKTtcclxufSJdLCJuYW1lcyI6WyJSZWFjdCIsIkNhcmQiLCJDYXJkQWN0aW9ucyIsIkNhcmRDb250ZW50IiwiQnV0dG9uIiwiVHlwb2dyYXBoeSIsImdldEF1dGgiLCJhcHAiLCJjb2xsZWN0aW9uIiwiZGIiLCJkb2MiLCJnZXREb2NzIiwidXBkYXRlRG9jIiwidXNlUm91dGVyIiwiTXljb3Vyc2VzQ2FyZCIsImNvdXJzZVRpdGxlIiwiSW5zdE5hbWUiLCJpZCIsInVzZXJpZCIsInJvdXRlciIsInN0dWRlbnRzIiwic2V0U3R1ZGVudHMiLCJ1c2VTdGF0ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiY3VycmVudENvdXJzZXMiLCJzZXRDdXJyZW50Q291cnNlcyIsInVzZUVmZmVjdCIsImF1dGgiLCJmZXRjaFN0dWRlbnRzIiwic3R1ZGVudENvbGxlY3Rpb24iLCJzdHVkZW50U25hcHNob3QiLCJzdHVkZW50TGlzdCIsImRvY3MiLCJtYXAiLCJhdHRyaWJ1dGVzIiwiZGF0YSIsImxlbmd0aCIsImN1cnJlbnRTdHVkZW50IiwiZmluZCIsInMiLCJyZWdpc3RlcmRjb3Vyc2VzIiwiY29uc29sZSIsImxvZyIsImhhbmRlbERyb3AiLCJpbmRleCIsImZpbmRJbmRleCIsImNvdXJzZSIsInVwZGF0ZWRDb3Vyc2VzIiwic3BsaWNlIiwidXNlcklkIiwic3R1ZGVudFJlZiIsImVyciIsInJlbG9hZCIsImVycm9yIiwic3giLCJ3aWR0aCIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiZ3V0dGVyQm90dG9tIiwidmFyaWFudCIsImNvbXBvbmVudCIsImZvbnRXZWlnaHQiLCJzaXplIiwibWFyZ2luIiwiYm9yZGVyIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./component/Student/MycoursesCard.js\n"));

/***/ })

});