"use strict";
exports.id = 3380;
exports.ids = [3380];
exports.modules = {

/***/ 3380:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ InstructorsAchivementCards)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8167);
/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Card__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8455);
/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6216);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1492);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6197);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_5__, firebase_firestore__WEBPACK_IMPORTED_MODULE_6__, framer_motion__WEBPACK_IMPORTED_MODULE_9__]);
([_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_5__, firebase_firestore__WEBPACK_IMPORTED_MODULE_6__, framer_motion__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











function InstructorsAchivementCards() {
    const [achivment, setAchivment] = react__WEBPACK_IMPORTED_MODULE_1__.useState([]);
    const [instructor, setInstructor] = react__WEBPACK_IMPORTED_MODULE_1__.useState([]);
    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>{
        const fetchAchivment = async ()=>{
            const studentCollection = (0,_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_5__/* .collection */ .hJ)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_5__.db, "AchievementCard");
            const studentSnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.getDocs)(studentCollection);
            const studentList = studentSnapshot.docs.map((doc)=>({
                    id: doc.id,
                    attributes: doc.data()
                }));
            setAchivment(studentList);
        };
        const fetchInstructors = async ()=>{
            const studentCollection = (0,_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_5__/* .collection */ .hJ)(_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_5__.db, "Instructor");
            const studentSnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.getDocs)(studentCollection);
            const studentList = studentSnapshot.docs.map((doc)=>({
                    id: doc.id,
                    attributes: doc.data()
                }));
            setInstructor(studentList);
        };
        fetchAchivment();
        fetchInstructors();
    }, []);
    const containerVariants = {
        initial: {},
        animate: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };
    const cardVariants = {
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0
        }
    };
    const mediaVariants = {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        }
    };
    const titleVariants = {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        }
    };
    const subtitleVariants = {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Box, {
            sx: {
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center"
            },
            children: achivment.map((a)=>{
                // Find matching instructor object based on first name
                const matchingInstructor = instructor.find((i)=>a.attributes.name.split(" ")[0] === i.attributes.firstName);
                // Check if the instructor ID exists in the Achievement Collection
                if (matchingInstructor && matchingInstructor.id === a.attributes.id) {
                    // Get coverPicture URL
                    const coverPictureUrl = matchingInstructor.attributes.coverPicture;
                    const cardVariants = {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        }
                    };
                    const imageVariants = {
                        initial: {
                            opacity: 0,
                            scale: 0.5
                        },
                        animate: {
                            opacity: 1,
                            scale: 1
                        }
                    };
                    const contentVariants = {
                        initial: {
                            opacity: 0,
                            y: 10
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        }
                    };
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_10___default()), {
                        href: `/Profile/${matchingInstructor.id}`,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.ButtonBase, {
                            component: "div",
                            sx: {
                                textDecoration: "none",
                                color: "inherit"
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {
                                initial: "initial",
                                animate: "animate",
                                variants: cardVariants,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Card__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    sx: {
                                        display: "flex",
                                        flexDirection: "column",
                                        Height: "100",
                                        cursor: "pointer",
                                        Width: "300px",
                                        margin: "10px 20px 0 0",
                                        backgroundColor: "#f5f5f5"
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {
                                            variants: imageVariants,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.CardMedia, {
                                                component: "img",
                                                height: "100",
                                                image: coverPictureUrl,
                                                alt: a.attributes.name,
                                                style: {
                                                    maxHeight: "200px",
                                                    width: "1000px"
                                                }
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            sx: {
                                                flex: 1
                                            },
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {
                                                variants: contentVariants,
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                        gutterBottom: true,
                                                        variant: "subtitle2",
                                                        component: "div",
                                                        children: [
                                                            "Instructor Name: ",
                                                            a.attributes.name
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                        variant: "subtitle2",
                                                        color: "text.secondary",
                                                        children: a.attributes.achievementcard
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            })
                        })
                    }, a.id);
                } else {
                    return null; // If instructor ID doesn't match, return null to skip rendering the Achievement Card
                }
            })
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;