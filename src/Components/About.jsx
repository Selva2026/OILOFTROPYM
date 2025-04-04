import React from 'react';
import { TypeAnimation } from 'react-type-animation';


const About = () => {
    
  return (
    <div className=' bg-[url(https://res.cloudinary.com/dn3jekp3r/image/upload/c_fill,w_1200,h_900,ar_4:3/v1743219370/my_r9aids.jpg)]  w-280 h-163' >
     <div className='flex flex-col h-163 backdrop-brightness-50 '>
        
      <h1 className='text-white  mt-68 font-bold mx-4 text-6xl'>Muthpandi<br/> ThamaraiSelvam</h1>
      
      <TypeAnimation className=' text-gray-200 font-bold mx-6 mt-4 text-4xl'
      sequence={[
     
        'I AM A FULL STACK DEVELOPER',
        1000, 
        'I AM A FRONT-END DEVELOPER',
        1000,
        'I AM A BACK-END DEVELOPER',
        1000,
        'I AM A DEVELOPER',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />

      </div>
     
    
    </div>
  )
}

export default About
