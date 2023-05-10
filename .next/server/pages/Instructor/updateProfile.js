"use strict";
(() => {
var exports = {};
exports.id = 7727;
exports.ids = [7727];
exports.modules = {

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


/***/ }),

/***/ 6716:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ getUserRole)
/* harmony export */ });
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1492);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_firestore__WEBPACK_IMPORTED_MODULE_0__]);
firebase_firestore__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

async function getUserRole(userId, app) {
    if (!userId) {
        throw new Error("userId is null or undefined.");
    }
    const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getFirestore)(app);
    const studentDocRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(db, "Student", userId);
    const studentDoc = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getDoc)(studentDocRef);
    const instructorDocRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(db, "Instructor", userId);
    const instructorDoc = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getDoc)(instructorDocRef);
    const adminDocRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(db, "Admin", userId);
    const adminDoc = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getDoc)(adminDocRef);
    let role;
    if (studentDoc.exists()) {
        role = "Student";
    } else if (instructorDoc.exists()) {
        role = "Instructor";
    } else if (adminDoc.exists()) {
        role = "Admin";
    } else {
        throw new Error("User not found in any role collection.");
    }
    return role;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1560:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UpdateInstructorProfile)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_AuthProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5242);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6216);
/* harmony import */ var _hooks_getRole__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6716);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1492);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3392);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_5__, _hooks_getRole__WEBPACK_IMPORTED_MODULE_6__, firebase_firestore__WEBPACK_IMPORTED_MODULE_7__, firebase_storage__WEBPACK_IMPORTED_MODULE_8__]);
([_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_5__, _hooks_getRole__WEBPACK_IMPORTED_MODULE_6__, firebase_firestore__WEBPACK_IMPORTED_MODULE_7__, firebase_storage__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









function UpdateInstructorProfile() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { userId  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_hooks_AuthProvider__WEBPACK_IMPORTED_MODULE_3__/* .AuthContext */ .V);
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const [profileData, setProfileData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        displayName: "",
        bio: "",
        title: "",
        profilePicture: null,
        coverPicture: null
    });
    const [profilePicturePreview, setProfilePicturePreview] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [coverPicturePreview, setCoverPicturePreview] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    // Fetch user data and set the initial state
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        async function fetchUserData() {
            const userRole = await (0,_hooks_getRole__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(userId, _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_5__/* .app */ .l2);
            if (!userId || !userRole) {
                router.push("/");
                return;
            }
            const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.getFirestore)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_5__/* .app */ .l2);
            const userDocRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.doc)(db, userRole, userId);
            const userDoc = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.getDoc)(userDocRef);
            if (userDoc.exists()) {
                let data = userDoc.data();
                setProfileData({
                    displayName: data.displayName,
                    bio: data.bio,
                    title: data.title,
                    profilePicture: data.profilePicture,
                    coverPicture: data.coverPicture
                });
                setProfilePicturePreview(data.profilePicture);
                setCoverPicturePreview(data.coverPicture);
                setLoading(false);
            }
        }
        fetchUserData();
    }, [
        userId,
        router
    ]);
    const handleChange = (e)=>{
        const { name , value  } = e.target;
        setProfileData((prevData)=>({
                ...prevData,
                [name]: value
            }));
    };
    const handleProfilePictureChange = (e)=>{
        const file = e.target.files[0];
        if (file) {
            setProfileData((prevData)=>({
                    ...prevData,
                    profilePicture: file
                }));
            setProfilePicturePreview(URL.createObjectURL(file));
        }
    };
    const handleCoverPictureChange = (e)=>{
        const file = e.target.files[0];
        if (file) {
            setProfileData((prevData)=>({
                    ...prevData,
                    coverPicture: file
                }));
            setCoverPicturePreview(URL.createObjectURL(file));
        }
    };
    const uploadImage = async (image, path)=>{
        if (image instanceof File) {
            const storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_8__.getStorage)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_5__/* .app */ .l2);
            const imageRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_8__.ref)(storage, path);
            await (0,firebase_storage__WEBPACK_IMPORTED_MODULE_8__.uploadBytes)(imageRef, image);
            return await (0,firebase_storage__WEBPACK_IMPORTED_MODULE_8__.getDownloadURL)(imageRef);
        } else {
            return image;
        }
    };
    const handleUpdateProfile = async ()=>{
        setLoading(true);
        const userRole = await (0,_hooks_getRole__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(userId, _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_5__/* .app */ .l2);
        const profilePictureURL = await uploadImage(profileData.profilePicture, `${userRole}/${userId}/profilePicture`);
        const coverPictureURL = await uploadImage(profileData.coverPicture, `${userRole}/${userId}/coverPicture`);
        const updatedProfileData = {
            ...profileData,
            profilePicture: profilePictureURL,
            coverPicture: coverPictureURL
        };
        const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.getFirestore)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_5__/* .app */ .l2);
        const userDocRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.doc)(db, userRole, userId);
        await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.updateDoc)(userDocRef, updatedProfileData);
        setLoading(false);
        router.push("/Instructor/profile");
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Grid, {
        container: true,
        justifyContent: "center",
        alignItems: "center",
        style: {
            backgroundImage: `url(${"https://i.ibb.co/6bJ0VFb/Background.jpg"})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "100%",
            width: "100%"
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Paper, {
            sx: {
                width: {
                    xs: "90%",
                    sm: 500
                },
                minHeight: {
                    xs: "80%",
                    sm: 650
                },
                backgroundColor: "white",
                padding: 5,
                pb: 10,
                boxShadow: {
                    xs: "none",
                    md: "0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)"
                }
            },
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Stack, {
                direction: "column",
                gap: 2,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                        variant: "h4",
                        sx: {
                            color: "#454545",
                            fontWeight: "800",
                            textAlign: "center"
                        },
                        children: "Update Profile"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            margin: "10px 10px 10px 10px"
                        },
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Stack, {
                            spacing: 3,
                            padding: 3,
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                    sx: {
                                        textAlign: "center"
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: coverPicturePreview,
                                            alt: "Cover Picture",
                                            style: {
                                                width: "100%",
                                                height: "auto",
                                                cursor: "pointer"
                                            },
                                            onClick: ()=>document.getElementById("coverPictureInput").click()
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            type: "file",
                                            accept: "image/*",
                                            id: "coverPictureInput",
                                            hidden: true,
                                            onChange: handleCoverPictureChange
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                    sx: {
                                        textAlign: "center"
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Avatar, {
                                            src: profilePicturePreview,
                                            alt: "Profile Picture",
                                            sx: {
                                                width: 140,
                                                height: 140,
                                                marginBottom: 2,
                                                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                                                border: "4px solid #ffffff",
                                                position: "relative",
                                                top: "-70px"
                                            },
                                            onClick: ()=>document.getElementById("profilePictureInput").click()
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            type: "file",
                                            accept: "image/*",
                                            id: "profilePictureInput",
                                            hidden: true,
                                            onChange: handleProfilePictureChange
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TextField, {
                                    fullWidth: true,
                                    name: "displayName",
                                    label: "Display Name",
                                    value: profileData.displayName,
                                    onChange: handleChange
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TextField, {
                                    fullWidth: true,
                                    name: "title",
                                    label: "Title",
                                    value: profileData.title,
                                    onChange: handleChange
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TextField, {
                                    fullWidth: true,
                                    name: "bio",
                                    label: "Bio",
                                    multiline: true,
                                    rows: 4,
                                    value: profileData.bio,
                                    onChange: handleChange
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Button, {
                                    fullWidth: true,
                                    variant: "contained",
                                    color: "primary",
                                    disabled: loading,
                                    onClick: handleUpdateProfile,
                                    children: "Update Profile"
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [6216], () => (__webpack_exec__(1560)));
module.exports = __webpack_exports__;

})();