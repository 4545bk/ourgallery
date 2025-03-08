"use client";

import CipherCell from "./CipherCell";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function CipherShadows() {
  const [totalScore, setTotalScore] = useState(0);
  const [missionsCompleted, setMissionsCompleted] = useState(0);
  const [isClient, setIsClient] = useState(false);

  // Define encodeWord to shift letters forward
  const encodeWord = (word, shift) => {
    return word.split("").map((letter) => {
      const code = letter.charCodeAt(0);
      if (code >= 65 && code <= 90) { // A-Z
        return String.fromCharCode(((code - 65 + shift) % 26) + 65);
      }
      return letter; // Non-letters unchanged
    });
  };

  const initialCiphers = [
    {
      grid: [
        ['Q', 'D', 'W', 'L'], // Caesar shift +3 (N -> Q, A -> C, T -> W, I -> N)
        ['H', 'A', 'N', 'S'],
        ['P', 'X', 'U', 'C'],
        ['M', 'U', 'R', 'Z'],
        ['J', 'R', 'O', 'W']
      ],
      clue: "Shift backward by the second prime.", // Shift +3
      solution: "NATI",
      audio: "/sounds/cipher1.mp3",
      solved: true, // Pre-solved example
      highlightedRow: 0 // First row shaded
    },
    {
      grid: [
        ['8', 'X', 'Y', 'Z'],
    ['E', 'X', 'E', 'X'],
    ['K', 'X', 'Q', 'P'],
    ['34', 'N', 'M', 'L']
      ],
      clue: "Shift each letter back by 3 to find the name.",
      solution: "BUBU",
      audio: "/sounds/cipher2.mp3",
      solved: false,
      highlightedRow: 1 // Third row shaded
    },
    {
      grid: [
        ['B', 'C', 'D', 'F', 'G', 'O', 'P', 'Q'],
        ['C', 'D', 'F', 'H', 'I', 'J', 'K', 'L'],
        ['E', 'W', 'E', 'D', 'E', 'G', 'E', 'Z'], // "ZEGEDEWE" reversed
        ['M', 'N', 'O', 'P', 'Q', 'C', 'D', 'F'],
        ['U', 'V', 'O', 'P', 'Q', 'W', 'X', 'Y']
      ],
      clue: "Direction lost in reverse.",
      solution: "ZEGEDEWE",
      audio: "/sounds/cipher3.mp3",
      solved: false,
      highlightedRow: 2 // Fourth row shaded
    },
    {
      grid: [
        [6, 11, 13, 6, 14], // "1681993" (1, 6, 8, 1, 9) shifted +5
        [6, 11, 100, 5, 13, 100, 6, 14, 14, 8], // (9, 3) shifted +5
        [1, 2, 3, 4, 5],
        [7, 8, 10, 11, 12],
        [13, 14, 15, 16, 17]
      ],
      clue: "Subtract number 5 from each number and Reverse to reveal the date of the KIng. (100 means 👉🏻👉🏻 / ) and dont include commas",
      solution: "16/08/1993",
      audio: "/sounds/cipher4.mp3",
      solved: false,
      highlightedRow: 1
    }
  ];

  const [ciphers, setCiphers] = useState(initialCiphers);

  // Load score and ciphers on mount
  useEffect(() => {
    setIsClient(true);
    if (typeof window !== "undefined") {
      const savedScore = Number(localStorage.getItem('totalScore')) || 0;
      const savedCiphers = localStorage.getItem('cipherCiphers');
      console.log("[next-challenge] Initial load - totalScore from LocalStorage:", savedScore);
      setTotalScore(savedScore);
      if (savedCiphers) {
        console.log("[next-challenge] Loading saved ciphers:", savedCiphers);
        setCiphers(JSON.parse(savedCiphers));
      } else {
        setCiphers(initialCiphers); // Reset to initial if no saved state
      }
    }
  }, []);

  // Save score and ciphers
  useEffect(() => {
    if (isClient && typeof window !== "undefined") {
      console.log("[next-challenge] Saving totalScore to LocalStorage:", totalScore);
      localStorage.setItem('totalScore', totalScore);
      localStorage.setItem('cipherCiphers', JSON.stringify(ciphers));
      setMissionsCompleted(ciphers.filter((c) => c.solved).length);
    }
  }, [totalScore, ciphers, isClient]);

  const handleSolve = (index, userInput) => {
    console.log("[next-challenge] Handling solve - Index:", index, "Input:", userInput);
    if (userInput.trim().toUpperCase() === ciphers[index].solution.toUpperCase()) {
      setCiphers((prev) => {
        const newCiphers = [...prev];
        if (!newCiphers[index].solved) {
          newCiphers[index].solved = true;
          setTotalScore((prevScore) => {
            const newScore = prevScore + 20;
            console.log("[next-challenge] New Total Score:", newScore);
            localStorage.setItem('totalScore', newScore);
            return newScore;
          });
          const audio = new Audio(ciphers[index].audio);
          audio.play().catch(() => {
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
    return <div>Loading...</div>;
  }

  return (
    <div style={{ padding: "2rem", textAlign: "center", background: "linear-gradient(135deg, #1a1a1a, #2c2c2c)", minHeight: "100vh", color: "#e0e0e0" }}>
      <h1 style={{ fontSize: "4rem", color: "#ff4444", fontFamily: "'Courier New', monospace", textShadow: "0 0 10px #ff4444" }}>Cipher Shadows</h1>
      <div style={{ margin: "1rem 0", fontSize: "2rem", color: "#fff", background: "rgba(255, 68, 68, 0.2)", padding: "0.5rem 1rem", borderRadius: "15px", border: "2px solid #ff4444", display: "inline-block", animation: "shine 2s infinite" }}>
        Total Score: {totalScore}
      </div>
      <p style={{ fontSize: "1.2rem", color: "#ff4444", margin: "1rem 0", fontFamily: "'Courier New', monospace" }}>Decode the cipher using the clue. Enter the secret message to proceed. shaded  are the once where the answers belong</p>
      {missionsCompleted === 4 && (
        <Link href="/next-mystery">
          <button style={{ padding: "0.5rem 1rem", fontSize: "1.2rem", background: "#ff4444", color: "#fff", border: "none", borderRadius: "10px", cursor: "pointer", marginBottom: "1rem", boxShadow: "0 0 10px #ff4444" }}>
            Next Mission!
          </button>
        </Link>
      )}
      <div style={{ maxWidth: "1200px", margin: "2rem auto" }}>
        {ciphers.map((cipher, index) => (
          <div key={index} style={{ marginBottom: "2rem", padding: "1rem", background: "#222", borderRadius: "10px", boxShadow: "0 0 15px rgba(255, 68, 68, 0.3)" }}>
            <p style={{ color: "#ff4444", fontSize: "1.5rem" }}>Mission {index + 1}: {cipher.clue}</p>
            <CipherCell cipher={cipher} index={index} onSolve={handleSolve} />
          </div>
        ))}
      </div>
      <style jsx global>{`
        @keyframes shine {
          0% { text-shadow: 0 0 5px #ff4444, 0 0 10px #ff4444, 0 0 15px #fff; }
          50% { text-shadow: 0 0 10px #ff4444, 0 0 20px #ff4444, 0 0 30px #fff; }
          100% { text-shadow: 0 0 5px #ff4444, 0 0 10px #ff4444, 0 0 15px #fff; }
        }
      `}</style>
    </div>
  );
}