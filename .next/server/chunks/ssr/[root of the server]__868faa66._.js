module.exports = {

"[externals]/next/dist/compiled/next-server/app-page.runtime.dev.js [external] (next/dist/compiled/next-server/app-page.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page.runtime.dev.js"));

module.exports = mod;
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
"[project]/app/next-mystery/page.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CosmicVoiceCommand)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function CosmicVoiceCommand() {
    const [totalScore, setTotalScore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [missionsComplete, setMissionsComplete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isClient, setIsClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [zorblaxMessage, setZorblaxMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("Oi, space cadet! I’m Zorblax. Use your voice or cam to command—don’t mess it up!");
    const [currentMission, setCurrentMission] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [recording, setRecording] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [gestureMode, setGestureMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [timeLeft, setTimeLeft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(15);
    const mediaRecorderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const videoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const streamRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const timerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const missions = [
        {
            scenario: "Your ship’s stuck in a wormhole. Command it to escape!",
            voiceCommand: "activate warp drive",
            gesture: "salute",
            zorblaxCorrect: "Warp drive on! We’re out, you stellar screamer!",
            zorblaxIncorrect: "What was that? ‘Warp drive,’ not gibberish! Try again, loudmouth."
        },
        {
            scenario: "An alien ambassador is freaking out. Calm it down!",
            voiceCommand: "peace and quiet",
            gesture: "wave",
            zorblaxCorrect: "Nice one! Alien’s chill now—your voice ain’t half bad!",
            zorblaxIncorrect: "‘Peace and quiet,’ not whatever you mumbled! Wave or speak, dunce."
        },
        {
            scenario: "A star’s about to supernova. Summon a containment field!",
            voiceCommand: "deploy containment",
            gesture: "raise both hands",
            zorblaxCorrect: "Field up! Star’s safe—you’re a cosmic champ!",
            zorblaxIncorrect: "‘Deploy containment,’ not that noise! Hands up or try again."
        },
        {
            scenario: "The galaxy’s comms are down. Broadcast a signal!",
            voiceCommand: "send galactic ping",
            gesture: "point forward",
            zorblaxCorrect: "Ping sent! Galaxy’s back online—nice pipes!",
            zorblaxIncorrect: "‘Send galactic ping,’ you oaf! Point or shout it right."
        },
        {
            scenario: "A meteor storm’s incoming. Order a shield boost!",
            voiceCommand: "boost shields now",
            gesture: "cross arms",
            zorblaxCorrect: "Shields boosted! You’re a star, space-talker!",
            zorblaxIncorrect: "‘Boost shields now,’ not that drivel! Cross ‘em or yell it."
        }
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setIsClient(true);
        if ("TURBOPACK compile-time falsy", 0) {
            "TURBOPACK unreachable";
        }
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time falsy", 0) {
            "TURBOPACK unreachable";
        }
    }, [
        totalScore,
        currentMission,
        isClient
    ]);
    const startRecording = async ()=>{
        if (!gestureMode) {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({
                    audio: true
                });
                mediaRecorderRef.current = new MediaRecorder(stream);
                const chunks = [];
                mediaRecorderRef.current.ondataavailable = (e)=>chunks.push(e.data);
                mediaRecorderRef.current.onstop = ()=>{
                    const blob = new Blob(chunks, {
                        type: "audio/webm"
                    });
                    recognizeVoice(blob);
                    stream.getTracks().forEach((track)=>track.stop());
                };
                mediaRecorderRef.current.start();
                setRecording(true);
                startTimer();
            } catch (err) {
                setZorblaxMessage("Mic access denied, you silent fool! Try gestures instead.");
            }
        } else {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({
                    video: true
                });
                streamRef.current = stream;
                videoRef.current.srcObject = stream;
                videoRef.current.play();
                setRecording(true);
                startTimer();
            } catch (err) {
                setZorblaxMessage("Cam access denied, you invisible twit! Use your voice.");
            }
        }
    };
    const stopRecording = ()=>{
        if (!gestureMode && mediaRecorderRef.current) {
            mediaRecorderRef.current.stop();
        } else if (gestureMode && streamRef.current) {
            streamRef.current.getTracks().forEach((track)=>track.stop());
            recognizeGesture();
        }
        setRecording(false);
        clearTimeout(timerRef.current);
    };
    const startTimer = ()=>{
        setTimeLeft(15);
        timerRef.current = setInterval(()=>{
            setTimeLeft((prev)=>{
                if (prev <= 1) {
                    stopRecording();
                    setZorblaxMessage("Time’s up, slowpoke! Try again—15 seconds max!");
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
    };
    const recognizeVoice = (blob)=>{
        const command = missions[currentMission].voiceCommand.toLowerCase();
        const reader = new FileReader();
        reader.onload = ()=>{
            const text = "mock voice data";
            if (text.includes(command.split(" ")[0]) || text.includes(command.split(" ")[1])) {
                completeMission();
            } else {
                setZorblaxMessage(missions[currentMission].zorblaxIncorrect);
            }
        };
        reader.readAsDataURL(blob);
    };
    const recognizeGesture = ()=>{
        setZorblaxMessage("Gesture detected! Let’s assume you nailed it—moving on!");
        completeMission();
    };
    const completeMission = ()=>{
        setTotalScore((prev)=>{
            const newScore = prev + 20;
            localStorage.setItem('totalScore', newScore.toString());
            return newScore;
        });
        setZorblaxMessage(missions[currentMission].zorblaxCorrect);
        const audio = new Audio("/sounds/mission.mp3");
        audio.play().catch(()=>console.log("[next-mystery] Audio missing"));
        setCurrentMission((prev)=>prev + 1);
    };
    if (!isClient) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                background: "linear-gradient(135deg, #0a192f, #1e3a8a)",
                color: "#e2e8f0",
                fontFamily: "'Inter', sans-serif",
                fontSize: "1.5rem"
            },
            children: "Loading..."
        }, void 0, false, {
            fileName: "[project]/app/next-mystery/page.js",
            lineNumber: 171,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            padding: "2rem",
            minHeight: "100vh",
            background: "linear-gradient(135deg, #0a192f 0%, #1e3a8a 100%)",
            color: "#e2e8f0",
            fontFamily: "'Inter', sans-serif",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
            overflow: "hidden",
            backgroundImage: "radial-gradient(circle at 50% 50%, rgba(56, 189, 248, 0.1) 0%, transparent 50%)"
        },
        className: "jsx-7c63510137327dfa",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    pointerEvents: "none",
                    background: "radial-gradient(circle, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                    animation: "twinkle 10s infinite"
                },
                className: "jsx-7c63510137327dfa"
            }, void 0, false, {
                fileName: "[project]/app/next-mystery/page.js",
                lineNumber: 201,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                style: {
                    fontSize: "clamp(2.5rem, 6vw, 4rem)",
                    color: "#38bdf8",
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 700,
                    textShadow: "0 0 10px rgba(56, 189, 248, 0.5), 0 0 20px rgba(56, 189, 248, 0.3)",
                    marginBottom: "1.5rem",
                    letterSpacing: "0.05em",
                    animation: "fadeIn 1s ease-in"
                },
                className: "jsx-7c63510137327dfa",
                children: "Cosmic Voice Command"
            }, void 0, false, {
                fileName: "[project]/app/next-mystery/page.js",
                lineNumber: 213,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: "clamp(1.25rem, 4vw, 2rem)",
                    color: "#fff",
                    background: "linear-gradient(90deg, rgba(56, 189, 248, 0.2), rgba(147, 197, 253, 0.2))",
                    padding: "0.75rem 1.5rem",
                    borderRadius: "12px",
                    border: "1px solid rgba(56, 189, 248, 0.5)",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    marginBottom: "2rem",
                    transition: "transform 0.3s ease",
                    fontWeight: 600
                },
                className: "jsx-7c63510137327dfa",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            color: "#93c5fd"
                        },
                        className: "jsx-7c63510137327dfa",
                        children: "Score:"
                    }, void 0, false, {
                        fileName: "[project]/app/next-mystery/page.js",
                        lineNumber: 239,
                        columnNumber: 9
                    }, this),
                    " ",
                    totalScore
                ]
            }, void 0, true, {
                fileName: "[project]/app/next-mystery/page.js",
                lineNumber: 224,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
                    color: "#93c5fd",
                    marginBottom: "2rem",
                    maxWidth: "800px",
                    lineHeight: "1.6",
                    fontWeight: 300,
                    textShadow: "0 0 5px rgba(147, 197, 253, 0.3)"
                },
                className: "jsx-7c63510137327dfa",
                children: "Speak or gesture to command—Zorblax demands precision in 15 seconds!"
            }, void 0, false, {
                fileName: "[project]/app/next-mystery/page.js",
                lineNumber: 242,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: "100%",
                    maxWidth: "900px",
                    padding: "1.5rem",
                    background: "rgba(15, 23, 42, 0.85)",
                    borderRadius: "16px",
                    border: "1px solid rgba(56, 189, 248, 0.2)",
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4), inset 0 0 15px rgba(56, 189, 248, 0.1)",
                    backdropFilter: "blur(10px)",
                    marginBottom: "2.5rem",
                    fontSize: "clamp(1rem, 2vw, 1.125rem)",
                    color: "#dbeafe",
                    fontWeight: 400,
                    textAlign: "left",
                    transition: "transform 0.3s ease"
                },
                className: "jsx-7c63510137327dfa",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        style: {
                            color: "#38bdf8",
                            fontWeight: 600
                        },
                        className: "jsx-7c63510137327dfa",
                        children: "Zorblax:"
                    }, void 0, false, {
                        fileName: "[project]/app/next-mystery/page.js",
                        lineNumber: 268,
                        columnNumber: 9
                    }, this),
                    " ",
                    zorblaxMessage
                ]
            }, void 0, true, {
                fileName: "[project]/app/next-mystery/page.js",
                lineNumber: 252,
                columnNumber: 7
            }, this),
            currentMission < 5 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: "100%",
                    maxWidth: "700px",
                    padding: "2rem",
                    background: "linear-gradient(135deg, rgba(15, 23, 42, 0.9), rgba(30, 58, 138, 0.9))",
                    borderRadius: "20px",
                    border: "1px solid rgba(56, 189, 248, 0.3)",
                    boxShadow: "0 10px 40px rgba(0, 0, 0, 0.5), inset 0 0 10px rgba(56, 189, 248, 0.2)",
                    transition: "all 0.3s ease"
                },
                className: "jsx-7c63510137327dfa",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: {
                            fontSize: "clamp(1.75rem, 4vw, 2.25rem)",
                            color: "#38bdf8",
                            fontWeight: 600,
                            marginBottom: "1.5rem",
                            textShadow: "0 0 8px rgba(56, 189, 248, 0.4)",
                            letterSpacing: "0.03em"
                        },
                        className: "jsx-7c63510137327dfa",
                        children: [
                            "Mission ",
                            currentMission + 1
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/next-mystery/page.js",
                        lineNumber: 282,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
                            color: "#bfdbfe",
                            marginBottom: "1.5rem",
                            lineHeight: "1.5",
                            fontWeight: 300
                        },
                        className: "jsx-7c63510137327dfa",
                        children: missions[currentMission].scenario
                    }, void 0, false, {
                        fileName: "[project]/app/next-mystery/page.js",
                        lineNumber: 290,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontSize: "clamp(0.875rem, 2vw, 1rem)",
                            color: "#93c5fd",
                            marginBottom: "1rem",
                            fontStyle: "italic",
                            fontWeight: 300
                        },
                        className: "jsx-7c63510137327dfa",
                        children: gestureMode ? `Gesture: ${missions[currentMission].gesture}` : `Say: "${missions[currentMission].voiceCommand}"`
                    }, void 0, false, {
                        fileName: "[project]/app/next-mystery/page.js",
                        lineNumber: 297,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontSize: "clamp(0.875rem, 2vw, 1rem)",
                            color: "#e2e8f0",
                            marginBottom: "1.5rem",
                            fontWeight: 400
                        },
                        className: "jsx-7c63510137327dfa",
                        children: [
                            "Time Left: ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: "#f87171"
                                },
                                className: "jsx-7c63510137327dfa",
                                children: [
                                    timeLeft,
                                    "s"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/next-mystery/page.js",
                                lineNumber: 314,
                                columnNumber: 24
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/next-mystery/page.js",
                        lineNumber: 308,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: "1rem",
                            alignItems: "center"
                        },
                        className: "jsx-7c63510137327dfa",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setGestureMode(!gestureMode),
                                style: {
                                    padding: "clamp(0.5rem, 1.5vw, 0.75rem) clamp(1rem, 2.5vw, 1.5rem)",
                                    fontSize: "clamp(0.875rem, 2vw, 1rem)",
                                    background: gestureMode ? "linear-gradient(45deg, #f87171, #fb7185)" : "linear-gradient(45deg, #2563eb, #60a5fa)",
                                    color: "#fff",
                                    border: "none",
                                    borderRadius: "10px",
                                    cursor: "pointer",
                                    width: "min(100%, 200px)",
                                    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
                                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                    fontWeight: 500
                                },
                                onMouseOver: (e)=>{
                                    e.currentTarget.style.transform = "scale(1.05)";
                                    e.currentTarget.style.boxShadow = "0 6px 20px rgba(0, 0, 0, 0.4)";
                                },
                                onMouseOut: (e)=>{
                                    e.currentTarget.style.transform = "scale(1)";
                                    e.currentTarget.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.3)";
                                },
                                className: "jsx-7c63510137327dfa",
                                children: gestureMode ? "Switch to Voice" : "Switch to Gesture"
                            }, void 0, false, {
                                fileName: "[project]/app/next-mystery/page.js",
                                lineNumber: 322,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: recording ? stopRecording : startRecording,
                                style: {
                                    padding: "clamp(0.5rem, 1.5vw, 0.75rem) clamp(1rem, 2.5vw, 1.5rem)",
                                    fontSize: "clamp(0.875rem, 2vw, 1rem)",
                                    background: recording ? "linear-gradient(45deg, #ef4444, #f87171)" : "linear-gradient(45deg, #38bdf8, #7dd3fc)",
                                    color: "#fff",
                                    border: "none",
                                    borderRadius: "10px",
                                    cursor: "pointer",
                                    width: "min(100%, 200px)",
                                    boxShadow: recording ? "0 4px 15px rgba(248, 113, 113, 0.5)" : "0 4px 15px rgba(56, 189, 248, 0.5)",
                                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                    fontWeight: 500
                                },
                                onMouseOver: (e)=>{
                                    e.currentTarget.style.transform = "scale(1.05)";
                                    e.currentTarget.style.boxShadow = recording ? "0 6px 20px rgba(248, 113, 113, 0.6)" : "0 6px 20px rgba(56, 189, 248, 0.6)";
                                },
                                onMouseOut: (e)=>{
                                    e.currentTarget.style.transform = "scale(1)";
                                    e.currentTarget.style.boxShadow = recording ? "0 4px 15px rgba(248, 113, 113, 0.5)" : "0 4px 15px rgba(56, 189, 248, 0.5)";
                                },
                                className: "jsx-7c63510137327dfa",
                                children: recording ? "Stop" : gestureMode ? "Start Gesture" : "Start Recording"
                            }, void 0, false, {
                                fileName: "[project]/app/next-mystery/page.js",
                                lineNumber: 350,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/next-mystery/page.js",
                        lineNumber: 316,
                        columnNumber: 11
                    }, this),
                    gestureMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                        ref: videoRef,
                        autoPlay: true,
                        muted: true,
                        style: {
                            width: "min(100%, 640px)",
                            height: "min(75vw, 480px)",
                            marginTop: "2rem",
                            borderRadius: "12px",
                            border: "1px solid rgba(56, 189, 248, 0.3)",
                            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.4), inset 0 0 10px rgba(56, 189, 248, 0.2)",
                            transform: "scaleX(-1)",
                            background: "rgba(15, 23, 42, 0.5)",
                            maxWidth: "90vw",
                            maxHeight: "60vh",
                            objectFit: "cover"
                        },
                        className: "jsx-7c63510137327dfa"
                    }, void 0, false, {
                        fileName: "[project]/app/next-mystery/page.js",
                        lineNumber: 386,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/next-mystery/page.js",
                lineNumber: 272,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginTop: "2.5rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.5rem",
                    alignItems: "center",
                    animation: "fadeIn 1s ease-in"
                },
                className: "jsx-7c63510137327dfa",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontSize: "clamp(1.5rem, 4vw, 2rem)",
                            color: "#fff",
                            textShadow: "0 0 10px rgba(167, 243, 208, 0.7)",
                            fontWeight: 600
                        },
                        className: "jsx-7c63510137327dfa",
                        children: "All Missions Complete!"
                    }, void 0, false, {
                        fileName: "[project]/app/next-mystery/page.js",
                        lineNumber: 415,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/finale",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            style: {
                                padding: "clamp(0.6rem, 1.5vw, 0.9rem) clamp(1.2rem, 2.5vw, 1.8rem)",
                                fontSize: "clamp(0.875rem, 2vw, 1.125rem)",
                                background: "linear-gradient(45deg, #38bdf8, #a7f3d0)",
                                color: "#fff",
                                border: "none",
                                borderRadius: "12px",
                                cursor: "pointer",
                                boxShadow: "0 6px 20px rgba(56, 189, 248, 0.5)",
                                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                fontWeight: 600
                            },
                            onMouseOver: (e)=>{
                                e.currentTarget.style.transform = "scale(1.05)";
                                e.currentTarget.style.boxShadow = "0 8px 25px rgba(56, 189, 248, 0.7)";
                            },
                            onMouseOut: (e)=>{
                                e.currentTarget.style.transform = "scale(1)";
                                e.currentTarget.style.boxShadow = "0 6px 20px rgba(56, 189, 248, 0.5)";
                            },
                            className: "jsx-7c63510137327dfa",
                            children: "Next Cosmic Caper!"
                        }, void 0, false, {
                            fileName: "[project]/app/next-mystery/page.js",
                            lineNumber: 422,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/next-mystery/page.js",
                        lineNumber: 421,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/next-mystery/page.js",
                lineNumber: 407,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "7c63510137327dfa",
                children: '@import "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap";@keyframes fadeIn{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes twinkle{0%{opacity:.5}50%{opacity:1}to{opacity:.5}}@media (width<=600px){.mission-container{padding:1.5rem}video{width:min(100%,480px);height:min(75vw,360px)}}'
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/next-mystery/page.js",
        lineNumber: 187,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__868faa66._.js.map