"use client";
import React from "react";
import Image from "next/image";
import { FaLinkedinIn } from "react-icons/fa6";
import Link from "next/link";

export function Main() {
  return (
    <div className="py-20 flex bg-white dark:bg-black flex-col items-center justify-center">
      {/* <Image
        className="ml-0 h-48 w-48  mb-4 rounded-full object-cover transition-transform hover:scale-105 md:ml-8 md:h-48 md:w-48 md:rounded-full "
        src="/images/profile.png"
        alt="Lokesh Naga Sai"
        width={200}
        height={200}
      /> */}

      <div className="text-3xl md:text-5xl font-semibold text-gray-800 dark:text-gray-100  text-center">
        I am a Full Stack Web Developer.
      </div>
      <div className="font-extralight text-base md:text-3xl dark:text-neutral-200 py-4">
        And this, is <span className="text-gray-600 dark:text-gray-300 font-medium">Lokesh Naga Sai Darla.</span>
      </div>
      <div className="flex items-center justify-center gap-2">
        <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full"
          onClick={() => window.open('https://drive.google.com/file/d/1FvMiMRMYBWO6GWcPPZZgfJ62EfcwcxuR/view?usp=sharing', '_blank')}
        >
          <span className="flex items-center gap-2">Resume</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
        </button>
        {/* <Link
          href={'https://www.linkedin.com/in/lokeshnagasaidarla/'}
          target="_blank"
          className="bg-white text-sm hover:bg-neutral-100  rounded-full w-fit border text-black dark:text-white dark:bg-black p-3 dark:border-white/[0.2]"

        >
          <FaLinkedinIn />
        </Link> */}


      </div>
    </div>
  );
}
