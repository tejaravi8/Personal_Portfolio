import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { projects } from "../data/projects";

function Projects() {
  const [active, setActive] = useState(0);
  const navigate = useNavigate();

  return (
    <section
      style={{
        minHeight: "200vh",
        display: "flex",
        padding: "120px 80px",
        background: "#020617",
        borderTop: "1px solid #1e293b",
      }}
    >

      {/* LEFT — Sticky Project Name */}
      <div
        style={{
            flex: 1,
            position: "sticky",
            top: "120px",
            height: "fit-content",
        }}
      >
        <motion.h2
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          style={{
            fontSize: "2.8rem",
            color: "#38bdf8",
            cursor: "pointer",
            lineHeight: 1.2,
          }}
          onClick={() => navigate(`/project/${projects[active].slug}`)}
        >
          {projects[active].title}
        </motion.h2>

        <p
          style={{
            marginTop: "12px",
            color: "#94a3b8",
            fontSize: "14px",
            maxWidth: "320px",
          }}
        >
          Click to view full case study →
        </p>
      </div>

      {/* RIGHT — Scroll Story */}
      <div style={{ flex: 1 }}>
        {projects.map((project, index) => {
          const fromLeft = index % 2 === 0;

          return (
            <motion.div
              key={project.slug}
              onViewportEnter={() => setActive(index)}
              viewport={{ margin: "-40% 0px -40% 0px" }}
              initial={{
                opacity: 0,
                x: fromLeft ? -100 : 100,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              style={{
                marginBottom: "180px",
                padding: "40px",
                borderLeft: fromLeft ? "3px solid #38bdf8" : "none",
                borderRight: !fromLeft ? "3px solid #38bdf8" : "none",
              }}
            >
              {/* coder-style label */}
              <p
                style={{
                  fontSize: "12px",
                  color: "#64748b",
                  letterSpacing: "1px",
                  marginBottom: "8px",
                }}
              >
                PROJECT {index + 1}
              </p>

              <h3
                style={{
                  fontSize: "1.6rem",
                  marginBottom: "14px",
                }}
              >
                {project.title}
              </h3>

              <p
                style={{
                  color: "#94a3b8",
                  lineHeight: 1.7,
                  maxWidth: "520px",
                }}
              >
                {project.description}
              </p>

              {/* tech stack (coder theme) */}
              <div
                style={{
                  marginTop: "20px",
                  display: "flex",
                  gap: "10px",
                  flexWrap: "wrap",
                }}
              >
                {project.tech.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontSize: "12px",
                      padding: "6px 12px",
                      borderRadius: "6px",
                      background: "#020617",
                      border: "1px solid #1e293b",
                      color: "#38bdf8",
                      fontFamily: "monospace",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
