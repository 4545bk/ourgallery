"use client";

export default function Bye() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0a192f 0%, #1e3a8a 100%)",
        color: "#e2e8f0",
        fontFamily: "'Inter', sans-serif",
        padding: "2rem",
      }}
    >
      <h1
        style={{
          fontSize: "2.5rem",
          marginBottom: "1rem",
          animation: "wave 2s infinite ease-in-out",
        }}
      >
        Bye Bye, See You Soon!
      </h1>
      <p style={{ fontSize: "1.25rem", marginBottom: "2rem" }}>Thanks for playing!</p>

      {/* Developer Section */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <span style={{ fontSize: "1rem", color: "#94a3b8" }}>Developed by</span>
        <a
          href="https://natnaelgizawportfolio.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <img
            src="/images/profile.jpg" // Corrected path
            alt="Developer Profile"
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "2px solid #e2e8f0",
              marginBottom: "0.5rem",
            }}
          />
          <span
            style={{
              fontSize: "1rem",
              color: "#60a5fa",
              textDecoration: "underline",
              transition: "color 0.3s",
            }}
            onMouseOver={(e) => (e.target.style.color = "#93c5fd")}
            onMouseOut={(e) => (e.target.style.color = "#60a5fa")}
          >
            Natnael Gizaw
          </span>
        </a>
      </div>

      {/* Animation Definition */}
      <style jsx global>{`
        @keyframes wave {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  );
}