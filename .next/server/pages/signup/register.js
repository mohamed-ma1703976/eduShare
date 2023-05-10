"use strict";
(() => {
var exports = {};
exports.id = 5209;
exports.ids = [5209];
exports.modules = {

/***/ 4487:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ register)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./component/Signup/RoleSelection.js




function RoleSelection() {
    const router = (0,router_.useRouter)();
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
        container: true,
        justifyContent: {
            sm: "center"
        },
        alignItems: {
            sm: "center"
        },
        height: "100vh",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Paper, {
            sx: {
                width: "30%",
                height: 220,
                margin: "0 0 0 130px",
                backgroundColor: "white",
                padding: 5,
                pb: 10,
                boxShadow: {
                    xs: "none",
                    md: "0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)"
                }
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Stack, {
                    direction: "column",
                    gap: 2,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Typography, {
                            variant: "h3",
                            sx: {
                                color: "#454545",
                                fontWeight: "800",
                                margin: "0 0 0 -23px",
                                textAlign: "center"
                            },
                            children: [
                                "Edu",
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    style: {
                                        color: "#1ABC9C"
                                    },
                                    children: "Share"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                            sx: {
                                backgroundColor: "#00adb5",
                                height: 45,
                                fontSize: 22,
                                fontWeight: "bold",
                                margin: "20px 0 10px 0"
                            },
                            variant: "contained",
                            type: "submit",
                            onClick: ()=>router.push("/Student/registration"),
                            children: "Sign Up as Student"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                            sx: {
                                backgroundColor: "#00adb5",
                                height: 45,
                                fontSize: 22,
                                fontWeight: "bold"
                            },
                            variant: "contained",
                            type: "submit",
                            onClick: ()=>router.push("/Instructor/registration"),
                            children: "Sign Up as Instructor"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    style: {
                        margin: "10px 0 0 10px"
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Link, {
                        href: "/",
                        variant: "body2",
                        color: "inherit",
                        children: " Back to login page"
                    })
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./pages/signup/register.js



function register() {
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.Paper, {
        style: {
            backgroundImage: `url(${"https://i.ibb.co/6bJ0VFb/Background.jpg"})`,
            backgroundSize: "cover",
            height: "100vh",
            color: "#f5f5f5",
            width: "100vw"
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx(RoleSelection, {})
    });
}


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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(4487));
module.exports = __webpack_exports__;

})();