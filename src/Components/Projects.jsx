import React from 'react'


const Projects = () => {


  return (
    <div className=' bg-[url(https://res.cloudinary.com/dn3jekp3r/image/upload/c_crop,ar_1:1/v1743760270/home-bg_bvdtel.jpg)]  w-280 h-165'>
      {/* <h1 className='m-4 fixed text-3xl mt-2 font-bold'>Projects</h1>
      <h1 className='bg-blue-700 fixed w-32 mt-12 m-4 h-1'></h1> */}
      <div className='grid grid-cols-3  ml-8 w-250 m-1 gap-4 h-dvh '>
      <div className=' h-6  '>
        <img src='https://res.cloudinary.com/dn3jekp3r/image/upload/v1743761487/FFP_q0nwoc.png'></img>
        <div className='flex flex-col items-center justify-center font-bold '>
          <div className='flex  items-center  mt-2'>
            <a  className='text-blue-900 text-sm rounded-full w-42 text-center font-bold bg-yellow-400' href='https://shoppingrouter.netlify.app/' target="_blank">E-COMMERCE WEB APP</a> 
             <a
             className='bg-blue-900 border-2 border-white text-white font-bold  w-18 text-center ml-2 rounded-full'
             href='https://shoppingrouter.netlify.app/' target="_blank">DEMO</a>
             </div>
            <p className='text-white text-sm text-center'>This app makes you to search the products and check it in separate page . Also this contains admin page for manage the products and status of the order </p>
        </div>
        </div>
        <div className=' h-6'>
        <img src='https://res.cloudinary.com/dn3jekp3r/image/upload/v1743760757/FSB_iyrtar.png'></img>
        <div className='flex flex-col items-center justify-center font-bold '>
           
        <div className='flex  items-center  mt-2'>
            <a  className='text-blue-900 rounded-full text-sm w-42 text-center font-bold bg-yellow-400'  href='https://fsbskyradar.netlify.app/' target="_blank">FLIGHT BOOKING APP</a> 
             <a
             className='bg-blue-900 border-2 border-white  text-white font-bold  w-18 text-center ml-2 rounded-full'
             href='https://fsbskyradar.netlify.app/' target="_blank">DEMO</a>
             </div>
          
            <p className='text-white text-sm text-center'>This platform for search the flight worldwide and book the seat with mail confirmation. Also it includes admin dashboard for change the status of the ticket</p>
        </div>
        </div>
        <div className=' h-6'>
        <img src='https://res.cloudinary.com/dn3jekp3r/image/upload/v1743243256/movie_uukzum.png'></img>
        <div className='flex justify-center flex-col items-center font-bold '>
           
        <div className='flex  items-center  mt-2'>
            <a  className='text-blue-900 text-sm rounded-full w-42 text-center font-bold bg-yellow-400' href='https://moviesitesearching.netlify.app/' target="_blank">MOVIE BOOKING SITE</a> 
             <a
             className='bg-blue-900 border-2 border-white  text-white font-bold  w-18 text-center ml-2 rounded-full'
             href='https://moviesitesearching.netlify.app/' target="_blank">DEMO</a>
             </div>
           
          
            <p className='text-white text-sm text-center'>This platform for search the flight worldwide and book the seat with mail confirmation. Also it includes admin dashboard for change the status of the ticket</p>
       
        </div>
        </div>
        <div className=' h-6'>
        <img src='https://res.cloudinary.com/dn3jekp3r/image/upload/v1743761958/landing_ztxa3w.png'></img>
        <div className='flex justify-center flex-col items-center font-bold '>
           
        <div className='flex  items-center  mt-2'>
            <a  className='text-blue-900 text-sm rounded-full w-42 text-center font-bold bg-yellow-400' href='https://muthusecondlanding.netlify.app/' target="_blank">FIGMA LANDING PAGE</a> 
             <a
             className='bg-blue-900 border-2 border-white  text-white font-bold  w-18 text-center ml-2 rounded-full'
             href='https://muthusecondlanding.netlify.app/' target="_blank">DEMO</a>
             </div>
           
          
            <p className='text-white text-sm text-center'>Experienced in designing Figma landing pages with a sleek, modern touch, leveraging Tailwind CSS for clean, responsive layouts. I craft visually appealing and user-friendly pages that make a lasting impression. 🚀</p>
       
        </div>
        </div>
        <div className=' h-6'>
        <img src='https://res.cloudinary.com/dn3jekp3r/image/upload/v1743762692/landing2_ahdspc.png'></img>
        <div className='flex justify-center flex-col items-center font-bold '>
           
        <div className='flex items-center   mt-2'>
            <a  className='text-blue-900 text-sm rounded-full w-42 text-center font-bold bg-yellow-400' href='https://muthufirsttask.netlify.app/' target="_blank">FIGMA LANDING PAGE</a> 
             <a
             className='bg-blue-900 border-2 border-white  text-white font-bold  w-18 text-center ml-2 rounded-full'
             href='https://muthufirsttask.netlify.app/' target="_blank">DEMO</a>
             </div>
           

            <p className='text-white text-sm text-center'>Skilled in designing Figma landing pages with Tailwind CSS for a modern, responsive look. I create sleek, user-friendly resume and portfolio pages that leave a lasting impact.  🚀 🚀</p>
       
        </div>
        </div>
        <div className=' h-6'>
        <img src='https://res.cloudinary.com/dn3jekp3r/image/upload/v1743763141/lan_xxfsb1.png'></img>
        <div className='flex justify-center flex-col items-center font-bold '>
        
        <div className='flex items-center mt-2'>
            <a className='text-blue-900 rounded-full w-42 text-center  bg-yellow-400'  href='https://muthufirsttask.netlify.app/' target="_blank">BackEnd Projects</a> 
             <a
             className='bg-blue-900 border-2 border-white  text-white  w-18 text-center ml-2 rounded-full'
             href='https://muthufirsttask.netlify.app/' target="_blank">DEMO</a>
             </div>
        
         
            <p className='text-white text-sm text-center'>Experienced backend developer skilled in Node.js, Express.js, MongoDB, and Postman for building scalable and efficient web applications. Proficient in API development, authentication (JWT, OAuth) to ensure secure operations. 🚀</p>
       
        </div>
        </div>

      </div>
    </div>
  )
}

export default Projects
