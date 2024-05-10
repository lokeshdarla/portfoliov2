import React from 'react'
import { FaTwitter, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { AuroraBackground } from './ui/aurora-background'

const SocialMediaLinks = [
  {
    id: 1,
    name: 'Twitter',
    icon: <FaTwitter className="h-6 w-6 text-[#1DA1F2]" />,
    link: 'https://twitter.com/LokeshDarla1011',
  },
  {
    id: 2,
    name: 'Github',
    icon: <FaGithub className="h-6 w-6 text-[#333]" />,
    link: 'https://github.com/lokeshdarla',
  },
  {
    id: 3,
    name: 'Instagram',
    icon: <FaInstagram className="h-6 w-6 text-[#C13584]" />,
    link: 'https://www.instagram.com/_lokesh_darla/',
  },
  {
    id: 4,
    name: 'Linkedin',
    icon: <FaLinkedin className="h-6 w-6 text-[#0077B5]" />,
    link: 'https://www.linkedin.com/in/lokesh-naga-sai-darla/',
  },
]
function ContactSection() {
  const email = 'lokeshnagasaidarla@gmail.com'
  return (
    <section className="flex  min-h-screen w-full relative z-10 flex-col items-center justify-center px-2" id="contact">
      <div className="px-4 py-8">
        <h2 className="font-plus-jakarta-sans scroll-m-20 text-center text-3xl font-bold">Get in touch</h2>
      </div>

      <div className="mt-10 flex h-full flex-col items-center justify-center space-y-3">
        <span className="font-plus-jakarta-sans max-w-xl scroll-m-20 text-center text-xl font-normal text-gray-600">
          My inbox is always open. Whether for a potential project or just to say Hello, I&apos;ll try my best to answer your email!
        </span>
        <a href={`mailto:${email}`} className="font-plus-jakarta-sans text-xl font-medium text-gray-900">
          {email}
        </a>
      </div>
    </section>

  )
}

export default ContactSection
