import React from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { GoMail } from "react-icons/go";
import Link from 'next/link'
import { RxTextAlignRight } from "react-icons/rx";
import Navbar from './Navbar';

const Header = () => {
  const email = 'lokeshnagasaidarla@gmail.com'
  return (
    <header className="bg-white dark:bg-black my-auto">
      <div className=" w-full mx-auto max-w-screen-xl  flex   items-center  justify-between p-4 py-6 lg:py-8">
        <Link href={'/'} className="text-sm text-gray-500 sm:text-center dark:text-gray-400">@ lokeshnagasaidarla
        </Link>
        <div className="flex items-center gap-2 text-black dark:text-white">
          {/* <Link href={'/about'} className=''>
            About
          </Link> */}

          <Link
            href={'https://www.linkedin.com/in/lokeshnagasaidarla/'}
            target="_blank"
            className="bg-white text-sm hover:bg-neutral-100  rounded-full w-fit  text-black dark:text-white dark:bg-black p-3 "

          >
            <FaLinkedinIn size={20} />

          </Link>

          <Link
            href={`mailto:${email}`}
            className="bg-white text-sm hover:bg-neutral-100  rounded-full w-fit  text-black dark:text-white dark:bg-black p-3 "

          >
            <GoMail size={20} />
          </Link>
          <Navbar />
        </div>
      </div>
    </header>
  )
}

export default Header
