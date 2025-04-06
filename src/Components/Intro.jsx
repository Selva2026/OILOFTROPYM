import React from 'react';

const Intro = () => {
  return (
    <div className="bg-[url('https://res.cloudinary.com/dn3jekp3r/image/upload/c_crop,ar_1:1/v1743760270/home-bg_bvdtel.jpg')] bg-cover bg-center min-h-screen w-full p-4 md:p-12 flex flex-col justify-center">
      
      <h1 className="text-3xl text-white ml-5  font-bold mb-2">About</h1>
      <div className="bg-blue-700 w-16 h-1 ml-5 mb-6"></div>

      <p className="text-white text-base md:text-xl mb-6 leading-relaxed">
        Versatile and solution-oriented Full Stack Developer with a passion for crafting scalable, high-performance websites. With a strong foundation in architecture, server optimization, and user experience, I thrive on solving complex challenges and building impactful digital solutions.
      </p>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        {/* Profile Image */}
        <img
          className="rounded-xl h-60 w-60 md:h-72 md:w-80 object-cover shadow-lg"
          src="https://res.cloudinary.com/dn3jekp3r/image/upload/v1743229800/IMG_20210617_131352_rxvli2.jpg"
          alt="Profile"
        />

        {/* Info Card */}
        <div className="flex flex-col justify-center items-center text-white border-2 border-dashed rounded-xl p-6 w-full md:w-[720px] text-center text-lg md:text-2xl font-bold bg-black/40 backdrop-blur-sm shadow-xl mt-6 md:mt-0">
          <h1 className="mb-1">MUTHUPANDI THAMARAISELVAM</h1>
          <h1 className="mb-1">FRESHER</h1>
          <h1 className="mb-1">BACHELOR OF ENGINEERING</h1>
          <h1 className="mb-4">MERN FULL STACK DEVELOPMENT</h1>

          {/* Skills */}
          <div className="flex flex-wrap justify-center gap-2 text-sm md:text-lg text-lime-400">
            {[
              'NODE.JS', 'MONGO DB', 'REACT.JS', 'JAVASCRIPT',
              'TAILWIND', 'POSTMAN', 'EXPRESS JS', 'GITHUB'
            ].map((tech, index) => (
              <span
                key={index}
                className="bg-gradient-to-br from-purple-500 to-blue-900 border border-blue-500 rounded-full px-4 py-2 font-semibold"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
