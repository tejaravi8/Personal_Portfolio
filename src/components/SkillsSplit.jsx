import { motion } from "framer-motion";
import { useState } from "react";
import { skills } from "../data/skills";
import SectionIntro from "./SectionIntro";

function SkillsSplit() {
  const [active, setActive] = useState(0);

  return (
    <section
      style={{
        /* 🔥 FIX IS HERE */
        height: `${(skills.length + 1) * 100}vh`,
        background: "#020617",
        borderTop: "1px solid #1e293b",
      }}
    >
      {/* PINNED PANEL */}
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px",
        }}
      ><SectionIntro
          subtitle="ENGINEERING STACK"
          title="Skills"
        />
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{
            maxWidth: "900px",
            width: "100%",
            padding: "48px",
            borderRadius: "16px",
            border: "1px solid #1e293b",
            background: "#020617",
          }}
        >
          <p
            style={{
              fontFamily: "monospace",
              color: "#64748b",
              fontSize: "13px",
              marginBottom: "8px",
            }}
          >
            SKILL {active + 1} / {skills.length}
          </p>

          <h2
            style={{
              fontSize: "2.4rem",
              color: "#38bdf8",
              marginBottom: "18px",
            }}
          >
            {skills[active].title}
          </h2>

          <p
            style={{
              color: "#94a3b8",
              lineHeight: 1.7,
              maxWidth: "720px",
            }}
          >
            {skills[active].usage || skills[active].overview}
          </p>

          <ul style={{ marginTop: "24px", paddingLeft: "18px" }}>
            {skills[active].points?.map((p) => (
              <li
                key={p}
                style={{
                  marginBottom: "10px",
                  color: "#cbd5f5",
                }}
              >
                {p}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* SCROLL TRIGGERS */}
      {skills.map((_, index) => (
        <motion.div
          key={index}
          style={{ height: "100vh" }}
          onViewportEnter={() => setActive(index)}
          viewport={{ margin: "-50% 0px -50% 0px" }}
        />
      ))}
    </section>
  );
}

export default SkillsSplit;
