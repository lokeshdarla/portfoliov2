import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';

const AboutSection: React.FC = () => {
  const { theme } = useTheme();
  const about = "Full Stack Developer and Software Engineer with over 1.5 years of hands-on experience. Pre-final year student at SRM University, Andhra Pradesh, majoring in Computer Science and Engineering. Proficient in MERN, PERN, and FARM stack technologies. Played a key role in developing and implementing campus automation projects. Having decent level experience in Machine Learning. Currently working as Software Engineer in Sequeenze Technologies";

  return (
    <div id="about" className="relative flex bg-white dark:bg-black flex-col gap-5 items-center justify-center p-10">
      <div className="relative w-48 h-48 mb-4 ">
        <Image
          src="/images/profile.jpg"
          alt="Lokesh Naga Sai"
          layout="fill"
          objectFit="cover"
          className="rounded-full shadow-lg transition-transform hover:scale-105"
        />
      </div>
      <div className="w-full text-black mb-4 dark:text-white text-center lg:w-2/3">
        <div className="flex flex-col items-start w-full gap-4 text-start">
          <p className='leading-relaxed text-lg dark:text-gray-100 text-gray-600 '>Hello! I'm Lokesh Naga Sai Darla based in Amaravati, India 🇮🇳. I'm an undergraduate student studying CSE at SRM University AP 🎓 and a Software Engineer Intern at Sequeenze Technologies 🧑🏻‍💻.</p>
          <p className="text-justify leading-relaxed dark:text-gray-100 text-gray-600 text-lg">
            {about}
          </p>
        </div>
      </div>
      <div className='lg:w-2/3'>
        <h2 className='font-semibold mb-3 text-2xl dark:text-gray-50'>Experience</h2>
        <ol className="relative border-s border-gray-200 dark:border-gray-700 ">
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-800 dark:text-gray-200">April 2024 - Present</time>
            <div className="mr-6 mt-4 h-12 w-40 relative">
              <Image
                draggable={false}
                src={`/images/seequenze-${theme === "dark" ? "light" : "dark"}.png`}
                alt="Seequenze Technologies"
                layout="fill"
                objectFit="contain"
              />

            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Software Engineer Intern</h3>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Worked Worked in various teams including Java, AI, and MERN stack teams. Contributed to the <Link className='text-blue-600 underline' href={'https://platui.com/'}>PlatUI</Link> project, converting Figma designs into code.</p>
          </li>
          <li className="ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none  text-gray-800 dark:text-gray-200">Febraury 2023 - Present</time>
            <div className="mr-6 my-2  flex  items-center">
              <Image
                draggable={false}
                src={`/images/ntl.webp`}
                alt="Next Tech Lab"
                height={400}
                width={400}
                className=' h-9 w-auto'
                objectFit="contain"
              />
              <h3 className='dark:text-gray-50 mr-2 text-xl font-medium'>Next Tech Lab</h3>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Core Member</h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">Contributed to web development and automation solutions using MERN Stack and FastAPI.Rest API's.Automated discord bots</p>
          </li>
        </ol>
      </div>

    </div>
  );
};

export default AboutSection;
