"use client";

import { useState, useEffect } from "react";
import styles from "./MemoryCard.module.css";

const MemoryCard = ({ member, onAnswer }) => {
  const [showFact, setShowFact] = useState(!member.flipped); // Initial state from member.flipped
  const [shake, setShake] = useState(false);
  const [spin, setSpin] = useState(false);
  const [answer, setAnswer] = useState("");

  // Sync showFact with member.flipped whenever member changes
  useEffect(() => {
    setShowFact(!member.flipped);
  }, [member.flipped]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting - Answer:", answer);
    onAnswer(member.index, answer, () => {
      setShowFact(false); // Flip to photo side if correct
      setAnswer(""); // Clear input
    });
  };

  const handleHover = () => setSpin(Math.random() > 0.5);

  return (
    <div
      className={`${styles.card} ${showFact ? styles.flipped : ""} ${shake ? styles.shake : ""} ${spin ? styles.spin : ""}`}
      onMouseEnter={handleHover}
      onMouseLeave={() => setSpin(false)}
    >
      <div className={styles.cardInner}>
        <div className={styles.cardFront}>
          <img src={member.photo} alt={member.name} className={styles.photo} />
          <h3 className={styles.name}>{member.name}</h3>
        </div>
        <div className={styles.cardBack}>
          <form onSubmit={handleSubmit} className={styles.questionForm}>
            <p>{member.question}</p>
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Your answer..."
              className={styles.answerInput}
            />
            <button type="submit" className={styles.submitButton}>Guess!</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MemoryCard;