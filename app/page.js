"use client";  // 👈 Add this at the top

import { useEffect, useRef, useState } from "react";

export default function Home() {
  const canvasRef = useRef(null);
  const speedFactor = useRef(4); // Default moderate speed
  const changeSpeedInterval = useRef(null);
  const [isCleared, setIsCleared] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const hackerChars = "01".split(""); // Only 0 and 1
    const fontSize = 14; // Slightly larger font for better clarity
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(1);
    const speeds = Array(columns).fill().map(() => Math.random() * speedFactor.current + 4); // Speed based on the dynamic factor
    const angles = Array(columns).fill().map(() => Math.random() * Math.PI * 2); // Random angles for spirals

    // Function to change speed dynamically
    const changeSpeed = () => {
      const randomSpeed = Math.floor(Math.random() * 3);
      if (randomSpeed === 0) {
        speedFactor.current = 2; // Slow speed
      } else if (randomSpeed === 1) {
        speedFactor.current = 4; // Moderate speed
      } else {
        speedFactor.current = 6; // Fast speed
      }
      // Update speeds with the new speed factor
      speeds.forEach((_, i) => {
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

      for (let i = 0; i < drops.length; i++) {
        // Increase sway and diagonal movement for more dynamic effect
        const x = i * fontSize + Math.sin(angles[i]) * 30; // Stronger horizontal sway
        const y = drops[i] * fontSize + Math.cos(angles[i]) * 30; // Stronger vertical sway
        
        // Draw multiple characters per column for higher density (quadrupled density)
        for (let j = 0; j < 20; j++) { // Now 20 characters per column
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
    return () => {
      clearInterval(interval);
      clearInterval(changeSpeedInterval.current); // Clean up speed change interval
    };
  }, [isCleared]);

  // Function to toggle clear state
  const handleClearCanvas = () => {
    setIsCleared((prev) => !prev); // Toggle between clear and reset
  };

  return (
    <div style={{ position: "relative", overflow: "hidden", height: "100vh", background: "black" }}>
      <canvas ref={canvasRef} style={{ position: "absolute", top: 0, left: 0 }} />
      <div style={{ position: "relative", zIndex: 2, textAlign: "center", paddingTop: "20vh" }}>
        <h1 
          style={{
            fontSize: "4rem", // Increased size for clarity
            fontFamily: "'Comic Sans MS', cursive", 
            color: "#ff5722",
            textShadow: "0 0 15px #ff5722", // Soft glowing text effect
          }}
        >
          Welcome to Cousin Chronicles
        </h1>
        <p 
          style={{
            fontSize: "2rem",  // Larger font for better readability
            color: "#ffffff",  // White text to stand out
            textShadow: "0 0 10px #ffffff", // Glowing effect for better visibility
          }}
        >
          Visit{" "}
          <a 
            href="/gallery" 
            style={{ 
              color: "#4ecdc4", 
              textDecoration: "none", 
              fontSize: "2rem", 
              fontWeight: "bold", 
              transition: "color 0.3s, transform 0.3s, text-shadow 0.3s", 
              display: "inline-block",
              padding: "10px 20px", // Added padding for button-like effect
              borderRadius: "5px", // Rounded corners
              border: "2px solid #4ecdc4", // Border for a button feel
            }}
            onMouseOver={(e) => { 
              e.target.style.color = "#ff0"; 
              e.target.style.transform = "scale(1.1)"; 
              e.target.style.textShadow = "0 0 10px #ff0"; 
              e.target.style.backgroundColor = "#4ecdc4"; // Background on hover
            }}
            onMouseOut={(e) => { 
              e.target.style.color = "#4ecdc4"; 
              e.target.style.transform = "scale(1)"; 
              e.target.style.textShadow = "none"; 
              e.target.style.backgroundColor = "transparent"; // Reset background
            }}
          >
            the Gallery
          </a>{" "}
          to see the fun!
        </p>
      </div>
    </div>
  );
}
