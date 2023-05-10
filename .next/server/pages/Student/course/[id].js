"use strict";
(() => {
var exports = {};
exports.id = 7752;
exports.ids = [7752];
exports.modules = {

/***/ 8359:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
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
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1492);
/* harmony import */ var _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6216);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(401);
/* harmony import */ var _component_Loading___WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7840);
/* harmony import */ var _mui_icons_material_Star__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7849);
/* harmony import */ var _mui_icons_material_Star__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Star__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_icons_material_StarBorder__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5327);
/* harmony import */ var _mui_icons_material_StarBorder__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_StarBorder__WEBPACK_IMPORTED_MODULE_11__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_component_Student_StuNav__WEBPACK_IMPORTED_MODULE_4__, _component_Student_StuSideBar__WEBPACK_IMPORTED_MODULE_5__, firebase_firestore__WEBPACK_IMPORTED_MODULE_6__, _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_7__, firebase_auth__WEBPACK_IMPORTED_MODULE_8__]);
([_component_Student_StuNav__WEBPACK_IMPORTED_MODULE_4__, _component_Student_StuSideBar__WEBPACK_IMPORTED_MODULE_5__, firebase_firestore__WEBPACK_IMPORTED_MODULE_6__, _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_7__, firebase_auth__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










 // Import Loading component


const CoursePage = ({ course  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    if (router.isFallback) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            children: "Loading..."
        });
    }
    const [rating, setRating] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [enrollButtonDisabled, setEnrollButtonDisabled] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const [showReg, setShowReg] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const [israted, setIsRated] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const [students, setStudents] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);
    const [courses, setCourses] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);
    const [showRating, setShowRating] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const [loading, setLoading] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(true);
    const [userId, setUserId] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(null);
    const [instructors, setInstructors] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);
    const [enrolledCourse, setEnrolledCourse] = react__WEBPACK_IMPORTED_MODULE_1___default().useState({
        registerdcourses: []
    });
    const [instructorCourses, setInstructorCourses] = react__WEBPACK_IMPORTED_MODULE_1___default().useState({
        myCourse: []
    });
    const [courseRating, setCourseRating] = react__WEBPACK_IMPORTED_MODULE_1___default().useState({
        rates: course.rates
    });
    // console.log("course id", course.fileUrl)
    // console.log("user id", userId)
    // console.log("state", enrolledCourse)
    // console.log("students data", students)
    // console.log("Instructors data", instructors)
    // console.log("instructorCourses", instructorCourses)
    const currentStudentRegisterdCourses = students.find((s)=>s.id === userId)?.attributes?.registerdcourses;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const timer = setTimeout(()=>{
            setShowRating(false);
        }, 5000);
        return ()=>clearTimeout(timer);
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_8__.getAuth)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_7__/* .app */ .l2);
        const unsubscribe = auth.onAuthStateChanged((user)=>{
            if (user) {
                setUserId(user.uid);
                setEnrolledCourse({
                    registerdcourses: currentStudentRegisterdCourses || []
                });
            } else {
                setUserId(null);
            }
        });
        return ()=>unsubscribe();
    }, [
        students
    ]);
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        const fetchStudents = async ()=>{
            const studentCollection = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.collection)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_7__.db, "Student");
            const studentSnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.getDocs)(studentCollection);
            const studentList = studentSnapshot.docs.map((doc)=>({
                    id: doc.id,
                    attributes: doc.data()
                }));
            setStudents(studentList);
            setLoading(false);
        };
        const fetchCourses = async ()=>{
            const studentCollection = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.collection)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_7__.db, "Course");
            const studentSnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.getDocs)(studentCollection);
            const studentList = studentSnapshot.docs.map((doc)=>({
                    id: doc.id,
                    attributes: doc.data()
                }));
            setCourses(studentList);
            setLoading(false);
        };
        const fetchInstructors = async ()=>{
            const instructorCollection = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.collection)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_7__.db, "Instructor");
            const instructorSnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.getDocs)(instructorCollection);
            const instructorsList = instructorSnapshot.docs.map((doc)=>({
                    id: doc.id,
                    attributes: doc.data()
                }));
            setInstructors(instructorsList);
            setLoading(false);
        };
        fetchCourses();
        fetchStudents();
        fetchInstructors();
        setTimeout(()=>{
            setLoading(false);
        }, 5000); // Set timeout to 5 seconds
    }, []);
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        if (currentStudentRegisterdCourses) {
            let test = currentStudentRegisterdCourses?.includes(course.id);
            console.log(test);
            setShowReg(test);
        }
    }, [
        course.id,
        currentStudentRegisterdCourses
    ]);
    if (loading) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Loading___WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {}); // Render Loading component
    }
    ;
    async function handelAddCourse(id, courseName, instructorNameOfCourse) {
        // console.log(id);
        // console.log(courseName);
        // console.log(instructorNameOfCourse);
        let isReg = currentStudentRegisterdCourses?.includes(id);
        if (isReg) {
            alert("You are already registerd in this course ");
        } else {
            setEnrollButtonDisabled(true);
            const InstructorId = instructors.find((s)=>s.attributes.firstName === instructorNameOfCourse)?.id;
            console.log("check me", InstructorId);
            setEnrolledCourse((prevState)=>({
                    ...prevState,
                    registerdcourses: prevState.registerdcourses ? [
                        ...prevState.registerdcourses,
                        id
                    ] : [
                        id
                    ]
                }));
            const courseObj = {
                [courseName]: [
                    userId
                ]
            };
            setInstructorCourses((prevState)=>({
                    ...prevState,
                    myCourse: [
                        ...prevState.myCourse,
                        courseObj
                    ]
                }));
            let collectedData = {
                registerdcourses: Array.isArray(enrolledCourse.registerdcourses) ? [
                    ...enrolledCourse.registerdcourses,
                    id
                ] : [
                    id
                ]
            };
            let collectedData1 = {
                myCourse: [
                    ...instructorCourses.myCourse,
                    {
                        coursname: [
                            courseName
                        ],
                        studentsId: [
                            userId
                        ]
                    }
                ]
            };
            try {
                if (userId) {
                    const studentRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.doc)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_7__.db, "Student", userId);
                    await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.updateDoc)(studentRef, collectedData);
                }
            } catch (err) {
                console.log(err);
            }
            try {
                if (userId) {
                    const instructorRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.doc)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_7__.db, "Instructor", InstructorId);
                    await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.updateDoc)(instructorRef, collectedData1);
                }
            } catch (err1) {
                console.log(err1);
            }
            router.push("/Student");
        }
    }
    // console.log('my courses state', instructorCourses)
    console.log(courseRating);
    const ratedCourses = courses.find((c)=>c.id === course.id)?.attributes?.rates?.some((obj)=>obj?.id === userId);
    const handleRatingChange = async (event, newValue)=>{
        if (ratedCourses) {
            return;
        } else {
            setRating(newValue);
            setIsRated(true);
            console.log(ratedCourses);
            setCourseRating((prevState)=>({
                    ...prevState,
                    rates: prevState.rates ? [
                        ...prevState.rates,
                        newValue
                    ] : [
                        newValue
                    ]
                }));
            let collectedData = {
                rates: Array.isArray(courseRating.rates) ? [
                    ...courseRating.rates,
                    {
                        id: userId,
                        rating: newValue
                    }
                ] : [
                    {
                        id: userId,
                        rating: newValue
                    }
                ]
            };
            try {
                if (userId) {
                    const studentRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.doc)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_7__.db, "Course", course.id);
                    await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.updateDoc)(studentRef, collectedData);
                }
            } catch (err) {
                console.log(err);
            }
        }
        router.reload();
    };
    console.log(rating);
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
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.CardMedia, {
                                        component: "img",
                                        height: "200",
                                        image: course.fileUrl || "https://via.placeholder.com/900x200",
                                        alt: course.CourseTitle
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                        variant: "h4",
                                        gutterBottom: true,
                                        children: course.CourseTitle
                                    }),
                                    ratedCourses ? showRating && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                        variant: "h6",
                                        gutterBottom: true,
                                        sx: {
                                            color: "green",
                                            fontWeight: "900"
                                        },
                                        children: "Thanks for Rating the Course !"
                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Rating, {
                                        name: "star-rating",
                                        value: rating,
                                        onChange: handleRatingChange,
                                        emptyIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_StarBorder__WEBPACK_IMPORTED_MODULE_11___default()), {
                                            fontSize: "inherit"
                                        }),
                                        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Star__WEBPACK_IMPORTED_MODULE_10___default()), {
                                            fontSize: "inherit"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                        variant: "h6",
                                        gutterBottom: true,
                                        children: [
                                            "Instructor: ",
                                            course.InstructorName
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                        variant: "body1",
                                        gutterBottom: true,
                                        children: course.CourseDescription
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                        mt: 3,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {
                                            variant: "contained",
                                            sx: {
                                                backgroundColor: "#1ABC9C",
                                                marginRight: 2
                                            },
                                            onClick: ()=>handelAddCourse(course.id, course.CourseTitle, course.InstructorName),
                                            disabled: showReg,
                                            children: showReg ? "Registerd" : "ENROLL"
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    });
};
async function getServerSideProps({ params  }) {
    const courseId = params.id;
    const courseRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.doc)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_7__.db, "Course", courseId);
    const courseSnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.getDoc)(courseRef);
    if (!courseSnapshot.exists()) {
        return {
            notFound: true
        };
    }
    const course = {
        id: courseSnapshot.id,
        ...courseSnapshot.data()
    };
    return {
        props: {
            course
        }
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CoursePage);

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

/***/ 7849:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Star");

/***/ }),

/***/ 5327:
/***/ ((module) => {

module.exports = require("@mui/icons-material/StarBorder");

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
var __webpack_exports__ = __webpack_require__.X(0, [6216,7840,5638], () => (__webpack_exec__(8359)));
module.exports = __webpack_exports__;

})();