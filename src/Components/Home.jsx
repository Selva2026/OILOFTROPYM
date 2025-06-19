import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaGithub,
  FaXTwitter,
} from 'react-icons/fa6';
import {
  IoDocumentTextOutline,
  IoHomeOutline,
} from 'react-icons/io5';
import { TiSocialLinkedinCircular } from 'react-icons/ti';
import { BsInstagram } from 'react-icons/bs';
import { MdAlternateEmail } from 'react-icons/md';
import { FiMail } from 'react-icons/fi';
import { GiLaptop } from 'react-icons/gi';
import { SlUserFemale } from 'react-icons/sl';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="bg-black border-4 border-gray-900 border-double hover:border-gray-500 relative">
      {/* Hamburger Menu (Mobile Only) */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="bg-black hover:bg-blue-800 text-white rounded-md shadow-md transition duration-200"
        >
          {menuOpen ? (
            <HiX className="text-white text-3xl" />
          ) : (
            <HiMenuAlt3 className="text-white text-3xl" /> 
          )}
      </button>
      </div>

      {/* Sidebar (Desktop) */}
      <div className="hidden md:flex bg-black w-70 items-center flex-col h-dvh">
        <ProfileSection />
        <SocialIcons />
        <NavLinks />
      </div>

      {/* Mobile Slider */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-black z-40 transform transition-transform duration-300 ease-in-out md:hidden ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-4">
          <ProfileSection />
          <SocialIcons />
          <NavLinks onClick={closeMenu} />
        </div>
      </div>
    </div>
  );
};

// --- Reusable Sections ---

const ProfileSection = () => (
  <>
    <div className="border-4 outline-double outline-lime-600 p-2 h-32 w-32 border-white rounded-full my-4 overflow-hidden mx-auto">
      <img
        src="https://res.cloudinary.com/dn3jekp3r/image/upload/c_crop,ar_1:1/v1743220240/profile_nhtxtm.png"
        alt="Profile"
        className="rounded-full w-32 h-32 object-cover"
      />
    </div>
    <h1 className="text-gray-200 text-xl font-serif shadow-xl font-bold hover:text-gray-400 text-center">
      MUTHUPANDI <br /> THAMARAISELVAM
    </h1>
  </>
);

const SocialIcons = () => (
  <div className="flex flex-row gap-2 items-center my-6 justify-center flex-wrap">
    <a href="https://github.com/Selva2026?tab=repositories" target="_blank">
      <FaGithub className="text-gray-300 bg-black hover:text-blue-700 cursor-pointer rounded-full p-2 text-4xl" />
    </a>
    <a href="https://x.com/_AJAIY" target="_blank">
      <FaXTwitter className="text-gray-300 mx-1 hover:text-blue-700 cursor-pointer text-3xl" />
    </a>
    <a
      href="https://www.linkedin.com/in/muthupandi-thamaraiselvam-2b0022124/"
      target="_blank"
    >
      <TiSocialLinkedinCircular className="text-gray-300 hover:text-blue-700 cursor-pointer text-4xl" />
    </a>
    <a href="https://www.instagram.com/ajaiy005/" target="_blank">
      <BsInstagram className="text-gray-300 mx-1 hover:text-blue-700 cursor-pointer text-3xl" />
    </a>
    <Link to="/contact">
      <MdAlternateEmail className="text-gray-300 mx-1 border-2 rounded-full p-1 w-9 h-9 hover:text-blue-700 cursor-pointer text-3xl" />
    </Link>
  </div>
);

const NavLinks = ({ onClick = () => {} }) => (
  <div className="text-gray-400 flex flex-col w-full items-center my-1 gap-6 text-2xl">
    <NavItem icon={<IoHomeOutline />} to="/about" label="Home" onClick={onClick} />
    <NavItem icon={<SlUserFemale />} to="/intro" label="About" onClick={onClick} />
    <NavItem icon={<GiLaptop />} to="/projects" label="Projects" onClick={onClick} />
    <NavItem icon={<IoDocumentTextOutline />} to="/resume" label="Resume" onClick={onClick} />
    <NavItem icon={<FiMail />} to="/contact" label="Contact Me" onClick={onClick} />
  </div>
);

const NavItem = ({ icon, to, label, onClick }) => (
  <div className="flex flex-row items-center hover:text-white" onClick={onClick}>
    <span className="mr-2">{icon}</span>
    <Link to={to} className="hover:text-white">
      {label}
    </Link>
  </div>
);

export default Home;
