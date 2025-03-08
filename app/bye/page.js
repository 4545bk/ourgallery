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
        <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>Bye Bye, See You Soon!</h1>
        <p style={{ fontSize: "1.25rem" }}>Thanks for playing!</p>
      </div>
    );
  }