module.exports = {

"[externals]/next/dist/compiled/next-server/app-page.runtime.dev.js [external] (next/dist/compiled/next-server/app-page.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page.runtime.dev.js"));

module.exports = mod;
}}),
"[project]/app/next-challenge/CipherCell.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const CipherCell = ({ cipher, index, onSolve })=>{
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [solved, setSolved] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(cipher.solved);
    const highlightedRow = cipher.highlightedRow || 0; // Default to first row if not specified
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (!solved) {
            console.log("[CipherCell] Submitting input for cipher", index, ":", input);
            onSolve(index, input);
            if (input.trim().toUpperCase() === cipher.solution.toUpperCase()) {
                console.log("[CipherCell] Cipher", index, "solved successfully");
                setSolved(true);
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            textAlign: "center"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "grid",
                    gridTemplateColumns: `repeat(${cipher.grid[0].length}, 1fr)`,
                    gap: "5px",
                    margin: "1rem auto",
                    maxWidth: "400px"
                },
                children: cipher.grid.map((row, rowIdx)=>row.map((cell, colIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                width: "50px",
                                height: "50px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                background: "#333",
                                border: `2px solid ${rowIdx === highlightedRow ? '#ff4444' : '#666'}`,
                                color: "#e0e0e0",
                                fontSize: "1.2rem",
                                fontFamily: "'Courier New', monospace",
                                opacity: solved ? 0.7 : 1
                            },
                            children: cell
                        }, `${rowIdx}-${colIdx}`, false, {
                            fileName: "[project]/app/next-challenge/CipherCell.js",
                            lineNumber: 27,
                            columnNumber: 13
                        }, this)))
            }, void 0, false, {
                fileName: "[project]/app/next-challenge/CipherCell.js",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            solved ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    color: "#ffd700",
                    fontSize: "1.5rem"
                },
                children: [
                    "Decoded: ",
                    cipher.solution
                ]
            }, void 0, true, {
                fileName: "[project]/app/next-challenge/CipherCell.js",
                lineNumber: 49,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit,
                style: {
                    marginTop: "1rem"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        value: input,
                        onChange: (e)=>setInput(e.target.value),
                        placeholder: "Enter the secret message",
                        style: {
                            padding: "0.5rem",
                            fontSize: "1rem",
                            background: "#333",
                            color: "#e0e0e0",
                            border: "2px solid #ff4444",
                            borderRadius: "5px",
                            marginRight: "0.5rem"
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/next-challenge/CipherCell.js",
                        lineNumber: 52,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        style: {
                            padding: "0.5rem 1rem",
                            fontSize: "1rem",
                            background: "#ff4444",
                            color: "#fff",
                            border: "none",
                            borderRadius: "5px",
                            cursor: "pointer"
                        },
                        children: "Decode"
                    }, void 0, false, {
                        fileName: "[project]/app/next-challenge/CipherCell.js",
                        lineNumber: 59,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/next-challenge/CipherCell.js",
                lineNumber: 51,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/next-challenge/CipherCell.js",
        lineNumber: 23,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = CipherCell;
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
"[project]/app/next-challenge/page.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CipherShadows)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$next$2d$challenge$2f$CipherCell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/next-challenge/CipherCell.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function CipherShadows() {
    const [totalScore, setTotalScore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [missionsCompleted, setMissionsCompleted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isClient, setIsClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Define encodeWord to shift letters forward
    const encodeWord = (word, shift)=>{
        return word.split("").map((letter)=>{
            const code = letter.charCodeAt(0);
            if (code >= 65 && code <= 90) {
                return String.fromCharCode((code - 65 + shift) % 26 + 65);
            }
            return letter; // Non-letters unchanged
        });
    };
    const initialCiphers = [
        {
            grid: [
                [
                    'Q',
                    'D',
                    'W',
                    'L'
                ],
                [
                    'H',
                    'A',
                    'N',
                    'S'
                ],
                [
                    'P',
                    'X',
                    'U',
                    'C'
                ],
                [
                    'M',
                    'U',
                    'R',
                    'Z'
                ],
                [
                    'J',
                    'R',
                    'O',
                    'W'
                ]
            ],
            clue: "Shift backward by the second prime.",
            solution: "NATI",
            audio: "/sounds/cipher1.mp3",
            solved: true,
            highlightedRow: 0 // First row shaded
        },
        {
            grid: [
                [
                    '8',
                    'X',
                    'Y',
                    'Z'
                ],
                [
                    'E',
                    'X',
                    'E',
                    'X'
                ],
                [
                    'K',
                    'X',
                    'Q',
                    'P'
                ],
                [
                    '34',
                    'N',
                    'M',
                    'L'
                ]
            ],
            clue: "Shift each letter back by 3 to find the name.",
            solution: "BUBU",
            audio: "/sounds/cipher2.mp3",
            solved: false,
            highlightedRow: 1 // Third row shaded
        },
        {
            grid: [
                [
                    'B',
                    'C',
                    'D',
                    'F',
                    'G',
                    'O',
                    'P',
                    'Q'
                ],
                [
                    'C',
                    'D',
                    'F',
                    'H',
                    'I',
                    'J',
                    'K',
                    'L'
                ],
                [
                    'E',
                    'W',
                    'E',
                    'D',
                    'E',
                    'G',
                    'E',
                    'Z'
                ],
                [
                    'M',
                    'N',
                    'O',
                    'P',
                    'Q',
                    'C',
                    'D',
                    'F'
                ],
                [
                    'U',
                    'V',
                    'O',
                    'P',
                    'Q',
                    'W',
                    'X',
                    'Y'
                ]
            ],
            clue: "Direction lost in reverse.",
            solution: "ZEGEDEWE",
            audio: "/sounds/cipher3.mp3",
            solved: false,
            highlightedRow: 2 // Fourth row shaded
        },
        {
            grid: [
                [
                    6,
                    11,
                    13,
                    6,
                    14
                ],
                [
                    6,
                    11,
                    100,
                    5,
                    13,
                    100,
                    6,
                    14,
                    14,
                    8
                ],
                [
                    1,
                    2,
                    3,
                    4,
                    5
                ],
                [
                    7,
                    8,
                    10,
                    11,
                    12
                ],
                [
                    13,
                    14,
                    15,
                    16,
                    17
                ]
            ],
            clue: "Subtract number 5 from each number and Reverse to reveal the date of the KIng. (100 means 👉🏻👉🏻 / ) and dont include commas",
            solution: "16/08/1993",
            audio: "/sounds/cipher4.mp3",
            solved: false,
            highlightedRow: 1
        }
    ];
    const [ciphers, setCiphers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialCiphers);
    // Load score and ciphers on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setIsClient(true);
        if ("TURBOPACK compile-time falsy", 0) {
            "TURBOPACK unreachable";
        }
    }, []);
    // Save score and ciphers
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time falsy", 0) {
            "TURBOPACK unreachable";
        }
    }, [
        totalScore,
        ciphers,
        isClient
    ]);
    const handleSolve = (index, userInput)=>{
        console.log("[next-challenge] Handling solve - Index:", index, "Input:", userInput);
        if (userInput.trim().toUpperCase() === ciphers[index].solution.toUpperCase()) {
            setCiphers((prev)=>{
                const newCiphers = [
                    ...prev
                ];
                if (!newCiphers[index].solved) {
                    newCiphers[index].solved = true;
                    setTotalScore((prevScore)=>{
                        const newScore = prevScore + 20;
                        console.log("[next-challenge] New Total Score:", newScore);
                        localStorage.setItem('totalScore', newScore);
                        return newScore;
                    });
                    const audio = new Audio(ciphers[index].audio);
                    audio.play().catch(()=>{
                        console.log("[next-challenge] Audio file missing or unsupported, skipping error display");
                    });
                } else {
                    console.log("[next-challenge] Cipher already solved, skipping");
                }
                return newCiphers;
            });
        } else {
            console.log("[next-challenge] Incorrect solution");
        }
    };
    if (!isClient) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: "Loading..."
        }, void 0, false, {
            fileName: "[project]/app/next-challenge/page.js",
            lineNumber: 138,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            padding: "2rem",
            textAlign: "center",
            background: "linear-gradient(135deg, #1a1a1a, #2c2c2c)",
            minHeight: "100vh",
            color: "#e0e0e0"
        },
        className: "jsx-b5ac0f575eeac00c",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                style: {
                    fontSize: "4rem",
                    color: "#ff4444",
                    fontFamily: "'Courier New', monospace",
                    textShadow: "0 0 10px #ff4444"
                },
                className: "jsx-b5ac0f575eeac00c",
                children: "Cipher Shadows"
            }, void 0, false, {
                fileName: "[project]/app/next-challenge/page.js",
                lineNumber: 143,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    margin: "1rem 0",
                    fontSize: "2rem",
                    color: "#fff",
                    background: "rgba(255, 68, 68, 0.2)",
                    padding: "0.5rem 1rem",
                    borderRadius: "15px",
                    border: "2px solid #ff4444",
                    display: "inline-block",
                    animation: "shine 2s infinite"
                },
                className: "jsx-b5ac0f575eeac00c",
                children: [
                    "Total Score: ",
                    totalScore
                ]
            }, void 0, true, {
                fileName: "[project]/app/next-challenge/page.js",
                lineNumber: 144,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    fontSize: "1.2rem",
                    color: "#ff4444",
                    margin: "1rem 0",
                    fontFamily: "'Courier New', monospace"
                },
                className: "jsx-b5ac0f575eeac00c",
                children: "Decode the cipher using the clue. Enter the secret message to proceed. shaded  are the once where the answers belong"
            }, void 0, false, {
                fileName: "[project]/app/next-challenge/page.js",
                lineNumber: 147,
                columnNumber: 7
            }, this),
            missionsCompleted === 4 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                href: "/next-mystery",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    style: {
                        padding: "0.5rem 1rem",
                        fontSize: "1.2rem",
                        background: "#ff4444",
                        color: "#fff",
                        border: "none",
                        borderRadius: "10px",
                        cursor: "pointer",
                        marginBottom: "1rem",
                        boxShadow: "0 0 10px #ff4444"
                    },
                    className: "jsx-b5ac0f575eeac00c",
                    children: "Next Mission!"
                }, void 0, false, {
                    fileName: "[project]/app/next-challenge/page.js",
                    lineNumber: 150,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/next-challenge/page.js",
                lineNumber: 149,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: "1200px",
                    margin: "2rem auto"
                },
                className: "jsx-b5ac0f575eeac00c",
                children: ciphers.map((cipher, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginBottom: "2rem",
                            padding: "1rem",
                            background: "#222",
                            borderRadius: "10px",
                            boxShadow: "0 0 15px rgba(255, 68, 68, 0.3)"
                        },
                        className: "jsx-b5ac0f575eeac00c",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: "#ff4444",
                                    fontSize: "1.5rem"
                                },
                                className: "jsx-b5ac0f575eeac00c",
                                children: [
                                    "Mission ",
                                    index + 1,
                                    ": ",
                                    cipher.clue
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/next-challenge/page.js",
                                lineNumber: 158,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$next$2d$challenge$2f$CipherCell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                cipher: cipher,
                                index: index,
                                onSolve: handleSolve
                            }, void 0, false, {
                                fileName: "[project]/app/next-challenge/page.js",
                                lineNumber: 159,
                                columnNumber: 13
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "[project]/app/next-challenge/page.js",
                        lineNumber: 157,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/next-challenge/page.js",
                lineNumber: 155,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "b5ac0f575eeac00c",
                children: "@keyframes shine{0%{text-shadow:0 0 5px #f44,0 0 10px #f44,0 0 15px #fff}50%{text-shadow:0 0 10px #f44,0 0 20px #f44,0 0 30px #fff}to{text-shadow:0 0 5px #f44,0 0 10px #f44,0 0 15px #fff}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/next-challenge/page.js",
        lineNumber: 142,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__438242fc._.js.map