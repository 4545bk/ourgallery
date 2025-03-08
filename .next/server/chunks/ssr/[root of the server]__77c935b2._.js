module.exports = {

"[externals]/next/dist/compiled/next-server/app-page.runtime.dev.js [external] (next/dist/compiled/next-server/app-page.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page.runtime.dev.js"));

module.exports = mod;
}}),
"[project]/app/page.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Home)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client"; // 👈 Add this at the top
;
;
function Home() {
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const speedFactor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(4); // Default moderate speed
    const changeSpeedInterval = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isCleared, setIsCleared] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const hackerChars = "01".split(""); // Only 0 and 1
        const fontSize = 14; // Slightly larger font for better clarity
        const columns = Math.floor(canvas.width / fontSize);
        const drops = Array(columns).fill(1);
        const speeds = Array(columns).fill().map(()=>Math.random() * speedFactor.current + 4); // Speed based on the dynamic factor
        const angles = Array(columns).fill().map(()=>Math.random() * Math.PI * 2); // Random angles for spirals
        // Function to change speed dynamically
        const changeSpeed = ()=>{
            const randomSpeed = Math.floor(Math.random() * 3);
            if (randomSpeed === 0) {
                speedFactor.current = 2; // Slow speed
            } else if (randomSpeed === 1) {
                speedFactor.current = 4; // Moderate speed
            } else {
                speedFactor.current = 6; // Fast speed
            }
            // Update speeds with the new speed factor
            speeds.forEach((_, i)=>{
                speeds[i] = Math.random() * speedFactor.current + 4;
            });
        };
        // Change speed every 2 seconds
        changeSpeedInterval.current = setInterval(changeSpeed, 2000);
        function draw() {
            if (isCleared) {
                ctx.fillStyle = "rgba(0, 0, 0, 1)"; // Fully opaque background to clear it
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                return; // Exit early if the canvas is cleared
            }
            ctx.fillStyle = "rgba(0, 0, 0, 0.1)"; // More fade for denser effect
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "#00ff00"; // Bright green for visibility
            ctx.font = `${fontSize}px monospace`;
            for(let i = 0; i < drops.length; i++){
                // Increase sway and diagonal movement for more dynamic effect
                const x = i * fontSize + Math.sin(angles[i]) * 30; // Stronger horizontal sway
                const y = drops[i] * fontSize + Math.cos(angles[i]) * 30; // Stronger vertical sway
                // Draw multiple characters per column for higher density (quadrupled density)
                for(let j = 0; j < 20; j++){
                    const text = hackerChars[Math.floor(Math.random() * hackerChars.length)];
                    ctx.fillText(text, x, y + j * fontSize); // Draw multiple characters per column
                }
                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                    angles[i] = Math.random() * Math.PI * 2; // Reset spiral angle
                }
                drops[i] += speeds[i]; // Varying speeds for faster movement
                angles[i] += 0.3; // Enhanced spiral effect
            }
        }
        const interval = setInterval(draw, 15); // Faster update rate for smoother motion
        return ()=>{
            clearInterval(interval);
            clearInterval(changeSpeedInterval.current); // Clean up speed change interval
        };
    }, [
        isCleared
    ]);
    // Function to toggle clear state
    const handleClearCanvas = ()=>{
        setIsCleared((prev)=>!prev); // Toggle between clear and reset
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: "relative",
            overflow: "hidden",
            height: "100vh",
            background: "black"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef,
                style: {
                    position: "absolute",
                    top: 0,
                    left: 0
                }
            }, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 91,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "relative",
                    zIndex: 2,
                    textAlign: "center",
                    paddingTop: "20vh"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        style: {
                            fontSize: "4rem",
                            fontFamily: "'Comic Sans MS', cursive",
                            color: "#ff5722",
                            textShadow: "0 0 15px #ff5722"
                        },
                        children: "Welcome to Cousin Chronicles"
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontSize: "2rem",
                            color: "#ffffff",
                            textShadow: "0 0 10px #ffffff"
                        },
                        children: [
                            "Visit",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/gallery",
                                style: {
                                    color: "#4ecdc4",
                                    textDecoration: "none",
                                    fontSize: "2rem",
                                    fontWeight: "bold",
                                    transition: "color 0.3s, transform 0.3s, text-shadow 0.3s",
                                    display: "inline-block",
                                    padding: "10px 20px",
                                    borderRadius: "5px",
                                    border: "2px solid #4ecdc4"
                                },
                                onMouseOver: (e)=>{
                                    e.target.style.color = "#ff0";
                                    e.target.style.transform = "scale(1.1)";
                                    e.target.style.textShadow = "0 0 10px #ff0";
                                    e.target.style.backgroundColor = "#4ecdc4"; // Background on hover
                                },
                                onMouseOut: (e)=>{
                                    e.target.style.color = "#4ecdc4";
                                    e.target.style.transform = "scale(1)";
                                    e.target.style.textShadow = "none";
                                    e.target.style.backgroundColor = "transparent"; // Reset background
                                },
                                children: "the Gallery"
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 111,
                                columnNumber: 11
                            }, this),
                            " ",
                            "to see the fun!"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.js",
                lineNumber: 92,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.js",
        lineNumber: 90,
        columnNumber: 5
    }, this);
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

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__77c935b2._.js.map