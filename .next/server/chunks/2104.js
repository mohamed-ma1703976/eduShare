"use strict";
exports.id = 2104;
exports.ids = [2104];
exports.modules = {

/***/ 2104:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7986);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_system__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_ButtonBase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2494);
/* harmony import */ var _mui_material_ButtonBase__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ButtonBase__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6197);
/* harmony import */ var _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6216);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1492);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_6__, _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_7__, firebase_firestore__WEBPACK_IMPORTED_MODULE_8__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_6__, _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_7__, firebase_firestore__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const EventCard = ({ event  })=>{
    const defaultImage = "https://i.ibb.co/RN7HqQT/Edu-Share-Logo.png";
    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 30
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };
    const [stu, setStu] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        const fetchStudents = async ()=>{
            const studentCollection = (0,_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_7__/* .collection */ .hJ)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_7__.db, "Student");
            const studentSnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.getDocs)(studentCollection);
            const studentList = studentSnapshot.docs.map((doc)=>({
                    id: doc.id,
                    attributes: doc.data()
                }));
            setStu(studentList);
        };
        fetchStudents();
    }, []);
    let userId = _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_7__/* .auth */ .I8?.currentUser?.uid;
    const currentStudentRegisterdCourses = stu.find((s)=>s.id === userId)?.attributes?.registerdcourses;
    let test = currentStudentRegisterdCourses?.includes(event.id);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
        item: true,
        xs: 12,
        sm: 6,
        md: 4,
        lg: 3,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
            href: `/Student/Event/${event.id}`,
            passHref: true,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_ButtonBase__WEBPACK_IMPORTED_MODULE_5___default()), {
                component: "div",
                sx: {
                    textDecoration: "none",
                    color: "inherit"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {
                    initial: {
                        opacity: 0,
                        y: 20,
                        scale: 1
                    },
                    animate: {
                        opacity: 1,
                        y: 0,
                        scale: 1
                    },
                    whileHover: {
                        scale: 1.05,
                        boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.2)"
                    },
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Card, {
                        sx: {
                            minHeight: "100%",
                            maxHeight: "400px",
                            minWidth: "250px",
                            display: "flex",
                            flexDirection: "column",
                            boxShadow: 2,
                            borderRadius: 2,
                            overflow: "hidden",
                            bgcolor: "#ffffff",
                            "&::after": {
                                content: "'registered'",
                                display: test ? "block" : "none",
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                backgroundColor: "rgba(255, 0, 0, 0.5)",
                                color: "#fff",
                                fontSize: "1.5rem",
                                fontWeight: "bold",
                                textAlign: "center",
                                paddingTop: "50%",
                                opacity: 0,
                                transition: "opacity 0.2s ease"
                            },
                            "&:hover::after": {
                                opacity: 1
                            }
                        },
                        component: framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div,
                        initial: "initial",
                        animate: "animate",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.CardMedia, {
                                component: "img",
                                height: "200",
                                image: event.coverImage || defaultImage,
                                alt: "Event cover"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.CardContent, {
                                sx: {
                                    flex: 1
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                        variant: "h6",
                                        gutterBottom: true,
                                        children: event.title
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                        variant: "body1",
                                        gutterBottom: true,
                                        children: [
                                            "Start Time: ",
                                            event.start
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                        variant: "body1",
                                        gutterBottom: true,
                                        children: [
                                            "End Time: ",
                                            event.end
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                        variant: "body1",
                                        gutterBottom: true,
                                        children: [
                                            "Description: ",
                                            event.description
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventCard);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;