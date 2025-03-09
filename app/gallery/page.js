"use client";

import MemoryCard from "./MemoryCard";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Gallery() {
  const [disco, setDisco] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [totalScore, setTotalScore] = useState(0);
  const [allFlipped, setAllFlipped] = useState(false);

  const initialFamilyMembers = [
    {
      name: "Ayano Fam 🙌",
      photo: "/images/natnael.jpg",
      question: "What flies but has no wings?",
      answer: "Time",
      audio: "/sounds/whenteenager.mp3",
      index: 0,
      flipped: false,
    },
    {
      name: "Gelilu",
      photo: "/images/cousin1.jpg",
      question: "What has keys but can’t open locks?",
      answer: "Piano",
      audio: "/sounds/workwork.mp3",
      index: 1,
      flipped: false,
    },
    {
      name: "Wanted!",
      photo: "/images/cousin2.jpg",
      question: "What do you call someone who breaks the law?",
      answer: "Criminal",
      audio: "/sounds/criminal.mp3",
      index: 2,
      flipped: false,
    },
    {
      name: "Happy☺️",
      photo: "/images/foto (3).jpg",
      question: "What gets wetter the more it dries?",
      answer: "Towel",
      audio: "/sounds/emenem.mp3",
      index: 3,
      flipped: false,
    },
    {
      name: "ጫልቱጫላ ይልሀል እዚጋ",
      photo: "/images/foto (4).jpg",
      question: "Who grows crops and raises livestock for a living?",
      answer: "Farmer",
      audio: "/sounds/azmeraw.mp3",
      index: 4,
      flipped: false,
    },
    {
      name: "Ever since i was a kid😢",
      photo: "/images/foto (5).jpg",
      question: "What do you call someone who is famous for great achievements and remembered for generations?starts L",
      answer: "Legend",
      audio: "/sounds/eversince.mp3",
      index: 5,
      flipped: false,
    },
    {
      name: " The one and the only",
      photo: "/images/foto (6).jpg",
      question: "Ethiopian Singer Next to Tilahun Gessesse (i need full name)",
      answer: "Dawit Tsige",
      audio: "/sounds/gelawa.mp3",
      index: 6,
      flipped: false,
    },
    {
      name: "Nigga😁😁",
      photo: "/images/foto (7).jpg",
      question: "What do you call a person who performs hip-hop music with rhythm and poetry?",
      answer: "Rapper",
      audio: "/sounds/rap1.mp3",
      index: 7,
      flipped: false,
    },
  
      {
        name: "Simple",
        photo: "/images/foto (8).jpg",
        question: "What has hands but can’t clap?",
        answer: "Clock",
        audio: "/sounds/workwork.mp3",
        index: 8,
        flipped: false
      },
      {
        name: "Moderate",
        photo: "/images/foto (9).jpg",
        question: "What can you break, even if you never pick it up?",
        answer: "Promise",
        audio: "/sounds/rap2.mp3",
        index: 9,
        flipped: false
      },
      {
        name: "Simple",
        photo: "/images/foto (10).jpg",
        question: "What has a face and two hands but no arms or legs?",
        answer: "Clock",
        audio: "/sounds/rap3.mp3",
        index: 10,
        flipped: false
      },
      {
        name: "Moderate",
        photo: "/images/foto (11).jpg",
        question: "What has to be broken before you can use it?",
        answer: "Egg",
        audio: "/sounds/rap4.mp3",
        index: 11,
        flipped: false
      },
      {
        name: "Hard",
        photo: "/images/foto (12).jpg",
        question: "What has an endless supply of letters but starts empty?",
        answer: "Mailbox",
        audio: "/sounds/rap1.mp3",
        index: 12,
        flipped: false
      },
      {
        name: "Moderate",
        photo: "/images/foto (13).jpg",
        question: "What gets bigger the more you take away?",
        answer: "Hole",
        audio: "/sounds/rap2.mp3",
        index: 13,
        flipped: false
      },
      {
        name: "Simple",
        photo: "/images/foto (14).jpg",
        question: "What can you hold without touching it?",
        answer: "Breath",
        audio: "/sounds/rap3.mp3",
        index: 14,
        flipped: false
      },
      {
        name: "Moderate",
        photo: "/images/foto (15).jpg",
        question: "What has ears but can’t hear?",
        answer: "Corn",
        audio: "/sounds/rap4.mp3",
        index: 15,
        flipped: false
      },
      {
        name: "Hard",
        photo: "/images/foto (16).jpg",
        question: "What can travel around the world while staying in the same place?",
        answer: "Stamp",
        audio: "/sounds/rap1.mp3",
        index: 16,
        flipped: false
      },
      {
        name: "Simple",
        photo: "/images/foto (17).jpg",
        question: "What has one eye but can’t see?",
        answer: "Needle",
        audio: "/sounds/rap2.mp3",
        index: 17,
        flipped: false
      },
      {
        name: "Son of Mary ❤️",
        photo: "/images/foto (18).jpg",
        question: "Who is our God?",
        answer: "Jesus",
        audio: "/sounds/yarejal.mp3",
        index: 18,
        flipped: false
      },
      {
        name: "Bang",
        photo: "/images/foto (19).jpg",
        question: "What comes down but never goes up?",
        answer: "Rain",
        audio: "/sounds/rap4.mp3",
        index: 19,
        flipped: false
      },
      {
        name: "Hard",
        photo: "/images/foto (20).jpg",
        question: "What has a thumb and four fingers but isn’t alive?",
        answer: "Glove",
        audio: "/sounds/rap1.mp3",
        index: 20,
        flipped: false
      },
      {
        name: "Simple",
        photo: "/images/foto (21).jpg",
        question: "What can fill a room but takes up no space?",
        answer: "Light",
        audio: "/sounds/rap2.mp3",
        index: 21,
        flipped: false
      },
      {
        name: "Catch me if u can",
        photo: "/images/foto (22).jpg",
        question: "What has a neck but no head?",
        answer: "Bottle",
        audio: "/sounds/rap3.mp3",
        index: 22,
        flipped: false
      },
      {
        name: "Lis is Simple",
        photo: "/images/foto (23).jpg",
        question: "What has hands but can’t clap?",
        answer: "Clock",
        audio: "/sounds/rap4.mp3",
        index: 23,
        flipped: false
      }
    
    
    
    
  ];

  const [cards, setCards] = useState(initialFamilyMembers);

  useEffect(() => {
    const savedScore = Number(localStorage.getItem('totalScore')) || 0;
    const savedCards = localStorage.getItem('galleryCards');
    setTotalScore(savedScore);
    if (savedCards) {
      setCards(JSON.parse(savedCards));
    }
  }, []);

  useEffect(() => {
    const confetti = () => {
      const colors = ["#ff6b6b", "#4ecdc4", "#45b7d1", "#96c93d", "#f7d794"];
      for (let i = 0; i < 50; i++) {
        const div = document.createElement("div");
        div.style.position = "fixed";
        div.style.width = "10px";
        div.style.height = "10px";
        div.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        div.style.left = Math.random() * 100 + "vw";
        div.style.top = "-10px";
        div.style.borderRadius = "50%";
        div.style.zIndex = "1000";
        document.body.appendChild(div);
        div.animate(
          [{ transform: "translateY(0)", opacity: 1 }, { transform: `translateY(${window.innerHeight}px)`, opacity: 0 }],
          { duration: Math.random() * 2000 + 1000, easing: "ease-out", delay: Math.random() * 1000 }
        ).onfinish = () => div.remove();
      }
    };
    const interval = setInterval(confetti, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.textContent = `
      @keyframes pulse { 0% { transform: scale(1); } 50% { transform: scale(1.1); } 100% { transform: scale(1); } }
      @keyframes disco { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
      @keyframes shine {
        0% { text-shadow: 0 0 5px #ffd700, 0 0 10px #ffd700, 0 0 15px #fff; }
        50% { text-shadow: 0 0 10px #ffd700, 0 0 20px #ffd700, 0 0 30px #fff; }
        100% { text-shadow: 0 0 5px #ffd700, 0 0 10px #ffd700, 0 0 15px #fff; }
      }
    `;
    document.head.appendChild(styleSheet);
    return () => document.head.removeChild(styleSheet);
  }, []);

  useEffect(() => {
    localStorage.setItem('totalScore', totalScore);
    localStorage.setItem('galleryCards', JSON.stringify(cards));
  }, [totalScore, cards]);

  useEffect(() => {
    const flippedCount = cards.filter(card => !card.flipped).length;
    setAllFlipped(flippedCount === 0);
  }, [cards]);

  const playSound = (soundFile, callback) => {
    if (typeof window === 'undefined') return; // Prevent Audio creation on server
    if (!isAudioPlaying) {
      setIsAudioPlaying(true);
      console.log(`Attempting to play ${soundFile}`);
      const audio = new Audio(soundFile);
      audio.onended = () => {
        console.log(`${soundFile} ended`);
        setIsAudioPlaying(false);
        if (callback) callback();
      };
      audio.play()
        .then(() => console.log(`${soundFile} started playing`))
        .catch((err) => {
          console.error(`${soundFile} failed:`, err.message);
          setIsAudioPlaying(false);
          if (callback) callback();
        });
    } else {
      console.log(`Queuing ${soundFile} because audio is playing`);
      setTimeout(() => playSound(soundFile, callback), 100);
    }
  };

  const handleAnswer = (index, userAnswer, flipCard) => {
    console.log("Handling answer - Index:", index, "Answer:", userAnswer);
    if (userAnswer.trim().toLowerCase() === cards[index].answer.toLowerCase()) {
      setCards(prevCards => {
        const newCards = [...prevCards];
        newCards[index].flipped = true;
        return newCards;
      });
      setTotalScore(prevScore => {
        const newScore = prevScore + 10;
        localStorage.setItem('totalScore', newScore);
        return newScore;
      });
      flipCard();
      playSound(cards[index].audio);
    } else {
      console.log("Wrong answer, no flip or sound");
    }
  };
  return (
    <div
      style={{
        padding: "1rem",
        textAlign: "center",
        background: disco
          ? "linear-gradient(45deg, #ff00ff, #00ffff, #ffff00, #ff00ff)"
          : "linear-gradient(135deg, #ff6b6b, #4ecdc4, #45b7d1)",
        minHeight: "100vh",
        overflow: "hidden",
        transition: "background 0.5s ease",
        animation: disco ? "disco 2s infinite" : "none",
      }}
    >
      <h1
        style={{
          fontSize: "clamp(2rem, 8vw, 4rem)",
          color: "#fff",
          fontFamily: "'Comic Sans MS', cursive",
          textShadow: "3px 3px 6px #333",
          animation: "pulse 1.5s infinite",
        }}
      >
        Family Gallery Challenge
      </h1>
      <div
        style={{
          margin: "1rem 0",
          fontSize: "clamp(1.2rem, 5vw, 2rem)",
          color: "#fff",
          fontFamily: "'Comic Sans MS', cursive",
          background: "rgba(255, 215, 0, 0.2)",
          padding: "0.5rem 1rem",
          borderRadius: "15px",
          border: "2px solid #ffd700",
          display: "inline-block",
          animation: "shine 2s infinite",
        }}
      >
        Total Score: {totalScore}
      </div>
      <p
        style={{
          fontSize: "clamp(0.8rem, 3vw, 1.2rem)",
          color: "#ffd700",
          margin: "1rem 0",
          fontFamily: "'Comic Sans MS', cursive",
          background: "rgba(0, 0, 0, 0.5)",
          padding: "0.5rem",
          borderRadius: "5px",
        }}
      >
        How to Play: Answer the trick question on each card’s back. Get it right to flip it, earn 10 points, and hear a unique message! Flip all cards to move on!
      </p>
      <button
        onClick={() => setDisco(!disco)}
        style={{
          padding: "0.5rem 1rem",
          fontSize: "clamp(0.9rem, 3vw, 1.2rem)",
          fontFamily: "'Comic Sans MS', cursive",
          background: "#ff5722",
          color: "#fff",
          border: "none",
          borderRadius: "10px",
          cursor: "pointer",
          marginBottom: "1rem",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        {disco ? "Chill Out" : "Disco Party!"}
      </button>
      {allFlipped && (
        <Link href="/next-challenge">
          <button
            style={{
              padding: "0.5rem 1rem",
              fontSize: "clamp(0.9rem, 3vw, 1.2rem)",
              fontFamily: "'Comic Sans MS', cursive",
              background: "#4ecdc4",
              color: "#fff",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              marginBottom: "1rem",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            }}
          >
            Next Challenge!
          </button>
        </Link>
      )}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 250px))", // Adjusted minmax for better control
          gap: "1rem",
          padding: "0 1rem",
          maxWidth: "1400px", // Caps container width on large screens
          margin: "2rem auto", // Centers the grid
          justifyContent: "center", // Ensures cards are centered within the grid
        }}
      >
        {cards.map((member) => (
          <MemoryCard key={member.index} member={member} onAnswer={handleAnswer} />
        ))}
      </div>
    </div>
  );
}
