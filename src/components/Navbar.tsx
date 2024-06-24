'use client'
import Link from 'next/link';
import React, { useState, useRef, useEffect, MouseEvent } from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { GoMail } from 'react-icons/go';
import { FaTwitter } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const email = 'lokeshnagasaidarla@gmail.com'
  const navRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  // const closeMenu = (event: MouseEvent<Document>) => {
  //   if (isOpen && navRef.current && !navRef.current.contains(event.target as Node)) {
  //     setIsOpen(false);
  //   }
  // };

  // useEffect(() => {
  //   document.addEventListener('mousedown', closeMenu);

  //   return () => {
  //     document.removeEventListener('mousedown', closeMenu);
  //   };
  // }, [isOpen]);

  return (
    <nav ref={navRef} className="relative bg-white  dark:bg-black">
      <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <div className="flex">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-black dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none dark:focus:text-gray-400"
              aria-label="toggle menu"
            >
              {!isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>

        <div
          className={`absolute top-16 right-0 min-h-96 backdrop-blur-md bg-opacity-50 dark:bg-opacity-50  z-[2000] rounded-md  px-4 py-10 border dark:border-white/[0.2] transition-all duration-200 ease-in-out bg-white dark:bg-black ${isOpen ? ' opacity-100 min-w-80 ' : 'opacity-0 min-w-0 '
            }`}
        >
          <div>
            <div className="flex flex-col text-lg  gap-2">
              <Link

                className=" text-gray-700  transition-colors duration-300 transform dark:text-gray-200  mx-4"
                href="/about"
              >
                About
              </Link>
              <a
                className=" text-gray-700 transition-colors duration-300 transform dark:text-gray-200  mx-4 "
                href="#"
              >
                My Shelf
              </a>
              <a
                className=" text-gray-700 transition-colors duration-300 transform dark:text-gray-200   mx-4 "
                href="#"
              >
                My CV
              </a>
              <a
                className=" text-gray-700 transition-colors duration-300 transform dark:text-gray-200   mx-4 "
                href="#"
              >
                My projects
              </a>
            </div>
            <div className='flex flex-row text-lg gap-2 mt-2 mx-2'>

              <Link
                href={'https://www.linkedin.com/in/lokeshnagasaidarla/'}
                target="_blank"
                className=" text-sm   rounded-full w-fit  text-black dark:text-white  p-3 "

              >
                <FaLinkedinIn size={20} />

              </Link>
              <Link
                href={`https://github.com/lokeshdarla`}
                target='_blank'
                className=" text-sm  rounded-full w-fit  text-black dark:text-white  p-3 "

              >
                <FaGithub size={20} />
              </Link>
              <Link
                href={`https://github.com/lokeshdarla`}
                target='_blank'
                className=" text-sm  rounded-full w-fit  text-black dark:text-white  p-3 "

              >
                <FaTwitter size={20} />
              </Link>
              <Link
                href={`mailto:${email}`}
                className="  rounded-full w-fit  text-black dark:text-white  p-3 "

              >
                <GoMail size={20} />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
