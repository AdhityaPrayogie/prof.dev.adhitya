// src/components/Contact.jsx
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Terminal, Send, CheckCircle2 } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [dispatched, setDispatched] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailSubject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
    const mailBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:adhityaprayogie@gmail.com?subject=${mailSubject}&body=${mailBody}`;
    setDispatched(true);
  };

  return (
    <section id="contact" className="py-24 px-6 lg:px-12 xl:px-20 text-zinc-200 font-mono">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.5 }} className="w-full max-w-screen-2xl mx-auto space-y-10">
        <div className="grid gap-10 lg:grid-cols-12 items-start">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="lg:col-span-4 space-y-4">
          <div className="flex items-center gap-2 text-xs text-[#38bdf8] mb-1">
            <Terminal className="w-4 h-4" />
            <span>CONTACT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white">Hubungi Saya</h2>
          <p className="text-sm text-zinc-300 font-sans leading-relaxed">
            Terbuka untuk kerja sama, freelance, atau posisi full-time. Kirim pesan, saya balas secepatnya.
          </p>
          <a href="mailto:adhityaprayogie@gmail.com" className="inline-block text-sm text-[#38bdf8] hover:text-white transition-colors">
            adhityaprayogie@gmail.com
          </a>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="lg:col-span-8 border border-[#034694]/80 bg-[#040916]/90 backdrop-blur-2xl rounded-xl p-6 sm:p-8 shadow-[0_0_40px_rgba(3,70,148,0.3)]">
          <form onSubmit={handleSubmit} className="space-y-5 text-xs sm:text-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-zinc-400 font-bold">Nama</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Nama kamu"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-[#02050c] border border-[#034694] focus:border-[#38bdf8] px-3.5 py-2.5 rounded text-white outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-zinc-400 font-bold">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="name@domain.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-[#02050c] border border-[#034694] focus:border-[#38bdf8] px-3.5 py-2.5 rounded text-white outline-none"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-zinc-400 font-bold">Subjek</label>
              <input
                type="text"
                name="subject"
                placeholder="Kolaborasi / Peluang kerja"
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-[#02050c] border border-[#034694] focus:border-[#38bdf8] px-3.5 py-2.5 rounded text-white outline-none"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-zinc-400 font-bold">Pesan</label>
              <textarea
                name="message"
                rows={5}
                required
                placeholder="Tulis pesan..."
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-[#02050c] border border-[#034694] focus:border-[#38bdf8] p-3.5 rounded text-white outline-none"
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3.5 rounded bg-gradient-to-r from-[#034694] to-[#022f68] hover:from-[#045ac0] hover:to-[#034694] text-white font-bold flex items-center justify-center gap-2 border border-[#38bdf8]/60 shadow-[0_0_20px_rgba(3,70,148,0.7)] cursor-pointer transition-all"
            >
              {dispatched ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-[#38bdf8]" />
                  <span>Email client dibuka</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 text-[#38bdf8]" />
                  <span>Kirim Pesan</span>
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;