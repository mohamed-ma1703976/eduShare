"use strict";
(() => {
var exports = {};
exports.id = 467;
exports.ids = [467];
exports.modules = {

/***/ 2409:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1492);
/* harmony import */ var _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6216);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6197);
/* harmony import */ var _mui_icons_material_Message__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9086);
/* harmony import */ var _mui_icons_material_Message__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Message__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_icons_material_Notifications__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1567);
/* harmony import */ var _mui_icons_material_Notifications__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Notifications__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _SendMessage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2124);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_firestore__WEBPACK_IMPORTED_MODULE_3__, _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_4__, framer_motion__WEBPACK_IMPORTED_MODULE_6__, _SendMessage__WEBPACK_IMPORTED_MODULE_9__]);
([firebase_firestore__WEBPACK_IMPORTED_MODULE_3__, _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_4__, framer_motion__WEBPACK_IMPORTED_MODULE_6__, _SendMessage__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










function MyStudents() {
    const [students, setStudents] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [courses, setCourses] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [instructor, setInstructor] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [selectedStudentId, setSelectedStudentId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [sendMessageOpen, setSendMessageOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [firstName, setFirstName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [lastName, setLastName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    let currentId = _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_4__/* .auth.currentUser.uid */ .I8.currentUser.uid;
    async function fetchCourses() {
        const coursesCollection = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_4__.db, "Course");
        const coursesSnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDocs)(coursesCollection);
        const coursesList = coursesSnapshot.docs.map((doc)=>({
                id: doc.id,
                attributes: doc.data()
            }));
        setCourses(coursesList);
    }
    async function fetchStudents() {
        const studentsCollection = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_4__.db, "Student");
        const studentsSnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDocs)(studentsCollection);
        const studentsList = studentsSnapshot.docs.map((doc)=>({
                id: doc.id,
                attributes: doc.data()
            }));
        setStudents(studentsList);
    }
    async function fetchInstructors() {
        const instructorsCollection = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_4__.db, "Instructor");
        const instructorsSnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDocs)(instructorsCollection);
        const instructorsList = instructorsSnapshot.docs.map((doc)=>({
                id: doc.id,
                attributes: doc.data()
            }));
        setInstructor(instructorsList);
    }
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        fetchStudents();
        fetchCourses();
        fetchInstructors();
    }, []);
    let nameOfCourse = instructor.find((i)=>i.id === currentId)?.attributes.myCourse[0]?.coursname[0];
    let courseId = courses.find((c)=>c.attributes.CourseTitle === nameOfCourse)?.id;
    let registeredStudents = students.filter((s)=>s.attributes.registerdcourses.includes(courseId));
    const handleStudentCardClick = (id)=>{
        router.push(`/Profile/${id}`);
    };
    const handleSendMessageClick = (id, fName, lName)=>{
        setSelectedStudentId(id);
        setFirstName(fName);
        setLastName(lName);
        setSendMessageOpen(true);
    };
    const handleSendMessageClose = ()=>{
        setSendMessageOpen(false);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {
                container: true,
                children: registeredStudents.map((s, index)=>{
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {
                        item: true,
                        xs: 12,
                        sm: 6,
                        md: 6,
                        lg: 6,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {
                            initial: "hidden",
                            animate: "visible",
                            variants: {
                                hidden: {
                                    opacity: 0,
                                    scale: 0.8
                                },
                                visible: {
                                    opacity: 1,
                                    scale: 1
                                }
                            },
                            transition: {
                                delay: index * 0.1
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.ButtonBase, {
                                component: "div",
                                sx: {
                                    textDecoration: "none",
                                    color: "inherit"
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Card, {
                                    sx: {
                                        minWidth: 300,
                                        margin: "16px"
                                    },
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.CardContent, {
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
                                                sx: {
                                                    display: "flex",
                                                    justifyContent: "space-between",
                                                    alignItems: "center"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
                                                        variant: "h5",
                                                        component: "div",
                                                        children: [
                                                            s.attributes.firstName,
                                                            " ",
                                                            s.attributes.lastName
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
                                                        sx: {
                                                            display: "flex"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Message__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                                sx: {
                                                                    marginRight: 1
                                                                },
                                                                onClick: ()=>handleSendMessageClick(s.id, s.attributes.firstName, s.attributes.lastName)
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Notifications__WEBPACK_IMPORTED_MODULE_8___default()), {})
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
                                                variant: "body2",
                                                color: "text.secondary",
                                                children: [
                                                    "Phone: ",
                                                    s.attributes.phone
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
                                                variant: "body2",
                                                color: "text.secondary",
                                                children: [
                                                    "Email: ",
                                                    s.attributes.email
                                                ]
                                            })
                                        ]
                                    })
                                })
                            })
                        })
                    }, s.id);
                })
            }),
            selectedStudentId && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SendMessage__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                open: sendMessageOpen,
                handleClose: handleSendMessageClose,
                toId: selectedStudentId,
                fN: firstName,
                lN: lastName
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyStudents);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5105:
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
/* harmony import */ var _component_Instructors_InstSidebarr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(780);
/* harmony import */ var _component_Instructors_InstNav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7628);
/* harmony import */ var _component_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5370);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _component_Instructors_MyStudents__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2409);
/* harmony import */ var _component_Loading___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7840);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_component_Instructors_InstSidebarr__WEBPACK_IMPORTED_MODULE_2__, _component_Instructors_InstNav__WEBPACK_IMPORTED_MODULE_3__, _component_Card__WEBPACK_IMPORTED_MODULE_4__, _component_Instructors_MyStudents__WEBPACK_IMPORTED_MODULE_6__]);
([_component_Instructors_InstSidebarr__WEBPACK_IMPORTED_MODULE_2__, _component_Instructors_InstNav__WEBPACK_IMPORTED_MODULE_3__, _component_Card__WEBPACK_IMPORTED_MODULE_4__, _component_Instructors_MyStudents__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








function mystudents() {
    const [search, setSearch] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("");
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setTimeout(()=>{
            setLoading(false);
        }, 2000); // Set timeout to 5 seconds
    }, []);
    if (loading) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Loading___WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}); // Render Loading component
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Instructors_InstNav__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    setCourseSearch: setSearch
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Stack, {
                    direction: "row",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Instructors_InstSidebarr__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            style: {
                                display: "flex",
                                alignItems: "center",
                                margin: "px 0 0 0"
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
                                flexGrow: 1,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Instructors_MyStudents__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
                            })
                        })
                    ]
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mystudents);

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

/***/ 4387:
/***/ ((module) => {

module.exports = require("@mui/icons-material/LibraryAddCheck");

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

/***/ 1567:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Notifications");

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

/***/ 19:
/***/ ((module) => {

module.exports = require("@mui/material/Box");

/***/ }),

/***/ 3819:
/***/ ((module) => {

module.exports = require("@mui/material/Button");

/***/ }),

/***/ 8167:
/***/ ((module) => {

module.exports = require("@mui/material/Card");

/***/ }),

/***/ 3691:
/***/ ((module) => {

module.exports = require("@mui/material/CardActions");

/***/ }),

/***/ 8455:
/***/ ((module) => {

module.exports = require("@mui/material/CardContent");

/***/ }),

/***/ 3843:
/***/ ((module) => {

module.exports = require("@mui/material/Icon");

/***/ }),

/***/ 7163:
/***/ ((module) => {

module.exports = require("@mui/material/Typography");

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

/***/ 4466:
/***/ ((module) => {

module.exports = require("react-transition-group");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [6216,7840,8083,5370,2124], () => (__webpack_exec__(5105)));
module.exports = __webpack_exports__;

})();