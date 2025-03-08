module.exports = {

"[externals]/next/dist/compiled/next-server/app-page.runtime.dev.js [external] (next/dist/compiled/next-server/app-page.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page.runtime.dev.js"));

module.exports = mod;
}}),
"[project]/app/gallery/MemoryCard.module.css [app-ssr] (css module)": ((__turbopack_context__) => {

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
  "nextCard": "MemoryCard-module__H8OZ3G__nextCard",
  "photo": "MemoryCard-module__H8OZ3G__photo",
  "questionForm": "MemoryCard-module__H8OZ3G__questionForm",
  "shake": "MemoryCard-module__H8OZ3G__shake",
  "spin": "MemoryCard-module__H8OZ3G__spin",
  "submitButton": "MemoryCard-module__H8OZ3G__submitButton",
  "victory": "MemoryCard-module__H8OZ3G__victory",
  "victoryDance": "MemoryCard-module__H8OZ3G__victoryDance",
});
}}),
"[project]/app/gallery/MemoryCard.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$gallery$2f$MemoryCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/gallery/MemoryCard.module.css [app-ssr] (css module)");
"use client";
;
;
;
const MemoryCard = ({ member, onAnswer })=>{
    const [showFact, setShowFact] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(!member.flipped); // Initial state from member.flipped
    const [shake, setShake] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [spin, setSpin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [answer, setAnswer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    // Sync showFact with member.flipped whenever member changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setShowFact(!member.flipped);
    }, [
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$gallery$2f$MemoryCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].card} ${showFact ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$gallery$2f$MemoryCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].flipped : ""} ${shake ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$gallery$2f$MemoryCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].shake : ""} ${spin ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$gallery$2f$MemoryCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].spin : ""}`,
        onMouseEnter: handleHover,
        onMouseLeave: ()=>setSpin(false),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$gallery$2f$MemoryCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardInner,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$gallery$2f$MemoryCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardFront,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: member.photo,
                            alt: member.name,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$gallery$2f$MemoryCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].photo
                        }, void 0, false, {
                            fileName: "[project]/app/gallery/MemoryCard.js",
                            lineNumber: 36,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$gallery$2f$MemoryCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].name,
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$gallery$2f$MemoryCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardBack,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleSubmit,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$gallery$2f$MemoryCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].questionForm,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: member.question
                            }, void 0, false, {
                                fileName: "[project]/app/gallery/MemoryCard.js",
                                lineNumber: 41,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                value: answer,
                                onChange: (e)=>setAnswer(e.target.value),
                                placeholder: "Your answer...",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$gallery$2f$MemoryCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].answerInput
                            }, void 0, false, {
                                fileName: "[project]/app/gallery/MemoryCard.js",
                                lineNumber: 42,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$gallery$2f$MemoryCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].submitButton,
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
const __TURBOPACK__default__export__ = MemoryCard;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/app/gallery/page.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Gallery)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$gallery$2f$MemoryCard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/gallery/MemoryCard.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function Gallery() {
    const [disco, setDisco] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isAudioPlaying, setIsAudioPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [totalScore, setTotalScore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [allFlipped, setAllFlipped] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
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
            question: "What do you call someone who is famous for great achievements and remembered for generations?starts with L",
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
            name: "Dope",
            photo: "/images/foto (18).jpg",
            question: "What has four legs but can't walk?",
            answer: "Table",
            audio: "/sounds/rap3.mp3",
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
            name: "Lis is Simple",
            photo: "/images/foto (23).jpg",
            question: "What has hands but can’t clap?",
            answer: "Clock",
            audio: "/sounds/rap4.mp3",
            index: 23,
            flipped: false
        }
    ];
    const [cards, setCards] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialFamilyMembers);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const savedScore = Number(localStorage.getItem('totalScore')) || 0;
        const savedCards = localStorage.getItem('galleryCards');
        setTotalScore(savedScore);
        if (savedCards) {
            setCards(JSON.parse(savedCards));
        }
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const confetti = ()=>{
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
                }).onfinish = ()=>div.remove();
            }
        };
        const interval = setInterval(confetti, 3000);
        return ()=>clearInterval(interval);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
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
        return ()=>document.head.removeChild(styleSheet);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        localStorage.setItem('totalScore', totalScore);
        localStorage.setItem('galleryCards', JSON.stringify(cards));
    }, [
        totalScore,
        cards
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const flippedCount = cards.filter((card)=>!card.flipped).length;
        setAllFlipped(flippedCount === 0);
    }, [
        cards
    ]);
    const playSound = (soundFile, callback)=>{
        if ("TURBOPACK compile-time truthy", 1) return; // Prevent Audio creation on server
        "TURBOPACK unreachable";
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            padding: "2rem",
            textAlign: "center",
            background: disco ? "linear-gradient(45deg, #ff00ff, #00ffff, #ffff00, #ff00ff)" : "linear-gradient(135deg, #ff6b6b, #4ecdc4, #45b7d1)",
            minHeight: "100vh",
            overflow: "hidden",
            transition: "background 0.5s ease",
            animation: disco ? "disco 2s infinite" : "none"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                style: {
                    fontSize: "4rem",
                    color: "#fff",
                    fontFamily: "'Comic Sans MS', cursive",
                    textShadow: "3px 3px 6px #333",
                    animation: "pulse 1.5s infinite"
                },
                children: "Family Gallery Challenge"
            }, void 0, false, {
                fileName: "[project]/app/gallery/page.js",
                lineNumber: 353,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    margin: "1rem 0",
                    fontSize: "2rem",
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
                lineNumber: 364,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    fontSize: "1.2rem",
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
                lineNumber: 380,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setDisco(!disco),
                style: {
                    padding: "0.5rem 1rem",
                    fontSize: "1.2rem",
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
                lineNumber: 393,
                columnNumber: 7
            }, this),
            allFlipped && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                href: "/next-challenge",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    style: {
                        padding: "0.5rem 1rem",
                        fontSize: "1.2rem",
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
                    lineNumber: 412,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/gallery/page.js",
                lineNumber: 411,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: "2rem",
                    maxWidth: "1200px",
                    margin: "2rem auto"
                },
                children: cards.map((member)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$gallery$2f$MemoryCard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        member: member,
                        onAnswer: handleAnswer
                    }, member.index, false, {
                        fileName: "[project]/app/gallery/page.js",
                        lineNumber: 432,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/gallery/page.js",
                lineNumber: 430,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/gallery/page.js",
        lineNumber: 342,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__d8c4ed25._.js.map