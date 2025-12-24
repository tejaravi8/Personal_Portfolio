import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import SkillDetail from "./pages/SkillDetail";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Home />} />
        <Route path="/projects" element={<Home />} />
        <Route path="/contact" element={<Home />} />

        {/* Deep pages */}
        <Route path="/project/:slug" element={<ProjectDetail />} />
        <Route path="/skill/:slug" element={<SkillDetail />} />
      </Routes>
    </>
  );
}

export default App;
