import React from "react";
import { motion } from "framer-motion";

const Intro = () => {
  const skills = [
    "NODE.JS",
    "MONGO DB",
    "REACT.JS",
    "JAVASCRIPT",
    "TAILWIND",
    "POSTMAN",
    "EXPRESS JS",
    "GITHUB",
  ];

  return (
    <div className="bg-[url('https://res.cloudinary.com/dn3jekp3r/image/upload/c_crop,ar_1:1/v1743760270/home-bg_bvdtel.jpg')] bg-cover bg-center min-h-screen w-full p-4 md:p-12 flex flex-col justify-center">
      {/* Title */}
      <motion.h1
        className="text-3xl text-white ml-7 font-bold mb-2"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        About
      </motion.h1>
      <motion.div
        className="bg-blue-700 w-16 h-1 ml-7 mb-6"
        initial={{ width: 0 }}
        animate={{ width: 64 }}
        transition={{ duration: 0.8 }}
      ></motion.div>

      {/* Intro Paragraph */}
      <motion.p
        className="text-white text-base md:text-xl mb-6 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Versatile and solution-oriented Full Stack Developer with a passion for
        crafting scalable, high-performance websites. With a strong foundation
        in architecture, server optimization, and user experience, I thrive on
        solving complex challenges and building impactful digital solutions.
      </motion.p>

      {/* Layout */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        {/* Profile Image */}
        <motion.img
          className="rounded-xl h-60 w-60 md:h-72 md:w-80 object-cover shadow-xl"
          src="https://res.cloudinary.com/dn3jekp3r/image/upload/v1743229800/IMG_20210617_131352_rxvli2.jpg"
          alt="Profile"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />

        {/* Info Card */}
        <motion.div
          className="flex flex-col justify-center items-center text-white border-2 border-dashed rounded-xl p-6 w-full md:w-[720px] text-center text-lg md:text-2xl font-bold bg-black/40 backdrop-blur-sm shadow-xl mt-6 md:mt-0"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h1 className="mb-1">MUTHUPANDI THAMARAISELVAM</h1>
       
          <h1 className="mb-4">MERN FULL STACK </h1>

          {/* Skills Animation */}
          <div className="flex flex-wrap justify-center gap-2 text-sm md:text-lg text-lime-400">
            {skills.map((tech, index) => (
              <motion.span
                key={index}
                className="bg-gradient-to-br from-purple-500 to-blue-900 border border-blue-500 rounded-full px-4 py-2 font-semibold cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.2 + index * 0.15,
                  type: "spring",
                  stiffness: 120,
                }}
                whileHover={{ scale: 1.1, boxShadow: "0px 0px 15px #22d3ee" }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Intro;


