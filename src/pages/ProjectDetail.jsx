import { useParams, useNavigate } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import { projects } from "../data/projects";

function ProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const project = projects.find((p) => p.slug === slug);
  if (!project) return <h1 style={{ color: "white" }}>Project Not Found</h1>;

  return (
    <PageTransition>
      <section
        style={{
          minHeight: "100vh",
          padding: "120px 80px",
          background: "#020617",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <button
          onClick={() => navigate(-1)}
          className="hero-btn secondary"
          style={{ marginBottom: "30px" }}
        >
          ← Back
        </button>

        <h1 style={{ fontSize: "3rem" }}>{project.title}</h1>
        <p style={{ color: "#38bdf8" }}>{project.role}</p>

        <p style={{ marginTop: "20px", color: "#94a3b8" }}>
          {project.description}
        </p>

        {/* Images */}
        <div
          style={{
            marginTop: "40px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "20px",
          }}
        >
          {project.images.map((img) => (
            <img
              key={img}
              src={img}
              alt={project.title}
              style={{
                width: "100%",
                borderRadius: "14px",
                border: "1px solid #1e293b",
              }}
            />
          ))}
        </div>

        <h3 style={{ marginTop: "50px" }}>Key Features</h3>
        <ul>
          {project.features.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>

        <h3>Tech Stack</h3>
        <ul>
          {project.tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>

        <h3>Challenges</h3>
        <p>{project.challenges}</p>

        <h3>Learnings</h3>
        <p>{project.learnings}</p>

        <div style={{ marginTop: "40px", display: "flex", gap: "20px" }}>
          <a href={project.github} target="_blank" className="hero-btn secondary">
            GitHub
          </a>
          <a href={project.demo} target="_blank" className="hero-btn primary">
            Live Demo
          </a>
        </div>
      </section>
    </PageTransition>
  );
}

export default ProjectDetail;
