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
    "default": (()=>Home)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
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
;
function Home() {
    const [events, setEvents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [roomName, setRoomName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [isCallStarted, setIsCallStarted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [jitsiLoaded, setJitsiLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("dark");
    const [currentTime, setCurrentTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [notification, setNotification] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [chatOpen, setChatOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [chatMessages, setChatMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [chatInput, setChatInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    // Load Jitsi script
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!window.JitsiMeetExternalAPI) {
            const script = document.createElement("script");
            script.src = "https://meet.jit.si/external_api.js";
            script.async = true;
            script.onload = ()=>{
                setJitsiLoaded(true);
                setProgress(100);
            };
            script.onerror = ()=>{
                setError("Failed to load Jitsi script");
                setProgress(0);
            };
            document.body.appendChild(script);
            let progressInterval = setInterval(()=>{
                setProgress((prev)=>prev < 90 ? prev + 10 : prev);
            }, 200);
            return ()=>{
                clearInterval(progressInterval);
                document.body.removeChild(script);
            };
        } else {
            setJitsiLoaded(true);
            setProgress(100);
        }
    }, []);
    // Fetch events
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetch("/api/events").then((res)=>{
            if (!res.ok) throw new Error("Failed to fetch events");
            return res.json();
        }).then((data)=>{
            console.log("Fetched events:", data);
            setEvents(data);
        }).catch((err)=>setError(err.message));
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
            setNotification(`Meeting "${roomName}" activated!`);
            setTimeout(()=>setNotification(""), 5000);
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
                        value: theme === "dark" ? "#00dbff" : "#ffcc00"
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
                        color: theme === "dark" ? "#00dbff" : "#ffcc00",
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
    }, [
        theme
    ]);
    // Scroll-based fade-in for sections
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const sections = document.querySelectorAll("section");
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                if (entry.isIntersecting) {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";
                }
            });
        }, {
            threshold: 0.2
        });
        sections.forEach((section)=>{
            section.style.opacity = "0";
            section.style.transform = "translateY(50px)";
            section.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
            observer.observe(section);
        });
        return ()=>sections.forEach((section)=>observer.unobserve(section));
    }, []);
    // Set initial time and check events
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const updateTimeAndEvents = async ()=>{
            const now = new Date();
            const eatOffset = 3 * 60 * 60 * 1000;
            const nowEAT = new Date(now.getTime() + eatOffset);
            setCurrentTime(nowEAT.toLocaleTimeString("en-US", {
                timeZone: "UTC",
                hour12: true
            }));
            console.log("Checking events at:", nowEAT.toISOString());
            events.forEach(async (event)=>{
                console.log("Raw event data:", event);
                const dateTimeString = `${event.date}T${event.time || "00:00"}`;
                let eventDateTime;
                try {
                    eventDateTime = new Date(dateTimeString);
                    if (isNaN(eventDateTime.getTime())) throw new Error("Invalid date/time");
                    const eventDateTimeEAT = new Date(eventDateTime.getTime() + eatOffset);
                    console.log("Event:", event.title, "Scheduled:", eventDateTimeEAT.toISOString(), "Raw time:", event.time);
                    if (nowEAT.getFullYear() === eventDateTimeEAT.getFullYear() && nowEAT.getMonth() === eventDateTimeEAT.getMonth() && nowEAT.getDate() === eventDateTimeEAT.getDate() && nowEAT.getHours() === eventDateTimeEAT.getHours() && nowEAT.getMinutes() === eventDateTimeEAT.getMinutes()) {
                        console.log("Match found for:", event.title);
                        try {
                            const res = await fetch("/api/telegram", {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify({
                                    message: `Hello Ayano family 👋 this is an automated message to let u know the  Event"${event.title}" is starting now!`
                                })
                            });
                            if (!res.ok) throw new Error("Telegram API call failed");
                            setNotification(`Event "${event.title}" started - Telegram notified!`);
                            setTimeout(()=>setNotification(""), 5000);
                        } catch (err) {
                            setError("Failed to send Telegram notification: " + err.message);
                            console.error(err);
                        }
                    }
                } catch (err) {
                    console.error("Invalid event date/time:", event, "Error:", err.message);
                    setError(`Invalid date/time for event "${event.title || "unknown"}"`);
                }
            });
        };
        updateTimeAndEvents();
        const interval = setInterval(updateTimeAndEvents, 10000);
        return ()=>clearInterval(interval);
    }, [
        events
    ]);
    const handleDateClick = async (arg)=>{
        const title = prompt("Enter event name:");
        if (title) {
            const timeInput = prompt("Enter time in EAT (e.g., 3:02 or 3:02 PM):") || "00:00";
            let time;
            let hours, minutes;
            if (/^\d{1,2}:\d{2}\s?(AM|PM)?$/i.test(timeInput)) {
                const [timePart, period = "PM"] = timeInput.split(/\s+/);
                [hours, minutes] = timePart.split(":");
                hours = parseInt(hours);
                if (period.toUpperCase() === "PM" && hours !== 12) hours += 12;
                if (period.toUpperCase() === "AM" && hours === 12) hours = 0;
                time = `${hours.toString().padStart(2, "0")}:${minutes}`;
            } else {
                alert("Invalid time format! Use H:MM (e.g., 3:02) or H:MM AM/PM (e.g., 3:02 PM)");
                return;
            }
            const newEvent = {
                title,
                date: arg.dateStr,
                time,
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
                const displayTime = `${parseInt(time.split(":")[0]) % 12 || 12}:${time.split(":")[1]} ${parseInt(time.split(":")[0]) >= 12 ? "PM" : "AM"}`;
                setNotification(`Event "${title}" scheduled for ${arg.dateStr} ${displayTime} EAT!`);
                setTimeout(()=>setNotification(""), 5000);
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
                setNotification(`Vote added by ${userName}!`);
                setTimeout(()=>setNotification(""), 5000);
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
    const toggleTheme = ()=>{
        setTheme((prev)=>prev === "dark" ? "light" : "dark");
    };
    // Chatbot Logic
    const handleChatSubmit = async (e)=>{
        e.preventDefault();
        if (!chatInput.trim()) return;
        const userMessage = {
            text: chatInput,
            sender: "user"
        };
        setChatMessages([
            ...chatMessages,
            userMessage
        ]);
        setChatInput("");
        const now = new Date();
        const eatOffset = 3 * 60 * 60 * 1000;
        const nowEAT = new Date(now.getTime() + eatOffset);
        let botResponse = {
            text: "",
            sender: "bot"
        };
        if (/what time is it/i.test(chatInput)) {
            botResponse.text = `It's currently ${nowEAT.toLocaleTimeString("en-US", {
                timeZone: "UTC",
                hour12: true
            })} EAT.`;
        } else if (/schedule|set|add/i.test(chatInput)) {
            const timeMatch = chatInput.match(/(\d{1,2}:\d{2})\s?(AM|PM)?/i);
            const dateMatch = chatInput.match(/(today|tomorrow|\d{4}-\d{2}-\d{2})/i);
            const titleMatch = chatInput.match(/(schedule|set|add)\s*(.+?)\s*(at|on|for)/i);
            if (timeMatch) {
                let [_, timePart, period = "PM"] = timeMatch;
                let [hours, minutes] = timePart.split(":");
                hours = parseInt(hours);
                if (period.toUpperCase() === "PM" && hours !== 12) hours += 12;
                if (period.toUpperCase() === "AM" && hours === 12) hours = 0;
                const time = `${hours.toString().padStart(2, "0")}:${minutes}`;
                const date = dateMatch ? dateMatch[1].toLowerCase() === "today" ? nowEAT.toISOString().split("T")[0] : dateMatch[1].toLowerCase() === "tomorrow" ? new Date(nowEAT.getTime() + 24 * 60 * 60 * 1000).toISOString().split("T")[0] : dateMatch[1] : nowEAT.toISOString().split("T")[0];
                const title = titleMatch ? titleMatch[2] : "Chatbot Event";
                const newEvent = {
                    title,
                    date,
                    time,
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
                    const displayTime = `${parseInt(time.split(":")[0]) % 12 || 12}:${time.split(":")[1]} ${parseInt(time.split(":")[0]) >= 12 ? "PM" : "AM"}`;
                    botResponse.text = `Event "${title}" scheduled for ${date} at ${displayTime} EAT!`;
                } catch (err) {
                    botResponse.text = "Sorry, I couldn't schedule that event. Try again!";
                }
            } else {
                botResponse.text = "Please include a time (e.g., 'Schedule a meeting at 3:02 PM').";
            }
        } else if (/events|schedule/i.test(chatInput)) {
            if (events.length > 0) {
                const eventList = events.map((e)=>{
                    const [hours, minutes] = e.time.split(":");
                    const hours12 = parseInt(hours) % 12 || 12;
                    const period = parseInt(hours) >= 12 ? "PM" : "AM";
                    return `${e.title} on ${e.date} at ${hours12}:${minutes} ${period}`;
                }).join("\n");
                botResponse.text = `Here are your scheduled events:\n${eventList}`;
            } else {
                botResponse.text = "No events scheduled yet!";
            }
        } else {
            botResponse.text = "Hi! I can help you schedule events or check the time. Try saying 'Schedule a meeting at 3 PM tomorrow' or 'What time is it?'";
        }
        setChatMessages((prev)=>[
                ...prev,
                botResponse
            ]);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            minHeight: "100vh",
            background: theme === "dark" ? "linear-gradient(135deg, #0a0a0a 0%, #1c2526 100%)" : "linear-gradient(135deg, #f0f0f0 0%, #d9e6e6 100%)",
            color: theme === "dark" ? "#d4faff" : "#1c2526",
            fontFamily: "'Orbitron', 'Roboto', sans-serif",
            overflow: "auto",
            position: "relative",
            transition: "background 0.5s ease"
        },
        id: "particles-js",
        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
            [
                "6d6f4f03b1833620",
                [
                    theme === "dark" ? "rgba(0, 219, 255, 0.2)" : "rgba(255, 204, 0, 0.2)",
                    theme === "dark" ? "rgba(255, 0, 204, 0.1)" : "rgba(255, 102, 0, 0.1)",
                    theme === "dark" ? "rgba(0, 219, 255, 0.3)" : "rgba(255, 204, 0, 0.3)",
                    theme === "dark" ? "rgba(255, 0, 204, 0.2)" : "rgba(255, 102, 0, 0.2)",
                    theme === "dark" ? "rgba(0, 219, 255, 0.2)" : "rgba(255, 204, 0, 0.2)",
                    theme === "dark" ? "rgba(255, 0, 204, 0.1)" : "rgba(255, 102, 0, 0.1)",
                    theme === "dark" ? "rgba(0, 219, 255, 0.5)" : "rgba(255, 102, 0, 0.5)",
                    theme === "dark" ? "rgba(0, 219, 255, 0.8)" : "rgba(255, 102, 0, 0.8)",
                    theme === "dark" ? "rgba(255, 0, 204, 0.5)" : "rgba(255, 51, 0, 0.5)",
                    theme === "dark" ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.2)",
                    theme === "dark" ? "rgba(255, 255, 255, 0.8)" : "rgba(0, 0, 0, 0.8)",
                    theme === "dark" ? "rgba(0, 219, 255, 0.2)" : "rgba(255, 204, 0, 0.2)",
                    theme === "dark" ? "rgba(0, 219, 255, 0.8)" : "rgba(255, 204, 0, 0.8)",
                    theme === "dark" ? "0 0 20px rgba(0, 219, 255, 0.6), 0 0 40px rgba(255, 0, 204, 0.4)" : "0 0 20px rgba(255, 204, 0, 0.6), 0 0 40px rgba(255, 102, 0, 0.4)",
                    theme === "dark" ? "0 0 20px rgba(0, 219, 255, 0.6), 0 0 40px rgba(255, 0, 204, 0.4)" : "0 0 20px rgba(255, 204, 0, 0.6), 0 0 40px rgba(255, 102, 0, 0.4)",
                    theme === "dark" ? "0 0 30px rgba(0, 219, 255, 0.8), 0 0 50px rgba(255, 0, 204, 0.6)" : "0 0 30px rgba(255, 204, 0, 0.8), 0 0 50px rgba(255, 102, 0, 0.6)",
                    theme === "dark" ? "0 0 20px rgba(0, 219, 255, 0.6), 0 0 40px rgba(255, 0, 204, 0.4)" : "0 0 20px rgba(255, 204, 0, 0.6), 0 0 40px rgba(255, 102, 0, 0.4)",
                    theme === "dark" ? "linear-gradient(45deg, #00dbff, #ff00cc, #00dbff, #ff00cc)" : "linear-gradient(45deg, #ffcc00, #ff6600, #ffcc00, #ff6600)",
                    theme === "dark" ? "linear-gradient(225deg, #ff00cc, #00dbff, #ff00cc, #00dbff)" : "linear-gradient(225deg, #ff6600, #ffcc00, #ff6600, #ffcc00)",
                    theme === "dark" ? "linear-gradient(45deg, #00dbff, #ff00cc, #00dbff, #ff00cc)" : "linear-gradient(45deg, #ffcc00, #ff6600, #ffcc00, #ff6600)"
                ]
            ]
        ]),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                style: {
                    position: "relative",
                    minHeight: "70vh",
                    width: "100%",
                    overflow: "hidden",
                    border: "4px solid transparent",
                    borderImage: theme === "dark" ? "linear-gradient(45deg, #00dbff, #ff00cc, #00dbff, #ff00cc) 10" : "linear-gradient(45deg, #ffcc00, #ff6600, #ffcc00, #ff6600) 10",
                    animation: "snakeRoller 6s linear infinite"
                },
                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                    [
                        "6d6f4f03b1833620",
                        [
                            theme === "dark" ? "rgba(0, 219, 255, 0.2)" : "rgba(255, 204, 0, 0.2)",
                            theme === "dark" ? "rgba(255, 0, 204, 0.1)" : "rgba(255, 102, 0, 0.1)",
                            theme === "dark" ? "rgba(0, 219, 255, 0.3)" : "rgba(255, 204, 0, 0.3)",
                            theme === "dark" ? "rgba(255, 0, 204, 0.2)" : "rgba(255, 102, 0, 0.2)",
                            theme === "dark" ? "rgba(0, 219, 255, 0.2)" : "rgba(255, 204, 0, 0.2)",
                            theme === "dark" ? "rgba(255, 0, 204, 0.1)" : "rgba(255, 102, 0, 0.1)",
                            theme === "dark" ? "rgba(0, 219, 255, 0.5)" : "rgba(255, 102, 0, 0.5)",
                            theme === "dark" ? "rgba(0, 219, 255, 0.8)" : "rgba(255, 102, 0, 0.8)",
                            theme === "dark" ? "rgba(255, 0, 204, 0.5)" : "rgba(255, 51, 0, 0.5)",
                            theme === "dark" ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.2)",
                            theme === "dark" ? "rgba(255, 255, 255, 0.8)" : "rgba(0, 0, 0, 0.8)",
                            theme === "dark" ? "rgba(0, 219, 255, 0.2)" : "rgba(255, 204, 0, 0.2)",
                            theme === "dark" ? "rgba(0, 219, 255, 0.8)" : "rgba(255, 204, 0, 0.8)",
                            theme === "dark" ? "0 0 20px rgba(0, 219, 255, 0.6), 0 0 40px rgba(255, 0, 204, 0.4)" : "0 0 20px rgba(255, 204, 0, 0.6), 0 0 40px rgba(255, 102, 0, 0.4)",
                            theme === "dark" ? "0 0 20px rgba(0, 219, 255, 0.6), 0 0 40px rgba(255, 0, 204, 0.4)" : "0 0 20px rgba(255, 204, 0, 0.6), 0 0 40px rgba(255, 102, 0, 0.4)",
                            theme === "dark" ? "0 0 30px rgba(0, 219, 255, 0.8), 0 0 50px rgba(255, 0, 204, 0.6)" : "0 0 30px rgba(255, 204, 0, 0.8), 0 0 50px rgba(255, 102, 0, 0.6)",
                            theme === "dark" ? "0 0 20px rgba(0, 219, 255, 0.6), 0 0 40px rgba(255, 0, 204, 0.4)" : "0 0 20px rgba(255, 204, 0, 0.6), 0 0 40px rgba(255, 102, 0, 0.4)",
                            theme === "dark" ? "linear-gradient(45deg, #00dbff, #ff00cc, #00dbff, #ff00cc)" : "linear-gradient(45deg, #ffcc00, #ff6600, #ffcc00, #ff6600)",
                            theme === "dark" ? "linear-gradient(225deg, #ff00cc, #00dbff, #ff00cc, #00dbff)" : "linear-gradient(225deg, #ff6600, #ffcc00, #ff6600, #ffcc00)",
                            theme === "dark" ? "linear-gradient(45deg, #00dbff, #ff00cc, #00dbff, #ff00cc)" : "linear-gradient(45deg, #ffcc00, #ff6600, #ffcc00, #ff6600)"
                        ]
                    ]
                ]),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            background: theme === "dark" ? "radial-gradient(circle, rgba(0, 219, 255, 0.2) 0%, rgba(255, 0, 204, 0.1) 50%, transparent 70%)" : "radial-gradient(circle, rgba(255, 204, 0, 0.2) 0%, rgba(255, 102, 0, 0.1) 50%, transparent 70%)",
                            animation: "backgroundGlow 5s ease-in-out infinite",
                            zIndex: 0
                        },
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                            [
                                "6d6f4f03b1833620",
                                [
                                    theme === "dark" ? "rgba(0, 219, 255, 0.2)" : "rgba(255, 204, 0, 0.2)",
                                    theme === "dark" ? "rgba(255, 0, 204, 0.1)" : "rgba(255, 102, 0, 0.1)",
                                    theme === "dark" ? "rgba(0, 219, 255, 0.3)" : "rgba(255, 204, 0, 0.3)",
                                    theme === "dark" ? "rgba(255, 0, 204, 0.2)" : "rgba(255, 102, 0, 0.2)",
                                    theme === "dark" ? "rgba(0, 219, 255, 0.2)" : "rgba(255, 204, 0, 0.2)",
                                    theme === "dark" ? "rgba(255, 0, 204, 0.1)" : "rgba(255, 102, 0, 0.1)",
                                    theme === "dark" ? "rgba(0, 219, 255, 0.5)" : "rgba(255, 102, 0, 0.5)",
                                    theme === "dark" ? "rgba(0, 219, 255, 0.8)" : "rgba(255, 102, 0, 0.8)",
                                    theme === "dark" ? "rgba(255, 0, 204, 0.5)" : "rgba(255, 51, 0, 0.5)",
                                    theme === "dark" ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.2)",
                                    theme === "dark" ? "rgba(255, 255, 255, 0.8)" : "rgba(0, 0, 0, 0.8)",
                                    theme === "dark" ? "rgba(0, 219, 255, 0.2)" : "rgba(255, 204, 0, 0.2)",
                                    theme === "dark" ? "rgba(0, 219, 255, 0.8)" : "rgba(255, 204, 0, 0.8)",
                                    theme === "dark" ? "0 0 20px rgba(0, 219, 255, 0.6), 0 0 40px rgba(255, 0, 204, 0.4)" : "0 0 20px rgba(255, 204, 0, 0.6), 0 0 40px rgba(255, 102, 0, 0.4)",
                                    theme === "dark" ? "0 0 20px rgba(0, 219, 255, 0.6), 0 0 40px rgba(255, 0, 204, 0.4)" : "0 0 20px rgba(255, 204, 0, 0.6), 0 0 40px rgba(255, 102, 0, 0.4)",
                                    theme === "dark" ? "0 0 30px rgba(0, 219, 255, 0.8), 0 0 50px rgba(255, 0, 204, 0.6)" : "0 0 30px rgba(255, 204, 0, 0.8), 0 0 50px rgba(255, 102, 0, 0.6)",
                                    theme === "dark" ? "0 0 20px rgba(0, 219, 255, 0.6), 0 0 40px rgba(255, 0, 204, 0.4)" : "0 0 20px rgba(255, 204, 0, 0.6), 0 0 40px rgba(255, 102, 0, 0.4)",
                                    theme === "dark" ? "linear-gradient(45deg, #00dbff, #ff00cc, #00dbff, #ff00cc)" : "linear-gradient(45deg, #ffcc00, #ff6600, #ffcc00, #ff6600)",
                                    theme === "dark" ? "linear-gradient(225deg, #ff00cc, #00dbff, #ff00cc, #00dbff)" : "linear-gradient(225deg, #ff6600, #ffcc00, #ff6600, #ffcc00)",
                                    theme === "dark" ? "linear-gradient(45deg, #00dbff, #ff00cc, #00dbff, #ff00cc)" : "linear-gradient(45deg, #ffcc00, #ff6600, #ffcc00, #ff6600)"
                                ]
                            ]
                        ])
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 395,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        src: "/images/grandpa.jpg",
                        layout: "fill",
                        objectFit: "cover",
                        alt: "Grandpa Banner",
                        style: {
                            animation: "pulseScale 4s ease-in-out infinite",
                            zIndex: 1
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 410,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            background: theme === "dark" ? "rgba(0, 0, 0, 0.5)" : "rgba(0, 0, 0, 0.2)",
                            zIndex: 2
                        },
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                            [
                                "6d6f4f03b1833620",
                                [
                                    theme === "dark" ? "rgba(0, 219, 255, 0.2)" : "rgba(255, 204, 0, 0.2)",
                                    theme === "dark" ? "rgba(255, 0, 204, 0.1)" : "rgba(255, 102, 0, 0.1)",
                                    theme === "dark" ? "rgba(0, 219, 255, 0.3)" : "rgba(255, 204, 0, 0.3)",
                                    theme === "dark" ? "rgba(255, 0, 204, 0.2)" : "rgba(255, 102, 0, 0.2)",
                                    theme === "dark" ? "rgba(0, 219, 255, 0.2)" : "rgba(255, 204, 0, 0.2)",
                                    theme === "dark" ? "rgba(255, 0, 204, 0.1)" : "rgba(255, 102, 0, 0.1)",
                                    theme === "dark" ? "rgba(0, 219, 255, 0.5)" : "rgba(255, 102, 0, 0.5)",
                                    theme === "dark" ? "rgba(0, 219, 255, 0.8)" : "rgba(255, 102, 0, 0.8)",
                                    theme === "dark" ? "rgba(255, 0, 204, 0.5)" : "rgba(255, 51, 0, 0.5)",
                                    theme === "dark" ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.2)",
                                    theme === "dark" ? "rgba(255, 255, 255, 0.8)" : "rgba(0, 0, 0, 0.8)",
                                    theme === "dark" ? "rgba(0, 219, 255, 0.2)" : "rgba(255, 204, 0, 0.2)",
                                    theme === "dark" ? "rgba(0, 219, 255, 0.8)" : "rgba(255, 204, 0, 0.8)",
                                    theme === "dark" ? "0 0 20px rgba(0, 219, 255, 0.6), 0 0 40px rgba(255, 0, 204, 0.4)" : "0 0 20px rgba(255, 204, 0, 0.6), 0 0 40px rgba(255, 102, 0, 0.4)",
                                    theme === "dark" ? "0 0 20px rgba(0, 219, 255, 0.6), 0 0 40px rgba(255, 0, 204, 0.4)" : "0 0 20px rgba(255, 204, 0, 0.6), 0 0 40px rgba(255, 102, 0, 0.4)",
                                    theme === "dark" ? "0 0 30px rgba(0, 219, 255, 0.8), 0 0 50px rgba(255, 0, 204, 0.6)" : "0 0 30px rgba(255, 204, 0, 0.8), 0 0 50px rgba(255, 102, 0, 0.6)",
                                    theme === "dark" ? "0 0 20px rgba(0, 219, 255, 0.6), 0 0 40px rgba(255, 0, 204, 0.4)" : "0 0 20px rgba(255, 204, 0, 0.6), 0 0 40px rgba(255, 102, 0, 0.4)",
                                    theme === "dark" ? "linear-gradient(45deg, #00dbff, #ff00cc, #00dbff, #ff00cc)" : "linear-gradient(45deg, #ffcc00, #ff6600, #ffcc00, #ff6600)",
                                    theme === "dark" ? "linear-gradient(225deg, #ff00cc, #00dbff, #ff00cc, #00dbff)" : "linear-gradient(225deg, #ff6600, #ffcc00, #ff6600, #ffcc00)",
                                    theme === "dark" ? "linear-gradient(45deg, #00dbff, #ff00cc, #00dbff, #ff00cc)" : "linear-gradient(45deg, #ffcc00, #ff6600, #ffcc00, #ff6600)"
                                ]
                            ]
                        ])
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 420,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            textAlign: "center",
                            zIndex: 3,
                            color: theme === "dark" ? "#ffffff" : "#1c2526",
                            padding: "0 1rem",
                            width: "100%",
                            maxWidth: "1200px"
                        },
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                            [
                                "6d6f4f03b1833620",
                                [
                                    theme === "dark" ? "rgba(0, 219, 255, 0.2)" : "rgba(255, 204, 0, 0.2)",
                                    theme === "dark" ? "rgba(255, 0, 204, 0.1)" : "rgba(255, 102, 0, 0.1)",
                                    theme === "dark" ? "rgba(0, 219, 255, 0.3)" : "rgba(255, 204, 0, 0.3)",
                                    theme === "dark" ? "rgba(255, 0, 204, 0.2)" : "rgba(255, 102, 0, 0.2)",
                                    theme === "dark" ? "rgba(0, 219, 255, 0.2)" : "rgba(255, 204, 0, 0.2)",
                                    theme === "dark" ? "rgba(255, 0, 204, 0.1)" : "rgba(255, 102, 0, 0.1)",
                                    theme === "dark" ? "rgba(0, 219, 255, 0.5)" : "rgba(255, 102, 0, 0.5)",
                                    theme === "dark" ? "rgba(0, 219, 255, 0.8)" : "rgba(255, 102, 0, 0.8)",
                                    theme === "dark" ? "rgba(255, 0, 204, 0.5)" : "rgba(255, 51, 0, 0.5)",
                                    theme === "dark" ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.2)",
                                    theme === "dark" ? "rgba(255, 255, 255, 0.8)" : "rgba(0, 0, 0, 0.8)",
                                    theme === "dark" ? "rgba(0, 219, 255, 0.2)" : "rgba(255, 204, 0, 0.2)",
                                    theme === "dark" ? "rgba(0, 219, 255, 0.8)" : "rgba(255, 204, 0, 0.8)",
                                    theme === "dark" ? "0 0 20px rgba(0, 219, 255, 0.6), 0 0 40px rgba(255, 0, 204, 0.4)" : "0 0 20px rgba(255, 204, 0, 0.6), 0 0 40px rgba(255, 102, 0, 0.4)",
                                    theme === "dark" ? "0 0 20px rgba(0, 219, 255, 0.6), 0 0 40px rgba(255, 0, 204, 0.4)" : "0 0 20px rgba(255, 204, 0, 0.6), 0 0 40px rgba(255, 102, 0, 0.4)",
                                    theme === "dark" ? "0 0 30px rgba(0, 219, 255, 0.8), 0 0 50px rgba(255, 0, 204, 0.6)" : "0 0 30px rgba(255, 204, 0, 0.8), 0 0 50px rgba(255, 102, 0, 0.6)",
                                    theme === "dark" ? "0 0 20px rgba(0, 219, 255, 0.6), 0 0 40px rgba(255, 0, 204, 0.4)" : "0 0 20px rgba(255, 204, 0, 0.6), 0 0 40px rgba(255, 102, 0, 0.4)",
                                    theme === "dark" ? "linear-gradient(45deg, #00dbff, #ff00cc, #00dbff, #ff00cc)" : "linear-gradient(45deg, #ffcc00, #ff6600, #ffcc00, #ff6600)",
                                    theme === "dark" ? "linear-gradient(225deg, #ff00cc, #00dbff, #ff00cc, #00dbff)" : "linear-gradient(225deg, #ff6600, #ffcc00, #ff6600, #ffcc00)",
                                    theme === "dark" ? "linear-gradient(45deg, #00dbff, #ff00cc, #00dbff, #ff00cc)" : "linear-gradient(45deg, #ffcc00, #ff6600, #ffcc00, #ff6600)"
                                ]
                            ]
                        ]),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                style: {
                                    fontSize: "clamp(1.5rem, 6vw, 4rem)",
                                    fontWeight: 700,
                                    textShadow: `2px 2px 4px ${theme === "dark" ? "rgba(0, 0, 0, 0.5)" : "rgba(255, 255, 255, 0.5)"}`,
                                    marginBottom: "0.5rem",
                                    animation: "typewriter 3s steps(30, end) forwards, glowPulse 2s infinite alternate",
                                    whiteSpace: "nowrap",
                                    overflow: "hidden",
                                    borderRight: `3px solid ${theme === "dark" ? "#00dbff" : "#ffcc00"}`
                                },
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                    [
                                        "6d6f4f03b1833620",
                                        [
                                            theme === "dark" ? "rgba(0, 219, 255, 0.2)" : "rgba(255, 204, 0, 0.2)",
                                            theme === "dark" ? "rgba(255, 0, 204, 0.1)" : "rgba(255, 102, 0, 0.1)",
                                            theme === "dark" ? "rgba(0, 219, 255, 0.3)" : "rgba(255, 204, 0, 0.3)",
                                            theme === "dark" ? "rgba(255, 0, 204, 0.2)" : "rgba(255, 102, 0, 0.2)",
                                            theme === "dark" ? "rgba(0, 219, 255, 0.2)" : "rgba(255, 204, 0, 0.2)",
                                            theme === "dark" ? "rgba(255, 0, 204, 0.1)" : "rgba(255, 102, 0, 0.1)",
                                            theme === "dark" ? "rgba(0, 219, 255, 0.5)" : "rgba(255, 102, 0, 0.5)",
                                            theme === "dark" ? "rgba(0, 219, 255, 0.8)" : "rgba(255, 102, 0, 0.8)",
                                            theme === "dark" ? "rgba(255, 0, 204, 0.5)" : "rgba(255, 51, 0, 0.5)",
                                            theme === "dark" ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.2)",
                                            theme === "dark" ? "rgba(255, 255, 255, 0.8)" : "rgba(0, 0, 0, 0.8)",
                                            theme === "dark" ? "rgba(0, 219, 255, 0.2)" : "rgba(255, 204, 0, 0.2)",
                                            theme === "dark" ? "rgba(0, 219, 255, 0.8)" : "rgba(255, 204, 0, 0.8)",
                                            theme === "dark" ? "0 0 20px rgba(0, 219, 255, 0.6), 0 0 40px rgba(255, 0, 204, 0.4)" : "0 0 20px rgba(255, 204, 0, 0.6), 0 0 40px rgba(255, 102, 0, 0.4)",
                                            theme === "dark" ? "0 0 20px rgba(0, 219, 255, 0.6), 0 0 40px rgba(255, 0, 204, 0.4)" : "0 0 20px rgba(255, 204, 0, 0.6), 0 0 40px rgba(255, 102, 0, 0.4)",
                                            theme === "dark" ? "0 0 30px rgba(0, 219, 255, 0.8), 0 0 50px rgba(255, 0, 204, 0.6)" : "0 0 30px rgba(255, 204, 0, 0.8), 0 0 50px rgba(255, 102, 0, 0.6)",
                                            theme === "dark" ? "0 0 20px rgba(0, 219, 255, 0.6), 0 0 40px rgba(255, 0, 204, 0.4)" : "0 0 20px rgba(255, 204, 0, 0.6), 0 0 40px rgba(255, 102, 0, 0.4)",
                                            theme === "dark" ? "linear-gradient(45deg, #00dbff, #ff00cc, #00dbff, #ff00cc)" : "linear-gradient(45deg, #ffcc00, #ff6600, #ffcc00, #ff6600)",
                                            theme === "dark" ? "linear-gradient(225deg, #ff00cc, #00dbff, #ff00cc, #00dbff)" : "linear-gradient(225deg, #ff6600, #ffcc00, #ff6600, #ffcc00)",
                                            theme === "dark" ? "linear-gradient(45deg, #00dbff, #ff00cc, #00dbff, #ff00cc)" : "linear-gradient(45deg, #ffcc00, #ff6600, #ffcc00, #ff6600)"
                                        ]
                                    ]
                                ]),
                                children: "THE Legacy Behind AYANO"
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 445,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontSize: "clamp(0.8rem, 2.5vw, 1.5rem)",
                                    marginBottom: "1.5rem",
                                    animation: "fadeInUpGlow 1.8s ease-out forwards",
                                    animationDelay: "3.2s",
                                    opacity: 0
                                },
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                    [
                                        "6d6f4f03b1833620",
                                        [
                                            theme === "dark" ? "rgba(0, 219, 255, 0.2)" : "rgba(255, 204, 0, 0.2)",
                                            theme === "dark" ? "rgba(255, 0, 204, 0.1)" : "rgba(255, 102, 0, 0.1)",
                                            theme === "dark" ? "rgba(0, 219, 255, 0.3)" : "rgba(255, 204, 0, 0.3)",
                                            theme === "dark" ? "rgba(255, 0, 204, 0.2)" : "rgba(255, 102, 0, 0.2)",
                                            theme === "dark" ? "rgba(0, 219, 255, 0.2)" : "rgba(255, 204, 0, 0.2)",
                                            theme === "dark" ? "rgba(255, 0, 204, 0.1)" : "rgba(255, 102, 0, 0.1)",
                                            theme === "dark" ? "rgba(0, 219, 255, 0.5)" : "rgba(255, 102, 0, 0.5)",
                                            theme === "dark" ? "rgba(0, 219, 255, 0.8)" : "rgba(255, 102, 0, 0.8)",
                                            theme === "dark" ? "rgba(255, 0, 204, 0.5)" : "rgba(255, 51, 0, 0.5)",
                                            theme === "dark" ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.2)",
                                            theme === "dark" ? "rgba(255, 255, 255, 0.8)" : "rgba(0, 0, 0, 0.8)",
                                            theme === "dark" ? "rgba(0, 219, 255, 0.2)" : "rgba(255, 204, 0, 0.2)",
                                            theme === "dark" ? "rgba(0, 219, 255, 0.8)" : "rgba(255, 204, 0, 0.8)",
                                            theme === "dark" ? "0 0 20px rgba(0, 219, 255, 0.6), 0 0 40px rgba(255, 0, 204, 0.4)" : "0 0 20px rgba(255, 204, 0, 0.6), 0 0 40px rgba(255, 102, 0, 0.4)",
                                            theme === "dark" ? "0 0 20px rgba(0, 219, 255, 0.6), 0 0 40px rgba(255, 0, 204, 0.4)" : "0 0 20px rgba(255, 204, 0, 0.6), 0 0 40px rgba(255, 102, 0, 0.4)",
                                            theme === "dark" ? "0 0 30px rgba(0, 219, 255, 0.8), 0 0 50px rgba(255, 0, 204, 0.6)" : "0 0 30px rgba(255, 204, 0, 0.8), 0 0 50px rgba(255, 102, 0, 0.6)",
                                            theme === "dark" ? "0 0 20px rgba(0, 219, 255, 0.6), 0 0 40px rgba(255, 0, 204, 0.4)" : "0 0 20px rgba(255, 204, 0, 0.6), 0 0 40px rgba(255, 102, 0, 0.4)",
                                            theme === "dark" ? "linear-gradient(45deg, #00dbff, #ff00cc, #00dbff, #ff00cc)" : "linear-gradient(45deg, #ffcc00, #ff6600, #ffcc00, #ff6600)",
                                            theme === "dark" ? "linear-gradient(225deg, #ff00cc, #00dbff, #ff00cc, #00dbff)" : "linear-gradient(225deg, #ff6600, #ffcc00, #ff6600, #ffcc00)",
                                            theme === "dark" ? "linear-gradient(45deg, #00dbff, #ff00cc, #00dbff, #ff00cc)" : "linear-gradient(45deg, #ffcc00, #ff6600, #ffcc00, #ff6600)"
                                        ]
                                    ]
                                ]),
                                children: "A quantum leap in family connectivity"
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 459,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/gallery",
                                style: {
                                    position: "relative",
                                    display: "inline-block",
                                    padding: "clamp(8px, 1.5vw, 15px) clamp(15px, 3vw, 40px)",
                                    fontSize: "clamp(0.9rem, 2vw, 1.3rem)",
                                    color: theme === "dark" ? "#ffffff" : "#1c2526",
                                    background: theme === "dark" ? "linear-gradient(90deg, #00dbff, #ff00cc)" : "linear-gradient(90deg, #ffcc00, #ff6600)",
                                    border: `2px solid ${theme === "dark" ? "#00dbff" : "#ffcc00"}`,
                                    borderRadius: "30px",
                                    textDecoration: "none",
                                    transition: "all 0.4s ease",
                                    boxShadow: theme === "dark" ? "0 0 20px rgba(0, 219, 255, 0.6), 0 0 40px rgba(255, 0, 204, 0.4)" : "0 0 20px rgba(255, 204, 0, 0.6), 0 0 40px rgba(255, 102, 0, 0.4)",
                                    animation: "bounceInGlow 2s ease-out forwards",
                                    animationDelay: "3.5s",
                                    overflow: "hidden"
                                },
                                onMouseOver: (e)=>{
                                    e.target.style.transform = "scale(1.05)";
                                    e.target.style.boxShadow = theme === "dark" ? "0 0 30px rgba(0, 219, 255, 0.8), 0 0 60px rgba(255, 0, 204, 0.6)" : "0 0 30px rgba(255, 204, 0, 0.8), 0 0 60px rgba(255, 102, 0, 0.6)";
                                    const ripple = document.createElement("span");
                                    ripple.style.position = "absolute";
                                    ripple.style.width = "100px";
                                    ripple.style.height = "100px";
                                    ripple.style.background = "rgba(255, 255, 255, 0.3)";
                                    ripple.style.borderRadius = "50%";
                                    ripple.style.transform = "scale(0)";
                                    ripple.style.animation = "ripple 0.6s linear";
                                    const rect = e.target.getBoundingClientRect();
                                    const x = e.clientX - rect.left - 50;
                                    const y = e.clientY - rect.top - 50;
                                    ripple.style.left = `${x}px`;
                                    ripple.style.top = `${y}px`;
                                    e.target.appendChild(ripple);
                                    setTimeout(()=>ripple.remove(), 600);
                                },
                                onMouseOut: (e)=>{
                                    e.target.style.transform = "scale(1)";
                                    e.target.style.boxShadow = theme === "dark" ? "0 0 20px rgba(0, 219, 255, 0.6), 0 0 40px rgba(255, 0, 204, 0.4)" : "0 0 20px rgba(255, 204, 0, 0.6), 0 0 40px rgba(255, 102, 0, 0.4)";
                                },
                                children: "Enter to Gallery"
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 470,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "absolute",
                                    top: "10px",
                                    right: "20px",
                                    fontSize: "clamp(1rem, 2vw, 1.5rem)",
                                    color: theme === "dark" ? "#00dbff" : "#ff6600",
                                    textShadow: `0 0 10px ${theme === "dark" ? "rgba(0, 219, 255, 0.7)" : "rgba(255, 102, 0, 0.7)"}`,
                                    animation: "fadeIn 1s ease-out forwards"
                                },
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                    [
                                        "6d6f4f03b1833620",
                                        [
                                            theme === "dark" ? "rgba(0, 219, 255, 0.2)" : "rgba(255, 204, 0, 0.2)",
                                            theme === "dark" ? "rgba(255, 0, 204, 0.1)" : "rgba(255, 102, 0, 0.1)",
                                            theme === "dark" ? "rgba(0, 219, 255, 0.3)" : "rgba(255, 204, 0, 0.3)",
                                            theme === "dark" ? "rgba(255, 0, 204, 0.2)" : "rgba(255, 102, 0, 0.2)",
                                            theme === "dark" ? "rgba(0, 219, 255, 0.2)" : "rgba(255, 204, 0, 0.2)",
                                            theme === "dark" ? "rgba(255, 0, 204, 0.1)" : "rgba(255, 102, 0, 0.1)",
                                            theme === "dark" ? "rgba(0, 219, 255, 0.5)" : "rgba(255, 102, 0, 0.5)",
                                            theme === "dark" ? "rgba(0, 219, 255, 0.8)" : "rgba(255, 102, 0, 0.8)",
                                            theme === "dark" ? "rgba(255, 0, 204, 0.5)" : "rgba(255, 51, 0, 0.5)",
                                            theme === "dark" ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.2)",
                                            theme === "dark" ? "rgba(255, 255, 255, 0.8)" : "rgba(0, 0, 0, 0.8)",
                                            theme === "dark" ? "rgba(0, 219, 255, 0.2)" : "rgba(255, 204, 0, 0.2)",
                                            theme === "dark" ? "rgba(0, 219, 255, 0.8)" : "rgba(255, 204, 0, 0.8)",
                                            theme === "dark" ? "0 0 20px rgba(0, 219, 255, 0.6), 0 0 40px rgba(255, 0, 204, 0.4)" : "0 0 20px rgba(255, 204, 0, 0.6), 0 0 40px rgba(255, 102, 0, 0.4)",
                                            theme === "dark" ? "0 0 20px rgba(0, 219, 255, 0.6), 0 0 40px rgba(255, 0, 204, 0.4)" : "0 0 20px rgba(255, 204, 0, 0.6), 0 0 40px rgba(255, 102, 0, 0.4)",
                                            theme === "dark" ? "0 0 30px rgba(0, 219, 255, 0.8), 0 0 50px rgba(255, 0, 204, 0.6)" : "0 0 30px rgba(255, 204, 0, 0.8), 0 0 50px rgba(255, 102, 0, 0.6)",
                                            theme === "dark" ? "0 0 20px rgba(0, 219, 255, 0.6), 0 0 40px rgba(255, 0, 204, 0.4)" : "0 0 20px rgba(255, 204, 0, 0.6), 0 0 40px rgba(255, 102, 0, 0.4)",
                                            theme === "dark" ? "linear-gradient(45deg, #00dbff, #ff00cc, #00dbff, #ff00cc)" : "linear-gradient(45deg, #ffcc00, #ff6600, #ffcc00, #ff6600)",
                                            theme === "dark" ? "linear-gradient(225deg, #ff00cc, #00dbff, #ff00cc, #00dbff)" : "linear-gradient(225deg, #ff6600, #ffcc00, #ff6600, #ffcc00)",
                                            theme === "dark" ? "linear-gradient(45deg, #00dbff, #ff00cc, #00dbff, #ff00cc)" : "linear-gradient(45deg, #ffcc00, #ff6600, #ffcc00, #ff6600)"
                                        ]
                                    ]
                                ]),
                                children: currentTime || "Loading..."
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 526,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: toggleTheme,
                                style: {
                                    position: "absolute",
                                    bottom: "20px",
                                    right: "20px",
                                    padding: "8px 16px",
                                    fontSize: "1rem",
                                    color: theme === "dark" ? "#ffffff" : "#1c2526",
                                    background: theme === "dark" ? "linear-gradient(90deg, #00dbff, #ff00cc)" : "linear-gradient(90deg, #ffcc00, #ff6600)",
                                    border: "none",
                                    borderRadius: "20px",
                                    cursor: "pointer",
                                    transition: "all 0.3s ease",
                                    boxShadow: theme === "dark" ? "0 0 10px rgba(0, 219, 255, 0.6)" : "0 0 10px rgba(255, 204, 0, 0.6)"
                                },
                                onMouseOver: (e)=>{
                                    e.target.style.transform = "scale(1.1)";
                                    e.target.style.boxShadow = theme === "dark" ? "0 0 20px rgba(0, 219, 255, 0.8)" : "0 0 20px rgba(255, 204, 0, 0.8)";
                                },
                                onMouseOut: (e)=>{
                                    e.target.style.transform = "scale(1)";
                                    e.target.style.boxShadow = theme === "dark" ? "0 0 10px rgba(0, 219, 255, 0.6)" : "0 0 10px rgba(255, 204, 0, 0.6)";
                                },
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                    [
                                        "6d6f4f03b1833620",
                                        [
                                            theme === "dark" ? "rgba(0, 219, 255, 0.2)" : "rgba(255, 204, 0, 0.2)",
                                            theme === "dark" ? "rgba(255, 0, 204, 0.1)" : "rgba(255, 102, 0, 0.1)",
                                            theme === "dark" ? "rgba(0, 219, 255, 0.3)" : "rgba(255, 204, 0, 0.3)",
                                            theme === "dark" ? "rgba(255, 0, 204, 0.2)" : "rgba(255, 102, 0, 0.2)",
                                            theme === "dark" ? "rgba(0, 219, 255, 0.2)" : "rgba(255, 204, 0, 0.2)",
                                            theme === "dark" ? "rgba(255, 0, 204, 0.1)" : "rgba(255, 102, 0, 0.1)",
                                            theme === "dark" ? "rgba(0, 219, 255, 0.5)" : "rgba(255, 102, 0, 0.5)",
                                            theme === "dark" ? "rgba(0, 219, 255, 0.8)" : "rgba(255, 102, 0, 0.8)",
                                            theme === "dark" ? "rgba(255, 0, 204, 0.5)" : "rgba(255, 51, 0, 0.5)",
                                            theme === "dark" ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.2)",
                                            theme === "dark" ? "rgba(255, 255, 255, 0.8)" : "rgba(0, 0, 0, 0.8)",
                                            theme === "dark" ? "rgba(0, 219, 255, 0.2)" : "rgba(255, 204, 0, 0.2)",
                                            theme === "dark" ? "rgba(0, 219, 255, 0.8)" : "rgba(255, 204, 0, 0.8)",
                                            theme === "dark" ? "0 0 20px rgba(0, 219, 255, 0.6), 0 0 40px rgba(255, 0, 204, 0.4)" : "0 0 20px rgba(255, 204, 0, 0.6), 0 0 40px rgba(255, 102, 0, 0.4)",
                                            theme === "dark" ? "0 0 20px rgba(0, 219, 255, 0.6), 0 0 40px rgba(255, 0, 204, 0.4)" : "0 0 20px rgba(255, 204, 0, 0.6), 0 0 40px rgba(255, 102, 0, 0.4)",
                                            theme === "dark" ? "0 0 30px rgba(0, 219, 255, 0.8), 0 0 50px rgba(255, 0, 204, 0.6)" : "0 0 30px rgba(255, 204, 0, 0.8), 0 0 50px rgba(255, 102, 0, 0.6)",
                                            theme === "dark" ? "0 0 20px rgba(0, 219, 255, 0.6), 0 0 40px rgba(255, 0, 204, 0.4)" : "0 0 20px rgba(255, 204, 0, 0.6), 0 0 40px rgba(255, 102, 0, 0.4)",
                                            theme === "dark" ? "linear-gradient(45deg, #00dbff, #ff00cc, #00dbff, #ff00cc)" : "linear-gradient(45deg, #ffcc00, #ff6600, #ffcc00, #ff6600)",
                                            theme === "dark" ? "linear-gradient(225deg, #ff00cc, #00dbff, #ff00cc, #00dbff)" : "linear-gradient(225deg, #ff6600, #ffcc00, #ff6600, #ffcc00)",
                                            theme === "dark" ? "linear-gradient(45deg, #00dbff, #ff00cc, #00dbff, #ff00cc)" : "linear-gradient(45deg, #ffcc00, #ff6600, #ffcc00, #ff6600)"
                                        ]
                                    ]
                                ]),
                                children: theme === "dark" ? "Light Mode" : "Dark Mode"
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 539,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 431,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            zIndex: 2,
                            pointerEvents: "none",
                            background: "url('https://cdnjs.cloudflare.com/ajax/libs/particles.js/2.0.0/particles.min.js')",
                            animation: "particleFlow 10s linear infinite"
                        },
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                            [
                                "6d6f4f03b1833620",
                                [
                                    theme === "dark" ? "rgba(0, 219, 255, 0.2)" : "rgba(255, 204, 0, 0.2)",
                                    theme === "dark" ? "rgba(255, 0, 204, 0.1)" : "rgba(255, 102, 0, 0.1)",
                                    theme === "dark" ? "rgba(0, 219, 255, 0.3)" : "rgba(255, 204, 0, 0.3)",
                                    theme === "dark" ? "rgba(255, 0, 204, 0.2)" : "rgba(255, 102, 0, 0.2)",
                                    theme === "dark" ? "rgba(0, 219, 255, 0.2)" : "rgba(255, 204, 0, 0.2)",
                                    theme === "dark" ? "rgba(255, 0, 204, 0.1)" : "rgba(255, 102, 0, 0.1)",
                                    theme === "dark" ? "rgba(0, 219, 255, 0.5)" : "rgba(255, 102, 0, 0.5)",
                                    theme === "dark" ? "rgba(0, 219, 255, 0.8)" : "rgba(255, 102, 0, 0.8)",
                                    theme === "dark" ? "rgba(255, 0, 204, 0.5)" : "rgba(255, 51, 0, 0.5)",
                                    theme === "dark" ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.2)",
                                    theme === "dark" ? "rgba(255, 255, 255, 0.8)" : "rgba(0, 0, 0, 0.8)",
                                    theme === "dark" ? "rgba(0, 219, 255, 0.2)" : "rgba(255, 204, 0, 0.2)",
                                    theme === "dark" ? "rgba(0, 219, 255, 0.8)" : "rgba(255, 204, 0, 0.8)",
                                    theme === "dark" ? "0 0 20px rgba(0, 219, 255, 0.6), 0 0 40px rgba(255, 0, 204, 0.4)" : "0 0 20px rgba(255, 204, 0, 0.6), 0 0 40px rgba(255, 102, 0, 0.4)",
                                    theme === "dark" ? "0 0 20px rgba(0, 219, 255, 0.6), 0 0 40px rgba(255, 0, 204, 0.4)" : "0 0 20px rgba(255, 204, 0, 0.6), 0 0 40px rgba(255, 102, 0, 0.4)",
                                    theme === "dark" ? "0 0 30px rgba(0, 219, 255, 0.8), 0 0 50px rgba(255, 0, 204, 0.6)" : "0 0 30px rgba(255, 204, 0, 0.8), 0 0 50px rgba(255, 102, 0, 0.6)",
                                    theme === "dark" ? "0 0 20px rgba(0, 219, 255, 0.6), 0 0 40px rgba(255, 0, 204, 0.4)" : "0 0 20px rgba(255, 204, 0, 0.6), 0 0 40px rgba(255, 102, 0, 0.4)",
                                    theme === "dark" ? "linear-gradient(45deg, #00dbff, #ff00cc, #00dbff, #ff00cc)" : "linear-gradient(45deg, #ffcc00, #ff6600, #ffcc00, #ff6600)",
                                    theme === "dark" ? "linear-gradient(225deg, #ff00cc, #00dbff, #ff00cc, #00dbff)" : "linear-gradient(225deg, #ff6600, #ffcc00, #ff6600, #ffcc00)",
                                    theme === "dark" ? "linear-gradient(45deg, #00dbff, #ff00cc, #00dbff, #ff00cc)" : "linear-gradient(45deg, #ffcc00, #ff6600, #ffcc00, #ff6600)"
                                ]
                            ]
                        ])
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 579,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.js",
                lineNumber: 381,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                style: {
                    padding: "80px 20px",
                    position: "relative",
                    zIndex: 1
                },
                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                    [
                        "6d6f4f03b1833620",
                        [
                            theme === "dark" ? "rgba(0, 219, 255, 0.2)" : "rgba(255, 204, 0, 0.2)",
                            theme === "dark" ? "rgba(255, 0, 204, 0.1)" : "rgba(255, 102, 0, 0.1)",
                            theme === "dark" ? "rgba(0, 219, 255, 0.3)" : "rgba(255, 204, 0, 0.3)",
                            theme === "dark" ? "rgba(255, 0, 204, 0.2)" : "rgba(255, 102, 0, 0.2)",
                            theme === "dark" ? "rgba(0, 219, 255, 0.2)" : "rgba(255, 204, 0, 0.2)",
                            theme === "dark" ? "rgba(255, 0, 204, 0.1)" : "rgba(255, 102, 0, 0.1)",
                            theme === "dark" ? "rgba(0, 219, 255, 0.5)" : "rgba(255, 102, 0, 0.5)",
                            theme === "dark" ? "rgba(0, 219, 255, 0.8)" : "rgba(255, 102, 0, 0.8)",
                            theme === "dark" ? "rgba(255, 0, 204, 0.5)" : "rgba(255, 51, 0, 0.5)",
                            theme === "dark" ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.2)",
                            theme === "dark" ? "rgba(255, 255, 255, 0.8)" : "rgba(0, 0, 0, 0.8)",
                            theme === "dark" ? "rgba(0, 219, 255, 0.2)" : "rgba(255, 204, 0, 0.2)",
                            theme === "dark" ? "rgba(0, 219, 255, 0.8)" : "rgba(255, 204, 0, 0.8)",
                            theme === "dark" ? "0 0 20px rgba(0, 219, 255, 0.6), 0 0 40px rgba(255, 0, 204, 0.4)" : "0 0 20px rgba(255, 204, 0, 0.6), 0 0 40px rgba(255, 102, 0, 0.4)",
                            theme === "dark" ? "0 0 20px rgba(0, 219, 255, 0.6), 0 0 40px rgba(255, 0, 204, 0.4)" : "0 0 20px rgba(255, 204, 0, 0.6), 0 0 40px rgba(255, 102, 0, 0.4)",
                            theme === "dark" ? "0 0 30px rgba(0, 219, 255, 0.8), 0 0 50px rgba(255, 0, 204, 0.6)" : "0 0 30px rgba(255, 204, 0, 0.8), 0 0 50px rgba(255, 102, 0, 0.6)",
                            theme === "dark" ? "0 0 20px rgba(0, 219, 255, 0.6), 0 0 40px rgba(255, 0, 204, 0.4)" : "0 0 20px rgba(255, 204, 0, 0.6), 0 0 40px rgba(255, 102, 0, 0.4)",
                            theme === "dark" ? "linear-gradient(45deg, #00dbff, #ff00cc, #00dbff, #ff00cc)" : "linear-gradient(45deg, #ffcc00, #ff6600, #ffcc00, #ff6600)",
                            theme === "dark" ? "linear-gradient(225deg, #ff00cc, #00dbff, #ff00cc, #00dbff)" : "linear-gradient(225deg, #ff6600, #ffcc00, #ff6600, #ffcc00)",
                            theme === "dark" ? "linear-gradient(45deg, #00dbff, #ff00cc, #00dbff, #ff00cc)" : "linear-gradient(45deg, #ffcc00, #ff6600, #ffcc00, #ff6600)"
                        ]
                    ]
                ]),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        style: {
                            marginBottom: "100px",
                            textAlign: "center",
                            background: theme === "dark" ? "rgba(10, 20, 30, 0.9)" : "rgba(240, 240, 240, 0.9)",
                            borderRadius: "20px",
                            padding: "50px",
                            boxShadow: theme === "dark" ? "0 10px 40px rgba(0, 219, 255, 0.3), 0 0 60px rgba(0, 0, 0, 0.7)" : "0 10px 40px rgba(255, 204, 0, 0.3), 0 0 60px rgba(0, 0, 0, 0.2)",
                            border: `1px solid ${theme === "dark" ? "rgba(0, 219, 255, 0.2)" : "rgba(255, 204, 0, 0.2)"}`
                        },
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                            [
                                "6d6f4f03b1833620",
                                [
                                    theme === "dark" ? "rgba(0, 219, 255, 0.2)" : "rgba(255, 204, 0, 0.2)",
                                    theme === "dark" ? "rgba(255, 0, 204, 0.1)" : "rgba(255, 102, 0, 0.1)",
                                    theme === "dark" ? "rgba(0, 219, 255, 0.3)" : "rgba(255, 204, 0, 0.3)",
                                    theme === "dark" ? "rgba(255, 0, 204, 0.2)" : "rgba(255, 102, 0, 0.2)",
                                    theme === "dark" ? "rgba(0, 219, 255, 0.2)" : "rgba(255, 204, 0, 0.2)",
                                    theme === "dark" ? "rgba(255, 0, 204, 0.1)" : "rgba(255, 102, 0, 0.1)",
                                    theme === "dark" ? "rgba(0, 219, 255, 0.5)" : "rgba(255, 102, 0, 0.5)",
                                    theme === "dark" ? "rgba(0, 219, 255, 0.8)" : "rgba(255, 102, 0, 0.8)",
                                    theme === "dark" ? "rgba(255, 0, 204, 0.5)" : "rgba(255, 51, 0, 0.5)",
                                    theme === "dark" ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.2)",
                                    theme === "dark" ? "rgba(255, 255, 255, 0.8)" : "rgba(0, 0, 0, 0.8)",
                                    theme === "dark" ? "rgba(0, 219, 255, 0.2)" : "rgba(255, 204, 0, 0.2)",
                                    theme === "dark" ? "rgba(0, 219, 255, 0.8)" : "rgba(255, 204, 0, 0.8)",
                                    theme === "dark" ? "0 0 20px rgba(0, 219, 255, 0.6), 0 0 40px rgba(255, 0, 204, 0.4)" : "0 0 20px rgba(255, 204, 0, 0.6), 0 0 40px rgba(255, 102, 0, 0.4)",
                                    theme === "dark" ? "0 0 20px rgba(0, 219, 255, 0.6), 0 0 40px rgba(255, 0, 204, 0.4)" : "0 0 20px rgba(255, 204, 0, 0.6), 0 0 40px rgba(255, 102, 0, 0.4)",
                                    theme === "dark" ? "0 0 30px rgba(0, 219, 255, 0.8), 0 0 50px rgba(255, 0, 204, 0.6)" : "0 0 30px rgba(255, 204, 0, 0.8), 0 0 50px rgba(255, 102, 0, 0.6)",
                                    theme === "dark" ? "0 0 20px rgba(0, 219, 255, 0.6), 0 0 40px rgba(255, 0, 204, 0.4)" : "0 0 20px rgba(255, 204, 0, 0.6), 0 0 40px rgba(255, 102, 0, 0.4)",
                                    theme === "dark" ? "linear-gradient(45deg, #00dbff, #ff00cc, #00dbff, #ff00cc)" : "linear-gradient(45deg, #ffcc00, #ff6600, #ffcc00, #ff6600)",
                                    theme === "dark" ? "linear-gradient(225deg, #ff00cc, #00dbff, #ff00cc, #00dbff)" : "linear-gradient(225deg, #ff6600, #ffcc00, #ff6600, #ffcc00)",
                                    theme === "dark" ? "linear-gradient(45deg, #00dbff, #ff00cc, #00dbff, #ff00cc)" : "linear-gradient(45deg, #ffcc00, #ff6600, #ffcc00, #ff6600)"
                                ]
                            ]
                        ]),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    fontSize: "2.5rem",
                                    color: theme === "dark" ? "#00dbff" : "#ff6600",
                                    fontWeight: 600,
                                    marginBottom: "25px",
                                    letterSpacing: "1.5px",
                                    textShadow: `0 0 15px ${theme === "dark" ? "rgba(0, 219, 255, 0.7)" : "rgba(255, 102, 0, 0.7)"}`
                                },
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                    [
                                        "6d6f4f03b1833620",
                                        [
                                            theme === "dark" ? "rgba(0, 219, 255, 0.2)" : "rgba(255, 204, 0, 0.2)",
                                            theme === "dark" ? "rgba(255, 0, 204, 0.1)" : "rgba(255, 102, 0, 0.1)",
                                            theme === "dark" ? "rgba(0, 219, 255, 0.3)" : "rgba(255, 204, 0, 0.3)",
                                            theme === "dark" ? "rgba(255, 0, 204, 0.2)" : "rgba(255, 102, 0, 0.2)",
                                            theme === "dark" ? "rgba(0, 219, 255, 0.2)" : "rgba(255, 204, 0, 0.2)",
                                            theme === "dark" ? "rgba(255, 0, 204, 0.1)" : "rgba(255, 102, 0, 0.1)",
                                            theme === "dark" ? "rgba(0, 219, 255, 0.5)" : "rgba(255, 102, 0, 0.5)",
                                            theme === "dark" ? "rgba(0, 219, 255, 0.8)" : "rgba(255, 102, 0, 0.8)",
                                            theme === "dark" ? "rgba(255, 0, 204, 0.5)" : "rgba(255, 51, 0, 0.5)",
                                            theme === "dark" ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.2)",
                                            theme === "dark" ? "rgba(255, 255, 255, 0.8)" : "rgba(0, 0, 0, 0.8)",
                                            theme === "dark" ? "rgba(0, 219, 255, 0.2)" : "rgba(255, 204, 0, 0.2)",
                                            theme === "dark" ? "rgba(0, 219, 255, 0.8)" : "rgba(255, 204, 0, 0.8)",
                                            theme === "dark" ? "0 0 20px rgba(0, 219, 255, 0.6), 0 0 40px rgba(255, 0, 204, 0.4)" : "0 0 20px rgba(255, 204, 0, 0.6), 0 0 40px rgba(255, 102, 0, 0.4)",
                                            theme === "dark" ? "0 0 20px rgba(0, 219, 255, 0.6), 0 0 40px rgba(255, 0, 204, 0.4)" : "0 0 20px rgba(255, 204, 0, 0.6), 0 0 40px rgba(255, 102, 0, 0.4)",
                                            theme === "dark" ? "0 0 30px rgba(0, 219, 255, 0.8), 0 0 50px rgba(255, 0, 204, 0.6)" : "0 0 30px rgba(255, 204, 0, 0.8), 0 0 50px rgba(255, 102, 0, 0.6)",
                                            theme === "dark" ? "0 0 20px rgba(0, 219, 255, 0.6), 0 0 40px rgba(255, 0, 204, 0.4)" : "0 0 20px rgba(255, 204, 0, 0.6), 0 0 40px rgba(255, 102, 0, 0.4)",
                                            theme === "dark" ? "linear-gradient(45deg, #00dbff, #ff00cc, #00dbff, #ff00cc)" : "linear-gradient(45deg, #ffcc00, #ff6600, #ffcc00, #ff6600)",
                                            theme === "dark" ? "linear-gradient(225deg, #ff00cc, #00dbff, #ff00cc, #00dbff)" : "linear-gradient(225deg, #ff6600, #ffcc00, #ff6600, #ffcc00)",
                                            theme === "dark" ? "linear-gradient(45deg, #00dbff, #ff00cc, #00dbff, #ff00cc)" : "linear-gradient(45deg, #ffcc00, #ff6600, #ffcc00, #ff6600)"
                                        ]
                                    ]
                                ]),
                                children: "Start Video Meeting"
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 610,
                                columnNumber: 11
                            }, this),
                            !isCallStarted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    justifyContent: "center",
                                    gap: "20px",
                                    flexWrap: "wrap"
                                },
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                    [
                                        "6d6f4f03b1833620",
                                        [
                                            theme === "dark" ? "rgba(0, 219, 255, 0.2)" : "rgba(255, 204, 0, 0.2)",
                                            theme === "dark" ? "rgba(255, 0, 204, 0.1)" : "rgba(255, 102, 0, 0.1)",
                                            theme === "dark" ? "rgba(0, 219, 255, 0.3)" : "rgba(255, 204, 0, 0.3)",
                                            theme === "dark" ? "rgba(255, 0, 204, 0.2)" : "rgba(255, 102, 0, 0.2)",
                                            theme === "dark" ? "rgba(0, 219, 255, 0.2)" : "rgba(255, 204, 0, 0.2)",
                                            theme === "dark" ? "rgba(255, 0, 204, 0.1)" : "rgba(255, 102, 0, 0.1)",
                                            theme === "dark" ? "rgba(0, 219, 255, 0.5)" : "rgba(255, 102, 0, 0.5)",
                                            theme === "dark" ? "rgba(0, 219, 255, 0.8)" : "rgba(255, 102, 0, 0.8)",
                                            theme === "dark" ? "rgba(255, 0, 204, 0.5)" : "rgba(255, 51, 0, 0.5)",
                                            theme === "dark" ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.2)",
                                            theme === "dark" ? "rgba(255, 255, 255, 0.8)" : "rgba(0, 0, 0, 0.8)",
                                            theme === "dark" ? "rgba(0, 219, 255, 0.2)" : "rgba(255, 204, 0, 0.2)",
                                            theme === "dark" ? "rgba(0, 219, 255, 0.8)" : "rgba(255, 204, 0, 0.8)",
                                            theme === "dark" ? "0 0 20px rgba(0, 219, 255, 0.6), 0 0 40px rgba(255, 0, 204, 0.4)" : "0 0 20px rgba(255, 204, 0, 0.6), 0 0 40px rgba(255, 102, 0, 0.4)",
                                            theme === "dark" ? "0 0 20px rgba(0, 219, 255, 0.6), 0 0 40px rgba(255, 0, 204, 0.4)" : "0 0 20px rgba(255, 204, 0, 0.6), 0 0 40px rgba(255, 102, 0, 0.4)",
                                            theme === "dark" ? "0 0 30px rgba(0, 219, 255, 0.8), 0 0 50px rgba(255, 0, 204, 0.6)" : "0 0 30px rgba(255, 204, 0, 0.8), 0 0 50px rgba(255, 102, 0, 0.6)",
                                            theme === "dark" ? "0 0 20px rgba(0, 219, 255, 0.6), 0 0 40px rgba(255, 0, 204, 0.4)" : "0 0 20px rgba(255, 204, 0, 0.6), 0 0 40px rgba(255, 102, 0, 0.4)",
                                            theme === "dark" ? "linear-gradient(45deg, #00dbff, #ff00cc, #00dbff, #ff00cc)" : "linear-gradient(45deg, #ffcc00, #ff6600, #ffcc00, #ff6600)",
                                            theme === "dark" ? "linear-gradient(225deg, #ff00cc, #00dbff, #ff00cc, #00dbff)" : "linear-gradient(225deg, #ff6600, #ffcc00, #ff6600, #ffcc00)",
                                            theme === "dark" ? "linear-gradient(45deg, #00dbff, #ff00cc, #00dbff, #ff00cc)" : "linear-gradient(45deg, #ffcc00, #ff6600, #ffcc00, #ff6600)"
                                        ]
                                    ]
                                ]),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: roomName,
                                        onChange: (e)=>setRoomName(e.target.value),
                                        placeholder: "Enter Meeting Name",
                                        style: {
                                            padding: "15px 25px",
                                            fontSize: "1.1rem",
                                            width: "320px",
                                            borderRadius: "30px",
                                            border: `2px solid ${theme === "dark" ? "rgba(0, 219, 255, 0.4)" : "rgba(255, 204, 0, 0.4)"}`,
                                            background: theme === "dark" ? "rgba(0, 20, 40, 0.8)" : "rgba(255, 255, 255, 0.8)",
                                            color: theme === "dark" ? "#d4faff" : "#1c2526",
                                            outline: "none",
                                            transition: "all 0.3s ease",
                                            boxShadow: `0 0 15px ${theme === "dark" ? "rgba(0, 219, 255, 0.3)" : "rgba(255, 204, 0, 0.3)"}`
                                        },
                                        onFocus: (e)=>{
                                            e.target.style.borderColor = theme === "dark" ? "#00dbff" : "#ff6600";
                                            e.target.style.boxShadow = `0 0 25px ${theme === "dark" ? "rgba(0, 219, 255, 0.6)" : "rgba(255, 102, 0, 0.6)"}`;
                                        },
                                        onBlur: (e)=>{
                                            e.target.style.borderColor = theme === "dark" ? "rgba(0, 219, 255, 0.4)" : "rgba(255, 204, 0, 0.4)";
                                            e.target.style.boxShadow = `0 0 15px ${theme === "dark" ? "rgba(0, 219, 255, 0.3)" : "rgba(255, 204, 0, 0.3)"}`;
                                        },
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                            [
                                                "6d6f4f03b1833620",
                                                [
                                                    theme === "dark" ? "rgba(0, 219, 255, 0.2)" : "rgba(255, 204, 0, 0.2)",
                                                    theme === "dark" ? "rgba(255, 0, 204, 0.1)" : "rgba(255, 102, 0, 0.1)",
                                                    theme === "dark" ? "rgba(0, 219, 255, 0.3)" : "rgba(255, 204, 0, 0.3)",
                                                    theme === "dark" ? "rgba(255, 0, 204, 0.2)" : "rgba(255, 102, 0, 0.2)",
                                                    theme === "dark" ? "rgba(0, 219, 255, 0.2)" : "rgba(255, 204, 0, 0.2)",
                                                    theme === "dark" ? "rgba(255, 0, 204, 0.1)" : "rgba(255, 102, 0, 0.1)",
                                                    theme === "dark" ? "rgba(0, 219, 255, 0.5)" : "rgba(255, 102, 0, 0.5)",
                                                    theme === "dark" ? "rgba(0, 219, 255, 0.8)" : "rgba(255, 102, 0, 0.8)",
                                                    theme === "dark" ? "rgba(255, 0, 204, 0.5)" : "rgba(255, 51, 0, 0.5)",
                                                    theme === "dark" ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.2)",
                                                    theme === "dark" ? "rgba(255, 255, 255, 0.8)" : "rgba(0, 0, 0, 0.8)",
                                                    theme === "dark" ? "rgba(0, 219, 255, 0.2)" : "rgba(255, 204, 0, 0.2)",
                                                    theme === "dark" ? "rgba(0, 219, 255, 0.8)" : "rgba(255, 204, 0, 0.8)",
                                                    theme === "dark" ? "0 0 20px rgba(0, 219, 255, 0.6), 0 0 40px rgba(255, 0, 204, 0.4)" : "0 0 20px rgba(255, 204, 0, 0.6), 0 0 40px rgba(255, 102, 0, 0.4)",
                                                    theme === "dark" ? "0 0 20px rgba(0, 219, 255, 0.6), 0 0 40px rgba(255, 0, 204, 0.4)" : "0 0 20px rgba(255, 204, 0, 0.6), 0 0 40px rgba(255, 102, 0, 0.4)",
                                                    theme === "dark" ? "0 0 30px rgba(0, 219, 255, 0.8), 0 0 50px rgba(255, 0, 204, 0.6)" : "0 0 30px rgba(255, 204, 0, 0.8), 0 0 50px rgba(255, 102, 0, 0.6)",
                                                    theme === "dark" ? "0 0 20px rgba(0, 219, 255, 0.6), 0 0 40px rgba(255, 0, 204, 0.4)" : "0 0 20px rgba(255, 204, 0, 0.6), 0 0 40px rgba(255, 102, 0, 0.4)",
                                                    theme === "dark" ? "linear-gradient(45deg, #00dbff, #ff00cc, #00dbff, #ff00cc)" : "linear-gradient(45deg, #ffcc00, #ff6600, #ffcc00, #ff6600)",
                                                    theme === "dark" ? "linear-gradient(225deg, #ff00cc, #00dbff, #ff00cc, #00dbff)" : "linear-gradient(225deg, #ff6600, #ffcc00, #ff6600, #ffcc00)",
                                                    theme === "dark" ? "linear-gradient(45deg, #00dbff, #ff00cc, #00dbff, #ff00cc)" : "linear-gradient(45deg, #ffcc00, #ff6600, #ffcc00, #ff6600)"
                                                ]
                                            ]
                                        ])
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 631,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: "relative",
                                            display: "inline-block"
                                        },
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                            [
                                                "6d6f4f03b1833620",
                                                [
                                                    theme === "dark" ? "rgba(0, 219, 255, 0.2)" : "rgba(255, 204, 0, 0.2)",
                                                    theme === "dark" ? "rgba(255, 0, 204, 0.1)" : "rgba(255, 102, 0, 0.1)",
                                                    theme === "dark" ? "rgba(0, 219, 255, 0.3)" : "rgba(255, 204, 0, 0.3)",
                                                    theme === "dark" ? "rgba(255, 0, 204, 0.2)" : "rgba(255, 102, 0, 0.2)",
                                                    theme === "dark" ? "rgba(0, 219, 255, 0.2)" : "rgba(255, 204, 0, 0.2)",
                                                    theme === "dark" ? "rgba(255, 0, 204, 0.1)" : "rgba(255, 102, 0, 0.1)",
                                                    theme === "dark" ? "rgba(0, 219, 255, 0.5)" : "rgba(255, 102, 0, 0.5)",
                                                    theme === "dark" ? "rgba(0, 219, 255, 0.8)" : "rgba(255, 102, 0, 0.8)",
                                                    theme === "dark" ? "rgba(255, 0, 204, 0.5)" : "rgba(255, 51, 0, 0.5)",
                                                    theme === "dark" ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.2)",
                                                    theme === "dark" ? "rgba(255, 255, 255, 0.8)" : "rgba(0, 0, 0, 0.8)",
                                                    theme === "dark" ? "rgba(0, 219, 255, 0.2)" : "rgba(255, 204, 0, 0.2)",
                                                    theme === "dark" ? "rgba(0, 219, 255, 0.8)" : "rgba(255, 204, 0, 0.8)",
                                                    theme === "dark" ? "0 0 20px rgba(0, 219, 255, 0.6), 0 0 40px rgba(255, 0, 204, 0.4)" : "0 0 20px rgba(255, 204, 0, 0.6), 0 0 40px rgba(255, 102, 0, 0.4)",
                                                    theme === "dark" ? "0 0 20px rgba(0, 219, 255, 0.6), 0 0 40px rgba(255, 0, 204, 0.4)" : "0 0 20px rgba(255, 204, 0, 0.6), 0 0 40px rgba(255, 102, 0, 0.4)",
                                                    theme === "dark" ? "0 0 30px rgba(0, 219, 255, 0.8), 0 0 50px rgba(255, 0, 204, 0.6)" : "0 0 30px rgba(255, 204, 0, 0.8), 0 0 50px rgba(255, 102, 0, 0.6)",
                                                    theme === "dark" ? "0 0 20px rgba(0, 219, 255, 0.6), 0 0 40px rgba(255, 0, 204, 0.4)" : "0 0 20px rgba(255, 204, 0, 0.6), 0 0 40px rgba(255, 102, 0, 0.4)",
                                                    theme === "dark" ? "linear-gradient(45deg, #00dbff, #ff00cc, #00dbff, #ff00cc)" : "linear-gradient(45deg, #ffcc00, #ff6600, #ffcc00, #ff6600)",
                                                    theme === "dark" ? "linear-gradient(225deg, #ff00cc, #00dbff, #ff00cc, #00dbff)" : "linear-gradient(225deg, #ff6600, #ffcc00, #ff6600, #ffcc00)",
                                                    theme === "dark" ? "linear-gradient(45deg, #00dbff, #ff00cc, #00dbff, #ff00cc)" : "linear-gradient(45deg, #ffcc00, #ff6600, #ffcc00, #ff6600)"
                                                ]
                                            ]
                                        ]),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleStartCall,
                                                style: {
                                                    padding: "15px 40px",
                                                    fontSize: "1.1rem",
                                                    background: theme === "dark" ? "linear-gradient(90deg, #00dbff, #ff00cc)" : "linear-gradient(90deg, #ffcc00, #ff6600)",
                                                    border: `2px solid ${theme === "dark" ? "#00dbff" : "#ffcc00"}`,
                                                    borderRadius: "30px",
                                                    color: theme === "dark" ? "#ffffff" : "#1c2526",
                                                    cursor: "pointer",
                                                    transition: "all 0.3s ease",
                                                    boxShadow: theme === "dark" ? "0 0 20px rgba(0, 219, 255, 0.6), 0 0 40px rgba(255, 0, 204, 0.4)" : "0 0 20px rgba(255, 204, 0, 0.6), 0 0 40px rgba(255, 102, 0, 0.4)",
                                                    animation: "pulseGlow 2s infinite",
                                                    position: "relative",
                                                    zIndex: 2
                                                },
                                                onMouseOver: (e)=>{
                                                    e.target.style.transform = "scale(1.05)";
                                                    e.target.style.boxShadow = theme === "dark" ? "0 0 30px rgba(0, 219, 255, 0.8), 0 0 60px rgba(255, 0, 204, 0.6)" : "0 0 30px rgba(255, 204, 0, 0.8), 0 0 60px rgba(255, 102, 0, 0.6)";
                                                },
                                                onMouseOut: (e)=>{
                                                    e.target.style.transform = "scale(1)";
                                                    e.target.style.boxShadow = theme === "dark" ? "0 0 20px rgba(0, 219, 255, 0.6), 0 0 40px rgba(255, 0, 204, 0.4)" : "0 0 20px rgba(255, 204, 0, 0.6), 0 0 40px rgba(255, 102, 0, 0.4)";
                                                },
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                    [
                                                        "6d6f4f03b1833620",
                                                        [
                                                            theme === "dark" ? "rgba(0, 219, 255, 0.2)" : "rgba(255, 204, 0, 0.2)",
                                                            theme === "dark" ? "rgba(255, 0, 204, 0.1)" : "rgba(255, 102, 0, 0.1)",
                                                            theme === "dark" ? "rgba(0, 219, 255, 0.3)" : "rgba(255, 204, 0, 0.3)",
                                                            theme === "dark" ? "rgba(255, 0, 204, 0.2)" : "rgba(255, 102, 0, 0.2)",
                                                            theme === "dark" ? "rgba(0, 219, 255, 0.2)" : "rgba(255, 204, 0, 0.2)",
                                                            theme === "dark" ? "rgba(255, 0, 204, 0.1)" : "rgba(255, 102, 0, 0.1)",
                                                            theme === "dark" ? "rgba(0, 219, 255, 0.5)" : "rgba(255, 102, 0, 0.5)",
                                                            theme === "dark" ? "rgba(0, 219, 255, 0.8)" : "rgba(255, 102, 0, 0.8)",
                                                            theme === "dark" ? "rgba(255, 0, 204, 0.5)" : "rgba(255, 51, 0, 0.5)",
                                                            theme === "dark" ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.2)",
                                                            theme === "dark" ? "rgba(255, 255, 255, 0.8)" : "rgba(0, 0, 0, 0.8)",
                                                            theme === "dark" ? "rgba(0, 219, 255, 0.2)" : "rgba(255, 204, 0, 0.2)",
                                                            theme === "dark" ? "rgba(0, 219, 255, 0.8)" : "rgba(255, 204, 0, 0.8)",
                                                            theme === "dark" ? "0 0 20px rgba(0, 219, 255, 0.6), 0 0 40px rgba(255, 0, 204, 0.4)" : "0 0 20px rgba(255, 204, 0, 0.6), 0 0 40px rgba(255, 102, 0, 0.4)",
                                                            theme === "dark" ? "0 0 20px rgba(0, 219, 255, 0.6), 0 0 40px rgba(255, 0, 204, 0.4)" : "0 0 20px rgba(255, 204, 0, 0.6), 0 0 40px rgba(255, 102, 0, 0.4)",
                                                            theme === "dark" ? "0 0 30px rgba(0, 219, 255, 0.8), 0 0 50px rgba(255, 0, 204, 0.6)" : "0 0 30px rgba(255, 204, 0, 0.8), 0 0 50px rgba(255, 102, 0, 0.6)",
                                                            theme === "dark" ? "0 0 20px rgba(0, 219, 255, 0.6), 0 0 40px rgba(255, 0, 204, 0.4)" : "0 0 20px rgba(255, 204, 0, 0.6), 0 0 40px rgba(255, 102, 0, 0.4)",
                                                            theme === "dark" ? "linear-gradient(45deg, #00dbff, #ff00cc, #00dbff, #ff00cc)" : "linear-gradient(45deg, #ffcc00, #ff6600, #ffcc00, #ff6600)",
                                                            theme === "dark" ? "linear-gradient(225deg, #ff00cc, #00dbff, #ff00cc, #00dbff)" : "linear-gradient(225deg, #ff6600, #ffcc00, #ff6600, #ffcc00)",
                                                            theme === "dark" ? "linear-gradient(45deg, #00dbff, #ff00cc, #00dbff, #ff00cc)" : "linear-gradient(45deg, #ffcc00, #ff6600, #ffcc00, #ff6600)"
                                                        ]
                                                    ]
                                                ]),
                                                children: "Start Meeting"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 658,
                                                columnNumber: 17
                                            }, this),
                                            !jitsiLoaded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                style: {
                                                    position: "absolute",
                                                    top: "-10px",
                                                    left: "-10px",
                                                    width: "calc(100% + 20px)",
                                                    height: "calc(100% + 20px)",
                                                    transform: "rotate(-90deg)",
                                                    zIndex: 1
                                                },
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                    [
                                                        "6d6f4f03b1833620",
                                                        [
                                                            theme === "dark" ? "rgba(0, 219, 255, 0.2)" : "rgba(255, 204, 0, 0.2)",
                                                            theme === "dark" ? "rgba(255, 0, 204, 0.1)" : "rgba(255, 102, 0, 0.1)",
                                                            theme === "dark" ? "rgba(0, 219, 255, 0.3)" : "rgba(255, 204, 0, 0.3)",
                                                            theme === "dark" ? "rgba(255, 0, 204, 0.2)" : "rgba(255, 102, 0, 0.2)",
                                                            theme === "dark" ? "rgba(0, 219, 255, 0.2)" : "rgba(255, 204, 0, 0.2)",
                                                            theme === "dark" ? "rgba(255, 0, 204, 0.1)" : "rgba(255, 102, 0, 0.1)",
                                                            theme === "dark" ? "rgba(0, 219, 255, 0.5)" : "rgba(255, 102, 0, 0.5)",
                                                            theme === "dark" ? "rgba(0, 219, 255, 0.8)" : "rgba(255, 102, 0, 0.8)",
                                                            theme === "dark" ? "rgba(255, 0, 204, 0.5)" : "rgba(255, 51, 0, 0.5)",
                                                            theme === "dark" ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.2)",
                                                            theme === "dark" ? "rgba(255, 255, 255, 0.8)" : "rgba(0, 0, 0, 0.8)",
                                                            theme === "dark" ? "rgba(0, 219, 255, 0.2)" : "rgba(255, 204, 0, 0.2)",
                                                            theme === "dark" ? "rgba(0, 219, 255, 0.8)" : "rgba(255, 204, 0, 0.8)",
                                                            theme === "dark" ? "0 0 20px rgba(0, 219, 255, 0.6), 0 0 40px rgba(255, 0, 204, 0.4)" : "0 0 20px rgba(255, 204, 0, 0.6), 0 0 40px rgba(255, 102, 0, 0.4)",
                                                            theme === "dark" ? "0 0 20px rgba(0, 219, 255, 0.6), 0 0 40px rgba(255, 0, 204, 0.4)" : "0 0 20px rgba(255, 204, 0, 0.6), 0 0 40px rgba(255, 102, 0, 0.4)",
                                                            theme === "dark" ? "0 0 30px rgba(0, 219, 255, 0.8), 0 0 50px rgba(255, 0, 204, 0.6)" : "0 0 30px rgba(255, 204, 0, 0.8), 0 0 50px rgba(255, 102, 0, 0.6)",
                                                            theme === "dark" ? "0 0 20px rgba(0, 219, 255, 0.6), 0 0 40px rgba(255, 0, 204, 0.4)" : "0 0 20px rgba(255, 204, 0, 0.6), 0 0 40px rgba(255, 102, 0, 0.4)",
                                                            theme === "dark" ? "linear-gradient(45deg, #00dbff, #ff00cc, #00dbff, #ff00cc)" : "linear-gradient(45deg, #ffcc00, #ff6600, #ffcc00, #ff6600)",
                                                            theme === "dark" ? "linear-gradient(225deg, #ff00cc, #00dbff, #ff00cc, #00dbff)" : "linear-gradient(225deg, #ff6600, #ffcc00, #ff6600, #ffcc00)",
                                                            theme === "dark" ? "linear-gradient(45deg, #00dbff, #ff00cc, #00dbff, #ff00cc)" : "linear-gradient(45deg, #ffcc00, #ff6600, #ffcc00, #ff6600)"
                                                        ]
                                                    ]
                                                ]),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                    cx: "50%",
                                                    cy: "50%",
                                                    r: "45%",
                                                    fill: "none",
                                                    stroke: theme === "dark" ? "#00dbff" : "#ff6600",
                                                    strokeWidth: "4",
                                                    strokeDasharray: "283",
                                                    strokeDashoffset: 283 - 283 * progress / 100,
                                                    style: {
                                                        transition: "stroke-dashoffset 0.5s ease"
                                                    },
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                        [
                                                            "6d6f4f03b1833620",
                                                            [
                                                                theme === "dark" ? "rgba(0, 219, 255, 0.2)" : "rgba(255, 204, 0, 0.2)",
                                                                theme === "dark" ? "rgba(255, 0, 204, 0.1)" : "rgba(255, 102, 0, 0.1)",
                                                                theme === "dark" ? "rgba(0, 219, 255, 0.3)" : "rgba(255, 204, 0, 0.3)",
                                                                theme === "dark" ? "rgba(255, 0, 204, 0.2)" : "rgba(255, 102, 0, 0.2)",
                                                                theme === "dark" ? "rgba(0, 219, 255, 0.2)" : "rgba(255, 204, 0, 0.2)",
                                                                theme === "dark" ? "rgba(255, 0, 204, 0.1)" : "rgba(255, 102, 0, 0.1)",
                                                                theme === "dark" ? "rgba(0, 219, 255, 0.5)" : "rgba(255, 102, 0, 0.5)",
                                                                theme === "dark" ? "rgba(0, 219, 255, 0.8)" : "rgba(255, 102, 0, 0.8)",
                                                                theme === "dark" ? "rgba(255, 0, 204, 0.5)" : "rgba(255, 51, 0, 0.5)",
                                                                theme === "dark" ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.2)",
                                                                theme === "dark" ? "rgba(255, 255, 255, 0.8)" : "rgba(0, 0, 0, 0.8)",
                                                                theme === "dark" ? "rgba(0, 219, 255, 0.2)" : "rgba(255, 204, 0, 0.2)",
                                                                theme === "dark" ? "rgba(0, 219, 255, 0.8)" : "rgba(255, 204, 0, 0.8)",
                                                                theme === "dark" ? "0 0 20px rgba(0, 219, 255, 0.6), 0 0 40px rgba(255, 0, 204, 0.4)" : "0 0 20px rgba(255, 204, 0, 0.6), 0 0 40px rgba(255, 102, 0, 0.4)",
                                                                theme === "dark" ? "0 0 20px rgba(0, 219, 255, 0.6), 0 0 40px rgba(255, 0, 204, 0.4)" : "0 0 20px rgba(255, 204, 0, 0.6), 0 0 40px rgba(255, 102, 0, 0.4)",
                                                                theme === "dark" ? "0 0 30px rgba(0, 219, 255, 0.8), 0 0 50px rgba(255, 0, 204, 0.6)" : "0 0 30px rgba(255, 204, 0, 0.8), 0 0 50px rgba(255, 102, 0, 0.6)",
                                                                theme === "dark" ? "0 0 20px rgba(0, 219, 255, 0.6), 0 0 40px rgba(255, 0, 204, 0.4)" : "0 0 20px rgba(255, 204, 0, 0.6), 0 0 40px rgba(255, 102, 0, 0.4)",
                                                                theme === "dark" ? "linear-gradient(45deg, #00dbff, #ff00cc, #00dbff, #ff00cc)" : "linear-gradient(45deg, #ffcc00, #ff6600, #ffcc00, #ff6600)",
                                                                theme === "dark" ? "linear-gradient(225deg, #ff00cc, #00dbff, #ff00cc, #00dbff)" : "linear-gradient(225deg, #ff6600, #ffcc00, #ff6600, #ffcc00)",
                                                                theme === "dark" ? "linear-gradient(45deg, #00dbff, #ff00cc, #00dbff, #ff00cc)" : "linear-gradient(45deg, #ffcc00, #ff6600, #ffcc00, #ff6600)"
                                                            ]
                                                        ]
                                                    ])
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.js",
                                                    lineNumber: 709,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 698,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 657,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 623,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                id: "meet",
                                style: {
                                    marginTop: "25px",
                                    borderRadius: "15px",
                                    overflow: "hidden",
                                    boxShadow: `0 5px 25px ${theme === "dark" ? "rgba(0, 219, 255, 0.4)" : "rgba(255, 204, 0, 0.4)"}`,
                                    border: `1px solid ${theme === "dark" ? "rgba(0, 219, 255, 0.3)" : "rgba(255, 204, 0, 0.3)"}`
                                },
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                    [
                                        "6d6f4f03b1833620",
                                        [
                                            theme === "dark" ? "rgba(0, 219, 255, 0.2)" : "rgba(255, 204, 0, 0.2)",
                                            theme === "dark" ? "rgba(255, 0, 204, 0.1)" : "rgba(255, 102, 0, 0.1)",
                                            theme === "dark" ? "rgba(0, 219, 255, 0.3)" : "rgba(255, 204, 0, 0.3)",
                                            theme === "dark" ? "rgba(255, 0, 204, 0.2)" : "rgba(255, 102, 0, 0.2)",
                                            theme === "dark" ? "rgba(0, 219, 255, 0.2)" : "rgba(255, 204, 0, 0.2)",
                                            theme === "dark" ? "rgba(255, 0, 204, 0.1)" : "rgba(255, 102, 0, 0.1)",
                                            theme === "dark" ? "rgba(0, 219, 255, 0.5)" : "rgba(255, 102, 0, 0.5)",
                                            theme === "dark" ? "rgba(0, 219, 255, 0.8)" : "rgba(255, 102, 0, 0.8)",
                                            theme === "dark" ? "rgba(255, 0, 204, 0.5)" : "rgba(255, 51, 0, 0.5)",
                                            theme === "dark" ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.2)",
                                            theme === "dark" ? "rgba(255, 255, 255, 0.8)" : "rgba(0, 0, 0, 0.8)",
                                            theme === "dark" ? "rgba(0, 219, 255, 0.2)" : "rgba(255, 204, 0, 0.2)",
                                            theme === "dark" ? "rgba(0, 219, 255, 0.8)" : "rgba(255, 204, 0, 0.8)",
                                            theme === "dark" ? "0 0 20px rgba(0, 219, 255, 0.6), 0 0 40px rgba(255, 0, 204, 0.4)" : "0 0 20px rgba(255, 204, 0, 0.6), 0 0 40px rgba(255, 102, 0, 0.4)",
                                            theme === "dark" ? "0 0 20px rgba(0, 219, 255, 0.6), 0 0 40px rgba(255, 0, 204, 0.4)" : "0 0 20px rgba(255, 204, 0, 0.6), 0 0 40px rgba(255, 102, 0, 0.4)",
                                            theme === "dark" ? "0 0 30px rgba(0, 219, 255, 0.8), 0 0 50px rgba(255, 0, 204, 0.6)" : "0 0 30px rgba(255, 204, 0, 0.8), 0 0 50px rgba(255, 102, 0, 0.6)",
                                            theme === "dark" ? "0 0 20px rgba(0, 219, 255, 0.6), 0 0 40px rgba(255, 0, 204, 0.4)" : "0 0 20px rgba(255, 204, 0, 0.6), 0 0 40px rgba(255, 102, 0, 0.4)",
                                            theme === "dark" ? "linear-gradient(45deg, #00dbff, #ff00cc, #00dbff, #ff00cc)" : "linear-gradient(45deg, #ffcc00, #ff6600, #ffcc00, #ff6600)",
                                            theme === "dark" ? "linear-gradient(225deg, #ff00cc, #00dbff, #ff00cc, #00dbff)" : "linear-gradient(225deg, #ff6600, #ffcc00, #ff6600, #ffcc00)",
                                            theme === "dark" ? "linear-gradient(45deg, #00dbff, #ff00cc, #00dbff, #ff00cc)" : "linear-gradient(45deg, #ffcc00, #ff6600, #ffcc00, #ff6600)"
                                        ]
                                    ]
                                ])
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 725,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 596,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        style: {
                            textAlign: "center",
                            background: theme === "dark" ? "rgba(10, 20, 30, 0.9)" : "rgba(240, 240, 240, 0.9)",
                            borderRadius: "20px",
                            padding: "50px",
                            boxShadow: theme === "dark" ? "0 10px 40px rgba(0, 219, 255, 0.3), 0 0 60px rgba(0, 0, 0, 0.7)" : "0 10px 40px rgba(255, 204, 0, 0.3), 0 0 60px rgba(0, 0, 0, 0.2)",
                            border: `1px solid ${theme === "dark" ? "rgba(0, 219, 255, 0.2)" : "rgba(255, 204, 0, 0.2)"}`
                        },
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                            [
                                "6d6f4f03b1833620",
                                [
                                    theme === "dark" ? "rgba(0, 219, 255, 0.2)" : "rgba(255, 204, 0, 0.2)",
                                    theme === "dark" ? "rgba(255, 0, 204, 0.1)" : "rgba(255, 102, 0, 0.1)",
                                    theme === "dark" ? "rgba(0, 219, 255, 0.3)" : "rgba(255, 204, 0, 0.3)",
                                    theme === "dark" ? "rgba(255, 0, 204, 0.2)" : "rgba(255, 102, 0, 0.2)",
                                    theme === "dark" ? "rgba(0, 219, 255, 0.2)" : "rgba(255, 204, 0, 0.2)",
                                    theme === "dark" ? "rgba(255, 0, 204, 0.1)" : "rgba(255, 102, 0, 0.1)",
                                    theme === "dark" ? "rgba(0, 219, 255, 0.5)" : "rgba(255, 102, 0, 0.5)",
                                    theme === "dark" ? "rgba(0, 219, 255, 0.8)" : "rgba(255, 102, 0, 0.8)",
                                    theme === "dark" ? "rgba(255, 0, 204, 0.5)" : "rgba(255, 51, 0, 0.5)",
                                    theme === "dark" ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.2)",
                                    theme === "dark" ? "rgba(255, 255, 255, 0.8)" : "rgba(0, 0, 0, 0.8)",
                                    theme === "dark" ? "rgba(0, 219, 255, 0.2)" : "rgba(255, 204, 0, 0.2)",
                                    theme === "dark" ? "rgba(0, 219, 255, 0.8)" : "rgba(255, 204, 0, 0.8)",
                                    theme === "dark" ? "0 0 20px rgba(0, 219, 255, 0.6), 0 0 40px rgba(255, 0, 204, 0.4)" : "0 0 20px rgba(255, 204, 0, 0.6), 0 0 40px rgba(255, 102, 0, 0.4)",
                                    theme === "dark" ? "0 0 20px rgba(0, 219, 255, 0.6), 0 0 40px rgba(255, 0, 204, 0.4)" : "0 0 20px rgba(255, 204, 0, 0.6), 0 0 40px rgba(255, 102, 0, 0.4)",
                                    theme === "dark" ? "0 0 30px rgba(0, 219, 255, 0.8), 0 0 50px rgba(255, 0, 204, 0.6)" : "0 0 30px rgba(255, 204, 0, 0.8), 0 0 50px rgba(255, 102, 0, 0.6)",
                                    theme === "dark" ? "0 0 20px rgba(0, 219, 255, 0.6), 0 0 40px rgba(255, 0, 204, 0.4)" : "0 0 20px rgba(255, 204, 0, 0.6), 0 0 40px rgba(255, 102, 0, 0.4)",
                                    theme === "dark" ? "linear-gradient(45deg, #00dbff, #ff00cc, #00dbff, #ff00cc)" : "linear-gradient(45deg, #ffcc00, #ff6600, #ffcc00, #ff6600)",
                                    theme === "dark" ? "linear-gradient(225deg, #ff00cc, #00dbff, #ff00cc, #00dbff)" : "linear-gradient(225deg, #ff6600, #ffcc00, #ff6600, #ffcc00)",
                                    theme === "dark" ? "linear-gradient(45deg, #00dbff, #ff00cc, #00dbff, #ff00cc)" : "linear-gradient(45deg, #ffcc00, #ff6600, #ffcc00, #ff6600)"
                                ]
                            ]
                        ]),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    fontSize: "2.5rem",
                                    color: theme === "dark" ? "#00dbff" : "#ff6600",
                                    fontWeight: 600,
                                    marginBottom: "25px",
                                    letterSpacing: "1.5px",
                                    textShadow: `0 0 15px ${theme === "dark" ? "rgba(0, 219, 255, 0.7)" : "rgba(255, 102, 0, 0.7)"}`
                                },
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                    [
                                        "6d6f4f03b1833620",
                                        [
                                            theme === "dark" ? "rgba(0, 219, 255, 0.2)" : "rgba(255, 204, 0, 0.2)",
                                            theme === "dark" ? "rgba(255, 0, 204, 0.1)" : "rgba(255, 102, 0, 0.1)",
                                            theme === "dark" ? "rgba(0, 219, 255, 0.3)" : "rgba(255, 204, 0, 0.3)",
                                            theme === "dark" ? "rgba(255, 0, 204, 0.2)" : "rgba(255, 102, 0, 0.2)",
                                            theme === "dark" ? "rgba(0, 219, 255, 0.2)" : "rgba(255, 204, 0, 0.2)",
                                            theme === "dark" ? "rgba(255, 0, 204, 0.1)" : "rgba(255, 102, 0, 0.1)",
                                            theme === "dark" ? "rgba(0, 219, 255, 0.5)" : "rgba(255, 102, 0, 0.5)",
                                            theme === "dark" ? "rgba(0, 219, 255, 0.8)" : "rgba(255, 102, 0, 0.8)",
                                            theme === "dark" ? "rgba(255, 0, 204, 0.5)" : "rgba(255, 51, 0, 0.5)",
                                            theme === "dark" ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.2)",
                                            theme === "dark" ? "rgba(255, 255, 255, 0.8)" : "rgba(0, 0, 0, 0.8)",
                                            theme === "dark" ? "rgba(0, 219, 255, 0.2)" : "rgba(255, 204, 0, 0.2)",
                                            theme === "dark" ? "rgba(0, 219, 255, 0.8)" : "rgba(255, 204, 0, 0.8)",
                                            theme === "dark" ? "0 0 20px rgba(0, 219, 255, 0.6), 0 0 40px rgba(255, 0, 204, 0.4)" : "0 0 20px rgba(255, 204, 0, 0.6), 0 0 40px rgba(255, 102, 0, 0.4)",
                                            theme === "dark" ? "0 0 20px rgba(0, 219, 255, 0.6), 0 0 40px rgba(255, 0, 204, 0.4)" : "0 0 20px rgba(255, 204, 0, 0.6), 0 0 40px rgba(255, 102, 0, 0.4)",
                                            theme === "dark" ? "0 0 30px rgba(0, 219, 255, 0.8), 0 0 50px rgba(255, 0, 204, 0.6)" : "0 0 30px rgba(255, 204, 0, 0.8), 0 0 50px rgba(255, 102, 0, 0.6)",
                                            theme === "dark" ? "0 0 20px rgba(0, 219, 255, 0.6), 0 0 40px rgba(255, 0, 204, 0.4)" : "0 0 20px rgba(255, 204, 0, 0.6), 0 0 40px rgba(255, 102, 0, 0.4)",
                                            theme === "dark" ? "linear-gradient(45deg, #00dbff, #ff00cc, #00dbff, #ff00cc)" : "linear-gradient(45deg, #ffcc00, #ff6600, #ffcc00, #ff6600)",
                                            theme === "dark" ? "linear-gradient(225deg, #ff00cc, #00dbff, #ff00cc, #00dbff)" : "linear-gradient(225deg, #ff6600, #ffcc00, #ff6600, #ffcc00)",
                                            theme === "dark" ? "linear-gradient(45deg, #00dbff, #ff00cc, #00dbff, #ff00cc)" : "linear-gradient(45deg, #ffcc00, #ff6600, #ffcc00, #ff6600)"
                                        ]
                                    ]
                                ]),
                                children: "Set Our Schedule"
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 751,
                                columnNumber: 11
                            }, this),
                            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: theme === "dark" ? "#ff66cc" : "#ff3300",
                                    fontSize: "1.2rem",
                                    marginBottom: "25px",
                                    textShadow: `0 0 10px ${theme === "dark" ? "rgba(255, 102, 204, 0.5)" : "rgba(255, 51, 0, 0.5)"}`
                                },
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                    [
                                        "6d6f4f03b1833620",
                                        [
                                            theme === "dark" ? "rgba(0, 219, 255, 0.2)" : "rgba(255, 204, 0, 0.2)",
                                            theme === "dark" ? "rgba(255, 0, 204, 0.1)" : "rgba(255, 102, 0, 0.1)",
                                            theme === "dark" ? "rgba(0, 219, 255, 0.3)" : "rgba(255, 204, 0, 0.3)",
                                            theme === "dark" ? "rgba(255, 0, 204, 0.2)" : "rgba(255, 102, 0, 0.2)",
                                            theme === "dark" ? "rgba(0, 219, 255, 0.2)" : "rgba(255, 204, 0, 0.2)",
                                            theme === "dark" ? "rgba(255, 0, 204, 0.1)" : "rgba(255, 102, 0, 0.1)",
                                            theme === "dark" ? "rgba(0, 219, 255, 0.5)" : "rgba(255, 102, 0, 0.5)",
                                            theme === "dark" ? "rgba(0, 219, 255, 0.8)" : "rgba(255, 102, 0, 0.8)",
                                            theme === "dark" ? "rgba(255, 0, 204, 0.5)" : "rgba(255, 51, 0, 0.5)",
                                            theme === "dark" ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.2)",
                                            theme === "dark" ? "rgba(255, 255, 255, 0.8)" : "rgba(0, 0, 0, 0.8)",
                                            theme === "dark" ? "rgba(0, 219, 255, 0.2)" : "rgba(255, 204, 0, 0.2)",
                                            theme === "dark" ? "rgba(0, 219, 255, 0.8)" : "rgba(255, 204, 0, 0.8)",
                                            theme === "dark" ? "0 0 20px rgba(0, 219, 255, 0.6), 0 0 40px rgba(255, 0, 204, 0.4)" : "0 0 20px rgba(255, 204, 0, 0.6), 0 0 40px rgba(255, 102, 0, 0.4)",
                                            theme === "dark" ? "0 0 20px rgba(0, 219, 255, 0.6), 0 0 40px rgba(255, 0, 204, 0.4)" : "0 0 20px rgba(255, 204, 0, 0.6), 0 0 40px rgba(255, 102, 0, 0.4)",
                                            theme === "dark" ? "0 0 30px rgba(0, 219, 255, 0.8), 0 0 50px rgba(255, 0, 204, 0.6)" : "0 0 30px rgba(255, 204, 0, 0.8), 0 0 50px rgba(255, 102, 0, 0.6)",
                                            theme === "dark" ? "0 0 20px rgba(0, 219, 255, 0.6), 0 0 40px rgba(255, 0, 204, 0.4)" : "0 0 20px rgba(255, 204, 0, 0.6), 0 0 40px rgba(255, 102, 0, 0.4)",
                                            theme === "dark" ? "linear-gradient(45deg, #00dbff, #ff00cc, #00dbff, #ff00cc)" : "linear-gradient(45deg, #ffcc00, #ff6600, #ffcc00, #ff6600)",
                                            theme === "dark" ? "linear-gradient(225deg, #ff00cc, #00dbff, #ff00cc, #00dbff)" : "linear-gradient(225deg, #ff6600, #ffcc00, #ff6600, #ffcc00)",
                                            theme === "dark" ? "linear-gradient(45deg, #00dbff, #ff00cc, #00dbff, #ff00cc)" : "linear-gradient(45deg, #ffcc00, #ff6600, #ffcc00, #ff6600)"
                                        ]
                                    ]
                                ]),
                                children: [
                                    "Alert: ",
                                    error
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 764,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    maxWidth: "1000px",
                                    margin: "0 auto"
                                },
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                    [
                                        "6d6f4f03b1833620",
                                        [
                                            theme === "dark" ? "rgba(0, 219, 255, 0.2)" : "rgba(255, 204, 0, 0.2)",
                                            theme === "dark" ? "rgba(255, 0, 204, 0.1)" : "rgba(255, 102, 0, 0.1)",
                                            theme === "dark" ? "rgba(0, 219, 255, 0.3)" : "rgba(255, 204, 0, 0.3)",
                                            theme === "dark" ? "rgba(255, 0, 204, 0.2)" : "rgba(255, 102, 0, 0.2)",
                                            theme === "dark" ? "rgba(0, 219, 255, 0.2)" : "rgba(255, 204, 0, 0.2)",
                                            theme === "dark" ? "rgba(255, 0, 204, 0.1)" : "rgba(255, 102, 0, 0.1)",
                                            theme === "dark" ? "rgba(0, 219, 255, 0.5)" : "rgba(255, 102, 0, 0.5)",
                                            theme === "dark" ? "rgba(0, 219, 255, 0.8)" : "rgba(255, 102, 0, 0.8)",
                                            theme === "dark" ? "rgba(255, 0, 204, 0.5)" : "rgba(255, 51, 0, 0.5)",
                                            theme === "dark" ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.2)",
                                            theme === "dark" ? "rgba(255, 255, 255, 0.8)" : "rgba(0, 0, 0, 0.8)",
                                            theme === "dark" ? "rgba(0, 219, 255, 0.2)" : "rgba(255, 204, 0, 0.2)",
                                            theme === "dark" ? "rgba(0, 219, 255, 0.8)" : "rgba(255, 204, 0, 0.8)",
                                            theme === "dark" ? "0 0 20px rgba(0, 219, 255, 0.6), 0 0 40px rgba(255, 0, 204, 0.4)" : "0 0 20px rgba(255, 204, 0, 0.6), 0 0 40px rgba(255, 102, 0, 0.4)",
                                            theme === "dark" ? "0 0 20px rgba(0, 219, 255, 0.6), 0 0 40px rgba(255, 0, 204, 0.4)" : "0 0 20px rgba(255, 204, 0, 0.6), 0 0 40px rgba(255, 102, 0, 0.4)",
                                            theme === "dark" ? "0 0 30px rgba(0, 219, 255, 0.8), 0 0 50px rgba(255, 0, 204, 0.6)" : "0 0 30px rgba(255, 204, 0, 0.8), 0 0 50px rgba(255, 102, 0, 0.6)",
                                            theme === "dark" ? "0 0 20px rgba(0, 219, 255, 0.6), 0 0 40px rgba(255, 0, 204, 0.4)" : "0 0 20px rgba(255, 204, 0, 0.6), 0 0 40px rgba(255, 102, 0, 0.4)",
                                            theme === "dark" ? "linear-gradient(45deg, #00dbff, #ff00cc, #00dbff, #ff00cc)" : "linear-gradient(45deg, #ffcc00, #ff6600, #ffcc00, #ff6600)",
                                            theme === "dark" ? "linear-gradient(225deg, #ff00cc, #00dbff, #ff00cc, #00dbff)" : "linear-gradient(225deg, #ff6600, #ffcc00, #ff6600, #ffcc00)",
                                            theme === "dark" ? "linear-gradient(45deg, #00dbff, #ff00cc, #00dbff, #ff00cc)" : "linear-gradient(45deg, #ffcc00, #ff6600, #ffcc00, #ff6600)"
                                        ]
                                    ]
                                ]),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fullcalendar$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    plugins: [
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fullcalendar$2f$daygrid$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fullcalendar$2f$interaction$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
                                    ],
                                    initialView: "dayGridMonth",
                                    events: events.map((event)=>{
                                        const [hours, minutes] = event.time.split(":");
                                        let hours12 = parseInt(hours);
                                        const period = hours12 >= 12 ? "PM" : "AM";
                                        hours12 = hours12 % 12 || 12;
                                        return {
                                            title: `${event.title} at ${hours12}:${minutes} ${period} (Votes: ${event.votes.length})`,
                                            date: event.date,
                                            id: event._id
                                        };
                                    }),
                                    dateClick: handleDateClick,
                                    eventClick: handleEventClick,
                                    height: "600px",
                                    style: {
                                        background: theme === "dark" ? "rgba(255, 255, 255, 0.95)" : "rgba(255, 255, 255, 0.9)",
                                        borderRadius: "15px",
                                        boxShadow: `0 5px 25px ${theme === "dark" ? "rgba(0, 219, 255, 0.4)" : "rgba(255, 204, 0, 0.4)"}`,
                                        border: `1px solid ${theme === "dark" ? "rgba(0, 219, 255, 0.3)" : "rgba(255, 204, 0, 0.3)"}`
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/page.js",
                                    lineNumber: 776,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 775,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 738,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.js",
                lineNumber: 595,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setChatOpen(!chatOpen),
                style: {
                    position: "fixed",
                    bottom: "20px",
                    right: "80px",
                    width: "50px",
                    height: "50px",
                    background: theme === "dark" ? "linear-gradient(90deg, #00dbff, #ff00cc)" : "linear-gradient(90deg, #ffcc00, #ff6600)",
                    border: "none",
                    borderRadius: "50%",
                    cursor: "pointer",
                    boxShadow: theme === "dark" ? "0 0 15px rgba(0, 219, 255, 0.6)" : "0 0 15px rgba(255, 204, 0, 0.6)",
                    transition: "all 0.3s ease",
                    zIndex: 1000
                },
                onMouseOver: (e)=>e.target.style.transform = "scale(1.1)",
                onMouseOut: (e)=>e.target.style.transform = "scale(1)",
                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                    [
                        "6d6f4f03b1833620",
                        [
                            theme === "dark" ? "rgba(0, 219, 255, 0.2)" : "rgba(255, 204, 0, 0.2)",
                            theme === "dark" ? "rgba(255, 0, 204, 0.1)" : "rgba(255, 102, 0, 0.1)",
                            theme === "dark" ? "rgba(0, 219, 255, 0.3)" : "rgba(255, 204, 0, 0.3)",
                            theme === "dark" ? "rgba(255, 0, 204, 0.2)" : "rgba(255, 102, 0, 0.2)",
                            theme === "dark" ? "rgba(0, 219, 255, 0.2)" : "rgba(255, 204, 0, 0.2)",
                            theme === "dark" ? "rgba(255, 0, 204, 0.1)" : "rgba(255, 102, 0, 0.1)",
                            theme === "dark" ? "rgba(0, 219, 255, 0.5)" : "rgba(255, 102, 0, 0.5)",
                            theme === "dark" ? "rgba(0, 219, 255, 0.8)" : "rgba(255, 102, 0, 0.8)",
                            theme === "dark" ? "rgba(255, 0, 204, 0.5)" : "rgba(255, 51, 0, 0.5)",
                            theme === "dark" ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.2)",
                            theme === "dark" ? "rgba(255, 255, 255, 0.8)" : "rgba(0, 0, 0, 0.8)",
                            theme === "dark" ? "rgba(0, 219, 255, 0.2)" : "rgba(255, 204, 0, 0.2)",
                            theme === "dark" ? "rgba(0, 219, 255, 0.8)" : "rgba(255, 204, 0, 0.8)",
                            theme === "dark" ? "0 0 20px rgba(0, 219, 255, 0.6), 0 0 40px rgba(255, 0, 204, 0.4)" : "0 0 20px rgba(255, 204, 0, 0.6), 0 0 40px rgba(255, 102, 0, 0.4)",
                            theme === "dark" ? "0 0 20px rgba(0, 219, 255, 0.6), 0 0 40px rgba(255, 0, 204, 0.4)" : "0 0 20px rgba(255, 204, 0, 0.6), 0 0 40px rgba(255, 102, 0, 0.4)",
                            theme === "dark" ? "0 0 30px rgba(0, 219, 255, 0.8), 0 0 50px rgba(255, 0, 204, 0.6)" : "0 0 30px rgba(255, 204, 0, 0.8), 0 0 50px rgba(255, 102, 0, 0.6)",
                            theme === "dark" ? "0 0 20px rgba(0, 219, 255, 0.6), 0 0 40px rgba(255, 0, 204, 0.4)" : "0 0 20px rgba(255, 204, 0, 0.6), 0 0 40px rgba(255, 102, 0, 0.4)",
                            theme === "dark" ? "linear-gradient(45deg, #00dbff, #ff00cc, #00dbff, #ff00cc)" : "linear-gradient(45deg, #ffcc00, #ff6600, #ffcc00, #ff6600)",
                            theme === "dark" ? "linear-gradient(225deg, #ff00cc, #00dbff, #ff00cc, #00dbff)" : "linear-gradient(225deg, #ff6600, #ffcc00, #ff6600, #ffcc00)",
                            theme === "dark" ? "linear-gradient(45deg, #00dbff, #ff00cc, #00dbff, #ff00cc)" : "linear-gradient(45deg, #ffcc00, #ff6600, #ffcc00, #ff6600)"
                        ]
                    ]
                ]),
                children: "💬"
            }, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 805,
                columnNumber: 7
            }, this),
            chatOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "fixed",
                    bottom: "80px",
                    right: "20px",
                    width: "300px",
                    height: "400px",
                    background: theme === "dark" ? "rgba(10, 20, 30, 0.95)" : "rgba(240, 240, 240, 0.95)",
                    borderRadius: "15px",
                    boxShadow: theme === "dark" ? "0 0 20px rgba(0, 219, 255, 0.5)" : "0 0 20px rgba(255, 204, 0, 0.5)",
                    zIndex: 1000,
                    display: "flex",
                    flexDirection: "column",
                    padding: "10px"
                },
                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                    [
                        "6d6f4f03b1833620",
                        [
                            theme === "dark" ? "rgba(0, 219, 255, 0.2)" : "rgba(255, 204, 0, 0.2)",
                            theme === "dark" ? "rgba(255, 0, 204, 0.1)" : "rgba(255, 102, 0, 0.1)",
                            theme === "dark" ? "rgba(0, 219, 255, 0.3)" : "rgba(255, 204, 0, 0.3)",
                            theme === "dark" ? "rgba(255, 0, 204, 0.2)" : "rgba(255, 102, 0, 0.2)",
                            theme === "dark" ? "rgba(0, 219, 255, 0.2)" : "rgba(255, 204, 0, 0.2)",
                            theme === "dark" ? "rgba(255, 0, 204, 0.1)" : "rgba(255, 102, 0, 0.1)",
                            theme === "dark" ? "rgba(0, 219, 255, 0.5)" : "rgba(255, 102, 0, 0.5)",
                            theme === "dark" ? "rgba(0, 219, 255, 0.8)" : "rgba(255, 102, 0, 0.8)",
                            theme === "dark" ? "rgba(255, 0, 204, 0.5)" : "rgba(255, 51, 0, 0.5)",
                            theme === "dark" ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.2)",
                            theme === "dark" ? "rgba(255, 255, 255, 0.8)" : "rgba(0, 0, 0, 0.8)",
                            theme === "dark" ? "rgba(0, 219, 255, 0.2)" : "rgba(255, 204, 0, 0.2)",
                            theme === "dark" ? "rgba(0, 219, 255, 0.8)" : "rgba(255, 204, 0, 0.8)",
                            theme === "dark" ? "0 0 20px rgba(0, 219, 255, 0.6), 0 0 40px rgba(255, 0, 204, 0.4)" : "0 0 20px rgba(255, 204, 0, 0.6), 0 0 40px rgba(255, 102, 0, 0.4)",
                            theme === "dark" ? "0 0 20px rgba(0, 219, 255, 0.6), 0 0 40px rgba(255, 0, 204, 0.4)" : "0 0 20px rgba(255, 204, 0, 0.6), 0 0 40px rgba(255, 102, 0, 0.4)",
                            theme === "dark" ? "0 0 30px rgba(0, 219, 255, 0.8), 0 0 50px rgba(255, 0, 204, 0.6)" : "0 0 30px rgba(255, 204, 0, 0.8), 0 0 50px rgba(255, 102, 0, 0.6)",
                            theme === "dark" ? "0 0 20px rgba(0, 219, 255, 0.6), 0 0 40px rgba(255, 0, 204, 0.4)" : "0 0 20px rgba(255, 204, 0, 0.6), 0 0 40px rgba(255, 102, 0, 0.4)",
                            theme === "dark" ? "linear-gradient(45deg, #00dbff, #ff00cc, #00dbff, #ff00cc)" : "linear-gradient(45deg, #ffcc00, #ff6600, #ffcc00, #ff6600)",
                            theme === "dark" ? "linear-gradient(225deg, #ff00cc, #00dbff, #ff00cc, #00dbff)" : "linear-gradient(225deg, #ff6600, #ffcc00, #ff6600, #ffcc00)",
                            theme === "dark" ? "linear-gradient(45deg, #00dbff, #ff00cc, #00dbff, #ff00cc)" : "linear-gradient(45deg, #ffcc00, #ff6600, #ffcc00, #ff6600)"
                        ]
                    ]
                ]),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: 1,
                            overflowY: "auto",
                            padding: "10px"
                        },
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                            [
                                "6d6f4f03b1833620",
                                [
                                    theme === "dark" ? "rgba(0, 219, 255, 0.2)" : "rgba(255, 204, 0, 0.2)",
                                    theme === "dark" ? "rgba(255, 0, 204, 0.1)" : "rgba(255, 102, 0, 0.1)",
                                    theme === "dark" ? "rgba(0, 219, 255, 0.3)" : "rgba(255, 204, 0, 0.3)",
                                    theme === "dark" ? "rgba(255, 0, 204, 0.2)" : "rgba(255, 102, 0, 0.2)",
                                    theme === "dark" ? "rgba(0, 219, 255, 0.2)" : "rgba(255, 204, 0, 0.2)",
                                    theme === "dark" ? "rgba(255, 0, 204, 0.1)" : "rgba(255, 102, 0, 0.1)",
                                    theme === "dark" ? "rgba(0, 219, 255, 0.5)" : "rgba(255, 102, 0, 0.5)",
                                    theme === "dark" ? "rgba(0, 219, 255, 0.8)" : "rgba(255, 102, 0, 0.8)",
                                    theme === "dark" ? "rgba(255, 0, 204, 0.5)" : "rgba(255, 51, 0, 0.5)",
                                    theme === "dark" ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.2)",
                                    theme === "dark" ? "rgba(255, 255, 255, 0.8)" : "rgba(0, 0, 0, 0.8)",
                                    theme === "dark" ? "rgba(0, 219, 255, 0.2)" : "rgba(255, 204, 0, 0.2)",
                                    theme === "dark" ? "rgba(0, 219, 255, 0.8)" : "rgba(255, 204, 0, 0.8)",
                                    theme === "dark" ? "0 0 20px rgba(0, 219, 255, 0.6), 0 0 40px rgba(255, 0, 204, 0.4)" : "0 0 20px rgba(255, 204, 0, 0.6), 0 0 40px rgba(255, 102, 0, 0.4)",
                                    theme === "dark" ? "0 0 20px rgba(0, 219, 255, 0.6), 0 0 40px rgba(255, 0, 204, 0.4)" : "0 0 20px rgba(255, 204, 0, 0.6), 0 0 40px rgba(255, 102, 0, 0.4)",
                                    theme === "dark" ? "0 0 30px rgba(0, 219, 255, 0.8), 0 0 50px rgba(255, 0, 204, 0.6)" : "0 0 30px rgba(255, 204, 0, 0.8), 0 0 50px rgba(255, 102, 0, 0.6)",
                                    theme === "dark" ? "0 0 20px rgba(0, 219, 255, 0.6), 0 0 40px rgba(255, 0, 204, 0.4)" : "0 0 20px rgba(255, 204, 0, 0.6), 0 0 40px rgba(255, 102, 0, 0.4)",
                                    theme === "dark" ? "linear-gradient(45deg, #00dbff, #ff00cc, #00dbff, #ff00cc)" : "linear-gradient(45deg, #ffcc00, #ff6600, #ffcc00, #ff6600)",
                                    theme === "dark" ? "linear-gradient(225deg, #ff00cc, #00dbff, #ff00cc, #00dbff)" : "linear-gradient(225deg, #ff6600, #ffcc00, #ff6600, #ffcc00)",
                                    theme === "dark" ? "linear-gradient(45deg, #00dbff, #ff00cc, #00dbff, #ff00cc)" : "linear-gradient(45deg, #ffcc00, #ff6600, #ffcc00, #ff6600)"
                                ]
                            ]
                        ]),
                        children: chatMessages.map((msg, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    margin: "5px 0",
                                    textAlign: msg.sender === "user" ? "right" : "left"
                                },
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                    [
                                        "6d6f4f03b1833620",
                                        [
                                            theme === "dark" ? "rgba(0, 219, 255, 0.2)" : "rgba(255, 204, 0, 0.2)",
                                            theme === "dark" ? "rgba(255, 0, 204, 0.1)" : "rgba(255, 102, 0, 0.1)",
                                            theme === "dark" ? "rgba(0, 219, 255, 0.3)" : "rgba(255, 204, 0, 0.3)",
                                            theme === "dark" ? "rgba(255, 0, 204, 0.2)" : "rgba(255, 102, 0, 0.2)",
                                            theme === "dark" ? "rgba(0, 219, 255, 0.2)" : "rgba(255, 204, 0, 0.2)",
                                            theme === "dark" ? "rgba(255, 0, 204, 0.1)" : "rgba(255, 102, 0, 0.1)",
                                            theme === "dark" ? "rgba(0, 219, 255, 0.5)" : "rgba(255, 102, 0, 0.5)",
                                            theme === "dark" ? "rgba(0, 219, 255, 0.8)" : "rgba(255, 102, 0, 0.8)",
                                            theme === "dark" ? "rgba(255, 0, 204, 0.5)" : "rgba(255, 51, 0, 0.5)",
                                            theme === "dark" ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.2)",
                                            theme === "dark" ? "rgba(255, 255, 255, 0.8)" : "rgba(0, 0, 0, 0.8)",
                                            theme === "dark" ? "rgba(0, 219, 255, 0.2)" : "rgba(255, 204, 0, 0.2)",
                                            theme === "dark" ? "rgba(0, 219, 255, 0.8)" : "rgba(255, 204, 0, 0.8)",
                                            theme === "dark" ? "0 0 20px rgba(0, 219, 255, 0.6), 0 0 40px rgba(255, 0, 204, 0.4)" : "0 0 20px rgba(255, 204, 0, 0.6), 0 0 40px rgba(255, 102, 0, 0.4)",
                                            theme === "dark" ? "0 0 20px rgba(0, 219, 255, 0.6), 0 0 40px rgba(255, 0, 204, 0.4)" : "0 0 20px rgba(255, 204, 0, 0.6), 0 0 40px rgba(255, 102, 0, 0.4)",
                                            theme === "dark" ? "0 0 30px rgba(0, 219, 255, 0.8), 0 0 50px rgba(255, 0, 204, 0.6)" : "0 0 30px rgba(255, 204, 0, 0.8), 0 0 50px rgba(255, 102, 0, 0.6)",
                                            theme === "dark" ? "0 0 20px rgba(0, 219, 255, 0.6), 0 0 40px rgba(255, 0, 204, 0.4)" : "0 0 20px rgba(255, 204, 0, 0.6), 0 0 40px rgba(255, 102, 0, 0.4)",
                                            theme === "dark" ? "linear-gradient(45deg, #00dbff, #ff00cc, #00dbff, #ff00cc)" : "linear-gradient(45deg, #ffcc00, #ff6600, #ffcc00, #ff6600)",
                                            theme === "dark" ? "linear-gradient(225deg, #ff00cc, #00dbff, #ff00cc, #00dbff)" : "linear-gradient(225deg, #ff6600, #ffcc00, #ff6600, #ffcc00)",
                                            theme === "dark" ? "linear-gradient(45deg, #00dbff, #ff00cc, #00dbff, #ff00cc)" : "linear-gradient(45deg, #ffcc00, #ff6600, #ffcc00, #ff6600)"
                                        ]
                                    ]
                                ]),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        display: "inline-block",
                                        padding: "8px 12px",
                                        background: msg.sender === "user" ? theme === "dark" ? "#00dbff" : "#ffcc00" : theme === "dark" ? "#ff00cc" : "#ff6600",
                                        color: "#fff",
                                        borderRadius: "10px",
                                        maxWidth: "80%",
                                        whiteSpace: "pre-wrap"
                                    },
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                        [
                                            "6d6f4f03b1833620",
                                            [
                                                theme === "dark" ? "rgba(0, 219, 255, 0.2)" : "rgba(255, 204, 0, 0.2)",
                                                theme === "dark" ? "rgba(255, 0, 204, 0.1)" : "rgba(255, 102, 0, 0.1)",
                                                theme === "dark" ? "rgba(0, 219, 255, 0.3)" : "rgba(255, 204, 0, 0.3)",
                                                theme === "dark" ? "rgba(255, 0, 204, 0.2)" : "rgba(255, 102, 0, 0.2)",
                                                theme === "dark" ? "rgba(0, 219, 255, 0.2)" : "rgba(255, 204, 0, 0.2)",
                                                theme === "dark" ? "rgba(255, 0, 204, 0.1)" : "rgba(255, 102, 0, 0.1)",
                                                theme === "dark" ? "rgba(0, 219, 255, 0.5)" : "rgba(255, 102, 0, 0.5)",
                                                theme === "dark" ? "rgba(0, 219, 255, 0.8)" : "rgba(255, 102, 0, 0.8)",
                                                theme === "dark" ? "rgba(255, 0, 204, 0.5)" : "rgba(255, 51, 0, 0.5)",
                                                theme === "dark" ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.2)",
                                                theme === "dark" ? "rgba(255, 255, 255, 0.8)" : "rgba(0, 0, 0, 0.8)",
                                                theme === "dark" ? "rgba(0, 219, 255, 0.2)" : "rgba(255, 204, 0, 0.2)",
                                                theme === "dark" ? "rgba(0, 219, 255, 0.8)" : "rgba(255, 204, 0, 0.8)",
                                                theme === "dark" ? "0 0 20px rgba(0, 219, 255, 0.6), 0 0 40px rgba(255, 0, 204, 0.4)" : "0 0 20px rgba(255, 204, 0, 0.6), 0 0 40px rgba(255, 102, 0, 0.4)",
                                                theme === "dark" ? "0 0 20px rgba(0, 219, 255, 0.6), 0 0 40px rgba(255, 0, 204, 0.4)" : "0 0 20px rgba(255, 204, 0, 0.6), 0 0 40px rgba(255, 102, 0, 0.4)",
                                                theme === "dark" ? "0 0 30px rgba(0, 219, 255, 0.8), 0 0 50px rgba(255, 0, 204, 0.6)" : "0 0 30px rgba(255, 204, 0, 0.8), 0 0 50px rgba(255, 102, 0, 0.6)",
                                                theme === "dark" ? "0 0 20px rgba(0, 219, 255, 0.6), 0 0 40px rgba(255, 0, 204, 0.4)" : "0 0 20px rgba(255, 204, 0, 0.6), 0 0 40px rgba(255, 102, 0, 0.4)",
                                                theme === "dark" ? "linear-gradient(45deg, #00dbff, #ff00cc, #00dbff, #ff00cc)" : "linear-gradient(45deg, #ffcc00, #ff6600, #ffcc00, #ff6600)",
                                                theme === "dark" ? "linear-gradient(225deg, #ff00cc, #00dbff, #ff00cc, #00dbff)" : "linear-gradient(225deg, #ff6600, #ffcc00, #ff6600, #ffcc00)",
                                                theme === "dark" ? "linear-gradient(45deg, #00dbff, #ff00cc, #00dbff, #ff00cc)" : "linear-gradient(45deg, #ffcc00, #ff6600, #ffcc00, #ff6600)"
                                            ]
                                        ]
                                    ]),
                                    children: msg.text
                                }, void 0, false, {
                                    fileName: "[project]/app/page.js",
                                    lineNumber: 868,
                                    columnNumber: 17
                                }, this)
                            }, index, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 861,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 853,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleChatSubmit,
                        style: {
                            display: "flex",
                            padding: "10px"
                        },
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                            [
                                "6d6f4f03b1833620",
                                [
                                    theme === "dark" ? "rgba(0, 219, 255, 0.2)" : "rgba(255, 204, 0, 0.2)",
                                    theme === "dark" ? "rgba(255, 0, 204, 0.1)" : "rgba(255, 102, 0, 0.1)",
                                    theme === "dark" ? "rgba(0, 219, 255, 0.3)" : "rgba(255, 204, 0, 0.3)",
                                    theme === "dark" ? "rgba(255, 0, 204, 0.2)" : "rgba(255, 102, 0, 0.2)",
                                    theme === "dark" ? "rgba(0, 219, 255, 0.2)" : "rgba(255, 204, 0, 0.2)",
                                    theme === "dark" ? "rgba(255, 0, 204, 0.1)" : "rgba(255, 102, 0, 0.1)",
                                    theme === "dark" ? "rgba(0, 219, 255, 0.5)" : "rgba(255, 102, 0, 0.5)",
                                    theme === "dark" ? "rgba(0, 219, 255, 0.8)" : "rgba(255, 102, 0, 0.8)",
                                    theme === "dark" ? "rgba(255, 0, 204, 0.5)" : "rgba(255, 51, 0, 0.5)",
                                    theme === "dark" ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.2)",
                                    theme === "dark" ? "rgba(255, 255, 255, 0.8)" : "rgba(0, 0, 0, 0.8)",
                                    theme === "dark" ? "rgba(0, 219, 255, 0.2)" : "rgba(255, 204, 0, 0.2)",
                                    theme === "dark" ? "rgba(0, 219, 255, 0.8)" : "rgba(255, 204, 0, 0.8)",
                                    theme === "dark" ? "0 0 20px rgba(0, 219, 255, 0.6), 0 0 40px rgba(255, 0, 204, 0.4)" : "0 0 20px rgba(255, 204, 0, 0.6), 0 0 40px rgba(255, 102, 0, 0.4)",
                                    theme === "dark" ? "0 0 20px rgba(0, 219, 255, 0.6), 0 0 40px rgba(255, 0, 204, 0.4)" : "0 0 20px rgba(255, 204, 0, 0.6), 0 0 40px rgba(255, 102, 0, 0.4)",
                                    theme === "dark" ? "0 0 30px rgba(0, 219, 255, 0.8), 0 0 50px rgba(255, 0, 204, 0.6)" : "0 0 30px rgba(255, 204, 0, 0.8), 0 0 50px rgba(255, 102, 0, 0.6)",
                                    theme === "dark" ? "0 0 20px rgba(0, 219, 255, 0.6), 0 0 40px rgba(255, 0, 204, 0.4)" : "0 0 20px rgba(255, 204, 0, 0.6), 0 0 40px rgba(255, 102, 0, 0.4)",
                                    theme === "dark" ? "linear-gradient(45deg, #00dbff, #ff00cc, #00dbff, #ff00cc)" : "linear-gradient(45deg, #ffcc00, #ff6600, #ffcc00, #ff6600)",
                                    theme === "dark" ? "linear-gradient(225deg, #ff00cc, #00dbff, #ff00cc, #00dbff)" : "linear-gradient(225deg, #ff6600, #ffcc00, #ff6600, #ffcc00)",
                                    theme === "dark" ? "linear-gradient(45deg, #00dbff, #ff00cc, #00dbff, #ff00cc)" : "linear-gradient(45deg, #ffcc00, #ff6600, #ffcc00, #ff6600)"
                                ]
                            ]
                        ]),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                value: chatInput,
                                onChange: (e)=>setChatInput(e.target.value),
                                placeholder: "Ask me anything...",
                                style: {
                                    flex: 1,
                                    padding: "8px",
                                    borderRadius: "10px",
                                    border: `1px solid ${theme === "dark" ? "#00dbff" : "#ff6600"}`,
                                    background: theme === "dark" ? "#0a141e" : "#fff",
                                    color: theme === "dark" ? "#d4faff" : "#1c2526",
                                    outline: "none"
                                },
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                    [
                                        "6d6f4f03b1833620",
                                        [
                                            theme === "dark" ? "rgba(0, 219, 255, 0.2)" : "rgba(255, 204, 0, 0.2)",
                                            theme === "dark" ? "rgba(255, 0, 204, 0.1)" : "rgba(255, 102, 0, 0.1)",
                                            theme === "dark" ? "rgba(0, 219, 255, 0.3)" : "rgba(255, 204, 0, 0.3)",
                                            theme === "dark" ? "rgba(255, 0, 204, 0.2)" : "rgba(255, 102, 0, 0.2)",
                                            theme === "dark" ? "rgba(0, 219, 255, 0.2)" : "rgba(255, 204, 0, 0.2)",
                                            theme === "dark" ? "rgba(255, 0, 204, 0.1)" : "rgba(255, 102, 0, 0.1)",
                                            theme === "dark" ? "rgba(0, 219, 255, 0.5)" : "rgba(255, 102, 0, 0.5)",
                                            theme === "dark" ? "rgba(0, 219, 255, 0.8)" : "rgba(255, 102, 0, 0.8)",
                                            theme === "dark" ? "rgba(255, 0, 204, 0.5)" : "rgba(255, 51, 0, 0.5)",
                                            theme === "dark" ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.2)",
                                            theme === "dark" ? "rgba(255, 255, 255, 0.8)" : "rgba(0, 0, 0, 0.8)",
                                            theme === "dark" ? "rgba(0, 219, 255, 0.2)" : "rgba(255, 204, 0, 0.2)",
                                            theme === "dark" ? "rgba(0, 219, 255, 0.8)" : "rgba(255, 204, 0, 0.8)",
                                            theme === "dark" ? "0 0 20px rgba(0, 219, 255, 0.6), 0 0 40px rgba(255, 0, 204, 0.4)" : "0 0 20px rgba(255, 204, 0, 0.6), 0 0 40px rgba(255, 102, 0, 0.4)",
                                            theme === "dark" ? "0 0 20px rgba(0, 219, 255, 0.6), 0 0 40px rgba(255, 0, 204, 0.4)" : "0 0 20px rgba(255, 204, 0, 0.6), 0 0 40px rgba(255, 102, 0, 0.4)",
                                            theme === "dark" ? "0 0 30px rgba(0, 219, 255, 0.8), 0 0 50px rgba(255, 0, 204, 0.6)" : "0 0 30px rgba(255, 204, 0, 0.8), 0 0 50px rgba(255, 102, 0, 0.6)",
                                            theme === "dark" ? "0 0 20px rgba(0, 219, 255, 0.6), 0 0 40px rgba(255, 0, 204, 0.4)" : "0 0 20px rgba(255, 204, 0, 0.6), 0 0 40px rgba(255, 102, 0, 0.4)",
                                            theme === "dark" ? "linear-gradient(45deg, #00dbff, #ff00cc, #00dbff, #ff00cc)" : "linear-gradient(45deg, #ffcc00, #ff6600, #ffcc00, #ff6600)",
                                            theme === "dark" ? "linear-gradient(225deg, #ff00cc, #00dbff, #ff00cc, #00dbff)" : "linear-gradient(225deg, #ff6600, #ffcc00, #ff6600, #ffcc00)",
                                            theme === "dark" ? "linear-gradient(45deg, #00dbff, #ff00cc, #00dbff, #ff00cc)" : "linear-gradient(45deg, #ffcc00, #ff6600, #ffcc00, #ff6600)"
                                        ]
                                    ]
                                ])
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 898,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                style: {
                                    marginLeft: "10px",
                                    padding: "8px 15px",
                                    background: theme === "dark" ? "linear-gradient(90deg, #00dbff, #ff00cc)" : "linear-gradient(90deg, #ffcc00, #ff6600)",
                                    border: "none",
                                    borderRadius: "10px",
                                    color: "#fff",
                                    cursor: "pointer"
                                },
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                    [
                                        "6d6f4f03b1833620",
                                        [
                                            theme === "dark" ? "rgba(0, 219, 255, 0.2)" : "rgba(255, 204, 0, 0.2)",
                                            theme === "dark" ? "rgba(255, 0, 204, 0.1)" : "rgba(255, 102, 0, 0.1)",
                                            theme === "dark" ? "rgba(0, 219, 255, 0.3)" : "rgba(255, 204, 0, 0.3)",
                                            theme === "dark" ? "rgba(255, 0, 204, 0.2)" : "rgba(255, 102, 0, 0.2)",
                                            theme === "dark" ? "rgba(0, 219, 255, 0.2)" : "rgba(255, 204, 0, 0.2)",
                                            theme === "dark" ? "rgba(255, 0, 204, 0.1)" : "rgba(255, 102, 0, 0.1)",
                                            theme === "dark" ? "rgba(0, 219, 255, 0.5)" : "rgba(255, 102, 0, 0.5)",
                                            theme === "dark" ? "rgba(0, 219, 255, 0.8)" : "rgba(255, 102, 0, 0.8)",
                                            theme === "dark" ? "rgba(255, 0, 204, 0.5)" : "rgba(255, 51, 0, 0.5)",
                                            theme === "dark" ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.2)",
                                            theme === "dark" ? "rgba(255, 255, 255, 0.8)" : "rgba(0, 0, 0, 0.8)",
                                            theme === "dark" ? "rgba(0, 219, 255, 0.2)" : "rgba(255, 204, 0, 0.2)",
                                            theme === "dark" ? "rgba(0, 219, 255, 0.8)" : "rgba(255, 204, 0, 0.8)",
                                            theme === "dark" ? "0 0 20px rgba(0, 219, 255, 0.6), 0 0 40px rgba(255, 0, 204, 0.4)" : "0 0 20px rgba(255, 204, 0, 0.6), 0 0 40px rgba(255, 102, 0, 0.4)",
                                            theme === "dark" ? "0 0 20px rgba(0, 219, 255, 0.6), 0 0 40px rgba(255, 0, 204, 0.4)" : "0 0 20px rgba(255, 204, 0, 0.6), 0 0 40px rgba(255, 102, 0, 0.4)",
                                            theme === "dark" ? "0 0 30px rgba(0, 219, 255, 0.8), 0 0 50px rgba(255, 0, 204, 0.6)" : "0 0 30px rgba(255, 204, 0, 0.8), 0 0 50px rgba(255, 102, 0, 0.6)",
                                            theme === "dark" ? "0 0 20px rgba(0, 219, 255, 0.6), 0 0 40px rgba(255, 0, 204, 0.4)" : "0 0 20px rgba(255, 204, 0, 0.6), 0 0 40px rgba(255, 102, 0, 0.4)",
                                            theme === "dark" ? "linear-gradient(45deg, #00dbff, #ff00cc, #00dbff, #ff00cc)" : "linear-gradient(45deg, #ffcc00, #ff6600, #ffcc00, #ff6600)",
                                            theme === "dark" ? "linear-gradient(225deg, #ff00cc, #00dbff, #ff00cc, #00dbff)" : "linear-gradient(225deg, #ff6600, #ffcc00, #ff6600, #ffcc00)",
                                            theme === "dark" ? "linear-gradient(45deg, #00dbff, #ff00cc, #00dbff, #ff00cc)" : "linear-gradient(45deg, #ffcc00, #ff6600, #ffcc00, #ff6600)"
                                        ]
                                    ]
                                ]),
                                children: "Send"
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 913,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 891,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.js",
                lineNumber: 834,
                columnNumber: 9
            }, this),
            notification && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "fixed",
                    bottom: "20px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    padding: "10px 20px",
                    background: theme === "dark" ? "rgba(0, 219, 255, 0.2)" : "rgba(255, 204, 0, 0.2)",
                    color: theme === "dark" ? "#d4faff" : "#1c2526",
                    borderRadius: "10px",
                    boxShadow: `0 0 15px ${theme === "dark" ? "rgba(0, 219, 255, 0.5)" : "rgba(255, 204, 0, 0.5)"}`,
                    animation: "slideUp 0.5s ease-out forwards, fadeOut 0.5s ease-out 4.5s forwards",
                    zIndex: 1000,
                    maxWidth: "80%",
                    textAlign: "center"
                },
                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                    [
                        "6d6f4f03b1833620",
                        [
                            theme === "dark" ? "rgba(0, 219, 255, 0.2)" : "rgba(255, 204, 0, 0.2)",
                            theme === "dark" ? "rgba(255, 0, 204, 0.1)" : "rgba(255, 102, 0, 0.1)",
                            theme === "dark" ? "rgba(0, 219, 255, 0.3)" : "rgba(255, 204, 0, 0.3)",
                            theme === "dark" ? "rgba(255, 0, 204, 0.2)" : "rgba(255, 102, 0, 0.2)",
                            theme === "dark" ? "rgba(0, 219, 255, 0.2)" : "rgba(255, 204, 0, 0.2)",
                            theme === "dark" ? "rgba(255, 0, 204, 0.1)" : "rgba(255, 102, 0, 0.1)",
                            theme === "dark" ? "rgba(0, 219, 255, 0.5)" : "rgba(255, 102, 0, 0.5)",
                            theme === "dark" ? "rgba(0, 219, 255, 0.8)" : "rgba(255, 102, 0, 0.8)",
                            theme === "dark" ? "rgba(255, 0, 204, 0.5)" : "rgba(255, 51, 0, 0.5)",
                            theme === "dark" ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.2)",
                            theme === "dark" ? "rgba(255, 255, 255, 0.8)" : "rgba(0, 0, 0, 0.8)",
                            theme === "dark" ? "rgba(0, 219, 255, 0.2)" : "rgba(255, 204, 0, 0.2)",
                            theme === "dark" ? "rgba(0, 219, 255, 0.8)" : "rgba(255, 204, 0, 0.8)",
                            theme === "dark" ? "0 0 20px rgba(0, 219, 255, 0.6), 0 0 40px rgba(255, 0, 204, 0.4)" : "0 0 20px rgba(255, 204, 0, 0.6), 0 0 40px rgba(255, 102, 0, 0.4)",
                            theme === "dark" ? "0 0 20px rgba(0, 219, 255, 0.6), 0 0 40px rgba(255, 0, 204, 0.4)" : "0 0 20px rgba(255, 204, 0, 0.6), 0 0 40px rgba(255, 102, 0, 0.4)",
                            theme === "dark" ? "0 0 30px rgba(0, 219, 255, 0.8), 0 0 50px rgba(255, 0, 204, 0.6)" : "0 0 30px rgba(255, 204, 0, 0.8), 0 0 50px rgba(255, 102, 0, 0.6)",
                            theme === "dark" ? "0 0 20px rgba(0, 219, 255, 0.6), 0 0 40px rgba(255, 0, 204, 0.4)" : "0 0 20px rgba(255, 204, 0, 0.6), 0 0 40px rgba(255, 102, 0, 0.4)",
                            theme === "dark" ? "linear-gradient(45deg, #00dbff, #ff00cc, #00dbff, #ff00cc)" : "linear-gradient(45deg, #ffcc00, #ff6600, #ffcc00, #ff6600)",
                            theme === "dark" ? "linear-gradient(225deg, #ff00cc, #00dbff, #ff00cc, #00dbff)" : "linear-gradient(225deg, #ff6600, #ffcc00, #ff6600, #ffcc00)",
                            theme === "dark" ? "linear-gradient(45deg, #00dbff, #ff00cc, #00dbff, #ff00cc)" : "linear-gradient(45deg, #ffcc00, #ff6600, #ffcc00, #ff6600)"
                        ]
                    ]
                ]),
                children: notification
            }, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 935,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "6d6f4f03b1833620",
                dynamic: [
                    theme === "dark" ? "rgba(0, 219, 255, 0.2)" : "rgba(255, 204, 0, 0.2)",
                    theme === "dark" ? "rgba(255, 0, 204, 0.1)" : "rgba(255, 102, 0, 0.1)",
                    theme === "dark" ? "rgba(0, 219, 255, 0.3)" : "rgba(255, 204, 0, 0.3)",
                    theme === "dark" ? "rgba(255, 0, 204, 0.2)" : "rgba(255, 102, 0, 0.2)",
                    theme === "dark" ? "rgba(0, 219, 255, 0.2)" : "rgba(255, 204, 0, 0.2)",
                    theme === "dark" ? "rgba(255, 0, 204, 0.1)" : "rgba(255, 102, 0, 0.1)",
                    theme === "dark" ? "rgba(0, 219, 255, 0.5)" : "rgba(255, 102, 0, 0.5)",
                    theme === "dark" ? "rgba(0, 219, 255, 0.8)" : "rgba(255, 102, 0, 0.8)",
                    theme === "dark" ? "rgba(255, 0, 204, 0.5)" : "rgba(255, 51, 0, 0.5)",
                    theme === "dark" ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.2)",
                    theme === "dark" ? "rgba(255, 255, 255, 0.8)" : "rgba(0, 0, 0, 0.8)",
                    theme === "dark" ? "rgba(0, 219, 255, 0.2)" : "rgba(255, 204, 0, 0.2)",
                    theme === "dark" ? "rgba(0, 219, 255, 0.8)" : "rgba(255, 204, 0, 0.8)",
                    theme === "dark" ? "0 0 20px rgba(0, 219, 255, 0.6), 0 0 40px rgba(255, 0, 204, 0.4)" : "0 0 20px rgba(255, 204, 0, 0.6), 0 0 40px rgba(255, 102, 0, 0.4)",
                    theme === "dark" ? "0 0 20px rgba(0, 219, 255, 0.6), 0 0 40px rgba(255, 0, 204, 0.4)" : "0 0 20px rgba(255, 204, 0, 0.6), 0 0 40px rgba(255, 102, 0, 0.4)",
                    theme === "dark" ? "0 0 30px rgba(0, 219, 255, 0.8), 0 0 50px rgba(255, 0, 204, 0.6)" : "0 0 30px rgba(255, 204, 0, 0.8), 0 0 50px rgba(255, 102, 0, 0.6)",
                    theme === "dark" ? "0 0 20px rgba(0, 219, 255, 0.6), 0 0 40px rgba(255, 0, 204, 0.4)" : "0 0 20px rgba(255, 204, 0, 0.6), 0 0 40px rgba(255, 102, 0, 0.4)",
                    theme === "dark" ? "linear-gradient(45deg, #00dbff, #ff00cc, #00dbff, #ff00cc)" : "linear-gradient(45deg, #ffcc00, #ff6600, #ffcc00, #ff6600)",
                    theme === "dark" ? "linear-gradient(225deg, #ff00cc, #00dbff, #ff00cc, #00dbff)" : "linear-gradient(225deg, #ff6600, #ffcc00, #ff6600, #ffcc00)",
                    theme === "dark" ? "linear-gradient(45deg, #00dbff, #ff00cc, #00dbff, #ff00cc)" : "linear-gradient(45deg, #ffcc00, #ff6600, #ffcc00, #ff6600)"
                ],
                children: `@keyframes pulseScale{0%{opacity:.9;transform:scale(1)}50%{opacity:1;transform:scale(1.05)}to{opacity:.9;transform:scale(1)}}@keyframes backgroundGlow{0%{background:radial-gradient(circle,${theme === "dark" ? "rgba(0, 219, 255, 0.2)" : "rgba(255, 204, 0, 0.2)"} 0%,${theme === "dark" ? "rgba(255, 0, 204, 0.1)" : "rgba(255, 102, 0, 0.1)"} 50%,transparent 70%)}50%{background:radial-gradient(circle,${theme === "dark" ? "rgba(0, 219, 255, 0.3)" : "rgba(255, 204, 0, 0.3)"} 0%,${theme === "dark" ? "rgba(255, 0, 204, 0.2)" : "rgba(255, 102, 0, 0.2)"} 50%,transparent 70%)}to{background:radial-gradient(circle,${theme === "dark" ? "rgba(0, 219, 255, 0.2)" : "rgba(255, 204, 0, 0.2)"} 0%,${theme === "dark" ? "rgba(255, 0, 204, 0.1)" : "rgba(255, 102, 0, 0.1)"} 50%,transparent 70%)}}@keyframes typewriter{0%{width:0}to{border-right:none;width:100%}}@keyframes glowPulse{0%{text-shadow:0 0 5px ${theme === "dark" ? "rgba(0, 219, 255, 0.5)" : "rgba(255, 102, 0, 0.5)"}}to{text-shadow:0 0 15px ${theme === "dark" ? "rgba(0, 219, 255, 0.8)" : "rgba(255, 102, 0, 0.8)"},0 0 25px ${theme === "dark" ? "rgba(255, 0, 204, 0.5)" : "rgba(255, 51, 0, 0.5)"}}}@keyframes fadeInUpGlow{0%{opacity:0;text-shadow:0 0 5px ${theme === "dark" ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.2)"};transform:translateY(30px)}to{opacity:1;text-shadow:0 0 15px ${theme === "dark" ? "rgba(255, 255, 255, 0.8)" : "rgba(0, 0, 0, 0.8)"};transform:translateY(0)}}@keyframes bounceInGlow{0%{opacity:0;box-shadow:0 0 5px ${theme === "dark" ? "rgba(0, 219, 255, 0.2)" : "rgba(255, 204, 0, 0.2)"};transform:scale(.5)}50%{opacity:1;box-shadow:0 0 30px ${theme === "dark" ? "rgba(0, 219, 255, 0.8)" : "rgba(255, 204, 0, 0.8)"};transform:scale(1.1)}70%{transform:scale(.95)}to{opacity:1;box-shadow:${theme === "dark" ? "0 0 20px rgba(0, 219, 255, 0.6), 0 0 40px rgba(255, 0, 204, 0.4)" : "0 0 20px rgba(255, 204, 0, 0.6), 0 0 40px rgba(255, 102, 0, 0.4)"};transform:scale(1)}}@keyframes pulseGlow{0%{box-shadow:${theme === "dark" ? "0 0 20px rgba(0, 219, 255, 0.6), 0 0 40px rgba(255, 0, 204, 0.4)" : "0 0 20px rgba(255, 204, 0, 0.6), 0 0 40px rgba(255, 102, 0, 0.4)"}}50%{box-shadow:${theme === "dark" ? "0 0 30px rgba(0, 219, 255, 0.8), 0 0 50px rgba(255, 0, 204, 0.6)" : "0 0 30px rgba(255, 204, 0, 0.8), 0 0 50px rgba(255, 102, 0, 0.6)"}}to{box-shadow:${theme === "dark" ? "0 0 20px rgba(0, 219, 255, 0.6), 0 0 40px rgba(255, 0, 204, 0.4)" : "0 0 20px rgba(255, 204, 0, 0.6), 0 0 40px rgba(255, 102, 0, 0.4)"}}}@keyframes snakeRoller{0%{border-image-source:${theme === "dark" ? "linear-gradient(45deg, #00dbff, #ff00cc, #00dbff, #ff00cc)" : "linear-gradient(45deg, #ffcc00, #ff6600, #ffcc00, #ff6600)"}}50%{border-image-source:${theme === "dark" ? "linear-gradient(225deg, #ff00cc, #00dbff, #ff00cc, #00dbff)" : "linear-gradient(225deg, #ff6600, #ffcc00, #ff6600, #ffcc00)"}}to{border-image-source:${theme === "dark" ? "linear-gradient(45deg, #00dbff, #ff00cc, #00dbff, #ff00cc)" : "linear-gradient(45deg, #ffcc00, #ff6600, #ffcc00, #ff6600)"}}}@keyframes particleFlow{0%{background-position:0 0}to{background-position:100% 100%}}@keyframes ripple{to{opacity:0;transform:scale(4)}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes slideUp{0%{opacity:0;transform:translate(-50%)translateY(100px)}to{opacity:1;transform:translate(-50%)translateY(0)}}@keyframes fadeOut{0%{opacity:1}to{opacity:0}}@media (width<=768px){header{min-height:50vh}}@media (width<=480px){header{min-height:40vh}}`
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.js",
        lineNumber: 365,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__e98f8976._.js.map