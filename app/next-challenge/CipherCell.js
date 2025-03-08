"use client";

import { useState } from "react";

const CipherCell = ({ cipher, index, onSolve }) => {
  const [input, setInput] = useState("");
  const [solved, setSolved] = useState(cipher.solved);
  const highlightedRow = cipher.highlightedRow || 0; // Default to first row if not specified

  const handleSubmit = (e) => {
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

  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ display: "grid", gridTemplateColumns: `repeat(${cipher.grid[0].length}, 1fr)`, gap: "5px", margin: "1rem auto", maxWidth: "400px" }}>
        {cipher.grid.map((row, rowIdx) =>
          row.map((cell, colIdx) => (
            <div
              key={`${rowIdx}-${colIdx}`}
              style={{
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
                opacity: solved ? 0.7 : 1,
              }}
            >
              {cell}
            </div>
          ))
        )}
      </div>
      {solved ? (
        <p style={{ color: "#ffd700", fontSize: "1.5rem" }}>Decoded: {cipher.solution}</p>
      ) : (
        <form onSubmit={handleSubmit} style={{ marginTop: "1rem" }}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter the secret message"
            style={{ padding: "0.5rem", fontSize: "1rem", background: "#333", color: "#e0e0e0", border: "2px solid #ff4444", borderRadius: "5px", marginRight: "0.5rem" }}
          />
          <button type="submit" style={{ padding: "0.5rem 1rem", fontSize: "1rem", background: "#ff4444", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}>
            Decode
          </button>
        </form>
      )}
    </div>
  );
};

export default CipherCell;