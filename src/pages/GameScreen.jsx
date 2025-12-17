

import { useLocation } from "react-router-dom";

const glassStyle = {
  background: "rgba(30, 34, 45, 0.7)",
  borderRadius: "32px",
  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
  backdropFilter: "blur(8px)",
  WebkitBackdropFilter: "blur(8px)",
  border: "1px solid rgba(255, 255, 255, 0.18)",
  padding: "2.5rem 3rem",
  maxWidth: "520px",
  margin: "2rem auto",
};

const GameScreen = () => {
  const location = useLocation();
  const difficulty = location.state?.difficulty || "Unknown";

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(120deg, #0f2027, #2c5364 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Orbitron', 'Segoe UI', Arial, sans-serif",
        overflow: "hidden",
      }}
    >
      <div style={glassStyle}>
        <h1
          style={{
            fontSize: "3rem",
            color: "#00fff0",
            letterSpacing: "2px",
            textShadow:
              "0 0 8px #00fff0, 0 0 32px #0ff, 2px 2px 8px #000",
            marginBottom: "1.5rem",
          }}
        >
          Game Page
        </h1>
        <p
          style={{
            fontSize: "1.5rem",
            color: "#b2fefa",
            textShadow: "0 0 4px #00fff0",
            marginBottom: "2rem",
          }}
        >
          Selected Difficulty:{" "}
          <span style={{ color: "#fff", fontWeight: "bold", textShadow: "0 0 8px #00fff0" }}>{difficulty}</span>
        </p>
        {/* Add more futuristic UI elements here if needed */}
      </div>
    </div>
  );
};

export default GameScreen;
