"use strict";
(() => {
var exports = {};
exports.id = 209;
exports.ids = [209];
exports.modules = {

/***/ 7489:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Registration)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(401);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1492);
/* harmony import */ var _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6216);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_auth__WEBPACK_IMPORTED_MODULE_4__, firebase_firestore__WEBPACK_IMPORTED_MODULE_5__, _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_6__]);
([firebase_auth__WEBPACK_IMPORTED_MODULE_4__, firebase_firestore__WEBPACK_IMPORTED_MODULE_5__, _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








function Registration() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const [signUpData, setSignUpData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        phone: "",
        specialization: "",
        personalInfo: ""
    });
    function handleChange(event) {
        setSignUpData((prev)=>{
            return {
                ...prev,
                [event.target.name]: event.target.value
            };
        });
    }
    console.log(signUpData);
    async function handleSignUp(e) {
        e.preventDefault();
        const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.getAuth)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_6__/* .app */ .l2);
        let collectedData = {
            firstName: signUpData.firstName,
            lastName: signUpData.lastName,
            email: signUpData.email,
            phone: signUpData.phone,
            specialization: signUpData.specialization,
            personalInfo: signUpData.personalInfo,
            status: "Pending",
            myCourse: []
        };
        try {
            const userCredential = await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.createUserWithEmailAndPassword)(auth, signUpData.email, signUpData.password);
            const user = userCredential.user;
            const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.getFirestore)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_6__/* .app */ .l2);
            const docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.doc)(db, "Instructor", user.uid);
            await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.setDoc)(docRef, collectedData);
            router.push("/");
        } catch (error) {
            console.error("Error signing up:", error);
        }
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Paper, {
        style: {
            backgroundImage: `url(${"https://i.ibb.co/6bJ0VFb/Background.jpg"})`,
            backgroundSize: "cover",
            height: "100vh",
            color: "#f5f5f5",
            width: "100vw"
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
            container: true,
            justifyContent: {
                sm: "center"
            },
            alignItems: {
                sm: "center"
            },
            height: "100vh",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Paper, {
                s: true,
                sx: {
                    width: "42%",
                    height: "80vh",
                    margin: "0 0 0 400px",
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
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                variant: "h6",
                                sx: {
                                    color: "#454545",
                                    fontWeight: "800",
                                    margin: "0 0 0 -23px",
                                    textAlign: "center"
                                },
                                children: "( Instructor Registration )"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                                onSubmit: handleSignUp,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                                    direction: "column",
                                    gap: 2,
                                    sx: {
                                        margin: "10px"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                                            direction: "row",
                                            gap: 2,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.TextField, {
                                                    id: "outlined-basic",
                                                    label: "Firs tName",
                                                    variant: "outlined",
                                                    name: "firstName",
                                                    onChange: handleChange,
                                                    sx: {
                                                        margin: "10px 10px 10px 10px"
                                                    }
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.TextField, {
                                                    id: "outlined-basic",
                                                    label: "Last Name",
                                                    variant: "outlined",
                                                    name: "lastName",
                                                    onChange: handleChange,
                                                    sx: {
                                                        margin: "10px 10px 10px 10px"
                                                    }
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                                            direction: "row",
                                            gap: 2,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.TextField, {
                                                    id: "outlined-basic",
                                                    label: "Phone Number",
                                                    variant: "outlined",
                                                    name: "phone",
                                                    onChange: handleChange,
                                                    sx: {
                                                        margin: "10px 10px 10px 10px"
                                                    }
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.TextField, {
                                                    id: "outlined-basic",
                                                    label: "Specialization",
                                                    variant: "outlined",
                                                    name: "specialization",
                                                    onChange: handleChange,
                                                    sx: {
                                                        margin: "10px 10px 10px 10px"
                                                    }
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                                            direction: "row",
                                            gap: 2,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.TextField, {
                                                    id: "outlined-basic",
                                                    label: "Write about youself (Experiance,personla Info,etc..)",
                                                    variant: "outlined",
                                                    name: "personalInfo",
                                                    onChange: handleChange,
                                                    sx: {
                                                        margin: "10px 10px 10px 10px"
                                                    }
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.TextField, {
                                                    id: "outlined-basic",
                                                    label: "Enter Email",
                                                    variant: "outlined",
                                                    name: "email",
                                                    onChange: handleChange,
                                                    sx: {
                                                        margin: "10px 10px 10px 10px"
                                                    }
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                                            direction: "row",
                                            gap: 1,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.TextField, {
                                                id: "outlined-basic",
                                                label: "Enter Password",
                                                variant: "outlined",
                                                name: "password",
                                                onChange: handleChange,
                                                sx: {
                                                    margin: "10px 10px 10px 10px"
                                                },
                                                margin: "normal",
                                                placeholder: "Password",
                                                type: "password",
                                                fullWidth: true
                                            })
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
                                            onClick: handleSignUp,
                                            children: "Register"
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        style: {
                            margin: "-10px 0 0 10px"
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Link, {
                            href: "/",
                            variant: "body2",
                            color: "inherit",
                            children: " Back to login page"
                        })
                    })
                ]
            })
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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [6216], () => (__webpack_exec__(7489)));
module.exports = __webpack_exports__;

})();