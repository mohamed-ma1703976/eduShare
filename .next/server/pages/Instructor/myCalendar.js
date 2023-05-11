"use strict";
(() => {
var exports = {};
exports.id = 7593;
exports.ids = [7593];
exports.modules = {

/***/ 2482:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fullcalendar_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9870);
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5503);
/* harmony import */ var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1103);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9931);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1492);
/* harmony import */ var _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6216);
/* harmony import */ var _CreateEvent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8038);
/* harmony import */ var _UpdateEvent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8724);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(401);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3188);
/* harmony import */ var _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6902);
/* harmony import */ var _mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_14__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_fullcalendar_react__WEBPACK_IMPORTED_MODULE_2__, _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_3__, _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_4__, firebase_firestore__WEBPACK_IMPORTED_MODULE_6__, _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_7__, _CreateEvent__WEBPACK_IMPORTED_MODULE_8__, _UpdateEvent__WEBPACK_IMPORTED_MODULE_9__, firebase_auth__WEBPACK_IMPORTED_MODULE_11__]);
([_fullcalendar_react__WEBPACK_IMPORTED_MODULE_2__, _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_3__, _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_4__, firebase_firestore__WEBPACK_IMPORTED_MODULE_6__, _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_7__, _CreateEvent__WEBPACK_IMPORTED_MODULE_8__, _UpdateEvent__WEBPACK_IMPORTED_MODULE_9__, firebase_auth__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















const MyCalendar = ()=>{
    const [events, setEvents] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [modalIsOpen, setModalIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [editModalOpen, setEditModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [newEventStart, setNewEventStart] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [eventToEdit, setEventToEdit] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_10__.useRouter)();
    const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_11__.getAuth)();
    const handleEventClick = (info)=>{
        router.push(`event/${info.event.id}`);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (auth.currentUser) {
            const eventsCollection = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.collection)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_7__.db, "Events");
            const q = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.query)(eventsCollection, (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.where)("createdBy", "==", auth.currentUser.uid));
            const unsubscribe = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.onSnapshot)(q, (querySnapshot)=>{
                const eventsData = [];
                querySnapshot.forEach((doc)=>{
                    eventsData.push({
                        id: doc.id,
                        ...doc.data()
                    });
                });
                setEvents(eventsData);
            });
            return ()=>{
                unsubscribe();
            };
        }
    }, [
        auth.currentUser
    ]);
    const handleDateClick = (info)=>{
        setNewEventStart(info.dateStr);
        setModalIsOpen(true);
    };
    const handleEditClick = (event)=>{
        setEventToEdit(event);
        setEditModalOpen(true);
    };
    const handleDeleteClick = async (id)=>{
        if (confirm("Are you sure you want to continue?")) {
            try {
                await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.deleteDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.doc)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_7__.db, "Events", id));
            } catch (e) {
                console.error("Error deleting document: ", e);
            }
        } else {
            return;
        }
    };
    const handleCloseEditModal = ()=>{
        setEditModalOpen(false);
        setEventToEdit(null);
    };
    const handleEditEvent = async (updatedEvent)=>{
        try {
            await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.updateDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.doc)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_7__.db, "Events", updatedEvent.id), updatedEvent);
        } catch (e) {
            console.error("Error updating document: ", e);
        }
        setEditModalOpen(false);
        setEventToEdit(null);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_12__.Box, {
        sx: {
            display: "flex",
            flexDirection: {
                xs: "column",
                md: "row"
            }
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_12__.Box, {
                sx: {
                    flex: 1
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_12__.Button, {
                        variant: "contained",
                        sx: {
                            backgroundColor: "#1abc9c",
                            marginRight: "16px"
                        },
                        onClick: ()=>setModalIsOpen(true),
                        children: "Create Event"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fullcalendar_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
                        plugins: [
                            _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_3__["default"],
                            _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_4__["default"]
                        ],
                        initialView: "dayGridMonth",
                        headerToolbar: {
                            left: "prev,next today",
                            center: "title",
                            right: "dayGridMonth,dayGridWeek,dayGridDay"
                        },
                        events: events,
                        dateClick: handleDateClick,
                        eventClick: handleEventClick
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_modal__WEBPACK_IMPORTED_MODULE_5___default()), {
                        isOpen: modalIsOpen,
                        onRequestClose: ()=>setModalIsOpen(false),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CreateEvent__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                            closeModal: ()=>setModalIsOpen(false),
                            newEventStart: newEventStart
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_12__.Grid, {
                container: true,
                item: true,
                xs: 12,
                md: 4,
                sx: {
                    flexDirection: "column",
                    alignItems: "center"
                },
                children: events.map((event)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_12__.Card, {
                        sx: {
                            mb: 2
                        },
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_12__.CardContent, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_12__.Typography, {
                                    variant: "h6",
                                    gutterBottom: true,
                                    children: event.title
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_12__.Typography, {
                                    variant: "body1",
                                    gutterBottom: true,
                                    children: [
                                        "Start Time: ",
                                        event.start
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_12__.Typography, {
                                    variant: "body1",
                                    gutterBottom: true,
                                    children: [
                                        "End Time: ",
                                        event.end
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_12__.Typography, {
                                    variant: "body1",
                                    gutterBottom: true,
                                    children: [
                                        "description: ",
                                        event.description
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_12__.Typography, {
                                    variant: "body1",
                                    gutterBottom: true,
                                    children: [
                                        "Link: ",
                                        event.link
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_12__.Box, {
                                    sx: {
                                        display: "flex",
                                        justifyContent: "flex-end",
                                        mt: 2
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_12__.IconButton, {
                                        "aria-label": "delete",
                                        onClick: ()=>handleDeleteClick(event.id),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_13___default()), {})
                                    })
                                })
                            ]
                        })
                    }, event.id))
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyCalendar);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8038:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1492);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3392);
/* harmony import */ var _mui_material_Dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8611);
/* harmony import */ var _mui_material_Dialog__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2468);
/* harmony import */ var _mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1094);
/* harmony import */ var _mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9404);
/* harmony import */ var _mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6216);
/* harmony import */ var _mui_icons_material_AddAPhoto__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7248);
/* harmony import */ var _mui_icons_material_AddAPhoto__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_AddAPhoto__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_firestore__WEBPACK_IMPORTED_MODULE_2__, firebase_storage__WEBPACK_IMPORTED_MODULE_3__, _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_8__]);
([firebase_firestore__WEBPACK_IMPORTED_MODULE_2__, firebase_storage__WEBPACK_IMPORTED_MODULE_3__, _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const CreateEvent = ({ closeModal , newEventStart  })=>{
    const [newEventTitle, setNewEventTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [newEventStartState, setNewEventStartState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(newEventStart);
    const [newEventEnd, setNewEventEnd] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [newEventLink, setNewEventLink] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [newEventDescription, setNewEventDescription] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [coverImage, setCoverImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    let userId = _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_8__/* .auth */ .I8?.currentUser?.uid;
    const storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.getStorage)();
    const uploadCoverImage = async ()=>{
        const storageRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.ref)(storage, `coverImages/${coverImage.name}`);
        await (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.uploadBytes)(storageRef, coverImage);
        return await (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.getDownloadURL)(storageRef);
    };
    const createNewEvent = async ()=>{
        if (!newEventTitle || !newEventStartState || !newEventEnd) {
            alert("Please fill in all the fields.");
            return;
        }
        const coverImageUrl = coverImage ? await uploadCoverImage() : "";
        const newEvent = {
            title: newEventTitle,
            start: newEventStartState,
            end: newEventEnd,
            link: newEventLink,
            description: newEventDescription,
            createdBy: userId,
            coverImage: coverImageUrl
        };
        try {
            await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.addDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.collection)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_8__.db, "Events"), newEvent);
            setNewEventTitle("");
            setNewEventStartState("");
            setNewEventEnd("");
            setNewEventLink("");
            setNewEventDescription("");
            setCoverImage(null);
            closeModal();
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_4___default()), {
        open: true,
        onClose: closeModal,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_5___default()), {
                children: "Create an online Session"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_6___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("uploadCoverImage", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Box, {
                        display: "flex",
                        justifyContent: "center",
                        mb: 2,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                            htmlFor: "blogCover",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    id: "blogCover",
                                    type: "file",
                                    accept: "image/*",
                                    onChange: (e)=>setCoverImage(e.target.files[0])
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Button, {
                                    component: "span",
                                    variant: "outlined",
                                    color: "primary",
                                    startIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_AddAPhoto__WEBPACK_IMPORTED_MODULE_9___default()), {}),
                                    children: "Upload Cover Image"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_10__.TextField, {
                        autoFocus: true,
                        margin: "dense",
                        label: "Title",
                        type: "text",
                        fullWidth: true,
                        value: newEventTitle,
                        onChange: (e)=>setNewEventTitle(e.target.value)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_10__.TextField, {
                        margin: "dense",
                        label: "Start time",
                        type: "datetime-local",
                        fullWidth: true,
                        value: newEventStartState,
                        onChange: (e)=>setNewEventStartState(e.target.value)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_10__.TextField, {
                        margin: "dense",
                        label: "End time",
                        type: "datetime-local",
                        fullWidth: true,
                        value: newEventEnd,
                        onChange: (e)=>setNewEventEnd(e.target.value)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_10__.TextField, {
                        margin: "dense",
                        label: "Event Link",
                        type: "text",
                        fullWidth: true,
                        value: newEventLink,
                        onChange: (e)=>setNewEventLink(e.target.value)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_10__.TextField, {
                        margin: "dense",
                        label: "Event Description",
                        multiline: true,
                        rows: 4,
                        fullWidth: true,
                        value: newEventDescription,
                        onChange: (e)=>setNewEventDescription(e.target.value)
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_7___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Button, {
                        onClick: closeModal,
                        children: "Cancel"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Button, {
                        onClick: createNewEvent,
                        children: "Create Event"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateEvent);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8724:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fullcalendar_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9870);
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5503);
/* harmony import */ var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1103);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9931);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1492);
/* harmony import */ var _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6216);
/* harmony import */ var _CreateEvent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8038);
/* harmony import */ var _UpdateEvent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8724);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(401);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3188);
/* harmony import */ var _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6902);
/* harmony import */ var _mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_14__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_fullcalendar_react__WEBPACK_IMPORTED_MODULE_2__, _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_3__, _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_4__, firebase_firestore__WEBPACK_IMPORTED_MODULE_6__, _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_7__, _CreateEvent__WEBPACK_IMPORTED_MODULE_8__, _UpdateEvent__WEBPACK_IMPORTED_MODULE_9__, firebase_auth__WEBPACK_IMPORTED_MODULE_11__]);
([_fullcalendar_react__WEBPACK_IMPORTED_MODULE_2__, _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_3__, _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_4__, firebase_firestore__WEBPACK_IMPORTED_MODULE_6__, _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_7__, _CreateEvent__WEBPACK_IMPORTED_MODULE_8__, _UpdateEvent__WEBPACK_IMPORTED_MODULE_9__, firebase_auth__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















const MyCalendar = ()=>{
    const [events, setEvents] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [newEventStart, setNewEventStart] = useState("");
    const [eventToEdit, setEventToEdit] = useState(null);
    const router = useRouter();
    const auth = getAuth();
    const handleEventClick = (info)=>{
        router.push(`event/${info.event.id}`);
    };
    useEffect(()=>{
        if (auth.currentUser) {
            const eventsCollection = collection(db, "Events");
            const q = query(eventsCollection, where("createdBy", "==", auth.currentUser.uid));
            const unsubscribe = onSnapshot(q, (querySnapshot)=>{
                const eventsData = [];
                querySnapshot.forEach((doc)=>{
                    eventsData.push({
                        id: doc.id,
                        ...doc.data()
                    });
                });
                setEvents(eventsData);
            });
            return ()=>{
                unsubscribe();
            };
        }
    }, [
        auth.currentUser
    ]);
    const handleDateClick = (info)=>{
        setNewEventStart(info.dateStr);
        setModalIsOpen(true);
    };
    const handleEditClick = (event)=>{
        setEventToEdit(event);
        setEditModalOpen(true);
    };
    const handleDeleteClick = async (id)=>{
        try {
            await deleteDoc(doc(db, "Events", id));
        } catch (e) {
            console.error("Error deleting document: ", e);
        }
    };
    const handleCloseEditModal = ()=>{
        setEditModalOpen(false);
        setEventToEdit(null);
    };
    return /*#__PURE__*/ _jsxs(Box, {
        sx: {
            display: "flex",
            flexDirection: {
                xs: "column",
                md: "row"
            }
        },
        children: [
            /*#__PURE__*/ _jsxs(Box, {
                sx: {
                    flex: 1
                },
                children: [
                    /*#__PURE__*/ _jsx(Button, {
                        variant: "contained",
                        sx: {
                            backgroundColor: "#1abc9c",
                            marginRight: "16px"
                        },
                        onClick: ()=>setModalIsOpen(true),
                        children: "Create Event"
                    }),
                    /*#__PURE__*/ _jsx(FullCalendar, {
                        plugins: [
                            dayGridPlugin,
                            interactionPlugin
                        ],
                        initialView: "dayGridMonth",
                        headerToolbar: {
                            left: "prev,next today",
                            center: "title",
                            right: "dayGridMonth,dayGridWeek,dayGridDay"
                        },
                        events: events,
                        dateClick: handleDateClick,
                        eventClick: handleEventClick
                    }),
                    /*#__PURE__*/ _jsx(Modal, {
                        isOpen: modalIsOpen,
                        onRequestClose: ()=>setModalIsOpen(false),
                        children: /*#__PURE__*/ _jsx(CreateEvent, {
                            closeModal: ()=>setModalIsOpen(false),
                            newEventStart: newEventStart
                        })
                    }),
                    /*#__PURE__*/ _jsx(Modal, {
                        isOpen: editModalOpen,
                        onRequestClose: handleCloseEditModal,
                        children: eventToEdit && /*#__PURE__*/ _jsx(UpdateEvent, {
                            eventDetails: eventToEdit,
                            closeModal: handleCloseEditModal
                        })
                    })
                ]
            }),
            /*#__PURE__*/ _jsx(Grid, {
                container: true,
                item: true,
                xs: 12,
                md: 4,
                sx: {
                    flexDirection: "column",
                    alignItems: "center"
                },
                children: events.map((event)=>/*#__PURE__*/ _jsx(Card, {
                        sx: {
                            mb: 2
                        },
                        children: /*#__PURE__*/ _jsxs(CardContent, {
                            children: [
                                /*#__PURE__*/ _jsx(Typography, {
                                    variant: "h6",
                                    gutterBottom: true,
                                    children: event.title
                                }),
                                /*#__PURE__*/ _jsxs(Typography, {
                                    variant: "body1",
                                    gutterBottom: true,
                                    children: [
                                        "Start Time: ",
                                        event.start
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs(Typography, {
                                    variant: "body1",
                                    gutterBottom: true,
                                    children: [
                                        "End Time: ",
                                        event.end
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs(Typography, {
                                    variant: "body1",
                                    gutterBottom: true,
                                    children: [
                                        "description: ",
                                        event.description
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs(Typography, {
                                    variant: "body1",
                                    gutterBottom: true,
                                    children: [
                                        "Link: ",
                                        event.link
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs(Box, {
                                    sx: {
                                        display: "flex",
                                        justifyContent: "flex-end",
                                        mt: 2
                                    },
                                    children: [
                                        /*#__PURE__*/ _jsx(IconButton, {
                                            "aria-label": "edit",
                                            sx: {
                                                mr: 1
                                            },
                                            onClick: ()=>handleEditClick(event),
                                            children: /*#__PURE__*/ _jsx(EditIcon, {})
                                        }),
                                        /*#__PURE__*/ _jsx(IconButton, {
                                            "aria-label": "delete",
                                            onClick: ()=>handleDeleteClick(event.id),
                                            children: /*#__PURE__*/ _jsx(DeleteIcon, {})
                                        })
                                    ]
                                })
                            ]
                        })
                    }, event.id))
            })
        ]
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (MyCalendar)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1974:
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
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _component_Instructors_Calendar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2482);
/* harmony import */ var _component_Loading___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7840);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_component_Instructors_InstSidebarr__WEBPACK_IMPORTED_MODULE_2__, _component_Instructors_InstNav__WEBPACK_IMPORTED_MODULE_3__, _component_Instructors_Calendar__WEBPACK_IMPORTED_MODULE_5__]);
([_component_Instructors_InstSidebarr__WEBPACK_IMPORTED_MODULE_2__, _component_Instructors_InstNav__WEBPACK_IMPORTED_MODULE_3__, _component_Instructors_Calendar__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const CalendarPage = ()=>{
    const [search, setSearch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setTimeout(()=>{
            setLoading(false);
        }, 2000); // Set timeout to 2 seconds
    }, []);
    if (loading) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Loading___WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}); // Render Loading component
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Instructors_InstNav__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    setCourseSearch: setSearch
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Stack, {
                    direction: "row",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Instructors_InstSidebarr__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            style: {
                                display: "flex",
                                alignItems: "center",
                                margin: "px 0 0 0",
                                width: "100%"
                            },
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                flexGrow: 1,
                                height: "calc(100vh - 64px)",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        children: "Instructor Calendar"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Instructors_Calendar__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CalendarPage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1883:
/***/ ((module) => {

module.exports = require("@mui/icons-material/AccountCircle");

/***/ }),

/***/ 7248:
/***/ ((module) => {

module.exports = require("@mui/icons-material/AddAPhoto");

/***/ }),

/***/ 5643:
/***/ ((module) => {

module.exports = require("@mui/icons-material/AutoStories");

/***/ }),

/***/ 7226:
/***/ ((module) => {

module.exports = require("@mui/icons-material/CalendarMonth");

/***/ }),

/***/ 3188:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Delete");

/***/ }),

/***/ 6902:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Edit");

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

/***/ 8611:
/***/ ((module) => {

module.exports = require("@mui/material/Dialog");

/***/ }),

/***/ 9404:
/***/ ((module) => {

module.exports = require("@mui/material/DialogActions");

/***/ }),

/***/ 1094:
/***/ ((module) => {

module.exports = require("@mui/material/DialogContent");

/***/ }),

/***/ 2468:
/***/ ((module) => {

module.exports = require("@mui/material/DialogTitle");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 9931:
/***/ ((module) => {

module.exports = require("react-modal");

/***/ }),

/***/ 7945:
/***/ ((module) => {

module.exports = require("react-typewriter-hook");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 5503:
/***/ ((module) => {

module.exports = import("@fullcalendar/daygrid");;

/***/ }),

/***/ 1103:
/***/ ((module) => {

module.exports = import("@fullcalendar/interaction");;

/***/ }),

/***/ 9870:
/***/ ((module) => {

module.exports = import("@fullcalendar/react");;

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
var __webpack_exports__ = __webpack_require__.X(0, [6216,7840,8083], () => (__webpack_exec__(1974)));
module.exports = __webpack_exports__;

})();