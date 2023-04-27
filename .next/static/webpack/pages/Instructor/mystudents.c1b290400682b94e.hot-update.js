"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/Instructor/mystudents",{

/***/ "./component/Instructors/MyStudents.js":
/*!*********************************************!*\
  !*** ./component/Instructors/MyStudents.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Firebase/Firebase */ \"./Firebase/Firebase.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction MyStudents() {\n    var _instructor_find_attributes_myCourse_, _instructor_find, _coursess_find;\n    _s();\n    const [students, setStudentys] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [coursess, setCoursess] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [instructor, setInstructor] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    async function fetchCourses() {\n        const compationsCollection = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_4__.db, \"Course\");\n        const compationsSnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDocs)(compationsCollection);\n        const compationsList = compationsSnapshot.docs.map((doc)=>({\n                id: doc.id,\n                attributes: doc.data()\n            }));\n        setCoursess(compationsList);\n    }\n    async function fetchStudents() {\n        const compationsCollection = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_4__.db, \"Student\");\n        const compationsSnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDocs)(compationsCollection);\n        const compationsList = compationsSnapshot.docs.map((doc)=>({\n                id: doc.id,\n                attributes: doc.data()\n            }));\n        setStudentys(compationsList);\n    }\n    async function fetchInstruuctors() {\n        const compationsCollection = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_4__.db, \"Instructor\");\n        const compationsSnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDocs)(compationsCollection);\n        const compationsList = compationsSnapshot.docs.map((doc)=>({\n                id: doc.id,\n                attributes: doc.data()\n            }));\n        setInstructor(compationsList);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchStudents();\n        fetchCourses();\n        fetchInstruuctors();\n    }, []);\n    let nameOfCourse = (_instructor_find_attributes_myCourse_ = (_instructor_find = instructor.find((s)=>s.id === userId)) === null || _instructor_find === void 0 ? void 0 : _instructor_find.attributes.myCourse[0]) === null || _instructor_find_attributes_myCourse_ === void 0 ? void 0 : _instructor_find_attributes_myCourse_.coursname[0] //console.log(idOfCourse)\n    ;\n    let courseid = (_coursess_find = coursess.find((c)=>c.attributes.CourseTitle === nameOfCourse)) === null || _coursess_find === void 0 ? void 0 : _coursess_find.id;\n    console.log(courseid);\n    let registeredStudents = students.filter((s)=>s.attributes.registerdcourses.includes(courseid));\n    let studentNumber = registeredStudents.length;\n    console.log(registeredStudents);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"test\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\sdp-firebase-final\\\\eduShare\\\\component\\\\Instructors\\\\MyStudents.js\",\n        lineNumber: 61,\n        columnNumber: 9\n    }, this);\n}\n_s(MyStudents, \"8DUWdtSpYwZofLXSP7XZFkEfoUA=\");\n_c = MyStudents;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyStudents);\nvar _c;\n$RefreshReg$(_c, \"MyStudents\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnQvSW5zdHJ1Y3RvcnMvTXlTdHVkZW50cy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFBa0Q7QUFDWDtBQUNrQjtBQUNaO0FBQzdDLFNBQVNPLGFBQWE7UUE0Q0NDLHVDQUFBQSxrQkFFSkM7O0lBN0NmLE1BQU0sQ0FBQ0MsVUFBVUMsYUFBYSxHQUFHVCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQzVDLE1BQU0sQ0FBQ08sVUFBVUcsWUFBWSxHQUFHViwrQ0FBUUEsQ0FBQyxFQUFFO0lBQzNDLE1BQU0sQ0FBQ00sWUFBWUssY0FBYyxHQUFHWCwrQ0FBUUEsQ0FBQyxFQUFFO0lBRy9DLGVBQWVZLGVBQWU7UUFDMUIsTUFBTUMsdUJBQXVCWCw4REFBVUEsQ0FBQ0Usa0RBQUVBLEVBQUU7UUFDNUMsTUFBTVUscUJBQXFCLE1BQU1YLDJEQUFPQSxDQUFDVTtRQUN6QyxNQUFNRSxpQkFBaUJELG1CQUFtQkUsSUFBSSxDQUFDQyxHQUFHLENBQUMsQ0FBQ0MsTUFBUztnQkFDekRDLElBQUlELElBQUlDLEVBQUU7Z0JBQ1ZDLFlBQVlGLElBQUlHLElBQUk7WUFDeEI7UUFDQVgsWUFBWUs7SUFDaEI7SUFFQSxlQUFlTyxnQkFBZ0I7UUFDM0IsTUFBTVQsdUJBQXVCWCw4REFBVUEsQ0FBQ0Usa0RBQUVBLEVBQUU7UUFDNUMsTUFBTVUscUJBQXFCLE1BQU1YLDJEQUFPQSxDQUFDVTtRQUN6QyxNQUFNRSxpQkFBaUJELG1CQUFtQkUsSUFBSSxDQUFDQyxHQUFHLENBQUMsQ0FBQ0MsTUFBUztnQkFDekRDLElBQUlELElBQUlDLEVBQUU7Z0JBQ1ZDLFlBQVlGLElBQUlHLElBQUk7WUFDeEI7UUFDQVosYUFBYU07SUFDakI7SUFFQSxlQUFlUSxvQkFBb0I7UUFDL0IsTUFBTVYsdUJBQXVCWCw4REFBVUEsQ0FBQ0Usa0RBQUVBLEVBQUU7UUFDNUMsTUFBTVUscUJBQXFCLE1BQU1YLDJEQUFPQSxDQUFDVTtRQUN6QyxNQUFNRSxpQkFBaUJELG1CQUFtQkUsSUFBSSxDQUFDQyxHQUFHLENBQUMsQ0FBQ0MsTUFBUztnQkFDekRDLElBQUlELElBQUlDLEVBQUU7Z0JBQ1ZDLFlBQVlGLElBQUlHLElBQUk7WUFDeEI7UUFDQVYsY0FBY0k7SUFDbEI7SUFJQWhCLGdEQUFTQSxDQUFDLElBQU07UUFDWnVCO1FBQ0FWO1FBQ0FXO0lBQ0osR0FBRyxFQUFFO0lBRUwsSUFBSUMsZUFBZWxCLENBQUFBLHdDQUFBQSxDQUFBQSxtQkFBQUEsV0FBV21CLElBQUksQ0FBQ0MsQ0FBQUEsSUFBS0EsRUFBRVAsRUFBRSxLQUFLUSxxQkFBOUJyQiw4QkFBQUEsS0FBQUEsSUFBQUEsaUJBQXVDYyxXQUFXUSxRQUFRLENBQUMsRUFBRSxjQUE3RHRCLG1EQUFBQSxLQUFBQSxJQUFBQSxzQ0FBK0R1QixTQUFTLENBQUMsRUFBRSxDQUFFLHlCQUF5Qjs7SUFFekgsSUFBSUMsV0FBV3ZCLENBQUFBLGlCQUFBQSxTQUFTa0IsSUFBSSxDQUFDTSxDQUFBQSxJQUFLQSxFQUFFWCxVQUFVLENBQUNZLFdBQVcsS0FBS1IsMkJBQWhEakIsNEJBQUFBLEtBQUFBLElBQUFBLGVBQStEWSxFQUFFO0lBQ2hGYyxRQUFRQyxHQUFHLENBQUNKO0lBRVosSUFBSUsscUJBQXFCM0IsU0FBUzRCLE1BQU0sQ0FBQ1YsQ0FBQUEsSUFBS0EsRUFBRU4sVUFBVSxDQUFDaUIsZ0JBQWdCLENBQUNDLFFBQVEsQ0FBQ1I7SUFDckYsSUFBSVMsZ0JBQWdCSixtQkFBbUJLLE1BQU07SUFFN0NQLFFBQVFDLEdBQUcsQ0FBQ0M7SUFFWixxQkFFSSw4REFBQ007a0JBQUk7Ozs7OztBQUliO0dBNURTcEM7S0FBQUE7QUE4RFQsK0RBQWVBLFVBQVVBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L0luc3RydWN0b3JzL015U3R1ZGVudHMuanM/ZjA0NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxyXG5pbXBvcnQgeyBjb2xsZWN0aW9uLCBnZXREb2NzIH0gZnJvbSAnZmlyZWJhc2UvZmlyZXN0b3JlJztcclxuaW1wb3J0IHsgZGIgfSBmcm9tICcuLi8uLi9GaXJlYmFzZS9GaXJlYmFzZSc7XHJcbmZ1bmN0aW9uIE15U3R1ZGVudHMoKSB7XHJcbiAgICBjb25zdCBbc3R1ZGVudHMsIHNldFN0dWRlbnR5c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbY291cnNlc3MsIHNldENvdXJzZXNzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtpbnN0cnVjdG9yLCBzZXRJbnN0cnVjdG9yXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hDb3Vyc2VzKCkge1xyXG4gICAgICAgIGNvbnN0IGNvbXBhdGlvbnNDb2xsZWN0aW9uID0gY29sbGVjdGlvbihkYiwgXCJDb3Vyc2VcIik7XHJcbiAgICAgICAgY29uc3QgY29tcGF0aW9uc1NuYXBzaG90ID0gYXdhaXQgZ2V0RG9jcyhjb21wYXRpb25zQ29sbGVjdGlvbik7XHJcbiAgICAgICAgY29uc3QgY29tcGF0aW9uc0xpc3QgPSBjb21wYXRpb25zU25hcHNob3QuZG9jcy5tYXAoKGRvYykgPT4gKHtcclxuICAgICAgICAgICAgaWQ6IGRvYy5pZCxcclxuICAgICAgICAgICAgYXR0cmlidXRlczogZG9jLmRhdGEoKSxcclxuICAgICAgICB9KSk7XHJcbiAgICAgICAgc2V0Q291cnNlc3MoY29tcGF0aW9uc0xpc3QpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoU3R1ZGVudHMoKSB7XHJcbiAgICAgICAgY29uc3QgY29tcGF0aW9uc0NvbGxlY3Rpb24gPSBjb2xsZWN0aW9uKGRiLCBcIlN0dWRlbnRcIik7XHJcbiAgICAgICAgY29uc3QgY29tcGF0aW9uc1NuYXBzaG90ID0gYXdhaXQgZ2V0RG9jcyhjb21wYXRpb25zQ29sbGVjdGlvbik7XHJcbiAgICAgICAgY29uc3QgY29tcGF0aW9uc0xpc3QgPSBjb21wYXRpb25zU25hcHNob3QuZG9jcy5tYXAoKGRvYykgPT4gKHtcclxuICAgICAgICAgICAgaWQ6IGRvYy5pZCxcclxuICAgICAgICAgICAgYXR0cmlidXRlczogZG9jLmRhdGEoKSxcclxuICAgICAgICB9KSk7XHJcbiAgICAgICAgc2V0U3R1ZGVudHlzKGNvbXBhdGlvbnNMaXN0KTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaEluc3RydXVjdG9ycygpIHtcclxuICAgICAgICBjb25zdCBjb21wYXRpb25zQ29sbGVjdGlvbiA9IGNvbGxlY3Rpb24oZGIsIFwiSW5zdHJ1Y3RvclwiKTtcclxuICAgICAgICBjb25zdCBjb21wYXRpb25zU25hcHNob3QgPSBhd2FpdCBnZXREb2NzKGNvbXBhdGlvbnNDb2xsZWN0aW9uKTtcclxuICAgICAgICBjb25zdCBjb21wYXRpb25zTGlzdCA9IGNvbXBhdGlvbnNTbmFwc2hvdC5kb2NzLm1hcCgoZG9jKSA9PiAoe1xyXG4gICAgICAgICAgICBpZDogZG9jLmlkLFxyXG4gICAgICAgICAgICBhdHRyaWJ1dGVzOiBkb2MuZGF0YSgpLFxyXG4gICAgICAgIH0pKTtcclxuICAgICAgICBzZXRJbnN0cnVjdG9yKGNvbXBhdGlvbnNMaXN0KTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZmV0Y2hTdHVkZW50cygpXHJcbiAgICAgICAgZmV0Y2hDb3Vyc2VzKClcclxuICAgICAgICBmZXRjaEluc3RydXVjdG9ycygpXHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgbGV0IG5hbWVPZkNvdXJzZSA9IGluc3RydWN0b3IuZmluZChzID0+IHMuaWQgPT09IHVzZXJJZCk/LmF0dHJpYnV0ZXMubXlDb3Vyc2VbMF0/LmNvdXJzbmFtZVswXSAgLy9jb25zb2xlLmxvZyhpZE9mQ291cnNlKVxyXG5cclxuICAgIGxldCBjb3Vyc2VpZCA9IGNvdXJzZXNzLmZpbmQoYyA9PiBjLmF0dHJpYnV0ZXMuQ291cnNlVGl0bGUgPT09IG5hbWVPZkNvdXJzZSk/LmlkXHJcbiAgICBjb25zb2xlLmxvZyhjb3Vyc2VpZClcclxuXHJcbiAgICBsZXQgcmVnaXN0ZXJlZFN0dWRlbnRzID0gc3R1ZGVudHMuZmlsdGVyKHMgPT4gcy5hdHRyaWJ1dGVzLnJlZ2lzdGVyZGNvdXJzZXMuaW5jbHVkZXMoY291cnNlaWQpKTtcclxuICAgIGxldCBzdHVkZW50TnVtYmVyID0gcmVnaXN0ZXJlZFN0dWRlbnRzLmxlbmd0aDtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhyZWdpc3RlcmVkU3R1ZGVudHMpXHJcblxyXG4gICAgcmV0dXJuIChcclxuXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgdGVzdFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeVN0dWRlbnRzIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJjb2xsZWN0aW9uIiwiZ2V0RG9jcyIsImRiIiwiTXlTdHVkZW50cyIsImluc3RydWN0b3IiLCJjb3Vyc2VzcyIsInN0dWRlbnRzIiwic2V0U3R1ZGVudHlzIiwic2V0Q291cnNlc3MiLCJzZXRJbnN0cnVjdG9yIiwiZmV0Y2hDb3Vyc2VzIiwiY29tcGF0aW9uc0NvbGxlY3Rpb24iLCJjb21wYXRpb25zU25hcHNob3QiLCJjb21wYXRpb25zTGlzdCIsImRvY3MiLCJtYXAiLCJkb2MiLCJpZCIsImF0dHJpYnV0ZXMiLCJkYXRhIiwiZmV0Y2hTdHVkZW50cyIsImZldGNoSW5zdHJ1dWN0b3JzIiwibmFtZU9mQ291cnNlIiwiZmluZCIsInMiLCJ1c2VySWQiLCJteUNvdXJzZSIsImNvdXJzbmFtZSIsImNvdXJzZWlkIiwiYyIsIkNvdXJzZVRpdGxlIiwiY29uc29sZSIsImxvZyIsInJlZ2lzdGVyZWRTdHVkZW50cyIsImZpbHRlciIsInJlZ2lzdGVyZGNvdXJzZXMiLCJpbmNsdWRlcyIsInN0dWRlbnROdW1iZXIiLCJsZW5ndGgiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./component/Instructors/MyStudents.js\n"));

/***/ })

});