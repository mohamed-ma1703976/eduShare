"use strict";
exports.id = 2124;
exports.ids = [2124];
exports.modules = {

/***/ 2124:
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
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1492);
/* harmony import */ var _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6216);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_firestore__WEBPACK_IMPORTED_MODULE_3__, _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_4__]);
([firebase_firestore__WEBPACK_IMPORTED_MODULE_3__, _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





function SendMessage({ open , handleClose , toId , fN , lN  }) {
    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [inst, setInstructor] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    //const senderName = auth.currentUser.displayName;
    async function fetchInstructors() {
        const instructorsCollection = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_4__.db, "Instructor");
        const instructorsSnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDocs)(instructorsCollection);
        const instructorsList = instructorsSnapshot.docs.map((doc)=>({
                id: doc.id,
                attributes: doc.data()
            }));
        setInstructor(instructorsList);
    }
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        fetchInstructors();
    }, []);
    const senderId = _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_4__/* .auth */ .I8?.currentUser?.uid;
    const senderName = inst.find((s)=>s.id === senderId)?.attributes?.displayName;
    console.log(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_4__/* .auth */ .I8?.currentUser);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        console.log(senderName);
        const messageData = {
            fromId: senderId,
            fromName: senderName,
            toId: toId,
            message: message,
            timestamp: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.serverTimestamp)(),
            toFirstName: fN,
            toLastName: lN
        };
        // await addDoc(collection(db, 'Message'), messageData);
        const messagwColl = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_4__.db, "Message");
        await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.addDoc)(messagwColl, messageData);
        setMessage("");
        handleClose();
    };
    const handleChange = (e)=>{
        setMessage(e.target.value);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Dialog, {
        open: open,
        onClose: handleClose,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.DialogTitle, {
                children: "Send a message"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                onSubmit: handleSubmit,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.DialogContent, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.TextField, {
                            autoFocus: true,
                            margin: "dense",
                            label: "Message",
                            fullWidth: true,
                            value: message,
                            onChange: handleChange
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.DialogActions, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                onClick: handleClose,
                                children: "Cancel"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                type: "submit",
                                children: "Send"
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SendMessage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;