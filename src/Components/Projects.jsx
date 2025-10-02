import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      img: "https://res.cloudinary.com/dn3jekp3r/image/upload/v1743761487/FFP_q0nwoc.png",
      title: "E-COMMERCE WEB APP",
      desc: "This app lets you browse products, view them on separate pages, and manage orders through an admin panel.",
      demo: "https://onlineekart.netlify.app/",
      frontend: "https://github.com/Selva2026/ECommerce_FE",
      backend: "https://github.com/Selva2026/ECommerce_BE",
    },
    {
      img: "https://res.cloudinary.com/dn3jekp3r/image/upload/v1743760757/FSB_iyrtar.png",
      title: "FLIGHT BOOKING APP",
      desc: "Book flights globally with email confirmation and admin dashboard for order tracking.",
      demo: "https://fsbskyradar.netlify.app/",
      frontend: "https://github.com/Selva2026/fsbskyradar",
      backend: "https://github.com/Selva2026/fsbbackend",
    },
    {
      img: "https://res.cloudinary.com/dn3jekp3r/image/upload/v1743243256/movie_uukzum.png",
      title: "HOSPITAL PATIENT MANAGEMENT SYSTEM",
      desc: "create a patient data and manage the patient in future. Admin dashboard for real-time patient management.",
      demo: "https://digitalhosregis.netlify.app/",
      frontend: "https://github.com/Selva2026/Hospital_Management_system",
      backend: "https://github.com/Selva2026/Hospital_Management_system_BE",
    },
    
  ];

  return (
    <div className="bg-[url('https://res.cloudinary.com/dn3jekp3r/image/upload/c_crop,ar_1:1/v1743760270/home-bg_bvdtel.jpg')] w-full min-h-screen bg-cover bg-center px-4 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            className="bg-black bg-opacity-60 p-5 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 flex flex-col"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4 }}
          >
            <img
              src={project.img}
              alt={project.title}
              className="rounded-xl w-full h-40 sm:h-48 object-cover mb-4"
            />
            <h2 className="text-lg font-bold text-white text-center mb-2">
              {project.title}
            </h2>
            <p className="text-gray-200 text-sm text-center mb-4">
              {project.desc}
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center mt-auto">
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-yellow-500 text-black px-4 py-2 rounded-full font-semibold hover:bg-yellow-400 transition"
              >
                🔗 Live Demo
              </a>
              {project.frontend && (
                <a
                  href={project.frontend}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-blue-500 transition"
                >
                  💻 Frontend
                </a>
              )}
              {project.backend && (
                <a
                  href={project.backend}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-green-500 transition"
                >
                  🖥️ Backend
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

