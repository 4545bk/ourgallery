"use client";

import { useState, useRef, useEffect } from "react";
import styles from "./DoodlePanel.module.css";

const DoodlePanel = ({ panel, onSolve }) => {
  const [drawing, setDrawing] = useState(false);
  const [solved, setSolved] = useState(panel.solved);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.lineWidth = 5;
    ctx.lineCap = "round";
    ctx.strokeStyle = "#00ffff";
  }, []);

  const startDrawing = (e) => {
    if (solved) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();
    ctx.beginPath();
    ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
    setDrawing(true);
  };

  const draw = (e) => {
    if (!drawing || solved) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();
    ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
    ctx.stroke();
  };

  const stopDrawing = () => {
    if (solved) return;
    setDrawing(false);
  };

  const checkDoodle = () => {
    if (solved) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    const pixelCount = imageData.filter((val, i) => i % 4 === 0 && val > 0).length;

    let isCorrect = false;
    if (panel.shape === "circle" && pixelCount > 100 && pixelCount < 300) isCorrect = true;
    else if (panel.shape === "star" && pixelCount > 50 && pixelCount < 150) isCorrect = true;
    else if (panel.shape === "square" && pixelCount > 200 && pixelCount < 400) isCorrect = true;
    else if (panel.shape === "triangle" && pixelCount > 150 && pixelCount < 250) isCorrect = true;
    else if (panel.shape === "heart" && pixelCount > 120 && pixelCount < 220) isCorrect = true;
    else if (panel.shape === "line" && pixelCount > 20 && pixelCount < 100) isCorrect = true;

    if (isCorrect) {
      setSolved(true);
      onSolve(panel.id);
      const audio = new Audio(panel.audio);
      audio.play();
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  };

  return (
    <div className={`${styles.panel} ${solved ? styles.solved : ""}`}>
      {solved ? (
        <div className={styles.clue}>
          <img src={panel.image} alt={panel.clue} style={{ width: "100px", height: "100px" }} />
          <p>{panel.clue}</p>
        </div>
      ) : (
        <>
          <p>{panel.prompt}</p>
          <canvas
            ref={canvasRef}
            width={150}
            height={150}
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={stopDrawing}
            onMouseLeave={stopDrawing}
            style={{ border: "2px solid #00ffff", background: "#1e1e1e" }}
          />
          <button onClick={checkDoodle} className={styles.checkButton}>Check</button>
        </>
      )}
    </div>
  );
};

export default DoodlePanel;