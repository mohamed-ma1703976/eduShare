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
exports.id = "pages/Student/Profile";
exports.ids = ["pages/Student/Profile"];
exports.modules = {

/***/ "./Firebase/Firebase.js":
/*!******************************!*\
  !*** ./Firebase/Firebase.js ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"app\": () => (/* binding */ app),\n/* harmony export */   \"auth\": () => (/* binding */ auth),\n/* harmony export */   \"collection\": () => (/* reexport safe */ firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection),\n/* harmony export */   \"db\": () => (/* binding */ db),\n/* harmony export */   \"storage\": () => (/* binding */ storage)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/storage */ \"firebase/storage\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__, firebase_auth__WEBPACK_IMPORTED_MODULE_2__, firebase_storage__WEBPACK_IMPORTED_MODULE_3__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__, firebase_auth__WEBPACK_IMPORTED_MODULE_2__, firebase_storage__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n // Import the storage module\nconst firebaseConfig = {\n    apiKey: \"AIzaSyC-ZYyj3mpgKszGlMQmETjBuBCqzYGFDh4\",\n    authDomain: \"edushare-e9242.firebaseapp.com\",\n    projectId: \"edushare-e9242\",\n    storageBucket: \"edushare-e9242.appspot.com\",\n    messagingSenderId: \"826723606155\",\n    appId: \"1:826723606155:web:4ef2868e093bc281523e8e\",\n    measurementId: \"G-BGCNB10FJ0\"\n};\n// Initialize Firebase\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)(app);\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)(app);\nconst storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.getStorage)(app); // Get the storage instance\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9GaXJlYmFzZS9GaXJlYmFzZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBNkM7QUFDaUI7QUFDdEI7QUFDTSxDQUFDLDRCQUE0QjtBQUUzRSxNQUFNSyxpQkFBaUI7SUFDckJDLFFBQVE7SUFDUkMsWUFBWTtJQUNaQyxXQUFXO0lBQ1hDLGVBQWU7SUFDZkMsbUJBQW1CO0lBQ25CQyxPQUFPO0lBQ1BDLGVBQWU7QUFDakI7QUFFQSxzQkFBc0I7QUFDdEIsTUFBTUMsTUFBTWIsMkRBQWFBLENBQUNLO0FBQzFCLE1BQU1TLEtBQUtiLGdFQUFZQSxDQUFDWTtBQUN4QixNQUFNRSxPQUFPWixzREFBT0EsQ0FBQ1U7QUFDckIsTUFBTUcsVUFBVVosNERBQVVBLENBQUNTLE1BQU0sMkJBQTJCO0FBRWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lZHVzaGFyZS8uL0ZpcmViYXNlL0ZpcmViYXNlLmpzPzMwMDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5pdGlhbGl6ZUFwcCB9IGZyb20gJ2ZpcmViYXNlL2FwcCc7XG5pbXBvcnQgeyBnZXRGaXJlc3RvcmUsIGNvbGxlY3Rpb24gfSBmcm9tICdmaXJlYmFzZS9maXJlc3RvcmUnO1xuaW1wb3J0IHsgZ2V0QXV0aCB9IGZyb20gJ2ZpcmViYXNlL2F1dGgnO1xuaW1wb3J0IHsgZ2V0U3RvcmFnZSB9IGZyb20gJ2ZpcmViYXNlL3N0b3JhZ2UnOyAvLyBJbXBvcnQgdGhlIHN0b3JhZ2UgbW9kdWxlXG5cbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xuICBhcGlLZXk6IFwiQUl6YVN5Qy1aWXlqM21wZ0tzekdsTVFtRVRqQnVCQ3F6WUdGRGg0XCIsXG4gIGF1dGhEb21haW46IFwiZWR1c2hhcmUtZTkyNDIuZmlyZWJhc2VhcHAuY29tXCIsXG4gIHByb2plY3RJZDogXCJlZHVzaGFyZS1lOTI0MlwiLFxuICBzdG9yYWdlQnVja2V0OiBcImVkdXNoYXJlLWU5MjQyLmFwcHNwb3QuY29tXCIsXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjgyNjcyMzYwNjE1NVwiLFxuICBhcHBJZDogXCIxOjgyNjcyMzYwNjE1NTp3ZWI6NGVmMjg2OGUwOTNiYzI4MTUyM2U4ZVwiLFxuICBtZWFzdXJlbWVudElkOiBcIkctQkdDTkIxMEZKMFwiXG59O1xuXG4vLyBJbml0aWFsaXplIEZpcmViYXNlXG5jb25zdCBhcHAgPSBpbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcbmNvbnN0IGRiID0gZ2V0RmlyZXN0b3JlKGFwcCk7XG5jb25zdCBhdXRoID0gZ2V0QXV0aChhcHApO1xuY29uc3Qgc3RvcmFnZSA9IGdldFN0b3JhZ2UoYXBwKTsgLy8gR2V0IHRoZSBzdG9yYWdlIGluc3RhbmNlXG5cbmV4cG9ydCB7IGFwcCwgZGIsIGF1dGgsc3RvcmFnZSwgY29sbGVjdGlvbiB9O1xuIl0sIm5hbWVzIjpbImluaXRpYWxpemVBcHAiLCJnZXRGaXJlc3RvcmUiLCJjb2xsZWN0aW9uIiwiZ2V0QXV0aCIsImdldFN0b3JhZ2UiLCJmaXJlYmFzZUNvbmZpZyIsImFwaUtleSIsImF1dGhEb21haW4iLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsIm1lYXN1cmVtZW50SWQiLCJhcHAiLCJkYiIsImF1dGgiLCJzdG9yYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Firebase/Firebase.js\n");

/***/ }),

/***/ "./hooks/AuthProvider.js":
/*!*******************************!*\
  !*** ./hooks/AuthProvider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthContext\": () => (/* binding */ AuthContext),\n/* harmony export */   \"AuthProvider\": () => (/* binding */ AuthProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst AuthProvider = ({ children  })=>{\n    const [userId, setUserId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [currentId, setCurrentId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const login = (userId)=>{\n        setUserId(userId);\n    };\n    const logout = ()=>{\n        setUserId(null);\n    };\n    const currentIdState = (currentId)=>{\n        setCurrentId(currentId);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            userId,\n            login,\n            logout,\n            currentIdState,\n            currentId\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/mohamedhossam/Documents/GitHub/eduShare/hooks/AuthProvider.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, undefined);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy9BdXRoUHJvdmlkZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFBZ0Q7QUFFekMsTUFBTUUsNEJBQWNGLG9EQUFhQSxHQUFHO0FBRXBDLE1BQU1HLGVBQWUsQ0FBQyxFQUFFQyxTQUFRLEVBQUUsR0FBSztJQUM1QyxNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR0wsK0NBQVFBLENBQUMsSUFBSTtJQUN6QyxNQUFNLENBQUNNLFdBQVdDLGFBQWEsR0FBR1AsK0NBQVFBLENBQUMsSUFBSTtJQUUvQyxNQUFNUSxRQUFRLENBQUNKLFNBQVc7UUFDeEJDLFVBQVVEO0lBQ1o7SUFFQSxNQUFNSyxTQUFTLElBQU07UUFDbkJKLFVBQVUsSUFBSTtJQUNoQjtJQUNBLE1BQU1LLGlCQUFpQixDQUFDSixZQUFjO1FBQ3BDQyxhQUFhRDtJQUNmO0lBRUEscUJBQ0UsOERBQUNMLFlBQVlVLFFBQVE7UUFBQ0MsT0FBTztZQUFFUjtZQUFRSTtZQUFPQztZQUFRQztZQUFlSjtRQUFTO2tCQUMzRUg7Ozs7OztBQUdQLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lZHVzaGFyZS8uL2hvb2tzL0F1dGhQcm92aWRlci5qcz9hYTUwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBjb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcblxuZXhwb3J0IGNvbnN0IEF1dGhQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgW3VzZXJJZCwgc2V0VXNlcklkXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbY3VycmVudElkLCBzZXRDdXJyZW50SWRdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgY29uc3QgbG9naW4gPSAodXNlcklkKSA9PiB7XG4gICAgc2V0VXNlcklkKHVzZXJJZCk7XG4gIH07XG5cbiAgY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xuICAgIHNldFVzZXJJZChudWxsKTtcbiAgfTtcbiAgY29uc3QgY3VycmVudElkU3RhdGUgPSAoY3VycmVudElkKSA9PiB7XG4gICAgc2V0Q3VycmVudElkKGN1cnJlbnRJZCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgdXNlcklkLCBsb2dpbiwgbG9nb3V0ICxjdXJyZW50SWRTdGF0ZSxjdXJyZW50SWR9fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlU3RhdGUiLCJBdXRoQ29udGV4dCIsIkF1dGhQcm92aWRlciIsImNoaWxkcmVuIiwidXNlcklkIiwic2V0VXNlcklkIiwiY3VycmVudElkIiwic2V0Q3VycmVudElkIiwibG9naW4iLCJsb2dvdXQiLCJjdXJyZW50SWRTdGF0ZSIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./hooks/AuthProvider.js\n");

/***/ }),

/***/ "./pages/Student/Profile.js":
/*!**********************************!*\
  !*** ./pages/Student/Profile.js ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/system */ \"@mui/system\");\n/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_system__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Firebase/Firebase */ \"./Firebase/Firebase.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\n/* harmony import */ var _hooks_AuthProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/AuthProvider */ \"./hooks/AuthProvider.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_5__, firebase_firestore__WEBPACK_IMPORTED_MODULE_6__]);\n([_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_5__, firebase_firestore__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\nconst Profile = ()=>{\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const { userId , userRole  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_hooks_AuthProvider__WEBPACK_IMPORTED_MODULE_7__.AuthContext);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchUserData = async ()=>{\n            if (!userId || !userRole) {\n                router.push(\"/\");\n                return;\n            }\n            const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.getFirestore)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_5__.app);\n            const userDocRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.doc)(db, userRole, userId);\n            const userDoc = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.getDoc)(userDocRef);\n            if (userDoc.exists()) {\n                setUser(userDoc.data());\n            }\n        };\n        fetchUserData();\n    }, [\n        router,\n        userId,\n        userRole\n    ]);\n    if (!user) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/mohamedhossam/Documents/GitHub/eduShare/pages/Student/Profile.js\",\n            lineNumber: 34,\n            columnNumber: 12\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_system__WEBPACK_IMPORTED_MODULE_2__.Box, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Card, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.CardMedia, {\n                    component: \"img\",\n                    height: \"200\",\n                    image: user.coverPicture || \"/path/to/default/cover/picture\",\n                    alt: \"Cover Image\"\n                }, void 0, false, {\n                    fileName: \"/Users/mohamedhossam/Documents/GitHub/eduShare/pages/Student/Profile.js\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.CardContent, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {\n                            variant: \"h5\",\n                            component: \"div\",\n                            children: user.displayName\n                        }, void 0, false, {\n                            fileName: \"/Users/mohamedhossam/Documents/GitHub/eduShare/pages/Student/Profile.js\",\n                            lineNumber: 47,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {\n                            variant: \"subtitle1\",\n                            component: \"div\",\n                            children: user.title\n                        }, void 0, false, {\n                            fileName: \"/Users/mohamedhossam/Documents/GitHub/eduShare/pages/Student/Profile.js\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {\n                            variant: \"body2\",\n                            color: \"text.secondary\",\n                            children: user.bio\n                        }, void 0, false, {\n                            fileName: \"/Users/mohamedhossam/Documents/GitHub/eduShare/pages/Student/Profile.js\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mohamedhossam/Documents/GitHub/eduShare/pages/Student/Profile.js\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/mohamedhossam/Documents/GitHub/eduShare/pages/Student/Profile.js\",\n            lineNumber: 39,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/mohamedhossam/Documents/GitHub/eduShare/pages/Student/Profile.js\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Profile);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9TdHVkZW50L1Byb2ZpbGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUErRDtBQUM3QjtBQUN1QztBQUNqQztBQUNNO0FBQ2lCO0FBQ1I7QUFFdkQsTUFBTWUsVUFBVSxJQUFNO0lBQ3BCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHaEIsK0NBQVFBLENBQUMsSUFBSTtJQUNyQyxNQUFNaUIsU0FBU1Qsc0RBQVNBO0lBQ3hCLE1BQU0sRUFBRVUsT0FBTSxFQUFFQyxTQUFRLEVBQUUsR0FBR2pCLGlEQUFVQSxDQUFDVyw0REFBV0E7SUFFbkRaLGdEQUFTQSxDQUFDLElBQU07UUFDZCxNQUFNbUIsZ0JBQWdCLFVBQVk7WUFDaEMsSUFBSSxDQUFDRixVQUFVLENBQUNDLFVBQVU7Z0JBQ3hCRixPQUFPSSxJQUFJLENBQUM7Z0JBQ1o7WUFDRixDQUFDO1lBRUQsTUFBTUMsS0FBS1osZ0VBQVlBLENBQUNELG1EQUFHQTtZQUMzQixNQUFNYyxhQUFhWix1REFBR0EsQ0FBQ1csSUFBSUgsVUFBVUQ7WUFDckMsTUFBTU0sVUFBVSxNQUFNWiwwREFBTUEsQ0FBQ1c7WUFFN0IsSUFBSUMsUUFBUUMsTUFBTSxJQUFJO2dCQUNwQlQsUUFBUVEsUUFBUUUsSUFBSTtZQUN0QixDQUFDO1FBQ0g7UUFFQU47SUFDRixHQUFHO1FBQUNIO1FBQVFDO1FBQVFDO0tBQVM7SUFFN0IsSUFBSSxDQUFDSixNQUFNO1FBQ1QscUJBQU8sOERBQUNZO3NCQUFJOzs7Ozs7SUFDZCxDQUFDO0lBRUQscUJBQ0UsOERBQUN4Qiw0Q0FBR0E7a0JBQ0YsNEVBQUNDLCtDQUFJQTs7OEJBQ0gsOERBQUNFLG9EQUFTQTtvQkFDUnNCLFdBQVU7b0JBQ1ZDLFFBQU87b0JBQ1BDLE9BQU9mLEtBQUtnQixZQUFZLElBQUk7b0JBQzVCQyxLQUFJOzs7Ozs7OEJBRU4sOERBQUMzQixzREFBV0E7O3NDQUNWLDhEQUFDRSxxREFBVUE7NEJBQUMwQixTQUFROzRCQUFLTCxXQUFVO3NDQUNoQ2IsS0FBS21CLFdBQVc7Ozs7OztzQ0FFbkIsOERBQUMzQixxREFBVUE7NEJBQUMwQixTQUFROzRCQUFZTCxXQUFVO3NDQUN2Q2IsS0FBS29CLEtBQUs7Ozs7OztzQ0FFYiw4REFBQzVCLHFEQUFVQTs0QkFBQzBCLFNBQVE7NEJBQVFHLE9BQU07c0NBQy9CckIsS0FBS3NCLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXJCO0FBRUEsaUVBQWV2QixPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWR1c2hhcmUvLi9wYWdlcy9TdHVkZW50L1Byb2ZpbGUuanM/ODlmYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQm94IH0gZnJvbSBcIkBtdWkvc3lzdGVtXCI7XG5pbXBvcnQgeyBDYXJkLCBDYXJkQ29udGVudCwgQ2FyZE1lZGlhLCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgYXBwIH0gZnJvbSBcIi4uLy4uL0ZpcmViYXNlL0ZpcmViYXNlXCI7XG5pbXBvcnQgeyBnZXRGaXJlc3RvcmUsIGRvYywgZ2V0RG9jIH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xuaW1wb3J0IHsgQXV0aENvbnRleHQgfSBmcm9tIFwiLi4vLi4vaG9va3MvQXV0aFByb3ZpZGVyXCI7XG5cbmNvbnN0IFByb2ZpbGUgPSAoKSA9PiB7XG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyB1c2VySWQsIHVzZXJSb2xlIH0gPSB1c2VDb250ZXh0KEF1dGhDb250ZXh0KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoVXNlckRhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICBpZiAoIXVzZXJJZCB8fCAhdXNlclJvbGUpIHtcbiAgICAgICAgcm91dGVyLnB1c2goXCIvXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRiID0gZ2V0RmlyZXN0b3JlKGFwcCk7XG4gICAgICBjb25zdCB1c2VyRG9jUmVmID0gZG9jKGRiLCB1c2VyUm9sZSwgdXNlcklkKTtcbiAgICAgIGNvbnN0IHVzZXJEb2MgPSBhd2FpdCBnZXREb2ModXNlckRvY1JlZik7XG5cbiAgICAgIGlmICh1c2VyRG9jLmV4aXN0cygpKSB7XG4gICAgICAgIHNldFVzZXIodXNlckRvYy5kYXRhKCkpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmZXRjaFVzZXJEYXRhKCk7XG4gIH0sIFtyb3V0ZXIsIHVzZXJJZCwgdXNlclJvbGVdKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94PlxuICAgICAgPENhcmQ+XG4gICAgICAgIDxDYXJkTWVkaWFcbiAgICAgICAgICBjb21wb25lbnQ9XCJpbWdcIlxuICAgICAgICAgIGhlaWdodD1cIjIwMFwiXG4gICAgICAgICAgaW1hZ2U9e3VzZXIuY292ZXJQaWN0dXJlIHx8IFwiL3BhdGgvdG8vZGVmYXVsdC9jb3Zlci9waWN0dXJlXCJ9XG4gICAgICAgICAgYWx0PVwiQ292ZXIgSW1hZ2VcIlxuICAgICAgICAvPlxuICAgICAgICA8Q2FyZENvbnRlbnQ+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCIgY29tcG9uZW50PVwiZGl2XCI+XG4gICAgICAgICAgICB7dXNlci5kaXNwbGF5TmFtZX1cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMVwiIGNvbXBvbmVudD1cImRpdlwiPlxuICAgICAgICAgICAge3VzZXIudGl0bGV9XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgIHt1c2VyLmJpb31cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICA8L0NhcmQ+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VDb250ZXh0IiwiQm94IiwiQ2FyZCIsIkNhcmRDb250ZW50IiwiQ2FyZE1lZGlhIiwiVHlwb2dyYXBoeSIsInVzZVJvdXRlciIsImFwcCIsImdldEZpcmVzdG9yZSIsImRvYyIsImdldERvYyIsIkF1dGhDb250ZXh0IiwiUHJvZmlsZSIsInVzZXIiLCJzZXRVc2VyIiwicm91dGVyIiwidXNlcklkIiwidXNlclJvbGUiLCJmZXRjaFVzZXJEYXRhIiwicHVzaCIsImRiIiwidXNlckRvY1JlZiIsInVzZXJEb2MiLCJleGlzdHMiLCJkYXRhIiwiZGl2IiwiY29tcG9uZW50IiwiaGVpZ2h0IiwiaW1hZ2UiLCJjb3ZlclBpY3R1cmUiLCJhbHQiLCJ2YXJpYW50IiwiZGlzcGxheU5hbWUiLCJ0aXRsZSIsImNvbG9yIiwiYmlvIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/Student/Profile.js\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/Student/Profile.js"));
module.exports = __webpack_exports__;

})();