"use client";
import React from "react";
import Image from "next/image";

export function AuroraBackgroundDemo() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <Image
        className="ml-0 h-48 w-48  mb-4 rounded-full object-cover transition-transform hover:scale-105 md:ml-8 md:h-48 md:w-48 md:rounded-full "
        src="/images/profile.png"
        alt="Lokesh Naga Sai"
        width={200}
        height={200}
      />

      <div className="text-3xl md:text-5xl font-semibold text-gray-800  text-center">
        I am a Full Stack Web Developer.
      </div>
      <div className="font-extralight text-base md:text-3xl dark:text-neutral-200 py-4">
        And this, is <span className="text-gray-600 font-medium">Lokesh Naga Sai Darla.</span>
      </div>
      <div className="flex items-center justify-center gap-2">
        <button className="bg-black text-sm hover:bg-gray-900 dark:bg-white rounded-full w-fit border text-white dark:text-black px-6 py-2">
          Connect
        </button>
        <button
          className="bg-white text-sm hover:bg-neutral-100 dark:bg-white rounded-full w-fit border text-black dark:text-black px-6 py-2"
          onClick={() => window.open('https://drive.google.com/file/d/1FvMiMRMYBWO6GWcPPZZgfJ62EfcwcxuR/view?usp=sharing', '_blank')}
        >
          Resume
        </button>


      </div>
    </div>
  );
}
