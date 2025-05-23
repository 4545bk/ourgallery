(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_fa086325._.js", {

"[project]/app/gallery/MemoryCard.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "answerInput": "MemoryCard-module__H8OZ3G__answerInput",
  "bounce": "MemoryCard-module__H8OZ3G__bounce",
  "bounceIn": "MemoryCard-module__H8OZ3G__bounceIn",
  "card": "MemoryCard-module__H8OZ3G__card",
  "cardBack": "MemoryCard-module__H8OZ3G__cardBack",
  "cardFront": "MemoryCard-module__H8OZ3G__cardFront",
  "cardInner": "MemoryCard-module__H8OZ3G__cardInner",
  "flip": "MemoryCard-module__H8OZ3G__flip",
  "flipped": "MemoryCard-module__H8OZ3G__flipped",
  "name": "MemoryCard-module__H8OZ3G__name",
  "photo": "MemoryCard-module__H8OZ3G__photo",
  "questionForm": "MemoryCard-module__H8OZ3G__questionForm",
  "shake": "MemoryCard-module__H8OZ3G__shake",
  "spin": "MemoryCard-module__H8OZ3G__spin",
  "submitButton": "MemoryCard-module__H8OZ3G__submitButton",
});
}}),
"[project]/app/gallery/MemoryCard.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$gallery$2f$MemoryCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/gallery/MemoryCard.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const MemoryCard = ({ member, onAnswer })=>{
    _s();
    const [showFact, setShowFact] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(!member.flipped); // Initial state from member.flipped
    const [shake, setShake] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [spin, setSpin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [answer, setAnswer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // Sync showFact with member.flipped whenever member changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MemoryCard.useEffect": ()=>{
            setShowFact(!member.flipped);
        }
    }["MemoryCard.useEffect"], [
        member.flipped
    ]);
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log("Submitting - Answer:", answer);
        onAnswer(member.index, answer, ()=>{
            setShowFact(false); // Flip to photo side if correct
            setAnswer(""); // Clear input
        });
    };
    const handleHover = ()=>setSpin(Math.random() > 0.5);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$gallery$2f$MemoryCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card} ${showFact ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$gallery$2f$MemoryCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].flipped : ""} ${shake ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$gallery$2f$MemoryCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].shake : ""} ${spin ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$gallery$2f$MemoryCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].spin : ""}`,
        onMouseEnter: handleHover,
        onMouseLeave: ()=>setSpin(false),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$gallery$2f$MemoryCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardInner,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$gallery$2f$MemoryCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardFront,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: member.photo,
                            alt: member.name,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$gallery$2f$MemoryCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].photo
                        }, void 0, false, {
                            fileName: "[project]/app/gallery/MemoryCard.js",
                            lineNumber: 36,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$gallery$2f$MemoryCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].name,
                            children: member.name
                        }, void 0, false, {
                            fileName: "[project]/app/gallery/MemoryCard.js",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/gallery/MemoryCard.js",
                    lineNumber: 35,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$gallery$2f$MemoryCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardBack,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleSubmit,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$gallery$2f$MemoryCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].questionForm,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: member.question
                            }, void 0, false, {
                                fileName: "[project]/app/gallery/MemoryCard.js",
                                lineNumber: 41,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                value: answer,
                                onChange: (e)=>setAnswer(e.target.value),
                                placeholder: "Your answer...",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$gallery$2f$MemoryCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].answerInput
                            }, void 0, false, {
                                fileName: "[project]/app/gallery/MemoryCard.js",
                                lineNumber: 42,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$gallery$2f$MemoryCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].submitButton,
                                children: "Guess!"
                            }, void 0, false, {
                                fileName: "[project]/app/gallery/MemoryCard.js",
                                lineNumber: 49,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/gallery/MemoryCard.js",
                        lineNumber: 40,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/gallery/MemoryCard.js",
                    lineNumber: 39,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/gallery/MemoryCard.js",
            lineNumber: 34,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/gallery/MemoryCard.js",
        lineNumber: 29,
        columnNumber: 5
    }, this);
};
_s(MemoryCard, "V9ETTh21zGatuBHkrjBMXZKLDtI=");
_c = MemoryCard;
const __TURBOPACK__default__export__ = MemoryCard;
var _c;
__turbopack_context__.k.register(_c, "MemoryCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/gallery/page.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Gallery)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$gallery$2f$MemoryCard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/gallery/MemoryCard.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Gallery() {
    _s();
    const [disco, setDisco] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isAudioPlaying, setIsAudioPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [totalScore, setTotalScore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [allFlipped, setAllFlipped] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const initialFamilyMembers = [
        {
            name: "Ayano Fam 🙌",
            photo: "/images/natnael.jpg",
            question: "What flies but has no wings?",
            answer: "Time",
            audio: "/sounds/whenteenager.mp3",
            index: 0,
            flipped: false
        },
        {
            name: "Gelilu",
            photo: "/images/cousin1.jpg",
            question: "What has keys but can’t open locks?",
            answer: "Piano",
            audio: "/sounds/workwork.mp3",
            index: 1,
            flipped: false
        },
        {
            name: "Wanted!",
            photo: "/images/cousin2.jpg",
            question: "What do you call someone who breaks the law?",
            answer: "Criminal",
            audio: "/sounds/criminal.mp3",
            index: 2,
            flipped: false
        },
        {
            name: "Happy☺️",
            photo: "/images/foto (3).jpg",
            question: "What gets wetter the more it dries?",
            answer: "Towel",
            audio: "/sounds/emenem.mp3",
            index: 3,
            flipped: false
        },
        {
            name: "ጫልቱጫላ ይልሀል እዚጋ",
            photo: "/images/foto (4).jpg",
            question: "Who grows crops and raises livestock for a living?",
            answer: "Farmer",
            audio: "/sounds/azmeraw.mp3",
            index: 4,
            flipped: false
        },
        {
            name: "Ever since i was a kid😢",
            photo: "/images/foto (5).jpg",
            question: "What do you call someone who is famous for great achievements and remembered for generations?starts L",
            answer: "Legend",
            audio: "/sounds/eversince.mp3",
            index: 5,
            flipped: false
        },
        {
            name: " The one and the only",
            photo: "/images/foto (6).jpg",
            question: "Ethiopian Singer Next to Tilahun Gessesse (i need full name)",
            answer: "Dawit Tsige",
            audio: "/sounds/gelawa.mp3",
            index: 6,
            flipped: false
        },
        {
            name: "Nigga😁😁",
            photo: "/images/foto (7).jpg",
            question: "What do you call a person who performs hip-hop music with rhythm and poetry?",
            answer: "Rapper",
            audio: "/sounds/rap1.mp3",
            index: 7,
            flipped: false
        },
        {
            name: "Simple",
            photo: "/images/foto (8).jpg",
            question: "What has hands but can’t clap?",
            answer: "Clock",
            audio: "/sounds/workwork.mp3",
            index: 8,
            flipped: false
        },
        {
            name: "Moderate",
            photo: "/images/foto (9).jpg",
            question: "What can you break, even if you never pick it up?",
            answer: "Promise",
            audio: "/sounds/rap2.mp3",
            index: 9,
            flipped: false
        },
        {
            name: "Simple",
            photo: "/images/foto (10).jpg",
            question: "What has a face and two hands but no arms or legs?",
            answer: "Clock",
            audio: "/sounds/rap3.mp3",
            index: 10,
            flipped: false
        },
        {
            name: "Moderate",
            photo: "/images/foto (11).jpg",
            question: "What has to be broken before you can use it?",
            answer: "Egg",
            audio: "/sounds/rap4.mp3",
            index: 11,
            flipped: false
        },
        {
            name: "Hard",
            photo: "/images/foto (12).jpg",
            question: "What has an endless supply of letters but starts empty?",
            answer: "Mailbox",
            audio: "/sounds/rap1.mp3",
            index: 12,
            flipped: false
        },
        {
            name: "Moderate",
            photo: "/images/foto (13).jpg",
            question: "What gets bigger the more you take away?",
            answer: "Hole",
            audio: "/sounds/rap2.mp3",
            index: 13,
            flipped: false
        },
        {
            name: "Simple",
            photo: "/images/foto (14).jpg",
            question: "What can you hold without touching it?",
            answer: "Breath",
            audio: "/sounds/rap3.mp3",
            index: 14,
            flipped: false
        },
        {
            name: "Moderate",
            photo: "/images/foto (15).jpg",
            question: "What has ears but can’t hear?",
            answer: "Corn",
            audio: "/sounds/rap4.mp3",
            index: 15,
            flipped: false
        },
        {
            name: "Hard",
            photo: "/images/foto (16).jpg",
            question: "What can travel around the world while staying in the same place?",
            answer: "Stamp",
            audio: "/sounds/rap1.mp3",
            index: 16,
            flipped: false
        },
        {
            name: "Simple",
            photo: "/images/foto (17).jpg",
            question: "What has one eye but can’t see?",
            answer: "Needle",
            audio: "/sounds/rap2.mp3",
            index: 17,
            flipped: false
        },
        {
            name: "Son of Mary ❤️",
            photo: "/images/foto (18).jpg",
            question: "Who is our God?",
            answer: "Jesus",
            audio: "/sounds/yarejal.mp3",
            index: 18,
            flipped: false
        },
        {
            name: "Bang",
            photo: "/images/foto (19).jpg",
            question: "What comes down but never goes up?",
            answer: "Rain",
            audio: "/sounds/rap4.mp3",
            index: 19,
            flipped: false
        },
        {
            name: "Hard",
            photo: "/images/foto (20).jpg",
            question: "What has a thumb and four fingers but isn’t alive?",
            answer: "Glove",
            audio: "/sounds/rap1.mp3",
            index: 20,
            flipped: false
        },
        {
            name: "Simple",
            photo: "/images/foto (21).jpg",
            question: "What can fill a room but takes up no space?",
            answer: "Light",
            audio: "/sounds/rap2.mp3",
            index: 21,
            flipped: false
        },
        {
            name: "Catch me if u can",
            photo: "/images/foto (22).jpg",
            question: "What has a neck but no head?",
            answer: "Bottle",
            audio: "/sounds/rap3.mp3",
            index: 22,
            flipped: false
        },
        {
            name: "Life is Simple",
            photo: "/images/foto (23).jpg",
            question: "What has hands but can’t clap?",
            answer: "Clock",
            audio: "/sounds/rap4.mp3",
            index: 23,
            flipped: false
        },
        {
            name: "am a Killer",
            photo: "/images/IMG_8456 (1).jpg",
            question: "Who is Ababa's Grandfather Name?",
            answer: "Geda",
            audio: "/sounds/sixninesong.mp3",
            index: 24,
            flipped: false
        },
        {
            name: "why u stare at me?",
            photo: "/images/IMG_8508 (2).jpg",
            question: "What has teeth but can’t bite?",
            answer: "comb",
            audio: "/sounds/diidycome.mp3",
            index: 25,
            flipped: false
        }
    ];
    const [cards, setCards] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialFamilyMembers);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Gallery.useEffect": ()=>{
            const savedScore = Number(localStorage.getItem('totalScore')) || 0;
            const savedCards = localStorage.getItem('galleryCards');
            setTotalScore(savedScore);
            if (savedCards) {
                setCards(JSON.parse(savedCards));
            }
        }
    }["Gallery.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Gallery.useEffect": ()=>{
            const confetti = {
                "Gallery.useEffect.confetti": ()=>{
                    const colors = [
                        "#ff6b6b",
                        "#4ecdc4",
                        "#45b7d1",
                        "#96c93d",
                        "#f7d794"
                    ];
                    for(let i = 0; i < 50; i++){
                        const div = document.createElement("div");
                        div.style.position = "fixed";
                        div.style.width = "10px";
                        div.style.height = "10px";
                        div.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                        div.style.left = Math.random() * 100 + "vw";
                        div.style.top = "-10px";
                        div.style.borderRadius = "50%";
                        div.style.zIndex = "1000";
                        document.body.appendChild(div);
                        div.animate([
                            {
                                transform: "translateY(0)",
                                opacity: 1
                            },
                            {
                                transform: `translateY(${window.innerHeight}px)`,
                                opacity: 0
                            }
                        ], {
                            duration: Math.random() * 2000 + 1000,
                            easing: "ease-out",
                            delay: Math.random() * 1000
                        }).onfinish = ({
                            "Gallery.useEffect.confetti": ()=>div.remove()
                        })["Gallery.useEffect.confetti"];
                    }
                }
            }["Gallery.useEffect.confetti"];
            const interval = setInterval(confetti, 3000);
            return ({
                "Gallery.useEffect": ()=>clearInterval(interval)
            })["Gallery.useEffect"];
        }
    }["Gallery.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Gallery.useEffect": ()=>{
            const styleSheet = document.createElement("style");
            styleSheet.textContent = `
      @keyframes pulse { 0% { transform: scale(1); } 50% { transform: scale(1.1); } 100% { transform: scale(1); } }
      @keyframes disco { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
      @keyframes shine {
        0% { text-shadow: 0 0 5px #ffd700, 0 0 10px #ffd700, 0 0 15px #fff; }
        50% { text-shadow: 0 0 10px #ffd700, 0 0 20px #ffd700, 0 0 30px #fff; }
        100% { text-shadow: 0 0 5px #ffd700, 0 0 10px #ffd700, 0 0 15px #fff; }
      }
    `;
            document.head.appendChild(styleSheet);
            return ({
                "Gallery.useEffect": ()=>document.head.removeChild(styleSheet)
            })["Gallery.useEffect"];
        }
    }["Gallery.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Gallery.useEffect": ()=>{
            localStorage.setItem('totalScore', totalScore);
            localStorage.setItem('galleryCards', JSON.stringify(cards));
        }
    }["Gallery.useEffect"], [
        totalScore,
        cards
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Gallery.useEffect": ()=>{
            const flippedCount = cards.filter({
                "Gallery.useEffect": (card)=>!card.flipped
            }["Gallery.useEffect"]).length;
            setAllFlipped(flippedCount === 0);
        }
    }["Gallery.useEffect"], [
        cards
    ]);
    const playSound = (soundFile, callback)=>{
        if ("TURBOPACK compile-time falsy", 0) {
            "TURBOPACK unreachable";
        } // Prevent Audio creation on server
        if (!isAudioPlaying) {
            setIsAudioPlaying(true);
            console.log(`Attempting to play ${soundFile}`);
            const audio = new Audio(soundFile);
            audio.onended = ()=>{
                console.log(`${soundFile} ended`);
                setIsAudioPlaying(false);
                if (callback) callback();
            };
            audio.play().then(()=>console.log(`${soundFile} started playing`)).catch((err)=>{
                console.error(`${soundFile} failed:`, err.message);
                setIsAudioPlaying(false);
                if (callback) callback();
            });
        } else {
            console.log(`Queuing ${soundFile} because audio is playing`);
            setTimeout(()=>playSound(soundFile, callback), 100);
        }
    };
    const handleAnswer = (index, userAnswer, flipCard)=>{
        console.log("Handling answer - Index:", index, "Answer:", userAnswer);
        if (userAnswer.trim().toLowerCase() === cards[index].answer.toLowerCase()) {
            setCards((prevCards)=>{
                const newCards = [
                    ...prevCards
                ];
                newCards[index].flipped = true;
                return newCards;
            });
            setTotalScore((prevScore)=>{
                const newScore = prevScore + 10;
                localStorage.setItem('totalScore', newScore);
                return newScore;
            });
            flipCard();
            playSound(cards[index].audio);
        } else {
            console.log("Wrong answer, no flip or sound");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            padding: "1rem",
            textAlign: "center",
            background: disco ? "linear-gradient(45deg, #ff00ff, #00ffff, #ffff00, #ff00ff)" : "linear-gradient(135deg, #ff6b6b, #4ecdc4, #45b7d1)",
            minHeight: "100vh",
            overflow: "hidden",
            transition: "background 0.5s ease",
            animation: disco ? "disco 2s infinite" : "none"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                style: {
                    fontSize: "clamp(2rem, 8vw, 4rem)",
                    color: "#fff",
                    fontFamily: "'Comic Sans MS', cursive",
                    textShadow: "3px 3px 6px #333",
                    animation: "pulse 1.5s infinite"
                },
                children: "Family Gallery Challenge"
            }, void 0, false, {
                fileName: "[project]/app/gallery/page.js",
                lineNumber: 369,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    margin: "1rem 0",
                    fontSize: "clamp(1.2rem, 5vw, 2rem)",
                    color: "#fff",
                    fontFamily: "'Comic Sans MS', cursive",
                    background: "rgba(255, 215, 0, 0.2)",
                    padding: "0.5rem 1rem",
                    borderRadius: "15px",
                    border: "2px solid #ffd700",
                    display: "inline-block",
                    animation: "shine 2s infinite"
                },
                children: [
                    "Total Score: ",
                    totalScore
                ]
            }, void 0, true, {
                fileName: "[project]/app/gallery/page.js",
                lineNumber: 380,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    fontSize: "clamp(0.8rem, 3vw, 1.2rem)",
                    color: "#ffd700",
                    margin: "1rem 0",
                    fontFamily: "'Comic Sans MS', cursive",
                    background: "rgba(0, 0, 0, 0.5)",
                    padding: "0.5rem",
                    borderRadius: "5px"
                },
                children: "How to Play: Answer the trick question on each card’s back. Get it right to flip it, earn 10 points, and hear a unique message! Flip all cards to move on!"
            }, void 0, false, {
                fileName: "[project]/app/gallery/page.js",
                lineNumber: 396,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setDisco(!disco),
                style: {
                    padding: "0.5rem 1rem",
                    fontSize: "clamp(0.9rem, 3vw, 1.2rem)",
                    fontFamily: "'Comic Sans MS', cursive",
                    background: "#ff5722",
                    color: "#fff",
                    border: "none",
                    borderRadius: "10px",
                    cursor: "pointer",
                    marginBottom: "1rem",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)"
                },
                children: disco ? "Chill Out" : "Disco Party!"
            }, void 0, false, {
                fileName: "[project]/app/gallery/page.js",
                lineNumber: 409,
                columnNumber: 7
            }, this),
            allFlipped && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: "/next-challenge",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    style: {
                        padding: "0.5rem 1rem",
                        fontSize: "clamp(0.9rem, 3vw, 1.2rem)",
                        fontFamily: "'Comic Sans MS', cursive",
                        background: "#4ecdc4",
                        color: "#fff",
                        border: "none",
                        borderRadius: "10px",
                        cursor: "pointer",
                        marginBottom: "1rem",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)"
                    },
                    children: "Next Challenge!"
                }, void 0, false, {
                    fileName: "[project]/app/gallery/page.js",
                    lineNumber: 428,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/gallery/page.js",
                lineNumber: 427,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 250px))",
                    gap: "1rem",
                    padding: "0 1rem",
                    maxWidth: "1400px",
                    margin: "2rem auto",
                    justifyContent: "center"
                },
                children: cards.map((member)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$gallery$2f$MemoryCard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        member: member,
                        onAnswer: handleAnswer
                    }, member.index, false, {
                        fileName: "[project]/app/gallery/page.js",
                        lineNumber: 458,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/gallery/page.js",
                lineNumber: 446,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/gallery/page.js",
        lineNumber: 356,
        columnNumber: 5
    }, this);
}
_s(Gallery, "+fTz00eBxHVoII4sMULtw68HjWE=");
_c = Gallery;
var _c;
__turbopack_context__.k.register(_c, "Gallery");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_CONTEXT_TYPE:
                return (type.displayName || "Context") + ".Provider";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, self, source, owner, props, debugStack, debugTask) {
        self = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== self ? self : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, self, source, getOwner(), maybeKey, debugStack, debugTask);
    }
    function validateChildKeys(node) {
        "object" === typeof node && null !== node && node.$$typeof === REACT_ELEMENT_TYPE && node._store && (node._store.validated = 1);
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler");
    Symbol.for("react.provider");
    var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray;
    new ("function" === typeof WeakMap ? WeakMap : Map)();
    var createTask = console.createTask ? console.createTask : function() {
        return null;
    }, specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren, source, self) {
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self, Error("react-stack-top-frame"), createTask(getTaskName(type)));
    };
}();
}}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}}),
}]);

//# sourceMappingURL=_fa086325._.js.map