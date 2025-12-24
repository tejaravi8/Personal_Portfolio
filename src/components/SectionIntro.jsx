import { motion } from "framer-motion";

function SectionIntro({ title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      style={{
        padding: "120px 80px",
        textAlign: "center",
      }}
    >
      <motion.p
        whileHover={{ letterSpacing: "4px" }}
        transition={{ duration: 0.3 }}
        style={{
          fontFamily: "monospace",
          fontSize: "13px",
          color: "#64748b",
          letterSpacing: "4px",
          marginBottom: "12px",
          cursor: "default",
        }}
      >
        {subtitle}
      </motion.p>

      <motion.h2
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        style={{
          fontSize: "3.2rem",
          fontWeight: 700,
          cursor: "default",
        }}
      >
        {title}
      </motion.h2>
    </motion.div>
  );
}

export default SectionIntro;
