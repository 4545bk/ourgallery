"use client";

import { useState, useEffect } from "react";

const CipherCell = ({ cipher, index, onSolve }) => {
  const [input, setInput] = useState("");
  const [solved, setSolved] = useState(cipher.solved || false);
  const highlightedRow = cipher.highlightedRow || 0;

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

  useEffect(() => {
    setSolved(cipher.solved || false);
  }, [cipher.solved]);

  return (
    <div className="panel" style={{ textAlign: "center" }}>
      <div
        className={solved ? "solved" : ""}
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${cipher.grid[0].length}, 1fr)`,
          gap: "0.25rem",
          margin: "1rem auto",
          maxWidth: "100%",
          width: "min(400px, 100%)",
        }}
      >
        {cipher.grid.map((row, rowIdx) =>
          row.map((cell, colIdx) => (
            <div
              key={`${rowIdx}-${colIdx}`}
              style={{
                width: "100%",
                height: "auto",
                aspectRatio: "1 / 1",
                minWidth: "30px",
                minHeight: "30px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#333",
                border: `2px solid ${
                  rowIdx === highlightedRow ? "#ff4444" : "#666"
                }`,
                color: "#e0e0e0",
                fontSize: "clamp(0.8rem, 2.5vw, 1.2rem)",
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
        <p style={{ color: "#ffd700", fontSize: "clamp(1rem, 4vw, 1.5rem)" }}>
          Decoded: {cipher.solution}
        </p>
      ) : (
        <form onSubmit={handleSubmit} style={{ marginTop: "0.5rem" }}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter the secret message"
            style={{
              padding: "0.3rem",
              fontSize: "clamp(0.8rem, 3vw, 1rem)",
              background: "#333",
              color: "#e0e0e0",
              border: "2px solid #ff4444",
              borderRadius: "5px",
              marginRight: "0.3rem",
              width: "min(200px, 60%)",
            }}
          />
          <button
            type="submit"
            style={{
              padding: "0.3rem 0.8rem",
              fontSize: "clamp(0.8rem, 3vw, 1rem)",
              background: "#ff4444",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Decode
          </button>
        </form>
      )}
    </div>
  );
};

export default CipherCell;