import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;
    const subject = encodeURIComponent(`New Message from ${name}`);
    const body = encodeURIComponent(
      `Hi Adhitya,%0D%0A%0D%0AYou have a new message from your portfolio:%0D%0A%0D%0AName: ${name}%0D%0AEmail: ${email}%0D%0AMessage:%0D%0A${message}%0D%0A%0D%0A— Sent from your portfolio website 🚀`
    );

    window.location.href = `mailto:adhitya@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 bg-[#0c0c14] text-center relative overflow-hidden"
    >
      {/* Smooth glowing background aura */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-purple-900/10 via-transparent to-cyan-900/10 blur-3xl opacity-40"></div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400"
      >
        Get In Touch
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-gray-400 mb-12 text-lg max-w-xl mx-auto"
      >
        Let’s collaborate and create something awesome together ✨
      </motion.p>

      {/* Contact Form */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-xl mx-auto bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-purple-400/10 shadow-lg shadow-purple-500/5"
      >
        <div className="mb-6 text-left">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            required
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white/10 text-gray-200 rounded-lg border border-purple-400/20 focus:border-purple-400 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-all"
          />
        </div>

        <div className="mb-6 text-left">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white/10 text-gray-200 rounded-lg border border-cyan-400/20 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-all"
          />
        </div>

        <div className="mb-8 text-left">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            rows="4"
            required
            placeholder="Write your message..."
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white/10 text-gray-200 rounded-lg border border-pink-400/20 focus:border-pink-400 focus:outline-none focus:ring-1 focus:ring-pink-500 transition-all resize-none"
          ></textarea>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          type="submit"
          className="w-full py-3 font-semibold text-lg rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 text-white shadow-md shadow-purple-500/20 hover:shadow-pink-500/30 transition-all"
        >
          Send Message 🚀
        </motion.button>
      </motion.form>
    </section>
  );
};

export default Contact;
