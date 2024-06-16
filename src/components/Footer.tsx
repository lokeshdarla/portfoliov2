import React from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { GoMail } from "react-icons/go";
import Link from 'next/link'

function Footer() {
  const email = 'lokeshnagasaidarla@gmail.com'
  return (
    <footer className="bg-white dark:bg-black my-auto">
      <div className=" w-full mx-auto max-w-screen-xl  flex gap-2 lg:flex-row flex-col  items-center  justify-between p-4 py-6 lg:py-8">
        <Link href={'/'} className="text-sm text-gray-500 sm:text-center dark:text-gray-400">@ lokeshnagasaidarla
        </Link>
        <div className="flex ">
          <Link
            href={`https://github.com/lokeshdarla`}
            target='_blank'
            className="bg-white text-sm hover:bg-neutral-100  rounded-full w-fit  text-black dark:text-white dark:bg-black p-3 "

          >
            <FaGithub size={20} />
          </Link>
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
        </div>
      </div>
    </footer>

  )
}

export default Footer;
