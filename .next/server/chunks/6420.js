"use strict";
exports.id = 6420;
exports.ids = [6420];
exports.modules = {

/***/ 6420:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8167);
/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Card__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8455);
/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6731);
/* harmony import */ var _mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7986);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_system__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_ButtonBase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2494);
/* harmony import */ var _mui_material_ButtonBase__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ButtonBase__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _hooks_useFetch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3601);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6197);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6216);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1492);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useFetch__WEBPACK_IMPORTED_MODULE_9__, framer_motion__WEBPACK_IMPORTED_MODULE_10__, _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_12__, firebase_firestore__WEBPACK_IMPORTED_MODULE_13__]);
([_hooks_useFetch__WEBPACK_IMPORTED_MODULE_9__, framer_motion__WEBPACK_IMPORTED_MODULE_10__, _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_12__, firebase_firestore__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














const CourseCard = ({ course  })=>{
    const { CourseTitle , InstructorName , CourseDescription , img , fileUrl , rates  } = course;
    const { data: imageUrl  } = (0,_hooks_useFetch__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(`https://firebasestorage.googleapis.com/v0/b/edushare-e9242.appspot.com/o/images%2F${img}?alt=media`);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_11__.useRouter)();
    const [stu, setStu] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        const fetchStudents = async ()=>{
            const studentCollection = (0,_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_12__/* .collection */ .hJ)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_12__.db, "Student");
            const studentSnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_13__.getDocs)(studentCollection);
            const studentList = studentSnapshot.docs.map((doc)=>({
                    id: doc.id,
                    attributes: doc.data()
                }));
            setStu(studentList);
        };
        fetchStudents();
    }, []);
    let userId = _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_12__/* .auth */ .I8?.currentUser?.uid;
    const currentStudentRegisterdCourses = stu.find((s)=>s.id === userId)?.attributes?.registerdcourses;
    let test = currentStudentRegisterdCourses?.includes(course.id);
    console.log(userId);
    console.log(currentStudentRegisterdCourses);
    console.log(test);
    if (!course) {
        return null;
    }
    // Framer Motion animation variants
    const cardVariants = {
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
        hover: {
            scale: 1.05,
            boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.2)"
        }
    };
    let sum = course?.rates?.reduce((accumulator, currentValue)=>{
        return accumulator + currentValue.rating;
    }, 0);
    let average = course?.rates?.length ? sum / course.rates.length : 0;
    average = parseFloat(average.toFixed(2));
    console.log(average);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
        href: router.pathname === "/Student/courses" ? `course/${course.id}` : `Student/course/${course.id}`,
        passHref: true,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_ButtonBase__WEBPACK_IMPORTED_MODULE_8___default()), {
            component: "div",
            sx: {
                textDecoration: "none",
                color: "inherit"
            },
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Card__WEBPACK_IMPORTED_MODULE_2___default()), {
                component: framer_motion__WEBPACK_IMPORTED_MODULE_10__.motion.div,
                initial: "initial",
                animate: "animate",
                whileHover: "hover",
                variants: cardVariants,
                sx: {
                    display: "flex",
                    flexDirection: "column",
                    height: "auto",
                    cursor: "pointer",
                    width: "240px",
                    boxShadow: 2,
                    borderRadius: 2,
                    overflow: "hidden",
                    bgcolor: "#ffffff",
                    // border: test ? "2px solid red" : "none",
                    position: "relative",
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
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_4___default()), {
                        component: "img",
                        height: "200",
                        image: fileUrl,
                        alt: CourseTitle
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_3___default()), {
                        sx: {
                            flex: 1,
                            p: 2
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default()), {
                                gutterBottom: true,
                                variant: "h6",
                                component: "div"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default()), {
                                gutterBottom: true,
                                variant: "h6",
                                component: "div",
                                children: CourseTitle
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default()), {
                                variant: "subtitle2",
                                color: "text.secondary",
                                children: [
                                    "By: ",
                                    InstructorName
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_system__WEBPACK_IMPORTED_MODULE_6__.Box, {
                                mt: 1,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default()), {
                                    variant: "body2",
                                    color: "text.secondary",
                                    component: "div",
                                    children: CourseDescription
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default()), {
                                gutterBottom: true,
                                variant: "body2",
                                color: "text.secondary",
                                children: [
                                    "Rate : ",
                                    average
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CourseCard);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3601:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1492);
/* harmony import */ var _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6216);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_firestore__WEBPACK_IMPORTED_MODULE_1__, _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_2__]);
([firebase_firestore__WEBPACK_IMPORTED_MODULE_1__, _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const useFetch = (path)=>{
    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const fetchData = async ()=>{
            setLoading(true);
            try {
                const querySnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDocs)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_2__.db, path));
                const courses = querySnapshot.docs.map((doc)=>({
                        ...doc.data(),
                        id: doc.id
                    }));
                setData(courses);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };
        fetchData();
    }, [
        path
    ]);
    return {
        data,
        error,
        loading
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useFetch);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;