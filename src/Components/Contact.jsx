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
    <div className="flex justify-center w-full items-center h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
       <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-xl font-semibold text-center mb-4">Contact Me</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input 
            type="text" 
            name="name" 
            placeholder="Name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <input 
            type="text" 
            name="company" 
            placeholder="Company" 
            value={formData.company} 
            onChange={handleChange} 
            required 
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <input 
            type="tel" 
            name="contactNo" 
            placeholder="Contact No" 
            value={formData.contactNo} 
            onChange={handleChange} 
            required 
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <textarea 
            name="message" 
            placeholder="Message" 
            value={formData.message} 
            onChange={handleChange} 
            required 
            className="w-full p-2 border border-gray-300 rounded-md h-24"
          ></textarea>
          <button 
            type="submit" 
            className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
