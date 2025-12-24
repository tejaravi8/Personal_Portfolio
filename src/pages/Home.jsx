import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Hero from "../components/Hero";
import SkillsSplit from "../components/SkillsSplit";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const sections = [
  { id: "home", path: "/" },
  { id: "skills", path: "/skills" },
  { id: "projects", path: "/projects" },
  { id: "contact", path: "/contact" },
];

function Home() {
  const location = useLocation();
  const navigate = useNavigate();

  /* 1️⃣ URL → SCROLL */
  useEffect(() => {
    const match = sections.find(s => s.path === location.pathname);
    if (!match) return;

    const el = document.getElementById(match.id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, [location.pathname]);

  /* 2️⃣ SCROLL → URL */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const sec = sections.find(s => s.id === entry.target.id);
            if (sec && location.pathname !== sec.path) {
              navigate(sec.path, { replace: true });
            }
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach(s => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [navigate, location.pathname]);

  return (
    <>
      <Hero />
      <SkillsSplit />
      <Projects />
      <Contact />
    </>
  );
}

export default Home;
