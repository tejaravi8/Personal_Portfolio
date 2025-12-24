import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Skills", path: "/skills" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        padding: "20px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "rgba(15, 23, 42, 0.8)",
        backdropFilter: "blur(10px)",
        zIndex: 1000,
      }}
    >
      {/* Logo */}
      <h2 style={{ fontWeight: "700", letterSpacing: "1px" }}>
        RAVITEJA<span style={{ color: "#38bdf8" }}>.</span>
      </h2>

      {/* Menu */}
      <div style={{ display: "flex", gap: "30px" }}>
        {navItems.map((item) => (
          <motion.div
            key={item.name}
            whileHover={{ y: -3 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <NavLink
              to={item.path}
              end={item.path === "/"}
              style={({ isActive }) => ({
                textDecoration: "none",
                fontSize: "14px",
                color: isActive ? "#38bdf8" : "white",
                fontWeight: isActive ? "600" : "400",
              })}
            >
              {item.name}
            </NavLink>
          </motion.div>
        ))}
      </div>
    </motion.nav>
  );
}

export default Navbar;
