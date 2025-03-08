"use client"; // Mark as a Client Component since we use hooks and interactivity

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";

export default function Finale() {
  const [totalScore, setTotalScore] = useState(0);
  const [fakeButtonClicked, setFakeButtonClicked] = useState(false);
  const [challengeSolved, setChallengeSolved] = useState(false);
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState("");

  const [firstButtonClicked, setFirstButtonClicked] = useState(false);
  const [secondButtonClicked, setSecondButtonClicked] = useState(false);
  const [countdown, setCountdown] = useState(0);

  const router = useRouter();

  const audio1Ref = useRef(new Audio("/sounds/whenteenager.mp3"));
  const audio2Ref = useRef(new Audio("/sounds/eversince.mp3"));

  // Load total score from localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedScore = Number(localStorage.getItem("totalScore")) || 0;
      setTotalScore(savedScore);
    }
  }, []);

  // Handlers for existing functionality
  const handleFakeButtonClick = () => setFakeButtonClicked(true);

  const handleAnswerChange = (e) => setAnswer(e.target.value);

  const checkAnswer = () => {
    const correctAnswer = "fire"; // Example answer
    if (answer.trim().toLowerCase() === correctAnswer) {
      setChallengeSolved(true);
      setFeedback("");
    } else {
      setFeedback("Incorrect, try again!");
    }
  };

  // Handlers for new buttons
  const handleFirstButtonClick = () => {
    audio1Ref.current.play().catch((err) => console.error("Audio 1 play failed:", err));
    setFirstButtonClicked(true);
  };

  const handleSecondButtonClick = () => {
    audio2Ref.current.play().catch((err) => console.error("Audio 2 play failed:", err));
    setSecondButtonClicked(true);
    setCountdown(10); // Start countdown at 10 seconds
  };

  // Countdown effect
  useEffect(() => {
    if (secondButtonClicked && countdown > 0) {
      const interval = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval); // Cleanup on unmount or update
    } else if (secondButtonClicked && countdown === 0) {
      router.push("/bye");
    }
  }, [secondButtonClicked, countdown, router]);

  // Styles (adjust as needed to match your design)
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    background: "linear-gradient(135deg, #0a192f 0%, #1e3a8a 100%)",
    color: "#e2e8f0",
    fontFamily: "'Inter', sans-serif",
    padding: "2rem",
  };

  const h1Style = {
    fontSize: "2.5rem",
    marginBottom: "1rem",
    textAlign: "center",
  };

  const pStyle = {
    fontSize: "1.25rem",
    margin: "0.5rem 0",
    textAlign: "center",
  };

  const buttonStyle = {
    padding: "0.75rem 1.5rem",
    fontSize: "1rem",
    backgroundColor: "#3b82f6",
    color: "#fff",
    border: "none",
    borderRadius: "0.5rem",
    cursor: "pointer",
    marginTop: "1rem",
    transition: "background-color 0.3s",
  };

  const inputStyle = {
    padding: "0.5rem",
    fontSize: "1rem",
    marginTop: "1rem",
    borderRadius: "0.25rem",
    border: "1px solid #cbd5e1",
  };

  // Render logic
  if (!fakeButtonClicked) {
    return (
      <div style={containerStyle}>
        <h1 style={h1Style}>Congratulations!</h1>
        <p style={pStyle}>
          You’ve completed all missions with a score of {totalScore}. But there’s one more challenge ahead!
        </p>
        <button
          onClick={handleFakeButtonClick}
          style={buttonStyle}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#2563eb")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#3b82f6")}
        >
          Claim Your Prize
        </button>
      </div>
    );
  } else if (!challengeSolved) {
    return (
      <div style={containerStyle}>
        <img
          src="/images/mobile_card.jpg"
          alt="Half Mobile Card"
          style={{ maxWidth: "100%", height: "auto", clipPath: "inset(0 0 50% 0)" }}
        />
        <p style={pStyle}>
          Oops, that’s only half the prize! To see the full prize, solve this riddle:
        </p>
        <p style={{ ...pStyle, fontStyle: "italic", color: "#93c5fd" }}>
          "I am not alive, but I grow; I don’t have lungs, but I need air; I don’t have a mouth, but water kills me. What am I?"
        </p>
        <input
          type="text"
          value={answer}
          onChange={handleAnswerChange}
          style={inputStyle}
          placeholder="Enter your answer"
        />
        <button
          onClick={checkAnswer}
          style={buttonStyle}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#2563eb")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#3b82f6")}
        >
          Submit
        </button>
        {feedback && <p style={{ color: "#f87171", marginTop: "1rem" }}>{feedback}</p>}
      </div>
    );
  } else {
    return (
      <div style={containerStyle}>
        <h1 style={h1Style}>Congratulations! Here’s your full prize!</h1>
        <img src="/images/mobile_card.jpg" alt="Full Mobile Card" style={{ maxWidth: "100%", height: "auto" }} />
        {!firstButtonClicked ? (
          <button
            onClick={handleFirstButtonClick}
            style={buttonStyle}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#2563eb")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#3b82f6")}
          >
            Unlock Sound
          </button>
        ) : (
          <div>
            <p style={pStyle}>Great job! You’ve unlocked the final step.</p>
            {!secondButtonClicked ? (
              <button
                onClick={handleSecondButtonClick}
                style={buttonStyle}
                onMouseOver={(e) => (e.target.style.backgroundColor = "#2563eb")}
                onMouseOut={(e) => (e.target.style.backgroundColor = "#3b82f6")}
              >
                Proceed
              </button>
            ) : (
              <p style={pStyle}>Redirecting in {countdown} seconds...</p>
            )}
          </div>
        )}
      </div>
    );
  }
}