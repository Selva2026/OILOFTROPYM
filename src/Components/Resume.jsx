import React from "react";

const Resume = () => {
  const resumePath =
    "https://drive.google.com/file/d/11RgAI_EpK-oFzsVQEgvuaiVOvR6-5Ejr/view?usp=drivesdk";

  return (
    <div className="flex flex-col items-center justify-center p-4 bg-gray-100">
      <h1 className="text-2xl sm:text-3xl text-blue-900 font-semibold mb-2">
        MY RESUME
      </h1>

      <a
        href={resumePath}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Download Resume
      </a>

      {/* Responsive Resume Preview */}
      <div className="w-full mt-4 flex justify-center px-2">
        <img
          src="https://res.cloudinary.com/dn3jekp3r/image/upload/v1759430653/Muthupandi_Resume_MERN_page-0001_fujkum.jpg"
          alt="Resume Preview"
          className="rounded-lg shadow-md w-full max-w-[1000px] h-auto"
        />
      </div>

      <a
        href={resumePath}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Download Resume
      </a>
    </div>
  );
};

export default Resume;

