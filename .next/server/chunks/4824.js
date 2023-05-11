"use strict";
exports.id = 4824;
exports.ids = [4824];
exports.modules = {

/***/ 4824:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ DropCourse)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_AuthProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5242);
/* harmony import */ var _MycoursesCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6597);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1492);
/* harmony import */ var _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6216);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(401);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_MycoursesCard__WEBPACK_IMPORTED_MODULE_4__, firebase_firestore__WEBPACK_IMPORTED_MODULE_5__, _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_6__, firebase_auth__WEBPACK_IMPORTED_MODULE_7__]);
([_MycoursesCard__WEBPACK_IMPORTED_MODULE_4__, firebase_firestore__WEBPACK_IMPORTED_MODULE_5__, _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_6__, firebase_auth__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










function DropCourse() {
    const [courses, setCourses] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [students, setStudents] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    let userId = _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_6__/* .auth */ .I8?.currentUser?.uid;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const fetchStudents = async ()=>{
            const studentCollection = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.collection)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_6__.db, "Student");
            const studentSnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.getDocs)(studentCollection);
            const studentList = studentSnapshot.docs.map((doc)=>({
                    id: doc.id,
                    attributes: doc.data()
                }));
            setStudents(studentList);
        };
        fetchStudents();
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const fetchCourses = async ()=>{
            const coursesCollection = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.collection)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_6__.db, "Course");
            const courseSnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.getDocs)(coursesCollection);
            const coursesList = courseSnapshot.docs.map((doc)=>({
                    id: doc.id,
                    attributes: doc.data()
                }));
            setCourses(coursesList);
        };
        fetchCourses();
    }, []);
    const currentStudent = students.find((s)=>s.id === userId)?.attributes.registerdcourses;
    console.log(currentStudent);
    const registeredCoursesByStudent = courses.filter((s)=>currentStudent && currentStudent.includes(s.id));
    console.log(registeredCoursesByStudent);
    console.log(userId);
    console.log(students);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: registeredCoursesByStudent?.map((s)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                sx: {
                    display: "flex",
                    flexDirection: "row",
                    margin: "10px 700px 0 0",
                    cursor: "pointer",
                    alignItems: "center"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MycoursesCard__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    courseTitle: s.attributes.CourseTitle,
                    InstName: s.attributes.InstructorName,
                    id: s.id,
                    userid: userId
                })
            }, s.id))
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6597:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ MycoursesCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8167);
/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Card__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_CardActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3691);
/* harmony import */ var _mui_material_CardActions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CardActions__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8455);
/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3819);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(401);
/* harmony import */ var _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6216);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1492);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_11__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_auth__WEBPACK_IMPORTED_MODULE_7__, _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_8__, firebase_firestore__WEBPACK_IMPORTED_MODULE_9__]);
([firebase_auth__WEBPACK_IMPORTED_MODULE_7__, _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_8__, firebase_firestore__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












function MycoursesCard({ courseTitle , InstName , id , userid  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_10__.useRouter)();
    const [students, setStudents] = react__WEBPACK_IMPORTED_MODULE_1__.useState([]);
    //const [userId, setUserId] = React.useState(null);
    const [currentCourses, setCurrentCourses] = react__WEBPACK_IMPORTED_MODULE_1__.useState();
    //const currentStudent = students.find(s => s.id === userId)?.attributes.registerdcourses
    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>{
        const fetchStudents = async ()=>{
            const studentCollection = (0,_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_8__/* .collection */ .hJ)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_8__.db, "Student");
            const studentSnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_9__.getDocs)(studentCollection);
            const studentList = studentSnapshot.docs.map((doc)=>({
                    id: doc.id,
                    attributes: doc.data()
                }));
            setStudents(studentList);
            ;
        };
        fetchStudents();
    }, [
        userid
    ]);
    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>{
        if (students.length > 0 && userid) {
            const currentStudent = students.find((s)=>s.id === userid)?.attributes.registerdcourses;
            if (currentStudent) {
                setCurrentCourses(currentStudent);
            }
        }
    }, [
        students,
        userid
    ]);
    console.log(userid);
    async function handelDrop(id) {
        if (confirm("Are you sure you want to continue?")) {
            try {
                const index = currentCourses.findIndex((course)=>course === id);
                if (index !== -1) {
                    const updatedCourses = [
                        ...currentCourses
                    ];
                    updatedCourses.splice(index, 1);
                    setCurrentCourses(updatedCourses);
                    try {
                        if (userid) {
                            const studentRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_9__.doc)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_8__.db, "Student", userid);
                            await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_9__.updateDoc)(studentRef, {
                                registerdcourses: updatedCourses
                            });
                        }
                    } catch (err) {
                        console.log(err);
                    }
                    if (!userid) {
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: "Loading..."
                        });
                    }
                    console.log("Course dropped successfully");
                    router.reload();
                }
            } catch (error) {
                console.error("Failed to drop course:", error);
            }
        } else {
            return;
        }
    }
    function handelRoute(id, name) {
        router.push({
            pathname: "/Student/coursePage",
            query: {
                myParam: name
            }
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.TableContainer, {
            component: _mui_material__WEBPACK_IMPORTED_MODULE_11__.Paper,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Table, {
                sx: {
                    minWidth: 1000,
                    margin: "5px 0 0 0px "
                },
                "aria-label": "simple table",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.TableHead, {
                        sx: {
                            backgroundColor: "#1ABC9C"
                        },
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_11__.TableRow, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.TableCell, {
                                    sx: {
                                        color: "white"
                                    },
                                    children: "    Course Name"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.TableCell, {
                                    align: "right",
                                    sx: {
                                        color: "white"
                                    },
                                    children: " Instructor Name"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.TableCell, {
                                    align: "center",
                                    sx: {
                                        color: "white"
                                    },
                                    children: "Drop course"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.TableCell, {
                                    align: "center",
                                    sx: {
                                        color: "white"
                                    },
                                    children: "Course Page"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.TableBody, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_11__.TableRow, {
                            sx: {
                                "&:last-child td, &:last-child th": {
                                    border: 0
                                }
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.TableCell, {
                                    component: "th",
                                    scope: "row",
                                    children: courseTitle
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.TableCell, {
                                    align: "right",
                                    children: InstName
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.TableCell, {
                                    align: "center",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_5___default()), {
                                        size: "small",
                                        sx: {
                                            backgroundColor: "#1ABC9C",
                                            color: "white",
                                            margin: "0 0 10px 0",
                                            border: "1px solid",
                                            "&:hover": {
                                                backgroundColor: "#1ABC9C"
                                            }
                                        },
                                        onClick: ()=>handelDrop(id),
                                        children: "Drop course"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.TableCell, {
                                    align: "center",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_5___default()), {
                                        size: "small",
                                        sx: {
                                            backgroundColor: "#1ABC9C",
                                            color: "white",
                                            margin: "0 0 10px 0",
                                            border: "1px solid",
                                            "&:hover": {
                                                backgroundColor: "#1ABC9C"
                                            }
                                        },
                                        onClick: ()=>handelRoute(id, courseTitle),
                                        children: "Course Page"
                                    })
                                })
                            ]
                        }, id)
                    })
                ]
            })
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

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


/***/ })

};
;