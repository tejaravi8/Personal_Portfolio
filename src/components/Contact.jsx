import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9i14cmr",
        "template_cid772x",
        formRef.current,
        "0JA4S-xqqUpwCh0P0"
      )
      .then(
        () => {
          alert("Message sent successfully 🚀");
          formRef.current.reset();
        },
        () => {
          alert("Failed to send message ❌");
        }
      );
  };

  return (
    <section
      id="contact"
      style={{
        minHeight: "100vh",
        padding: "120px 80px",
        background: "#020617",
        borderTop: "1px solid #1e293b",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ maxWidth: "1100px", width: "100%" }}>
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            fontSize: "2.6rem",
            textAlign: "center",
            marginBottom: "16px",
          }}
        >
          Contact
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          style={{
            textAlign: "center",
            color: "#94a3b8",
            marginBottom: "80px",
          }}
        >
          Open to opportunities, collaborations, and meaningful work.
        </motion.p>

        {/* GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
          }}
        >
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p
              style={{
                fontSize: "12px",
                letterSpacing: "2px",
                color: "#64748b",
                marginBottom: "30px",
                fontFamily: "monospace",
              }}
            >
              CONTACT INFO
            </p>

            <div style={{ marginBottom: "24px" }}>
              <p style={{ fontSize: "13px", color: "#64748b" }}>Email</p>
              <a
                href="mailto:botsaraviteja@gmail.com"
                style={{ color: "#cbd5f5", textDecoration: "none" }}
              >
                botsaraviteja@gmail.com
              </a>
            </div>

            <div style={{ marginBottom: "40px" }}>
              <p style={{ fontSize: "13px", color: "#64748b" }}>Location</p>
              <p style={{ color: "#cbd5f5" }}>India</p>
            </div>

            <p
              style={{
                fontSize: "12px",
                letterSpacing: "2px",
                color: "#64748b",
                marginBottom: "20px",
                fontFamily: "monospace",
              }}
            >
              FOLLOW
            </p>

            <div style={{ display: "flex", gap: "22px" }}>
              <motion.a
                whileHover={{ y: -4 }}
                href="https://github.com/tejaravi8"
                target="_blank"
                style={{ color: "#38bdf8", fontSize: "22px" }}
              >
                <FaGithub />
              </motion.a>

              <motion.a
                whileHover={{ y: -4 }}
                href="https://www.instagram.com/teja41863"
                target="_blank"
                style={{ color: "#38bdf8", fontSize: "22px" }}
              >
                <FaInstagram />
              </motion.a>

              <motion.a
                whileHover={{ y: -4 }}
                href="https://www.linkedin.com/in/ravitejabotsa"
                target="_blank"
                style={{ color: "#38bdf8", fontSize: "22px" }}
              >
                <FaLinkedin />
              </motion.a>
            </div>
          </motion.div>

          {/* RIGHT — FORM */}
          <motion.form
            ref={formRef}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              className="contact-input"
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              className="contact-input"
              required
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              className="contact-input"
              required
            />

            <motion.button
              type="submit"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              style={{
                marginTop: "10px",
                padding: "14px",
                borderRadius: "999px",
                background: "#38bdf8",
                color: "#020617",
                border: "none",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>

        {/* FOOTER */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          style={{
            marginTop: "100px",
            textAlign: "center",
            fontSize: "13px",
            color: "#64748b",
            fontFamily: "monospace",
          }}
        >
          © {new Date().getFullYear()} Teja Botsa — Built with React
        </motion.p>
      </div>
    </section>
  );
}

export default Contact;
