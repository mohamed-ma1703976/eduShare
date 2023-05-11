"use strict";
exports.id = 8083;
exports.ids = [8083];
exports.modules = {

/***/ 7628:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_icons_material_MapsUgc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9020);
/* harmony import */ var _mui_icons_material_MapsUgc__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_MapsUgc__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_icons_material_Settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(32);
/* harmony import */ var _mui_icons_material_Settings__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Settings__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_icons_material_NotificationsNone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3173);
/* harmony import */ var _mui_icons_material_NotificationsNone__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_NotificationsNone__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _hooks_useFetch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3601);
/* harmony import */ var _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6216);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1492);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useFetch__WEBPACK_IMPORTED_MODULE_7__, _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_8__, firebase_firestore__WEBPACK_IMPORTED_MODULE_9__]);
([_hooks_useFetch__WEBPACK_IMPORTED_MODULE_7__, _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_8__, firebase_firestore__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










function InstNav({ setCourseSearch  }) {
    const { data , loading , error  } = (0,_hooks_useFetch__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)("http://localhost:1337/api/logins");
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
    const [instructors, setInstructors] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        const fetchInstructors = async ()=>{
            const instructorCollection = (0,_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_8__/* .collection */ .hJ)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_8__.db, "Instructor");
            const instructorSnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_9__.getDocs)(instructorCollection);
            const instructorsList = instructorSnapshot.docs.map((doc)=>({
                    id: doc.id,
                    attributes: doc.data()
                }));
            setInstructors(instructorsList);
        };
        fetchInstructors();
    }, []);
    const idOfCurrentUser = _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_8__/* .auth */ .I8?.currentUser?.uid;
    let name = instructors.find((s)=>s.id === idOfCurrentUser)?.attributes.displayName;
    console.log(name);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.AppBar, {
        position: "sticky",
        sx: {
            backgroundColor: "#FDFEFE"
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Toolbar, {
                sx: {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Toolbar, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                                variant: "h6",
                                sx: {
                                    color: "#454545",
                                    fontWeight: "800",
                                    margin: "0 0 0 -23px",
                                    cursor: "pointer"
                                },
                                children: [
                                    "Edu",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        style: {
                                            color: "#1ABC9C"
                                        },
                                        onClick: ()=>router.push("/Instructor"),
                                        children: "Share"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                                variant: "h6",
                                sx: {
                                    padding: "6px",
                                    margin: "0 0 0 66px",
                                    color: "#454545",
                                    fontWeight: "800",
                                    cursor: "pointer"
                                },
                                children: [
                                    "Wellcome ",
                                    name,
                                    " ! "
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Toolbar, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_MapsUgc__WEBPACK_IMPORTED_MODULE_2___default()), {
                                sx: {
                                    margin: "0 10px 0 10px",
                                    color: "#B2BABB",
                                    cursor: "pointer"
                                }
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_NotificationsNone__WEBPACK_IMPORTED_MODULE_4___default()), {
                                sx: {
                                    margin: "0 10px 0 10px",
                                    color: "#B2BABB",
                                    cursor: "pointer"
                                }
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Settings__WEBPACK_IMPORTED_MODULE_3___default()), {
                                onClick: (e)=>setOpen(true),
                                sx: {
                                    margin: "0 10px 0 10px",
                                    color: "#B2BABB",
                                    cursor: "pointer"
                                }
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Menu, {
                id: "demo-positioned-menu",
                "aria-labelledby": "demo-positioned-button",
                open: open,
                onClose: (e)=>setOpen(false),
                anchorOrigin: {
                    vertical: "top",
                    horizontal: "right"
                },
                transformOrigin: {
                    vertical: "top",
                    horizontal: "right"
                },
                sx: {
                    margin: "30px 0 0 0",
                    cursor: "pointer"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.MenuItem, {
                    onClick: ()=>router.push("/"),
                    sx: {
                        cursor: "pointer"
                    },
                    children: "Logout"
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InstNav);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 780:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_icons_material_AutoStories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5643);
/* harmony import */ var _mui_icons_material_AutoStories__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_AutoStories__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_icons_material_Groups3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7926);
/* harmony import */ var _mui_icons_material_Groups3__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Groups3__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_icons_material_AccountCircle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1883);
/* harmony import */ var _mui_icons_material_AccountCircle__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_AccountCircle__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3467);
/* harmony import */ var _mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_icons_material_Newspaper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2753);
/* harmony import */ var _mui_icons_material_Newspaper__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Newspaper__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_icons_material_CalendarMonth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7226);
/* harmony import */ var _mui_icons_material_CalendarMonth__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_CalendarMonth__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6197);
/* harmony import */ var _mui_icons_material_Message__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9086);
/* harmony import */ var _mui_icons_material_Message__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Message__WEBPACK_IMPORTED_MODULE_11__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_10__]);
framer_motion__WEBPACK_IMPORTED_MODULE_10__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];












function InstSidebar() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
    const controls = (0,framer_motion__WEBPACK_IMPORTED_MODULE_10__.useAnimation)();
    function handelClickRoute() {
        router.push("/Instructor/uploadcontanet");
    }
    (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(()=>{
        handelClickRoute;
    });
    (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(()=>{
        handelClickRoute;
        controls.start({
            opacity: 1,
            x: 0,
            transition: {
                duration: 1
            }
        });
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
        component: framer_motion__WEBPACK_IMPORTED_MODULE_10__.motion.div,
        animate: controls,
        initial: {
            opacity: 0,
            x: -100
        },
        bgcolor: "#FDFEFE",
        flex: 1,
        p: 1,
        position: "sticky",
        sx: {
            maxWidth: "250px"
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.List, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.ListItem, {
                    disablePadding: true,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.ListItemButton, {
                        onClick: ()=>router.push("/Instructor"),
                        sx: {
                            "&:hover": {
                                backgroundColor: "#1ABC9C",
                                color: "primary.contrastText"
                            },
                            transition: "background-color 0.3s ease-in-out"
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.ListItemIcon, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_5___default()), {})
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.ListItemText, {
                                sx: {
                                    color: "#909497"
                                },
                                primary: "Home"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.ListItem, {
                    disablePadding: true,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.ListItemButton, {
                        onClick: handelClickRoute,
                        sx: {
                            "&:hover": {
                                backgroundColor: "#1ABC9C",
                                color: "primary.contrastText"
                            },
                            transition: "background-color 0.3s ease-in-out"
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.ListItemIcon, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_AutoStories__WEBPACK_IMPORTED_MODULE_2___default()), {})
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.ListItemText, {
                                sx: {
                                    color: "#909497"
                                },
                                primary: "Upload Content"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.ListItem, {
                    disablePadding: true,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.ListItemButton, {
                        onClick: ()=>router.push("/Instructor/mystudents"),
                        sx: {
                            "&:hover": {
                                backgroundColor: "#1ABC9C",
                                color: "primary.contrastText"
                            },
                            transition: "background-color 0.3s ease-in-out"
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.ListItemIcon, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Groups3__WEBPACK_IMPORTED_MODULE_3___default()), {})
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.ListItemText, {
                                sx: {
                                    color: "#909497"
                                },
                                primary: "My Students"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.ListItem, {
                    disablePadding: true,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.ListItemButton, {
                        onClick: ()=>router.push("/Instructor/myBlogs"),
                        sx: {
                            "&:hover": {
                                backgroundColor: "#1ABC9C",
                                color: "primary.contrastText"
                            },
                            transition: "background-color 0.3s ease-in-out"
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.ListItemIcon, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Newspaper__WEBPACK_IMPORTED_MODULE_6___default()), {})
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.ListItemText, {
                                sx: {
                                    color: "#909497"
                                },
                                primary: "My Blogs"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.ListItem, {
                    disablePadding: true,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.ListItemButton, {
                        onClick: ()=>router.push("/Instructor/myCalendar"),
                        sx: {
                            "&:hover": {
                                backgroundColor: "#1ABC9C",
                                color: "primary.contrastText"
                            },
                            transition: "background-color 0.3s ease-in-out"
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.ListItemIcon, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_CalendarMonth__WEBPACK_IMPORTED_MODULE_7___default()), {})
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.ListItemText, {
                                sx: {
                                    color: "#909497"
                                },
                                primary: "My Calendar"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.ListItem, {
                    disablePadding: true,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.ListItemButton, {
                        onClick: ()=>router.push("/Instructor/Messages"),
                        sx: {
                            "&:hover": {
                                backgroundColor: "#1ABC9C",
                                color: "primary.contrastText"
                            },
                            transition: "background-color 0.3s ease-in-out"
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.ListItemIcon, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Message__WEBPACK_IMPORTED_MODULE_11___default()), {})
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.ListItemText, {
                                sx: {
                                    color: "#909497"
                                },
                                primary: "Inbox"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.ListItem, {
                    disablePadding: true,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.ListItemButton, {
                        onClick: ()=>router.push("/Instructor/profile"),
                        sx: {
                            "&:hover": {
                                backgroundColor: "#1ABC9C",
                                color: "primary.contrastText"
                            },
                            transition: "background-color 0.3s ease-in-out"
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.ListItemIcon, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_AccountCircle__WEBPACK_IMPORTED_MODULE_4___default()), {})
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.ListItemText, {
                                sx: {
                                    color: "#909497"
                                },
                                primary: "Profile"
                            })
                        ]
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InstSidebar);

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