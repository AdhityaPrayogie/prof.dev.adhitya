import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./ui/card";
import Input from "./ui/input";
import Textarea from "./ui/textarea";
import Button from "./ui/button";
import Badge from "./ui/badge";
import { Mail, MapPin, Send, CheckCircle2, MessageSquare, Clock, Sparkles } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { name, email, subject, message } = formData;
    const mailSubject = encodeURIComponent(
      subject || `New Portfolio Message from ${name}`
    );
    const mailBody = encodeURIComponent(
      `Hi Adhitya,\n\nYou have received a new contact message:\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject || "General Inquiry"}\n\nMessage:\n${message}\n\n— Sent from portfolio web app`
    );

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      window.location.href = `mailto:adhityaprayogie@gmail.com?subject=${mailSubject}&body=${mailBody}`;

      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 600);
  };

  return (
    <section
      id="contact"
      className="py-28 px-6 bg-[#060911] relative overflow-hidden"
    >
      {/* Background ambient light with #034694 */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 -z-10 w-96 h-96 bg-[#034694]/15 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 -z-10 w-96 h-96 bg-[#034694]/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-3 px-3.5 py-1 text-xs border-[#034694]/50 bg-[#034694]/15 text-[#93c5fd]">
            <MessageSquare className="w-3.5 h-3.5 mr-1 text-[#3b82f6]" />
            Connect
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-[#1d70e2]">Touch</span>
          </h2>
          <p className="text-zinc-400 mt-3 max-w-xl mx-auto text-sm sm:text-base">
            Have a project in mind, a job opportunity, or just want to chat? Reach out anytime!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Direct Contact Info Sidebar / List */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <Card className="border border-zinc-800/80 bg-[#0a0e18]/80 backdrop-blur-xl p-6">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-xl font-bold text-white">
                  Contact Information
                </CardTitle>
                <CardDescription className="text-sm text-zinc-400 mt-1.5">
                  I'm currently available for full-time roles, freelance projects, and creative collaborations.
                </CardDescription>
              </CardHeader>

              <div className="flex flex-col gap-3.5">
                <a
                  href="mailto:adhityaprayogie@gmail.com"
                  className="flex items-start gap-4 p-3.5 rounded-xl bg-[#0e1424] border border-[#034694]/30 hover:border-[#034694] hover:bg-[#034694]/10 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#034694]/20 border border-[#034694]/40 flex items-center justify-center text-[#93c5fd] group-hover:scale-105 transition-transform flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-400 font-medium">Email</p>
                    <p className="text-sm font-semibold text-white group-hover:text-[#93c5fd] transition-colors">
                      adhityaprayogie@gmail.com
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-3.5 rounded-xl bg-[#0e1424] border border-[#034694]/30">
                  <div className="w-10 h-10 rounded-xl bg-[#034694]/20 border border-[#034694]/40 flex items-center justify-center text-[#93c5fd] flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-400 font-medium">Location</p>
                    <p className="text-sm font-semibold text-white">Serang, Banten, Indonesia</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-3.5 rounded-xl bg-[#0e1424] border border-[#034694]/30">
                  <div className="w-10 h-10 rounded-xl bg-[#034694]/20 border border-[#034694]/40 flex items-center justify-center text-[#93c5fd] flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-400 font-medium">Availability & Response</p>
                    <p className="text-sm font-semibold text-white">Within 24 Hours</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Quote / Callout Card with #034694 */}
            <Card className="border border-[#034694]/40 bg-gradient-to-br from-[#034694]/20 via-[#0a0e18] to-transparent p-6">
              <div className="flex items-center gap-2 mb-2 text-[#93c5fd] text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-[#3b82f6]" />
                <span>Let's Build Something Great</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Whether you need a full responsive web app from scratch, UI redesign, or frontend bug fixes, I am ready to turn your vision into code.
              </p>
            </Card>
          </motion.div>

          {/* Contact Form Card with Shadcn */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <Card className="border border-zinc-800/80 bg-[#0a0e18]/80 backdrop-blur-xl shadow-2xl">
              <CardHeader className="p-7 pb-4">
                <CardTitle className="text-2xl font-bold text-white">
                  Send a Direct Message
                </CardTitle>
                <CardDescription className="text-sm text-zinc-400">
                  Fill out the form below and it will compose your email immediately.
                </CardDescription>
              </CardHeader>

              <CardContent className="p-7 pt-2">
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-xs font-semibold text-zinc-300">
                        Your Name *
                      </label>
                      <Input
                        id="name"
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-[#0e1424] border-zinc-800 focus:border-[#034694] focus:ring-[#034694]"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-xs font-semibold text-zinc-300">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-[#0e1424] border-zinc-800 focus:border-[#034694] focus:ring-[#034694]"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="subject" className="text-xs font-semibold text-zinc-300">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      type="text"
                      placeholder="Project Inquiry / Job Opportunity"
                      value={formData.subject}
                      onChange={handleChange}
                      className="bg-[#0e1424] border-zinc-800 focus:border-[#034694] focus:ring-[#034694]"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-xs font-semibold text-zinc-300">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      rows={5}
                      required
                      placeholder="Tell me about your project, timeline, or requirements..."
                      value={formData.message}
                      onChange={handleChange}
                      className="bg-[#0e1424] border-zinc-800 focus:border-[#034694] focus:ring-[#034694]"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full mt-2 font-semibold bg-[#034694] hover:bg-[#02336e] text-white shadow-lg shadow-[#034694]/40 border border-[#1d70e2]/50 gap-2 cursor-pointer transition-all"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Preparing Message...
                      </span>
                    ) : isSuccess ? (
                      <span className="flex items-center gap-2 text-emerald-300">
                        <CheckCircle2 className="w-5 h-5" />
                        Email Prepared!
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        <span>Send Message</span>
                        <Send className="w-4 h-4 text-[#93c5fd]" />
                      </span>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;