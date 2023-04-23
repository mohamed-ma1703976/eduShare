"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/Student/Profile",{

/***/ "./hooks/getRole.js":
/*!**************************!*\
  !*** ./hooks/getRole.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ getUserRole; }\n/* harmony export */ });\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n\nasync function getUserRole(userId, app) {\n    if (!userId) {\n        throw new Error(\"userId is null or undefined.\");\n    }\n    const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getFirestore)(app);\n    const studentDocRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(db, \"Student\", userId);\n    const studentDoc = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getDoc)(studentDocRef);\n    const instructorDocRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(db, \"Instructor\", userId);\n    const instructorDoc = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getDoc)(instructorDocRef);\n    const adminDocRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(db, \"Admin\", userId);\n    const adminDoc = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getDoc)(adminDocRef);\n    let role;\n    if (studentDoc.exists()) {\n        role = \"student\";\n    } else if (instructorDoc.exists()) {\n        role = \"Instructor\";\n    } else if (adminDoc.exists()) {\n        role = \"Admin\";\n    } else {\n        throw new Error(\"User not found in any role collection.\");\n    }\n    return role;\n}\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy9nZXRSb2xlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQStEO0FBQ2hELGVBQWVHLFlBQVlDLE1BQU0sRUFBRUMsR0FBRyxFQUFFO0lBRXJELElBQUksQ0FBQ0QsUUFBUTtRQUNYLE1BQU0sSUFBSUUsTUFBTSxnQ0FBZ0M7SUFDbEQsQ0FBQztJQUNELE1BQU1DLEtBQUtQLGdFQUFZQSxDQUFDSztJQUV4QixNQUFNRyxnQkFBZ0JQLHVEQUFHQSxDQUFDTSxJQUFJLFdBQVdIO0lBQ3pDLE1BQU1LLGFBQWEsTUFBTVAsMERBQU1BLENBQUNNO0lBRWhDLE1BQU1FLG1CQUFtQlQsdURBQUdBLENBQUNNLElBQUksY0FBY0g7SUFDL0MsTUFBTU8sZ0JBQWdCLE1BQU1ULDBEQUFNQSxDQUFDUTtJQUVuQyxNQUFNRSxjQUFjWCx1REFBR0EsQ0FBQ00sSUFBSSxTQUFTSDtJQUNyQyxNQUFNUyxXQUFXLE1BQU1YLDBEQUFNQSxDQUFDVTtJQUU5QixJQUFJRTtJQUVKLElBQUlMLFdBQVdNLE1BQU0sSUFBSTtRQUN2QkQsT0FBTztJQUNULE9BQU8sSUFBSUgsY0FBY0ksTUFBTSxJQUFJO1FBQ2pDRCxPQUFPO0lBQ1QsT0FBTyxJQUFJRCxTQUFTRSxNQUFNLElBQUk7UUFDNUJELE9BQU87SUFDVCxPQUFPO1FBQ0wsTUFBTSxJQUFJUixNQUFNLDBDQUEwQztJQUM1RCxDQUFDO0lBRUQsT0FBT1E7QUFDVCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2hvb2tzL2dldFJvbGUuanM/YmUxZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRGaXJlc3RvcmUsIGRvYywgZ2V0RG9jIH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBnZXRVc2VyUm9sZSh1c2VySWQsIGFwcCkge1xyXG5cclxuICBpZiAoIXVzZXJJZCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwidXNlcklkIGlzIG51bGwgb3IgdW5kZWZpbmVkLlwiKTtcclxuICB9XHJcbiAgY29uc3QgZGIgPSBnZXRGaXJlc3RvcmUoYXBwKTtcclxuXHJcbiAgY29uc3Qgc3R1ZGVudERvY1JlZiA9IGRvYyhkYiwgXCJTdHVkZW50XCIsIHVzZXJJZCk7XHJcbiAgY29uc3Qgc3R1ZGVudERvYyA9IGF3YWl0IGdldERvYyhzdHVkZW50RG9jUmVmKTtcclxuXHJcbiAgY29uc3QgaW5zdHJ1Y3RvckRvY1JlZiA9IGRvYyhkYiwgXCJJbnN0cnVjdG9yXCIsIHVzZXJJZCk7XHJcbiAgY29uc3QgaW5zdHJ1Y3RvckRvYyA9IGF3YWl0IGdldERvYyhpbnN0cnVjdG9yRG9jUmVmKTtcclxuXHJcbiAgY29uc3QgYWRtaW5Eb2NSZWYgPSBkb2MoZGIsIFwiQWRtaW5cIiwgdXNlcklkKTtcclxuICBjb25zdCBhZG1pbkRvYyA9IGF3YWl0IGdldERvYyhhZG1pbkRvY1JlZik7XHJcblxyXG4gIGxldCByb2xlO1xyXG5cclxuICBpZiAoc3R1ZGVudERvYy5leGlzdHMoKSkge1xyXG4gICAgcm9sZSA9IFwic3R1ZGVudFwiO1xyXG4gIH0gZWxzZSBpZiAoaW5zdHJ1Y3RvckRvYy5leGlzdHMoKSkge1xyXG4gICAgcm9sZSA9IFwiSW5zdHJ1Y3RvclwiO1xyXG4gIH0gZWxzZSBpZiAoYWRtaW5Eb2MuZXhpc3RzKCkpIHtcclxuICAgIHJvbGUgPSBcIkFkbWluXCI7XHJcbiAgfSBlbHNlIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihcIlVzZXIgbm90IGZvdW5kIGluIGFueSByb2xlIGNvbGxlY3Rpb24uXCIpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJvbGU7XHJcbn0iXSwibmFtZXMiOlsiZ2V0RmlyZXN0b3JlIiwiZG9jIiwiZ2V0RG9jIiwiZ2V0VXNlclJvbGUiLCJ1c2VySWQiLCJhcHAiLCJFcnJvciIsImRiIiwic3R1ZGVudERvY1JlZiIsInN0dWRlbnREb2MiLCJpbnN0cnVjdG9yRG9jUmVmIiwiaW5zdHJ1Y3RvckRvYyIsImFkbWluRG9jUmVmIiwiYWRtaW5Eb2MiLCJyb2xlIiwiZXhpc3RzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./hooks/getRole.js\n"));

/***/ })

});