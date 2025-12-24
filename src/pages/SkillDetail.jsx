import { useParams, useNavigate } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import { skills } from "../data/skills";

function SkillDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const skill = skills.find((s) => s.slug === slug);
  if (!skill) return <h1 style={{ color: "white" }}>Skill Not Found</h1>;

  return (
    <PageTransition>
      <section
        style={{
          minHeight: "100vh",
          padding: "120px 80px",
          background: "#020617",
          maxWidth: "900px",
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

        <h1 style={{ fontSize: "3rem" }}>{skill.title}</h1>

        <p style={{ marginTop: "20px", color: "#94a3b8" }}>
          {skill.overview}
        </p>

        <h3 style={{ marginTop: "40px" }}>How I Use It</h3>
        <p>{skill.usage}</p>

        <h3>Key Strengths</h3>
        <ul>
          {skill.points.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </section>
    </PageTransition>
  );
}

export default SkillDetail;
