import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const About = () => {
 

  return (
    <div
      className={`
        w-full h-screen 
        bg-cover bg-center bg-no-repeat
        bg-[url('https://res.cloudinary.com/dn3jekp3r/image/upload/v1743909071/new_hwss8c.png')] 
        md:bg-[url('https://res.cloudinary.com/dn3jekp3r/image/upload/v1743219370/my_r9aids.jpg')]
      `}
    >
      {/* Dark overlay */}
      <div className="flex flex-col h-full backdrop-brightness-50 justify-center md:items-start items-center text-center md:text-left px-4 md:px-12">
        <h1 className="text-white font-bold text-5xl md:text-6xl leading-tight">
          Muthupandi <br className="hidden md:block" /> ThamaraiSelvam
        </h1>

        <TypeAnimation
          className="text-gray-200 font-bold mt-4 text-2xl md:text-4xl"
          sequence={[
            'I AM A FULL STACK DEVELOPER',
            1000,
            'I AM A FRONT-END DEVELOPER',
            1000,
            'I AM A BACK-END DEVELOPER',
            1000,
            'I AM A DEVELOPER',
            1000,
          ]}
          wrapper="span"
          speed={50}
          style={{ display: 'inline-block' }}
          repeat={Infinity}
        />
      </div>
    </div>
  );
};

export default About;
