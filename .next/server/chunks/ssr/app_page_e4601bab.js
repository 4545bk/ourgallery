module.exports = {

"[project]/app/page.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Home)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fullcalendar$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fullcalendar/react/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fullcalendar$2f$daygrid$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fullcalendar/daygrid/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fullcalendar$2f$interaction$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fullcalendar/interaction/index.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function Home() {
    const [events, setEvents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [roomName, setRoomName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [isCallStarted, setIsCallStarted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [jitsiLoaded, setJitsiLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Load Jitsi script
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!window.JitsiMeetExternalAPI) {
            const script = document.createElement("script");
            script.src = "https://meet.jit.si/external_api.js";
            script.async = true;
            script.onload = ()=>setJitsiLoaded(true);
            script.onerror = ()=>setError("Failed to load Jitsi script");
            document.body.appendChild(script);
            return ()=>document.body.removeChild(script);
        } else {
            setJitsiLoaded(true);
        }
    }, []);
    // Fetch events
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetch("/api/events").then((res)=>{
            if (!res.ok) throw new Error("Failed to fetch events");
            return res.json();
        }).then((data)=>setEvents(data)).catch((err)=>setError(err.message));
    }, []);
    // Start Jitsi call
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isCallStarted && roomName && jitsiLoaded && window.JitsiMeetExternalAPI) {
            const domain = "meet.jit.si";
            const options = {
                roomName: roomName,
                parentNode: document.querySelector("#meet"),
                width: "100%",
                height: 500
            };
            const api = new window.JitsiMeetExternalAPI(domain, options);
            return ()=>api.dispose();
        }
    }, [
        isCallStarted,
        roomName,
        jitsiLoaded
    ]);
    // Initialize particles.js
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (window.particlesJS) {
            window.particlesJS("particles-js", {
                particles: {
                    number: {
                        value: 80,
                        density: {
                            enable: true,
                            value_area: 800
                        }
                    },
                    color: {
                        value: "#00dbff"
                    },
                    shape: {
                        type: "circle"
                    },
                    opacity: {
                        value: 0.5,
                        random: true
                    },
                    size: {
                        value: 3,
                        random: true
                    },
                    line_linked: {
                        enable: true,
                        distance: 150,
                        color: "#00dbff",
                        opacity: 0.4,
                        width: 1
                    },
                    move: {
                        enable: true,
                        speed: 2,
                        direction: "none",
                        random: false,
                        straight: false,
                        out_mode: "out",
                        bounce: false
                    }
                },
                interactivity: {
                    detect_on: "canvas",
                    events: {
                        onhover: {
                            enable: true,
                            mode: "repulse"
                        },
                        onclick: {
                            enable: true,
                            mode: "push"
                        },
                        resize: true
                    },
                    modes: {
                        repulse: {
                            distance: 100,
                            duration: 0.4
                        },
                        push: {
                            particles_nb: 4
                        }
                    }
                },
                retina_detect: true
            });
        }
    }, []);
    const handleDateClick = async (arg)=>{
        const title = prompt("Enter event name:");
        if (title) {
            const newEvent = {
                title,
                date: arg.dateStr,
                votes: []
            };
            try {
                const res = await fetch("/api/events", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(newEvent)
                });
                if (!res.ok) throw new Error("Failed to create event");
                const savedEvent = await res.json();
                setEvents([
                    ...events,
                    savedEvent
                ]);
            } catch (err) {
                setError(err.message);
            }
        }
    };
    const handleEventClick = async (info)=>{
        const eventId = info.event.id;
        const userName = prompt("Enter your name to vote:");
        if (userName) {
            try {
                const res = await fetch(`/api/events/vote`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        eventId,
                        userName
                    })
                });
                if (!res.ok) throw new Error("Failed to vote");
                const updatedEvents = await fetch("/api/events").then((res)=>res.json());
                setEvents(updatedEvents);
            } catch (err) {
                setError(err.message);
            }
        }
    };
    const handleStartCall = ()=>{
        if (roomName.trim()) {
            if (!jitsiLoaded) {
                alert("Jitsi is still loading, please wait...");
            } else {
                setIsCallStarted(true);
            }
        } else {
            alert("Please enter a room name!");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            minHeight: "100vh",
            background: "linear-gradient(135deg, #0a0a0a 0%, #1c2526 100%)",
            color: "#d4faff",
            fontFamily: "'Orbitron', 'Roboto', sans-serif",
            overflow: "auto",
            position: "relative"
        },
        className: "jsx-edf6c687102563dc",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                style: {
                    textAlign: "center",
                    padding: "100px 20px",
                    backgroundImage: "url('/grandpa.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    minHeight: "70vh",
                    position: "relative",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center"
                },
                className: "jsx-edf6c687102563dc",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            background: "linear-gradient(45deg, rgba(0, 20, 40, 0.8), rgba(0, 0, 0, 0.8))",
                            zIndex: 0
                        },
                        className: "jsx-edf6c687102563dc"
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 179,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        style: {
                            fontSize: "5rem",
                            color: "#00dbff",
                            fontWeight: 700,
                            letterSpacing: "2px",
                            textShadow: "0 0 20px rgba(0, 219, 255, 0.8), 0 0 40px rgba(0, 219, 255, 0.4)",
                            marginBottom: "20px",
                            position: "relative",
                            zIndex: 1
                        },
                        className: "jsx-edf6c687102563dc",
                        children: "Cousin Chronicles"
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 190,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontSize: "1.6rem",
                            color: "#b0eaff",
                            fontFamily: "'Roboto', sans-serif",
                            maxWidth: "700px",
                            margin: "0 auto 40px",
                            textShadow: "0 0 10px rgba(0, 219, 255, 0.5)",
                            position: "relative",
                            zIndex: 1
                        },
                        className: "jsx-edf6c687102563dc",
                        children: "A quantum leap in family connectivity"
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 204,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/public/images/foto (5).jpg",
                        style: {
                            display: "inline-block",
                            padding: "15px 40px",
                            fontSize: "1.3rem",
                            color: "#ffffff",
                            background: "linear-gradient(90deg, #00dbff, #ff00cc)",
                            border: "2px solid #00dbff",
                            borderRadius: "30px",
                            textDecoration: "none",
                            transition: "all 0.4s ease",
                            boxShadow: "0 0 20px rgba(0, 219, 255, 0.6), 0 0 40px rgba(255, 0, 204, 0.4)",
                            position: "relative",
                            zIndex: 1,
                            animation: "pulseGlow 2s infinite"
                        },
                        onMouseOver: (e)=>{
                            e.target.style.transform = "scale(1.05)";
                            e.target.style.boxShadow = "0 0 30px rgba(0, 219, 255, 0.8), 0 0 60px rgba(255, 0, 204, 0.6)";
                        },
                        onMouseOut: (e)=>{
                            e.target.style.transform = "scale(1)";
                            e.target.style.boxShadow = "0 0 20px rgba(0, 219, 255, 0.6), 0 0 40px rgba(255, 0, 204, 0.4)";
                        },
                        children: "Enter to Gallery"
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 218,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.js",
                lineNumber: 162,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                style: {
                    padding: "80px 20px",
                    position: "relative",
                    zIndex: 1
                },
                className: "jsx-edf6c687102563dc",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        style: {
                            marginBottom: "100px",
                            textAlign: "center",
                            background: "rgba(10, 20, 30, 0.9)",
                            borderRadius: "20px",
                            padding: "50px",
                            boxShadow: "0 10px 40px rgba(0, 219, 255, 0.3), 0 0 60px rgba(0, 0, 0, 0.7)",
                            border: "1px solid rgba(0, 219, 255, 0.2)"
                        },
                        className: "jsx-edf6c687102563dc",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    fontSize: "2.5rem",
                                    color: "#00dbff",
                                    fontWeight: 600,
                                    marginBottom: "25px",
                                    letterSpacing: "1.5px",
                                    textShadow: "0 0 15px rgba(0, 219, 255, 0.7)"
                                },
                                className: "jsx-edf6c687102563dc",
                                children: "Temporal Scheduler"
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 261,
                                columnNumber: 11
                            }, this),
                            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: "#ff66cc",
                                    fontSize: "1.2rem",
                                    marginBottom: "25px",
                                    textShadow: "0 0 10px rgba(255, 102, 204, 0.5)"
                                },
                                className: "jsx-edf6c687102563dc",
                                children: [
                                    "Alert: ",
                                    error
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 274,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    maxWidth: "1000px",
                                    margin: "0 auto"
                                },
                                className: "jsx-edf6c687102563dc",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fullcalendar$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    plugins: [
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fullcalendar$2f$daygrid$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fullcalendar$2f$interaction$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
                                    ],
                                    initialView: "dayGridMonth",
                                    events: events.map((event)=>({
                                            title: `${event.title} (Votes: ${event.votes.length})`,
                                            date: event.date,
                                            id: event._id
                                        })),
                                    dateClick: handleDateClick,
                                    eventClick: handleEventClick,
                                    height: "600px",
                                    style: {
                                        background: "rgba(255, 255, 255, 0.95)",
                                        borderRadius: "15px",
                                        boxShadow: "0 5px 25px rgba(0, 219, 255, 0.4)",
                                        border: "1px solid rgba(0, 219, 255, 0.3)"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/page.js",
                                    lineNumber: 286,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 285,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 250,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        style: {
                            textAlign: "center",
                            background: "rgba(10, 20, 30, 0.9)",
                            borderRadius: "20px",
                            padding: "50px",
                            boxShadow: "0 10px 40px rgba(0, 219, 255, 0.3), 0 0 60px rgba(0, 0, 0, 0.7)",
                            border: "1px solid rgba(0, 219, 255, 0.2)"
                        },
                        className: "jsx-edf6c687102563dc",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    fontSize: "2.5rem",
                                    color: "#00dbff",
                                    fontWeight: 600,
                                    marginBottom: "25px",
                                    letterSpacing: "1.5px",
                                    textShadow: "0 0 15px rgba(0, 219, 255, 0.7)"
                                },
                                className: "jsx-edf6c687102563dc",
                                children: "Holo-Comm Portal"
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 318,
                                columnNumber: 11
                            }, this),
                            !isCallStarted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    justifyContent: "center",
                                    gap: "20px",
                                    flexWrap: "wrap"
                                },
                                className: "jsx-edf6c687102563dc",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: roomName,
                                        onChange: (e)=>setRoomName(e.target.value),
                                        placeholder: "Enter portal code",
                                        style: {
                                            padding: "15px 25px",
                                            fontSize: "1.1rem",
                                            width: "320px",
                                            borderRadius: "30px",
                                            border: "2px solid rgba(0, 219, 255, 0.4)",
                                            background: "rgba(0, 20, 40, 0.8)",
                                            color: "#d4faff",
                                            outline: "none",
                                            transition: "all 0.3s ease",
                                            boxShadow: "0 0 15px rgba(0, 219, 255, 0.3)"
                                        },
                                        onFocus: (e)=>{
                                            e.target.style.borderColor = "#00dbff";
                                            e.target.style.boxShadow = "0 0 25px rgba(0, 219, 255, 0.6)";
                                        },
                                        onBlur: (e)=>{
                                            e.target.style.borderColor = "rgba(0, 219, 255, 0.4)";
                                            e.target.style.boxShadow = "0 0 15px rgba(0, 219, 255, 0.3)";
                                        },
                                        className: "jsx-edf6c687102563dc"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 339,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleStartCall,
                                        style: {
                                            padding: "15px 40px",
                                            fontSize: "1.1rem",
                                            background: "linear-gradient(90deg, #00dbff, #ff00cc)",
                                            border: "2px solid #00dbff",
                                            borderRadius: "30px",
                                            color: "#ffffff",
                                            cursor: "pointer",
                                            transition: "all 0.4s ease",
                                            boxShadow: "0 0 20px rgba(0, 219, 255, 0.6), 0 0 40px rgba(255, 0, 204, 0.4)",
                                            animation: "pulseGlow 2s infinite"
                                        },
                                        onMouseOver: (e)=>{
                                            e.target.style.transform = "scale(1.05)";
                                            e.target.style.boxShadow = "0 0 30px rgba(0, 219, 255, 0.8), 0 0 60px rgba(255, 0, 204, 0.6)";
                                        },
                                        onMouseOut: (e)=>{
                                            e.target.style.transform = "scale(1)";
                                            e.target.style.boxShadow = "0 0 20px rgba(0, 219, 255, 0.6), 0 0 40px rgba(255, 0, 204, 0.4)";
                                        },
                                        className: "jsx-edf6c687102563dc",
                                        children: "Activate Portal"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 365,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 331,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                id: "meet",
                                style: {
                                    marginTop: "25px",
                                    borderRadius: "15px",
                                    overflow: "hidden",
                                    boxShadow: "0 5px 25px rgba(0, 219, 255, 0.4)",
                                    border: "1px solid rgba(0, 219, 255, 0.3)"
                                },
                                className: "jsx-edf6c687102563dc"
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 392,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 308,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.js",
                lineNumber: 248,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "edf6c687102563dc",
                children: "@keyframes holoShift{0%{transform:translate(-100%)translateY(-100%)}to{transform:translate(100%)translateY(100%)}}@keyframes pulseGlow{0%{box-shadow:0 0 20px #00dbff99,0 0 40px #f0c6}50%{box-shadow:0 0 30px #00dbffcc,0 0 50px #f0c9}to{box-shadow:0 0 20px #00dbff99,0 0 40px #f0c6}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.js",
        lineNumber: 151,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=app_page_e4601bab.js.map