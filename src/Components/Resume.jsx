import React from "react";

const Resume = () => {
  const resumePath = "https://res.cloudinary.com/dn3jekp3r/image/upload/v1743783155/MERN_CV_MP_d5ss8y.pdf"; 

  return (
    <div className="flex flex-col items-center justify-center  p-4 bg-gray-100">
      <h1 className="text-2xl text-blue-900 font-semibold mb-1">MY RESUME</h1>
      <a 
        href={resumePath} 
        download="My_Resume.pdf"
        className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Download Resume
      </a>
      
    
      <iframe 
        src={resumePath} 
        width="1000" 
        height="450" 
        className="border mt-2 rounded-lg shadow-md"
        title="Resume"
      ></iframe>

     
      <a 
        href={resumePath} 
        download="My_Resume.pdf"
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Download Resume
      </a>
    </div>
  );
};

export default Resume;
