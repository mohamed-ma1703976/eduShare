"use strict";
exports.id = 6216;
exports.ids = [6216];
exports.modules = {

/***/ 6216:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I8": () => (/* binding */ auth),
/* harmony export */   "Kg": () => (/* binding */ getFirestoreTimestamp),
/* harmony export */   "db": () => (/* binding */ db),
/* harmony export */   "hJ": () => (/* reexport safe */ firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection),
/* harmony export */   "l2": () => (/* binding */ app),
/* harmony export */   "tO": () => (/* binding */ storage)
/* harmony export */ });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3745);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1492);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(401);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3392);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__, firebase_auth__WEBPACK_IMPORTED_MODULE_2__, firebase_storage__WEBPACK_IMPORTED_MODULE_3__]);
([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__, firebase_auth__WEBPACK_IMPORTED_MODULE_2__, firebase_storage__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



 // Import the storage module

const firebaseConfig = {
    apiKey: "AIzaSyC-ZYyj3mpgKszGlMQmETjBuBCqzYGFDh4",
    authDomain: "edushare-e9242.firebaseapp.com",
    projectId: "edushare-e9242",
    storageBucket: "edushare-e9242.appspot.com",
    messagingSenderId: "826723606155",
    appId: "1:826723606155:web:4ef2868e093bc281523e8e",
    measurementId: "G-BGCNB10FJ0"
};
// Initialize Firebase
const app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);
const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)(app);
const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)(app);
const storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.getStorage)(app); // Get the storage instance
const getFirestoreTimestamp = ()=>{
    return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.serverTimestamp)();
};


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;