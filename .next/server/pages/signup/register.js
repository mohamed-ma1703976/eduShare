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
exports.id = "pages/signup/register";
exports.ids = ["pages/signup/register"];
exports.modules = {

/***/ "./component/Signup/RoleSelection.js":
/*!*******************************************!*\
  !*** ./component/Signup/RoleSelection.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ RoleSelection)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction RoleSelection() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {\n        container: true,\n        justifyContent: {\n            sm: \"center\"\n        },\n        alignItems: {\n            sm: \"center\"\n        },\n        height: \"100vh\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Paper, {\n            sx: {\n                width: \"30%\",\n                height: 220,\n                margin: \"0 0 0 130px\",\n                backgroundColor: \"white\",\n                padding: 5,\n                pb: 10,\n                boxShadow: {\n                    xs: \"none\",\n                    md: \"0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)\"\n                }\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {\n                    direction: \"column\",\n                    gap: 2,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {\n                            variant: \"h3\",\n                            sx: {\n                                color: \"#454545\",\n                                fontWeight: \"800\",\n                                margin: \"0 0 0 -23px\",\n                                textAlign: \"center\"\n                            },\n                            children: [\n                                \"Edu\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    style: {\n                                        color: \"#1ABC9C\"\n                                    },\n                                    children: \"Share\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mohamedhossam/Documents/GitHub/eduShare/component/Signup/RoleSelection.js\",\n                                    lineNumber: 38,\n                                    columnNumber: 128\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/mohamedhossam/Documents/GitHub/eduShare/component/Signup/RoleSelection.js\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                            sx: {\n                                backgroundColor: \"#00adb5\",\n                                height: 45,\n                                fontSize: 22,\n                                fontWeight: \"bold\",\n                                margin: \"20px 0 10px 0\"\n                            },\n                            variant: \"contained\",\n                            type: \"submit\",\n                            onClick: ()=>router.push(\"/Student/registration\"),\n                            children: \"Sign Up as Student\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mohamedhossam/Documents/GitHub/eduShare/component/Signup/RoleSelection.js\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                            sx: {\n                                backgroundColor: \"#00adb5\",\n                                height: 45,\n                                fontSize: 22,\n                                fontWeight: \"bold\"\n                            },\n                            variant: \"contained\",\n                            type: \"submit\",\n                            onClick: ()=>router.push(\"/Instructor/registration\"),\n                            children: \"Sign Up as Instructor\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mohamedhossam/Documents/GitHub/eduShare/component/Signup/RoleSelection.js\",\n                            lineNumber: 55,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mohamedhossam/Documents/GitHub/eduShare/component/Signup/RoleSelection.js\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        margin: \"10px 0 0 10px\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Link, {\n                        href: \"/\",\n                        variant: \"body2\",\n                        color: \"inherit\",\n                        children: \" Back to login page\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mohamedhossam/Documents/GitHub/eduShare/component/Signup/RoleSelection.js\",\n                        lineNumber: 70,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/mohamedhossam/Documents/GitHub/eduShare/component/Signup/RoleSelection.js\",\n                    lineNumber: 69,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/mohamedhossam/Documents/GitHub/eduShare/component/Signup/RoleSelection.js\",\n            lineNumber: 22,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/mohamedhossam/Documents/GitHub/eduShare/component/Signup/RoleSelection.js\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnQvU2lnbnVwL1JvbGVTZWxlY3Rpb24uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFBMEI7QUFRSDtBQUNpQjtBQUV6QixTQUFTUSxnQkFBZ0I7SUFDdEMsTUFBTUMsU0FBU0Ysc0RBQVNBO0lBRXhCLHFCQUNFLDhEQUFDTCwrQ0FBSUE7UUFDSFEsU0FBUztRQUNUQyxnQkFBZ0I7WUFBRUMsSUFBSTtRQUFTO1FBQy9CQyxZQUFZO1lBQUVELElBQUk7UUFBUztRQUMzQkUsUUFBUTtrQkFFUiw0RUFBQ1gsZ0RBQUtBO1lBQ0pZLElBQUk7Z0JBQ0ZDLE9BQU87Z0JBQ1BGLFFBQVE7Z0JBQ1JHLFFBQVE7Z0JBQ1JDLGlCQUFpQjtnQkFDakJDLFNBQVM7Z0JBQ1RDLElBQUk7Z0JBQ0pDLFdBQVc7b0JBQ1RDLElBQUk7b0JBQ0pDLElBQ0U7Z0JBQ0o7WUFDRjs7OEJBRUEsOERBQUNuQixnREFBS0E7b0JBQUNvQixXQUFXO29CQUFVQyxLQUFLOztzQ0FDL0IsOERBQUNwQixxREFBVUE7NEJBQUNxQixTQUFROzRCQUFLWCxJQUFJO2dDQUFFWSxPQUFPO2dDQUFXQyxZQUFZO2dDQUFPWCxRQUFRO2dDQUFlWSxXQUFXOzRCQUFTOztnQ0FBRzs4Q0FBRyw4REFBQ0M7b0NBQUtDLE9BQU87d0NBQUVKLE9BQU87b0NBQVU7OENBQUc7Ozs7Ozs7Ozs7OztzQ0FFeEosOERBQUMxQixpREFBTUE7NEJBQ0xjLElBQUk7Z0NBQ0ZHLGlCQUFpQjtnQ0FDakJKLFFBQVE7Z0NBQ1JrQixVQUFVO2dDQUNWSixZQUFZO2dDQUNaWCxRQUFROzRCQUNWOzRCQUNBUyxTQUFROzRCQUNSTyxNQUFLOzRCQUNMQyxTQUFTLElBQU16QixPQUFPMEIsSUFBSSxDQUFDO3NDQUM1Qjs7Ozs7O3NDQUlELDhEQUFDbEMsaURBQU1BOzRCQUNMYyxJQUFJO2dDQUNGRyxpQkFBaUI7Z0NBQ2pCSixRQUFRO2dDQUNSa0IsVUFBVTtnQ0FDVkosWUFBWTs0QkFDZDs0QkFDQUYsU0FBUTs0QkFDUk8sTUFBSzs0QkFDTEMsU0FBUyxJQUFNekIsT0FBTzBCLElBQUksQ0FBQztzQ0FDNUI7Ozs7Ozs7Ozs7Ozs4QkFJSCw4REFBQ0M7b0JBQUlMLE9BQU87d0JBQUVkLFFBQVE7b0JBQWdCOzhCQUNwQyw0RUFBQ1gsK0NBQUlBO3dCQUFDK0IsTUFBSzt3QkFBSVgsU0FBUTt3QkFBUUMsT0FBTTtrQ0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUt6RCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWR1c2hhcmUvLi9jb21wb25lbnQvU2lnbnVwL1JvbGVTZWxlY3Rpb24uanM/NDAwOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBCdXR0b24sXG4gIEdyaWQsXG4gIFBhcGVyLFxuICBTdGFjayxcbiAgVHlwb2dyYXBoeSxcbiAgTGlua1xufSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSb2xlU2VsZWN0aW9uKCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICByZXR1cm4gKFxuICAgIDxHcmlkXG4gICAgICBjb250YWluZXJcbiAgICAgIGp1c3RpZnlDb250ZW50PXt7IHNtOiBcImNlbnRlclwiIH19XG4gICAgICBhbGlnbkl0ZW1zPXt7IHNtOiBcImNlbnRlclwiIH19XG4gICAgICBoZWlnaHQ9e1wiMTAwdmhcIn1cbiAgICA+XG4gICAgICA8UGFwZXJcbiAgICAgICAgc3g9e3tcbiAgICAgICAgICB3aWR0aDogXCIzMCVcIixcbiAgICAgICAgICBoZWlnaHQ6IDIyMCxcbiAgICAgICAgICBtYXJnaW46IFwiMCAwIDAgMTMwcHhcIixcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICBwYWRkaW5nOiA1LFxuICAgICAgICAgIHBiOiAxMCxcbiAgICAgICAgICBib3hTaGFkb3c6IHtcbiAgICAgICAgICAgIHhzOiBcIm5vbmVcIixcbiAgICAgICAgICAgIG1kOlxuICAgICAgICAgICAgICBcIjBweCA0cHggNXB4IC0ycHggcmdiYSgwLDAsMCwwLjIpLDBweCA3cHggMTBweCAxcHggcmdiYSgwLDAsMCwwLjE0KSwwcHggMnB4IDE2cHggMXB4IHJnYmEoMCwwLDAsMC4xMilcIlxuICAgICAgICAgIH1cbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj17XCJjb2x1bW5cIn0gZ2FwPXsyfT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoMycgc3g9e3sgY29sb3I6IFwiIzQ1NDU0NVwiLCBmb250V2VpZ2h0OiBcIjgwMFwiLCBtYXJnaW46IFwiMCAwIDAgLTIzcHhcIiwgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PkVkdTxzcGFuIHN0eWxlPXt7IGNvbG9yOiBcIiMxQUJDOUNcIiB9fT5TaGFyZTwvc3Bhbj48L1R5cG9ncmFwaHk+XG5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzAwYWRiNVwiLFxuICAgICAgICAgICAgICBoZWlnaHQ6IDQ1LFxuICAgICAgICAgICAgICBmb250U2l6ZTogMjIsXG4gICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICAgICAgICAgICAgICBtYXJnaW46IFwiMjBweCAwIDEwcHggMFwiXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKFwiL1N0dWRlbnQvcmVnaXN0cmF0aW9uXCIpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFNpZ24gVXAgYXMgU3R1ZGVudFxuICAgICAgICAgIDwvQnV0dG9uPlxuXG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMwMGFkYjVcIixcbiAgICAgICAgICAgICAgaGVpZ2h0OiA0NSxcbiAgICAgICAgICAgICAgZm9udFNpemU6IDIyLFxuICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcImJvbGRcIlxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChcIi9JbnN0cnVjdG9yL3JlZ2lzdHJhdGlvblwiKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBTaWduIFVwIGFzIEluc3RydWN0b3JcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46IFwiMTBweCAwIDAgMTBweFwiIH19PlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJpbmhlcml0XCI+IEJhY2sgdG8gbG9naW4gcGFnZTwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1BhcGVyPlxuICAgIDwvR3JpZCA+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJCdXR0b24iLCJHcmlkIiwiUGFwZXIiLCJTdGFjayIsIlR5cG9ncmFwaHkiLCJMaW5rIiwidXNlUm91dGVyIiwiUm9sZVNlbGVjdGlvbiIsInJvdXRlciIsImNvbnRhaW5lciIsImp1c3RpZnlDb250ZW50Iiwic20iLCJhbGlnbkl0ZW1zIiwiaGVpZ2h0Iiwic3giLCJ3aWR0aCIsIm1hcmdpbiIsImJhY2tncm91bmRDb2xvciIsInBhZGRpbmciLCJwYiIsImJveFNoYWRvdyIsInhzIiwibWQiLCJkaXJlY3Rpb24iLCJnYXAiLCJ2YXJpYW50IiwiY29sb3IiLCJmb250V2VpZ2h0IiwidGV4dEFsaWduIiwic3BhbiIsInN0eWxlIiwiZm9udFNpemUiLCJ0eXBlIiwib25DbGljayIsInB1c2giLCJkaXYiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./component/Signup/RoleSelection.js\n");

/***/ }),

/***/ "./pages/signup/register.js":
/*!**********************************!*\
  !*** ./pages/signup/register.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ register)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _component_Signup_RoleSelection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../component/Signup/RoleSelection */ \"./component/Signup/RoleSelection.js\");\n\n\n\nfunction register() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Paper, {\n        style: {\n            backgroundImage: `url(${\"https://i.ibb.co/6bJ0VFb/Background.jpg\"})`,\n            backgroundSize: \"cover\",\n            height: \"100vh\",\n            color: \"#f5f5f5\",\n            width: \"100vw\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_Signup_RoleSelection__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n            fileName: \"/Users/mohamedhossam/Documents/GitHub/eduShare/pages/signup/register.js\",\n            lineNumber: 18,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/mohamedhossam/Documents/GitHub/eduShare/pages/signup/register.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zaWdudXAvcmVnaXN0ZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFBcUM7QUFDMkI7QUFFakQsU0FBU0UsV0FBVztJQUNqQyxxQkFHRSw4REFBQ0YsZ0RBQUtBO1FBQ0pHLE9BQU87WUFDTEMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLDBDQUEwQyxDQUFDLENBQUM7WUFDcEVDLGdCQUFnQjtZQUNoQkMsUUFBUTtZQUNSQyxPQUFPO1lBQ1BDLE9BQU87UUFDVDtrQkFHQSw0RUFBQ1AsdUVBQWFBOzs7Ozs7Ozs7O0FBR3BCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lZHVzaGFyZS8uL3BhZ2VzL3NpZ251cC9yZWdpc3Rlci5qcz8zZGNhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhcGVyIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIlxuaW1wb3J0IFJvbGVTZWxlY3Rpb24gZnJvbSBcIi4uLy4uL2NvbXBvbmVudC9TaWdudXAvUm9sZVNlbGVjdGlvblwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZ2lzdGVyKCkge1xuICByZXR1cm4gKFxuXG5cbiAgICA8UGFwZXJcbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke1wiaHR0cHM6Ly9pLmliYi5jby82YkowVkZiL0JhY2tncm91bmQuanBnXCJ9KWAsXG4gICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXG4gICAgICAgIGhlaWdodDogXCIxMDB2aFwiLFxuICAgICAgICBjb2xvcjogXCIjZjVmNWY1XCIsXG4gICAgICAgIHdpZHRoOiBcIjEwMHZ3XCIsXG4gICAgICB9fVxuICAgID5cblxuICAgICAgPFJvbGVTZWxlY3Rpb24gLz5cbiAgICA8L1BhcGVyPlxuICApXG59XG4iXSwibmFtZXMiOlsiUGFwZXIiLCJSb2xlU2VsZWN0aW9uIiwicmVnaXN0ZXIiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmRTaXplIiwiaGVpZ2h0IiwiY29sb3IiLCJ3aWR0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/signup/register.js\n");

/***/ }),

/***/ "@mui/material":
/*!********************************!*\
  !*** external "@mui/material" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("@mui/material");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/signup/register.js"));
module.exports = __webpack_exports__;

})();