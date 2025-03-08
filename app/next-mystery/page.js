"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";

export default function CosmicVoiceCommand() {
  const [totalScore, setTotalScore] = useState(0);
  const [missionsComplete, setMissionsComplete] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [zorblaxMessage, setZorblaxMessage] = useState("Oi, space cadet! I’m Zorblax. Use your voice or cam to command—don’t mess it up!");
  const [currentMission, setCurrentMission] = useState(0);
  const [recording, setRecording] = useState(false);
  const [gestureMode, setGestureMode] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15);
  const mediaRecorderRef = useRef(null);
  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const timerRef = useRef(null);

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

  useEffect(() => {
    setIsClient(true);
    if (typeof window !== "undefined") {
      const savedScore = Number(localStorage.getItem('totalScore')) || 0;
      const savedMission = Number(localStorage.getItem('currentMission')) || 0;
      console.log("[next-mystery] Initial load - totalScore from LocalStorage:", savedScore);
      console.log("[next-mystery] Initial load - currentMission from LocalStorage:", savedMission);
      setTotalScore(savedScore);
      // Ensure currentMission stays within valid bounds (0-5)
      setCurrentMission(Math.min(Math.max(savedMission, 0), missions.length));
    }
  }, []);

  useEffect(() => {
    if (isClient && typeof window !== "undefined") {
      console.log("[next-mystery] Saving totalScore to LocalStorage:", totalScore);
      console.log("[next-mystery] Saving currentMission to LocalStorage:", currentMission);
      localStorage.setItem('totalScore', totalScore.toString());
      localStorage.setItem('currentMission', currentMission.toString());
      setMissionsComplete(missions.filter((_, idx) => idx < currentMission).length);
    }
  }, [totalScore, currentMission, isClient]);

  const startRecording = async () => {
    if (!gestureMode) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        mediaRecorderRef.current = new MediaRecorder(stream);
        const chunks = [];
        mediaRecorderRef.current.ondataavailable = (e) => chunks.push(e.data);
        mediaRecorderRef.current.onstop = () => {
          const blob = new Blob(chunks, { type: "audio/webm" });
          recognizeVoice(blob);
          stream.getTracks().forEach((track) => track.stop());
        };
        mediaRecorderRef.current.start();
        setRecording(true);
        startTimer();
      } catch (err) {
        setZorblaxMessage("Mic access denied, you silent fool! Try gestures instead.");
      }
    } else {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
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

  const stopRecording = () => {
    if (!gestureMode && mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
    } else if (gestureMode && streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      recognizeGesture();
    }
    setRecording(false);
    clearTimeout(timerRef.current);
  };

  const startTimer = () => {
    setTimeLeft(15);
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          stopRecording();
          setZorblaxMessage("Time’s up, slowpoke! Try again—15 seconds max!");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const recognizeVoice = (blob) => {
    const command = missions[currentMission].voiceCommand.toLowerCase();
    const reader = new FileReader();
    reader.onload = () => {
      const text = "mock voice data";
      if (text.includes(command.split(" ")[0]) || text.includes(command.split(" ")[1])) {
        completeMission();
      } else {
        setZorblaxMessage(missions[currentMission].zorblaxIncorrect);
      }
    };
    reader.readAsDataURL(blob);
  };

  const recognizeGesture = () => {
    setZorblaxMessage("Gesture detected! Let’s assume you nailed it—moving on!");
    completeMission();
  };

  const completeMission = () => {
    setTotalScore((prev) => {
      const newScore = prev + 20;
      localStorage.setItem('totalScore', newScore.toString());
      return newScore;
    });
    setZorblaxMessage(missions[currentMission].zorblaxCorrect);
    const audio = new Audio("/sounds/mission.mp3");
    audio.play().catch(() => console.log("[next-mystery] Audio missing"));
    setCurrentMission((prev) => prev + 1);
  };

  if (!isClient) {
    return (
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "linear-gradient(135deg, #0a192f, #1e3a8a)",
        color: "#e2e8f0",
        fontFamily: "'Inter', sans-serif",
        fontSize: "1.5rem"
      }}>
        Loading...
      </div>
    );
  }

  return (
    <div style={{
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
    }}>
      {/* Cosmic Background Particles */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        background: "radial-gradient(circle, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
        backgroundSize: "20px 20px",
        animation: "twinkle 10s infinite"
      }} />

      <h1 style={{
        fontSize: "clamp(2.5rem, 6vw, 4rem)",
        color: "#38bdf8",
        fontFamily: "'Inter', sans-serif",
        fontWeight: 700,
        textShadow: "0 0 10px rgba(56, 189, 248, 0.5), 0 0 20px rgba(56, 189, 248, 0.3)",
        marginBottom: "1.5rem",
        letterSpacing: "0.05em",
        animation: "fadeIn 1s ease-in"
      }}>Cosmic Voice Command</h1>

      <div style={{
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
      }}>
        <span style={{ color: "#93c5fd" }}>Score:</span> {totalScore}
      </div>

      <p style={{
        fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
        color: "#93c5fd",
        marginBottom: "2rem",
        maxWidth: "800px",
        lineHeight: "1.6",
        fontWeight: 300,
        textShadow: "0 0 5px rgba(147, 197, 253, 0.3)"
      }}>Speak or gesture to command—Zorblax demands precision in 15 seconds!</p>

      <div style={{
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
      }}>
        <strong style={{ color: "#38bdf8", fontWeight: 600 }}>Zorblax:</strong> {zorblaxMessage}
      </div>

      {currentMission < 5 ? (
        <div style={{
          width: "100%",
          maxWidth: "700px",
          padding: "2rem",
          background: "linear-gradient(135deg, rgba(15, 23, 42, 0.9), rgba(30, 58, 138, 0.9))",
          borderRadius: "20px",
          border: "1px solid rgba(56, 189, 248, 0.3)",
          boxShadow: "0 10px 40px rgba(0, 0, 0, 0.5), inset 0 0 10px rgba(56, 189, 248, 0.2)",
          transition: "all 0.3s ease"
        }}>
          <h2 style={{
            fontSize: "clamp(1.75rem, 4vw, 2.25rem)",
            color: "#38bdf8",
            fontWeight: 600,
            marginBottom: "1.5rem",
            textShadow: "0 0 8px rgba(56, 189, 248, 0.4)",
            letterSpacing: "0.03em"
          }}>Mission {currentMission + 1}</h2>
          <p style={{
            fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
            color: "#bfdbfe",
            marginBottom: "1.5rem",
            lineHeight: "1.5",
            fontWeight: 300
          }}>{missions[currentMission].scenario}</p>
          <p style={{
            fontSize: "clamp(0.875rem, 2vw, 1rem)",
            color: "#93c5fd",
            marginBottom: "1rem",
            fontStyle: "italic",
            fontWeight: 300
          }}>
            {gestureMode
              ? `Gesture: ${missions[currentMission].gesture}`
              : `Say: "${missions[currentMission].voiceCommand}"`}
          </p>
          <p style={{
            fontSize: "clamp(0.875rem, 2vw, 1rem)",
            color: "#e2e8f0",
            marginBottom: "1.5rem",
            fontWeight: 400
          }}>
            Time Left: <span style={{ color: "#f87171" }}>{timeLeft}s</span>
          </p>
          <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            alignItems: "center"
          }}>
            <button
              onClick={() => setGestureMode(!gestureMode)}
              style={{
                padding: "clamp(0.5rem, 1.5vw, 0.75rem) clamp(1rem, 2.5vw, 1.5rem)",
                fontSize: "clamp(0.875rem, 2vw, 1rem)",
                background: gestureMode
                  ? "linear-gradient(45deg, #f87171, #fb7185)"
                  : "linear-gradient(45deg, #2563eb, #60a5fa)",
                color: "#fff",
                border: "none",
                borderRadius: "10px",
                cursor: "pointer",
                width: "min(100%, 200px)",
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                fontWeight: 500
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow = "0 6px 20px rgba(0, 0, 0, 0.4)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.3)";
              }}
            >
              {gestureMode ? "Switch to Voice" : "Switch to Gesture"}
            </button>
            <button
              onClick={recording ? stopRecording : startRecording}
              style={{
                padding: "clamp(0.5rem, 1.5vw, 0.75rem) clamp(1rem, 2.5vw, 1.5rem)",
                fontSize: "clamp(0.875rem, 2vw, 1rem)",
                background: recording
                  ? "linear-gradient(45deg, #ef4444, #f87171)"
                  : "linear-gradient(45deg, #38bdf8, #7dd3fc)",
                color: "#fff",
                border: "none",
                borderRadius: "10px",
                cursor: "pointer",
                width: "min(100%, 200px)",
                boxShadow: recording
                  ? "0 4px 15px rgba(248, 113, 113, 0.5)"
                  : "0 4px 15px rgba(56, 189, 248, 0.5)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                fontWeight: 500
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow = recording
                  ? "0 6px 20px rgba(248, 113, 113, 0.6)"
                  : "0 6px 20px rgba(56, 189, 248, 0.6)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = recording
                  ? "0 4px 15px rgba(248, 113, 113, 0.5)"
                  : "0 4px 15px rgba(56, 189, 248, 0.5)";
              }}
            >
              {recording ? "Stop" : gestureMode ? "Start Gesture" : "Start Recording"}
            </button>
          </div>
          {gestureMode && (
            <video
              ref={videoRef}
              autoPlay
              muted
              style={{
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
              }}
            />
          )}
        </div>
      ) : (
        <div style={{
          marginTop: "2.5rem",
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          alignItems: "center",
          animation: "fadeIn 1s ease-in"
        }}>
          <p style={{
            fontSize: "clamp(1.5rem, 4vw, 2rem)",
            color: "#fff",
            textShadow: "0 0 10px rgba(167, 243, 208, 0.7)",
            fontWeight: 600
          }}>All Missions Complete!</p>
          <Link href="/finale">
            <button style={{
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
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 8px 25px rgba(56, 189, 248, 0.7)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 6px 20px rgba(56, 189, 248, 0.5)";
            }}
            >
              Next Cosmic Caper!
            </button>
          </Link>
        </div>
      )}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes twinkle {
          0% { opacity: 0.5; }
          50% { opacity: 1; }
          100% { opacity: 0.5; }
        }
        @media (max-width: 600px) {
          .mission-container {
            padding: 1.5rem;
          }
          video {
            width: min(100%, 480px);
            height: min(75vw, 360px);
          }
        }
      `}</style>
    </div>
  );
}