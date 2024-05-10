'use client'
import React, { useState } from 'react'
import BlogCard from './BlogCard'

interface BlogSectionProps { }

const BlogSection: React.FC<BlogSectionProps> = () => {
  const sections: string[] = ['Latest', 'Coding', 'Tutorials', 'Stories']
  const [activeSection, setActiveSection] = useState<string>('Latest')

  const handleSectionClick = (section: string) => {
    setActiveSection(section)
  }

  return (
    <div id="blog" className="flex h-screen justify-center md:items-start">
      <div className="relative flex flex-col items-start justify-center">
        <div className="max-w-md px-5 py-8">
          <h1 className="text-2xl font-bold text-gray-600">I write, sometimes</h1>
          <p className="mt-2 text-gray-600">About Tech, DSA, learning, tutorials, and life.</p>
        </div>
        <div className="flex items-start justify-start whitespace-nowrap border-b border-gray-200 px-5 dark:border-gray-700">
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => handleSectionClick(section)}
              className={`-mb-px inline-flex h-10 items-center px-2 py-2 text-center hover:border-b-2 ${activeSection === section
                ? '-px-1 border-b-2 border-blue-500 bg-transparent text-blue-600 sm:px-4 dark:border-blue-400 dark:text-blue-300'
                : '-px-1 cursor-base whitespace-nowrap border-b-2 border-transparent bg-transparent text-gray-700 hover:border-gray-400 focus:outline-none sm:px-4 dark:text-white'
                }`}
            >
              <span className="mx-1 text-sm sm:text-base">{section}</span>
            </button>
          ))}
        </div>
        <BlogCard category={activeSection} />
      </div>
    </div>
  )
}

export default BlogSection
