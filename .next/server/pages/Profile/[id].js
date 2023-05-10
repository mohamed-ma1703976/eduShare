"use strict";
(() => {
var exports = {};
exports.id = 9916;
exports.ids = [9916];
exports.modules = {

/***/ 6716:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ getUserRole)
/* harmony export */ });
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1492);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_firestore__WEBPACK_IMPORTED_MODULE_0__]);
firebase_firestore__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

async function getUserRole(userId, app) {
    if (!userId) {
        throw new Error("userId is null or undefined.");
    }
    const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getFirestore)(app);
    const studentDocRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(db, "Student", userId);
    const studentDoc = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getDoc)(studentDocRef);
    const instructorDocRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(db, "Instructor", userId);
    const instructorDoc = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getDoc)(instructorDocRef);
    const adminDocRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(db, "Admin", userId);
    const adminDoc = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getDoc)(adminDocRef);
    let role;
    if (studentDoc.exists()) {
        role = "Student";
    } else if (instructorDoc.exists()) {
        role = "Instructor";
    } else if (adminDoc.exists()) {
        role = "Admin";
    } else {
        throw new Error("User not found in any role collection.");
    }
    return role;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3431:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7986);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_system__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _component_SendMessage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2124);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6216);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1492);
/* harmony import */ var _hooks_getRole__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6716);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7915);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_component_SendMessage__WEBPACK_IMPORTED_MODULE_3__, _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_6__, firebase_firestore__WEBPACK_IMPORTED_MODULE_7__, _hooks_getRole__WEBPACK_IMPORTED_MODULE_8__, framer_motion__WEBPACK_IMPORTED_MODULE_10__]);
([_component_SendMessage__WEBPACK_IMPORTED_MODULE_3__, _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_6__, firebase_firestore__WEBPACK_IMPORTED_MODULE_7__, _hooks_getRole__WEBPACK_IMPORTED_MODULE_8__, framer_motion__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const Profile = ()=>{
    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    const { id  } = router.query;
    const [sendMessageOpen, setSendMessageOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [userRole, setUserRole] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const handleSendMessageClick = ()=>{
        setSendMessageOpen(true);
    };
    const handleSendMessageClose = ()=>{
        setSendMessageOpen(false);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!id) {
            return;
        }
        const fetchUserData = async ()=>{
            const role = await (0,_hooks_getRole__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(id, _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_6__/* .app */ .l2);
            console.log("User role:", role);
            setUserRole(role);
            const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.getFirestore)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_6__/* .app */ .l2);
            const userDocRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.doc)(db, role, id);
            const userDoc = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.getDoc)(userDocRef);
            if (userDoc.exists()) {
                let data = userDoc.data();
                console.log(data);
                setUser(data);
            }
        };
        fetchUserData();
    }, [
        router,
        id
    ]);
    if (!user) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.CircularProgress, {
                size: 100,
                color: "success",
                sx: {
                    margin: "200px 550px 0 0 "
                }
            })
        });
    }
    const cardVariants = {
        hidden: {
            opacity: 0,
            scale: 0.8
        },
        visible: {
            opacity: 1,
            scale: 1
        }
    };
    const defaultCoverImage = "https://via.placeholder.com/1920x400.png?text=Cover+Image";
    const defaultProfileImage = "https://i.ibb.co/stTJ1P1/computer-icons-teacher-png-favpng-s-JASskmgxhu-ZQK1-Ya-Xj-UMPj-ZG.jpg";
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_system__WEBPACK_IMPORTED_MODULE_2__.Box, {
        sx: {
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh"
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.CardMedia, {
                component: "img",
                image: user.coverPicture || defaultCoverImage,
                alt: "Cover Image",
                sx: {
                    borderTopLeftRadius: 0,
                    borderTopRightRadius: 0,
                    height: "40%",
                    maxHeight: "300px",
                    objectFit: "cover",
                    width: "100%"
                }
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_system__WEBPACK_IMPORTED_MODULE_2__.Box, {
                sx: {
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#f5f5f5"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Avatar, {
                        src: user.profilePicture || defaultProfileImage,
                        alt: "Profile Picture",
                        sx: {
                            width: 140,
                            height: 140,
                            marginBottom: 2,
                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                            border: "4px solid #ffffff",
                            position: "relative",
                            top: "-70px"
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                        variant: "h4",
                        component: "div",
                        sx: {
                            mt: -3
                        },
                        children: user.displayName
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                        variant: "subtitle1",
                        component: "div",
                        sx: {
                            mb: 2
                        },
                        children: user.title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                        variant: "body1",
                        color: "text.secondary",
                        sx: {
                            textAlign: "center",
                            px: 2
                        },
                        children: user.bio
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_system__WEBPACK_IMPORTED_MODULE_2__.Box, {
                        sx: {
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            marginTop: "24px"
                        },
                        children: id && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_SendMessage__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            open: sendMessageOpen,
                            handleClose: handleSendMessageClose,
                            toId: id
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Profile);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7915:
/***/ ((module) => {

module.exports = require("@mui/icons-material");

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

/***/ }),

/***/ 6197:
/***/ ((module) => {

module.exports = import("framer-motion");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [6216,2124], () => (__webpack_exec__(3431)));
module.exports = __webpack_exports__;

})();