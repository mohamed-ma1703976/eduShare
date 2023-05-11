exports.id = 5370;
exports.ids = [5370];
exports.modules = {

/***/ 6465:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ AchievementCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8167);
/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Card__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_CardActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3691);
/* harmony import */ var _mui_material_CardActions__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CardActions__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8455);
/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3819);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_Icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3843);
/* harmony import */ var _mui_material_Icon__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Icon__WEBPACK_IMPORTED_MODULE_8__);









function AchievementCard({ icon , number , description , color  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default()), {
        sx: {
            minWidth: 100
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Card__WEBPACK_IMPORTED_MODULE_3___default()), {
            variant: "outlined",
            style: {
                backgroundColor: color,
                marginLeft: "40px"
            },
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_5___default()), {
                color: "white",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Icon__WEBPACK_IMPORTED_MODULE_8___default()), {
                        children: icon
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7___default()), {
                        variant: "h5",
                        component: "div",
                        color: "white",
                        children: number
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7___default()), {
                        sx: {
                            mb: 1.5
                        },
                        color: "white",
                        children: description
                    })
                ]
            })
        })
    });
}


/***/ }),

/***/ 4667:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CreateAdminForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(401);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1492);
/* harmony import */ var _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6216);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_auth__WEBPACK_IMPORTED_MODULE_4__, firebase_firestore__WEBPACK_IMPORTED_MODULE_5__, _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_6__]);
([firebase_auth__WEBPACK_IMPORTED_MODULE_4__, firebase_firestore__WEBPACK_IMPORTED_MODULE_5__, _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







function CreateAdminForm({ setOpenn  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const [signUpData, setSignUpData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        phone: ""
    });
    function handleChange(event) {
        setSignUpData((prev)=>{
            return {
                ...prev,
                [event.target.name]: event.target.value
            };
        });
    }
    async function handleSignUp(e) {
        e.preventDefault();
        const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.getAuth)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_6__/* .app */ .l2);
        if (signUpData.firstName === "" || signUpData.lastName === "" || signUpData.email === "" || signUpData.phone === "") {
            alert("All Field Are Required");
        } else if (signUpData.password.length < 6) {
            alert("Password should be at least 6 Digits");
        }
        let collectedData = {
            firstName: signUpData.firstName,
            lastName: signUpData.lastName,
            email: signUpData.email,
            phone: signUpData.phone
        };
        try {
            const userCredential = await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.createUserWithEmailAndPassword)(auth, signUpData.email, signUpData.password);
            const user = userCredential.user;
            const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.getFirestore)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_6__/* .app */ .l2);
            const docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.doc)(db, "Admin", user.uid);
            await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.setDoc)(docRef, collectedData);
            router.reload();
        } catch (error) {
            console.error("Error signing up:", error);
        }
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
        onSubmit: handleSignUp,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {
            direction: "column",
            gap: 2,
            sx: {
                margin: "10px"
            },
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                    direction: "row",
                    gap: 2,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.TextField, {
                            id: "outlined-basic",
                            label: "First Name",
                            variant: "outlined",
                            name: "firstName",
                            onChange: handleChange,
                            sx: {
                                flexGrow: 1
                            }
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.TextField, {
                            id: "outlined-basic",
                            label: "Last Name",
                            variant: "outlined",
                            name: "lastName",
                            onChange: handleChange,
                            sx: {
                                flexGrow: 1
                            }
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                    direction: "row",
                    gap: 2,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.TextField, {
                            id: "outlined-basic",
                            label: "Phone Number",
                            variant: "outlined",
                            name: "phone",
                            onChange: handleChange,
                            sx: {
                                flexGrow: 1
                            }
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.TextField, {
                            id: "outlined-basic",
                            label: "Enter Email",
                            variant: "outlined",
                            name: "email",
                            onChange: handleChange,
                            sx: {
                                flexGrow: 1
                            }
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                    direction: "row",
                    gap: 2,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.TextField, {
                        id: "outlined-basic",
                        label: "Enter Password",
                        variant: "outlined",
                        name: "password",
                        onChange: handleChange,
                        sx: {
                            flexGrow: 1
                        }
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Toolbar, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {
                            sx: {
                                backgroundColor: "#00adb5",
                                height: 45,
                                fontSize: 22,
                                fontWeight: "bold",
                                margin: "10px 200px 10px 0 ",
                                width: "60%"
                            },
                            variant: "contained",
                            type: "submit",
                            onClick: handleSignUp,
                            children: "Register"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {
                            variant: "contained",
                            onClick: ()=>setOpenn(false),
                            sx: {
                                backgroundColor: "#00adb5",
                                height: 45,
                                fontSize: 22,
                                fontWeight: "bold",
                                margin: "10px 0",
                                width: "60%",
                                color: "white"
                            },
                            children: "cancel"
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

/***/ 3421:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8119);
/* harmony import */ var _Admin_CreateAdminForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4667);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Form__WEBPACK_IMPORTED_MODULE_3__, _Admin_CreateAdminForm__WEBPACK_IMPORTED_MODULE_4__]);
([_Form__WEBPACK_IMPORTED_MODULE_3__, _Admin_CreateAdminForm__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const Transition = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef(function Transition(props, ref) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Slide, {
        direction: "up",
        ref: ref,
        ...props
    });
});
const AnnounceDialog = ()=>{
    const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const handleClickOpen = ()=>{
        setOpen(true);
    };
    const handleClose = ()=>{
        setOpen(false);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                align: "center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {
                    variant: "contained",
                    size: "large",
                    style: {
                        marginleft: "10px",
                        borderRadius: 15,
                        backgroundColor: "#374557",
                        padding: "6px 20px",
                        fontSize: "18px"
                    },
                    onClick: handleClickOpen,
                    children: "Create Admin"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Dialog, {
                open: open,
                TransitionComponent: Transition,
                keepMounted: true,
                onClose: handleClose,
                "aria-describedby": "alert-dialog-slide-description",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.DialogTitle, {
                        sx: {
                            fontSize: "30px",
                            textAlign: "center",
                            fontWeight: "00",
                            color: "#374557"
                        },
                        children: "Create Admin"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.DialogContent, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Admin_CreateAdminForm__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            setOpenn: setOpen
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AnnounceDialog);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5370:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _CourseDialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8542);
/* harmony import */ var _EventDialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3905);
/* harmony import */ var _AnnounceDialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3421);
/* harmony import */ var react_calendar_dist_Calendar_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8434);
/* harmony import */ var react_calendar_dist_Calendar_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_calendar_dist_Calendar_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _AchievementCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6465);
/* harmony import */ var _TodoList_TodoList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9435);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1492);
/* harmony import */ var _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6216);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_CourseDialog__WEBPACK_IMPORTED_MODULE_3__, _EventDialog__WEBPACK_IMPORTED_MODULE_4__, _AnnounceDialog__WEBPACK_IMPORTED_MODULE_5__, firebase_firestore__WEBPACK_IMPORTED_MODULE_9__, _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_10__]);
([_CourseDialog__WEBPACK_IMPORTED_MODULE_3__, _EventDialog__WEBPACK_IMPORTED_MODULE_4__, _AnnounceDialog__WEBPACK_IMPORTED_MODULE_5__, firebase_firestore__WEBPACK_IMPORTED_MODULE_9__, _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











function Card() {
    const [courses, setCourses] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);
    const [compat, setCompat] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);
    const [admin, setAdmin] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        const fetchCourses = async ()=>{
            const coursesCollection = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_9__.collection)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_10__.db, "Course");
            const courseSnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_9__.getDocs)(coursesCollection);
            const coursesList = courseSnapshot.docs.map((doc)=>({
                    id: doc.id,
                    ...doc.data()
                }));
            setCourses(coursesList);
        };
        const fetchad = async ()=>{
            const coursesCollection = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_9__.collection)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_10__.db, "Admin");
            const courseSnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_9__.getDocs)(coursesCollection);
            const coursesList = courseSnapshot.docs.map((doc)=>({
                    id: doc.id,
                    ...doc.data()
                }));
            setAdmin(coursesList);
        };
        const fetchCompa = async ()=>{
            const coursesCollection = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_9__.collection)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_10__.db, "Compations");
            const courseSnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_9__.getDocs)(coursesCollection);
            const coursesList = courseSnapshot.docs.map((doc)=>({
                    id: doc.id,
                    ...doc.data()
                }));
            setCompat(coursesList);
        };
        fetchCourses();
        fetchCompa();
        fetchad();
    }, []);
    // const numberOfCourses = courses;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
        sx: {
            m: 2
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
            container: true,
            spacing: 2,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                    item: true,
                    xs: 12,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                        container: true,
                        justifyContent: "space-around",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CourseDialog__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_EventDialog__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AnnounceDialog__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                    item: true,
                    xs: 12,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                        container: true,
                        justifyContent: "space-around",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                                item: true,
                                xs: 12,
                                sm: 6,
                                md: 4,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AchievementCard__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                    number: courses.length,
                                    description: "Completed Courses",
                                    color: "#1ABC9C"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                                item: true,
                                xs: 12,
                                sm: 6,
                                md: 4,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AchievementCard__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                    number: compat.length,
                                    description: "Published Competitions",
                                    color: "#FEC64F"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                                item: true,
                                xs: 12,
                                sm: 6,
                                md: 4,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AchievementCard__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                    number: admin.length,
                                    description: "Numbers Of Admins",
                                    color: "#374557"
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                    item: true,
                    xs: 12,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                        container: true,
                        justifyContent: "center",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TodoList_TodoList__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {})
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8542:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8119);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Form__WEBPACK_IMPORTED_MODULE_3__]);
_Form__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const Transition = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef(function Transition(props, ref) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Slide, {
        direction: "up",
        ref: ref,
        ...props
    });
});
const CourseDialog = ()=>{
    const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const handleClickOpen = ()=>{
        setOpen(true);
    };
    const handleClose = ()=>{
        setOpen(false);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                align: "center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {
                    variant: "contained",
                    size: "large",
                    style: {
                        marginleft: "10px",
                        borderRadius: 15,
                        backgroundColor: "#1ABC9C",
                        padding: "6px 55px",
                        fontSize: "18px"
                    },
                    onClick: handleClickOpen,
                    children: "Add Course"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Dialog, {
                open: open,
                TransitionComponent: Transition,
                keepMounted: true,
                onClose: handleClose,
                "aria-describedby": "alert-dialog-slide-description",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.DialogTitle, {
                        sx: {
                            fontSize: "30px",
                            textAlign: "center",
                            fontWeight: "750",
                            color: "#1ABC9C"
                        },
                        children: "Add Course"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.DialogContent, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Form__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            setOpen: setOpen
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CourseDialog);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3905:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8119);
/* harmony import */ var _Instructors_CompationFormm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9592);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Form__WEBPACK_IMPORTED_MODULE_3__, _Instructors_CompationFormm__WEBPACK_IMPORTED_MODULE_4__]);
([_Form__WEBPACK_IMPORTED_MODULE_3__, _Instructors_CompationFormm__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const Transition = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef(function Transition(props, ref) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Slide, {
        direction: "up",
        ref: ref,
        ...props
    });
});
const EventDialog = ()=>{
    const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const handleClickOpen = ()=>{
        setOpen(true);
    };
    const handleClose = ()=>{
        setOpen(false);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                align: "center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {
                    variant: "contained",
                    size: "large",
                    style: {
                        borderRadius: 15,
                        backgroundColor: "#FEC64F",
                        padding: "6px 20px",
                        fontSize: "18px",
                        margin: "0 0 0 5px"
                    },
                    onClick: handleClickOpen,
                    children: "Create Competion"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Dialog, {
                open: open,
                TransitionComponent: Transition,
                keepMounted: true,
                onClose: handleClose,
                "aria-describedby": "alert-dialog-slide-description",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.DialogTitle, {
                        sx: {
                            fontSize: "30px",
                            textAlign: "center",
                            fontWeight: "00",
                            color: "#FEC64F"
                        },
                        children: " Create Competion"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.DialogContent, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Instructors_CompationFormm__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            setOpen: setOpen
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventDialog);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8119:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7986);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_system__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6216);
/* harmony import */ var _mui_icons_material_LibraryAddCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4387);
/* harmony import */ var _mui_icons_material_LibraryAddCheck__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_LibraryAddCheck__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1492);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3392);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_3__, firebase_firestore__WEBPACK_IMPORTED_MODULE_7__, firebase_storage__WEBPACK_IMPORTED_MODULE_8__]);
([_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_3__, firebase_firestore__WEBPACK_IMPORTED_MODULE_7__, firebase_storage__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



 // Import the helper function






const Form = ({ setOpen  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    const currentDate = (0,_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_3__/* .getFirestoreTimestamp */ .Kg)(); // Get the current date using the helper function
    const [uploadImg, setUploadImg] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)({
        files: []
    });
    const [isSelected, setIsSelected] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
    const [isSelectedd, setIsSelectedd] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)("");
    const [instructors, setInstructors] = react__WEBPACK_IMPORTED_MODULE_5___default().useState([]);
    const [fileList, setFileList] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);
    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)({
        creatingDate: currentDate,
        CourseTitle: "",
        InstructorName: "",
        CourseDescription: "",
        SessionType: "",
        img: "",
        fileUrl: ""
    });
    console.log(formData);
    react__WEBPACK_IMPORTED_MODULE_5___default().useEffect(()=>{
        const fetchInstructors = async ()=>{
            const instructorCollection = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.collection)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_3__.db, "Instructor");
            const instructorSnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.getDocs)(instructorCollection);
            const instructorsList = instructorSnapshot.docs.map((doc)=>({
                    id: doc.id,
                    attributes: doc.data()
                }));
            const courseCollection = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.collection)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_3__.db, "Course");
            const courseSnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.getDocs)(courseCollection);
            const courseList = courseSnapshot.docs.map((doc)=>doc.data().InstructorName);
            const filteredInstructorsList = instructorsList.filter((instructor)=>{
                return !courseList.includes(instructor.attributes.firstName);
            });
            setInstructors(filteredInstructorsList);
        };
        fetchInstructors();
    }, []);
    console.log(instructors);
    console.log(formData);
    const handleChange = async (event)=>{
        setFormData((pre)=>{
            return {
                ...pre,
                [event.target.name]: event.target.value
            };
        });
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (formData.CourseDescription || formData.CourseTitle || formData.InstructorName || formData.fileUrl === "") {
            alert("All Fields Are Required");
        }
        let collectedData = {
            CourseDescription: formData.CourseDescription,
            CourseTitle: formData.CourseTitle,
            InstructorName: formData.InstructorName,
            fileUrl: fileList[0],
            rates: []
        };
        try {
            const coursesCollection = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.collection)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_3__.db, "Course");
            await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.addDoc)(coursesCollection, collectedData);
            router.reload();
        } catch (err) {
            console.log(err);
        }
    };
    console.log(uploadImg);
    console.log(formData);
    const handleFileUpload = async (event)=>{
        const file = event.target.files[0];
        setIsSelectedd(file.name);
        const storageRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_8__.ref)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_3__/* .storage */ .tO, `Courses/${file.name}`);
        (0,firebase_storage__WEBPACK_IMPORTED_MODULE_8__.uploadBytes)(storageRef, file).then((snapshot)=>{
            (0,firebase_storage__WEBPACK_IMPORTED_MODULE_8__.getDownloadURL)(snapshot.ref).then((url)=>{
                setFileList((pre)=>[
                        url
                    ]);
            });
        });
    };
    console.log(fileList);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
        onSubmit: handleSubmit,
        style: {
            margin: "10px 10px 10px 10px"
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.TextField, {
                id: "outlined-error-helper-text",
                label: "Course Title",
                sx: {
                    margin: "10px 10px 10px 10px",
                    width: "100%"
                },
                name: "CourseTitle",
                onChange: handleChange,
                value: formData.CourseTitle
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.FormControl, {
                fullWidth: true,
                variant: "outlined",
                style: {
                    width: "100%",
                    margin: "10px 10px 10px 10px"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.InputLabel, {
                        htmlFor: "student-select",
                        children: "Instructor Name"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Select, {
                        labelId: "student-select",
                        name: "InstructorName",
                        label: "Instructor Name",
                        value: formData.InstructorName,
                        onChange: handleChange,
                        children: instructors.map((instructor)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.MenuItem, {
                                value: instructor.attributes.firstName,
                                children: instructor.attributes.firstName
                            }, instructor.id))
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.TextField, {
                id: "outlined-multiline-static",
                label: "Course Description",
                multiline: true,
                rows: 4,
                sx: {
                    margin: "10px 10px 10px 10px",
                    width: "100%"
                },
                name: "CourseDescription",
                onChange: handleChange,
                value: formData.CourseDescription
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                type: "file",
                onChange: handleFileUpload,
                style: {
                    margin: " 0 0 0 5px",
                    width: "100%",
                    height: "50%",
                    // border: "1px solid gray",
                    padding: "5px" // Add border
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                style: {
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    margin: "10px 0 0 10px "
                },
                children: [
                    isSelected ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_LibraryAddCheck__WEBPACK_IMPORTED_MODULE_4___default()), {
                        sx: {
                            color: "#1ABC9C"
                        }
                    }) : "",
                    isSelected ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        style: {
                            color: "#B2BABB",
                            fontWeight: "500"
                        },
                        children: "File Selected"
                    }) : ""
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                style: {
                    display: "flex"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Button, {
                        variant: "outlined",
                        sx: {
                            margin: "10px 0 0 10px"
                        },
                        type: "submit",
                        children: "Save"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Button, {
                        variant: "outlined",
                        sx: {
                            margin: "10px 0 0 340px",
                            width: "13%"
                        },
                        onClick: ()=>setOpen(false),
                        children: "cancel"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Form);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9592:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6216);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1492);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_3__, firebase_firestore__WEBPACK_IMPORTED_MODULE_5__]);
([_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_3__, firebase_firestore__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



 // Import the helper function



const CompationForm = ({ setOpen  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const [instructors, setInstructors] = react__WEBPACK_IMPORTED_MODULE_2___default().useState([]);
    const currentDate = (0,_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_3__/* .getFirestoreTimestamp */ .Kg)(); // Get the current date using the helper function
    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        CompationType: "",
        CompationQuestion: "",
        AchivmentCard: "",
        creatingDate: currentDate
    });
    react__WEBPACK_IMPORTED_MODULE_2___default().useEffect(()=>{
        const fetchInstructors = async ()=>{
            const instructorCollection = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.collection)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_3__.db, "Instructor");
            const instructorSnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.getDocs)(instructorCollection);
            const instructorsList = instructorSnapshot.docs.map((doc)=>({
                    id: doc.id,
                    attributes: doc.data()
                }));
            setInstructors(instructorsList);
        };
        fetchInstructors();
    }, []);
    console.log(instructors);
    console.log(formData);
    const handleChange = async (event)=>{
        setFormData((pre)=>{
            return {
                ...pre,
                [event.target.name]: event.target.value
            };
        });
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        let collectedData = {
            CompationType: formData.CompationType,
            CompationQuestion: formData.CompationQuestion,
            AchivmentCard: formData.AchivmentCard
        };
        try {
            const compationCollection = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.collection)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_3__.db, "Compations");
            await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.addDoc)(compationCollection, collectedData);
            router.reload();
        } catch (err) {
            console.log(err);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
        onSubmit: handleSubmit,
        style: {
            margin: "10px 10px 10px 10px"
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.FormControl, {
                fullWidth: true,
                variant: "outlined",
                style: {
                    width: "100%",
                    margin: "10px 10px 10px 10px"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.InputLabel, {
                        htmlFor: "student-select",
                        children: "Competion Type"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Select, {
                        labelId: "student-select",
                        name: "CompationType",
                        label: "Competion Type",
                        value: formData.CompationType,
                        onChange: handleChange,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.MenuItem, {
                            value: "Hours Of Teaching",
                            children: "Hours Of Teaching"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.TextField, {
                id: "outlined-error-helper-text",
                label: "Compation Question",
                sx: {
                    margin: "10px 10px 10px 10px",
                    width: "100%"
                },
                name: "CompationQuestion",
                onChange: handleChange,
                value: formData.CompationQuestion
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.TextField, {
                id: "outlined-error-helper-text",
                label: "How the Message will look like in Achievement Card",
                sx: {
                    margin: "10px 10px 10px 10px",
                    width: "100%"
                },
                name: "AchivmentCard",
                onChange: handleChange,
                value: formData.AchivmentCard
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                style: {
                    display: "flex"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Button, {
                        variant: "outlined",
                        sx: {
                            margin: "10px 0 0 10px"
                        },
                        type: "submit",
                        children: "Save"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Button, {
                        variant: "outlined",
                        sx: {
                            margin: "10px 0 0 340px",
                            width: "13%"
                        },
                        onClick: ()=>setOpen(false),
                        children: "cancel"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CompationForm);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9435:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ TodoList_TodoList)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
;// CONCATENATED MODULE: ./component/TodoList/AddTodoForm.js



class AddTodoForm extends external_react_.Component {
    inputRef = /*#__PURE__*/ external_react_default().createRef();
    errorRef = /*#__PURE__*/ external_react_default().createRef();
    handleSubmit = (e)=>{
        console.log(this.inputRef.current.value);
        e.preventDefault();
        if (this.inputRef.current.value === "") {
            this.errorRef.current.classList.add("active");
            return null;
        }
        this.errorRef.current.classList.remove("active");
        this.props.addToList(this.inputRef.current.value);
        e.currentTarget.reset();
    };
    render() {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
            onSubmit: this.handleSubmit,
            style: {
                display: "flex"
            },
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(material_.Input, {
                    placeholder: "Todo",
                    inputProps: {
                        "aria-label": "Description"
                    },
                    onChange: this.handleChange,
                    inputRef: this.inputRef,
                    style: {
                        width: "90%"
                    }
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                    type: "submit",
                    variant: "contained",
                    color: "primary",
                    style: {
                        width: "10%",
                        backgroundColor: "#1ABC9C"
                    },
                    children: "Add"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    ref: this.errorRef,
                    className: "error"
                })
            ]
        });
    }
}
/* harmony default export */ const TodoList_AddTodoForm = (AddTodoForm);

;// CONCATENATED MODULE: ./component/TodoList/Todo.js



const styles = {
    Icon: {
        marginLeft: "auto"
    },
    Paper: {
        margin: "10px 0 0 -19px",
        padding: 10,
        display: "flex",
        alignItems: "center",
        //marginTop: 10,
        width: "43%"
    }
};
class Todo extends external_react_.Component {
    state = {
        fade: false
    };
    gridRef = /*#__PURE__*/ external_react_default().createRef();
    deleteTodo = ()=>{
        const fade = true;
        this.setState({
            fade
        });
        let promise = new Promise(function(resolve, reject) {
            setTimeout(function() {
                resolve(true);
            }, 500);
        });
        promise.then(()=>this.props.deleteTodo(this.props.index));
        console.log(this.state);
    };
    render() {
        const gridClass = this.state.fade ? "fade-out" : "";
        return /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
            xs: 12,
            className: `${gridClass}`,
            item: true,
            ref: this.gridRef,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Paper, {
                elevation: 2,
                style: styles.Paper,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        style: styles.Todo,
                        children: this.props.todo
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.IconButton, {
                        color: "primary",
                        "aria-label": "Edit",
                        style: styles.Icon
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                        onClick: this.deleteTodo,
                        sx: {
                            color: "#1ABC9C"
                        },
                        children: "Delete"
                    })
                ]
            })
        }, this.props.index);
    }
}
/* harmony default export */ const TodoList_Todo = (Todo);

;// CONCATENATED MODULE: ./component/TodoList/EditTodo.js



const EditTodo_styles = {
    Icon: {
        marginLeft: "auto",
        width: "10%"
    },
    Paper: {
        margin: "auto",
        padding: 10,
        alignItems: "center",
        marginTop: 10,
        width: 500
    }
};
class EditTodo extends external_react_.Component {
    inputRef = /*#__PURE__*/ external_react_default().createRef();
    render() {
        return /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
            xs: 12,
            item: true,
            children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Paper, {
                elevation: 2,
                style: EditTodo_styles.Paper,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                    onSubmit: ()=>{
                        this.props.saveTodo(this.props.index, this.inputRef.current.value);
                    },
                    style: {
                        display: "flex"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Input, {
                            style: {
                                width: "90%"
                            },
                            defaultValue: this.props.todo,
                            inputRef: this.inputRef
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.IconButton, {
                            type: "submit",
                            color: "primary",
                            "aria-label": "Add",
                            style: EditTodo_styles.Icon,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Save, {
                                fontSize: "small"
                            })
                        })
                    ]
                })
            })
        }, this.props.index);
    }
}
/* harmony default export */ const TodoList_EditTodo = (EditTodo);

;// CONCATENATED MODULE: ./component/TodoList/List.js





class List extends (external_react_default()).Component {
    renderTodo = (key)=>{
        if (this.props.list[key] == null) return null;
        if (this.props.list[key]["status"] === "active") {
            return /*#__PURE__*/ jsx_runtime_.jsx(TodoList_Todo, {
                index: key,
                todo: this.props.list[key]["todo"],
                deleteTodo: this.props.deleteTodo,
                updateTodo: this.props.updateTodo
            }, key);
        } else if (this.props.list[key]["status"] === "editing") {
            return /*#__PURE__*/ jsx_runtime_.jsx(TodoList_EditTodo, {
                index: key,
                todo: this.props.list[key]["todo"],
                saveTodo: this.props.saveTodo
            }, key);
        }
    };
    render() {
        return /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
            container: true,
            children: Object.keys(this.props.list).map((key)=>this.renderTodo(key))
        });
    }
}
/* harmony default export */ const TodoList_List = (List);

;// CONCATENATED MODULE: ./component/TodoList/TodoList.js





const TodoList_styles = {
    Paper: {
        padding: 20,
        margin: "0 0 0 250px",
        textAlign: "center",
        width: "30%"
    }
};
class TodoList extends external_react_.Component {
    state = {
        list: {}
    };
    addToList = (todo)=>{
        let list = {
            ...this.state.list
        };
        list[`todo${Date.now()}`] = {
            todo: todo,
            status: "active"
        };
        this.setState({
            list
        });
    };
    deleteTodo = (key)=>{
        let list = {
            ...this.state.list
        };
        list[key] = null;
        this.setState({
            list
        });
    };
    updateTodo = (key)=>{
        let list = {
            ...this.state.list
        };
        list[key]["status"] = "editing";
        this.setState({
            list
        });
    };
    saveTodo = (key, todo)=>{
        let list = {
            ...this.state.list
        };
        list[key] = {
            todo: todo,
            status: "active"
        };
        this.setState({
            list
        });
    };
    render() {
        return /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                container: true,
                spacing: 0,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                        item: true,
                        xs: 12,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Paper, {
                            style: TodoList_styles.Paper,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(TodoList_AddTodoForm, {
                                addToList: this.addToList
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                        item: true,
                        xs: 12,
                        style: TodoList_styles.Paper,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(TodoList_List, {
                            deleteTodo: this.deleteTodo,
                            list: this.state.list,
                            updateTodo: this.updateTodo,
                            saveTodo: this.saveTodo
                        })
                    })
                ]
            })
        });
    }
}
/* harmony default export */ const TodoList_TodoList = (TodoList);


/***/ }),

/***/ 8434:
/***/ (() => {



/***/ })

};
;