"use strict";
(() => {
var exports = {};
exports.id = 5405;
exports.ids = [5405];
exports.modules = {

/***/ 9136:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7986);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_system__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hooks_AuthProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5242);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(401);
/* harmony import */ var _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6216);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1492);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_auth__WEBPACK_IMPORTED_MODULE_6__, _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_7__, firebase_firestore__WEBPACK_IMPORTED_MODULE_8__]);
([firebase_auth__WEBPACK_IMPORTED_MODULE_6__, _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_7__, firebase_firestore__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










function App() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const { login  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_hooks_AuthProvider__WEBPACK_IMPORTED_MODULE_5__/* .AuthContext */ .V);
    const [loginData, setLoginData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        email: "",
        password: ""
    });
    const [loginError, setLoginError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    function handelChange(event) {
        setLoginData((pre)=>{
            return {
                ...pre,
                [event.target.name]: event.target.value
            };
        });
    }
    async function handelLogin(e) {
        e.preventDefault();
        const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_6__.getAuth)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_7__/* .app */ .l2);
        try {
            const userCredential = await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_6__.signInWithEmailAndPassword)(auth, loginData.email, loginData.password);
            const userId = userCredential.user.uid;
            login(userId);
            const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.getFirestore)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_7__/* .app */ .l2);
            const studentDocRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.doc)(db, "Student", userId);
            const studentDoc = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.getDoc)(studentDocRef);
            const instructorDocRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.doc)(db, "Instructor", userId);
            const instructorDoc = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.getDoc)(instructorDocRef);
            const adminDocRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.doc)(db, "Admin", userId);
            const adminDoc = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.getDoc)(adminDocRef);
            let userDoc;
            let role;
            if (studentDoc.exists()) {
                userDoc = studentDoc;
                role = "student";
            //  router.push('/Student')
            } else if (instructorDoc.exists()) {
                userDoc = instructorDoc;
                role = "instructor";
            // router.push('/Instructor')
            } else if (adminDoc.exists()) {
                userDoc = adminDoc;
                role = "admin";
            //router.push('/Admin')
            } else {
                throw new Error("User not found in any role collection.");
            }
            const userData = userDoc.data();
            let profileComplete;
            if (role === "student") {
                profileComplete = userData.displayName && userData.bio && userData.title;
            } else if (role === "instructor") {
                profileComplete = userData.displayName && userData.bio && userData.title;
            } else {
                profileComplete = true; // Assuming admins don't need a profile completeness check
            }
            if (!profileComplete) {
                router.push("/createProfile");
            } else {
                if (role === "student") {
                    router.push("/Student");
                } else if (role === "instructor") {
                    router.push("/Instructor");
                } else {
                    router.push("/Admin");
                }
            }
            setLoginError(false);
        } catch (error) {
            setLoginError(true);
        }
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
        container: true,
        justifyContent: {
            sm: "center"
        },
        alignItems: {
            sm: "center"
        },
        height: "100vh",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Paper, {
            sx: {
                width: 500,
                height: 300,
                backgroundColor: "white",
                padding: 5,
                pb: 10,
                boxShadow: {
                    xs: "none",
                    md: "0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)"
                }
            },
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                    direction: "column",
                    gap: 2,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                            variant: "h3",
                            sx: {
                                color: "#454545",
                                fontWeight: "800",
                                margin: "0 0 0 -23px",
                                textAlign: "center"
                            },
                            children: [
                                "Edu",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    style: {
                                        color: "#1ABC9C"
                                    },
                                    children: "Share"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                margin: "10px 10px 10px 10px"
                            },
                            onSubmit: handelLogin,
                            children: [
                                loginError && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Alert, {
                                    severity: "error",
                                    sx: {
                                        width: "85%",
                                        margin: "0 0 0 16px"
                                    },
                                    children: "Email or Password is Wrong !"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.TextField, {
                                    id: "outlined-basic",
                                    label: "Enter Email",
                                    variant: "outlined",
                                    name: "email",
                                    onChange: handelChange,
                                    sx: {
                                        margin: "10px 10px 10px 10px"
                                    }
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.TextField, {
                                    id: "outlined-basic",
                                    label: "Enter Password",
                                    variant: "outlined",
                                    name: "password",
                                    onChange: handelChange,
                                    sx: {
                                        margin: "10px 10px 10px 10px"
                                    },
                                    margin: "normal",
                                    placeholder: "Password",
                                    type: "password",
                                    fullWidth: true
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                    sx: {
                                        backgroundColor: "#00adb5",
                                        height: 45,
                                        fontSize: 22,
                                        fontWeight: "bold"
                                    },
                                    variant: "contained",
                                    type: "submit",
                                    onClick: handelLogin,
                                    children: "Login"
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Link, {
                    href: "/signup/register",
                    variant: "body2",
                    color: "inherit",
                    children: " Don't have an account? Register"
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5242:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ AuthProvider),
/* harmony export */   "V": () => (/* binding */ AuthContext)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const AuthProvider = ({ children  })=>{
    const [userId, setUserId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [currentId, setCurrentId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const login = (userId)=>{
        setUserId(userId);
    };
    const logout = ()=>{
        setUserId(null);
    };
    const currentIdState = (currentId)=>{
        setCurrentId(currentId);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AuthContext.Provider, {
        value: {
            userId,
            login,
            logout,
            currentIdState,
            currentId
        },
        children: children
    });
};


/***/ }),

/***/ 4369:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AdminDashBoard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _component_Login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9136);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_component_Login__WEBPACK_IMPORTED_MODULE_2__]);
_component_Login__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function AdminDashBoard() {
    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    console.log(user);
    // function handleLogin(name) {
    //   setUser(name);
    // }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Paper, {
        style: {
            backgroundImage: `url(${"https://i.ibb.co/6bJ0VFb/Background.jpg"})`,
            backgroundSize: "cover",
            height: "100vh",
            color: "#f5f5f5",
            width: "100vw"
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Login__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            setUserr: setUser,
            userr: user
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 7986:
/***/ ((module) => {

module.exports = require("@mui/system");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3745:
/***/ ((module) => {

module.exports = import("firebase/app");;

/***/ }),

/***/ 401:
/***/ ((module) => {

module.exports = import("firebase/auth");;

/***/ }),

/***/ 1492:
/***/ ((module) => {

module.exports = import("firebase/firestore");;

/***/ }),

/***/ 3392:
/***/ ((module) => {

module.exports = import("firebase/storage");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [6216], () => (__webpack_exec__(4369)));
module.exports = __webpack_exports__;

})();