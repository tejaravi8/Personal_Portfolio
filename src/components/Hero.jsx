import { motion } from "framer-motion";
import profile from "../assets/profile.jpeg";

const codeLines = [
  "const dev = () => build();",
  "useEffect(() => deploy(), []);",
  "git commit -m 'feature'",
  "if (bug) fix();",
  "npm run build",
  "<Component />",
  "while(true) learn();",
];

function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        background: "#020617",
        display: "grid",
        gridTemplateColumns: "1.2fr 1fr",
        alignItems: "center",
        padding: "120px 80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* LEFT — TEXT */}
      <div style={{ zIndex: 2 }}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{
            color: "#38bdf8",
            fontFamily: "monospace",
            letterSpacing: "2px",
            fontSize: "13px",
          }}
        >
          FRONTEND ENGINEER
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          style={{
            fontSize: "4rem",
            fontWeight: 800,
            margin: "14px 0",
            lineHeight: 1.1,
          }}
        >
          Raviteja Botsa
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          style={{
            color: "#94a3b8",
            maxWidth: "520px",
            lineHeight: 1.7,
          }}
        >
          I design and build scalable, animated, and developer-focused
          web interfaces using modern frontend technologies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          style={{ marginTop: "40px", display: "flex", gap: "20px" }}
        >
          <button className="hero-btn primary">View Projects</button>
          <button className="hero-btn secondary">Contact</button>
        </motion.div>
      </div>

      {/* RIGHT — PHOTO + CODE */}
      <div
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* FLOATING CODE */}
        {codeLines.map((line, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -20, 0], opacity: [0.2, 0.4, 0.2] }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              position: "absolute",
              top: `${10 + i * 10}%`,
              left: i % 2 === 0 ? "-40px" : "auto",
              right: i % 2 !== 0 ? "-40px" : "auto",
              fontFamily: "monospace",
              fontSize: "12px",
              color: "#38bdf8",
              opacity: 0.3,
              whiteSpace: "nowrap",
            }}
          >
            {line}
          </motion.div>
        ))}

        {/* GLOW */}
        <div
          style={{
            position: "absolute",
            width: "320px",
            height: "320px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(56,189,248,0.35), transparent 70%)",
            filter: "blur(40px)",
          }}
        />

        {/* PROFILE IMAGE */}
        <motion.img
          src={profile}
          alt="Teja"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
          style={{
            width: "280px",
            borderRadius: "50%",
            position: "relative",
            zIndex: 2,
            border: "2px solid #38bdf8",
          }}
        />
      </div>
    </section>
  );
}

export default Hero;
