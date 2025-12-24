import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import SkillsSplit from "./components/SkillsSplit";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<SkillsSplit />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />

        {/* Deep dive pages */}
        <Route path="/project/:slug" element={<ProjectDetail />} />
      </Routes>
    </>
  );
}

export default App;
