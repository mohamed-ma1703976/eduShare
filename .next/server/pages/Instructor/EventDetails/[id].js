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
exports.id = "pages/Instructor/EventDetails/[id]";
exports.ids = ["pages/Instructor/EventDetails/[id]"];
exports.modules = {

/***/ "./Firebase/Firebase.js":
/*!******************************!*\
  !*** ./Firebase/Firebase.js ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"app\": () => (/* binding */ app),\n/* harmony export */   \"auth\": () => (/* binding */ auth),\n/* harmony export */   \"collection\": () => (/* reexport safe */ firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection),\n/* harmony export */   \"db\": () => (/* binding */ db),\n/* harmony export */   \"getFirestoreTimestamp\": () => (/* binding */ getFirestoreTimestamp),\n/* harmony export */   \"storage\": () => (/* binding */ storage)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/storage */ \"firebase/storage\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__, firebase_auth__WEBPACK_IMPORTED_MODULE_2__, firebase_storage__WEBPACK_IMPORTED_MODULE_3__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__, firebase_auth__WEBPACK_IMPORTED_MODULE_2__, firebase_storage__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n // Import the storage module\n\nconst firebaseConfig = {\n    apiKey: \"AIzaSyC-ZYyj3mpgKszGlMQmETjBuBCqzYGFDh4\",\n    authDomain: \"edushare-e9242.firebaseapp.com\",\n    projectId: \"edushare-e9242\",\n    storageBucket: \"edushare-e9242.appspot.com\",\n    messagingSenderId: \"826723606155\",\n    appId: \"1:826723606155:web:4ef2868e093bc281523e8e\",\n    measurementId: \"G-BGCNB10FJ0\"\n};\n// Initialize Firebase\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)(app);\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)(app);\nconst storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.getStorage)(app); // Get the storage instance\nconst getFirestoreTimestamp = ()=>{\n    return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.serverTimestamp)();\n};\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9GaXJlYmFzZS9GaXJlYmFzZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQTZDO0FBQ2lCO0FBQ3RCO0FBQ00sQ0FBQyw0QkFBNEI7QUFDdEI7QUFDckQsTUFBTU0saUJBQWlCO0lBQ3JCQyxRQUFRO0lBQ1JDLFlBQVk7SUFDWkMsV0FBVztJQUNYQyxlQUFlO0lBQ2ZDLG1CQUFtQjtJQUNuQkMsT0FBTztJQUNQQyxlQUFlO0FBQ2pCO0FBRUEsc0JBQXNCO0FBQ3RCLE1BQU1DLE1BQU1kLDJEQUFhQSxDQUFDTTtBQUMxQixNQUFNUyxLQUFLZCxnRUFBWUEsQ0FBQ2E7QUFDeEIsTUFBTUUsT0FBT2Isc0RBQU9BLENBQUNXO0FBQ3JCLE1BQU1HLFVBQVViLDREQUFVQSxDQUFDVSxNQUFNLDJCQUEyQjtBQUVyRCxNQUFNSSx3QkFBd0IsSUFBTTtJQUN6QyxPQUFPYixtRUFBZUE7QUFDeEIsRUFBRTtBQUUyQyIsInNvdXJjZXMiOlsid2VicGFjazovL2VkdXNoYXJlLy4vRmlyZWJhc2UvRmlyZWJhc2UuanM/MzAwNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbml0aWFsaXplQXBwIH0gZnJvbSAnZmlyZWJhc2UvYXBwJztcclxuaW1wb3J0IHsgZ2V0RmlyZXN0b3JlLCBjb2xsZWN0aW9uIH0gZnJvbSAnZmlyZWJhc2UvZmlyZXN0b3JlJztcclxuaW1wb3J0IHsgZ2V0QXV0aCB9IGZyb20gJ2ZpcmViYXNlL2F1dGgnO1xyXG5pbXBvcnQgeyBnZXRTdG9yYWdlIH0gZnJvbSAnZmlyZWJhc2Uvc3RvcmFnZSc7IC8vIEltcG9ydCB0aGUgc3RvcmFnZSBtb2R1bGVcclxuaW1wb3J0IHsgc2VydmVyVGltZXN0YW1wIH0gZnJvbSAnZmlyZWJhc2UvZmlyZXN0b3JlJztcclxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XHJcbiAgYXBpS2V5OiBcIkFJemFTeUMtWll5ajNtcGdLc3pHbE1RbUVUakJ1QkNxellHRkRoNFwiLFxyXG4gIGF1dGhEb21haW46IFwiZWR1c2hhcmUtZTkyNDIuZmlyZWJhc2VhcHAuY29tXCIsXHJcbiAgcHJvamVjdElkOiBcImVkdXNoYXJlLWU5MjQyXCIsXHJcbiAgc3RvcmFnZUJ1Y2tldDogXCJlZHVzaGFyZS1lOTI0Mi5hcHBzcG90LmNvbVwiLFxyXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjgyNjcyMzYwNjE1NVwiLFxyXG4gIGFwcElkOiBcIjE6ODI2NzIzNjA2MTU1OndlYjo0ZWYyODY4ZTA5M2JjMjgxNTIzZThlXCIsXHJcbiAgbWVhc3VyZW1lbnRJZDogXCJHLUJHQ05CMTBGSjBcIlxyXG59O1xyXG5cclxuLy8gSW5pdGlhbGl6ZSBGaXJlYmFzZVxyXG5jb25zdCBhcHAgPSBpbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcclxuY29uc3QgZGIgPSBnZXRGaXJlc3RvcmUoYXBwKTtcclxuY29uc3QgYXV0aCA9IGdldEF1dGgoYXBwKTtcclxuY29uc3Qgc3RvcmFnZSA9IGdldFN0b3JhZ2UoYXBwKTsgLy8gR2V0IHRoZSBzdG9yYWdlIGluc3RhbmNlXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0RmlyZXN0b3JlVGltZXN0YW1wID0gKCkgPT4ge1xyXG4gIHJldHVybiBzZXJ2ZXJUaW1lc3RhbXAoKTtcclxufTtcclxuXHJcbmV4cG9ydCB7IGFwcCwgZGIsIGF1dGgsc3RvcmFnZSwgY29sbGVjdGlvbiB9O1xyXG4iXSwibmFtZXMiOlsiaW5pdGlhbGl6ZUFwcCIsImdldEZpcmVzdG9yZSIsImNvbGxlY3Rpb24iLCJnZXRBdXRoIiwiZ2V0U3RvcmFnZSIsInNlcnZlclRpbWVzdGFtcCIsImZpcmViYXNlQ29uZmlnIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwibWVhc3VyZW1lbnRJZCIsImFwcCIsImRiIiwiYXV0aCIsInN0b3JhZ2UiLCJnZXRGaXJlc3RvcmVUaW1lc3RhbXAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Firebase/Firebase.js\n");

/***/ }),

/***/ "./pages/Instructor/EventDetails/[id].js":
/*!***********************************************!*\
  !*** ./pages/Instructor/EventDetails/[id].js ***!
  \***********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\n/* harmony import */ var _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Firebase/Firebase */ \"./Firebase/Firebase.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_firestore__WEBPACK_IMPORTED_MODULE_3__, _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_4__]);\n([firebase_firestore__WEBPACK_IMPORTED_MODULE_3__, _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\nconst EventDetails = ()=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { id  } = router.query;\n    const [eventDetails, setEventDetails] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (id) {\n            const fetchEventDetails = async ()=>{\n                try {\n                    const docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_4__.db, \"Events\", id);\n                    const docSnap = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDoc)(docRef);\n                    if (docSnap.exists()) {\n                        setEventDetails(docSnap.data());\n                    } else {\n                        console.log(\"No such document!\");\n                    }\n                } catch (error) {\n                    console.error(\"Error getting document:\", error);\n                }\n            };\n            fetchEventDetails();\n        }\n    }, [\n        id\n    ]);\n    if (!eventDetails) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\moham\\\\Documents\\\\GitHub\\\\eduShare\\\\pages\\\\Instructor\\\\EventDetails\\\\[id].js\",\n            lineNumber: 34,\n            columnNumber: 12\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: eventDetails.title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\moham\\\\Documents\\\\GitHub\\\\eduShare\\\\pages\\\\Instructor\\\\EventDetails\\\\[id].js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Start Time: \",\n                    eventDetails.start\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\moham\\\\Documents\\\\GitHub\\\\eduShare\\\\pages\\\\Instructor\\\\EventDetails\\\\[id].js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"End Time: \",\n                    eventDetails.end\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\moham\\\\Documents\\\\GitHub\\\\eduShare\\\\pages\\\\Instructor\\\\EventDetails\\\\[id].js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Event Link: \",\n                    eventDetails.link\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\moham\\\\Documents\\\\GitHub\\\\eduShare\\\\pages\\\\Instructor\\\\EventDetails\\\\[id].js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Description: \",\n                    eventDetails.description\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\moham\\\\Documents\\\\GitHub\\\\eduShare\\\\pages\\\\Instructor\\\\EventDetails\\\\[id].js\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\moham\\\\Documents\\\\GitHub\\\\eduShare\\\\pages\\\\Instructor\\\\EventDetails\\\\[id].js\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventDetails);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9JbnN0cnVjdG9yL0V2ZW50RGV0YWlscy9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQW1EO0FBQ1g7QUFDUztBQUNEO0FBRWhELE1BQU1PLGVBQWUsSUFBTTtJQUN6QixNQUFNQyxTQUFTTCxzREFBU0E7SUFDeEIsTUFBTSxFQUFFTSxHQUFFLEVBQUUsR0FBR0QsT0FBT0UsS0FBSztJQUUzQixNQUFNLENBQUNDLGNBQWNDLGdCQUFnQixHQUFHWCwrQ0FBUUEsQ0FBQyxJQUFJO0lBRXJEQyxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsSUFBSU8sSUFBSTtZQUNOLE1BQU1JLG9CQUFvQixVQUFZO2dCQUNwQyxJQUFJO29CQUNGLE1BQU1DLFNBQVNWLHVEQUFHQSxDQUFDRSxrREFBRUEsRUFBRSxVQUFVRztvQkFDakMsTUFBTU0sVUFBVSxNQUFNViwwREFBTUEsQ0FBQ1M7b0JBRTdCLElBQUlDLFFBQVFDLE1BQU0sSUFBSTt3QkFDcEJKLGdCQUFnQkcsUUFBUUUsSUFBSTtvQkFDOUIsT0FBTzt3QkFDTEMsUUFBUUMsR0FBRyxDQUFDO29CQUNkLENBQUM7Z0JBQ0gsRUFBRSxPQUFPQyxPQUFPO29CQUNkRixRQUFRRSxLQUFLLENBQUMsMkJBQTJCQTtnQkFDM0M7WUFDRjtZQUVBUDtRQUNGLENBQUM7SUFDSCxHQUFHO1FBQUNKO0tBQUc7SUFFUCxJQUFJLENBQUNFLGNBQWM7UUFDakIscUJBQU8sOERBQUNVO3NCQUFJOzs7Ozs7SUFDZCxDQUFDO0lBRUQscUJBQ0UsOERBQUNBOzswQkFDQyw4REFBQ0M7MEJBQUlYLGFBQWFZLEtBQUs7Ozs7OzswQkFDdkIsOERBQUNDOztvQkFBRTtvQkFBYWIsYUFBYWMsS0FBSzs7Ozs7OzswQkFDbEMsOERBQUNEOztvQkFBRTtvQkFBV2IsYUFBYWUsR0FBRzs7Ozs7OzswQkFDOUIsOERBQUNGOztvQkFBRTtvQkFBYWIsYUFBYWdCLElBQUk7Ozs7Ozs7MEJBQ2pDLDhEQUFDSDs7b0JBQUU7b0JBQWNiLGFBQWFpQixXQUFXOzs7Ozs7Ozs7Ozs7O0FBRy9DO0FBRUEsaUVBQWVyQixZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWR1c2hhcmUvLi9wYWdlcy9JbnN0cnVjdG9yL0V2ZW50RGV0YWlscy9baWRdLmpzPzliZmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgZG9jLCBnZXREb2MgfSBmcm9tICdmaXJlYmFzZS9maXJlc3RvcmUnO1xyXG5pbXBvcnQgeyBkYiB9IGZyb20gJy4uLy4uLy4uL0ZpcmViYXNlL0ZpcmViYXNlJztcclxuXHJcbmNvbnN0IEV2ZW50RGV0YWlscyA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XHJcblxyXG4gIGNvbnN0IFtldmVudERldGFpbHMsIHNldEV2ZW50RGV0YWlsc10gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChpZCkge1xyXG4gICAgICBjb25zdCBmZXRjaEV2ZW50RGV0YWlscyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY29uc3QgZG9jUmVmID0gZG9jKGRiLCAnRXZlbnRzJywgaWQpO1xyXG4gICAgICAgICAgY29uc3QgZG9jU25hcCA9IGF3YWl0IGdldERvYyhkb2NSZWYpO1xyXG5cclxuICAgICAgICAgIGlmIChkb2NTbmFwLmV4aXN0cygpKSB7XHJcbiAgICAgICAgICAgIHNldEV2ZW50RGV0YWlscyhkb2NTbmFwLmRhdGEoKSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnTm8gc3VjaCBkb2N1bWVudCEnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZ2V0dGluZyBkb2N1bWVudDonLCBlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG5cclxuICAgICAgZmV0Y2hFdmVudERldGFpbHMoKTtcclxuICAgIH1cclxuICB9LCBbaWRdKTtcclxuXHJcbiAgaWYgKCFldmVudERldGFpbHMpIHtcclxuICAgIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgxPntldmVudERldGFpbHMudGl0bGV9PC9oMT5cclxuICAgICAgPHA+U3RhcnQgVGltZToge2V2ZW50RGV0YWlscy5zdGFydH08L3A+XHJcbiAgICAgIDxwPkVuZCBUaW1lOiB7ZXZlbnREZXRhaWxzLmVuZH08L3A+XHJcbiAgICAgIDxwPkV2ZW50IExpbms6IHtldmVudERldGFpbHMubGlua308L3A+XHJcbiAgICAgIDxwPkRlc2NyaXB0aW9uOiB7ZXZlbnREZXRhaWxzLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFdmVudERldGFpbHM7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiZG9jIiwiZ2V0RG9jIiwiZGIiLCJFdmVudERldGFpbHMiLCJyb3V0ZXIiLCJpZCIsInF1ZXJ5IiwiZXZlbnREZXRhaWxzIiwic2V0RXZlbnREZXRhaWxzIiwiZmV0Y2hFdmVudERldGFpbHMiLCJkb2NSZWYiLCJkb2NTbmFwIiwiZXhpc3RzIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImRpdiIsImgxIiwidGl0bGUiLCJwIiwic3RhcnQiLCJlbmQiLCJsaW5rIiwiZGVzY3JpcHRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Instructor/EventDetails/[id].js\n");

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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/Instructor/EventDetails/[id].js"));
module.exports = __webpack_exports__;

})();