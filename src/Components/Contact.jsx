import React, { useState } from "react";

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
    alert("Your message has been sent!");
  };

  return (
    <div className="flex justify-center items-center w-full h-screen sm:h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="w-full h-full sm:h-auto sm:max-w-md p-6 sm:rounded-lg sm:shadow-lg bg-white flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="w-full space-y-4 max-w-md"
        >
          <h2 className="text-xl font-semibold text-center mb-2 text-gray-800">Contact Me</h2>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md text-base"
          />
          <input
            type="text"
            name="company"
            placeholder="Company"
            value={formData.company}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md text-base"
          />
          <input
            type="tel"
            name="contactNo"
            placeholder="Contact No"
            value={formData.contactNo}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md text-base"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md text-base"
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md h-28 text-base"
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
