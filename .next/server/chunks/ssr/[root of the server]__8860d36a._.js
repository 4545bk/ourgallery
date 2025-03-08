module.exports = {

"[externals]/next/dist/compiled/next-server/app-page.runtime.dev.js [external] (next/dist/compiled/next-server/app-page.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page.runtime.dev.js"));

module.exports = mod;
}}),
"[project]/app/finale/page.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Finale)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function Finale() {
    const [totalScore, setTotalScore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [fakeButtonClicked, setFakeButtonClicked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [challengeSolved, setChallengeSolved] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [answer, setAnswer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [feedback, setFeedback] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    // Load total score from localStorage
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time falsy", 0) {
            "TURBOPACK unreachable";
        }
    }, []);
    // Handle fake button click
    const handleFakeButtonClick = ()=>{
        setFakeButtonClicked(true);
    };
    // Update answer input
    const handleAnswerChange = (e)=>{
        setAnswer(e.target.value);
    };
    // Check riddle answer
    const checkAnswer = ()=>{
        const correctAnswer = "fire";
        if (answer.trim().toLowerCase() === correctAnswer) {
            setChallengeSolved(true);
            setFeedback("");
        } else {
            setFeedback("Incorrect, try again!");
        }
    };
    // Styles
    const containerStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        padding: "2rem",
        background: "linear-gradient(135deg, #0a192f 0%, #1e3a8a 100%)",
        color: "#e2e8f0",
        fontFamily: "'Inter', sans-serif",
        position: "relative",
        overflow: "hidden",
        backgroundImage: "radial-gradient(circle at 50% 50%, rgba(56, 189, 248, 0.1) 0%, transparent 50%)"
    };
    const h1Style = {
        fontSize: "clamp(2.5rem, 6vw, 4rem)",
        color: "#38bdf8",
        fontWeight: 700,
        textShadow: "0 0 10px rgba(56, 189, 248, 0.5), 0 0 20px rgba(56, 189, 248, 0.3)",
        marginBottom: "1.5rem",
        letterSpacing: "0.05em"
    };
    const pStyle = {
        fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
        color: "#93c5fd",
        marginBottom: "1.5rem",
        maxWidth: "600px",
        lineHeight: "1.6",
        fontWeight: 300,
        textShadow: "0 0 5px rgba(147, 197, 253, 0.3)"
    };
    const buttonStyle = {
        padding: "clamp(0.5rem, 1.5vw, 0.75rem) clamp(1rem, 2.5vw, 1.5rem)",
        fontSize: "clamp(0.875rem, 2vw, 1rem)",
        background: "linear-gradient(45deg, #2563eb, #60a5fa)",
        color: "#fff",
        border: "none",
        borderRadius: "10px",
        cursor: "pointer",
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        fontWeight: 500
    };
    const buttonHoverStyle = {
        transform: "scale(1.05)",
        boxShadow: "0 6px 20px rgba(0, 0, 0, 0.4)"
    };
    const inputStyle = {
        padding: "0.75rem",
        fontSize: "1rem",
        border: "1px solid rgba(56, 189, 248, 0.5)",
        borderRadius: "8px",
        background: "rgba(15, 23, 42, 0.8)",
        color: "#e2e8f0",
        width: "min(100%, 300px)",
        marginBottom: "1rem",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)"
    };
    // Initial state: Congratulatory message with fake button
    if (!fakeButtonClicked) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: containerStyle,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    style: h1Style,
                    children: "Congratulations!"
                }, void 0, false, {
                    fileName: "[project]/app/finale/page.js",
                    lineNumber: 112,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: pStyle,
                    children: [
                        "Oh good, you have done this far! You’ve completed all missions with a score of ",
                        totalScore,
                        ". But there’s one more challenge ahead!"
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/finale/page.js",
                    lineNumber: 113,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleFakeButtonClick,
                    style: buttonStyle,
                    onMouseOver: (e)=>{
                        e.currentTarget.style.transform = buttonHoverStyle.transform;
                        e.currentTarget.style.boxShadow = buttonHoverStyle.boxShadow;
                    },
                    onMouseOut: (e)=>{
                        e.currentTarget.style.transform = "scale(1)";
                        e.currentTarget.style.boxShadow = buttonStyle.boxShadow;
                    },
                    children: "Claim Your Prize"
                }, void 0, false, {
                    fileName: "[project]/app/finale/page.js",
                    lineNumber: 117,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/finale/page.js",
            lineNumber: 111,
            columnNumber: 7
        }, this);
    } else if (!challengeSolved) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: containerStyle,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: "/images/mobile_card.jpg",
                    alt: "Half Mobile Card",
                    style: {
                        width: "100%",
                        maxWidth: "400px",
                        borderRadius: "12px",
                        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
                        clipPath: "inset(0 0 50% 0)",
                        marginBottom: "1.5rem"
                    }
                }, void 0, false, {
                    fileName: "[project]/app/finale/page.js",
                    lineNumber: 138,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: pStyle,
                    children: "Oops, that’s only half the mobile card—showing just some of the numbers! To see the full prize and all the numbers, solve this riddle:"
                }, void 0, false, {
                    fileName: "[project]/app/finale/page.js",
                    lineNumber: 150,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: {
                        ...pStyle,
                        fontStyle: "italic",
                        color: "#93c5fd"
                    },
                    children: '"I am not alive, but I grow; I don’t have lungs, but I need air; I don’t have a mouth, but water kills me. What am I?"'
                }, void 0, false, {
                    fileName: "[project]/app/finale/page.js",
                    lineNumber: 154,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "text",
                    value: answer,
                    onChange: handleAnswerChange,
                    style: inputStyle,
                    placeholder: "Enter your answer"
                }, void 0, false, {
                    fileName: "[project]/app/finale/page.js",
                    lineNumber: 158,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: checkAnswer,
                    style: buttonStyle,
                    onMouseOver: (e)=>{
                        e.currentTarget.style.transform = buttonHoverStyle.transform;
                        e.currentTarget.style.boxShadow = buttonHoverStyle.boxShadow;
                    },
                    onMouseOut: (e)=>{
                        e.currentTarget.style.transform = "scale(1)";
                        e.currentTarget.style.boxShadow = buttonStyle.boxShadow;
                    },
                    children: "Submit"
                }, void 0, false, {
                    fileName: "[project]/app/finale/page.js",
                    lineNumber: 165,
                    columnNumber: 9
                }, this),
                feedback && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: {
                        color: "#f87171",
                        marginTop: "1rem"
                    },
                    children: feedback
                }, void 0, false, {
                    fileName: "[project]/app/finale/page.js",
                    lineNumber: 180,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/finale/page.js",
            lineNumber: 137,
            columnNumber: 7
        }, this);
    } else {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: containerStyle,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    style: h1Style,
                    children: "Congratulations! Here’s your full prize!"
                }, void 0, false, {
                    fileName: "[project]/app/finale/page.js",
                    lineNumber: 189,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: "/images/mobile_card_final.jpg",
                    alt: "Full Mobile Card",
                    style: {
                        width: "100%",
                        maxWidth: "400px",
                        borderRadius: "12px",
                        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)"
                    }
                }, void 0, false, {
                    fileName: "[project]/app/finale/page.js",
                    lineNumber: 190,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/finale/page.js",
            lineNumber: 188,
            columnNumber: 7
        }, this);
    }
}
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    } else {
        if ("TURBOPACK compile-time truthy", 1) {
            module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page.runtime.dev.js [external] (next/dist/compiled/next-server/app-page.runtime.dev.js, cjs)");
        } else {
            "TURBOPACK unreachable";
        }
    }
} //# sourceMappingURL=module.compiled.js.map
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__8860d36a._.js.map