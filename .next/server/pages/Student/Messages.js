"use strict";
(() => {
var exports = {};
exports.id = 4746;
exports.ids = [4746];
exports.modules = {

/***/ 6112:
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
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1492);
/* harmony import */ var _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6216);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _component_Student_StuNav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5223);
/* harmony import */ var _component_Student_StuSideBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8107);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_firestore__WEBPACK_IMPORTED_MODULE_2__, _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_3__, _component_Student_StuNav__WEBPACK_IMPORTED_MODULE_5__, _component_Student_StuSideBar__WEBPACK_IMPORTED_MODULE_6__]);
([firebase_firestore__WEBPACK_IMPORTED_MODULE_2__, _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_3__, _component_Student_StuNav__WEBPACK_IMPORTED_MODULE_5__, _component_Student_StuSideBar__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const Transition = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef(function Transition(props, ref) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Slide, {
        direction: "up",
        ref: ref,
        ...props
    });
});
function Messages({ userId  }) {
    const [selectedMessage, setSelectedMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [mid, setMid] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const [stu, setStudents] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const [rmassgae, setRmassage] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("");
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
    const handleClickOpen = (message)=>{
        setMid(message.id);
        setSelectedMessage(message);
        setOpen(true);
    };
    const handleClose = ()=>{
        setOpen(false);
    };
    userId = _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_3__/* .auth */ .I8?.currentUser?.uid;
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        const fetchStudents = async ()=>{
            const studentCollection = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.collection)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_3__.db, "Student");
            const studentSnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getDocs)(studentCollection);
            const studentList = studentSnapshot.docs.map((doc)=>({
                    id: doc.id,
                    attributes: doc.data()
                }));
            setStudents(studentList);
        };
        fetchStudents();
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (userId) {
            const messagesCollection = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.collection)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_3__.db, "Message");
            const messagesQuery = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.query)(messagesCollection, (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.where)("toId", "==", userId));
            const unsubscribe = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.onSnapshot)(messagesQuery, (querySnapshot)=>{
                const messagesList = querySnapshot.docs.map((doc)=>({
                        id: doc.id,
                        data: doc.data()
                    }));
                setMessages(messagesList);
            });
            return ()=>unsubscribe();
        }
    }, [
        userId
    ]);
    const handleChange = (event)=>{
        setRmassage(event.target.value);
    };
    async function handelSendReplay() {
        try {
            const messageRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_3__.db, "Message", mid);
            // get the previous replies
            const previousReplies = selectedMessage?.data?.replays || [];
            // merge the previous replies with the new reply
            const newReplies = [
                ...previousReplies,
                rmassgae
            ];
            // update the message document with the new replies
            await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.updateDoc)(messageRef, {
                replays: newReplies
            });
            // clear the reply input and close the dialog
            setRmassage("");
            setOpen(false);
            router.reload();
        } catch (err) {
            console.log(err);
        }
    }
    let replayName = stu.find((s)=>s.id === userId)?.attributes?.displayName;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Student_StuNav__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                sx: {
                    display: "flex"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Student_StuSideBar__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                        component: "main",
                        sx: {
                            flexGrow: 1,
                            p: 3
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Toolbar, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                                variant: "h5",
                                sx: {
                                    fontSize: "30px",
                                    fontWeight: "1000",
                                    mb: 3,
                                    color: "#454545"
                                },
                                children: "Messages"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                sx: {
                                    p: 2,
                                    backgroundColor: "#f5f5f5",
                                    borderRadius: 1,
                                    minHeight: "70vh"
                                },
                                children: messages.length > 0 ? messages.map((message, index)=>{
                                    const isEven = index % 2 === 0;
                                    console.log(message);
                                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                        sx: {
                                            mb: 2,
                                            mx: 1
                                        },
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                                sx: {
                                                    display: "flex",
                                                    flexDirection: isEven ? "row" : "row-reverse",
                                                    alignItems: "flex-start"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                                        sx: {
                                                            borderRadius: 1,
                                                            p: 1,
                                                            mb: 1,
                                                            minWidth: "50%",
                                                            maxWidth: "80%",
                                                            backgroundColor: isEven ? "#1ABC9C" : "#eee"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                                                                variant: "body2",
                                                                children: [
                                                                    "From Instructor: ",
                                                                    message.data.fromName
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                                                                variant: "body1",
                                                                children: message.data.message
                                                            }),
                                                            message.data && message?.data?.InstructorReplays?.map((m)=>{
                                                                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                                                                    variant: "body1",
                                                                    children: [
                                                                        m,
                                                                        " "
                                                                    ]
                                                                });
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Button, {
                                                        onClick: ()=>handleClickOpen(message),
                                                        sx: {
                                                            alignSelf: "center",
                                                            ml: isEven ? 1 : "auto",
                                                            mr: isEven ? "auto" : 1
                                                        },
                                                        children: "Reply"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                                sx: {
                                                    display: "flex",
                                                    flexDirection: isEven ? "row" : "row-reverse",
                                                    alignItems: "flex-start",
                                                    pl: isEven ? 2 : "auto",
                                                    pr: isEven ? "auto" : 2
                                                },
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                                    sx: {
                                                        borderRadius: 1,
                                                        p: 1,
                                                        minWidth: "50%",
                                                        maxWidth: "80%",
                                                        backgroundColor: isEven ? "#eee" : "#1ABC9C"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                                                            variant: "body2",
                                                            children: [
                                                                "Replies from: ",
                                                                replayName
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                                                            variant: "body1",
                                                            children: message.data.replays && message.data.replays.map((reply, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                                                                    variant: "body1",
                                                                    children: reply
                                                                }, index))
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    }, message.id);
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                                    variant: "body1",
                                    children: "No messages found."
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Dialog, {
                                open: open,
                                TransitionComponent: Transition,
                                keepMounted: true,
                                onClose: handleClose,
                                "aria-describedby": "alert-dialog-slide-description",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.DialogTitle, {
                                        sx: {
                                            fontSize: "30px",
                                            textAlign: "center",
                                            fontWeight: "750"
                                        },
                                        children: [
                                            "To: ",
                                            selectedMessage?.data.fromName
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.DialogContent, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TextField, {
                                            id: "outlined-multiline-static",
                                            label: "Reply Here ...",
                                            multiline: true,
                                            rows: 4,
                                            fullWidth: true,
                                            name: "rs",
                                            value: rmassgae,
                                            onChange: handleChange
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.DialogActions, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Button, {
                                                onClick: handleClose,
                                                color: "primary",
                                                children: "Cancel"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Button, {
                                                color: "primary",
                                                onClick: handelSendReplay,
                                                children: "Send"
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
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Messages);

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
var __webpack_exports__ = __webpack_require__.X(0, [6216,5638], () => (__webpack_exec__(6112)));
module.exports = __webpack_exports__;

})();