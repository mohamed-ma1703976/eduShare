"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/Instructor/profile";
exports.ids = ["pages/Instructor/profile"];
exports.modules = {

/***/ "./Firebase/Firebase.js":
/*!******************************!*\
  !*** ./Firebase/Firebase.js ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"app\": () => (/* binding */ app),\n/* harmony export */   \"auth\": () => (/* binding */ auth),\n/* harmony export */   \"collection\": () => (/* reexport safe */ firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection),\n/* harmony export */   \"db\": () => (/* binding */ db),\n/* harmony export */   \"storage\": () => (/* binding */ storage)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/storage */ \"firebase/storage\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__, firebase_auth__WEBPACK_IMPORTED_MODULE_2__, firebase_storage__WEBPACK_IMPORTED_MODULE_3__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__, firebase_auth__WEBPACK_IMPORTED_MODULE_2__, firebase_storage__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n // Import the storage module\nconst firebaseConfig = {\n    apiKey: \"AIzaSyC-ZYyj3mpgKszGlMQmETjBuBCqzYGFDh4\",\n    authDomain: \"edushare-e9242.firebaseapp.com\",\n    projectId: \"edushare-e9242\",\n    storageBucket: \"edushare-e9242.appspot.com\",\n    messagingSenderId: \"826723606155\",\n    appId: \"1:826723606155:web:4ef2868e093bc281523e8e\",\n    measurementId: \"G-BGCNB10FJ0\"\n};\n// Initialize Firebase\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)(app);\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)(app);\nconst storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.getStorage)(app); // Get the storage instance\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9GaXJlYmFzZS9GaXJlYmFzZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBNkM7QUFDaUI7QUFDdEI7QUFDTSxDQUFDLDRCQUE0QjtBQUUzRSxNQUFNSyxpQkFBaUI7SUFDckJDLFFBQVE7SUFDUkMsWUFBWTtJQUNaQyxXQUFXO0lBQ1hDLGVBQWU7SUFDZkMsbUJBQW1CO0lBQ25CQyxPQUFPO0lBQ1BDLGVBQWU7QUFDakI7QUFFQSxzQkFBc0I7QUFDdEIsTUFBTUMsTUFBTWIsMkRBQWFBLENBQUNLO0FBQzFCLE1BQU1TLEtBQUtiLGdFQUFZQSxDQUFDWTtBQUN4QixNQUFNRSxPQUFPWixzREFBT0EsQ0FBQ1U7QUFDckIsTUFBTUcsVUFBVVosNERBQVVBLENBQUNTLE1BQU0sMkJBQTJCO0FBRWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lZHVzaGFyZS8uL0ZpcmViYXNlL0ZpcmViYXNlLmpzPzMwMDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5pdGlhbGl6ZUFwcCB9IGZyb20gJ2ZpcmViYXNlL2FwcCc7XHJcbmltcG9ydCB7IGdldEZpcmVzdG9yZSwgY29sbGVjdGlvbiB9IGZyb20gJ2ZpcmViYXNlL2ZpcmVzdG9yZSc7XHJcbmltcG9ydCB7IGdldEF1dGggfSBmcm9tICdmaXJlYmFzZS9hdXRoJztcclxuaW1wb3J0IHsgZ2V0U3RvcmFnZSB9IGZyb20gJ2ZpcmViYXNlL3N0b3JhZ2UnOyAvLyBJbXBvcnQgdGhlIHN0b3JhZ2UgbW9kdWxlXHJcblxyXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcclxuICBhcGlLZXk6IFwiQUl6YVN5Qy1aWXlqM21wZ0tzekdsTVFtRVRqQnVCQ3F6WUdGRGg0XCIsXHJcbiAgYXV0aERvbWFpbjogXCJlZHVzaGFyZS1lOTI0Mi5maXJlYmFzZWFwcC5jb21cIixcclxuICBwcm9qZWN0SWQ6IFwiZWR1c2hhcmUtZTkyNDJcIixcclxuICBzdG9yYWdlQnVja2V0OiBcImVkdXNoYXJlLWU5MjQyLmFwcHNwb3QuY29tXCIsXHJcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiODI2NzIzNjA2MTU1XCIsXHJcbiAgYXBwSWQ6IFwiMTo4MjY3MjM2MDYxNTU6d2ViOjRlZjI4NjhlMDkzYmMyODE1MjNlOGVcIixcclxuICBtZWFzdXJlbWVudElkOiBcIkctQkdDTkIxMEZKMFwiXHJcbn07XHJcblxyXG4vLyBJbml0aWFsaXplIEZpcmViYXNlXHJcbmNvbnN0IGFwcCA9IGluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xyXG5jb25zdCBkYiA9IGdldEZpcmVzdG9yZShhcHApO1xyXG5jb25zdCBhdXRoID0gZ2V0QXV0aChhcHApO1xyXG5jb25zdCBzdG9yYWdlID0gZ2V0U3RvcmFnZShhcHApOyAvLyBHZXQgdGhlIHN0b3JhZ2UgaW5zdGFuY2VcclxuXHJcbmV4cG9ydCB7IGFwcCwgZGIsIGF1dGgsc3RvcmFnZSwgY29sbGVjdGlvbiB9O1xyXG4iXSwibmFtZXMiOlsiaW5pdGlhbGl6ZUFwcCIsImdldEZpcmVzdG9yZSIsImNvbGxlY3Rpb24iLCJnZXRBdXRoIiwiZ2V0U3RvcmFnZSIsImZpcmViYXNlQ29uZmlnIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwibWVhc3VyZW1lbnRJZCIsImFwcCIsImRiIiwiYXV0aCIsInN0b3JhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Firebase/Firebase.js\n");

/***/ }),

/***/ "./hooks/AuthProvider.js":
/*!*******************************!*\
  !*** ./hooks/AuthProvider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthContext\": () => (/* binding */ AuthContext),\n/* harmony export */   \"AuthProvider\": () => (/* binding */ AuthProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst AuthProvider = ({ children  })=>{\n    const [userId, setUserId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [currentId, setCurrentId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const login = (userId)=>{\n        setUserId(userId);\n    };\n    const logout = ()=>{\n        setUserId(null);\n    };\n    const currentIdState = (currentId)=>{\n        setCurrentId(currentId);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            userId,\n            login,\n            logout,\n            currentIdState,\n            currentId\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\hooks\\\\AuthProvider.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, undefined);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy9BdXRoUHJvdmlkZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFBZ0Q7QUFFekMsTUFBTUUsNEJBQWNGLG9EQUFhQSxHQUFHO0FBRXBDLE1BQU1HLGVBQWUsQ0FBQyxFQUFFQyxTQUFRLEVBQUUsR0FBSztJQUM1QyxNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR0wsK0NBQVFBLENBQUMsSUFBSTtJQUN6QyxNQUFNLENBQUNNLFdBQVdDLGFBQWEsR0FBR1AsK0NBQVFBLENBQUMsSUFBSTtJQUUvQyxNQUFNUSxRQUFRLENBQUNKLFNBQVc7UUFDeEJDLFVBQVVEO0lBQ1o7SUFFQSxNQUFNSyxTQUFTLElBQU07UUFDbkJKLFVBQVUsSUFBSTtJQUNoQjtJQUNBLE1BQU1LLGlCQUFpQixDQUFDSixZQUFjO1FBQ3BDQyxhQUFhRDtJQUNmO0lBRUEscUJBQ0UsOERBQUNMLFlBQVlVLFFBQVE7UUFBQ0MsT0FBTztZQUFFUjtZQUFRSTtZQUFPQztZQUFRQztZQUFlSjtRQUFTO2tCQUMzRUg7Ozs7OztBQUdQLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lZHVzaGFyZS8uL2hvb2tzL0F1dGhQcm92aWRlci5qcz9hYTUwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5leHBvcnQgY29uc3QgQXV0aFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IFt1c2VySWQsIHNldFVzZXJJZF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbY3VycmVudElkLCBzZXRDdXJyZW50SWRdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIGNvbnN0IGxvZ2luID0gKHVzZXJJZCkgPT4ge1xyXG4gICAgc2V0VXNlcklkKHVzZXJJZCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgc2V0VXNlcklkKG51bGwpO1xyXG4gIH07XHJcbiAgY29uc3QgY3VycmVudElkU3RhdGUgPSAoY3VycmVudElkKSA9PiB7XHJcbiAgICBzZXRDdXJyZW50SWQoY3VycmVudElkKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHVzZXJJZCwgbG9naW4sIGxvZ291dCAsY3VycmVudElkU3RhdGUsY3VycmVudElkfX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VTdGF0ZSIsIkF1dGhDb250ZXh0IiwiQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VySWQiLCJzZXRVc2VySWQiLCJjdXJyZW50SWQiLCJzZXRDdXJyZW50SWQiLCJsb2dpbiIsImxvZ291dCIsImN1cnJlbnRJZFN0YXRlIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./hooks/AuthProvider.js\n");

/***/ }),

/***/ "./hooks/getRole.js":
/*!**************************!*\
  !*** ./hooks/getRole.js ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getUserRole)\n/* harmony export */ });\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_firestore__WEBPACK_IMPORTED_MODULE_0__]);\nfirebase_firestore__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nasync function getUserRole(userId, app) {\n    const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getFirestore)(app);\n    const studentDocRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(db, \"Student\", userId);\n    const studentDoc = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getDoc)(studentDocRef);\n    const instructorDocRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(db, \"Instructor\", userId);\n    const instructorDoc = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getDoc)(instructorDocRef);\n    const adminDocRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(db, \"Admin\", userId);\n    const adminDoc = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getDoc)(adminDocRef);\n    let role;\n    if (studentDoc.exists()) {\n        role = \"Student\";\n    } else if (instructorDoc.exists()) {\n        role = \"Instructor\";\n    } else if (adminDoc.exists()) {\n        role = \"Admin\";\n    } else {\n        throw new Error(\"User not found in any role collection.\");\n    }\n    return role;\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy9nZXRSb2xlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQStEO0FBQ2hELGVBQWVHLFlBQVlDLE1BQU0sRUFBRUMsR0FBRyxFQUFFO0lBQ3JELE1BQU1DLEtBQUtOLGdFQUFZQSxDQUFDSztJQUV4QixNQUFNRSxnQkFBZ0JOLHVEQUFHQSxDQUFDSyxJQUFJLFdBQVdGO0lBQ3pDLE1BQU1JLGFBQWEsTUFBTU4sMERBQU1BLENBQUNLO0lBRWhDLE1BQU1FLG1CQUFtQlIsdURBQUdBLENBQUNLLElBQUksY0FBY0Y7SUFDL0MsTUFBTU0sZ0JBQWdCLE1BQU1SLDBEQUFNQSxDQUFDTztJQUVuQyxNQUFNRSxjQUFjVix1REFBR0EsQ0FBQ0ssSUFBSSxTQUFTRjtJQUNyQyxNQUFNUSxXQUFXLE1BQU1WLDBEQUFNQSxDQUFDUztJQUU5QixJQUFJRTtJQUVKLElBQUlMLFdBQVdNLE1BQU0sSUFBSTtRQUN2QkQsT0FBTztJQUNULE9BQU8sSUFBSUgsY0FBY0ksTUFBTSxJQUFJO1FBQ2pDRCxPQUFPO0lBQ1QsT0FBTyxJQUFJRCxTQUFTRSxNQUFNLElBQUk7UUFDNUJELE9BQU87SUFDVCxPQUFPO1FBQ0wsTUFBTSxJQUFJRSxNQUFNLDBDQUEwQztJQUM1RCxDQUFDO0lBRUQsT0FBT0Y7QUFDVCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWR1c2hhcmUvLi9ob29rcy9nZXRSb2xlLmpzP2JlMWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0RmlyZXN0b3JlLCBkb2MsIGdldERvYyB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlclJvbGUodXNlcklkLCBhcHApIHtcclxuICBjb25zdCBkYiA9IGdldEZpcmVzdG9yZShhcHApO1xyXG5cclxuICBjb25zdCBzdHVkZW50RG9jUmVmID0gZG9jKGRiLCBcIlN0dWRlbnRcIiwgdXNlcklkKTtcclxuICBjb25zdCBzdHVkZW50RG9jID0gYXdhaXQgZ2V0RG9jKHN0dWRlbnREb2NSZWYpO1xyXG5cclxuICBjb25zdCBpbnN0cnVjdG9yRG9jUmVmID0gZG9jKGRiLCBcIkluc3RydWN0b3JcIiwgdXNlcklkKTtcclxuICBjb25zdCBpbnN0cnVjdG9yRG9jID0gYXdhaXQgZ2V0RG9jKGluc3RydWN0b3JEb2NSZWYpO1xyXG5cclxuICBjb25zdCBhZG1pbkRvY1JlZiA9IGRvYyhkYiwgXCJBZG1pblwiLCB1c2VySWQpO1xyXG4gIGNvbnN0IGFkbWluRG9jID0gYXdhaXQgZ2V0RG9jKGFkbWluRG9jUmVmKTtcclxuXHJcbiAgbGV0IHJvbGU7XHJcblxyXG4gIGlmIChzdHVkZW50RG9jLmV4aXN0cygpKSB7XHJcbiAgICByb2xlID0gXCJTdHVkZW50XCI7XHJcbiAgfSBlbHNlIGlmIChpbnN0cnVjdG9yRG9jLmV4aXN0cygpKSB7XHJcbiAgICByb2xlID0gXCJJbnN0cnVjdG9yXCI7XHJcbiAgfSBlbHNlIGlmIChhZG1pbkRvYy5leGlzdHMoKSkge1xyXG4gICAgcm9sZSA9IFwiQWRtaW5cIjtcclxuICB9IGVsc2Uge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVXNlciBub3QgZm91bmQgaW4gYW55IHJvbGUgY29sbGVjdGlvbi5cIik7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcm9sZTtcclxufSJdLCJuYW1lcyI6WyJnZXRGaXJlc3RvcmUiLCJkb2MiLCJnZXREb2MiLCJnZXRVc2VyUm9sZSIsInVzZXJJZCIsImFwcCIsImRiIiwic3R1ZGVudERvY1JlZiIsInN0dWRlbnREb2MiLCJpbnN0cnVjdG9yRG9jUmVmIiwiaW5zdHJ1Y3RvckRvYyIsImFkbWluRG9jUmVmIiwiYWRtaW5Eb2MiLCJyb2xlIiwiZXhpc3RzIiwiRXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./hooks/getRole.js\n");

/***/ }),

/***/ "./pages/Instructor/profile.js":
/*!*************************************!*\
  !*** ./pages/Instructor/profile.js ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/system */ \"@mui/system\");\n/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_system__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Firebase/Firebase */ \"./Firebase/Firebase.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\n/* harmony import */ var _hooks_AuthProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/AuthProvider */ \"./hooks/AuthProvider.js\");\n/* harmony import */ var _hooks_getRole__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hooks/getRole */ \"./hooks/getRole.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_5__, firebase_firestore__WEBPACK_IMPORTED_MODULE_6__, _hooks_getRole__WEBPACK_IMPORTED_MODULE_8__]);\n([_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_5__, firebase_firestore__WEBPACK_IMPORTED_MODULE_6__, _hooks_getRole__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\n\nconst profile = ()=>{\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const { userId , userRole  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_hooks_AuthProvider__WEBPACK_IMPORTED_MODULE_7__.AuthContext);\n    let currentUserId = _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_5__.auth.currentUser.uid;\n    //console.log(getUserRole(userId, app))\n    const [useRole, setUseRole] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    console.log(user, userId, userRole, currentUserId);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        //getUserRole(userId, app).then(res => setUseRole(res))\n        const fetchUserData = async ()=>{\n            const role = await (0,_hooks_getRole__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(userId, _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_5__.app); // Wait for the promise to resolve\n            console.log(\"User role:\", role);\n            setUseRole(role);\n            if (!userId || !role) {\n                router.push(\"/\");\n                return;\n            }\n            const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.getFirestore)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_5__.app);\n            const userDocRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.doc)(db, role, userId);\n            const userDoc = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.getDoc)(userDocRef);\n            if (userDoc.exists()) {\n                let data = userDoc.data();\n                console.log(data);\n                setUser(data);\n            }\n        };\n        fetchUserData();\n    }, [\n        router,\n        userId,\n        useRole\n    ]);\n    if (!user) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\pages\\\\Instructor\\\\profile.js\",\n            lineNumber: 50,\n            columnNumber: 12\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_system__WEBPACK_IMPORTED_MODULE_2__.Box, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Card, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.CardMedia, {\n                    component: \"img\",\n                    height: \"200\",\n                    image: user.coverPicture || \"/path/to/default/cover/picture\",\n                    alt: \"Cover Image\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\pages\\\\Instructor\\\\profile.js\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.CardContent, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {\n                            variant: \"h5\",\n                            component: \"div\",\n                            children: user.displayName\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\pages\\\\Instructor\\\\profile.js\",\n                            lineNumber: 63,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {\n                            variant: \"subtitle1\",\n                            component: \"div\",\n                            children: user.title\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\pages\\\\Instructor\\\\profile.js\",\n                            lineNumber: 66,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {\n                            variant: \"body2\",\n                            color: \"text.secondary\",\n                            children: user.bio\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\pages\\\\Instructor\\\\profile.js\",\n                            lineNumber: 69,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\pages\\\\Instructor\\\\profile.js\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\pages\\\\Instructor\\\\profile.js\",\n            lineNumber: 55,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\senior2-firbase-project\\\\eduShare\\\\pages\\\\Instructor\\\\profile.js\",\n        lineNumber: 54,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (profile);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9JbnN0cnVjdG9yL3Byb2ZpbGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBK0Q7QUFDN0I7QUFDdUM7QUFDakM7QUFDWTtBQUNXO0FBQ1I7QUFDVjtBQUM3QyxNQUFNaUIsVUFBVSxJQUFNO0lBQ3BCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHbEIsK0NBQVFBLENBQUMsSUFBSTtJQUNyQyxNQUFNbUIsU0FBU1gsc0RBQVNBO0lBQ3hCLE1BQU0sRUFBRVksT0FBTSxFQUFFQyxTQUFRLEVBQUUsR0FBR25CLGlEQUFVQSxDQUFDWSw0REFBV0E7SUFDbkQsSUFBSVEsZ0JBQWdCWixvRUFBb0I7SUFFeEMsdUNBQXVDO0lBQ3ZDLE1BQU0sQ0FBQ2UsU0FBU0MsV0FBVyxHQUFHMUIsK0NBQVFBLENBQUM7SUFJdkMyQixRQUFRQyxHQUFHLENBQUNYLE1BQU1HLFFBQVFDLFVBQVVDO0lBRXBDckIsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLHVEQUF1RDtRQUV2RCxNQUFNNEIsZ0JBQWdCLFVBQVk7WUFDaEMsTUFBTUMsT0FBTyxNQUFNZiwwREFBV0EsQ0FBQ0ssUUFBUVgsbURBQUdBLEdBQUcsa0NBQWtDO1lBQy9Fa0IsUUFBUUMsR0FBRyxDQUFDLGNBQWNFO1lBQzFCSixXQUFXSTtZQUVYLElBQUksQ0FBQ1YsVUFBVSxDQUFDVSxNQUFNO2dCQUNwQlgsT0FBT1ksSUFBSSxDQUFDO2dCQUNaO1lBQ0YsQ0FBQztZQUNELE1BQU1DLEtBQUtyQixnRUFBWUEsQ0FBQ0YsbURBQUdBO1lBQzNCLE1BQU13QixhQUFhckIsdURBQUdBLENBQUNvQixJQUFJRixNQUFNVjtZQUNqQyxNQUFNYyxVQUFVLE1BQU1yQiwwREFBTUEsQ0FBQ29CO1lBRTdCLElBQUlDLFFBQVFDLE1BQU0sSUFBSTtnQkFDckIsSUFBSUMsT0FBT0YsUUFBUUUsSUFBSTtnQkFDdEJULFFBQVFDLEdBQUcsQ0FBQ1E7Z0JBQ1psQixRQUFRa0I7WUFDVixDQUFDO1FBQ0g7UUFFQVA7SUFDRixHQUFHO1FBQUNWO1FBQVFDO1FBQVFLO0tBQVE7SUFHNUIsSUFBSSxDQUFDUixNQUFNO1FBQ1QscUJBQU8sOERBQUNvQjtzQkFBSTs7Ozs7O0lBQ2QsQ0FBQztJQUVELHFCQUNFLDhEQUFDbEMsNENBQUdBO2tCQUNGLDRFQUFDQywrQ0FBSUE7OzhCQUNILDhEQUFDRSxvREFBU0E7b0JBQ1JnQyxXQUFVO29CQUNWQyxRQUFPO29CQUNQQyxPQUFPdkIsS0FBS3dCLFlBQVksSUFBSTtvQkFDNUJDLEtBQUk7Ozs7Ozs4QkFFTiw4REFBQ3JDLHNEQUFXQTs7c0NBQ1YsOERBQUNFLHFEQUFVQTs0QkFBQ29DLFNBQVE7NEJBQUtMLFdBQVU7c0NBQ2hDckIsS0FBSzJCLFdBQVc7Ozs7OztzQ0FFbkIsOERBQUNyQyxxREFBVUE7NEJBQUNvQyxTQUFROzRCQUFZTCxXQUFVO3NDQUN2Q3JCLEtBQUs0QixLQUFLOzs7Ozs7c0NBRWIsOERBQUN0QyxxREFBVUE7NEJBQUNvQyxTQUFROzRCQUFRRyxPQUFNO3NDQUMvQjdCLEtBQUs4QixHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1yQjtBQUVBLGlFQUFlL0IsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2VkdXNoYXJlLy4vcGFnZXMvSW5zdHJ1Y3Rvci9wcm9maWxlLmpzP2FkYmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQm94IH0gZnJvbSBcIkBtdWkvc3lzdGVtXCI7XHJcbmltcG9ydCB7IENhcmQsIENhcmRDb250ZW50LCBDYXJkTWVkaWEsIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgYXBwLCBhdXRoIH0gZnJvbSBcIi4uLy4uL0ZpcmViYXNlL0ZpcmViYXNlXCI7XHJcbmltcG9ydCB7IGdldEZpcmVzdG9yZSwgZG9jLCBnZXREb2MgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XHJcbmltcG9ydCB7IEF1dGhDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2hvb2tzL0F1dGhQcm92aWRlclwiO1xyXG5pbXBvcnQgZ2V0VXNlclJvbGUgZnJvbSBcIi4uLy4uL2hvb2tzL2dldFJvbGVcIlxyXG5jb25zdCBwcm9maWxlID0gKCkgPT4ge1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgdXNlcklkLCB1c2VyUm9sZSB9ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XHJcbiAgbGV0IGN1cnJlbnRVc2VySWQgPSBhdXRoLmN1cnJlbnRVc2VyLnVpZDtcclxuXHJcbiAgLy9jb25zb2xlLmxvZyhnZXRVc2VyUm9sZSh1c2VySWQsIGFwcCkpXHJcbiAgY29uc3QgW3VzZVJvbGUsIHNldFVzZVJvbGVdID0gdXNlU3RhdGUoXCJcIilcclxuXHJcblxyXG5cclxuICBjb25zb2xlLmxvZyh1c2VyLCB1c2VySWQsIHVzZXJSb2xlLCBjdXJyZW50VXNlcklkKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy9nZXRVc2VyUm9sZSh1c2VySWQsIGFwcCkudGhlbihyZXMgPT4gc2V0VXNlUm9sZShyZXMpKVxyXG5cclxuICAgIGNvbnN0IGZldGNoVXNlckRhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJvbGUgPSBhd2FpdCBnZXRVc2VyUm9sZSh1c2VySWQsIGFwcCk7IC8vIFdhaXQgZm9yIHRoZSBwcm9taXNlIHRvIHJlc29sdmVcclxuICAgICAgY29uc29sZS5sb2coJ1VzZXIgcm9sZTonLCByb2xlKTtcclxuICAgICAgc2V0VXNlUm9sZShyb2xlKVxyXG5cclxuICAgICAgaWYgKCF1c2VySWQgfHwgIXJvbGUpIHtcclxuICAgICAgICByb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGRiID0gZ2V0RmlyZXN0b3JlKGFwcCk7XHJcbiAgICAgIGNvbnN0IHVzZXJEb2NSZWYgPSBkb2MoZGIsIHJvbGUsIHVzZXJJZCk7XHJcbiAgICAgIGNvbnN0IHVzZXJEb2MgPSBhd2FpdCBnZXREb2ModXNlckRvY1JlZik7XHJcblxyXG4gICAgICBpZiAodXNlckRvYy5leGlzdHMoKSkge1xyXG4gICAgICAgbGV0IGRhdGEgPSB1c2VyRG9jLmRhdGEoKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgIHNldFVzZXIoZGF0YSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZmV0Y2hVc2VyRGF0YSgpO1xyXG4gIH0sIFtyb3V0ZXIsIHVzZXJJZCwgdXNlUm9sZV0pO1xyXG5cclxuXHJcbiAgaWYgKCF1c2VyKSB7XHJcbiAgICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3g+XHJcbiAgICAgIDxDYXJkPlxyXG4gICAgICAgIDxDYXJkTWVkaWFcclxuICAgICAgICAgIGNvbXBvbmVudD1cImltZ1wiXHJcbiAgICAgICAgICBoZWlnaHQ9XCIyMDBcIlxyXG4gICAgICAgICAgaW1hZ2U9e3VzZXIuY292ZXJQaWN0dXJlIHx8IFwiL3BhdGgvdG8vZGVmYXVsdC9jb3Zlci9waWN0dXJlXCJ9XHJcbiAgICAgICAgICBhbHQ9XCJDb3ZlciBJbWFnZVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8Q2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIiBjb21wb25lbnQ9XCJkaXZcIj5cclxuICAgICAgICAgICAge3VzZXIuZGlzcGxheU5hbWV9XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUxXCIgY29tcG9uZW50PVwiZGl2XCI+XHJcbiAgICAgICAgICAgIHt1c2VyLnRpdGxlfVxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICB7dXNlci5iaW99XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgPC9DYXJkPlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHByb2ZpbGU7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlQ29udGV4dCIsIkJveCIsIkNhcmQiLCJDYXJkQ29udGVudCIsIkNhcmRNZWRpYSIsIlR5cG9ncmFwaHkiLCJ1c2VSb3V0ZXIiLCJhcHAiLCJhdXRoIiwiZ2V0RmlyZXN0b3JlIiwiZG9jIiwiZ2V0RG9jIiwiQXV0aENvbnRleHQiLCJnZXRVc2VyUm9sZSIsInByb2ZpbGUiLCJ1c2VyIiwic2V0VXNlciIsInJvdXRlciIsInVzZXJJZCIsInVzZXJSb2xlIiwiY3VycmVudFVzZXJJZCIsImN1cnJlbnRVc2VyIiwidWlkIiwidXNlUm9sZSIsInNldFVzZVJvbGUiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2hVc2VyRGF0YSIsInJvbGUiLCJwdXNoIiwiZGIiLCJ1c2VyRG9jUmVmIiwidXNlckRvYyIsImV4aXN0cyIsImRhdGEiLCJkaXYiLCJjb21wb25lbnQiLCJoZWlnaHQiLCJpbWFnZSIsImNvdmVyUGljdHVyZSIsImFsdCIsInZhcmlhbnQiLCJkaXNwbGF5TmFtZSIsInRpdGxlIiwiY29sb3IiLCJiaW8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Instructor/profile.js\n");

/***/ }),

/***/ "@mui/material":
/*!********************************!*\
  !*** external "@mui/material" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ "@mui/system":
/*!******************************!*\
  !*** external "@mui/system" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("@mui/system");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("firebase/app");;

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/***/ ((module) => {

module.exports = import("firebase/auth");;

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/***/ ((module) => {

module.exports = import("firebase/firestore");;

/***/ }),

/***/ "firebase/storage":
/*!***********************************!*\
  !*** external "firebase/storage" ***!
  \***********************************/
/***/ ((module) => {

module.exports = import("firebase/storage");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/Instructor/profile.js"));
module.exports = __webpack_exports__;

})();