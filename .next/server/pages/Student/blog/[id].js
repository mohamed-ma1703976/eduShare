"use strict";
(() => {
var exports = {};
exports.id = 9776;
exports.ids = [9776];
exports.modules = {

/***/ 1325:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _component_Student_StuNav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5223);
/* harmony import */ var _component_Student_StuSideBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8107);
/* harmony import */ var _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6216);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1492);
/* harmony import */ var _component_Loading___WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7840);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_component_Student_StuNav__WEBPACK_IMPORTED_MODULE_4__, _component_Student_StuSideBar__WEBPACK_IMPORTED_MODULE_5__, _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_6__, firebase_firestore__WEBPACK_IMPORTED_MODULE_7__]);
([_component_Student_StuNav__WEBPACK_IMPORTED_MODULE_4__, _component_Student_StuSideBar__WEBPACK_IMPORTED_MODULE_5__, _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_6__, firebase_firestore__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









function BlogPage({ blog  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    if (router.isFallback || !blog) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Loading___WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {});
    }
    const imageSrc = blog.img ? blog.img : "https://i.ibb.co/RN7HqQT/Edu-Share-Logo.png";
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Student_StuNav__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                    container: true,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                            item: true,
                            xs: 2,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Student_StuSideBar__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                            item: true,
                            xs: 10,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: imageSrc,
                                        alt: blog.Title,
                                        style: {
                                            width: "100%",
                                            minHeight: "300px",
                                            maxHeight: "600px",
                                            objectFit: "cover"
                                        }
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                        variant: "h4",
                                        gutterBottom: true,
                                        children: blog.Title
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                        variant: "h6",
                                        gutterBottom: true,
                                        children: [
                                            "By: ",
                                            blog.InstructorName
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                        variant: "body1",
                                        gutterBottom: true,
                                        children: blog.Body
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    });
}
async function getStaticPaths() {
    const blogsSnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.getDocs)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.collection)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_6__.db, "Blog"));
    const paths = blogsSnapshot.docs.map((doc)=>({
            params: {
                id: doc.id
            }
        }));
    return {
        paths,
        fallback: true
    };
}
async function getStaticProps({ params  }) {
    const blogId = params.id;
    const blogRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.doc)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_6__.db, "Blog", blogId);
    const blogSnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.getDoc)(blogRef);
    if (!blogSnapshot.exists()) {
        return {
            notFound: true
        };
    }
    const blogData = blogSnapshot.data();
    // Fetch the instructor name
    let instructorName = "Unknown";
    if (blogData.Instructor) {
        const instructorDoc = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.getDoc)(blogData.Instructor);
        instructorName = instructorDoc.data().displayName;
    }
    const blog = {
        id: blogSnapshot.id,
        Title: blogData.Title,
        Body: blogData.Body,
        img: blogData.img,
        InstructorName: instructorName
    };
    return {
        props: {
            blog
        },
        revalidate: 1
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogPage);

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

/***/ 9356:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Event");

/***/ }),

/***/ 7926:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Groups3");

/***/ }),

/***/ 3467:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Home");

/***/ }),

/***/ 6866:
/***/ ((module) => {

module.exports = require("@mui/icons-material/LibraryBooks");

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

/***/ 7945:
/***/ ((module) => {

module.exports = require("react-typewriter-hook");

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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [6216,7840,5638], () => (__webpack_exec__(1325)));
module.exports = __webpack_exports__;

})();