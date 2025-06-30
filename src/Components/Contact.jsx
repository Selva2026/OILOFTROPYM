import React, { useState } from "react";
import axios from "axios"; // Axios import

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    contactNo: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // 🔁 Replace with your real backend URL
      const response = await axios.post("https://portfolio-pandibe.onrender.com/api/contact", formData);
      console.log("Server Response: ", response.data);
      alert("Your message has been sent!");
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Please try again later.");
    }
  };

  return (
    <div className="flex justify-center sm:items-center w-full min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-4 overflow-y-auto">
      <div className="w-full max-w-md p-6 rounded-lg shadow-lg bg-white/0 backdrop-blur-sm">
        <form onSubmit={handleSubmit} className="w-full space-y-4">
          <h2 className="text-xl font-semibold text-center mb-2 text-gray-800">
            Contact Me
          </h2>

          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md text-base bg-white/80"
          />

          <input
            type="text"
            name="company"
            placeholder="Company"
            value={formData.company}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md text-base bg-white/80"
          />

          <input
            type="tel"
            name="contactNo"
            placeholder="Contact No"
            value={formData.contactNo}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md text-base bg-white/80"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md text-base bg-white/80"
          />

          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md h-28 text-base bg-white/80"
          ></textarea>

          <button
            type="submit"
            className="w-full p-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
