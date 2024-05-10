import React from 'react';
import { Code, Coffee, ArrowRightSquare } from 'lucide-react';
import { FaPython, FaCss3Alt, FaHtml5, FaReact } from 'react-icons/fa';
import { SiTailwindcss, SiFastapi } from 'react-icons/si';
import { IoLogoJavascript } from 'react-icons/io5';
import { BiLogoPostgresql } from 'react-icons/bi';

interface Skill {
  id: number;
  icon: React.ReactNode;
  link: string;
}

const skills: Skill[] = [
  {
    id: 1,
    icon: <FaHtml5 className="h-8 w-8 text-[#FB8B24]" />,
    link: 'https://notesfordev.notion.site/HTML-982dc837c598443fb80a4cc08f1b8cc4',
  },
  {
    id: 2,
    icon: <FaCss3Alt className="h-8 w-8 text-[#3081D0]" />,
    link: '',
  },
  {
    id: 3,
    icon: <IoLogoJavascript className="h-8 w-8 text-[#FFD600]" />,
    link: '',
  },
  {
    id: 4,
    icon: <FaPython className="h-8 w-8 text-[#38419D]" />,
    link: '',
  },
  {
    id: 5,
    icon: <SiTailwindcss className="h-8 w-8 text-[#7BD3EA]" />,
    link: '',
  },
  {
    id: 6,
    icon: <FaReact className="h-8 w-8 text-[#7BD3EA]" />,
    link: '',
  },
  {
    id: 7,
    icon: <SiFastapi className="h-8 w-8 text-[#29ADB2]" />,
    link: '',
  },
  {
    id: 8,
    icon: <BiLogoPostgresql className="h-8 w-8 text-[#0766AD]" />,
    link: '',
  },
];

const AboutSection: React.FC = () => {
  const about = "Hello! I'm Lokesh Naga Sai, a computer science undergraduate at SRM University AP. I specialize in full-stack web development, crafting robust and user - friendly applications.My expertise extends from the back - end,utilizing technologies like FastAPI, to the front - end, where I design beautiful and intuitive user interfaces."
  return (
    <>
      <div id="about" className="relative flex flex-col items-center justify-center p-10">

        <div className="w-full mb-8 text-center lg:w-1/2">
          <div className="flex flex-col items-center w-full gap-4 text-center">
            <p className="m-4 text-xl text-justify text-black font-light">
              {about}

            </p>


            <div className="flex gap-4 mb-4" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              <p>I turn</p>
              <p>
                <Coffee />
              </p>
              <p>Coffee</p>
              <p>
                <ArrowRightSquare />
              </p>
              <p>
                <Code />
              </p>
              <p>Code</p>
            </div>
          </div>
          <h3 className="mb-2 text-3xl font-semibold">Skills</h3>
          <div className="flex flex-wrap justify-center gap-4 mt-5">
            {skills.map((skill) => (
              <a
                href={skill.link}
                target="_blank"
                rel="noopener noreferrer"
                key={skill.id}
                className="p-1 transition-shadow duration-300 ease-in-out bg-white border-gray-200 rounded-full shadow-sm hover:shadow-lg"
              >
                {skill.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>

  );
};

export default AboutSection;
