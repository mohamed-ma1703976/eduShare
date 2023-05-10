"use strict";
(() => {
var exports = {};
exports.id = 1298;
exports.ids = [1298];
exports.modules = {

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

/***/ 4844:
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6902);
/* harmony import */ var _mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3188);
/* harmony import */ var _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _hooks_AuthProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5242);
/* harmony import */ var _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6216);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(401);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1492);
/* harmony import */ var _component_Instructors_InstSidebarr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(780);
/* harmony import */ var _component_Instructors_InstNav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7628);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_7__, firebase_auth__WEBPACK_IMPORTED_MODULE_8__, firebase_firestore__WEBPACK_IMPORTED_MODULE_9__, _component_Instructors_InstSidebarr__WEBPACK_IMPORTED_MODULE_10__, _component_Instructors_InstNav__WEBPACK_IMPORTED_MODULE_11__]);
([_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_7__, firebase_auth__WEBPACK_IMPORTED_MODULE_8__, firebase_firestore__WEBPACK_IMPORTED_MODULE_9__, _component_Instructors_InstSidebarr__WEBPACK_IMPORTED_MODULE_10__, _component_Instructors_InstNav__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












function MyBlogs() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const [blogs, setBlogs] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_8__.getAuth)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_7__/* .app */ .l2);
    const userId = auth?.currentUser?.uid;
    console.log(blogs);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!userId) return;
        const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_9__.getFirestore)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_7__/* .app */ .l2);
        const blogsRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_9__.collection)(db, "Blog");
        const q = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_9__.query)(blogsRef, (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_9__.where)("AuthorId", "==", userId));
        const unsubscribe = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_9__.onSnapshot)(q, (querySnapshot)=>{
            const blogsData = [];
            querySnapshot.forEach((doc)=>{
                blogsData.push({
                    id: doc.id,
                    ...doc.data()
                });
            });
            setBlogs(blogsData);
            setLoading(false);
        });
        return ()=>{
            unsubscribe();
        };
    }, [
        userId
    ]);
    const defaultImage = "https://i.ibb.co/RN7HqQT/Edu-Share-Logo.png"; // Add the default image URL here
    const handleCreateBlog = ()=>{
        router.push("/Instructor/createBlog");
    };
    const handleUpdateBlog = (id)=>{
        router.push(`/Instructor/UpdateBlog?blogId=${id}`);
    };
    const handleDeleteBlog = async (id)=>{
        if (confirm("Are you sure you want to continue?")) {
            try {
                const blogRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_9__.doc)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_7__.db, "Blog", id);
                await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_9__.deleteDoc)(blogRef);
                console.log("Blog deleted:", id);
            } catch (error) {
                console.error("Error deleting blog:", error);
            }
        } else {
            return;
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Instructors_InstNav__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Stack, {
                    direction: "row",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Instructors_InstSidebarr__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {}),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                            flexGrow: 1,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                    display: "flex",
                                    justifyContent: "center",
                                    mb: 3,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {
                                        variant: "contained",
                                        sx: {
                                            backgroundColor: "#1abc9c",
                                            marginRight: "16px"
                                        },
                                        onClick: handleCreateBlog,
                                        children: "Add New Blog"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                    container: true,
                                    spacing: 3,
                                    children: blogs.map((blog)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                            item: true,
                                            xs: 12,
                                            sm: 6,
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Card, {
                                                sx: {
                                                    width: "60%",
                                                    margin: "0 auto"
                                                },
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.CardMedia, {
                                                        component: "img",
                                                        height: "140",
                                                        image: blog.img ? blog.img : defaultImage,
                                                        alt: blog.Title
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.CardContent, {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                                                variant: "h5",
                                                                component: "div",
                                                                children: blog.Title
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                                                variant: "body2",
                                                                color: "text.secondary",
                                                                children: [
                                                                    blog.Body.slice(0, 100),
                                                                    "..."
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.CardActions, {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.IconButton, {
                                                                "aria-label": "update",
                                                                onClick: ()=>handleUpdateBlog(blog.id),
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_4___default()), {})
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.IconButton, {
                                                                "aria-label": "delete",
                                                                onClick: ()=>handleDeleteBlog(blog.id),
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_5___default()), {})
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        }, blog.id))
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyBlogs);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1883:
/***/ ((module) => {

module.exports = require("@mui/icons-material/AccountCircle");

/***/ }),

/***/ 5643:
/***/ ((module) => {

module.exports = require("@mui/icons-material/AutoStories");

/***/ }),

/***/ 7226:
/***/ ((module) => {

module.exports = require("@mui/icons-material/CalendarMonth");

/***/ }),

/***/ 3188:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Delete");

/***/ }),

/***/ 6902:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Edit");

/***/ }),

/***/ 7926:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Groups3");

/***/ }),

/***/ 3467:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Home");

/***/ }),

/***/ 9020:
/***/ ((module) => {

module.exports = require("@mui/icons-material/MapsUgc");

/***/ }),

/***/ 9086:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Message");

/***/ }),

/***/ 2753:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Newspaper");

/***/ }),

/***/ 3173:
/***/ ((module) => {

module.exports = require("@mui/icons-material/NotificationsNone");

/***/ }),

/***/ 32:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Settings");

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
var __webpack_exports__ = __webpack_require__.X(0, [6216,8083], () => (__webpack_exec__(4844)));
module.exports = __webpack_exports__;

})();