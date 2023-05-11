"use strict";
(() => {
var exports = {};
exports.id = 8250;
exports.ids = [8250];
exports.modules = {

/***/ 8701:
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
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_icons_material_AddAPhoto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7248);
/* harmony import */ var _mui_icons_material_AddAPhoto__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_AddAPhoto__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1492);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3392);
/* harmony import */ var _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6216);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_firestore__WEBPACK_IMPORTED_MODULE_4__, firebase_storage__WEBPACK_IMPORTED_MODULE_5__, _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_6__]);
([firebase_firestore__WEBPACK_IMPORTED_MODULE_4__, firebase_storage__WEBPACK_IMPORTED_MODULE_5__, _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









function UpdateBlog({ blogData , userId  }) {
    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(blogData.Title);
    const [body, setBody] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(blogData.Body);
    const [preview, setPreview] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [success, setSuccess] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [image, setImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [imageUrl, setImageUrl] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(blogData.img);
    const [imagePreview, setImagePreview] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(blogData.img);
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
    const { blogId  } = router.query;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setImagePreview(preview);
    }, [
        preview
    ]);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!title || !body || !image) {
            return;
        }
        setLoading(true);
        const storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_5__.getStorage)();
        const storageRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_5__.ref)(storage, `blog-images/${image.name}`);
        await (0,firebase_storage__WEBPACK_IMPORTED_MODULE_5__.uploadBytes)(storageRef, image);
        const url = await (0,firebase_storage__WEBPACK_IMPORTED_MODULE_5__.getDownloadURL)(storageRef);
        setImageUrl(url);
        const blogRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_6__.db, "Blog", blogId);
        await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.setDoc)(blogRef, {
            Title: title,
            Body: body,
            AuthorId: userId,
            img: imageUrl
        }, {
            merge: true
        });
        setLoading(false);
        setSuccess(true);
        // Navigate to the Instructor/myBlogs page after the blog is updated
        router.push("/Instructor/myBlogs");
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setImagePreview(preview);
    }, [
        preview
    ]);
    const handleImageChange = (e)=>{
        if (e.target.files && e.target.files[0]) {
            setPreview(URL.createObjectURL(e.target.files[0]));
            setImage(e.target.files[0]);
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
        container: true,
        justifyContent: "center",
        alignItems: "center",
        style: {
            backgroundImage: `url(${"https://i.ibb.co/6bJ0VFb/Background.jpg"})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "100%",
            width: "100%"
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Paper, {
            sx: {
                width: {
                    xs: "90%",
                    sm: 500
                },
                minHeight: {
                    xs: "80%",
                    sm: 750
                },
                padding: 10,
                pb: 5,
                boxShadow: {
                    xs: "none",
                    md: "0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)"
                }
            },
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                    direction: "column",
                    gap: 1,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                            variant: "h5",
                            align: "center",
                            children: "Update Blog"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                            onSubmit: handleSubmit,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                    display: "flex",
                                    justifyContent: "center",
                                    mb: 2,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        style: {
                                            width: "100px",
                                            height: "100px",
                                            backgroundColor: "#f0f0f0",
                                            cursor: "pointer",
                                            backgroundImage: `url(${imagePreview})`,
                                            backgroundSize: "cover",
                                            backgroundPosition: "center",
                                            borderRadius: "5px"
                                        },
                                        onClick: ()=>document.getElementById("blogCover").click()
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                    display: "flex",
                                    justifyContent: "center",
                                    mb: 2,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                        htmlFor: "blogCover",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Input, {
                                                id: "blogCover",
                                                type: "file",
                                                accept: "image/*",
                                                style: {
                                                    display: "none"
                                                },
                                                onChange: (e)=>handleImageChange(e)
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                                component: "span",
                                                variant: "outlined",
                                                color: "primary",
                                                startIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_AddAPhoto__WEBPACK_IMPORTED_MODULE_3___default()), {}),
                                                children: "Change Cover Image"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.TextField, {
                                    id: "title",
                                    label: "Title",
                                    type: "text",
                                    fullWidth: true,
                                    value: title,
                                    onChange: (e)=>setTitle(e.target.value),
                                    required: true
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                    mt: 2,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.TextField, {
                                        id: "content",
                                        label: "Content",
                                        type: "text",
                                        fullWidth: true,
                                        multiline: true,
                                        rows: 4,
                                        value: body,
                                        onChange: (e)=>setBody(e.target.value),
                                        required: true
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                    mt: 2,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                        type: "submit",
                                        variant: "contained",
                                        color: "primary",
                                        fullWidth: true,
                                        children: "Update Blog"
                                    })
                                })
                            ]
                        })
                    ]
                }),
                loading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                    mt: 2,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                        variant: "body2",
                        color: "text.secondary",
                        children: "Updating..."
                    })
                }),
                error && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                    mt: 2,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                        variant: "body2",
                        color: "text.secondary",
                        children: error
                    })
                })
            ]
        })
    });
}
async function getStaticPaths() {
    // Return an empty `paths` array to indicate that all possible paths should be statically generated
    return {
        paths: [],
        fallback: "blocking"
    };
}
async function getStaticProps({ params  }) {
    const { id  } = params;
    const blogRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_6__.db, "Blog", id);
    const blogSnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.getDoc)(blogRef);
    if (!blogSnapshot.exists()) {
        return {
            notFound: true
        };
    }
    const blogData = blogSnapshot.data();
    // Fetch the instructor id
    let userId = _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_6__/* .auth */ .I8?.currentUser?.uid;
    // Fetch the image URL
    const imageUrl = await (0,firebase_storage__WEBPACK_IMPORTED_MODULE_5__.getDownloadURL)((0,firebase_storage__WEBPACK_IMPORTED_MODULE_5__.ref)((0,firebase_storage__WEBPACK_IMPORTED_MODULE_5__.getStorage)(), blogData.img));
    return {
        props: {
            blogData: {
                ...blogData,
                img: imageUrl
            },
            userId
        },
        revalidate: 1
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UpdateBlog);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7248:
/***/ ((module) => {

module.exports = require("@mui/icons-material/AddAPhoto");

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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [6216], () => (__webpack_exec__(8701)));
module.exports = __webpack_exports__;

})();