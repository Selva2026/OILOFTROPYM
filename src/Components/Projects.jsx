import React from 'react';

const Projects = () => {
  return (
    <div className="bg-[url('https://res.cloudinary.com/dn3jekp3r/image/upload/c_crop,ar_1:1/v1743760270/home-bg_bvdtel.jpg')] w-full min-h-screen bg-cover bg-center px-4 py-6">
      <div className="grid grid-cols-1  md:grid-cols-3 gap-6 w-full">
        {[
          {
            img: 'https://res.cloudinary.com/dn3jekp3r/image/upload/v1743761487/FFP_q0nwoc.png',
            title: 'E-COMMERCE WEB APP',
            url: 'https://pandiecommcart.netlify.app/',
            desc: 'This app lets you browse products, view them on separate pages, and manage orders through an admin panel.',
          },
          {
            img: 'https://res.cloudinary.com/dn3jekp3r/image/upload/v1743760757/FSB_iyrtar.png',
            title: 'FLIGHT BOOKING APP',
            url: 'https://fsbskyradar.netlify.app/',
            desc: 'Book flights globally with email confirmation and admin dashboard for order tracking.',
          },
          {
            img: 'https://res.cloudinary.com/dn3jekp3r/image/upload/v1743243256/movie_uukzum.png',
            title: 'MOVIE BOOKING SITE',
            url: 'https://moviesitesearching.netlify.app/',
            desc: 'Find and book movie tickets. Admin dashboard for real-time status and ticket updates.',
          },
          {
            img: 'https://res.cloudinary.com/dn3jekp3r/image/upload/v1743761958/landing_ztxa3w.png',
            title: 'FIGMA LANDING PAGE',
            url: 'https://muthusecondlanding.netlify.app/',
            desc: 'Clean, modern landing page design using Figma and Tailwind CSS for visual impact.',
          },
          {
            img: 'https://res.cloudinary.com/dn3jekp3r/image/upload/v1743762692/landing2_ahdspc.png',
            title: 'FIGMA LANDING PAGE',
            url: 'https://muthufirsttask.netlify.app/',
            desc: 'Another modern landing page using Figma and Tailwind. Responsive and portfolio-ready!',
          },
          {
            img: 'https://res.cloudinary.com/dn3jekp3r/image/upload/v1743763141/lan_xxfsb1.png',
            title: 'BACKEND PROJECTS',
            url: 'https://muthufirsttask.netlify.app/',
            desc: 'Built using Node.js, Express.js, and MongoDB. Secured with JWT and OAuth. 🚀',
          },
        ].map((project, idx) => (
          <div key={idx} className="bg-black bg-opacity-50 p-4 rounded-lg shadow-lg">
            <img
              src={project.img}
              alt={project.title}
              className="rounded-lg w-full h-40 object-cover mb-4"
            />
            <div className="flex flex-col items-center font-bold text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <a
                  className="text-blue-900 text-sm rounded-full px-3 py-1 bg-yellow-400"
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.title}
                </a>
                <a
                  className="bg-blue-900 text-white border-2 border-white text-sm px-3 py-1 rounded-full"
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  DEMO
                </a>
              </div>
              <p className="text-white text-sm">{project.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

