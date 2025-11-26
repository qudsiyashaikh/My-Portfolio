import React, { useState } from "react";

function Contact() {
  const [result, setResult] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("✔ Your message has been sent successfully!");
      event.target.reset();
    } else {
      setResult("❌ Something went wrong. Please try again!");
    }
  };

  return (
    <section
      id="contact"
      className="px-5 py-20 text-center"
      style={{ background: "#0d0d25", color: "#fff" }}
    >
      <h2 className="text-4xl mb-10">Get In Touch</h2>

      {/* Main container */}
      <div className="flex justify-between gap-10 flex-wrap">

        {/* Left Side - Contact Info */}
        <div className="flex-1 min-w-[300px] text-left">
          <h3 className="text-2xl text-center mb-2">Let's Work Together</h3>

          <p className="text-gray-300 mb-5">
            If you have a project idea, opportunity, or just want to say hi — feel free to reach out!
          </p>

          {/* Email */}
          <div className="flex items-center gap-4 my-3">
            <i className="fa-solid fa-envelope text-[25px] text-[#a073ff]"></i>
            <div>
              <h4 className="font-semibold text-lg">Email</h4>
              <p>qudsiyazamzam@gmail.com</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-4 my-3">
            <i className="fa-solid fa-phone text-[25px] text-[#a073ff]"></i>
            <div>
              <h4 className="font-semibold text-lg">Phone</h4>
              <p>+91 7264028671</p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-4 my-3">
            <i className="fa-solid fa-location-dot text-[25px] text-[#a073ff]"></i>
            <div>
              <h4 className="font-semibold text-lg">Location</h4>
              <p>Akola, Maharashtra, India</p>
            </div>
          </div>

          {/* Follow Me */}
          <h5 className="text-2xl mt-6 text-center">Follow Me</h5>

          <div className="flex justify-center gap-4 mt-4">
            {/* GitHub */}
            <a href="https://github.com/qudsiyashaikh" target="_blank">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                className="w-10 h-10 hover:scale-110 transition"
                alt="GitHub"
              />
            </a>

            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/qudsiyashaikh" target="_blank">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                className="w-10 h-10 hover:scale-110 transition"
                alt="LinkedIn"
              />
            </a>

            {/* WhatsApp */}
            <a href="https://web.whatsapp.com/" target="_blank">
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
                className="w-10 h-10 hover:scale-110 transition"
                alt="WhatsApp"
              />
            </a>

            {/* Instagram */}
            <a href="https://www.instagram.com/qudsiya__shaikh/saved/" target="_blank">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                className="w-10 h-10 hover:scale-110 transition"
                alt="Instagram"
              />
            </a>

            {/* Telegram */}
            <a href="https://web.telegram.org/k/" target="_blank">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2111/2111646.png"
                className="w-10 h-10 hover:scale-110 transition"
                alt="Telegram"
              />
            </a>
          </div>
        </div>

        {/* Right - Contact Form */}
        <div className="flex-1 min-w-[300px] bg-[#161623] p-10 rounded-xl">
          <form id="contactForm" onSubmit={handleSubmit}>
            <input type="hidden" name="access_key" value="f97d211c-5116-4e05-b51a-1fe1ab104ca1" />

            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className="w-full p-3 mb-4 bg-[#0f0f1b] text-white rounded-md"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full p-3 mb-4 bg-[#0f0f1b] text-white rounded-md"
            />

            <textarea
              name="message"
              placeholder="Message"
              required
              className="w-full p-3 mb-4 bg-[#0f0f1b] text-white rounded-md"
            ></textarea>

            <button
              type="submit"
              className="w-full p-3 rounded-md bg-[#0f0f1b] text-white text-lg"
            >
              Send Message →
            </button>

            <p className="mt-4 text-[#a073ff]">{result}</p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
