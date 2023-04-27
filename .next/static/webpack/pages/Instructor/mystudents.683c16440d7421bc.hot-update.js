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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Firebase/Firebase */ \"./Firebase/Firebase.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction MyStudents() {\n    var _instructor_find_attributes_myCourse_, _instructor_find, _coursess_find;\n    _s();\n    const [students, setStudentys] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [coursess, setCoursess] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [instructor, setInstructor] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    let currentId = _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_4__.auth.currentUser.uid;\n    async function fetchCourses() {\n        const compationsCollection = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_4__.db, \"Course\");\n        const compationsSnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDocs)(compationsCollection);\n        const compationsList = compationsSnapshot.docs.map((doc)=>({\n                id: doc.id,\n                attributes: doc.data()\n            }));\n        setCoursess(compationsList);\n    }\n    async function fetchStudents() {\n        const compationsCollection = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_4__.db, \"Student\");\n        const compationsSnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDocs)(compationsCollection);\n        const compationsList = compationsSnapshot.docs.map((doc)=>({\n                id: doc.id,\n                attributes: doc.data()\n            }));\n        setStudentys(compationsList);\n    }\n    async function fetchInstruuctors() {\n        const compationsCollection = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_4__.db, \"Instructor\");\n        const compationsSnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDocs)(compationsCollection);\n        const compationsList = compationsSnapshot.docs.map((doc)=>({\n                id: doc.id,\n                attributes: doc.data()\n            }));\n        setInstructor(compationsList);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchStudents();\n        fetchCourses();\n        fetchInstruuctors();\n    }, []);\n    let nameOfCourse = (_instructor_find_attributes_myCourse_ = (_instructor_find = instructor.find((s)=>s.id === userId)) === null || _instructor_find === void 0 ? void 0 : _instructor_find.attributes.myCourse[0]) === null || _instructor_find_attributes_myCourse_ === void 0 ? void 0 : _instructor_find_attributes_myCourse_.coursname[0] //console.log(idOfCourse)\n    ;\n    let courseid = (_coursess_find = coursess.find((c)=>c.attributes.CourseTitle === nameOfCourse)) === null || _coursess_find === void 0 ? void 0 : _coursess_find.id;\n    console.log(courseid);\n    let registeredStudents = students.filter((s)=>s.attributes.registerdcourses.includes(courseid));\n    let studentNumber = registeredStudents.length;\n    console.log(registeredStudents);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"test\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\sdp-firebase-final\\\\eduShare\\\\component\\\\Instructors\\\\MyStudents.js\",\n        lineNumber: 61,\n        columnNumber: 9\n    }, this);\n}\n_s(MyStudents, \"8DUWdtSpYwZofLXSP7XZFkEfoUA=\");\n_c = MyStudents;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyStudents);\nvar _c;\n$RefreshReg$(_c, \"MyStudents\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnQvSW5zdHJ1Y3RvcnMvTXlTdHVkZW50cy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFBa0Q7QUFDWDtBQUNrQjtBQUNOO0FBQ25ELFNBQVNRLGFBQWE7UUE0Q0NDLHVDQUFBQSxrQkFFSkM7O0lBN0NmLE1BQU0sQ0FBQ0MsVUFBVUMsYUFBYSxHQUFHViwrQ0FBUUEsQ0FBQyxFQUFFO0lBQzVDLE1BQU0sQ0FBQ1EsVUFBVUcsWUFBWSxHQUFHWCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQzNDLE1BQU0sQ0FBQ08sWUFBWUssY0FBYyxHQUFHWiwrQ0FBUUEsQ0FBQyxFQUFFO0lBRWpELElBQUlhLFlBQVlULG9FQUFvQjtJQUNsQyxlQUFlWSxlQUFlO1FBQzFCLE1BQU1DLHVCQUF1QmYsOERBQVVBLENBQUNHLGtEQUFFQSxFQUFFO1FBQzVDLE1BQU1hLHFCQUFxQixNQUFNZiwyREFBT0EsQ0FBQ2M7UUFDekMsTUFBTUUsaUJBQWlCRCxtQkFBbUJFLElBQUksQ0FBQ0MsR0FBRyxDQUFDLENBQUNDLE1BQVM7Z0JBQ3pEQyxJQUFJRCxJQUFJQyxFQUFFO2dCQUNWQyxZQUFZRixJQUFJRyxJQUFJO1lBQ3hCO1FBQ0FkLFlBQVlRO0lBQ2hCO0lBRUEsZUFBZU8sZ0JBQWdCO1FBQzNCLE1BQU1ULHVCQUF1QmYsOERBQVVBLENBQUNHLGtEQUFFQSxFQUFFO1FBQzVDLE1BQU1hLHFCQUFxQixNQUFNZiwyREFBT0EsQ0FBQ2M7UUFDekMsTUFBTUUsaUJBQWlCRCxtQkFBbUJFLElBQUksQ0FBQ0MsR0FBRyxDQUFDLENBQUNDLE1BQVM7Z0JBQ3pEQyxJQUFJRCxJQUFJQyxFQUFFO2dCQUNWQyxZQUFZRixJQUFJRyxJQUFJO1lBQ3hCO1FBQ0FmLGFBQWFTO0lBQ2pCO0lBRUEsZUFBZVEsb0JBQW9CO1FBQy9CLE1BQU1WLHVCQUF1QmYsOERBQVVBLENBQUNHLGtEQUFFQSxFQUFFO1FBQzVDLE1BQU1hLHFCQUFxQixNQUFNZiwyREFBT0EsQ0FBQ2M7UUFDekMsTUFBTUUsaUJBQWlCRCxtQkFBbUJFLElBQUksQ0FBQ0MsR0FBRyxDQUFDLENBQUNDLE1BQVM7Z0JBQ3pEQyxJQUFJRCxJQUFJQyxFQUFFO2dCQUNWQyxZQUFZRixJQUFJRyxJQUFJO1lBQ3hCO1FBQ0FiLGNBQWNPO0lBQ2xCO0lBSUFwQixnREFBU0EsQ0FBQyxJQUFNO1FBQ1oyQjtRQUNBVjtRQUNBVztJQUNKLEdBQUcsRUFBRTtJQUVMLElBQUlDLGVBQWVyQixDQUFBQSx3Q0FBQUEsQ0FBQUEsbUJBQUFBLFdBQVdzQixJQUFJLENBQUNDLENBQUFBLElBQUtBLEVBQUVQLEVBQUUsS0FBS1EscUJBQTlCeEIsOEJBQUFBLEtBQUFBLElBQUFBLGlCQUF1Q2lCLFdBQVdRLFFBQVEsQ0FBQyxFQUFFLGNBQTdEekIsbURBQUFBLEtBQUFBLElBQUFBLHNDQUErRDBCLFNBQVMsQ0FBQyxFQUFFLENBQUUseUJBQXlCOztJQUV6SCxJQUFJQyxXQUFXMUIsQ0FBQUEsaUJBQUFBLFNBQVNxQixJQUFJLENBQUNNLENBQUFBLElBQUtBLEVBQUVYLFVBQVUsQ0FBQ1ksV0FBVyxLQUFLUiwyQkFBaERwQiw0QkFBQUEsS0FBQUEsSUFBQUEsZUFBK0RlLEVBQUU7SUFDaEZjLFFBQVFDLEdBQUcsQ0FBQ0o7SUFFWixJQUFJSyxxQkFBcUI5QixTQUFTK0IsTUFBTSxDQUFDVixDQUFBQSxJQUFLQSxFQUFFTixVQUFVLENBQUNpQixnQkFBZ0IsQ0FBQ0MsUUFBUSxDQUFDUjtJQUNyRixJQUFJUyxnQkFBZ0JKLG1CQUFtQkssTUFBTTtJQUU3Q1AsUUFBUUMsR0FBRyxDQUFDQztJQUVaLHFCQUVJLDhEQUFDTTtrQkFBSTs7Ozs7O0FBSWI7R0E1RFN2QztLQUFBQTtBQThEVCwrREFBZUEsVUFBVUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnQvSW5zdHJ1Y3RvcnMvTXlTdHVkZW50cy5qcz9mMDQ0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiXHJcbmltcG9ydCB7IGNvbGxlY3Rpb24sIGdldERvY3MgfSBmcm9tICdmaXJlYmFzZS9maXJlc3RvcmUnO1xyXG5pbXBvcnQgeyBhdXRoLCBkYiB9IGZyb20gJy4uLy4uL0ZpcmViYXNlL0ZpcmViYXNlJztcclxuZnVuY3Rpb24gTXlTdHVkZW50cygpIHtcclxuICAgIGNvbnN0IFtzdHVkZW50cywgc2V0U3R1ZGVudHlzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtjb3Vyc2Vzcywgc2V0Q291cnNlc3NdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2luc3RydWN0b3IsIHNldEluc3RydWN0b3JdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICBsZXQgY3VycmVudElkID0gYXV0aC5jdXJyZW50VXNlci51aWRcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoQ291cnNlcygpIHtcclxuICAgICAgICBjb25zdCBjb21wYXRpb25zQ29sbGVjdGlvbiA9IGNvbGxlY3Rpb24oZGIsIFwiQ291cnNlXCIpO1xyXG4gICAgICAgIGNvbnN0IGNvbXBhdGlvbnNTbmFwc2hvdCA9IGF3YWl0IGdldERvY3MoY29tcGF0aW9uc0NvbGxlY3Rpb24pO1xyXG4gICAgICAgIGNvbnN0IGNvbXBhdGlvbnNMaXN0ID0gY29tcGF0aW9uc1NuYXBzaG90LmRvY3MubWFwKChkb2MpID0+ICh7XHJcbiAgICAgICAgICAgIGlkOiBkb2MuaWQsXHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZXM6IGRvYy5kYXRhKCksXHJcbiAgICAgICAgfSkpO1xyXG4gICAgICAgIHNldENvdXJzZXNzKGNvbXBhdGlvbnNMaXN0KTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaFN0dWRlbnRzKCkge1xyXG4gICAgICAgIGNvbnN0IGNvbXBhdGlvbnNDb2xsZWN0aW9uID0gY29sbGVjdGlvbihkYiwgXCJTdHVkZW50XCIpO1xyXG4gICAgICAgIGNvbnN0IGNvbXBhdGlvbnNTbmFwc2hvdCA9IGF3YWl0IGdldERvY3MoY29tcGF0aW9uc0NvbGxlY3Rpb24pO1xyXG4gICAgICAgIGNvbnN0IGNvbXBhdGlvbnNMaXN0ID0gY29tcGF0aW9uc1NuYXBzaG90LmRvY3MubWFwKChkb2MpID0+ICh7XHJcbiAgICAgICAgICAgIGlkOiBkb2MuaWQsXHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZXM6IGRvYy5kYXRhKCksXHJcbiAgICAgICAgfSkpO1xyXG4gICAgICAgIHNldFN0dWRlbnR5cyhjb21wYXRpb25zTGlzdCk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hJbnN0cnV1Y3RvcnMoKSB7XHJcbiAgICAgICAgY29uc3QgY29tcGF0aW9uc0NvbGxlY3Rpb24gPSBjb2xsZWN0aW9uKGRiLCBcIkluc3RydWN0b3JcIik7XHJcbiAgICAgICAgY29uc3QgY29tcGF0aW9uc1NuYXBzaG90ID0gYXdhaXQgZ2V0RG9jcyhjb21wYXRpb25zQ29sbGVjdGlvbik7XHJcbiAgICAgICAgY29uc3QgY29tcGF0aW9uc0xpc3QgPSBjb21wYXRpb25zU25hcHNob3QuZG9jcy5tYXAoKGRvYykgPT4gKHtcclxuICAgICAgICAgICAgaWQ6IGRvYy5pZCxcclxuICAgICAgICAgICAgYXR0cmlidXRlczogZG9jLmRhdGEoKSxcclxuICAgICAgICB9KSk7XHJcbiAgICAgICAgc2V0SW5zdHJ1Y3Rvcihjb21wYXRpb25zTGlzdCk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGZldGNoU3R1ZGVudHMoKVxyXG4gICAgICAgIGZldGNoQ291cnNlcygpXHJcbiAgICAgICAgZmV0Y2hJbnN0cnV1Y3RvcnMoKVxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGxldCBuYW1lT2ZDb3Vyc2UgPSBpbnN0cnVjdG9yLmZpbmQocyA9PiBzLmlkID09PSB1c2VySWQpPy5hdHRyaWJ1dGVzLm15Q291cnNlWzBdPy5jb3Vyc25hbWVbMF0gIC8vY29uc29sZS5sb2coaWRPZkNvdXJzZSlcclxuXHJcbiAgICBsZXQgY291cnNlaWQgPSBjb3Vyc2Vzcy5maW5kKGMgPT4gYy5hdHRyaWJ1dGVzLkNvdXJzZVRpdGxlID09PSBuYW1lT2ZDb3Vyc2UpPy5pZFxyXG4gICAgY29uc29sZS5sb2coY291cnNlaWQpXHJcblxyXG4gICAgbGV0IHJlZ2lzdGVyZWRTdHVkZW50cyA9IHN0dWRlbnRzLmZpbHRlcihzID0+IHMuYXR0cmlidXRlcy5yZWdpc3RlcmRjb3Vyc2VzLmluY2x1ZGVzKGNvdXJzZWlkKSk7XHJcbiAgICBsZXQgc3R1ZGVudE51bWJlciA9IHJlZ2lzdGVyZWRTdHVkZW50cy5sZW5ndGg7XHJcblxyXG4gICAgY29uc29sZS5sb2cocmVnaXN0ZXJlZFN0dWRlbnRzKVxyXG5cclxuICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHRlc3RcclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlTdHVkZW50cyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiY29sbGVjdGlvbiIsImdldERvY3MiLCJhdXRoIiwiZGIiLCJNeVN0dWRlbnRzIiwiaW5zdHJ1Y3RvciIsImNvdXJzZXNzIiwic3R1ZGVudHMiLCJzZXRTdHVkZW50eXMiLCJzZXRDb3Vyc2VzcyIsInNldEluc3RydWN0b3IiLCJjdXJyZW50SWQiLCJjdXJyZW50VXNlciIsInVpZCIsImZldGNoQ291cnNlcyIsImNvbXBhdGlvbnNDb2xsZWN0aW9uIiwiY29tcGF0aW9uc1NuYXBzaG90IiwiY29tcGF0aW9uc0xpc3QiLCJkb2NzIiwibWFwIiwiZG9jIiwiaWQiLCJhdHRyaWJ1dGVzIiwiZGF0YSIsImZldGNoU3R1ZGVudHMiLCJmZXRjaEluc3RydXVjdG9ycyIsIm5hbWVPZkNvdXJzZSIsImZpbmQiLCJzIiwidXNlcklkIiwibXlDb3Vyc2UiLCJjb3Vyc25hbWUiLCJjb3Vyc2VpZCIsImMiLCJDb3Vyc2VUaXRsZSIsImNvbnNvbGUiLCJsb2ciLCJyZWdpc3RlcmVkU3R1ZGVudHMiLCJmaWx0ZXIiLCJyZWdpc3RlcmRjb3Vyc2VzIiwiaW5jbHVkZXMiLCJzdHVkZW50TnVtYmVyIiwibGVuZ3RoIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./component/Instructors/MyStudents.js\n"));

/***/ })

});