import React from 'react';
import { FaBeer } from 'react-icons/fa';
import { FaGithub } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { BsInstagram } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";
import { GiLaptop } from "react-icons/gi";
import { Link } from 'react-router-dom';
import { SlUserFemale } from "react-icons/sl";

const Home = () => {
  return (
    <div className='bg-black  border-4 border-gray-900 border-double hover:border-gray-500'>
    <div className='bg-black w-70 items-center flex flex-col h-dvh '>
      <div className='border-4 outline-double outline-lime-600 p-2  h-32 w-32 border-white rounded-full my-4 overflow-hidden'>
        <img
          src="https://res.cloudinary.com/dn3jekp3r/image/upload/c_crop,ar_1:1/v1743220240/profile_nhtxtm.png"
          alt='Profile'
          className='rounded-full w-32 h-32 object-cover'
        />
        
      </div>
      <h1 className='text-gray-200 text-xl font-serif shadow-xl font-bold hover:text-gray-400 text-center'>MUTHUPANDI <br/> THAMARAISELVAM</h1>
     <div className='flex flex-row  gap-2 items-center my-6 justify-center'>
     <a  href='https://github.com/Selva2026?tab=repositories'  target="_blank"><FaGithub  className='text-gray-300 bg-black shadow-white hover:text-blue-700 cursor-pointer rounded-full   p-2 text-5xl'/></a>
     <a href='https://x.com/_AJAIY' target='_blank' ><FaXTwitter className='text-gray-300 mx-1 hover:text-blue-700 cursor-pointer text-3xl' /></a>
     <a href='https://www.linkedin.com/in/muthupandi-thamaraiselvam-2b0022124/' target='_blank'><TiSocialLinkedinCircular className='text-gray-300 hover:text-blue-700 cursor-pointer text-5xl' /></a>
     <a href='https://www.instagram.com/ajaiy005/' target='_blank' > <BsInstagram className='text-gray-300 mx-1 hover:text-blue-700 cursor-pointer text-3xl'/></a>
     <Link to={"/contact"} ><MdAlternateEmail  className='text-gray-300 mx-1 border-2 rounded-full p-1 w-9 h-9 hover:text-blue-700 cursor-pointer text-3xl'/></Link>
    
     </div>
      <div className='text-gray-400 flex flex-col w-full items-center my-1 gap-10 justify-evenly text-2xl'>
        <div className='flex flex-row items-center hover:text-white '>
      <IoHomeOutline  className="mr-1" />
      <Link to={"/about"} className='hover:text-white  '  >Home</Link>
      </div>
      <div className='flex flex-row items-center hover:text-white '>
        <SlUserFemale  className="mr-1" />
      <Link to={"/intro"} className='hover:text-white  '  >About</Link>
      </div>
      <div className='flex flex-row items-center hover:text-white '>
        <GiLaptop   className="mr-1" />
      <Link to={"/projects"} className='hover:text-white  '  >Projects</Link>
      </div>
      <div className='flex flex-row items-center hover:text-white '>
        <IoDocumentTextOutline   className="mr-1" />
      <Link to={"/resume"} className='hover:text-white  '  >Resume</Link>
      </div>
      <div className='flex flex-row items-center hover:text-white '>
        <FiMail   className="mr-1" />
      <Link to={"/contact"} className='hover:text-white  '  >Contact Me</Link>
      </div>
     

      </div>
      
      
      </div>



    </div>
  )
}

export default Home
