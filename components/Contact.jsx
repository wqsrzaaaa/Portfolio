"use client";
import Image from "next/image";
import { Linkedin, Mail } from "lucide-react";
import { useState } from "react";

export default function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

     const handleClick = () => {
    const email = "wqsrza07@gmail.com";
    const subject = encodeURIComponent("Contact from Portfolio");
    const body = encodeURIComponent(
      "Hi Waqas,\n\nI came across your portfolio and would like to connect.\n\nThanks!"
    );

    // Open Gmail web with pre-filled email
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;
    window.open(gmailUrl, "_blank");
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    const data = {
      access_key: "69f57d48-612f-4fb6-a8b3-437d085f28d9",
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setSuccess(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Error sending message!");
      }
    } catch (err) {
      alert("Error sending message!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      id="contact"
      className="w-full pb-12 relative flex items-center justify-center px-5 lg:px-10 "
    >
      <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-12">
        {/* Left Side */}
        <div className="w-full lg:w-1/3 flex flex-col justify-center gap-6  lg:px-0">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Let's Build Something Together
          </h2>
          <p className=" mb-6">
            Have an idea, a project, or just want to say hi? I'm always open for a chat.
            Reach me through any of the platforms below or drop a message using the form!
          </p>

          {/* Social Links */}
          <div className="flex flex-col gap-4 w-full">
            <a
              href="https://www.linkedin.com/in/waqas-raza-98877a283/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 px-6 py-3 bg-blue-500 text-white font-semibold rounded-full hover:scale-105 transition-transform"
            >
              <Linkedin size={22} /> LinkedIn
            </a>

            <a
              href="https://github.com/wqsrzaaaa"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 px-6 py-3 bg-gray-500 text-white font-semibold rounded-full hover:scale-105 transition-transform"
            >
              <Image width={22} height={22} alt="" src="/github.png" />
              GitHub
            </a>

            <button
              onClick={handleClick}
              className="flex items-center gap-4 px-6 py-3 bg-gray-200 text-gray-800 font-semibold rounded-full hover:scale-105 transition-transform"
            >
              <Mail size={22} /> wqsrza07@gmail.com
            </button>
 
          </div>
        </div>

        {/* Right Side — Contact Form */}
        <div className="w-full lg:w-2/3 flex items-center justify-center">
          <div className="w-full max-w-lg bg-white/15 backdrop-blur-xl border border-white/30 shadow-xl p-10 rounded-3xl ">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-cyan-200 focus:border-cyan-200 outline-none transition duration-200"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-cyan-200 focus:border-cyan-200 outline-none transition duration-200"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Tell me about your idea..."
                  required
                  className="mt-2 w-full px-4 py-3 resize-none border border-gray-300 rounded-xl shadow-sm focus:ring-cyan-200 focus:border-cyan-200 outline-none transition duration-200"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 px-6 bg-cyan-200 cursor-pointer  font-bold rounded-xl shadow-lg transition duration-300 text-lg ${loading ? "opacity-70 cursor-not-allowed" : ""
                  }`}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {success && (
                <p className="mt-4 text-green-600 font-semibold text-center">
                  Message sent successfully! I'll get back to you soon. 🎉
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
