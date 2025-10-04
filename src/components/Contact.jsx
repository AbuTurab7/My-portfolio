import React, { useRef, useState, useContext } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Mode } from "../ContextAPI";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const { isDark } = useContext(Mode);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    emailjs
      .sendForm(
        "service_d7l2jgc",
        "template_6l9wm4g",
        form.current,
        "LHmVOcSmlumvr0Gpa"
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset();
          toast.success("Message sent successfully!", {
            position: "top-center",
            autoClose: 3000,
            theme: isDark ? "dark" : "light",
          });
          setIsSending(false);
        },
        (error) => {
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-center",
            autoClose: 3000,
            theme: isDark ? "dark" : "light",
          });
          setIsSending(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className={`flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] ${
        isDark ? "bg-[#050414]" : "bg-white"
      }`}
    >
      {/* Toast Container */}
      <ToastContainer />

      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className={`text-4xl font-bold ${isDark ? "text-white" : "text-black"}`}>
          CONTACT
        </h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className={`mt-4 text-lg font-semibold ${isDark ? "text-gray-400" : "text-gray-700"}`}>
          I’d love to hear from you—reach out for any opportunities or questions!
        </p>
      </div>

      {/* Contact Form */}
      <div
        className={`mt-8 w-full max-w-md p-6 rounded-lg shadow-lg border ${
          isDark
            ? "bg-[#0d081f] border-gray-700"
            : "bg-white border-gray-300"
        }`}
      >
        <h3
          className={`text-xl font-semibold text-center ${
            isDark ? "text-white" : "text-black"
          }`}
        >
          Connect With Me <span className="ml-1">🚀</span>
        </h3>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="mt-4 flex flex-col space-y-4"
        >
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className={`w-full p-3 rounded-md border focus:outline-none ${
              isDark
                ? "bg-[#131025] text-white border-gray-600 focus:border-purple-500"
                : "bg-gray-100 text-black border-gray-300 focus:border-purple-600"
            }`}
          />
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className={`w-full p-3 rounded-md border focus:outline-none ${
              isDark
                ? "bg-[#131025] text-white border-gray-600 focus:border-purple-500"
                : "bg-gray-100 text-black border-gray-300 focus:border-purple-600"
            }`}
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className={`w-full p-3 rounded-md border focus:outline-none ${
              isDark
                ? "bg-[#131025] text-white border-gray-600 focus:border-purple-500"
                : "bg-gray-100 text-black border-gray-300 focus:border-purple-600"
            }`}
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            required
            className={`w-full p-3 rounded-md border focus:outline-none ${
              isDark
                ? "bg-[#131025] text-white border-gray-600 focus:border-purple-500"
                : "bg-gray-100 text-black border-gray-300 focus:border-purple-600"
            }`}
          />

          <button
            type="submit"
            disabled={isSending}
            className={`w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3 text-white font-semibold rounded-md transition ${
              isSending ? "opacity-50 cursor-not-allowed" : "hover:opacity-90"
            }`}
          >
            {isSending ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
