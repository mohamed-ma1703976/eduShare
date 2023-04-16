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
exports.id = "pages/Instructor";
exports.ids = ["pages/Instructor"];
exports.modules = {

/***/ "./Firebase/Firebase.js":
/*!******************************!*\
  !*** ./Firebase/Firebase.js ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"app\": () => (/* binding */ app),\n/* harmony export */   \"auth\": () => (/* binding */ auth),\n/* harmony export */   \"collection\": () => (/* reexport safe */ firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection),\n/* harmony export */   \"db\": () => (/* binding */ db)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__, firebase_auth__WEBPACK_IMPORTED_MODULE_2__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__, firebase_auth__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\nconst firebaseConfig = {\n    apiKey: \"AIzaSyC-ZYyj3mpgKszGlMQmETjBuBCqzYGFDh4\",\n    authDomain: \"edushare-e9242.firebaseapp.com\",\n    projectId: \"edushare-e9242\",\n    storageBucket: \"edushare-e9242.appspot.com\",\n    messagingSenderId: \"826723606155\",\n    appId: \"1:826723606155:web:4ef2868e093bc281523e8e\",\n    measurementId: \"G-BGCNB10FJ0\"\n};\n// Initialize Firebase\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)(app);\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)(app);\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9GaXJlYmFzZS9GaXJlYmFzZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQTZDO0FBQ2lCO0FBQ3RCO0FBRXhDLE1BQU1JLGlCQUFpQjtJQUNyQkMsUUFBUTtJQUNSQyxZQUFZO0lBQ1pDLFdBQVc7SUFDWEMsZUFBZTtJQUNmQyxtQkFBbUI7SUFDbkJDLE9BQU87SUFDUEMsZUFBZTtBQUNqQjtBQUVBLHNCQUFzQjtBQUN0QixNQUFNQyxNQUFNWiwyREFBYUEsQ0FBQ0k7QUFDMUIsTUFBTVMsS0FBS1osZ0VBQVlBLENBQUNXO0FBQ3hCLE1BQU1FLE9BQU9YLHNEQUFPQSxDQUFDUztBQUVnQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VkdXNoYXJlLy4vRmlyZWJhc2UvRmlyZWJhc2UuanM/MzAwNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbml0aWFsaXplQXBwIH0gZnJvbSAnZmlyZWJhc2UvYXBwJztcbmltcG9ydCB7IGdldEZpcmVzdG9yZSwgY29sbGVjdGlvbiB9IGZyb20gJ2ZpcmViYXNlL2ZpcmVzdG9yZSc7XG5pbXBvcnQgeyBnZXRBdXRoIH0gZnJvbSAnZmlyZWJhc2UvYXV0aCc7XG5cbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xuICBhcGlLZXk6IFwiQUl6YVN5Qy1aWXlqM21wZ0tzekdsTVFtRVRqQnVCQ3F6WUdGRGg0XCIsXG4gIGF1dGhEb21haW46IFwiZWR1c2hhcmUtZTkyNDIuZmlyZWJhc2VhcHAuY29tXCIsXG4gIHByb2plY3RJZDogXCJlZHVzaGFyZS1lOTI0MlwiLFxuICBzdG9yYWdlQnVja2V0OiBcImVkdXNoYXJlLWU5MjQyLmFwcHNwb3QuY29tXCIsXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjgyNjcyMzYwNjE1NVwiLFxuICBhcHBJZDogXCIxOjgyNjcyMzYwNjE1NTp3ZWI6NGVmMjg2OGUwOTNiYzI4MTUyM2U4ZVwiLFxuICBtZWFzdXJlbWVudElkOiBcIkctQkdDTkIxMEZKMFwiXG59O1xuXG4vLyBJbml0aWFsaXplIEZpcmViYXNlXG5jb25zdCBhcHAgPSBpbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcbmNvbnN0IGRiID0gZ2V0RmlyZXN0b3JlKGFwcCk7XG5jb25zdCBhdXRoID0gZ2V0QXV0aChhcHApO1xuXG5leHBvcnQgeyBhcHAsIGRiLCBhdXRoLCBjb2xsZWN0aW9uIH07XG4iXSwibmFtZXMiOlsiaW5pdGlhbGl6ZUFwcCIsImdldEZpcmVzdG9yZSIsImNvbGxlY3Rpb24iLCJnZXRBdXRoIiwiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJtZWFzdXJlbWVudElkIiwiYXBwIiwiZGIiLCJhdXRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Firebase/Firebase.js\n");

/***/ }),

/***/ "./hooks/useFetch.js":
/*!***************************!*\
  !*** ./hooks/useFetch.js ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\n/* harmony import */ var _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Firebase/Firebase */ \"./Firebase/Firebase.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_firestore__WEBPACK_IMPORTED_MODULE_1__, _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_2__]);\n([firebase_firestore__WEBPACK_IMPORTED_MODULE_1__, _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\nconst useFetch = (path)=>{\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            setLoading(true);\n            try {\n                const querySnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDocs)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_2__.db, path));\n                const courses = querySnapshot.docs.map((doc)=>({\n                        ...doc.data(),\n                        id: doc.id\n                    }));\n                setData(courses);\n                setLoading(false);\n            } catch (error) {\n                setError(error);\n                setLoading(false);\n            }\n        };\n        fetchData();\n    }, [\n        path\n    ]);\n    return {\n        data,\n        error,\n        loading\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useFetch);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy91c2VGZXRjaC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUE0QztBQUNhO0FBQ2Y7QUFFMUMsTUFBTUssV0FBVyxDQUFDQyxPQUFTO0lBQ3pCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHUCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ25DLE1BQU0sQ0FBQ1EsT0FBT0MsU0FBUyxHQUFHVCwrQ0FBUUEsQ0FBQyxJQUFJO0lBQ3ZDLE1BQU0sQ0FBQ1UsU0FBU0MsV0FBVyxHQUFHWCwrQ0FBUUEsQ0FBQyxJQUFJO0lBRTNDRCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsTUFBTWEsWUFBWSxVQUFZO1lBQzVCRCxXQUFXLElBQUk7WUFDZixJQUFJO2dCQUNGLE1BQU1FLGdCQUFnQixNQUFNWCwyREFBT0EsQ0FBQ0QsOERBQVVBLENBQUNFLGtEQUFFQSxFQUFFRTtnQkFDbkQsTUFBTVMsVUFBVUQsY0FBY0UsSUFBSSxDQUFDQyxHQUFHLENBQUMsQ0FBQ0MsTUFBUzt3QkFBRSxHQUFHQSxJQUFJWCxJQUFJLEVBQUU7d0JBQUVZLElBQUlELElBQUlDLEVBQUU7b0JBQUM7Z0JBQzdFWCxRQUFRTztnQkFDUkgsV0FBVyxLQUFLO1lBQ2xCLEVBQUUsT0FBT0gsT0FBTztnQkFDZEMsU0FBU0Q7Z0JBQ1RHLFdBQVcsS0FBSztZQUNsQjtRQUNGO1FBQ0FDO0lBQ0YsR0FBRztRQUFDUDtLQUFLO0lBRVQsT0FBTztRQUFFQztRQUFNRTtRQUFPRTtJQUFRO0FBQ2hDO0FBRUEsaUVBQWVOLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lZHVzaGFyZS8uL2hvb2tzL3VzZUZldGNoLmpzPzU2ODMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY29sbGVjdGlvbiwgZ2V0RG9jcyB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcbmltcG9ydCB7IGRiIH0gZnJvbSBcIi4uL0ZpcmViYXNlL0ZpcmViYXNlXCI7XG5cbmNvbnN0IHVzZUZldGNoID0gKHBhdGgpID0+IHtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBxdWVyeVNuYXBzaG90ID0gYXdhaXQgZ2V0RG9jcyhjb2xsZWN0aW9uKGRiLCBwYXRoKSk7XG4gICAgICAgIGNvbnN0IGNvdXJzZXMgPSBxdWVyeVNuYXBzaG90LmRvY3MubWFwKChkb2MpID0+ICh7IC4uLmRvYy5kYXRhKCksIGlkOiBkb2MuaWQgfSkpO1xuICAgICAgICBzZXREYXRhKGNvdXJzZXMpO1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHNldEVycm9yKGVycm9yKTtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICBmZXRjaERhdGEoKTtcbiAgfSwgW3BhdGhdKTtcblxuICByZXR1cm4geyBkYXRhLCBlcnJvciwgbG9hZGluZyB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlRmV0Y2g7XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJjb2xsZWN0aW9uIiwiZ2V0RG9jcyIsImRiIiwidXNlRmV0Y2giLCJwYXRoIiwiZGF0YSIsInNldERhdGEiLCJlcnJvciIsInNldEVycm9yIiwibG9hZGluZyIsInNldExvYWRpbmciLCJmZXRjaERhdGEiLCJxdWVyeVNuYXBzaG90IiwiY291cnNlcyIsImRvY3MiLCJtYXAiLCJkb2MiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./hooks/useFetch.js\n");

/***/ }),

/***/ "./pages/Instructor/index.js":
/*!***********************************!*\
  !*** ./pages/Instructor/index.js ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ instructorDashboard)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useFetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useFetch */ \"./hooks/useFetch.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useFetch__WEBPACK_IMPORTED_MODULE_2__]);\n_hooks_useFetch__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nfunction instructorDashboard() {\n    const [statusCheck, setstatusCheck] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { data , loading , error  } = (0,_hooks_useFetch__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"http://localhost:1337/api/instructor-signups\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (data && data.data) {\n            const hasPendingRequests = data.data.some((item)=>item.attributes.Status === \"Pending\");\n            setstatusCheck(hasPendingRequests);\n        }\n    }, [\n        data\n    ]);\n    console.log(statusCheck);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: statusCheck ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Your request is pending\"\n            }, void 0, false, {\n                fileName: \"/Users/mohamedhossam/Documents/GitHub/eduShare/pages/Instructor/index.js\",\n                lineNumber: 25,\n                columnNumber: 21\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Instructor Dashboard\"\n            }, void 0, false, {\n                fileName: \"/Users/mohamedhossam/Documents/GitHub/eduShare/pages/Instructor/index.js\",\n                lineNumber: 27,\n                columnNumber: 21\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/mohamedhossam/Documents/GitHub/eduShare/pages/Instructor/index.js\",\n            lineNumber: 23,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/mohamedhossam/Documents/GitHub/eduShare/pages/Instructor/index.js\",\n        lineNumber: 21,\n        columnNumber: 9\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9JbnN0cnVjdG9yL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQXdEO0FBQ1o7QUFFN0IsU0FBU0ssc0JBQXNCO0lBRTFDLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHSiwrQ0FBUUEsQ0FBQyxLQUFLO0lBQ3BELE1BQU0sRUFBRUssS0FBSSxFQUFFQyxRQUFPLEVBQUVDLE1BQUssRUFBRSxHQUFHTiwyREFBUUEsQ0FBQztJQUMxQ0YsZ0RBQVNBLENBQUMsSUFBTTtRQUNaLElBQUlNLFFBQVFBLEtBQUtBLElBQUksRUFBRTtZQUNuQixNQUFNRyxxQkFBcUJILEtBQUtBLElBQUksQ0FBQ0ksSUFBSSxDQUNyQyxDQUFDQyxPQUFTQSxLQUFLQyxVQUFVLENBQUNDLE1BQU0sS0FBSztZQUV6Q1IsZUFBZUk7UUFDbkIsQ0FBQztJQUNMLEdBQUc7UUFBQ0g7S0FBSztJQUdUUSxRQUFRQyxHQUFHLENBQUNYO0lBRVoscUJBQ0ksOERBQUNZO2tCQUVHLDRFQUFDQTtzQkFDSVosNEJBQ0csOERBQUNhOzBCQUFFOzs7OztxQ0FFSCw4REFBQ0E7MEJBQUU7Ozs7O29CQUNOOzs7Ozs7Ozs7OztBQUtqQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWR1c2hhcmUvLi9wYWdlcy9JbnN0cnVjdG9yL2luZGV4LmpzPzFmMmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZSwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHVzZUZldGNoIGZyb20gXCIuLi8uLi9ob29rcy91c2VGZXRjaFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbnN0cnVjdG9yRGFzaGJvYXJkKCkge1xuXG4gICAgY29uc3QgW3N0YXR1c0NoZWNrLCBzZXRzdGF0dXNDaGVja10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICBjb25zdCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH0gPSB1c2VGZXRjaCgnaHR0cDovL2xvY2FsaG9zdDoxMzM3L2FwaS9pbnN0cnVjdG9yLXNpZ251cHMnKVxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChkYXRhICYmIGRhdGEuZGF0YSkge1xuICAgICAgICAgICAgY29uc3QgaGFzUGVuZGluZ1JlcXVlc3RzID0gZGF0YS5kYXRhLnNvbWUoXG4gICAgICAgICAgICAgICAgKGl0ZW0pID0+IGl0ZW0uYXR0cmlidXRlcy5TdGF0dXMgPT09IFwiUGVuZGluZ1wiXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgc2V0c3RhdHVzQ2hlY2soaGFzUGVuZGluZ1JlcXVlc3RzKTtcbiAgICAgICAgfVxuICAgIH0sIFtkYXRhXSk7XG5cblxuICAgIGNvbnNvbGUubG9nKHN0YXR1c0NoZWNrKTtcbiAgICBcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHtzdGF0dXNDaGVjayA/IChcbiAgICAgICAgICAgICAgICAgICAgPHA+WW91ciByZXF1ZXN0IGlzIHBlbmRpbmc8L3A+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgPHA+SW5zdHJ1Y3RvciBEYXNoYm9hcmQ8L3A+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2UiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZUZldGNoIiwiaW5zdHJ1Y3RvckRhc2hib2FyZCIsInN0YXR1c0NoZWNrIiwic2V0c3RhdHVzQ2hlY2siLCJkYXRhIiwibG9hZGluZyIsImVycm9yIiwiaGFzUGVuZGluZ1JlcXVlc3RzIiwic29tZSIsIml0ZW0iLCJhdHRyaWJ1dGVzIiwiU3RhdHVzIiwiY29uc29sZSIsImxvZyIsImRpdiIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Instructor/index.js\n");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/Instructor/index.js"));
module.exports = __webpack_exports__;

})();