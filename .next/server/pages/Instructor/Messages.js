"use strict";
(() => {
var exports = {};
exports.id = 3304;
exports.ids = [3304];
exports.modules = {

/***/ 8507:
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
/* harmony import */ var _component_Instructors_InstSidebarr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(780);
/* harmony import */ var _component_Instructors_InstNav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7628);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5574);
/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_colors__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_firestore__WEBPACK_IMPORTED_MODULE_2__, _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_3__, _component_Instructors_InstSidebarr__WEBPACK_IMPORTED_MODULE_5__, _component_Instructors_InstNav__WEBPACK_IMPORTED_MODULE_6__]);
([firebase_firestore__WEBPACK_IMPORTED_MODULE_2__, _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_3__, _component_Instructors_InstSidebarr__WEBPACK_IMPORTED_MODULE_5__, _component_Instructors_InstNav__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const Transition = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef(function Transition(props, ref) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Slide, {
        direction: "up",
        ref: ref,
        ...props
    });
});
function Messages({ userId  }) {
    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [inst, setInst] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [message, setMesaage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const isMyMessage = (fromId)=>fromId === userId;
    const [rmassgae, setRmassage] = react__WEBPACK_IMPORTED_MODULE_1___default().useState({
        rs: ""
    });
    const [mid, setMid] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
    userId = _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_3__/* .auth */ .I8?.currentUser?.uid;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const fetchUserData = async (id, role)=>{
            if (!id || !role) {
                console.error("Invalid user ID or role");
                return {};
            }
            const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_3__/* .app */ .l2);
            const userDocRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)(db, role, id);
            const userDoc = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getDoc)(userDocRef);
            if (userDoc.exists()) {
                let data = userDoc.data();
                return {
                    name: data.displayName,
                    role: role
                };
            }
            return {};
        };
        const messageStyles = (fromId)=>({
                display: "flex",
                justifyContent: fromId === userId ? "flex-end" : "flex-start",
                marginBottom: 1
            });
        const messageColor = (fromId)=>({
                backgroundColor: fromId === userId ? _mui_material_colors__WEBPACK_IMPORTED_MODULE_8__.deepPurple[500] : _mui_material_colors__WEBPACK_IMPORTED_MODULE_8__.deepOrange[500],
                color: "white",
                borderRadius: "18px",
                padding: "10px"
            });
        const fetchMessages = async ()=>{
            if (userId) {
                const messagesCollection = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.collection)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_3__.db, "Message");
                const messagesQuery = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.query)(messagesCollection, (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.where)("toId", "==", userId));
                const querySnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getDocs)(messagesQuery);
                const messagesList = [];
                for (const doc of querySnapshot.docs){
                    const messageData = doc.data();
                    const userData = await fetchUserData(messageData.fromId, messageData.fromRole);
                    console.log(messageData);
                    messagesList.push({
                        id: doc.id,
                        data: {
                            ...messageData,
                            fromName: userData.name,
                            fromRole: userData.role,
                            InstructorReplays: messageData.InstructorReplays || []
                        }
                    });
                }
                setMessages(messagesList);
            }
        };
        const fetchInst = async ()=>{
            const studentCollection = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.collection)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_3__.db, "Instructor");
            const studentSnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getDocs)(studentCollection);
            const studentList = studentSnapshot.docs.map((doc)=>({
                    id: doc.id,
                    attributes: doc.data()
                }));
            setInst(studentList);
        };
        const fetcMess = async ()=>{
            const studentCollection = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.collection)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_3__.db, "Message");
            const studentSnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getDocs)(studentCollection);
            const studentList = studentSnapshot.docs.map((doc)=>({
                    id: doc.id,
                    attributes: doc.data()
                }));
            setMesaage(studentList);
        };
        fetchInst();
        fetcMess();
        fetchMessages();
    }, [
        userId
    ]);
    let myMessages = message.filter((m)=>m.attributes.fromId === userId);
    console.log(message);
    console.log(inst);
    console.log(myMessages);
    console.log(userId);
    const handleClickOpen = (id)=>{
        console.log(id);
        setMid(id);
        setOpen(true);
        console.log(mid);
    };
    const handleClose = ()=>{
        setOpen(false);
    };
    const handleChange = (event)=>{
        setRmassage({
            rs: event.target.value
        });
    };
    async function handelSendReplay() {
        try {
            // fetch the message document
            const messageRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_3__.db, "Message", mid);
            const messageDoc = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getDoc)(messageRef);
            // get the previous replies
            const previousReplies = messageDoc.data().InstructorReplays || [];
            console.log(previousReplies);
            // merge the previous replies with the new reply
            const newReplies = [
                ...previousReplies,
                rmassgae.rs
            ];
            console.log(newReplies);
            // update the message document with the new replies
            await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.updateDoc)(messageRef, {
                InstructorReplays: newReplies
            });
            // clear the reply input and close the dialog
            // setRmassage({ rs: '' });
            setOpen(false);
            router.reload();
        } catch (err) {
            console.log(err);
        }
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Instructors_InstNav__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Grid, {
                container: true,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Grid, {
                        item: true,
                        xs: 2,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Instructors_InstSidebarr__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Grid, {
                        item: true,
                        xs: 10,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                                variant: "h5",
                                gutterBottom: true,
                                sx: {
                                    fontSize: "30px",
                                    fontWeight: "1000",
                                    margin: "30px 0",
                                    color: "#454545"
                                },
                                children: "Messages"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                sx: {
                                    display: "flex",
                                    flexDirection: "column",
                                    overflowY: "scroll",
                                    padding: 2,
                                    height: "70vh"
                                },
                                children: myMessages.length > 0 ? myMessages.map((message)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                        sx: {
                                            marginBottom: 2
                                        },
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                                                variant: "body2",
                                                sx: {
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    margin: "0 auto 10px auto",
                                                    fontFamily: "Arial, sans-serif",
                                                    color: "white",
                                                    backgroundColor: "#5D6D7E",
                                                    padding: "10px",
                                                    borderRadius: "0.5rem",
                                                    width: "30%",
                                                    fontWeight: "700"
                                                },
                                                children: [
                                                    "Chat with Student: ",
                                                    `${message.attributes.toFirstName} ${message.attributes.toLastName}`
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                                sx: {
                                                    display: "flex",
                                                    justifyContent: message.attributes.fromId === userId ? "flex-end" : "flex-start",
                                                    marginBottom: 1
                                                },
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                                                    variant: "body1",
                                                    sx: {
                                                        backgroundColor: message.attributes.fromId === userId ? "primary.light" : "grey.500",
                                                        color: "white",
                                                        borderRadius: "18px",
                                                        padding: "10px"
                                                    },
                                                    children: [
                                                        isMyMessage(message.attributes.fromId) ? message.attributes.fromName : message.attributes.toFirstName,
                                                        ": ",
                                                        message.attributes.message
                                                    ]
                                                })
                                            }),
                                            message.attributes.InstructorReplays && Array.isArray(message.attributes.InstructorReplays) ? message.attributes.InstructorReplays.map((reply, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                                    sx: {
                                                        display: "flex",
                                                        justifyContent: message.attributes.fromId === userId ? "flex-end" : "flex-start",
                                                        marginBottom: 1
                                                    },
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                                                        variant: "body2",
                                                        sx: {
                                                            backgroundColor: message.attributes.fromId === userId ? "primary.light" : "grey.500",
                                                            color: "white",
                                                            borderRadius: "18px",
                                                            padding: "10px"
                                                        },
                                                        children: [
                                                            message.attributes.fromName,
                                                            ": ",
                                                            reply
                                                        ]
                                                    })
                                                }, index)) : null,
                                            message.attributes?.replays?.map((r, index)=>{
                                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                                    sx: {
                                                        display: "flex",
                                                        justifyContent: "flex-start",
                                                        marginBottom: 1
                                                    },
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                                                        variant: "body2",
                                                        sx: {
                                                            backgroundColor: "grey.500",
                                                            color: "white",
                                                            borderRadius: "18px",
                                                            padding: "10px"
                                                        },
                                                        children: [
                                                            message.attributes.toFirstName + "" + message.attributes.toLastName,
                                                            ": ",
                                                            r
                                                        ]
                                                    })
                                                }, index);
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Button, {
                                                variant: "outlined",
                                                color: "primary",
                                                onClick: ()=>handleClickOpen(message.id),
                                                sx: {
                                                    alignSelf: "flex-end",
                                                    marginBottom: 2
                                                },
                                                children: "Reply"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Divider, {
                                                sx: {
                                                    marginBottom: 2
                                                }
                                            })
                                        ]
                                    }, message.id)) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
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
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.DialogTitle, {
                                        sx: {
                                            fontSize: "30px",
                                            textAlign: "center",
                                            fontWeight: "750"
                                        },
                                        children: "Your Message"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.DialogContent, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TextField, {
                                            id: "outlined-multiline-static",
                                            label: "Reply Here ...",
                                            multiline: true,
                                            rows: 4,
                                            sx: {
                                                margin: "10px 10px 10px 10px",
                                                width: "100%"
                                            },
                                            name: "rs",
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

/***/ 5574:
/***/ ((module) => {

module.exports = require("@mui/material/colors");

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
var __webpack_exports__ = __webpack_require__.X(0, [6216,8083], () => (__webpack_exec__(8507)));
module.exports = __webpack_exports__;

})();