"use strict";
(() => {
var exports = {};
exports.id = 2491;
exports.ids = [2491];
exports.modules = {

/***/ 7377:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7986);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_system__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3819);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);






const Container = (0,_mui_system__WEBPACK_IMPORTED_MODULE_2__.styled)("div")(({ theme  })=>({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column"
    }));
const Heading = (0,_mui_system__WEBPACK_IMPORTED_MODULE_2__.styled)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()))(({ theme  })=>({
        marginBottom: theme.spacing(2),
        color: theme.palette.text.primary
    }));
const Subheading = (0,_mui_system__WEBPACK_IMPORTED_MODULE_2__.styled)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()))(({ theme  })=>({
        marginBottom: theme.spacing(2),
        color: theme.palette.text.secondary
    }));
const StyledButton = (0,_mui_system__WEBPACK_IMPORTED_MODULE_2__.styled)((_mui_material_Button__WEBPACK_IMPORTED_MODULE_4___default()))(({ theme  })=>({
        marginTop: theme.spacing(2)
    }));
const Pending = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Container, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Heading, {
                variant: "h4",
                children: "Your Request under Processing"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Subheading, {
                variant: "h4",
                children: "Try Again Later"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Subheading, {
                variant: "body1",
                children: "The page you are looking for is pending."
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledButton, {
                variant: "contained",
                color: "primary",
                onClick: ()=>router.push("/"),
                children: "Go Back"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pending);


/***/ }),

/***/ 935:
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
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6197);
/* harmony import */ var react_typewriter_hook__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7945);
/* harmony import */ var react_typewriter_hook__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_typewriter_hook__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_3__]);
framer_motion__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const WebBanner = ()=>{
    const bannerVariants = {
        initial: {
            opacity: 0,
            scale: 1.1
        },
        animate: {
            opacity: 1,
            scale: 1
        },
        exit: {
            opacity: 0,
            scale: 1.1
        }
    };
    const sentences = [
        "Welcome to EduShare",
        "Let's make the education",
        "More Accessible for everyone"
    ];
    const [index, setIndex] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(0);
    const text = react_typewriter_hook__WEBPACK_IMPORTED_MODULE_4___default()(sentences[index], {
        loop: true,
        typingDelay: 1000,
        deleteSpeed: 50
    });
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        const interval = setInterval(()=>{
            setIndex((prevIndex)=>(prevIndex + 1) % sentences.length);
        }, 5000);
        return ()=>clearInterval(interval);
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
        initial: "initial",
        animate: "animate",
        exit: "exit",
        variants: bannerVariants,
        transition: {
            duration: 1
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
            sx: {
                backgroundImage: "url('https://i.ibb.co/Ms7qnYz/Colorful-Shapes-Header-Banner.png')",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                height: "300px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            },
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                variant: "h2",
                textAlign: "center",
                color: "white",
                sx: {
                    color: "#1ABC9C",
                    fontWeight: "800",
                    margin: "0 0 0 -23px",
                    cursor: "pointer"
                },
                children: text
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WebBanner);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1078:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ instructorDashboard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6216);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(401);
/* harmony import */ var _component_Instructors_webBanner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(935);
/* harmony import */ var _component_Instructors_InstNav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7628);
/* harmony import */ var _component_Instructors_InstSidebarr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(780);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1492);
/* harmony import */ var _component_Instructors_Pending__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7377);
/* harmony import */ var _component_Loading___WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7840);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_2__, firebase_auth__WEBPACK_IMPORTED_MODULE_3__, _component_Instructors_webBanner__WEBPACK_IMPORTED_MODULE_4__, _component_Instructors_InstNav__WEBPACK_IMPORTED_MODULE_5__, _component_Instructors_InstSidebarr__WEBPACK_IMPORTED_MODULE_6__, firebase_firestore__WEBPACK_IMPORTED_MODULE_8__]);
([_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_2__, firebase_auth__WEBPACK_IMPORTED_MODULE_3__, _component_Instructors_webBanner__WEBPACK_IMPORTED_MODULE_4__, _component_Instructors_InstNav__WEBPACK_IMPORTED_MODULE_5__, _component_Instructors_InstSidebarr__WEBPACK_IMPORTED_MODULE_6__, firebase_firestore__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













function instructorDashboard() {
    const [competitions, setCompetitions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [students, setStudents] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [coursess, setCoursess] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [showname, setShowName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [statusCheck, setstatusCheck] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const [statusValue, setStatusValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [totalStudents, setTotalStudents] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [instructors, setInstructors] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const [joinedComp, setJoinedCom] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        joinedCompations: []
    });
    const [userId, setUserId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [numCourses, setNumCourses] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [openDialog, setOpenDialog] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [selectedCompation, setSelectedCompation] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const instructorFirstName = instructors.find((s)=>s.id === userId)?.attributes.firstName;
    const instructorLastName = instructors.find((s)=>s.id === userId)?.attributes.lastName;
    const JoindComputionByInst = instructors.find((s)=>s.id === userId)?.attributes.joinedCompations ?? [];
    const handleJoinCompation = (compation)=>{
        setSelectedCompation(compation);
        setOpenDialog(true);
    };
    const handleCloseDialog = ()=>{
        setOpenDialog(false);
    };
    async function fetchCourseData() {
        const instructorCourses = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.getDocs)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.collection)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_2__.db, "Course"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.where)("instructorId", "==", userId)));
        // Update the state with the number of courses
        setNumCourses(instructorCourses.size);
        let totalStudentsCount = 0;
        for (const courseDoc of instructorCourses.docs){
            const courseData = courseDoc.data();
            if (courseData.students) {
                totalStudentsCount += courseData.students.length;
            }
        }
        setTotalStudents(totalStudentsCount);
    }
    const [instructorCourses, setInstructorCourses] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    async function fetchCourseData() {
        const instructorCoursesSnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.getDocs)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.collection)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_2__.db, "Course"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.where)("instructorId", "==", userId)));
        // Update the state with the number of courses
        setNumCourses(instructorCoursesSnapshot.size);
        // Update the state with the list of courses
        const coursesList = instructorCoursesSnapshot.docs.map((doc)=>({
                id: doc.id,
                attributes: doc.data()
            }));
        setInstructorCourses(coursesList);
    // ...
    }
    async function fetchCompetitions() {
        const compationsCollection = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.collection)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_2__.db, "Compations");
        const compationsSnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.getDocs)(compationsCollection);
        const compationsList = compationsSnapshot.docs.map((doc)=>({
                id: doc.id,
                attributes: doc.data()
            }));
        setCompetitions(compationsList);
    }
    async function fetchStudents() {
        const compationsCollection = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.collection)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_2__.db, "Student");
        const compationsSnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.getDocs)(compationsCollection);
        const compationsList = compationsSnapshot.docs.map((doc)=>({
                id: doc.id,
                attributes: doc.data()
            }));
        setStudents(compationsList);
    }
    async function fetchCourses() {
        const compationsCollection = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.collection)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_2__.db, "Course");
        const compationsSnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.getDocs)(compationsCollection);
        const compationsList = compationsSnapshot.docs.map((doc)=>({
                id: doc.id,
                attributes: doc.data()
            }));
        setCoursess(compationsList);
    }
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        fetchCompetitions();
        fetchStudents();
        fetchCourses();
    }, []);
    console.log(students);
    let nameOfCourse = instructors.find((s)=>s.id === userId)?.attributes.myCourse[0]?.coursname[0] //console.log(idOfCourse)
    ;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (nameOfCourse !== undefined) {
            setShowName(true);
        }
    }, [
        nameOfCourse
    ]);
    let courseid = coursess.find((c)=>c.attributes.CourseTitle === nameOfCourse)?.id;
    console.log(courseid);
    let registeredStudents = students.filter((s)=>s.attributes.registerdcourses.includes(courseid));
    let studentNumber = registeredStudents.length;
    console.log(registeredStudents);
    const handleJoinSubmit = async (id, congMessage)=>{
        console.log(id);
        console.log(congMessage);
        if (JoindComputionByInst.includes(id)) {
            alert("you already join this compation");
        //setOpenDialog(true);
        } else {
            setJoinedCom((prevState)=>({
                    ...prevState,
                    //joinedCourses: [...prevState.joinedCourses, id],
                    joinedCompations: prevState.joinedCompations ? [
                        ...prevState.joinedCompations,
                        id
                    ] : [
                        id
                    ]
                }));
            let collectedData = {
                joinedCompations: Array.isArray(joinedComp.joinedCompations) ? [
                    ...joinedComp.joinedCompations,
                    id
                ] : [
                    id
                ]
            };
            let collectedData1 = {
                name: instructorFirstName + "  " + instructorLastName,
                achievementcard: congMessage,
                id: userId
            };
            try {
                const compationCollection = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.doc)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_2__.db, "Instructor", userId);
                await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.updateDoc)(compationCollection, collectedData);
            //router.reload();
            } catch (err) {
                console.log(err);
            }
            try {
                const compationCollection1 = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.collection)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_2__.db, "AchievementCard");
                await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.addDoc)(compationCollection1, collectedData1);
            //router.reload();
            } catch (err1) {
                console.log(err1);
            }
            handleCloseDialog();
        }
    };
    console.log(instructors);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.getAuth)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_2__/* .app */ .l2);
        const unsubscribe = auth.onAuthStateChanged((user)=>{
            if (user) {
                setUserId(user.uid);
            } else {
                setUserId(null);
            }
        });
        return ()=>unsubscribe();
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const fetchInstructors = async ()=>{
            const instructorCollection = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.collection)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_2__.db, "Instructor");
            const instructorSnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.getDocs)(instructorCollection);
            const instructorsList = instructorSnapshot.docs.map((doc)=>({
                    id: doc.id,
                    attributes: doc.data()
                }));
            setInstructors(instructorsList);
            setIsLoading(false);
            instructorsList.forEach((s)=>{
                if (s.id === userId) {
                    if (s.attributes.status === "Active") {
                        setstatusCheck(false);
                        setStatusValue(s.attributes.status);
                    } else {
                        setstatusCheck(true);
                    }
                }
            });
        };
        fetchInstructors();
    }, [
        userId
    ]);
    return isLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Loading___WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: statusCheck ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Instructors_Pending__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {}) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Box, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Instructors_InstNav__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Instructors_webBanner__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Stack, {
                    direction: "row",
                    spacing: 2,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Instructors_InstSidebarr__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Stack, {
                            direction: "column",
                            spacing: 2,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Card, {
                                    sx: {
                                        minWidth: 500,
                                        margin: 2,
                                        height: 170
                                    },
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.CardContent, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {
                                                variant: "h5",
                                                component: "div",
                                                children: "Total Students"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {
                                                variant: "h2",
                                                component: "div",
                                                children: studentNumber
                                            })
                                        ]
                                    })
                                }),
                                showname ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Card, {
                                    sx: {
                                        minWidth: 500,
                                        margin: 2,
                                        height: 170
                                    },
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.CardContent, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {
                                                variant: "h5",
                                                component: "div",
                                                children: "My Course"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {
                                                variant: "h4",
                                                component: "div",
                                                sx: {
                                                    margin: "10px 0 0 0 "
                                                },
                                                children: nameOfCourse
                                            })
                                        ]
                                    })
                                }) : "",
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Grid, {
                                    item: true,
                                    xs: 12,
                                    sm: 6,
                                    md: 6,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {
                                            variant: "h4",
                                            component: "div",
                                            sx: {
                                                marginBottom: 2
                                            },
                                            children: "Competitions"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Grid, {
                                            container: true,
                                            spacing: 2,
                                            children: competitions.map((competition)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Grid, {
                                                    item: true,
                                                    xs: 12,
                                                    sm: 6,
                                                    md: 4,
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Card, {
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.CardContent, {
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {
                                                                        gutterBottom: true,
                                                                        variant: "h7",
                                                                        component: "div",
                                                                        sx: {
                                                                            fontWeight: "1000"
                                                                        },
                                                                        children: [
                                                                            "Competition Type: ",
                                                                            competition.attributes.CompationType
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {
                                                                        gutterBottom: true,
                                                                        variant: "h7",
                                                                        component: "div",
                                                                        sx: {
                                                                            fontWeight: "1000"
                                                                        },
                                                                        children: competition.attributes.CompationQuestion
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.CardActions, {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Button, {
                                                                    size: "small",
                                                                    onClick: ()=>handleJoinCompation(competition),
                                                                    children: "Join This Competition"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                }, competition.id))
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Dialog, {
                                    open: openDialog,
                                    onClose: handleCloseDialog,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.DialogTitle, {
                                            children: "Join Competition"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.DialogContent, {
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {
                                                    gutterBottom: true,
                                                    variant: "h7",
                                                    component: "div",
                                                    sx: {
                                                        fontWeight: "700"
                                                    },
                                                    children: [
                                                        "Competition Type: ",
                                                        selectedCompation?.attributes?.CompationType
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {
                                                    gutterBottom: true,
                                                    variant: "h7",
                                                    component: "div",
                                                    sx: {
                                                        fontWeight: "700"
                                                    },
                                                    children: [
                                                        "Question: ",
                                                        selectedCompation?.attributes?.CompationQuestion
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.DialogActions, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Button, {
                                                    onClick: handleCloseDialog,
                                                    children: "No"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Button, {
                                                    onClick: ()=>handleJoinSubmit(selectedCompation?.id, selectedCompation?.attributes.AchivmentCard),
                                                    variant: "contained",
                                                    color: "primary",
                                                    children: "Yes"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}

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

/***/ 3819:
/***/ ((module) => {

module.exports = require("@mui/material/Button");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [6216,7840,8083], () => (__webpack_exec__(1078)));
module.exports = __webpack_exports__;

})();