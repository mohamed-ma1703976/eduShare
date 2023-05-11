"use strict";
(() => {
var exports = {};
exports.id = 3541;
exports.ids = [3541];
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

/***/ 9088:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CreateProfile)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_AuthProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5242);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7915);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7986);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_system__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6216);
/* harmony import */ var _hooks_getRole__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6716);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1492);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3392);
/* harmony import */ var _mui_icons_material_AddAPhoto__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7248);
/* harmony import */ var _mui_icons_material_AddAPhoto__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_AddAPhoto__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_6__, _hooks_getRole__WEBPACK_IMPORTED_MODULE_7__, firebase_firestore__WEBPACK_IMPORTED_MODULE_8__, firebase_storage__WEBPACK_IMPORTED_MODULE_9__]);
([_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_6__, _hooks_getRole__WEBPACK_IMPORTED_MODULE_7__, firebase_firestore__WEBPACK_IMPORTED_MODULE_8__, firebase_storage__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// createProfile.js













function CreateProfile() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    const { userId  } = (0,react__WEBPACK_IMPORTED_MODULE_11__.useContext)(_hooks_AuthProvider__WEBPACK_IMPORTED_MODULE_1__/* .AuthContext */ .V); // Move this line here  
    const [profilePicturePreview, setProfilePicturePreview] = (0,react__WEBPACK_IMPORTED_MODULE_11__.useState)(null);
    const [coverPicturePreview, setCoverPicturePreview] = (0,react__WEBPACK_IMPORTED_MODULE_11__.useState)(null);
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_11__.useState)(null);
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_11__.useState)(false);
    const [profileData, setProfileData] = (0,react__WEBPACK_IMPORTED_MODULE_11__.useState)({
        displayName: "",
        bio: "",
        profilePicture: null,
        coverPicture: null,
        role: "",
        collection: "",
        title: ""
    });
    const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.getFirestore)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_6__/* .app */ .l2);
    //const userRef = doc(db, "Users", userId);
    const userid = _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_6__/* .auth */ .I8?.currentUser?.uid;
    (0,react__WEBPACK_IMPORTED_MODULE_11__.useEffect)(()=>{
        if (!userid) console.log("user id is not defined"); // Don't proceed if userId is not set yet
        async function fetchUserRole() {
            const userRole = await (0,_hooks_getRole__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(userid, _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_6__/* .app */ .l2);
            if (userRole) {
                setProfileData((prevData)=>({
                        ...prevData,
                        role: userRole,
                        collection: userRole === "Student" ? "Student" : "Instructor"
                    }));
            }
        }
        fetchUserRole();
    }, [
        userid
    ]);
    function validateProfileData(data) {
        if (!data.displayName || !data.bio || !data.title) {
            return "All fields are required.";
        }
        return null;
    }
    async function handleSave(e) {
        e.preventDefault();
        setLoading(true);
        const { displayName , bio , title , profilePicture , coverPicture  } = profileData;
        try {
            const updatedProfileData = {
                displayName: displayName.trim(),
                bio: bio.trim(),
                title: title.trim()
            };
            const validationError = validateProfileData(updatedProfileData);
            if (validationError) {
                setError(validationError);
                setLoading(false);
                return;
            }
            // Upload images to Firebase storage and get the download URLs
            const storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_9__.getStorage)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_6__/* .app */ .l2);
            let profilePictureURL, coverPictureURL;
            if (profilePicture) {
                const profilePictureRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_9__.ref)(storage, `profilePictures/${userid}`);
                await (0,firebase_storage__WEBPACK_IMPORTED_MODULE_9__.uploadBytes)(profilePictureRef, profilePicture);
                profilePictureURL = await (0,firebase_storage__WEBPACK_IMPORTED_MODULE_9__.getDownloadURL)(profilePictureRef);
            }
            if (coverPicture) {
                const coverPictureRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_9__.ref)(storage, `coverPictures/${userid}`);
                await (0,firebase_storage__WEBPACK_IMPORTED_MODULE_9__.uploadBytes)(coverPictureRef, coverPicture);
                coverPictureURL = await (0,firebase_storage__WEBPACK_IMPORTED_MODULE_9__.getDownloadURL)(coverPictureRef);
            }
            // Save the profile data in the appropriate collection
            const collectionRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.collection)(db, profileData.collection);
            const userDocRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.doc)(db, profileData.collection, userid);
            await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.updateDoc)(userDocRef, {
                displayName: updatedProfileData.displayName,
                bio: updatedProfileData.bio,
                title: updatedProfileData.title,
                ...profilePictureURL && {
                    profilePicture: profilePictureURL
                },
                ...coverPictureURL && {
                    coverPicture: coverPictureURL
                }
            });
            const userRole = await (0,_hooks_getRole__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(userid, _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_6__/* .app */ .l2);
            if (userRole === "Student") {
                router.push("/Student");
            } else if (userRole === "Instructor") {
                router.push("/Instructor");
            } else {
                router.push("/Admin");
            }
            setLoading(false);
        } catch (error) {
            console.log(error);
            setError("An error occurred while saving your profile.");
            setLoading(false);
        }
    }
    const handleInputChange = (event)=>{
        const { name , value  } = event.target;
        setProfileData({
            ...profileData,
            [name]: value
        });
    };
    const handleFileInputChange = (event, type)=>{
        const file = event.target.files[0];
        if (file) {
            setProfileData({
                ...profileData,
                [type]: file
            });
            const reader = new FileReader();
            reader.onloadend = ()=>{
                if (type === "profilePicture") {
                    setProfilePicturePreview(reader.result);
                } else {
                    setCoverPicturePreview(reader.result); // Update coverPicturePreview state
                }
            };
            reader.readAsDataURL(file);
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
        container: true,
        justifyContent: "center",
        alignItems: "center",
        style: {
            backgroundImage: `url(${"https://i.ibb.co/6bJ0VFb/Background.jpg"})`,
            backgroundSize: "cover",
            height: "100vh",
            width: "100vw"
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Paper, {
            sx: {
                width: 500,
                height: 650,
                backgroundColor: "white",
                padding: 5,
                pb: 10,
                boxShadow: {
                    xs: "none",
                    md: "0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)"
                }
            },
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                direction: "column",
                gap: 2,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                        variant: "h4",
                        sx: {
                            color: "#454545",
                            fontWeight: "800",
                            textAlign: "center"
                        },
                        children: "Create Profile"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            margin: "10px 10px 10px 10px"
                        },
                        onSubmit: handleSave,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_system__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                component: "div",
                                width: "100%",
                                height: "200px",
                                style: {
                                    backgroundImage: `url(${coverPicturePreview || "/path/to/default/cover/picture"})`,
                                    backgroundSize: "cover",
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "center center",
                                    cursor: "pointer",
                                    position: "relative"
                                },
                                onClick: ()=>document.getElementById("coverPicture").click(),
                                children: !coverPicturePreview && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_system__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    width: "100%",
                                    height: "100%",
                                    style: {
                                        background: "rgba(128, 128, 128, 0.5)"
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_AddAPhoto__WEBPACK_IMPORTED_MODULE_10___default()), {})
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "file",
                                id: "coverPicture",
                                name: "coverPicture",
                                style: {
                                    display: "none"
                                },
                                onChange: (e)=>handleFileInputChange(e, "coverPicture")
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_system__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                display: "flex",
                                justifyContent: "center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Avatar, {
                                        src: profilePicturePreview,
                                        sx: {
                                            width: 100,
                                            height: 100,
                                            cursor: "pointer"
                                        },
                                        onClick: ()=>document.getElementById("profilePicture").click(),
                                        children: !profilePicturePreview && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_AddAPhoto__WEBPACK_IMPORTED_MODULE_10___default()), {})
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "file",
                                        id: "profilePicture",
                                        name: "profilePicture",
                                        style: {
                                            display: "none"
                                        },
                                        onChange: (e)=>handleFileInputChange(e, "profilePicture")
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.TextField, {
                                id: "title",
                                label: "Title",
                                variant: "outlined",
                                name: "title",
                                value: profileData.title,
                                onChange: handleInputChange,
                                sx: {
                                    margin: "10px 10px 10px 10px"
                                }
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.TextField, {
                                id: "displayName",
                                label: "Display Name",
                                variant: "outlined",
                                name: "displayName",
                                value: profileData.displayName,
                                onChange: handleInputChange,
                                sx: {
                                    margin: "10px 10px 10px 10px"
                                }
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.TextField, {
                                id: "bio",
                                label: "Bio",
                                variant: "outlined",
                                name: "bio",
                                value: profileData.bio,
                                onChange: handleInputChange,
                                sx: {
                                    margin: "10px 10px 10px 10px"
                                }
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                sx: {
                                    backgroundColor: "#00adb5",
                                    height: 45,
                                    fontSize: 22,
                                    fontWeight: "bold"
                                },
                                variant: "contained",
                                type: "submit",
                                children: "Save Profile"
                            })
                        ]
                    })
                ]
            })
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7915:
/***/ ((module) => {

module.exports = require("@mui/icons-material");

/***/ }),

/***/ 7248:
/***/ ((module) => {

module.exports = require("@mui/icons-material/AddAPhoto");

/***/ }),

/***/ 5692:
/***/ ((module) => {

module.exports = require("@mui/material");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [6216], () => (__webpack_exec__(9088)));
module.exports = __webpack_exports__;

})();