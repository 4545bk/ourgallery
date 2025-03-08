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
"[project]/app/page.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    const handTrackRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const missions = [
        {
            scenario: "Your ship’s stuck in a wormhole. Command it to escape!",
            voiceCommand: "activate warp drive",
            gesture: "salute",
            zorblaxCorrect: "Warp drive on! We’re out, you stellar screamer!",
            zorblaxIncorrect: "What was that? Salute like you mean it, loudmouth!"
        },
        {
            scenario: "An alien ambassador is freaking out. Calm it down!",
            voiceCommand: "peace and quiet",
            gesture: "wave",
            zorblaxCorrect: "Nice one! Alien’s chill now—your wave’s not half bad!",
            zorblaxIncorrect: "Wave, you dunce, not flail! Try again."
        },
        {
            scenario: "A star’s about to supernova. Summon a containment field!",
            voiceCommand: "deploy containment",
            gesture: "raise both hands",
            zorblaxCorrect: "Field up! Star’s safe—you’re a cosmic champ!",
            zorblaxIncorrect: "Both hands up, not one! Do it right, space-brain."
        },
        {
            scenario: "The galaxy’s comms are down. Broadcast a signal!",
            voiceCommand: "send galactic ping",
            gesture: "point forward",
            zorblaxCorrect: "Ping sent! Galaxy’s back online—nice point!",
            zorblaxIncorrect: "Point forward, you oaf! Not whatever that was."
        },
        {
            scenario: "A meteor storm’s incoming. Order a shield boost!",
            voiceCommand: "boost shields now",
            gesture: "cross arms",
            zorblaxCorrect: "Shields boosted! You’re a star, space-talker!",
            zorblaxIncorrect: "Cross your arms, not flop ‘em! Try again."
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
                startGestureDetection();
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
            stopGestureDetection();
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
            const text = "mock voice data"; // Placeholder
            if (text.includes(command.split(" ")[0]) || text.includes(command.split(" ")[1])) {
                completeMission();
            } else {
                setZorblaxMessage(missions[currentMission].zorblaxIncorrect);
            }
        };
        reader.readAsDataURL(blob);
    };
    const startGestureDetection = ()=>{
        if (!handTrackRef.current) {
            setZorblaxMessage("Gesture system not ready—wait a sec or use voice!");
            return;
        }
        handTrackRef.current.startVideo(videoRef.current).then((status)=>{
            if (status) {
                console.log("[next-mystery] Video started for gesture detection");
                detectGesture();
            } else {
                setZorblaxMessage("Video failed to start—check your cam, space cadet!");
            }
        });
    };
    const stopGestureDetection = ()=>{
        if (handTrackRef.current) {
            handTrackRef.current.stop();
        }
    };
    const detectGesture = ()=>{
        const modelParams = {
            flipHorizontal: true,
            maxNumBoxes: 2,
            iouThreshold: 0.5,
            scoreThreshold: 0.6
        };
        handTrackRef.current.load(modelParams).then((model)=>{
            const detectInterval = setInterval(()=>{
                model.detect(videoRef.current).then((predictions)=>{
                    if (recording) {
                        const gesture = missions[currentMission].gesture.toLowerCase();
                        let matched = false;
                        if (predictions.length > 0) {
                            const hands = predictions.filter((p)=>p.label === "open" || p.label === "closed");
                            if (gesture === "salute" && hands.length === 1 && hands[0].bbox[1] < 150) {
                                matched = true; // Hand near top (face level)
                            } else if (gesture === "wave" && hands.length === 1) {
                                matched = true; // Single open hand
                            } else if (gesture === "raise both hands" && hands.length === 2) {
                                matched = true; // Two hands detected
                            } else if (gesture === "point forward" && hands.length === 1 && hands[0].bbox[2] > 100) {
                                matched = true; // Wide hand (extended)
                            } else if (gesture === "cross arms" && hands.length === 0) {
                                matched = true; // No hands visible (arms crossed assumption)
                            }
                        }
                        if (matched) {
                            clearInterval(detectInterval);
                            stopRecording();
                            completeMission();
                        }
                    }
                });
            }, 500); // Check every 500ms
            timerRef.current.detectInterval = detectInterval; // Store to clear later
        });
    };
    const completeMission = ()=>{
        setTotalScore((prev)=>{
            const newScore = prev + 20;
            localStorage.setItem('totalScore', newScore);
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
                textAlign: "center",
                padding: "2rem",
                color: "#fff"
            },
            children: "Loading..."
        }, void 0, false, {
            fileName: "[project]/app/page.js",
            lineNumber: 233,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            padding: "2rem",
            textAlign: "center",
            background: "linear-gradient(135deg, #001a33, #003366)",
            minHeight: "100vh",
            color: "#e0e0e0",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundImage: "radial-gradient(circle, rgba(0, 204, 255, 0.1) 2px, transparent 2px)",
            backgroundSize: "25px 25px"
        },
        className: "jsx-a7c6f87b37b4e3b4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                style: {
                    fontSize: "clamp(2rem, 8vw, 4rem)",
                    color: "#00ccff",
                    fontFamily: "'Courier New', monospace",
                    textShadow: "0 0 10px #00ccff, 0 0 20px #00ccff",
                    marginBottom: "1rem",
                    animation: "pulse 1.5s infinite"
                },
                className: "jsx-a7c6f87b37b4e3b4",
                children: "Cosmic Voice Command"
            }, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 249,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: "clamp(1.5rem, 5vw, 2rem)",
                    color: "#fff",
                    background: "rgba(0, 204, 255, 0.2)",
                    padding: "0.5rem 1rem",
                    borderRadius: "15px",
                    border: "2px solid #00ccff",
                    display: "inline-block",
                    animation: "shine 2s infinite",
                    marginBottom: "1rem"
                },
                className: "jsx-a7c6f87b37b4e3b4",
                children: [
                    "Total Score: ",
                    totalScore
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.js",
                lineNumber: 257,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    fontSize: "clamp(1rem, 3vw, 1.2rem)",
                    color: "#00ccff",
                    margin: "0 0 1rem",
                    fontFamily: "'Courier New', monospace",
                    maxWidth: "90%"
                },
                className: "jsx-a7c6f87b37b4e3b4",
                children: "Speak or gesture to command—Zorblax demands precision in 15 seconds!"
            }, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 270,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: "100%",
                    maxWidth: "800px",
                    padding: "1rem",
                    background: "rgba(0, 204, 255, 0.1)",
                    borderRadius: "15px",
                    marginBottom: "2rem",
                    fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
                    color: "#cceeff",
                    fontFamily: "'Courier New', monospace",
                    textAlign: "left",
                    border: "1px dashed #00ccff"
                },
                className: "jsx-a7c6f87b37b4e3b4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        className: "jsx-a7c6f87b37b4e3b4",
                        children: "Zorblax:"
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 290,
                        columnNumber: 9
                    }, this),
                    " ",
                    zorblaxMessage
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.js",
                lineNumber: 277,
                columnNumber: 7
            }, this),
            currentMission < 5 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: "100%",
                    maxWidth: "600px",
                    padding: "1.5rem",
                    background: "rgba(0, 51, 102, 0.8)",
                    borderRadius: "15px",
                    boxShadow: "0 0 20px rgba(0, 204, 255, 0.5)",
                    border: "2px solid #00ccff"
                },
                className: "jsx-a7c6f87b37b4e3b4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: {
                            fontSize: "clamp(1.5rem, 4vw, 2rem)",
                            color: "#00ccff",
                            marginBottom: "1rem",
                            textShadow: "0 0 5px #00ccff"
                        },
                        className: "jsx-a7c6f87b37b4e3b4",
                        children: [
                            "Mission ",
                            currentMission + 1
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 302,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontSize: "clamp(1rem, 3vw, 1.2rem)",
                            marginBottom: "1rem",
                            color: "#99ccff"
                        },
                        className: "jsx-a7c6f87b37b4e3b4",
                        children: missions[currentMission].scenario
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 308,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontSize: "clamp(0.9rem, 2.5vw, 1.1rem)",
                            color: "#fff",
                            marginBottom: "1rem"
                        },
                        className: "jsx-a7c6f87b37b4e3b4",
                        children: gestureMode ? `Gesture: ${missions[currentMission].gesture}` : `Say: "${missions[currentMission].voiceCommand}"`
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 313,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontSize: "clamp(0.9rem, 2.5vw, 1.1rem)",
                            color: "#fff",
                            marginBottom: "1rem"
                        },
                        className: "jsx-a7c6f87b37b4e3b4",
                        children: [
                            "Time Left: ",
                            timeLeft,
                            "s"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 322,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: "1rem",
                            alignItems: "center"
                        },
                        className: "jsx-a7c6f87b37b4e3b4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setGestureMode(!gestureMode),
                                style: {
                                    padding: "clamp(0.5rem, 2vw, 0.75rem) clamp(1rem, 3vw, 1.5rem)",
                                    fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
                                    background: gestureMode ? "#ff4444" : "#00ccff",
                                    color: "#fff",
                                    border: "none",
                                    borderRadius: "10px",
                                    cursor: "pointer",
                                    width: "min(100%, 200px)"
                                },
                                className: "jsx-a7c6f87b37b4e3b4",
                                children: gestureMode ? "Switch to Voice" : "Switch to Gesture"
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 333,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: recording ? stopRecording : startRecording,
                                style: {
                                    padding: "clamp(0.5rem, 2vw, 0.75rem) clamp(1rem, 3vw, 1.5rem)",
                                    fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
                                    background: recording ? "#ff4444" : "#00ccff",
                                    color: "#fff",
                                    border: "none",
                                    borderRadius: "10px",
                                    cursor: "pointer",
                                    width: "min(100%, 200px)",
                                    boxShadow: recording ? "0 0 15px #ff4444" : "0 0 10px #00ccff"
                                },
                                className: "jsx-a7c6f87b37b4e3b4",
                                children: recording ? "Stop" : gestureMode ? "Start Gesture" : "Start Recording"
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 348,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 327,
                        columnNumber: 11
                    }, this),
                    gestureMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                        ref: videoRef,
                        autoPlay: true,
                        muted: true,
                        style: {
                            width: "min(100%, 320px)",
                            height: "min(75vw, 240px)",
                            marginTop: "1rem",
                            border: "2px solid #00ccff",
                            borderRadius: "10px",
                            transform: "scaleX(-1)" // Mirror effect
                        },
                        className: "jsx-a7c6f87b37b4e3b4"
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 366,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.js",
                lineNumber: 293,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginTop: "2rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                    alignItems: "center"
                },
                className: "jsx-a7c6f87b37b4e3b4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontSize: "clamp(1.5rem, 4vw, 2rem)",
                            color: "#ffd700",
                            textShadow: "0 0 10px #ffd700"
                        },
                        className: "jsx-a7c6f87b37b4e3b4",
                        children: "All Missions Complete!"
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 389,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/finale",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            style: {
                                padding: "clamp(0.5rem, 2vw, 0.75rem) clamp(1rem, 3vw, 1.5rem)",
                                fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
                                background: "linear-gradient(45deg, #00ccff, #ff00ff)",
                                color: "#fff",
                                border: "none",
                                borderRadius: "10px",
                                cursor: "pointer",
                                boxShadow: "0 0 15px #00ccff",
                                animation: "glow 1.5s infinite alternate"
                            },
                            className: "jsx-a7c6f87b37b4e3b4",
                            children: "Next Cosmic Caper!"
                        }, void 0, false, {
                            fileName: "[project]/app/page.js",
                            lineNumber: 395,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 394,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.js",
                lineNumber: 382,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "a7c6f87b37b4e3b4",
                children: "@keyframes pulse{0%{transform:scale(1)}50%{transform:scale(1.05)}to{transform:scale(1)}}@keyframes shine{0%{text-shadow:0 0 5px #0cf,0 0 10px #0cf,0 0 15px #fff}50%{text-shadow:0 0 10px #0cf,0 0 20px #0cf,0 0 30px #fff}to{text-shadow:0 0 5px #0cf,0 0 10px #0cf,0 0 15px #fff}}@keyframes glow{0%{box-shadow:0 0 10px #0cf}to{box-shadow:0 0 20px #f0f}}@media (width<=600px){.mission-container{padding:1rem}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.js",
        lineNumber: 237,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__e98f8976._.js.map