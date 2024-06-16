import React from 'react';
import Image from 'next/image';



const AboutSection: React.FC = () => {
  const about = "Hello! I'm Lokesh Naga Sai, a computer science undergraduate at SRM University AP. I specialize in full-stack web development, crafting robust and user - friendly applications.My expertise extends from the back - end,utilizing technologies like FastAPI, to the front - end, where I design beautiful and intuitive user interfaces."
  return (
    <>
      <div id="about" className="relative  flex bg-white dark:bg-black flex-col items-center justify-center p-10">
        <Image
          className="ml-0   mb-4 rounded-full object-cover transition-transform hover:scale-105 md:ml-8 md:h-48 md:w-48 md:rounded-full "
          src="/images/profile.png"
          alt="Lokesh Naga Sai"
          width={500}
          height={500}
        />
        <div className="w-full text-black dark:text-white   text-center lg:w-1/2">
          <div className="flex flex-col items-start w-full gap-2 text-start">
            <h2>Short Bio</h2>
            <p className="  text-justify  text-light">
              {about}
            </p>
          </div>

        </div>
      </div >
    </>

  );
};

export default AboutSection;
