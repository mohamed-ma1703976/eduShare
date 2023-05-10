"use strict";
(() => {
var exports = {};
exports.id = 1110;
exports.ids = [1110];
exports.modules = {

/***/ 1945:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6216);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3392);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6555);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1492);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_2__, firebase_storage__WEBPACK_IMPORTED_MODULE_3__, uuid__WEBPACK_IMPORTED_MODULE_4__, firebase_firestore__WEBPACK_IMPORTED_MODULE_5__]);
([_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_2__, firebase_storage__WEBPACK_IMPORTED_MODULE_3__, uuid__WEBPACK_IMPORTED_MODULE_4__, firebase_firestore__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const UploadFile = ({ setFileList  })=>{
    const [file, setFile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [instructors, setInstructors] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const currentUser = _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_2__/* .auth.currentUser.uid */ .I8.currentUser.uid;
    let currentInstructor = instructors?.find((ins)=>ins.id === currentUser)?.attributes.myCourse?.[0]?.coursname?.[0]?.replace(/\s+/g, "");
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const fetchInstructors = async ()=>{
            const instructorCollection = (0,_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_2__/* .collection */ .hJ)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_2__.db, "Instructor");
            const instructorSnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.getDocs)(instructorCollection);
            const instructorsList = instructorSnapshot.docs.map((doc)=>({
                    id: doc.id,
                    attributes: doc.data()
                }));
            setInstructors(instructorsList);
            setLoading(false);
        };
        fetchInstructors();
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (currentInstructor) {
            const fileListRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.ref)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_2__/* .storage */ .tO, `${currentInstructor}/`);
            (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.listAll)(fileListRef).then((res)=>{
                const promises = res.items.map((item)=>(0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.getDownloadURL)(item));
                Promise.all(promises).then((urls)=>{
                    const files = urls.map((url, index)=>({
                            name: res.items[index].name,
                            url
                        }));
                    setFileList(files);
                });
            });
        }
    }, [
        currentInstructor,
        setFileList
    ]);
    if (loading) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.CircularProgress, {
            size: 100,
            color: "success",
            sx: {
                margin: "100px 0px 0 350px "
            }
        })
    });
    const handleFileChange = (e)=>{
        setFile(e.target.files[0]);
    };
    const handleUpload = ()=>{
        if (file === null) return;
        const fileRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.ref)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_2__/* .storage */ .tO, `${currentInstructor}/${file.name}`);
        const fileListRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.ref)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_2__/* .storage */ .tO, `${currentInstructor}/`);
        (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.listAll)(fileListRef).then((res)=>{
            const existingFile = res.items.find((item)=>item.name === file.name);
            if (existingFile) {
                // File with the same name already exists
                alert("File with the same name already exists");
            } else {
                // Upload the file
                (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.uploadBytes)(fileRef, file).then((snapshot)=>{
                    (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.getDownloadURL)(snapshot.ref).then((url)=>{
                        setFileList((prev)=>[
                                ...prev,
                                {
                                    name: file.name,
                                    url
                                }
                            ]);
                    });
                });
            }
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                type: "file",
                onChange: handleFileChange
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Button, {
                variant: "contained",
                color: "primary",
                onClick: handleUpload,
                children: "Upload File"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UploadFile);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3910:
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
/* harmony import */ var _component_Loading___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7840);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _component_Instructors_InstNav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7628);
/* harmony import */ var _component_Instructors_InstSidebarr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(780);
/* harmony import */ var _component_Instructors_UploadFile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1945);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3392);
/* harmony import */ var _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6216);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1492);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_component_Instructors_InstNav__WEBPACK_IMPORTED_MODULE_4__, _component_Instructors_InstSidebarr__WEBPACK_IMPORTED_MODULE_5__, _component_Instructors_UploadFile__WEBPACK_IMPORTED_MODULE_6__, firebase_storage__WEBPACK_IMPORTED_MODULE_7__, _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_8__, firebase_firestore__WEBPACK_IMPORTED_MODULE_9__]);
([_component_Instructors_InstNav__WEBPACK_IMPORTED_MODULE_4__, _component_Instructors_InstSidebarr__WEBPACK_IMPORTED_MODULE_5__, _component_Instructors_UploadFile__WEBPACK_IMPORTED_MODULE_6__, firebase_storage__WEBPACK_IMPORTED_MODULE_7__, _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_8__, firebase_firestore__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










function UploadContent() {
    const [fileList, setFileList] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const [instructors, setInstructors] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setTimeout(()=>{
            setLoading(false);
        }, 2000); // Set timeout to 5 seconds
    }, []);
    const currentUser = _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_8__/* .auth */ .I8?.currentUser?.uid;
    let currentInstructor = instructors?.find((ins)=>ins.id === currentUser)?.attributes.myCourse?.[0]?.coursname?.[0]?.replace(/\s+/g, "");
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const fetchInstructors = async ()=>{
            const instructorCollection = (0,_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_8__/* .collection */ .hJ)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_8__.db, "Instructor");
            const instructorSnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_9__.getDocs)(instructorCollection);
            const instructorsList = instructorSnapshot.docs.map((doc)=>({
                    id: doc.id,
                    attributes: doc.data()
                }));
            setInstructors(instructorsList);
            setLoading(false);
        };
        fetchInstructors();
    }, []);
    if (loading) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Loading___WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}); // Render Loading component
    }
    const handleDeleteFile = (file)=>{
        let confirmation = confirm("This file will be Deleted");
        if (confirmation) {
            const fileRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_7__.ref)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_8__/* .storage */ .tO, `${currentInstructor}/${file.name}`);
            (0,firebase_storage__WEBPACK_IMPORTED_MODULE_7__.deleteObject)(fileRef).then(()=>{
                setFileList((prev)=>prev.filter((f)=>f !== file));
            }).catch((error)=>{
                console.error("Error deleting file", error);
            });
        } else {
            return;
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Instructors_InstNav__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Stack, {
                    direction: "row",
                    justifyContent: "center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Instructors_InstSidebarr__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                            sx: {
                                flexGrow: 1,
                                marginLeft: 2,
                                marginRight: 2
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                    variant: "h5",
                                    sx: {
                                        flexGrow: 1,
                                        padding: 2
                                    },
                                    children: "Upload Content"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    style: {
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        margin: "20px 0 0 0"
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Instructors_UploadFile__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                        setFileList: setFileList
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableContainer, {
                                    component: _mui_material__WEBPACK_IMPORTED_MODULE_3__.Paper,
                                    sx: {
                                        marginTop: 2,
                                        marginBottom: 2,
                                        marginLeft: 1,
                                        width: "100%"
                                    },
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Table, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableHead, {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableRow, {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableCell, {
                                                            children: "File Name"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableCell, {
                                                            children: "Download Link"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableCell, {
                                                            children: "Delete"
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableBody, {
                                                children: fileList.map((file, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableRow, {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableCell, {
                                                                children: file.name
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableCell, {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {
                                                                    variant: "outlined",
                                                                    color: "primary",
                                                                    href: file.url,
                                                                    target: "_blank",
                                                                    rel: "noopener noreferrer",
                                                                    children: "Download"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableCell, {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {
                                                                    variant: "outlined",
                                                                    color: "error",
                                                                    onClick: ()=>handleDeleteFile(file),
                                                                    children: "Delete"
                                                                })
                                                            })
                                                        ]
                                                    }, index))
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UploadContent);

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

/***/ }),

/***/ 6555:
/***/ ((module) => {

module.exports = import("uuid");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [6216,7840,8083], () => (__webpack_exec__(3910)));
module.exports = __webpack_exports__;

})();